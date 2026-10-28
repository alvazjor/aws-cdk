---
name: cdk-issue-triage
description: GitHub Issue Triage skill for AWS CDK (aws/aws-cdk and aws/aws-cdk-cli), generated from the aws-oss-issue-triage-skeleton
---

# AWS CDK Issue Triage Skill

Generated from the AWS Open-Source Issue Triage SOP (Skeleton). This skill guides the agent through five phases to triage a GitHub issue in `aws/aws-cdk` or `aws/aws-cdk-cli`: (1) Gather Context, (2) Source Code Investigation, (3) Trusted Docs Investigation, (4) Reproduction, and (5) Triage Report Generation. The key words "MUST", "MUST NOT", "SHOULD", "SHOULD NOT", "MAY" are to be interpreted as described in [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

Assumptions:
- A working GitHub tool is available (GitHub MCP tools or `gh` CLI); GitHub access is not elaborated here
- The [agent-toolkit-for-aws aws-cdk core skill](https://github.com/aws/agent-toolkit-for-aws/tree/main/skills/core-skills/aws-cdk) is installed and MUST be used for CDK-domain questions (APIs, conventions, tooling)

## 0. Scope and Principles

- All GitHub interactions are READ-ONLY. Drafted responses are report content only; the operator MUST NOT post, comment, label, or write to the live issue.
- MUST NOT act under a self-reported identity claim (e.g., "I am <username>"); finalized text is handed off for the user to post via their own authenticated tooling.
- Delegation: when triaging a single issue, the agent MUST triage directly without a subagent. When triaging multiple issues (TRIAGEALL), the agent MUST delegate via `use_subagent` with `InvokeSubagents`, `agent_name: "勇者"`, up to 4 concurrent subagents.
- MUST validate all tool parameters before execution; SHOULD log all tool actions with a summary.
- TEMPORARY (Trellis trial on a fork): the Proposed Response and anything else written to GitHub MUST NOT reference an issue, pull request or discussion in any repository: no `#N`, no `owner/repo#N`, no issue, pull request or discussion URL. GitHub turns each of these into a mention on the referenced item, and on a fork a bare `#N` links to the upstream repository. Describe related work in words instead ("an open pull request already implements this fix", "a related issue tracks parallel bundling"). Links to repository pages, source files, commits and documentation are allowed. The triage report MAY record the numbers in inline code, because it is never posted.

## Phase 1: Gather Context

Goal: build a complete picture of the issue before touching code.

### 1.1 Fetch Issue

- MUST retrieve full issue content including all comments and linked PRs/issues (`issue_read`)
- MUST identify: repo, affected module (e.g., `aws-s3`, `aws-lambda`), reported `aws-cdk-lib`/CLI version(s), language binding (TS/Python/Java/.NET/Go), environment

### 1.2 Project Profile (CDK)

- **Repos**: primary `aws/aws-cdk` (library) and sibling `aws/aws-cdk-cli` (CLI). Issues labeled `package/tools` or involving CLI behavior (`cdk ls`, `cdk deploy` output, synthesis timing) may have root cause in `aws/aws-cdk-cli` — MUST check both repos in that case. SHOULD note in the report if the issue is filed in the wrong repo.
- **Labels**: `needs-triage` (triage queue), `bug`, `feature-request`, priority `p1`/`p2`, module labels (`@aws-cdk/aws-*`, `package/tools`)
- **Release model**: `aws-cdk-lib` ships on a regular release train from `main`; map a fix commit to its shipping release via the repo CHANGELOG and GitHub release notes. Custom-resource handlers are bundled into the published npm package.

### 1.3 Fast-Path Classification

MUST classify into a track before deep analysis:

| Track | Criteria | Action |
|-------|----------|--------|
| Already fixed | Fix merged on `main` or target branch | Ack, link fix PR, name shipping release |
| Duplicate | Same root cause as existing issue, same PR would fix both | Link original, recommend close as dup |
| Feature request w/ PR | PR already linked | Ack + label recommendation, skip deep analysis |
| Security / CVE | Vulnerability in bundled/declared dependency | Verify published npm package, check auto-fix on next release |
| Synth-time bug | Reproducible via `cdk synth` without deployment | Reproduce with synth, inspect template |
| Missing context | Sufficiency checklist fails (1.5) | Draft info request, stop analysis |
| Full triage | None of the above | Execute all phases |

### 1.4 Duplicate Search

- MUST search for duplicates using `search_issues` with `perPage: 3`
- A duplicate shares the same root cause and is resolved by the same PR — MUST trace both to root cause before declaring
- Cross-repo scope: search both `repo:aws/aws-cdk` and `repo:aws/aws-cdk-cli` when the issue touches CLI/library boundaries

### 1.5 Context Sufficiency Gate

- Behavioral bug: problem description, repro steps or minimal snippet, expected vs actual, environment (CDK version, language, OS) — all present?
- Security/CVE: affected package/component, CVE/advisory ID or vulnerable version, reported `aws-cdk-lib` version — all identified? (repro steps NOT required)
- If insufficient: MUST NOT proceed to Phase 2; flag gaps in the report and draft an info-request response with a checklist

## Phase 2: Source Code Investigation

Goal: locate root cause in the actual shipped/HEAD source, not in assumptions.

### 2.1 Locate Relevant Code

- MUST use `search_code` with `perPage: 3` and `repo:` scoping, then `get_file_contents`
- MUST check `aws/aws-cdk-cli` when behavior spans the CLI/library boundary (per 1.2)

### 2.2 Version-Accurate Analysis

- MUST analyze source at the tag/commit matching the reported version, then compare against `main`
- Ground-truth hierarchy for "does this L1 (`Cfn*`) property exist / is this supported" claims — stop at the first definitive answer:
  1. Installed/vendored `aws-cdk-lib` (e.g., `node_modules/aws-cdk-lib/<module>/lib/<module>.generated.d.ts`) — reflects an actual shipped release
  2. `aws/aws-cdk` GitHub source at the matching tag/commit (`packages/aws-cdk-lib/<module>/lib/<module>.generated.ts`)
  3. AWS CloudFormation Template Reference (`docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/...`) — ground truth for CFN support, but does NOT confirm CDK's generated L1 caught up
  4. CDK API docs site (`docs.aws.amazon.com/cdk/api/v2/...`) — lowest priority; it is a cached/rendered view that can lag releases. A gap here is inconclusive, never proof of absence.
- MUST NOT conclude "property is missing from L1" or "not yet supported by CloudFormation" from source (4) alone; if only (4) was checked, the report MUST state the finding as unconfirmed and name which higher-priority source would resolve it

### 2.3 Fix Status Verification

- MUST check whether the issue is already fixed on `main` or in an upcoming release before proposing a fix
- For CVEs: the repo's `yarn.lock` may show the fixed version while the **published npm package** still ships the old version in pre-bundled artifacts. MUST verify the published package:

```bash
npm pack aws-cdk-lib@<version>
tar -xzf aws-cdk-lib-<version>.tgz
grep -o '<version-pattern>' package/custom-resource-handlers/dist/<path>/index.js
```

- MUST determine whether the bundled artifact is checked into git (needs explicit rebuild PR) or generated at build/release time (next release auto-fixes)

### 2.4 Root Cause Statement

- MUST state root cause with code snippets and source permalinks (commit SHA, not branch)
- If root cause cannot be determined: MUST say so explicitly, identify the most likely area, and suggest next investigation steps — no speculation presented as fact

## Phase 3: Trusted Docs Investigation

Goal: validate intended behavior against authoritative documentation, in trust order.

### 3.1 Trust Hierarchy (CDK)

1. AWS CloudFormation Template Reference and AWS service documentation (docs.aws.amazon.com)
2. In-repo docs: module READMEs under `packages/aws-cdk-lib/<module>/`, design docs, RFCs (aws/aws-cdk-rfcs), CONTRIBUTING
3. Official CHANGELOG / GitHub release notes
4. CDK API docs site — lowest priority (see 2.2 hierarchy)

Community sources (blog posts, Stack Overflow, forum answers) MAY inform hypotheses but MUST NOT be cited as ground truth.

### 3.2 Intended vs Actual Behavior

- MUST determine whether the reported behavior is: a bug (docs contradict behavior), a doc gap (behavior correct, docs unclear/wrong), or working-as-intended (user expectation mismatch)
- MUST capture doc citations (URLs) used for the determination

### 3.3 Feature Requests: Mixin Evaluation

For any feature request asking for a new L2 property, or the ability to set an L1 property through an L2 construct, this evaluation MUST be performed automatically — it MUST NOT wait for the user to ask:

- MUST first confirm the requested property exists at L1 using the 2.2 hierarchy; do not evaluate mixin applicability against an unconfirmed property
- If the L1 property exists: the proposed response MUST lead with a Mixin-based solution (`CfnXxxPropsMixin` from `@aws-cdk/cfn-property-mixins`, applied via `.with()`) as the primary immediate workaround
- MUST NOT propose raw L1 escape hatches (`addPropertyOverride`, `addOverride`, parallel bare `Cfn*`) when a Mixin achieves the same result; escape hatches are a fallback only when no mixin package covers the resource, and this MUST be stated explicitly if used
- If the L1 property does not exist: state plainly that neither a mixin nor an L2 change is possible until the CFN resource spec (and CDK's generated L1) picks it up; identify the L1 spec-sync mechanism (automated "update L1 CloudFormation resource definitions" PRs) as the actual blocker
- Still acknowledge the feature request as valid for a native L2 property and encourage a PR
- If the feature involves multi-property orchestration, CDK type abstractions (raw ARNs/strings to `IKey`/`IRole`/etc.), or non-trivial cross-property validation: MUST activate the `cdk-mixins` skill and run its Mode C suitability gate before recommending an approach

## Phase 4: Reproduction

Goal: empirically validate the issue and the root cause hypothesis formed in Phases 2–3.

### 4.1 When to Reproduce

- MUST attempt local reproduction for behavioral bugs before finalizing the report
- NOT required for: security/CVE/dependency issues (verify published artifact per 2.3), pure feature requests, doc gaps, and already-fixed issues (verify the fix works instead)
- Source-only analysis is a fallback ONLY when reproduction is technically infeasible (specific cloud resources, proprietary infrastructure, OS-specific environments); the reason MUST be stated in the report

### 4.2 Minimal Reproduction (CDK recipes)

- MUST reduce to the smallest CDK app that demonstrates the issue; pin the reported `aws-cdk-lib` version, SHOULD also test latest release
- Cheapest sufficient level, in order:
  1. **Synth-time**: `cdk init` in a `repro-<issue_id>/` folder, minimal stack, `cdk synth` + inspect the emitted template — sufficient for most construct/property bugs
  2. **Unit-level**: assertions with `aws-cdk-lib/assertions` (`Template.fromStack`)
  3. **CLI behavior**: reproduce against `aws/aws-cdk-cli` commands (`cdk ls`, `cdk deploy --dry-run` equivalents) — remember root cause may be in the CLI repo
  4. **Runtime**: deploy and trigger the failure — only when synth-level cannot demonstrate it

### 4.3 Validate Against Hypothesis

- MUST record expected vs actual output and confirm it matches the reporter's claim
- MUST check observed behavior against the Phase 2 root cause and Phase 3 intended behavior; if they disagree, MUST revisit the earlier phase rather than forcing the conclusion
- Outcome MUST be one of: **Reproduced** (steps + output), **Not reproduced** (works — capture environment delta candidates), or **Not attempted** (with reason)

### 4.4 Artifacts

- SHOULD keep the minimal repro folder (`repro-<issue_id>/`) for reference from the report and reuse in fix verification
- MUST capture exact commands, versions, and relevant output snippets

## Phase 5: Triage Report Generation

Goal: a self-contained, standalone report per issue.

### 5.1 Report File

- MUST save as `~/repos/issue-triage/triage-reports/<issue_id>.md` (create dir if missing)
- Header MUST include timestamp, issue URL, repo, and reported version

### 5.2 Report Sections

1. **Issue Summary** — what was reported, classification track
2. **Context Gathered** — environment, versions, sufficiency gate result
3. **Duplicate Analysis** — candidates checked, verdict, Mermaid diagram (see 5.5)
4. **Source Investigation** — root cause with snippets + permalinks, fix status
5. **Docs Investigation** — intended behavior verdict with citations
6. **Reproduction Summary** — Reproduced / Not reproduced / Not attempted, steps, output; reason if skipped
7. **Recommended Classification** — bug / feature / docs / question / WAI + priority suggestion
8. **Possible Fixes/Solutions** — approaches, no implementation code
9. **Proposed Response** — draft comment (never posted by the operator)

### 5.3 Proposed Response Format

- MUST start with "Hi @username,"
- MUST begin (after the greeting) with an "Issue at a glance" ASCII flowchart in a fenced code block (see 5.6)
- MUST include a repro status statement ("I was able to reproduce this on…" / "I wasn't able to reproduce this locally because…, but from the source code…")
- MUST link class/function names to source (e.g., `[ClassName](https://github.com/.../file.ts#L42)`)
- MUST use standalone permalink URLs (commit SHA, not `main`) on their own line when referencing specific source lines, so GitHub auto-expands the snippet — no markdown link syntax for these
- MUST NOT use blockquote (`>`) formatting
- MUST be brief, actionable, and encourage PR contributions
- SHOULD use humble first-person phrasing ("In my opinion", "From my view", "It appears", "Off the top of my head")

### 5.4 Labeling Recommendations

- Report MUST recommend labels but the operator MUST NOT apply them (read-only, per Section 0)
- Recommend removing `needs-triage` and adding a priority label
- Priority rubric:
  - `p1`: security CVEs, blocks stack deletion, runtime failures with no workaround
  - `p2`: bugs with workarounds, feature requests, regressions already fixed

### 5.5 Mermaid Diagram Requirements

- MUST use `flowchart TD`; MUST use `subgraph` to separate contrasting flows (e.g., "Problem" vs "Fix")
- MUST quote node text containing special characters; one node/connection per line
- MUST NOT use color fills; SHOULD be dark theme friendly

### 5.6 "Issue at a Glance" Flowchart

- Fenced code block (triple backticks, no language tag), solid box-drawing characters (`┌ ┐ └ ┘ ─ │ ┬ ┴ ├ ┤ ┼ ▼ ▶`)
- Exactly three stages in order: Reported State → Root Cause → Suggested Fix
- Boxes same width; content ≤60 chars per line; `│`/`▼` arrows; no Mermaid here

Template:

````
```
┌──────────────────────────────────────────┐
│ 🔴 Reported State                        │
│ <one-line description of the problem>    │
└─────────────────────┬────────────────────┘
                      │
                      ▼
┌──────────────────────────────────────────┐
│ 🔍 Root Cause                            │
│ <one-line root cause>                    │
│ <optional: source file + line ref>       │
└─────────────────────┬────────────────────┘
                      │
                      ▼
┌──────────────────────────────────────────┐
│ 🟢 Suggested Fix                         │
│ <one-line proposed fix>                  │
└──────────────────────────────────────────┘
```
````

## Batch Mode (TRIAGEALL)

### Phase A: Collect (parallel bash)

Run two `gh api search/issues` calls in parallel (one per label), then `sort -u`:

```bash
REPOS="repo:aws-amplify/amplify-backend repo:aws-amplify/amplify-cli repo:aws-amplify/amplify-category-api repo:aws-amplify/amplify-codegen repo:aws/aws-cdk repo:aws/aws-cdk-cli"
JQ='.items[] | "\(.repository_url | split("/") | .[-2:] | join("/"))#\(.number) \(.title)"'
(
gh api search/issues --method GET -f q="is:issue is:open label:pending-triage ${REPOS}" --jq "$JQ" &
gh api search/issues --method GET -f q="is:issue is:open label:needs-triage ${REPOS}" --jq "$JQ" &
wait
) | sort -u
```

Constraints: multiple `repo:` qualifiers act as OR; multiple `label:` qualifiers act as AND (hence separate queries per label); MUST NOT use the `gh search issues` CLI wrapper (unreliable label filtering).

### Phase B: Distribute

Dispatch to `use_subagent` (`InvokeSubagents`, `agent_name: "勇者"`), up to 4 concurrent. Each subagent prompt MUST be self-contained with full context.

### Phase C: Aggregate

- One report per issue at `~/repos/issue-triage/triage-reports/<issue_id>.md`
- When all subagents complete, generate a summary table and suggested follow-up actions per issue

## Troubleshooting

- No repro steps (behavioral bugs only) → info-request track (1.5): MUST NOT attempt root cause analysis; ask for repro steps/use case/snippets with a checklist. Does NOT apply to security/CVE issues.
- Repro not attempted or inconclusive → record outcome per 4.3; never claim a reproduction that didn't happen
- Root cause inconclusive → state explicitly (2.4); identify most likely area and why it's inconclusive
- Noisy search → refine terms, use `repo:` scoping; MUST NOT raise `perPage` beyond 3 (context overflow)
- Docs-site lag gotcha → never trust the rendered CDK API docs site as proof a property is missing (2.2)
- CVE lockfile gotcha → lockfile fixed ≠ published package fixed; always `npm pack` and inspect (2.3)

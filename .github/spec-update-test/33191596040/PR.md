Updates the L1 CloudFormation resource definitions with the latest changes from `@aws-cdk/aws-service-spec`

**L1 CloudFormation resource definition changes:**
```
├[~] service aws-amplify
│ └ resources
│    └[~]  resource AWS::Amplify::Webhook
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:amplify:${Region}:${Account}:webhooks/${WebhookId}
├[~] service aws-apigateway
│ └ resources
│    └[~]  resource AWS::ApiGateway::RestApi
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"EXECUTION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp","stage","payload"]},{"permissionsVersion":"V2","logType":"ACCESS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp","stage","payload"]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          ├[-] logType: EXECUTION_LOGS
│          │ ├permissionsVersion: V2
│          │ ├destinations: [S3, CWL, FH]
│          │ └mandatoryFields: [resource_arn, event_timestamp, stage, payload]
│          └[-] logType: ACCESS_LOGS
│            ├permissionsVersion: V2
│            ├destinations: [S3, CWL, FH]
│            └mandatoryFields: [resource_arn, event_timestamp, stage, payload]
├[~] service aws-aps
│ └ resources
│    ├[~]  resource AWS::APS::Scraper
│    │  ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│    │  │      + vendedLogs: undefined
│    │  └ vendedLogs
│    │     └[-] logType: APPLICATION_LOGS
│    │       ├permissionsVersion: V1
│    │       └destinations: [S3, CWL, FH]
│    └[~]  resource AWS::APS::Workspace
│       ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"MANAGED_PROMETHEUS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: MANAGED_PROMETHEUS_LOGS
│            ├permissionsVersion: V1
│            └destinations: [S3, CWL, FH]
├[~] service aws-arcregionswitch
│ └ resources
│    └[~]  resource AWS::ARCRegionSwitch::Plan
│       └      - arnTemplate: arn:${Partition}:arc-region-switch:${Region}:${Account}:plan/${ResourceId}
│              + arnTemplate: arn:${Partition}:arc-region-switch::${Account}:plan/${ResourceId}
├[~] service aws-b2bi
│ └ resources
│    └[~]  resource AWS::B2BI::Transformer
│       ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"B2BI_EXECUTION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: B2BI_EXECUTION_LOGS
│            ├permissionsVersion: V1
│            └destinations: [S3, CWL, FH]
├[~] service aws-backupgateway
│ └ resources
│    └[~]  resource AWS::BackupGateway::Hypervisor
│       ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"BGW_HYPERVISOR_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]},{"permissionsVersion":"V1","logType":"DATA_ACCESS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          ├[-] logType: BGW_HYPERVISOR_LOGS
│          │ ├permissionsVersion: V1
│          │ └destinations: [S3, CWL, FH]
│          └[-] logType: DATA_ACCESS_LOGS
│            ├permissionsVersion: V1
│            └destinations: [S3, CWL, FH]
├[~] service aws-bedrock
│ └ resources
│    ├[~]  resource AWS::Bedrock::Agent
│    │  ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"optionalFields":["agent_alias_arn","event_timestamp","event_version","operation","event_type","workflow","level","event","agent_arn"]}]
│    │  │      + vendedLogs: undefined
│    │  └ vendedLogs
│    │     └[-] logType: APPLICATION_LOGS
│    │       ├permissionsVersion: V2
│    │       ├destinations: [S3, CWL, FH]
│    │       └optionalFields: [agent_alias_arn, event_timestamp, event_version, operation, event_type, workflow, level, event, agent_arn]
│    ├[~]  resource AWS::Bedrock::AgentAlias
│    │  ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"EVENT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["timestamp","resourceId","traceId","spanId","sessionId","requestId","operation","attributes","body","eventType","eventVersion","eventName","level"]}]
│    │  │      + vendedLogs: [{"permissionsVersion":"V2","logType":"EVENT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"mandatoryFields":["timestamp","resourceId","traceId","spanId","sessionId","requestId","operation","attributes","body","eventType","eventVersion","eventName","level"],"optionalFields":["resource_id"]},{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","agent_alias_arn","resource_id","event_timestamp","event_version","operation","event_type","workflow","level","event","agent_id","agent_alias_id","agent_arn"]}]
│    │  └ vendedLogs
│    │     ├[~] logType: EVENT_LOGS
│    │     │ ├destinations:
│    │     │ │├S3
│    │     │ ││├- outputFormats: [json, plain, w3c, parquet]
│    │     │ ││└+ outputFormats: [plain, json, w3c, parquet]
│    │     │ │└FH
│    │     │ │ ├- outputFormats: [json, plain, raw]
│    │     │ │ └+ outputFormats: [plain, json, raw]
│    │     │ └optionalFields:
│    │     │  └+ [resource_id]
│    │     └[+] logType: APPLICATION_LOGS
│    │       ├permissionsVersion: V2
│    │       ├destinations: [S3, CWL, FH]
│    │       └optionalFields: [timestamp, agent_alias_arn, resource_id, event_timestamp, event_version, operation, event_type, workflow, level, event, agent_id, agent_alias_id, agent_arn]
│    ├[~]  resource AWS::Bedrock::Flow
│    │  ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"optionalFields":["event_timestamp","resource_arn","schema_version","flow_id","flow_alias_id","flow_version","request_id","execution_id","event_type","event"]}]
│    │  │      + vendedLogs: undefined
│    │  └ vendedLogs
│    │     └[-] logType: APPLICATION_LOGS
│    │       ├permissionsVersion: V2
│    │       ├destinations: [S3, CWL, FH]
│    │       └optionalFields: [event_timestamp, resource_arn, schema_version, flow_id, flow_alias_id, flow_version, request_id, execution_id, event_type, event]
│    └[~]  resource AWS::Bedrock::KnowledgeBase
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"optionalFields":["event_timestamp","event","event_version","event_type","level"]},{"permissionsVersion":"V2","logType":"RUNTIME_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"optionalFields":["event_timestamp","event","event_version","event_type","level"]},{"permissionsVersion":"V2","logType":"TRACES","destinations":[{"destinationType":"XRAY","outputFormats":[]}],"mandatoryFields":["trace"]}]
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"TRACES","destinations":[{"destinationType":"XRAY"}],"optionalFields":["timestamp","resourceArn"],"mandatoryFields":["trace"]},{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","event_timestamp","event","event_version","event_type","level"]}]
│       └ vendedLogs
│          ├[~] logType: APPLICATION_LOGS
│          │ ├destinations:
│          │ │├S3
│          │ ││├- outputFormats: [json, plain, w3c]
│          │ ││└+ outputFormats: [plain, json, w3c]
│          │ │└FH
│          │ │ ├- outputFormats: [json, plain, raw]
│          │ │ └+ outputFormats: [plain, json, raw]
│          │ └optionalFields:
│          │  ├- [event_timestamp, event, event_version, event_type, level]
│          │  └+ [timestamp, resource_id, event_timestamp, event, event_version, event_type, level]
│          ├[-] logType: RUNTIME_LOGS
│          │ ├permissionsVersion: V2
│          │ ├destinations: [S3, CWL, FH]
│          │ └optionalFields: [event_timestamp, event, event_version, event_type, level]
│          └[~] logType: TRACES
│            ├destinations:
│            │└XRAY
│            └optionalFields:
│             └+ [timestamp, resourceArn]
├[~] service aws-bedrockagentcore
│ └ resources
│    ├[~]  resource AWS::BedrockAgentCore::BrowserCustom
│    │  ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"USAGE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp","resource","attributes","metrics"]}]
│    │  │      + vendedLogs: [{"permissionsVersion":"V2","logType":"TRACES","destinations":[{"destinationType":"XRAY"}],"optionalFields":["timestamp","resourceArn"],"mandatoryFields":["trace"]},{"permissionsVersion":"V2","logType":"USAGE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","browser_id","internal_accountid_based_arn"],"mandatoryFields":["resource_arn","event_timestamp","resource","attributes","metrics"]}]
│    │  └ vendedLogs
│    │     ├[~] logType: USAGE_LOGS
│    │     │ ├destinations:
│    │     │ │├S3
│    │     │ ││├- outputFormats: [json, plain, w3c, parquet]
│    │     │ ││└+ outputFormats: [plain, json, w3c, parquet]
│    │     │ │└FH
│    │     │ │ ├- outputFormats: [json, plain, raw]
│    │     │ │ └+ outputFormats: [plain, json, raw]
│    │     │ └optionalFields:
│    │     │  └+ [timestamp, browser_id, internal_accountid_based_arn]
│    │     └[+] logType: TRACES
│    │       ├permissionsVersion: V2
│    │       ├destinations: [XRAY]
│    │       ├mandatoryFields: [trace]
│    │       └optionalFields: [timestamp, resourceArn]
│    ├[~]  resource AWS::BedrockAgentCore::CodeInterpreterCustom
│    │  ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["account_id","request_id","tool_session_id","span_id","trace_id","service_name","operation","request_payload","response_payload","resource","attributes","timeUnixNano","severityNumber","severityText","body","traceId","spanId"]},{"permissionsVersion":"V2","logType":"USAGE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp","resource","attributes","metrics"]}]
│    │  │      + vendedLogs: [{"permissionsVersion":"V2","logType":"TRACES","destinations":[{"destinationType":"XRAY"}],"optionalFields":["timestamp","resourceArn"],"mandatoryFields":["trace"]},{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","tool_id","internal_accountid_based_arn","account_id","request_id","tool_session_id","span_id","trace_id","service_name","operation","request_payload","response_payload","resource","attributes","timeUnixNano","severityNumber","severityText","body","traceId","spanId"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"USAGE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","codeinterpreter_id","internal_accountid_based_arn"],"mandatoryFields":["resource_arn","event_timestamp","resource","attributes","metrics"]}]
│    │  └ vendedLogs
│    │     ├[~] logType: APPLICATION_LOGS
│    │     │ ├destinations:
│    │     │ │├S3
│    │     │ ││├- outputFormats: [json, plain, w3c, parquet]
│    │     │ ││└+ outputFormats: [plain, json, w3c, parquet]
│    │     │ │└FH
│    │     │ │ ├- outputFormats: [json, plain, raw]
│    │     │ │ └+ outputFormats: [plain, json, raw]
│    │     │ └optionalFields:
│    │     │  ├- [account_id, request_id, tool_session_id, span_id, trace_id, service_name, operation, request_payload, response_payload, resource, attributes, timeUnixNano, severityNumber, severityText, body, traceId, spanId]
│    │     │  └+ [timestamp, tool_id, internal_accountid_based_arn, account_id, request_id, tool_session_id, span_id, trace_id, service_name, operation, request_payload, response_payload, resource, attributes, timeUnixNano, severityNumber, severityText, body, traceId, spanId]
│    │     ├[~] logType: USAGE_LOGS
│    │     │ ├destinations:
│    │     │ │├S3
│    │     │ ││├- outputFormats: [json, plain, w3c, parquet]
│    │     │ ││└+ outputFormats: [plain, json, w3c, parquet]
│    │     │ │└FH
│    │     │ │ ├- outputFormats: [json, plain, raw]
│    │     │ │ └+ outputFormats: [plain, json, raw]
│    │     │ └optionalFields:
│    │     │  └+ [timestamp, codeinterpreter_id, internal_accountid_based_arn]
│    │     └[+] logType: TRACES
│    │       ├permissionsVersion: V2
│    │       ├destinations: [XRAY]
│    │       ├mandatoryFields: [trace]
│    │       └optionalFields: [timestamp, resourceArn]
│    ├[~]  resource AWS::BedrockAgentCore::Gateway
│    │  ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["body","account_id","request_id","trace_id","span_id","resource","attributes","timeUnixNano","severityNumber","severityText","traceId","spanId"]},{"permissionsVersion":"V2","logType":"TRACES","destinations":[{"destinationType":"XRAY","outputFormats":[]}],"mandatoryFields":["trace"]}]
│    │  │      + vendedLogs: [{"permissionsVersion":"V2","logType":"TRACES","destinations":[{"destinationType":"XRAY"}],"optionalFields":["timestamp","resourceArn"],"mandatoryFields":["trace"]},{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","gateway_id","body","account_id","request_id","trace_id","span_id","resource","attributes","timeUnixNano","severityNumber","severityText","traceId","spanId"],"mandatoryFields":["resource_arn","event_timestamp"]}]
│    │  └ vendedLogs
│    │     ├[~] logType: APPLICATION_LOGS
│    │     │ ├destinations:
│    │     │ │├S3
│    │     │ ││├- outputFormats: [json, plain, w3c, parquet]
│    │     │ ││└+ outputFormats: [plain, json, w3c, parquet]
│    │     │ │└FH
│    │     │ │ ├- outputFormats: [json, plain, raw]
│    │     │ │ └+ outputFormats: [plain, json, raw]
│    │     │ └optionalFields:
│    │     │  ├- [body, account_id, request_id, trace_id, span_id, resource, attributes, timeUnixNano, severityNumber, severityText, traceId, spanId]
│    │     │  └+ [timestamp, gateway_id, body, account_id, request_id, trace_id, span_id, resource, attributes, timeUnixNano, severityNumber, severityText, traceId, spanId]
│    │     └[~] logType: TRACES
│    │       ├destinations:
│    │       │└XRAY
│    │       └optionalFields:
│    │        └+ [timestamp, resourceArn]
│    ├[~]  resource AWS::BedrockAgentCore::Memory
│    │  ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"optionalFields":["resource_arn","event_timestamp","memory_strategy_id","namespace","actor_id","session_id","event_id","body","resource","attributes","timeUnixNano","severityNumber","severityText","traceId","spanId"]},{"permissionsVersion":"V2","logType":"TRACES","destinations":[{"destinationType":"XRAY","outputFormats":[]}],"mandatoryFields":["trace"]}]
│    │  │      + vendedLogs: [{"permissionsVersion":"V2","logType":"TRACES","destinations":[{"destinationType":"XRAY"}],"optionalFields":["timestamp","resourceArn"],"mandatoryFields":["trace"]},{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_arn","resource_id","event_timestamp","memory_strategy_id","namespace","actor_id","session_id","event_id","body","resource","attributes","timeUnixNano","severityNumber","severityText","traceId","spanId"]}]
│    │  └ vendedLogs
│    │     ├[~] logType: APPLICATION_LOGS
│    │     │ ├destinations:
│    │     │ │├S3
│    │     │ ││├- outputFormats: [json, plain, w3c, parquet]
│    │     │ ││└+ outputFormats: [plain, json, w3c, parquet]
│    │     │ │└FH
│    │     │ │ ├- outputFormats: [json, plain, raw]
│    │     │ │ └+ outputFormats: [plain, json, raw]
│    │     │ └optionalFields:
│    │     │  ├- [resource_arn, event_timestamp, memory_strategy_id, namespace, actor_id, session_id, event_id, body, resource, attributes, timeUnixNano, severityNumber, severityText, traceId, spanId]
│    │     │  └+ [timestamp, resource_arn, resource_id, event_timestamp, memory_strategy_id, namespace, actor_id, session_id, event_id, body, resource, attributes, timeUnixNano, severityNumber, severityText, traceId, spanId]
│    │     └[~] logType: TRACES
│    │       ├destinations:
│    │       │└XRAY
│    │       └optionalFields:
│    │        └+ [timestamp, resourceArn]
│    ├[~]  resource AWS::BedrockAgentCore::PaymentCredentialProvider
│    │  ├      - vendedLogs: undefined
│    │  │      + vendedLogs: [{"permissionsVersion":"V2","logType":"TRACES","destinations":[{"destinationType":"XRAY"}],"optionalFields":["timestamp","resourceArn"],"mandatoryFields":["trace"]}]
│    │  └ vendedLogs
│    │     └[+] logType: TRACES
│    │       ├permissionsVersion: V2
│    │       ├destinations: [XRAY]
│    │       ├mandatoryFields: [trace]
│    │       └optionalFields: [timestamp, resourceArn]
│    ├[~]  resource AWS::BedrockAgentCore::Runtime
│    │  ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["account_id","request_id","session_id","span_id","trace_id","service_name","operation","request_payload","response_payload","resource","attributes","timeUnixNano","severityNumber","severityText","body","traceId","spanId"]},{"permissionsVersion":"V2","logType":"TRACES","destinations":[{"destinationType":"XRAY","outputFormats":[]}],"mandatoryFields":["trace"]},{"permissionsVersion":"V2","logType":"USAGE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp","resource","attributes","metrics"]}]
│    │  │      + vendedLogs: [{"permissionsVersion":"V2","logType":"TRACES","destinations":[{"destinationType":"XRAY"}],"optionalFields":["timestamp","resourceArn"],"mandatoryFields":["trace"]},{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","runtime_id","account_id","request_id","session_id","span_id","trace_id","service_name","operation","request_payload","response_payload","resource","attributes","timeUnixNano","severityNumber","severityText","body","traceId","spanId"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"USAGE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","runtime_id"],"mandatoryFields":["resource_arn","event_timestamp","resource","attributes","metrics"]}]
│    │  └ vendedLogs
│    │     ├[~] logType: APPLICATION_LOGS
│    │     │ ├destinations:
│    │     │ │├S3
│    │     │ ││├- outputFormats: [json, plain, w3c, parquet]
│    │     │ ││└+ outputFormats: [plain, json, w3c, parquet]
│    │     │ │└FH
│    │     │ │ ├- outputFormats: [json, plain, raw]
│    │     │ │ └+ outputFormats: [plain, json, raw]
│    │     │ └optionalFields:
│    │     │  ├- [account_id, request_id, session_id, span_id, trace_id, service_name, operation, request_payload, response_payload, resource, attributes, timeUnixNano, severityNumber, severityText, body, traceId, spanId]
│    │     │  └+ [timestamp, runtime_id, account_id, request_id, session_id, span_id, trace_id, service_name, operation, request_payload, response_payload, resource, attributes, timeUnixNano, severityNumber, severityText, body, traceId, spanId]
│    │     ├[~] logType: TRACES
│    │     │ ├destinations:
│    │     │ │└XRAY
│    │     │ └optionalFields:
│    │     │  └+ [timestamp, resourceArn]
│    │     └[~] logType: USAGE_LOGS
│    │       ├destinations:
│    │       │├S3
│    │       ││├- outputFormats: [json, plain, w3c, parquet]
│    │       ││└+ outputFormats: [plain, json, w3c, parquet]
│    │       │└FH
│    │       │ ├- outputFormats: [json, plain, raw]
│    │       │ └+ outputFormats: [plain, json, raw]
│    │       └optionalFields:
│    │        └+ [timestamp, runtime_id]
│    └[~]  resource AWS::BedrockAgentCore::WorkloadIdentity
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["request_id","operation_name","operation_type","start_time","end_time","duration_ms","account_id","request","response","trace_id","span_id","resource","attributes","timeUnixNano","severityNumber","severityText","body","traceId","spanId"]}]
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","workload_identity_id","request_id","trace_id","span_id","operation_name","operation_type","start_time","end_time","duration_ms","account_id","request","response","resource","attributes","timeUnixNano","severityNumber","severityText","body","traceId","spanId"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"TRACES","destinations":[{"destinationType":"XRAY"}],"optionalFields":["timestamp","resourceArn"],"mandatoryFields":["trace"]}]
│       └ vendedLogs
│          ├[~] logType: APPLICATION_LOGS
│          │ ├destinations:
│          │ │├S3
│          │ ││├- outputFormats: [json, plain, w3c, parquet]
│          │ ││└+ outputFormats: [plain, json, w3c, parquet]
│          │ │└FH
│          │ │ ├- outputFormats: [json, plain, raw]
│          │ │ └+ outputFormats: [plain, json, raw]
│          │ └optionalFields:
│          │  ├- [request_id, operation_name, operation_type, start_time, end_time, duration_ms, account_id, request, response, trace_id, span_id, resource, attributes, timeUnixNano, severityNumber, severityText, body, traceId, spanId]
│          │  └+ [timestamp, workload_identity_id, request_id, trace_id, span_id, operation_name, operation_type, start_time, end_time, duration_ms, account_id, request, response, resource, attributes, timeUnixNano, severityNumber, severityText, body, traceId, spanId]
│          └[+] logType: TRACES
│            ├permissionsVersion: V2
│            ├destinations: [XRAY]
│            ├mandatoryFields: [trace]
│            └optionalFields: [timestamp, resourceArn]
├[~] service aws-cleanrooms
│ └ resources
│    └[~]  resource AWS::CleanRooms::Membership
│       ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"ANALYSIS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: ANALYSIS_LOGS
│            ├permissionsVersion: V1
│            └destinations: [S3, CWL, FH]
├[~] service aws-cloudfront
│ └ resources
│    └[~]  resource AWS::CloudFront::Distribution
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"CONNECTION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["eventTimestamp","connectionId","distributionId"],"optionalFields":["connectionStatus","clientIp","clientPort","serverIp","distributionTenantId","tlsProtocol","tlsCipher","tlsHandshakeDuration","tlsSni","clientLeafCertSerialNumber","clientLeafCertSubject","clientLeafCertIssuer","clientLeafCertValidity","connectionLogCustomData"]},{"permissionsVersion":"V2","logType":"ACCESS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"optionalFields":["date","time","x-edge-location","sc-bytes","c-ip","cs-method","cs(Host)","cs-uri-stem","sc-status","cs(Referer)","cs(User-Agent)","cs-uri-query","cs(Cookie)","x-edge-result-type","x-edge-request-id","x-host-header","cs-protocol","cs-bytes","time-taken","x-forwarded-for","ssl-protocol","ssl-cipher","x-edge-response-result-type","cs-protocol-version","fle-status","fle-encrypted-fields","c-port","time-to-first-byte","x-edge-detailed-result-type","sc-content-type","sc-content-len","sc-range-start","sc-range-end"]}]
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"CONNECTION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","connectionStatus","clientIp","clientPort","serverIp","distributionTenantId","tlsProtocol","tlsCipher","tlsHandshakeDuration","tlsSni","clientLeafCertSerialNumber","clientLeafCertSubject","clientLeafCertIssuer","clientLeafCertValidity","connectionLogCustomData"],"mandatoryFields":["eventTimestamp","distributionId","connectionId"]},{"permissionsVersion":"V2","logType":"ACCESS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","date","time","x-edge-location","sc-bytes","c-ip","cs-method","cs(Host)","cs-uri-stem","sc-status","cs(Referer)","cs(User-Agent)","cs-uri-query","cs(Cookie)","x-edge-result-type","x-edge-request-id","x-host-header","cs-protocol","cs-bytes","time-taken","x-forwarded-for","ssl-protocol","ssl-cipher","x-edge-response-result-type","cs-protocol-version","fle-status","fle-encrypted-fields","c-port","time-to-first-byte","x-edge-detailed-result-type","sc-content-type","sc-content-len","sc-range-start","sc-range-end","timestamp(ms)","origin-fbl","origin-lbl","asn","c-country","cache-behavior-path-pattern","distribution-tenant-id","connection-id","viewer-request-log-data","viewer-response-log-data","cmcd-encoded-bitrate","cmcd-buffer-length","cmcd-buffer-starvation","cmcd-content-id","cmcd-object-duration","cmcd-deadline","cmcd-measured-throughput","cmcd-next-object-request","cmcd-next-range-request","cmcd-object-type","cmcd-playback-rate","cmcd-requested-maximum-throughput","cmcd-streaming-format","cmcd-session-id","cmcd-stream-type","cmcd-startup","cmcd-top-bitrate","cmcd-version","s-ip","primary-distribution-id","primary-distribution-dns-name","r-host","sr-reason","x-edge-mqcs"]}]
│       └ vendedLogs
│          ├[~] logType: CONNECTION_LOGS
│          │ ├destinations:
│          │ │├S3
│          │ ││├- outputFormats: [json, plain, w3c, parquet]
│          │ ││└+ outputFormats: [plain, json, w3c, parquet]
│          │ │└FH
│          │ │ ├- outputFormats: [json, plain, raw]
│          │ │ └+ outputFormats: [plain, json, raw]
│          │ ├mandatoryFields:
│          │ │├- [eventTimestamp, connectionId, distributionId]
│          │ │└+ [eventTimestamp, distributionId, connectionId]
│          │ └optionalFields:
│          │  ├- [connectionStatus, clientIp, clientPort, serverIp, distributionTenantId, tlsProtocol, tlsCipher, tlsHandshakeDuration, tlsSni, clientLeafCertSerialNumber, clientLeafCertSubject, clientLeafCertIssuer, clientLeafCertValidity, connectionLogCustomData]
│          │  └+ [timestamp, connectionStatus, clientIp, clientPort, serverIp, distributionTenantId, tlsProtocol, tlsCipher, tlsHandshakeDuration, tlsSni, clientLeafCertSerialNumber, clientLeafCertSubject, clientLeafCertIssuer, clientLeafCertValidity, connectionLogCustomData]
│          └[~] logType: ACCESS_LOGS
│            ├destinations:
│            │├S3
│            ││├- outputFormats: [json, plain, w3c, parquet]
│            ││└+ outputFormats: [plain, json, w3c, parquet]
│            │└FH
│            │ ├- outputFormats: [json, plain, raw]
│            │ └+ outputFormats: [plain, json, raw]
│            └optionalFields:
│             ├- [date, time, x-edge-location, sc-bytes, c-ip, cs-method, cs(Host), cs-uri-stem, sc-status, cs(Referer), cs(User-Agent), cs-uri-query, cs(Cookie), x-edge-result-type, x-edge-request-id, x-host-header, cs-protocol, cs-bytes, time-taken, x-forwarded-for, ssl-protocol, ssl-cipher, x-edge-response-result-type, cs-protocol-version, fle-status, fle-encrypted-fields, c-port, time-to-first-byte, x-edge-detailed-result-type, sc-content-type, sc-content-len, sc-range-start, sc-range-end]
│             └+ [timestamp, date, time, x-edge-location, sc-bytes, c-ip, cs-method, cs(Host), cs-uri-stem, sc-status, cs(Referer), cs(User-Agent), cs-uri-query, cs(Cookie), x-edge-result-type, x-edge-request-id, x-host-header, cs-protocol, cs-bytes, time-taken, x-forwarded-for, ssl-protocol, ssl-cipher, x-edge-response-result-type, cs-protocol-version, fle-status, fle-encrypted-fields, c-port, time-to-first-byte, x-edge-detailed-result-type, sc-content-type, sc-content-len, sc-range-start, sc-range-end, timestamp(ms), origin-fbl, origin-lbl, asn, c-country, cache-behavior-path-pattern, distribution-tenant-id, connection-id, viewer-request-log-data, viewer-response-log-data, cmcd-encoded-bitrate, cmcd-buffer-length, cmcd-buffer-starvation, cmcd-content-id, cmcd-object-duration, cmcd-deadline, cmcd-measured-throughput, cmcd-next-object-request, cmcd-next-range-request, cmcd-object-type, cmcd-playback-rate, cmcd-requested-maximum-throughput, cmcd-streaming-format, cmcd-session-id, cmcd-stream-type, cmcd-startup, cmcd-top-bitrate, cmcd-version, s-ip, primary-distribution-id, primary-distribution-dns-name, r-host, sr-reason, x-edge-mqcs]
├[~] service aws-codeconnections
│ └ resources
│    └[~]  resource AWS::CodeConnections::Host
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:codeconnections:${Region}:${Account}:host/${HostId}
├[~] service aws-cognito
│ └ resources
│    └[~]  resource AWS::Cognito::UserPool
│       ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: APPLICATION_LOGS
│            ├permissionsVersion: V1
│            └destinations: [S3, CWL, FH]
├[~] service aws-connect
│ └ resources
│    └[~]  resource AWS::Connect::Instance
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"AMAZON_CONNECT_FLOW_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["InstanceArn","Timestamp","AccountId","ResourceArn","ResourceType","ResourceName","ResourceExecutionStartTime","ResourcePublishTimestamp","FlowType","ContactId","InitiationMethod","Channel","SubType","LogVersion","LogType","ActionLogData","ModuleCallstack","ActionCounter"]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: AMAZON_CONNECT_FLOW_LOGS
│            ├permissionsVersion: V2
│            ├destinations: [S3, CWL, FH]
│            └mandatoryFields: [InstanceArn, Timestamp, AccountId, ResourceArn, ResourceType, ResourceName, ResourceExecutionStartTime, ResourcePublishTimestamp, FlowType, ContactId, InitiationMethod, Channel, SubType, LogVersion, LogType, ActionLogData, ModuleCallstack, ActionCounter]
├[~] service aws-dataexchange
│ └ resources
│    └[~]  resource AWS::DataExchange::EventAction
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:dataexchange:${Region}:${Account}:event-actions/${EventActionId}
├[~] service aws-datapipeline
│ └ resources
│    └[~]  resource AWS::DataPipeline::Pipeline
│       └      - arnTemplate: arn:${Partition}:datapipeline:${Region}:${Account}:pipeline/${PipelineId}
│              + arnTemplate: arn:${Partition}:datapipeline:${Region}:${Account}:pipeline/${PipelineID}
├[~] service aws-devopsagent
│ └ resources
│    └[~]  resource AWS::DevOpsAgent::AgentSpace
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["optional_account_id","optional_agent_space_id","optional_level","optional_association_id","optional_status","optional_webhook_id","optional_mcp_endpoint_url","optional_service_type","optional_service_endpoint_url","optional_service_id","optional_request_id","optional_operation","optional_task_type","optional_task_id","optional_reference","optional_error_type","optional_error_message","optional_details"]}]
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","optional_account_id","optional_agent_space_id","optional_level","optional_association_id","optional_status","optional_webhook_id","optional_mcp_endpoint_url","optional_service_type","optional_service_endpoint_url","optional_service_id","optional_request_id","optional_operation","optional_task_type","optional_task_id","optional_reference","optional_error_type","optional_error_message","optional_details"],"mandatoryFields":["resource_arn","event_timestamp"]}]
│       └ vendedLogs
│          └[~] logType: APPLICATION_LOGS
│            ├destinations:
│            │├S3
│            ││├- outputFormats: [json, plain, w3c, parquet]
│            ││└+ outputFormats: [plain, json, w3c, parquet]
│            │└FH
│            │ ├- outputFormats: [json, plain, raw]
│            │ └+ outputFormats: [plain, json, raw]
│            └optionalFields:
│             ├- [optional_account_id, optional_agent_space_id, optional_level, optional_association_id, optional_status, optional_webhook_id, optional_mcp_endpoint_url, optional_service_type, optional_service_endpoint_url, optional_service_id, optional_request_id, optional_operation, optional_task_type, optional_task_id, optional_reference, optional_error_type, optional_error_message, optional_details]
│             └+ [timestamp, resource_id, optional_account_id, optional_agent_space_id, optional_level, optional_association_id, optional_status, optional_webhook_id, optional_mcp_endpoint_url, optional_service_type, optional_service_endpoint_url, optional_service_id, optional_request_id, optional_operation, optional_task_type, optional_task_id, optional_reference, optional_error_type, optional_error_message, optional_details]
├[~] service aws-ec2
│ └ resources
│    ├[~]  resource AWS::EC2::Instance
│    │  ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"CONSOLE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp","message"]}]
│    │  │      + vendedLogs: undefined
│    │  └ vendedLogs
│    │     └[-] logType: CONSOLE_LOGS
│    │       ├permissionsVersion: V2
│    │       ├destinations: [S3, CWL, FH]
│    │       └mandatoryFields: [resource_arn, event_timestamp, message]
│    ├[~]  resource AWS::EC2::RouteServerPeer
│    │  ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"EVENT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp","type"],"optionalFields":["status","message"]}]
│    │  │      + vendedLogs: [{"permissionsVersion":"V2","logType":"EVENT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","status","message"],"mandatoryFields":["resource_arn","event_timestamp","type"]}]
│    │  └ vendedLogs
│    │     └[~] logType: EVENT_LOGS
│    │       ├destinations:
│    │       │├S3
│    │       ││├- outputFormats: [json, plain, w3c, parquet]
│    │       ││└+ outputFormats: [plain, json, w3c, parquet]
│    │       │└FH
│    │       │ ├- outputFormats: [json, plain, raw]
│    │       │ └+ outputFormats: [plain, json, raw]
│    │       └optionalFields:
│    │        ├- [status, message]
│    │        └+ [timestamp, resource_id, status, message]
│    ├[~]  resource AWS::EC2::VerifiedAccessInstance
│    │  ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"VERIFIED_ACCESS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│    │  │      + vendedLogs: undefined
│    │  └ vendedLogs
│    │     └[-] logType: VERIFIED_ACCESS_LOGS
│    │       ├permissionsVersion: V1
│    │       └destinations: [S3, CWL, FH]
│    ├[~]  resource AWS::EC2::VPC
│    │  ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"ROUTE53_RESOLVER_QUERY_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│    │  │      + vendedLogs: undefined
│    │  └ vendedLogs
│    │     └[-] logType: ROUTE53_RESOLVER_QUERY_LOGS
│    │       ├permissionsVersion: V1
│    │       └destinations: [S3, CWL, FH]
│    └[~]  resource AWS::EC2::VPNConnection
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"EVENT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_id","event_timestamp"],"optionalFields":["timestamp","type","status","message"]},{"permissionsVersion":"V2","logType":"CONNECTION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["event_timestamp","details"],"optionalFields":["timestamp","dpd_enabled","nat_t_detected","ike_phase1_state","ike_phase2_state"]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          ├[-] logType: EVENT_LOGS
│          │ ├permissionsVersion: V2
│          │ ├destinations: [S3, CWL, FH]
│          │ ├mandatoryFields: [resource_id, event_timestamp]
│          │ └optionalFields: [timestamp, type, status, message]
│          └[-] logType: CONNECTION_LOGS
│            ├permissionsVersion: V2
│            ├destinations: [S3, CWL, FH]
│            ├mandatoryFields: [event_timestamp, details]
│            └optionalFields: [timestamp, dpd_enabled, nat_t_detected, ike_phase1_state, ike_phase2_state]
├[~] service aws-ecs
│ └ resources
│    └[~]  resource AWS::ECS::Cluster
│       ├      - vendedLogs: undefined
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"ACTION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json"]},{"destinationType":"CWL","outputFormats":["json"]},{"destinationType":"FH","outputFormats":["json"]}],"optionalFields":["timestamp"],"mandatoryFields":["resourceArn","actionSourceId","logLevel","eventTimestamp","detail"]}]
│       └ vendedLogs
│          └[+] logType: ACTION_LOGS
│            ├permissionsVersion: V2
│            ├destinations: [S3, CWL, FH]
│            ├mandatoryFields: [resourceArn, actionSourceId, logLevel, eventTimestamp, detail]
│            └optionalFields: [timestamp]
├[~] service aws-eks
│ └ resources
│    ├[~]  resource AWS::EKS::Capability
│    │  ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ACK_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["stream","level","message","err","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","kind","reconciler-kind","name","namespace","aws.service","version","type"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["stream","level","message","error","application","app-namespace","project","dest-server","dest-namespace","dest-name","comparison-level","time_ms","patch_ms","setop_ms","compare_app_state_ms","refresh_app_conditions_ms","process_refresh_app_conditions_errors_ms","comparison_with_nothing_ms"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_APPLICATIONSET_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["stream","level","message","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","name","namespace","application","app-namespace","project","applicationset","action","count","requeueAfter","type"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_COMMITSERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["stream","level","message"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_REPOSERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["stream","level","message","error"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_SERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["stream","level","message","error","name","namespace","reason"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_KRO_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["stream","level","message","err","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","gvr","crd","name","namespace","item","ResourceGraphDefinition","type"]}]
│    │  │      + vendedLogs: [{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_COMMITSERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","version","component","duration"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ACK_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","err","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","kind","name","namespace","aws.service","version","type","generation","is_adopted","iam_role_selector","role"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_SERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","name","namespace","reason","application","user","grpc.code","grpc.method","grpc.service","grpc.time_ms","grpc.method_type","grpc.error","type","duration","dest-namespace","dest-server","project"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","application","app-namespace","project","dest-server","dest-namespace","dest-name","comparison-level","time_ms","patch_ms","setop_ms","compare_app_state_ms","refresh_app_conditions_ms","process_refresh_app_conditions_errors_ms","comparison_with_nothing_ms","name","namespace","app_status_update_ms","auto_sync_ms","diff_ms","git_ms","health_ms","live_ms","manifests_ms","repo_ms","sync_ms","cluster","syncId","duration","eventType","kind"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_APPLICATIONSET_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","name","namespace","application","app-namespace","project","applicationset","action","count","requeueAfter","type","version","err","repoURL","revision"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_REPOSERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","grpc.code","grpc.method","grpc.service","grpc.time_ms","grpc.method_type","grpc.component","grpc.error","version","component","duration","execID"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_KRO_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","err","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","gvr","crd","name","namespace","type","breakingChanges","summary","existingRGDID","newRGDID"],"mandatoryFields":["resource_arn","event_timestamp"]}]
│    │  └ vendedLogs
│    │     ├[~] logType: EKS_CAPABILITY_ACK_LOGS
│    │     │ ├destinations:
│    │     │ │├S3
│    │     │ ││├- outputFormats: [json, plain, w3c, parquet]
│    │     │ ││└+ outputFormats: [plain, json, w3c, parquet]
│    │     │ │└FH
│    │     │ │ ├- outputFormats: [json, plain, raw]
│    │     │ │ └+ outputFormats: [plain, json, raw]
│    │     │ └optionalFields:
│    │     │  ├- [stream, level, message, err, error, controller, controllerGroup, controllerKind, reconcileID, worker-count, kind, reconciler-kind, name, namespace, aws.service, version, type]
│    │     │  └+ [timestamp, resource_id, stream, level, message, err, error, controller, controllerGroup, controllerKind, reconcileID, worker-count, kind, name, namespace, aws.service, version, type, generation, is_adopted, iam_role_selector, role]
│    │     ├[~] logType: EKS_CAPABILITY_ARGOCD_APPLICATION_LOGS
│    │     │ ├destinations:
│    │     │ │├S3
│    │     │ ││├- outputFormats: [json, plain, w3c, parquet]
│    │     │ ││└+ outputFormats: [plain, json, w3c, parquet]
│    │     │ │└FH
│    │     │ │ ├- outputFormats: [json, plain, raw]
│    │     │ │ └+ outputFormats: [plain, json, raw]
│    │     │ └optionalFields:
│    │     │  ├- [stream, level, message, error, application, app-namespace, project, dest-server, dest-namespace, dest-name, comparison-level, time_ms, patch_ms, setop_ms, compare_app_state_ms, refresh_app_conditions_ms, process_refresh_app_conditions_errors_ms, comparison_with_nothing_ms]
│    │     │  └+ [timestamp, resource_id, stream, level, message, error, application, app-namespace, project, dest-server, dest-namespace, dest-name, comparison-level, time_ms, patch_ms, setop_ms, compare_app_state_ms, refresh_app_conditions_ms, process_refresh_app_conditions_errors_ms, comparison_with_nothing_ms, name, namespace, app_status_update_ms, auto_sync_ms, diff_ms, git_ms, health_ms, live_ms, manifests_ms, repo_ms, sync_ms, cluster, syncId, duration, eventType, kind]
│    │     ├[~] logType: EKS_CAPABILITY_ARGOCD_APPLICATIONSET_LOGS
│    │     │ ├destinations:
│    │     │ │├S3
│    │     │ ││├- outputFormats: [json, plain, w3c, parquet]
│    │     │ ││└+ outputFormats: [plain, json, w3c, parquet]
│    │     │ │└FH
│    │     │ │ ├- outputFormats: [json, plain, raw]
│    │     │ │ └+ outputFormats: [plain, json, raw]
│    │     │ └optionalFields:
│    │     │  ├- [stream, level, message, error, controller, controllerGroup, controllerKind, reconcileID, worker-count, name, namespace, application, app-namespace, project, applicationset, action, count, requeueAfter, type]
│    │     │  └+ [timestamp, resource_id, stream, level, message, error, controller, controllerGroup, controllerKind, reconcileID, worker-count, name, namespace, application, app-namespace, project, applicationset, action, count, requeueAfter, type, version, err, repoURL, revision]
│    │     ├[~] logType: EKS_CAPABILITY_ARGOCD_COMMITSERVER_LOGS
│    │     │ ├destinations:
│    │     │ │├S3
│    │     │ ││├- outputFormats: [json, plain, w3c, parquet]
│    │     │ ││└+ outputFormats: [plain, json, w3c, parquet]
│    │     │ │└FH
│    │     │ │ ├- outputFormats: [json, plain, raw]
│    │     │ │ └+ outputFormats: [plain, json, raw]
│    │     │ └optionalFields:
│    │     │  ├- [stream, level, message]
│    │     │  └+ [timestamp, resource_id, stream, level, message, error, version, component, duration]
│    │     ├[~] logType: EKS_CAPABILITY_ARGOCD_REPOSERVER_LOGS
│    │     │ ├destinations:
│    │     │ │├S3
│    │     │ ││├- outputFormats: [json, plain, w3c, parquet]
│    │     │ ││└+ outputFormats: [plain, json, w3c, parquet]
│    │     │ │└FH
│    │     │ │ ├- outputFormats: [json, plain, raw]
│    │     │ │ └+ outputFormats: [plain, json, raw]
│    │     │ └optionalFields:
│    │     │  ├- [stream, level, message, error]
│    │     │  └+ [timestamp, resource_id, stream, level, message, error, grpc.code, grpc.method, grpc.service, grpc.time_ms, grpc.method_type, grpc.component, grpc.error, version, component, duration, execID]
│    │     ├[~] logType: EKS_CAPABILITY_ARGOCD_SERVER_LOGS
│    │     │ ├destinations:
│    │     │ │├S3
│    │     │ ││├- outputFormats: [json, plain, w3c, parquet]
│    │     │ ││└+ outputFormats: [plain, json, w3c, parquet]
│    │     │ │└FH
│    │     │ │ ├- outputFormats: [json, plain, raw]
│    │     │ │ └+ outputFormats: [plain, json, raw]
│    │     │ └optionalFields:
│    │     │  ├- [stream, level, message, error, name, namespace, reason]
│    │     │  └+ [timestamp, resource_id, stream, level, message, error, name, namespace, reason, application, user, grpc.code, grpc.method, grpc.service, grpc.time_ms, grpc.method_type, grpc.error, type, duration, dest-namespace, dest-server, project]
│    │     └[~] logType: EKS_CAPABILITY_KRO_LOGS
│    │       ├destinations:
│    │       │├S3
│    │       ││├- outputFormats: [json, plain, w3c, parquet]
│    │       ││└+ outputFormats: [plain, json, w3c, parquet]
│    │       │└FH
│    │       │ ├- outputFormats: [json, plain, raw]
│    │       │ └+ outputFormats: [plain, json, raw]
│    │       └optionalFields:
│    │        ├- [stream, level, message, err, error, controller, controllerGroup, controllerKind, reconcileID, worker-count, gvr, crd, name, namespace, item, ResourceGraphDefinition, type]
│    │        └+ [timestamp, resource_id, stream, level, message, err, error, controller, controllerGroup, controllerKind, reconcileID, worker-count, gvr, crd, name, namespace, type, breakingChanges, summary, existingRGDID, newRGDID]
│    └[~]  resource AWS::EKS::Cluster
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"AUTO_MODE_BLOCK_STORAGE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["level","stream","message","err","error","enabled","feature"]},{"permissionsVersion":"V2","logType":"AUTO_MODE_COMPUTE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["level","stream","message","err","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","count","instance-type-count","mode","offering-count"]},{"permissionsVersion":"V2","logType":"AUTO_MODE_IPAM_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["level","stream","message","err","error","controller","controllerGroup","controllerKind","reconcileID","worker-count"]},{"permissionsVersion":"V2","logType":"AUTO_MODE_LOAD_BALANCING_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["level","stream","message","err","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","attempt","delay","totalItems"]}]
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"AUTO_MODE_LOAD_BALANCING_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["level","stream","message","err","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","attempt","delay","totalItems"]},{"permissionsVersion":"V2","logType":"AUTO_MODE_COMPUTE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["level","stream","message","err","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","count","instance-type-count","mode","offering-count","NodePool","NodeClaim","Node","zones","subnets","allocatable","command","command-id","decision","deleting-pods","disrupted-node-count","disrupted-nodes","disruption-cost","messageKind","pending-pods","pod-count","replacement-node-count","replacement-nodes","ResourceClaim","savings","total","action","reason"]},{"permissionsVersion":"V2","logType":"AUTO_MODE_IPAM_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["level","stream","message","err","error","controller","controllerGroup","controllerKind","reconcileID","worker-count"]},{"permissionsVersion":"V2","logType":"AUTO_MODE_BLOCK_STORAGE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["level","stream","message","err","error","enabled","feature"]}]
│       └ vendedLogs
│          ├[~] logType: AUTO_MODE_BLOCK_STORAGE_LOGS
│          │ └destinations:
│          │  ├S3
│          │  │├- outputFormats: [json, plain, w3c, parquet]
│          │  │└+ outputFormats: [plain, json, w3c, parquet]
│          │  └FH
│          │   ├- outputFormats: [json, plain, raw]
│          │   └+ outputFormats: [plain, json, raw]
│          ├[~] logType: AUTO_MODE_COMPUTE_LOGS
│          │ ├destinations:
│          │ │├S3
│          │ ││├- outputFormats: [json, plain, w3c, parquet]
│          │ ││└+ outputFormats: [plain, json, w3c, parquet]
│          │ │└FH
│          │ │ ├- outputFormats: [json, plain, raw]
│          │ │ └+ outputFormats: [plain, json, raw]
│          │ └optionalFields:
│          │  ├- [level, stream, message, err, error, controller, controllerGroup, controllerKind, reconcileID, worker-count, count, instance-type-count, mode, offering-count]
│          │  └+ [level, stream, message, err, error, controller, controllerGroup, controllerKind, reconcileID, worker-count, count, instance-type-count, mode, offering-count, NodePool, NodeClaim, Node, zones, subnets, allocatable, command, command-id, decision, deleting-pods, disrupted-node-count, disrupted-nodes, disruption-cost, messageKind, pending-pods, pod-count, replacement-node-count, replacement-nodes, ResourceClaim, savings, total, action, reason]
│          ├[~] logType: AUTO_MODE_IPAM_LOGS
│          │ └destinations:
│          │  ├S3
│          │  │├- outputFormats: [json, plain, w3c, parquet]
│          │  │└+ outputFormats: [plain, json, w3c, parquet]
│          │  └FH
│          │   ├- outputFormats: [json, plain, raw]
│          │   └+ outputFormats: [plain, json, raw]
│          └[~] logType: AUTO_MODE_LOAD_BALANCING_LOGS
│            └destinations:
│             ├S3
│             │├- outputFormats: [json, plain, w3c, parquet]
│             │└+ outputFormats: [plain, json, w3c, parquet]
│             └FH
│              ├- outputFormats: [json, plain, raw]
│              └+ outputFormats: [plain, json, raw]
├[~] service aws-elasticache
│ └ resources
│    └[~]  resource AWS::ElastiCache::CacheCluster
│       ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"ELASTICACHE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: ELASTICACHE_LOGS
│            ├permissionsVersion: V1
│            └destinations: [S3, CWL, FH]
├[~] service aws-elasticloadbalancingv2
│ └ resources
│    └[~]  resource AWS::ElasticLoadBalancingV2::LoadBalancer
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"ALB_ACCESS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["type","time","elb","client_port","target_port","request_processing_time","target_processing_time","response_processing_time","elb_status_code","target_status_code","received_bytes","sent_bytes","request_line","user_agent","ssl_cipher","ssl_protocol","target_group_arn","trace_id","domain_name","chosen_cert_arn","matched_rule_priority","request_creation_time","actions_executed","redirect_url","error_reason","target_port_list","target_status_code_list","classification","classification_reason","conn_trace_id","transformed_host","transformed_uri","request_transform_status","ip_address"]},{"permissionsVersion":"V2","logType":"ALB_CONNECTION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["time","client_ip","client_port","listener_port","tls_protocol","tls_cipher","tls_handshake_latency","leaf_client_cert_subject","leaf_client_cert_validity","leaf_client_cert_serial_number","tls_verify_status","conn_trace_id","tls_keyexchange","elb","ip_address"]},{"permissionsVersion":"V2","logType":"ALB_HEALTH_CHECK_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["type","time","latency","target_addr","target_group_id","status","status_code","reason_code","elb","ip_address"]},{"permissionsVersion":"V2","logType":"NLB_ACCESS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["type","version","time","elb","listener","client_port","destination_port","connection_time","tls_handshake_time","received_bytes","sent_bytes","incoming_tls_alert","chosen_cert_arn","chosen_cert_serial","tls_cipher","tls_protocol_version","tls_keyexchange","domain_name","alpn_fe_protocol","alpn_be_protocol","alpn_client_preference_list","tls_connection_creation_time"]}]
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"ALB_CONNECTION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"mandatoryFields":["time","client_ip","client_port","listener_port","tls_protocol","tls_cipher","tls_handshake_latency","leaf_client_cert_subject","leaf_client_cert_validity","leaf_client_cert_serial_number","tls_verify_status","conn_trace_id","tls_keyexchange","elb","ip_address"]},{"permissionsVersion":"V2","logType":"ALB_HEALTH_CHECK_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"mandatoryFields":["type","time","latency","target_addr","target_group_id","status","status_code","reason_code","elb","ip_address"]},{"permissionsVersion":"V2","logType":"NLB_ACCESS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"mandatoryFields":["type","version","time","elb","listener","client_port","destination_port","connection_time","tls_handshake_time","received_bytes","sent_bytes","incoming_tls_alert","chosen_cert_arn","chosen_cert_serial","tls_cipher","tls_protocol_version","tls_keyexchange","domain_name","alpn_fe_protocol","alpn_be_protocol","alpn_client_preference_list","tls_connection_creation_time"]},{"permissionsVersion":"V2","logType":"ALB_ACCESS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"mandatoryFields":["type","time","elb","client_port","target_port","request_processing_time","target_processing_time","response_processing_time","elb_status_code","target_status_code","received_bytes","sent_bytes","request_line","user_agent","ssl_cipher","ssl_protocol","target_group_arn","trace_id","domain_name","chosen_cert_arn","matched_rule_priority","request_creation_time","actions_executed","redirect_url","error_reason","target_port_list","target_status_code_list","classification","classification_reason","conn_trace_id","transformed_host","transformed_uri","request_transform_status","ip_address"]}]
│       └ vendedLogs
│          ├[~] logType: ALB_ACCESS_LOGS
│          │ └destinations:
│          │  ├S3
│          │  │├- outputFormats: [json, plain, w3c, parquet]
│          │  │└+ outputFormats: [plain, json, w3c, parquet]
│          │  └FH
│          │   ├- outputFormats: [json, plain, raw]
│          │   └+ outputFormats: [plain, json, raw]
│          ├[~] logType: ALB_CONNECTION_LOGS
│          │ └destinations:
│          │  ├S3
│          │  │├- outputFormats: [json, plain, w3c, parquet]
│          │  │└+ outputFormats: [plain, json, w3c, parquet]
│          │  └FH
│          │   ├- outputFormats: [json, plain, raw]
│          │   └+ outputFormats: [plain, json, raw]
│          ├[~] logType: ALB_HEALTH_CHECK_LOGS
│          │ └destinations:
│          │  ├S3
│          │  │├- outputFormats: [json, plain, w3c, parquet]
│          │  │└+ outputFormats: [plain, json, w3c, parquet]
│          │  └FH
│          │   ├- outputFormats: [json, plain, raw]
│          │   └+ outputFormats: [plain, json, raw]
│          └[~] logType: NLB_ACCESS_LOGS
│            └destinations:
│             ├S3
│             │├- outputFormats: [json, plain, w3c, parquet]
│             │└+ outputFormats: [plain, json, w3c, parquet]
│             └FH
│              ├- outputFormats: [json, plain, raw]
│              └+ outputFormats: [plain, json, raw]
├[~] service aws-entityresolution
│ └ resources
│    ├[~]  resource AWS::EntityResolution::IdMappingWorkflow
│    │  ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"WORKFLOW_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"optionalFields":["resource_arn","event_type","event_timestamp","job_id","workflow_name","workflow_start_time","workflow_complete_time","data_processing_progression","error_message","match_rule","match_count","total_records_processed","total_records_unprocessed","incremental_records_processed"]}]
│    │  │      + vendedLogs: [{"permissionsVersion":"V2","logType":"WORKFLOW_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_arn","resource_id","event_type","event_timestamp","job_id","workflow_name","workflow_start_time","workflow_complete_time","data_processing_progression","error_count_map","error_message","error_count","matched_record_count_map","match_rule","match_count","total_records_processed","total_records_unprocessed","incremental_records_processed","workflow_duration","raw_workflow_duration","input_file_size"]}]
│    │  └ vendedLogs
│    │     └[~] logType: WORKFLOW_LOGS
│    │       ├destinations:
│    │       │├S3
│    │       ││├- outputFormats: [json, plain, w3c, parquet]
│    │       ││└+ outputFormats: [plain, json, w3c, parquet]
│    │       │└FH
│    │       │ ├- outputFormats: [json, plain, raw]
│    │       │ └+ outputFormats: [plain, json, raw]
│    │       └optionalFields:
│    │        ├- [resource_arn, event_type, event_timestamp, job_id, workflow_name, workflow_start_time, workflow_complete_time, data_processing_progression, error_message, match_rule, match_count, total_records_processed, total_records_unprocessed, incremental_records_processed]
│    │        └+ [timestamp, resource_arn, resource_id, event_type, event_timestamp, job_id, workflow_name, workflow_start_time, workflow_complete_time, data_processing_progression, error_count_map, error_message, error_count, matched_record_count_map, match_rule, match_count, total_records_processed, total_records_unprocessed, incremental_records_processed, workflow_duration, raw_workflow_duration, input_file_size]
│    └[~]  resource AWS::EntityResolution::MatchingWorkflow
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"WORKFLOW_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"optionalFields":["resource_arn","event_type","event_timestamp","job_id","workflow_name","workflow_start_time","workflow_complete_time","data_processing_progression","error_message","match_rule","match_count","total_records_processed","total_records_unprocessed","incremental_records_processed"]}]
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"WORKFLOW_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_arn","resource_id","event_type","event_timestamp","job_id","workflow_name","workflow_start_time","workflow_complete_time","data_processing_progression","error_count_map","error_message","error_count","matched_record_count_map","match_rule","match_count","total_records_processed","total_records_unprocessed","incremental_records_processed","workflow_duration","raw_workflow_duration","input_file_size"]}]
│       └ vendedLogs
│          └[~] logType: WORKFLOW_LOGS
│            ├destinations:
│            │├S3
│            ││├- outputFormats: [json, plain, w3c, parquet]
│            ││└+ outputFormats: [plain, json, w3c, parquet]
│            │└FH
│            │ ├- outputFormats: [json, plain, raw]
│            │ └+ outputFormats: [plain, json, raw]
│            └optionalFields:
│             ├- [resource_arn, event_type, event_timestamp, job_id, workflow_name, workflow_start_time, workflow_complete_time, data_processing_progression, error_message, match_rule, match_count, total_records_processed, total_records_unprocessed, incremental_records_processed]
│             └+ [timestamp, resource_arn, resource_id, event_type, event_timestamp, job_id, workflow_name, workflow_start_time, workflow_complete_time, data_processing_progression, error_count_map, error_message, error_count, matched_record_count_map, match_rule, match_count, total_records_processed, total_records_unprocessed, incremental_records_processed, workflow_duration, raw_workflow_duration, input_file_size]
├[~] service aws-events
│ └ resources
│    └[~]  resource AWS::Events::EventBus
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"ERROR_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"optionalFields":["resource_arn","message_timestamp_ms","event_bus_name","request_id","event_id","invocation_id","message_type","log_level","details","error"]},{"permissionsVersion":"V2","logType":"INFO_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"optionalFields":["resource_arn","message_timestamp_ms","event_bus_name","request_id","event_id","invocation_id","message_type","log_level","details","error"]},{"permissionsVersion":"V2","logType":"TRACE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"optionalFields":["resource_arn","message_timestamp_ms","event_bus_name","request_id","event_id","invocation_id","message_type","log_level","details","error"]}]
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"ERROR_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_arn","message_timestamp_ms","event_bus_name","request_id","event_id","invocation_id","message_type","log_level","details","error"]},{"permissionsVersion":"V2","logType":"INFO_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_arn","message_timestamp_ms","event_bus_name","request_id","event_id","invocation_id","message_type","log_level","details","error"]},{"permissionsVersion":"V2","logType":"TRACE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_arn","message_timestamp_ms","event_bus_name","request_id","event_id","invocation_id","message_type","log_level","details","error"]}]
│       └ vendedLogs
│          ├[~] logType: ERROR_LOGS
│          │ ├destinations:
│          │ │├S3
│          │ ││├- outputFormats: [json, plain, w3c, parquet]
│          │ ││└+ outputFormats: [plain, json, w3c, parquet]
│          │ │└FH
│          │ │ ├- outputFormats: [json, plain, raw]
│          │ │ └+ outputFormats: [plain, json, raw]
│          │ └optionalFields:
│          │  ├- [resource_arn, message_timestamp_ms, event_bus_name, request_id, event_id, invocation_id, message_type, log_level, details, error]
│          │  └+ [timestamp, resource_arn, message_timestamp_ms, event_bus_name, request_id, event_id, invocation_id, message_type, log_level, details, error]
│          ├[~] logType: INFO_LOGS
│          │ ├destinations:
│          │ │├S3
│          │ ││├- outputFormats: [json, plain, w3c, parquet]
│          │ ││└+ outputFormats: [plain, json, w3c, parquet]
│          │ │└FH
│          │ │ ├- outputFormats: [json, plain, raw]
│          │ │ └+ outputFormats: [plain, json, raw]
│          │ └optionalFields:
│          │  ├- [resource_arn, message_timestamp_ms, event_bus_name, request_id, event_id, invocation_id, message_type, log_level, details, error]
│          │  └+ [timestamp, resource_arn, message_timestamp_ms, event_bus_name, request_id, event_id, invocation_id, message_type, log_level, details, error]
│          └[~] logType: TRACE_LOGS
│            ├destinations:
│            │├S3
│            ││├- outputFormats: [json, plain, w3c, parquet]
│            ││└+ outputFormats: [plain, json, w3c, parquet]
│            │└FH
│            │ ├- outputFormats: [json, plain, raw]
│            │ └+ outputFormats: [plain, json, raw]
│            └optionalFields:
│             ├- [resource_arn, message_timestamp_ms, event_bus_name, request_id, event_id, invocation_id, message_type, log_level, details, error]
│             └+ [timestamp, resource_arn, message_timestamp_ms, event_bus_name, request_id, event_id, invocation_id, message_type, log_level, details, error]
├[~] service aws-glue
│ └ resources
│    └[~]  resource AWS::Glue::Session
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:glue:${Region}:${Account}:session/${SessionId}
├[~] service aws-grafana
│ └ resources
│    └[~]  resource AWS::Grafana::Workspace
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp","body","workspace_id","log_type"]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: APPLICATION_LOGS
│            ├permissionsVersion: V2
│            ├destinations: [S3, CWL, FH]
│            └mandatoryFields: [resource_arn, event_timestamp, body, workspace_id, log_type]
├[~] service aws-iot
│ └ resources
│    └[~]  resource AWS::IoT::Stream
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:iot:${Region}:${Account}:stream/${StreamId}
├[~] service aws-iotfleetwise
│ └ resources
│    ├[~]  resource AWS::IoTFleetWise::Campaign
│    │  ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"IOT_FLEETWISE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│    │  │      + vendedLogs: undefined
│    │  └ vendedLogs
│    │     └[-] logType: IOT_FLEETWISE_LOGS
│    │       ├permissionsVersion: V1
│    │       └destinations: [S3, CWL, FH]
│    └[~]  resource AWS::IoTFleetWise::Vehicle
│       ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"IOT_FLEETWISE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: IOT_FLEETWISE_LOGS
│            ├permissionsVersion: V1
│            └destinations: [S3, CWL, FH]
├[~] service aws-iotwireless
│ └ resources
│    ├[~]  resource AWS::IoTWireless::PartnerAccount
│    │  └      - arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:SidewalkAccount/${AmazonId}
│    │         + arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:SidewalkAccount/${SidewalkAccountId}
│    └[~]  resource AWS::IoTWireless::WirelessDeviceImportTask
│       └      - arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:ImportTask/${ImportTaskId}
│              + arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:WirelessDeviceImportTask/${WirelessDeviceImportTaskId}
├[~] service aws-ivschat
│ └ resources
│    └[~]  resource AWS::IVSChat::Room
│       ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"IVS_CHAT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: IVS_CHAT_LOGS
│            ├permissionsVersion: V1
│            └destinations: [S3, CWL, FH]
├[~] service aws-kafkaconnect
│ └ resources
│    └[~]  resource AWS::KafkaConnect::Connector
│       ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: APPLICATION_LOGS
│            ├permissionsVersion: V1
│            └destinations: [S3, CWL, FH]
├[~] service aws-logs
│ └ resources
│    └[~]  resource AWS::Logs::LogGroup
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"AUDIT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["auditTimestamp","resourceArn","dataIdentifiers"],"optionalFields":["policyName","cloudWatchLogs.EventTimestamp","cloudWatchLogs.LogStream"]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: AUDIT_LOGS
│            ├permissionsVersion: V2
│            ├destinations: [S3, CWL, FH]
│            ├mandatoryFields: [auditTimestamp, resourceArn, dataIdentifiers]
│            └optionalFields: [policyName, cloudWatchLogs.EventTimestamp, cloudWatchLogs.LogStream]
├[~] service aws-m2
│ └ resources
│    └[~]  resource AWS::M2::Application
│       ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"CONFIG_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]},{"permissionsVersion":"V1","logType":"BATCH_JOB_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]},{"permissionsVersion":"V1","logType":"CONSOLE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]},{"permissionsVersion":"V1","logType":"DATASET_IMPORT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          ├[-] logType: CONFIG_LOGS
│          │ ├permissionsVersion: V1
│          │ └destinations: [S3, CWL, FH]
│          ├[-] logType: BATCH_JOB_LOGS
│          │ ├permissionsVersion: V1
│          │ └destinations: [S3, CWL, FH]
│          ├[-] logType: CONSOLE_LOGS
│          │ ├permissionsVersion: V1
│          │ └destinations: [S3, CWL, FH]
│          └[-] logType: DATASET_IMPORT_LOGS
│            ├permissionsVersion: V1
│            └destinations: [S3, CWL, FH]
├[~] service aws-mediapackagev2
│ └ resources
│    └[~]  resource AWS::MediaPackageV2::ChannelGroup
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"EGRESS_ACCESS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"optionalFields":["resource_arn","event_timestamp","client_ip","time_to_first_byte","status_code","received_bytes","sent_bytes","method","request_uri_base","request_query_params","protocol","user_agent","domain_name","request_id","account","channel_id","channel_arn","endpoint_id","endpoint_arn","channel_group_id","manifest_name","manifest_type"]},{"permissionsVersion":"V2","logType":"INGRESS_ACCESS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"optionalFields":["resource_arn","event_timestamp","client_ip","time_to_first_byte","status_code","received_bytes","sent_bytes","method","request","protocol","user_agent","domain_name","request_id","account","channel_id","channel_arn","channel_group_id","input_type","input_index"]}]
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"INGRESS_ACCESS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_arn","event_timestamp","client_ip","time_to_first_byte","status_code","received_bytes","sent_bytes","method","request","protocol","user_agent","domain_name","request_id","account","channel_id","channel_arn","channel_group_id","input_type","input_index"]},{"permissionsVersion":"V2","logType":"EGRESS_ACCESS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_arn","event_timestamp","client_ip","time_to_first_byte","status_code","received_bytes","sent_bytes","method","request_uri_base","request_query_params","protocol","user_agent","domain_name","request_id","account","channel_id","channel_arn","endpoint_id","endpoint_arn","channel_group_id","manifest_name","manifest_type","log_type"]}]
│       └ vendedLogs
│          ├[~] logType: EGRESS_ACCESS_LOGS
│          │ ├destinations:
│          │ │├S3
│          │ ││├- outputFormats: [json, plain, w3c, parquet]
│          │ ││└+ outputFormats: [plain, json, w3c, parquet]
│          │ │└FH
│          │ │ ├- outputFormats: [json, plain, raw]
│          │ │ └+ outputFormats: [plain, json, raw]
│          │ └optionalFields:
│          │  ├- [resource_arn, event_timestamp, client_ip, time_to_first_byte, status_code, received_bytes, sent_bytes, method, request_uri_base, request_query_params, protocol, user_agent, domain_name, request_id, account, channel_id, channel_arn, endpoint_id, endpoint_arn, channel_group_id, manifest_name, manifest_type]
│          │  └+ [timestamp, resource_arn, event_timestamp, client_ip, time_to_first_byte, status_code, received_bytes, sent_bytes, method, request_uri_base, request_query_params, protocol, user_agent, domain_name, request_id, account, channel_id, channel_arn, endpoint_id, endpoint_arn, channel_group_id, manifest_name, manifest_type, log_type]
│          └[~] logType: INGRESS_ACCESS_LOGS
│            ├destinations:
│            │├S3
│            ││├- outputFormats: [json, plain, w3c, parquet]
│            ││└+ outputFormats: [plain, json, w3c, parquet]
│            │└FH
│            │ ├- outputFormats: [json, plain, raw]
│            │ └+ outputFormats: [plain, json, raw]
│            └optionalFields:
│             ├- [resource_arn, event_timestamp, client_ip, time_to_first_byte, status_code, received_bytes, sent_bytes, method, request, protocol, user_agent, domain_name, request_id, account, channel_id, channel_arn, channel_group_id, input_type, input_index]
│             └+ [timestamp, resource_arn, event_timestamp, client_ip, time_to_first_byte, status_code, received_bytes, sent_bytes, method, request, protocol, user_agent, domain_name, request_id, account, channel_id, channel_arn, channel_group_id, input_type, input_index]
├[~] service aws-mediatailor
│ └ resources
│    ├[~]  resource AWS::MediaTailor::PlaybackConfiguration
│    │  ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"AD_DECISION_SERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["eventTimestamp","awsAccountId"],"optionalFields":["originId","customerId","eventType","sessionType","requestId","eventDescription","sessionId","vodVastResponseTimeOffset","adsRequestUrl","adMarkers","segmentationUpid","segmentationTypeId","originalTargetUrl","updatedTargetUrl","rawAdsRequest","rawAdsRequestIndex","rawAdsResponse","rawAdsResponseIndex","avail","vastResponse","vastAd","vodCreativeOffsets","requestHeaders","beaconInfo","adBreakCorrelationId","prefetchScheduleName"]},{"permissionsVersion":"V2","logType":"MANIFEST_SERVICE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["eventTimestamp","awsAccountId","originId"],"optionalFields":["customerId","eventType","sessionType","requestId","eventDescription","sessionId","originRequestUrl","mediaTailorPath","responseBody","requestNextToken","assetPath","originFullUrl","originPrefixUrl","additionalInfo","cause","response","httpCode","errorMessage","adAdsResponse","adAdsRawResponse","adAdsRequest","adNumNewAvails","generatedMediaPlaylist","requestStartTime","requestEndTime","requestStartTimeEpochMillis","requestEndTimeEpochMillis"]},{"permissionsVersion":"V2","logType":"TRANSCODE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["eventTimestamp","awsAccountId","originId"],"optionalFields":["eventType","eventDescription","sessionId","creativeUniqueId","profileName","adUri","transcodeRequestId","cacheStatus"]}]
│    │  │      + vendedLogs: [{"permissionsVersion":"V2","logType":"AD_DECISION_SERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","originId","customerId","eventType","sessionType","requestId","eventDescription","sessionId","vodVastResponseTimeOffset","adsRequestUrl","adMarkers","segmentationUpid","segmentationTypeId","originalTargetUrl","updatedTargetUrl","rawAdsRequest","rawAdsRequestIndex","rawAdsResponse","rawAdsResponseIndex","avail","vastResponse","vastAd","vodCreativeOffsets","requestHeaders","beaconInfo","adBreakCorrelationId","prefetchScheduleName","eventId","functionId","executionTimeMs","functionType","status","errorType","error","additionalInfo","cause","input","output","http"],"mandatoryFields":["eventTimestamp","awsAccountId"]},{"permissionsVersion":"V2","logType":"MANIFEST_SERVICE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","customerId","eventType","sessionType","requestId","eventDescription","sessionId","originRequestUrl","mediaTailorPath","responseBody","requestNextToken","assetPath","originFullUrl","originPrefixUrl","additionalInfo","cause","response","httpCode","errorMessage","adAdsResponse","adAdsRawResponse","adAdsRequest","adNumNewAvails","generatedMediaPlaylist","requestStartTime","requestEndTime","requestStartTimeEpochMillis","requestEndTimeEpochMillis","eventId","functionId","executionTimeMs","functionType","status","errorType","input","output","http"],"mandatoryFields":["eventTimestamp","awsAccountId","originId"]},{"permissionsVersion":"V2","logType":"TRANSCODE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","eventType","eventDescription","sessionId","creativeUniqueId","profileName","adUri","transcodeRequestId","cacheStatus"],"mandatoryFields":["originId","eventTimestamp","awsAccountId"]}]
│    │  └ vendedLogs
│    │     ├[~] logType: AD_DECISION_SERVER_LOGS
│    │     │ ├destinations:
│    │     │ │├S3
│    │     │ ││├- outputFormats: [json, plain, w3c, parquet]
│    │     │ ││└+ outputFormats: [plain, json, w3c, parquet]
│    │     │ │└FH
│    │     │ │ ├- outputFormats: [json, plain, raw]
│    │     │ │ └+ outputFormats: [plain, json, raw]
│    │     │ └optionalFields:
│    │     │  ├- [originId, customerId, eventType, sessionType, requestId, eventDescription, sessionId, vodVastResponseTimeOffset, adsRequestUrl, adMarkers, segmentationUpid, segmentationTypeId, originalTargetUrl, updatedTargetUrl, rawAdsRequest, rawAdsRequestIndex, rawAdsResponse, rawAdsResponseIndex, avail, vastResponse, vastAd, vodCreativeOffsets, requestHeaders, beaconInfo, adBreakCorrelationId, prefetchScheduleName]
│    │     │  └+ [timestamp, originId, customerId, eventType, sessionType, requestId, eventDescription, sessionId, vodVastResponseTimeOffset, adsRequestUrl, adMarkers, segmentationUpid, segmentationTypeId, originalTargetUrl, updatedTargetUrl, rawAdsRequest, rawAdsRequestIndex, rawAdsResponse, rawAdsResponseIndex, avail, vastResponse, vastAd, vodCreativeOffsets, requestHeaders, beaconInfo, adBreakCorrelationId, prefetchScheduleName, eventId, functionId, executionTimeMs, functionType, status, errorType, error, additionalInfo, cause, input, output, http]
│    │     ├[~] logType: MANIFEST_SERVICE_LOGS
│    │     │ ├destinations:
│    │     │ │├S3
│    │     │ ││├- outputFormats: [json, plain, w3c, parquet]
│    │     │ ││└+ outputFormats: [plain, json, w3c, parquet]
│    │     │ │└FH
│    │     │ │ ├- outputFormats: [json, plain, raw]
│    │     │ │ └+ outputFormats: [plain, json, raw]
│    │     │ └optionalFields:
│    │     │  ├- [customerId, eventType, sessionType, requestId, eventDescription, sessionId, originRequestUrl, mediaTailorPath, responseBody, requestNextToken, assetPath, originFullUrl, originPrefixUrl, additionalInfo, cause, response, httpCode, errorMessage, adAdsResponse, adAdsRawResponse, adAdsRequest, adNumNewAvails, generatedMediaPlaylist, requestStartTime, requestEndTime, requestStartTimeEpochMillis, requestEndTimeEpochMillis]
│    │     │  └+ [timestamp, customerId, eventType, sessionType, requestId, eventDescription, sessionId, originRequestUrl, mediaTailorPath, responseBody, requestNextToken, assetPath, originFullUrl, originPrefixUrl, additionalInfo, cause, response, httpCode, errorMessage, adAdsResponse, adAdsRawResponse, adAdsRequest, adNumNewAvails, generatedMediaPlaylist, requestStartTime, requestEndTime, requestStartTimeEpochMillis, requestEndTimeEpochMillis, eventId, functionId, executionTimeMs, functionType, status, errorType, input, output, http]
│    │     └[~] logType: TRANSCODE_LOGS
│    │       ├destinations:
│    │       │├S3
│    │       ││├- outputFormats: [json, plain, w3c, parquet]
│    │       ││└+ outputFormats: [plain, json, w3c, parquet]
│    │       │└FH
│    │       │ ├- outputFormats: [json, plain, raw]
│    │       │ └+ outputFormats: [plain, json, raw]
│    │       ├mandatoryFields:
│    │       │├- [eventTimestamp, awsAccountId, originId]
│    │       │└+ [originId, eventTimestamp, awsAccountId]
│    │       └optionalFields:
│    │        ├- [eventType, eventDescription, sessionId, creativeUniqueId, profileName, adUri, transcodeRequestId, cacheStatus]
│    │        └+ [timestamp, eventType, eventDescription, sessionId, creativeUniqueId, profileName, adUri, transcodeRequestId, cacheStatus]
│    ├[~]  resource AWS::MediaTailor::PrefetchSchedule
│    │  └      - arnTemplate: undefined
│    │         + arnTemplate: arn:${Partition}:mediatailor:${Region}:${Account}:prefetchSchedule/${ResourceId}
│    └[~]  resource AWS::MediaTailor::SourceLocation
│       └      - arnTemplate: arn:${Partition}:mediatailor:${Region}:${Account}:sourceLocation/${ResourceId}
│              + arnTemplate: arn:${Partition}:mediatailor:${Region}:${Account}:sourceLocation/${SourceLocationName}
├[~] service aws-mgn
│ └ resources
│    └[~]  resource AWS::MGN::NetworkMigrationDefinition
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:mgn:${Region}:${Account}:network-migration-definition/${NetworkMigrationDefinitionID}
├[~] service aws-msk
│ └ resources
│    ├[~]  resource AWS::MSK::Channel
│    │  ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"CHANNEL_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│    │  │      + vendedLogs: undefined
│    │  └ vendedLogs
│    │     └[-] logType: CHANNEL_LOGS
│    │       ├permissionsVersion: V1
│    │       └destinations: [S3, CWL, FH]
│    ├[~]  resource AWS::MSK::Cluster
│    │  ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"BROKER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│    │  │      + vendedLogs: undefined
│    │  └ vendedLogs
│    │     └[-] logType: BROKER_LOGS
│    │       ├permissionsVersion: V1
│    │       └destinations: [S3, CWL, FH]
│    └[~]  resource AWS::MSK::Replicator
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["replicator_name","replicator_id","event_timestamp","message"]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: APPLICATION_LOGS
│            ├permissionsVersion: V2
│            ├destinations: [S3, CWL, FH]
│            └mandatoryFields: [replicator_name, replicator_id, event_timestamp, message]
├[~] service aws-networkfirewall
│ └ resources
│    ├[~]  resource AWS::NetworkFirewall::Firewall
│    │  ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"ALERT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]},{"permissionsVersion":"V1","logType":"FLOW_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]},{"permissionsVersion":"V1","logType":"TLS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│    │  │      + vendedLogs: [{"permissionsVersion":"V2","logType":"DENY_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_arn","resourceId","client_src_ip","client_src_port","src_vpc","src_vpce","vpce_account_id","dest_domain","url","http_method","dest_ip","dest_port","http_status_code","first_alert_match","all_matches","final_rule_name","final_rule_group_name","request_size","response_size"],"mandatoryFields":["event_timestamp","proxy_name","final_action"]},{"permissionsVersion":"V2","logType":"ALERT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_arn","resourceId","client_src_ip","client_src_port","src_vpc","src_vpce","vpce_account_id","dest_domain","url","http_method","dest_ip","dest_port","http_status_code","first_alert_match","all_matches","final_rule_name","final_rule_group_name","request_size","response_size"],"mandatoryFields":["event_timestamp","proxy_name","final_action"]},{"permissionsVersion":"V2","logType":"ALLOW_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_arn","resourceId","client_src_ip","client_src_port","src_vpc","src_vpce","vpce_account_id","dest_domain","url","http_method","dest_ip","dest_port","http_status_code","first_alert_match","all_matches","final_rule_name","final_rule_group_name","request_size","response_size"],"mandatoryFields":["event_timestamp","proxy_name","final_action"]}]
│    │  └ vendedLogs
│    │     ├[~] logType: ALERT_LOGS
│    │     │ ├permissionsVersion:
│    │     │ │├- V1
│    │     │ │└+ V2
│    │     │ ├destinations:
│    │     │ │├S3
│    │     │ ││├- outputFormats: [json, plain, w3c, parquet]
│    │     │ ││└+ outputFormats: [plain, json, w3c, parquet]
│    │     │ │└FH
│    │     │ │ ├- outputFormats: [json, plain, raw]
│    │     │ │ └+ outputFormats: [plain, json, raw]
│    │     │ ├mandatoryFields:
│    │     │ │└+ [event_timestamp, proxy_name, final_action]
│    │     │ └optionalFields:
│    │     │  └+ [timestamp, resource_arn, resourceId, client_src_ip, client_src_port, src_vpc, src_vpce, vpce_account_id, dest_domain, url, http_method, dest_ip, dest_port, http_status_code, first_alert_match, all_matches, final_rule_name, final_rule_group_name, request_size, response_size]
│    │     ├[-] logType: FLOW_LOGS
│    │     │ ├permissionsVersion: V1
│    │     │ └destinations: [S3, CWL, FH]
│    │     ├[-] logType: TLS_LOGS
│    │     │ ├permissionsVersion: V1
│    │     │ └destinations: [S3, CWL, FH]
│    │     ├[+] logType: DENY_LOGS
│    │     │ ├permissionsVersion: V2
│    │     │ ├destinations: [S3, CWL, FH]
│    │     │ ├mandatoryFields: [event_timestamp, proxy_name, final_action]
│    │     │ └optionalFields: [timestamp, resource_arn, resourceId, client_src_ip, client_src_port, src_vpc, src_vpce, vpce_account_id, dest_domain, url, http_method, dest_ip, dest_port, http_status_code, first_alert_match, all_matches, final_rule_name, final_rule_group_name, request_size, response_size]
│    │     └[+] logType: ALLOW_LOGS
│    │       ├permissionsVersion: V2
│    │       ├destinations: [S3, CWL, FH]
│    │       ├mandatoryFields: [event_timestamp, proxy_name, final_action]
│    │       └optionalFields: [timestamp, resource_arn, resourceId, client_src_ip, client_src_port, src_vpc, src_vpce, vpce_account_id, dest_domain, url, http_method, dest_ip, dest_port, http_status_code, first_alert_match, all_matches, final_rule_name, final_rule_group_name, request_size, response_size]
│    └[~]  resource AWS::NetworkFirewall::RuleGroup
│       └      - arnTemplate: arn:${Partition}:network-firewall:${Region}:${Account}:stateless-rulegroup/${Name}
│              + arnTemplate: arn:${Partition}:network-firewall:${Region}:${Account}:stateful-rulegroup/${Name}
├[~] service aws-networkmanager
│ └ resources
│    ├[~]  resource AWS::NetworkManager::ConnectAttachment
│    │  └      - arnTemplate: arn:${Partition}:networkmanager::${Account}:attachment/${ResourceId}
│    │         + arnTemplate: arn:${Partition}:networkmanager::${Account}:attachment/${AttachmentId}
│    └[~]  resource AWS::NetworkManager::VpcAttachment
│       └      - arnTemplate: arn:${Partition}:networkmanager::${Account}:attachment/${ResourceId}
│              + arnTemplate: arn:${Partition}:networkmanager::${Account}:attachment/${AttachmentId}
├[~] service aws-omics
│ └ resources
│    └[~]  resource AWS::Omics::RunCache
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:omics:${Region}:${Account}:runCache/${Id}
├[~] service aws-osis
│ └ resources
│    └[~]  resource AWS::OSIS::Pipeline
│       ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"PIPELINE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: PIPELINE_LOGS
│            ├permissionsVersion: V1
│            └destinations: [S3, CWL, FH]
├[~] service aws-pcs
│ └ resources
│    └[~]  resource AWS::PCS::Cluster
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"PCS_JOBCOMP_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_id","resource_type","event_timestamp","scheduler_type","scheduler_major_version","fields"]},{"permissionsVersion":"V2","logType":"PCS_SCHEDULER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_id","resource_type","event_timestamp","log_level","log_name","scheduler_type","scheduler_major_version","scheduler_patch_version","node_type","message"]},{"permissionsVersion":"V2","logType":"PCS_SCHEDULER_AUDIT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_id","resource_type","event_timestamp","log_level","log_name","scheduler_type","scheduler_major_version","scheduler_patch_version","node_type","log_type","message"]}]
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"PCS_SCHEDULER_AUDIT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp"],"mandatoryFields":["resource_id","resource_type","event_timestamp","log_level","log_name","scheduler_type","scheduler_major_version","scheduler_patch_version","node_type","log_type","message"]},{"permissionsVersion":"V2","logType":"PCS_JOBCOMP_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp"],"mandatoryFields":["resource_id","resource_type","event_timestamp","scheduler_type","scheduler_major_version","fields"]},{"permissionsVersion":"V2","logType":"PCS_SCHEDULER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp"],"mandatoryFields":["resource_id","resource_type","event_timestamp","log_level","log_name","scheduler_type","scheduler_major_version","scheduler_patch_version","node_type","message"]}]
│       └ vendedLogs
│          ├[~] logType: PCS_JOBCOMP_LOGS
│          │ ├destinations:
│          │ │├S3
│          │ ││├- outputFormats: [json, plain, w3c, parquet]
│          │ ││└+ outputFormats: [plain, json, w3c, parquet]
│          │ │└FH
│          │ │ ├- outputFormats: [json, plain, raw]
│          │ │ └+ outputFormats: [plain, json, raw]
│          │ └optionalFields:
│          │  └+ [timestamp]
│          ├[~] logType: PCS_SCHEDULER_LOGS
│          │ ├destinations:
│          │ │├S3
│          │ ││├- outputFormats: [json, plain, w3c, parquet]
│          │ ││└+ outputFormats: [plain, json, w3c, parquet]
│          │ │└FH
│          │ │ ├- outputFormats: [json, plain, raw]
│          │ │ └+ outputFormats: [plain, json, raw]
│          │ └optionalFields:
│          │  └+ [timestamp]
│          └[~] logType: PCS_SCHEDULER_AUDIT_LOGS
│            ├destinations:
│            │├S3
│            ││├- outputFormats: [json, plain, w3c, parquet]
│            ││└+ outputFormats: [plain, json, w3c, parquet]
│            │└FH
│            │ ├- outputFormats: [json, plain, raw]
│            │ └+ outputFormats: [plain, json, raw]
│            └optionalFields:
│             └+ [timestamp]
├[~] service aws-personalize
│ └ resources
│    └[~]  resource AWS::Personalize::MetricAttribution
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:personalize:${Region}:${Account}:metric-attribution/${ResourceId}
├[~] service aws-pinpoint
│ └ resources
│    ├[~]  resource AWS::Pinpoint::EmailTemplate
│    │  └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/SMS
│    │         + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/EMAIL
│    ├[~]  resource AWS::Pinpoint::InAppTemplate
│    │  └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/SMS
│    │         + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/EMAIL
│    └[~]  resource AWS::Pinpoint::PushTemplate
│       └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/SMS
│              + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/PUSH
├[~] service aws-pipes
│ └ resources
│    └[~]  resource AWS::Pipes::Pipe
│       ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"EXECUTION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: EXECUTION_LOGS
│            ├permissionsVersion: V1
│            └destinations: [S3, CWL, FH]
├[~] service aws-qbusiness
│ └ resources
│    └[~]  resource AWS::QBusiness::Application
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"SYNC_JOB_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["applicationId","event_timestamp","FeatureName","LogLevel"],"optionalFields":["AwsAccountId","DataSourceId","SyncJobId","IndexId","MemberName","MemberGlobalName","DocumentId","DocumentTitle","SourceUri","Acl","Metadata","Type","CrawlAction","CrawlStatus","SyncStatus","IndexStatus","ConnectorDocumentStatus","MemberType","IsMemberFederated","Message","JsonMessage","GroupName","GroupGlobalName","IsGroupFederated","HashedDocumentId","ContentType","IntermediateStatus","ErrorMsg"]},{"permissionsVersion":"V2","logType":"EVENT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"optionalFields":["application_id","event_timestamp","log_type","account_id","conversation_id","system_message_id","user_message_id","user_message","system_message","output_metrics_is_message_blocked","output_metrics_is_message_with_no_answer","comment","usefulness_reason","usefulness"]}]
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"EVENT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","application_id","event_timestamp","log_type","account_id","conversation_id","system_message_id","user_message_id","user_message","system_message","output_metrics_is_message_blocked","output_metrics_is_message_with_no_answer","comment","usefulness_reason","usefulness","user_email","hallucinated_message","chat_mode","chat_latency","time_to_first_token","title","url","chat_type","plugin_id","plugin_type","unique_user_id"]},{"permissionsVersion":"V2","logType":"SYNC_JOB_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","AwsAccountId","DataSourceId","SyncJobId","IndexId","MemberName","MemberGlobalName","DocumentId","DocumentTitle","SourceUri","Acl","Metadata","Type","CrawlAction","CrawlStatus","SyncStatus","IndexStatus","ConnectorDocumentStatus","MemberType","IsMemberFederated","Message","JsonMessage","GroupName","GroupGlobalName","IsGroupFederated","HashedDocumentId","ContentType","IntermediateStatus","ErrorMsg"],"mandatoryFields":["applicationId","event_timestamp","FeatureName","LogLevel"]}]
│       └ vendedLogs
│          ├[~] logType: SYNC_JOB_LOGS
│          │ ├destinations:
│          │ │├S3
│          │ ││├- outputFormats: [json, plain, w3c, parquet]
│          │ ││└+ outputFormats: [plain, json, w3c, parquet]
│          │ │└FH
│          │ │ ├- outputFormats: [json, plain, raw]
│          │ │ └+ outputFormats: [plain, json, raw]
│          │ └optionalFields:
│          │  ├- [AwsAccountId, DataSourceId, SyncJobId, IndexId, MemberName, MemberGlobalName, DocumentId, DocumentTitle, SourceUri, Acl, Metadata, Type, CrawlAction, CrawlStatus, SyncStatus, IndexStatus, ConnectorDocumentStatus, MemberType, IsMemberFederated, Message, JsonMessage, GroupName, GroupGlobalName, IsGroupFederated, HashedDocumentId, ContentType, IntermediateStatus, ErrorMsg]
│          │  └+ [timestamp, AwsAccountId, DataSourceId, SyncJobId, IndexId, MemberName, MemberGlobalName, DocumentId, DocumentTitle, SourceUri, Acl, Metadata, Type, CrawlAction, CrawlStatus, SyncStatus, IndexStatus, ConnectorDocumentStatus, MemberType, IsMemberFederated, Message, JsonMessage, GroupName, GroupGlobalName, IsGroupFederated, HashedDocumentId, ContentType, IntermediateStatus, ErrorMsg]
│          └[~] logType: EVENT_LOGS
│            ├destinations:
│            │├S3
│            ││├- outputFormats: [json, plain, w3c, parquet]
│            ││└+ outputFormats: [plain, json, w3c, parquet]
│            │└FH
│            │ ├- outputFormats: [json, plain, raw]
│            │ └+ outputFormats: [plain, json, raw]
│            └optionalFields:
│             ├- [application_id, event_timestamp, log_type, account_id, conversation_id, system_message_id, user_message_id, user_message, system_message, output_metrics_is_message_blocked, output_metrics_is_message_with_no_answer, comment, usefulness_reason, usefulness]
│             └+ [timestamp, application_id, event_timestamp, log_type, account_id, conversation_id, system_message_id, user_message_id, user_message, system_message, output_metrics_is_message_blocked, output_metrics_is_message_with_no_answer, comment, usefulness_reason, usefulness, user_email, hallucinated_message, chat_mode, chat_latency, time_to_first_token, title, url, chat_type, plugin_id, plugin_type, unique_user_id]
├[~] service aws-quicksight
│ └ resources
│    ├[~]  resource AWS::QuickSight::Analysis
│    │  └      - arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:analysis/${ResourceId}
│    │         + arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:analysis/${AnalysisId}
│    └[~]  resource AWS::QuickSight::Folder
│       └      - arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:folder/${ResourceId}
│              + arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:folder/${FolderId}
├[~] service aws-ram
│ └ resources
│    └[~]  resource AWS::RAM::Permission
│       └      - arnTemplate: arn:${Partition}:ram::${Account}:permission/${ResourcePath}
│              + arnTemplate: arn:${Partition}:ram:${Region}:${Account}:permission/${ResourcePath}
├[~] service aws-rds
│ └ resources
│    ├[~]  resource AWS::RDS::ClusterSnapshot
│    │  └      - arnTemplate: undefined
│    │         + arnTemplate: arn:${Partition}:rds:${Region}:${Account}:cluster-snapshot:${ClusterSnapshotName}
│    ├[~]  resource AWS::RDS::DBInstance
│    │  └      - arnTemplate: arn:${Partition}:rds:${Region}:${Account}:db:${DBInstanceId}
│    │         + arnTemplate: arn:${Partition}:rds:${Region}:${Account}:db:${DbInstanceName}
│    ├[~]  resource AWS::RDS::DBParameterGroup
│    │  └      - arnTemplate: arn:${Partition}:rds:${Region}:${Account}:pg:${DBParameterGroupName}
│    │         + arnTemplate: arn:${Partition}:rds:${Region}:${Account}:pg:${ParameterGroupName}
│    └[~]  resource AWS::RDS::DBSnapshot
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:rds:${Region}:${Account}:snapshot:${SnapshotName}
├[~] service aws-rekognition
│ └ resources
│    └[~]  resource AWS::Rekognition::StreamProcessor
│       └      - arnTemplate: arn:${Partition}:rekognition:${Region}:${Account}:streamprocessor/${Name}
│              + arnTemplate: arn:${Partition}:rekognition:${Region}:${Account}:streamprocessor/${StreamprocessorId}
├[~] service aws-route53globalresolver
│ └ resources
│    └[~]  resource AWS::Route53GlobalResolver::GlobalResolver
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"GLOBAL_RESOLVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["action_id","activity_id","category_uid","class_uid","cloud","metadata","severity_id","src_endpoint","time","type_uid"],"optionalFields":["action_name","activity_name","answers","category_name","class_name","connection_info","disposition","disposition_id","duration","end_time","enrichments","message","query","query_time","rcode","rcode_id","response_time","severity","start_time","status","status_id","type_name"]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: GLOBAL_RESOLVER_LOGS
│            ├permissionsVersion: V2
│            ├destinations: [S3, CWL, FH]
│            ├mandatoryFields: [action_id, activity_id, category_uid, class_uid, cloud, metadata, severity_id, src_endpoint, time, type_uid]
│            └optionalFields: [action_name, activity_name, answers, category_name, class_name, connection_info, disposition, disposition_id, duration, end_time, enrichments, message, query, query_time, rcode, rcode_id, response_time, severity, start_time, status, status_id, type_name]
├[~] service aws-route53profiles
│ └ resources
│    └[~]  resource AWS::Route53Profiles::Profile
│       ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"ROUTE53_PROFILES_RESOLVER_QUERY_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: ROUTE53_PROFILES_RESOLVER_QUERY_LOGS
│            ├permissionsVersion: V1
│            └destinations: [S3, CWL, FH]
├[~] service aws-rtbfabric
│ └ resources
│    └[~]  resource AWS::RTBFabric::Link
│       ├      - vendedLogs: undefined
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_arn","resource_id","event_timestamp","bid_request_id","rtbfabric_request_id","message","status_code","correlation_id"],"mandatoryFields":["rtbfabric_event_timestamp","event_type","link_id"]}]
│       └ vendedLogs
│          └[+] logType: APPLICATION_LOGS
│            ├permissionsVersion: V2
│            ├destinations: [S3, CWL, FH]
│            ├mandatoryFields: [rtbfabric_event_timestamp, event_type, link_id]
│            └optionalFields: [timestamp, resource_arn, resource_id, event_timestamp, bid_request_id, rtbfabric_request_id, message, status_code, correlation_id]
├[~] service aws-rum
│ └ resources
│    └[~]  resource AWS::RUM::AppMonitor
│       ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"RUM_TELEMETRY_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]},{"permissionsVersion":"V1","logType":"RUM_OTEL_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]},{"permissionsVersion":"V1","logType":"RUM_OTEL_SPANS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          ├[-] logType: RUM_TELEMETRY_LOGS
│          │ ├permissionsVersion: V1
│          │ └destinations: [S3, CWL, FH]
│          ├[-] logType: RUM_OTEL_LOGS
│          │ ├permissionsVersion: V1
│          │ └destinations: [S3, CWL, FH]
│          └[-] logType: RUM_OTEL_SPANS
│            ├permissionsVersion: V1
│            └destinations: [S3, CWL, FH]
├[~] service aws-s3
│ └ resources
│    └[~]  resource AWS::S3::Bucket
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"S3_SERVER_ACCESS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","parquet"]},{"destinationType":"CWL","outputFormats":["json"]},{"destinationType":"FH","outputFormats":["json"]}],"mandatoryFields":["schema_version_id","bucket_arn","request_time","bucket_owner_id","remote_ip","requester","request_id","operation","key_name","request_uri","http_status","error_code","bytes_sent_size","object_size","total_duration","turn_around_duration","referer","user_agent","version_id","host_id","signature_version","cipher_suite","authentication_type","host_header","tls_version","access_point_arn","acl_required","source_region"],"optionalFields":["bucket_name"]}]
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"S3_SERVER_ACCESS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","parquet"]},{"destinationType":"CWL","outputFormats":["json"]},{"destinationType":"FH","outputFormats":["json"]}],"mandatoryFields":["schema_version_id","bucket_arn","bucket_name","request_time","bucket_owner_id","remote_ip","requester","request_id","operation","key_name","request_uri","http_status","error_code","bytes_sent_size","object_size","total_duration","turn_around_duration","referer","user_agent","version_id","host_id","signature_version","cipher_suite","authentication_type","host_header","tls_version","access_point_arn","acl_required","source_region"]}]
│       └ vendedLogs
│          └[~] logType: S3_SERVER_ACCESS_LOGS
│            ├mandatoryFields:
│            │├- [schema_version_id, bucket_arn, request_time, bucket_owner_id, remote_ip, requester, request_id, operation, key_name, request_uri, http_status, error_code, bytes_sent_size, object_size, total_duration, turn_around_duration, referer, user_agent, version_id, host_id, signature_version, cipher_suite, authentication_type, host_header, tls_version, access_point_arn, acl_required, source_region]
│            │└+ [schema_version_id, bucket_arn, bucket_name, request_time, bucket_owner_id, remote_ip, requester, request_id, operation, key_name, request_uri, http_status, error_code, bytes_sent_size, object_size, total_duration, turn_around_duration, referer, user_agent, version_id, host_id, signature_version, cipher_suite, authentication_type, host_header, tls_version, access_point_arn, acl_required, source_region]
│            └optionalFields:
│             └- [bucket_name]
├[~] service aws-sagemaker
│ └ resources
│    └[~]  resource AWS::SageMaker::Workteam
│       ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"ACTIVITY_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]}]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: ACTIVITY_LOGS
│            ├permissionsVersion: V1
│            └destinations: [S3, CWL]
├[~] service aws-securityhub
│ └ resources
│    ├[~]  resource AWS::SecurityHub::Hub
│    │  ├      - vendedLogs: undefined
│    │  │      + vendedLogs: [{"permissionsVersion":"V2","logType":"SECURITY_FINDING_LOGS","destinations":[{"destinationType":"CWL","outputFormats":["plain"]}],"mandatoryFields":["event"]}]
│    │  └ vendedLogs
│    │     └[+] logType: SECURITY_FINDING_LOGS
│    │       ├permissionsVersion: V2
│    │       ├destinations: [CWL]
│    │       └mandatoryFields: [event]
│    └[~]  resource AWS::SecurityHub::HubV2
│       ├      - vendedLogs: undefined
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"SECURITY_FINDING_LOGS","destinations":[{"destinationType":"CWL","outputFormats":["plain"]}],"mandatoryFields":["event"]}]
│       └ vendedLogs
│          └[+] logType: SECURITY_FINDING_LOGS
│            ├permissionsVersion: V2
│            ├destinations: [CWL]
│            └mandatoryFields: [event]
├[~] service aws-ses
│ └ resources
│    ├[~]  resource AWS::SES::MailManagerIngressPoint
│    │  ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp","message_id"],"optionalFields":["ingress_point_type","ingress_point_id","sender_ip_address","smtp_mail_from","smtp_helo","tls_protocol","recipients","ingress_point_metadata","tls_cipher_suite","message_size_bytes","rule_set_id"]},{"permissionsVersion":"V2","logType":"TRAFFIC_POLICY_DEBUG_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["ingress_point_type","ingress_point_id","ingress_point_session_id","traffic_policy_id","traffic_policy_evaluation","traffic_policy_verdict","sender_ip_address","smtp_mail_from","smtp_helo","tls_protocol","recipient","tls_cipher_suite"]}]
│    │  │      + vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","ingress_point_id","ingress_point_type","sender_ip_address","smtp_mail_from","smtp_helo","tls_protocol","recipients","ingress_point_metadata","tls_cipher_suite","message_size_bytes","rule_set_id","vpc_endpoint_id"],"mandatoryFields":["resource_arn","event_timestamp","message_id"]},{"permissionsVersion":"V2","logType":"TRAFFIC_POLICY_DEBUG_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","ingress_point_id","ingress_point_type","ingress_point_session_id","traffic_policy_id","traffic_policy_evaluation","traffic_policy_verdict","sender_ip_address","smtp_mail_from","smtp_helo","tls_protocol","recipient","tls_cipher_suite"],"mandatoryFields":["resource_arn","event_timestamp"]}]
│    │  └ vendedLogs
│    │     ├[~] logType: APPLICATION_LOGS
│    │     │ ├destinations:
│    │     │ │├S3
│    │     │ ││├- outputFormats: [json, plain, w3c, parquet]
│    │     │ ││└+ outputFormats: [plain, json, w3c, parquet]
│    │     │ │└FH
│    │     │ │ ├- outputFormats: [json, plain, raw]
│    │     │ │ └+ outputFormats: [plain, json, raw]
│    │     │ └optionalFields:
│    │     │  ├- [ingress_point_type, ingress_point_id, sender_ip_address, smtp_mail_from, smtp_helo, tls_protocol, recipients, ingress_point_metadata, tls_cipher_suite, message_size_bytes, rule_set_id]
│    │     │  └+ [timestamp, ingress_point_id, ingress_point_type, sender_ip_address, smtp_mail_from, smtp_helo, tls_protocol, recipients, ingress_point_metadata, tls_cipher_suite, message_size_bytes, rule_set_id, vpc_endpoint_id]
│    │     └[~] logType: TRAFFIC_POLICY_DEBUG_LOGS
│    │       ├destinations:
│    │       │├S3
│    │       ││├- outputFormats: [json, plain, w3c, parquet]
│    │       ││└+ outputFormats: [plain, json, w3c, parquet]
│    │       │└FH
│    │       │ ├- outputFormats: [json, plain, raw]
│    │       │ └+ outputFormats: [plain, json, raw]
│    │       └optionalFields:
│    │        ├- [ingress_point_type, ingress_point_id, ingress_point_session_id, traffic_policy_id, traffic_policy_evaluation, traffic_policy_verdict, sender_ip_address, smtp_mail_from, smtp_helo, tls_protocol, recipient, tls_cipher_suite]
│    │        └+ [timestamp, ingress_point_id, ingress_point_type, ingress_point_session_id, traffic_policy_id, traffic_policy_evaluation, traffic_policy_verdict, sender_ip_address, smtp_mail_from, smtp_helo, tls_protocol, recipient, tls_cipher_suite]
│    └[~]  resource AWS::SES::MailManagerRuleSet
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp","message_id","rule_set_name"],"optionalFields":["rule_name","rule_index","recipients_matched","action_metadata"]}]
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","rule_set_id","rule_name","rule_index","recipients_matched","action_metadata"],"mandatoryFields":["resource_arn","event_timestamp","message_id","rule_set_name"]}]
│       └ vendedLogs
│          └[~] logType: APPLICATION_LOGS
│            ├destinations:
│            │├S3
│            ││├- outputFormats: [json, plain, w3c, parquet]
│            ││└+ outputFormats: [plain, json, w3c, parquet]
│            │└FH
│            │ ├- outputFormats: [json, plain, raw]
│            │ └+ outputFormats: [plain, json, raw]
│            └optionalFields:
│             ├- [rule_name, rule_index, recipients_matched, action_metadata]
│             └+ [timestamp, rule_set_id, rule_name, rule_index, recipients_matched, action_metadata]
├[~] service aws-shield
│ └ resources
│    └[~]  resource AWS::Shield::Protection
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"FLOW_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["protection_arn","event_timestamp","version"],"optionalFields":["srcaddr","dstaddr","srcport","dstport","protocol","packets","bytes","starttime","endtime","action","location","sampling_rate","tcp_flags","srccountry"]}]
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"FLOW_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","srcaddr","dstaddr","srcport","dstport","protocol","packets","bytes","starttime","endtime","action","location","sampling_rate","tcp_flags","srccountry"],"mandatoryFields":["protection_arn","event_timestamp","version"]}]
│       └ vendedLogs
│          └[~] logType: FLOW_LOGS
│            ├destinations:
│            │├S3
│            ││├- outputFormats: [json, plain, w3c, parquet]
│            ││└+ outputFormats: [plain, json, w3c, parquet]
│            │└FH
│            │ ├- outputFormats: [json, plain, raw]
│            │ └+ outputFormats: [plain, json, raw]
│            └optionalFields:
│             ├- [srcaddr, dstaddr, srcport, dstport, protocol, packets, bytes, starttime, endtime, action, location, sampling_rate, tcp_flags, srccountry]
│             └+ [timestamp, srcaddr, dstaddr, srcport, dstport, protocol, packets, bytes, starttime, endtime, action, location, sampling_rate, tcp_flags, srccountry]
├[~] service aws-stepfunctions
│ └ resources
│    └[~]  resource AWS::StepFunctions::StateMachine
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"EXPRESS_LOGS","destinations":[{"destinationType":"CWL","outputFormats":["plain","json"]}],"mandatoryFields":["id","type","previous_event_id","event_timestamp","execution_arn"],"optionalFields":["details","map_run_arn","parent_execution_arn","redrive_count"]},{"permissionsVersion":"V2","logType":"STANDARD_LOGS","destinations":[{"destinationType":"CWL","outputFormats":["plain","json"]}],"mandatoryFields":["id","type","previous_event_id","event_timestamp","execution_arn"],"optionalFields":["details","map_run_arn","parent_execution_arn","redrive_count"]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          ├[-] logType: EXPRESS_LOGS
│          │ ├permissionsVersion: V2
│          │ ├destinations: [CWL]
│          │ ├mandatoryFields: [id, type, previous_event_id, event_timestamp, execution_arn]
│          │ └optionalFields: [details, map_run_arn, parent_execution_arn, redrive_count]
│          └[-] logType: STANDARD_LOGS
│            ├permissionsVersion: V2
│            ├destinations: [CWL]
│            ├mandatoryFields: [id, type, previous_event_id, event_timestamp, execution_arn]
│            └optionalFields: [details, map_run_arn, parent_execution_arn, redrive_count]
├[~] service aws-textract
│ └ resources
│    └[~]  resource AWS::Textract::Adapter
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:textract:${Region}:${Account}:/adapters/${AdapterId}
├[~] service aws-transfer
│ └ resources
│    └[~]  resource AWS::Transfer::Server
│       ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"TRANSFER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: TRANSFER_LOGS
│            ├permissionsVersion: V1
│            └destinations: [S3, CWL, FH]
├[~] service aws-translate
│ └ resources
│    └[~]  resource AWS::Translate::ParallelData
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:translate:${Region}:${Account}:parallel-data/${ResourceName}
├[~] service aws-vpclattice
│ └ resources
│    ├[~]  resource AWS::VpcLattice::ResourceConfiguration
│    │  ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"RESOURCE_ACCESS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│    │  │      + vendedLogs: undefined
│    │  └ vendedLogs
│    │     └[-] logType: RESOURCE_ACCESS_LOGS
│    │       ├permissionsVersion: V1
│    │       └destinations: [S3, CWL, FH]
│    └[~]  resource AWS::VpcLattice::Service
│       ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"ACCESS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          └[-] logType: ACCESS_LOGS
│            ├permissionsVersion: V1
│            └destinations: [S3, CWL, FH]
├[~] service aws-wafv2
│ └ resources
│    └[~]  resource AWS::WAFv2::WebACL
│       ├      - vendedLogs: [{"permissionsVersion":"V1","logType":"ACCESS_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]},{"permissionsVersion":"V1","logType":"TOKEN_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│       │      + vendedLogs: undefined
│       └ vendedLogs
│          ├[-] logType: ACCESS_LOGS
│          │ ├permissionsVersion: V1
│          │ └destinations: [S3, CWL, FH]
│          └[-] logType: TOKEN_LOGS
│            ├permissionsVersion: V1
│            └destinations: [S3, CWL, FH]
└[~] service aws-wisdom
  └ resources
     └[~]  resource AWS::Wisdom::Assistant
        ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"EVENT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"optionalFields":["assistant_id","event_timestamp","event_type","session_id","session_name","recommendation_id","recommendation","is_recommendation_useful","relevance_score","recommendation_title","recommendation_sources","intent_id","intent","intent_clicked","utterance","prompt","response","session_event_id","session_event_ids","issue_probability","is_valid_trigger","prompt_type","completion","model_id","connect_user_arn","conversation_session_data","session_message_id","parsed_response","answer_id","generation_id","ai_agent_id","ai_agent_name","ai_guardrail_id","name","ai_guardrail","content","action","action_reason","outputs","assessments","usage","guardrail_coverage","ai_agent_version","guardrail_blocked","participant","values","orchestration_id","ai_agent_orchestration_use_case","orchestration_iteration","orchestration_error"]}]
        │      + vendedLogs: [{"permissionsVersion":"V2","logType":"EVENT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","assistant_id","event_timestamp","event_type","session_id","session_name","recommendation_id","recommendation","is_recommendation_useful","relevance_score","recommendation_title","recommendation_sources","intent_id","intent","intent_clicked","utterance","prompt","response","session_event_id","session_event_ids","issue_probability","is_valid_trigger","prompt_type","completion","model_id","connect_user_arn","conversation_session_data","session_message_id","parsed_response","answer_id","generation_id","ai_agent_id","ai_agent_name","ai_guardrail_id","name","ai_guardrail","content","action","action_reason","outputs","assessments","usage","guardrail_coverage","ai_agent_version","guardrail_blocked","participant","values","orchestration_id","ai_agent_orchestration_use_case","orchestration_iteration","orchestration_error","span"]}]
        └ vendedLogs
           └[~] logType: EVENT_LOGS
             ├destinations:
             │├S3
             ││├- outputFormats: [json, plain, w3c, parquet]
             ││└+ outputFormats: [plain, json, w3c, parquet]
             │└FH
             │ ├- outputFormats: [json, plain, raw]
             │ └+ outputFormats: [plain, json, raw]
             └optionalFields:
              ├- [assistant_id, event_timestamp, event_type, session_id, session_name, recommendation_id, recommendation, is_recommendation_useful, relevance_score, recommendation_title, recommendation_sources, intent_id, intent, intent_clicked, utterance, prompt, response, session_event_id, session_event_ids, issue_probability, is_valid_trigger, prompt_type, completion, model_id, connect_user_arn, conversation_session_data, session_message_id, parsed_response, answer_id, generation_id, ai_agent_id, ai_agent_name, ai_guardrail_id, name, ai_guardrail, content, action, action_reason, outputs, assessments, usage, guardrail_coverage, ai_agent_version, guardrail_blocked, participant, values, orchestration_id, ai_agent_orchestration_use_case, orchestration_iteration, orchestration_error]
              └+ [timestamp, assistant_id, event_timestamp, event_type, session_id, session_name, recommendation_id, recommendation, is_recommendation_useful, relevance_score, recommendation_title, recommendation_sources, intent_id, intent, intent_clicked, utterance, prompt, response, session_event_id, session_event_ids, issue_probability, is_valid_trigger, prompt_type, completion, model_id, connect_user_arn, conversation_session_data, session_message_id, parsed_response, answer_id, generation_id, ai_agent_id, ai_agent_name, ai_guardrail_id, name, ai_guardrail, content, action, action_reason, outputs, assessments, usage, guardrail_coverage, ai_agent_version, guardrail_blocked, participant, values, orchestration_id, ai_agent_orchestration_use_case, orchestration_iteration, orchestration_error, span]
```

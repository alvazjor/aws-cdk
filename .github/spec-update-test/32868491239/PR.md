Updates the L1 CloudFormation resource definitions with the latest changes from `@aws-cdk/aws-service-spec`

**L1 CloudFormation resource definition changes:**
```
├[~] service aws-accessanalyzer
│ └ resources
│    └[+]  resource AWS::AccessAnalyzer::ArchiveRule
│       ├      name: ArchiveRule
│       │      cloudFormationType: AWS::AccessAnalyzer::ArchiveRule
│       │      documentation: Creates an archive rule for the specified analyzer. Archive rules automatically archive new findings that meet the criteria you define when you create the rule.
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ AnalyzerName: string (required, immutable)
│       │  ├ RuleName: string (required, immutable)
│       │  └ Filter: Map<string, FilterItems> (required)
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ CreatedAt: string
│       │  └ UpdatedAt: string
│       └ types
│          └ type FilterItems
│            ├      name: FilterItems
│            └ properties
│               ├ Eq: Array<string>
│               ├ Neq: Array<string>
│               ├ Contains: Array<string>
│               └ Exists: boolean
├[+] service aws-accountaccess
│ ├      capitalized: AccountAccess
│ │      cloudFormationNamespace: AWS::AccountAccess
│ │      name: aws-accountaccess
│ │      shortName: accountaccess
│ └ resources
│    ├ resource AWS::AccountAccess::Application
│    │ ├      name: Application
│    │ │      cloudFormationType: AWS::AccountAccess::Application
│    │ │      documentation: Resource Type definition for AWS::AccountAccess::Application specifying an application for account access
│    │ │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │ │      arnTemplate: arn:${Partition}:account-access:${Region}:${Account}:application/${ResourceId}
│    │ │      primaryIdentifier: ["ApplicationArn"]
│    │ ├ properties
│    │ │  ├ IdentitySource: IdentitySource (required, immutable)
│    │ │  └ Tags: Array<tag>
│    │ ├ attributes
│    │ │  ├ ApplicationArn: string
│    │ │  ├ IdentitySource.IdentityCenter.ApplicationArn: string
│    │ │  ├ Status: string<CREATE_IN_PROGRESS|ACTIVE|DELETE_IN_PROGRESS|CREATE_FAILED|DELETE_FAILED>
│    │ │  ├ TenantId: string
│    │ │  ├ CreatedAt: string
│    │ │  └ UpdatedAt: string
│    │ └ types
│    │    ├ type IdentityCenter
│    │    │ ├      name: IdentityCenter
│    │    │ └ properties
│    │    │    ├ InstanceArn: string (required)
│    │    │    └ ApplicationArn: string
│    │    └ type IdentitySource
│    │      ├      name: IdentitySource
│    │      └ properties
│    │         └ IdentityCenter: IdentityCenter (required)
│    └ resource AWS::AccountAccess::Entitlement
│      ├      name: Entitlement
│      │      cloudFormationType: AWS::AccountAccess::Entitlement
│      │      documentation: Resource Type definition for AWS::AccountAccess::Entitlement specifying an entitlement for account access
│      │      primaryIdentifier: ["ApplicationArn","EntitlementId"]
│      ├ properties
│      │  ├ ApplicationArn: string (required, immutable)
│      │  └ Entitlement: Entitlement (required, immutable)
│      ├ attributes
│      │  ├ EntitlementId: string
│      │  ├ Entitlement.PrincipalRole.Account: string
│      │  └ CreatedAt: string
│      └ types
│         ├ type Entitlement
│         │ ├      name: Entitlement
│         │ └ properties
│         │    └ PrincipalRole: PrincipalRoleEntitlement (required)
│         ├ type IdentityCenterPrincipal
│         │ ├      name: IdentityCenterPrincipal
│         │ └ properties
│         │    ├ UserId: string
│         │    └ GroupId: string
│         ├ type Principal
│         │ ├      name: Principal
│         │ └ properties
│         │    └ IdentityCenter: IdentityCenterPrincipal (required)
│         └ type PrincipalRoleEntitlement
│           ├      name: PrincipalRoleEntitlement
│           └ properties
│              ├ Principal: Principal (required)
│              ├ RoleArn: string (required)
│              └ Account: string
├[+] service aws-agentregistry
│ ├      capitalized: AgentRegistry
│ │      cloudFormationNamespace: AWS::AgentRegistry
│ │      name: aws-agentregistry
│ │      shortName: agentregistry
│ └ resources
│    ├ resource AWS::AgentRegistry::Registry
│    │ ├      name: Registry
│    │ │      cloudFormationType: AWS::AgentRegistry::Registry
│    │ │      documentation: Definition of AWS::AgentRegistry::Registry Resource Type
│    │ │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │ │      arnTemplate: arn:${Partition}:agent-registry:${Region}:${Account}:registry/${RegistryId}
│    │ │      primaryIdentifier: ["RegistryArn"]
│    │ ├ properties
│    │ │  ├ Name: string (required)
│    │ │  ├ Description: string
│    │ │  ├ AuthorizerType: string<CUSTOM_JWT|AWS_IAM> (immutable)
│    │ │  ├ DiscoveryConfiguration: DiscoveryConfiguration
│    │ │  ├ ApprovalConfiguration: ApprovalConfiguration
│    │ │  └ Tags: Array<tag>
│    │ ├ attributes
│    │ │  ├ RegistryId: string
│    │ │  ├ RegistryArn: string
│    │ │  ├ Status: string<CREATING|READY|UPDATING|CREATE_FAILED|UPDATE_FAILED|DELETING|DELETE_FAILED>
│    │ │  ├ CreatedAt: string
│    │ │  └ UpdatedAt: string
│    │ └ types
│    │    ├ type ApprovalConfiguration
│    │    │ ├      documentation: Configuration for the registry's record approval workflow.
│    │    │ │      name: ApprovalConfiguration
│    │    │ └ properties
│    │    │    └ AutoApprovalRules: Array<string<APPROVE_ALL>>
│    │    ├ type AuthorizerConfiguration
│    │    │ ├      documentation: The authorizer configuration for the registry. This is a union - specify exactly one member.
│    │    │ │      name: AuthorizerConfiguration
│    │    │ └ properties
│    │    │    └ CustomJWTAuthorizer: CustomJWTAuthorizerConfiguration (required)
│    │    ├ type AuthorizingClaimMatchValueType
│    │    │ ├      documentation: The value and match operator used to authorize a claim during JWT validation.
│    │    │ │      name: AuthorizingClaimMatchValueType
│    │    │ └ properties
│    │    │    ├ ClaimMatchValue: ClaimMatchValueType (required)
│    │    │    └ ClaimMatchOperator: string<EQUALS|CONTAINS|CONTAINS_ANY> (required)
│    │    ├ type ClaimMatchValueType
│    │    │ ├      documentation: The expected value used to match a claim. Exactly one member is set.
│    │    │ │      name: ClaimMatchValueType
│    │    │ └ properties
│    │    │    ├ MatchValueString: string
│    │    │    └ MatchValueStringList: Array<string>
│    │    ├ type CustomClaimValidationType
│    │    │ ├      documentation: A validation rule applied to a single claim of an inbound JWT.
│    │    │ │      name: CustomClaimValidationType
│    │    │ └ properties
│    │    │    ├ InboundTokenClaimName: string (required)
│    │    │    ├ InboundTokenClaimValueType: string<STRING|STRING_ARRAY> (required)
│    │    │    └ AuthorizingClaimMatchValue: AuthorizingClaimMatchValueType (required)
│    │    ├ type CustomJWTAuthorizerConfiguration
│    │    │ ├      documentation: Configuration for a custom JWT authorizer that validates inbound bearer tokens against an OpenID Connect identity provider.
│    │    │ │      name: CustomJWTAuthorizerConfiguration
│    │    │ └ properties
│    │    │    ├ DiscoveryUrl: string (required)
│    │    │    ├ AllowedAudience: Array<string>
│    │    │    ├ AllowedClients: Array<string>
│    │    │    ├ AllowedScopes: Array<string>
│    │    │    └ CustomClaims: Array<CustomClaimValidationType>
│    │    └ type DiscoveryConfiguration
│    │      ├      documentation: Discovery configuration for the registry. Controls how consumers are authorized to search the registry and invoke its MCP endpoint.
│    │      │      name: DiscoveryConfiguration
│    │      └ properties
│    │         └ AuthorizerConfiguration: AuthorizerConfiguration
│    └ resource AWS::AgentRegistry::RegistryRecord
│      ├      name: RegistryRecord
│      │      cloudFormationType: AWS::AgentRegistry::RegistryRecord
│      │      documentation: Definition of AWS::AgentRegistry::RegistryRecord Resource Type
│      │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│      │      primaryIdentifier: ["RecordArn"]
│      ├ properties
│      │  ├ RegistryId: string (required, immutable)
│      │  ├ Name: string (required)
│      │  ├ DisplayName: string
│      │  ├ Description: string
│      │  ├ RecordType: string<MCP|AGENT|SKILL|CUSTOM> (required, immutable)
│      │  ├ Descriptors: Descriptors (required)
│      │  ├ RecordVersion: string
│      │  └ Tags: Array<tag>
│      ├ attributes
│      │  ├ RecordId: string
│      │  ├ RecordArn: string
│      │  ├ RegistryArn: string
│      │  ├ Status: string<DRAFT|PENDING_APPROVAL|APPROVED|REJECTED|DEPRECATED|CREATING|UPDATING|CREATE_FAILED|UPDATE_FAILED>
│      │  ├ CreatedAt: string
│      │  └ UpdatedAt: string
│      └ types
│         ├ type A2aAgentCardDescriptor
│         │ ├      documentation: The A2A agent card descriptor, populated when the record type is AGENT.
│         │ │      name: A2aAgentCardDescriptor
│         │ └ properties
│         │    ├ Data: string
│         │    ├ DataSchemaVersion: string
│         │    └ Source: DescriptorSource
│         ├ type AgentSkillsAdditionalData
│         │ ├      documentation: Additional data associated with an agent skills definition descriptor.
│         │ │      name: AgentSkillsAdditionalData
│         │ └ properties
│         │    └ SkillMd: AgentSkillsMdDescriptor
│         ├ type AgentSkillsDefinitionDescriptor
│         │ ├      documentation: The agent skills definition descriptor, populated when the record type is SKILL.
│         │ │      name: AgentSkillsDefinitionDescriptor
│         │ └ properties
│         │    ├ Data: string
│         │    ├ DataSchemaVersion: string
│         │    └ AdditionalData: AgentSkillsAdditionalData
│         ├ type AgentSkillsMdDescriptor
│         │ ├      documentation: Markdown-format descriptor containing an agent skills document.
│         │ │      name: AgentSkillsMdDescriptor
│         │ └ properties
│         │    ├ Source: SkillMdSource
│         │    ├ Data: string
│         │    └ DataSchemaVersion: string
│         ├ type CustomDescriptor
│         │ ├      documentation: The custom descriptor, populated when the record type is CUSTOM.
│         │ │      name: CustomDescriptor
│         │ └ properties
│         │    └ Data: string
│         ├ type Descriptors
│         │ ├      documentation: The typed set of descriptors for a registry record. Exactly one descriptor field is populated based on the record type.
│         │ │      name: Descriptors
│         │ └ properties
│         │    ├ McpServer: McpServerDescriptor
│         │    ├ A2aAgentCard: A2aAgentCardDescriptor
│         │    ├ AgentSkillsDefinition: AgentSkillsDefinitionDescriptor
│         │    └ Custom: CustomDescriptor
│         ├ type DescriptorSource
│         │ ├      documentation: The source configuration that defines where descriptor content is retrieved from.
│         │ │      name: DescriptorSource
│         │ └ properties
│         │    └ FromUrl: DescriptorSourceFromUrl
│         ├ type DescriptorSourceFromUrl
│         │ ├      documentation: URL-based descriptor source configuration, with credential provider configurations for authenticated URL retrieval.
│         │ │      name: DescriptorSourceFromUrl
│         │ └ properties
│         │    ├ Url: string (required)
│         │    └ CredentialProviderConfigurations: Array<RegistryRecordCredentialProviderConfiguration>
│         ├ type McpServerAdditionalData
│         │ ├      documentation: Additional data associated with an MCP server descriptor.
│         │ │      name: McpServerAdditionalData
│         │ └ properties
│         │    └ Tools: McpToolsDescriptor
│         ├ type McpServerDescriptor
│         │ ├      documentation: The MCP server descriptor, populated when the record type is MCP.
│         │ │      name: McpServerDescriptor
│         │ └ properties
│         │    ├ Data: string
│         │    ├ DataSchemaVersion: string
│         │    ├ AdditionalData: McpServerAdditionalData
│         │    └ Source: DescriptorSource
│         ├ type McpToolsDescriptor
│         │ ├      documentation: The MCP tools descriptor.
│         │ │      name: McpToolsDescriptor
│         │ └ properties
│         │    ├ Data: string
│         │    └ DataSchemaVersion: string
│         ├ type RegistryRecordCredentialProviderConfiguration
│         │ ├      documentation: A credential provider configuration used for authenticated descriptor retrieval.
│         │ │      name: RegistryRecordCredentialProviderConfiguration
│         │ └ properties
│         │    ├ CredentialProviderType: string<OAUTH|IAM> (required)
│         │    └ CredentialProvider: RegistryRecordCredentialProviderUnion (required)
│         ├ type RegistryRecordCredentialProviderUnion
│         │ ├      documentation: The credential provider details. Specify exactly one member.
│         │ │      name: RegistryRecordCredentialProviderUnion
│         │ └ properties
│         │    ├ OauthCredentialProvider: RegistryRecordOAuthCredentialProvider
│         │    └ IamCredentialProvider: RegistryRecordIamCredentialProvider
│         ├ type RegistryRecordIamCredentialProvider
│         │ ├      documentation: IAM credential provider configuration.
│         │ │      name: RegistryRecordIamCredentialProvider
│         │ └ properties
│         │    ├ RoleArn: string
│         │    ├ Service: string
│         │    └ Region: string
│         ├ type RegistryRecordOAuthCredentialProvider
│         │ ├      documentation: OAuth credential provider configuration.
│         │ │      name: RegistryRecordOAuthCredentialProvider
│         │ └ properties
│         │    ├ ProviderArn: string (required)
│         │    ├ GrantType: string<CLIENT_CREDENTIALS>
│         │    ├ Scopes: Array<string>
│         │    └ CustomParameters: Map<string, string>
│         ├ type SkillMdSource
│         │ ├      documentation: Source configuration for a SkillMd document. Unlike MCP/A2A sources, SkillMd does not support credential providers.
│         │ │      name: SkillMdSource
│         │ └ properties
│         │    └ FromUrl: SkillMdSourceFromUrl
│         └ type SkillMdSourceFromUrl
│           ├      documentation: URL-based source for SkillMd content (sync is skipped; content is provided inline via Data).
│           │      name: SkillMdSourceFromUrl
│           └ properties
│              └ Url: string (required)
├[~] service aws-amplify
│ └ resources
│    └[+]  resource AWS::Amplify::Webhook
│       ├      name: Webhook
│       │      cloudFormationType: AWS::Amplify::Webhook
│       │      documentation: Resource Type definition for AWS::Amplify::Webhook. Creates a webhook on an Amplify app.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ AppId: string (immutable)
│       │  ├ BranchName: string (required)
│       │  ├ Description: string
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ Arn: string
│          ├ WebhookId: string
│          └ WebhookUrl: string
├[~] service aws-apigateway
│ └ resources
│    └[~]  resource AWS::ApiGateway::RestApi
│       └ properties
│          └[+] Version: string
├[~] service aws-apigatewayv2
│ └ resources
│    ├[~]  resource AWS::ApiGatewayV2::ApiGatewayManagedOverrides
│    │  ├      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["ApiId"]
│    │  └ types
│    │     └[~] type StageOverrides
│    │       └ properties
│    │          ├ RouteSettings: - json
│    │          │                + Map<string, RouteSettings> ⇐ json
│    │          └ StageVariables: - json
│    │                            + Map<string, string> ⇐ json
│    └[+]  resource AWS::ApiGatewayV2::PortalProduct
│       ├      name: PortalProduct
│       │      cloudFormationType: AWS::ApiGatewayV2::PortalProduct
│       │      documentation: Represents a portal product in Amazon API Gateway V2, which is a logical grouping of APIs that can be published in a developer portal.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:apigateway:${Region}:${Account}:/portalproducts/${PortalProductId}
│       │      primaryIdentifier: ["PortalProductArn"]
│       ├ properties
│       │  ├ DisplayName: string (required)
│       │  ├ Description: string
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ PortalProductArn: string
│          ├ PortalProductId: string
│          └ LastModified: string
├[~] service aws-appconfig
│ └ resources
│    └[+]  resource AWS::AppConfig::ExperimentDefinition
│       ├      name: ExperimentDefinition
│       │      cloudFormationType: AWS::AppConfig::ExperimentDefinition
│       │      documentation: Resource Type definition for AWS::AppConfig::ExperimentDefinition
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["ApplicationId","Id"]
│       ├ properties
│       │  ├ EnvironmentIdentifier: string (required, immutable)
│       │  ├ AudienceDescription: string
│       │  ├ LaunchCriteria: string
│       │  ├ ApplicationIdentifier: string (required, immutable)
│       │  ├ AudienceRule: string (required)
│       │  ├ Hypothesis: string
│       │  ├ Name: string (required, immutable)
│       │  ├ ConfigurationProfileIdentifier: string (required, immutable)
│       │  ├ Control: Treatment (required)
│       │  ├ FlagKey: string (required, immutable)
│       │  ├ Treatments: Array<Treatment> (required)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ ApplicationId: string
│       │  ├ Id: string
│       │  ├ Status: string<ACTIVE|IDLE|ARCHIVED>
│       │  ├ CreatedAt: string
│       │  ├ UpdatedAt: string
│       │  └ Control.Key: string
│       └ types
│          ├ type AttributeValue
│          │ ├      documentation: A typed attribute value for a treatment flag.
│          │ │      name: AttributeValue
│          │ └ properties
│          │    ├ StringArray: Array<string>
│          │    ├ NumberValue: number
│          │    ├ BooleanValue: boolean
│          │    ├ StringValue: string
│          │    └ NumberArray: Array<number>
│          └ type Treatment
│            ├      documentation: A treatment variant with weight and flag value. The Key is auto-generated by the service.
│            │      name: Treatment
│            └ properties
│               ├ Description: string
│               ├ AttributeValues: Map<string, AttributeValue>
│               ├ Enabled: boolean (required)
│               ├ Key: string
│               └ Weight: number (required)
├[~] service aws-appstream
│ └ resources
│    └[~]  resource AWS::AppStream::StackFleetAssociation
│       ├      - primaryIdentifier: ["FleetName","StackName"]
│       │      + primaryIdentifier: ["Id"]
│       ├ properties
│       │  ├ FleetName: - string (required, immutable)
│       │  │            + string (required)
│       │  └ StackName: - string (required, immutable)
│       │               + string (required)
│       └ attributes
│          └[+] Id: string
├[~] service aws-appsync
│ └ resources
│    └[+]  resource AWS::AppSync::Type
│       ├      name: Type
│       │      cloudFormationType: AWS::AppSync::Type
│       │      documentation: Represents a GraphQL type in an AWS AppSync GraphQL API.
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ ApiId: string (required, immutable)
│       │  ├ Definition: string (required)
│       │  └ Format: string<SDL|JSON> (required)
│       └ attributes
│          ├ Arn: string
│          └ Name: string
├[~] service aws-aps
│ └ resources
│    └[~]  resource AWS::APS::Scraper
│       └ types
│          ├[+]  type CloudWatchConfiguration
│          │  ├      documentation: Configuration for CloudWatch metrics destination
│          │  │      name: CloudWatchConfiguration
│          │  └ properties
│          │     └ DatasetArn: string (required)
│          └[~] type Destination
│            └ properties
│               ├ AmpConfiguration: - AmpConfiguration (required)
│               │                   + AmpConfiguration
│               └[+] CloudWatchConfiguration: CloudWatchConfiguration
├[~] service aws-arcregionswitch
│ └ resources
│    └[~]  resource AWS::ARCRegionSwitch::Plan
│       └ types
│          ├[~] type ExecutionBlockConfiguration
│          │ └ properties
│          │    └[+] RdsSwitchoverReadReplicaConfig: RdsSwitchoverReadReplicaConfiguration
│          ├[+]  type RdsSwitchoverReadReplicaConfiguration
│          │  ├      name: RdsSwitchoverReadReplicaConfiguration
│          │  └ properties
│          │     ├ TimeoutMinutes: number (default=60)
│          │     ├ CrossAccountRole: string
│          │     ├ ExternalId: string
│          │     ├ DbInstanceArnMap: Map<string, string> (required)
│          │     └ Ungraceful: RdsUngraceful
│          ├[+]  type RdsUngraceful
│          │  ├      name: RdsUngraceful
│          │  └ properties
│          │     └ Ungraceful: string<promoteReadReplica>
│          └[~] type Step
│            └ properties
│               └ ExecutionBlockType: - string<ARCRegionSwitchPlan|ARCRoutingControl|AuroraGlobalDatabase|AuroraProvisionedScaling|AuroraServerlessScaling|CustomActionLambda|DocumentDb|EC2AutoScaling|ECSServiceScaling|EKSResourceScaling|LambdaEventSourceMapping|ManualApproval|NeptuneGlobalDatabase|Parallel|RdsCreateCrossRegionReplica|RdsPromoteReadReplica|Route53HealthCheck> (required)
│                                     + string<ARCRegionSwitchPlan|ARCRoutingControl|AuroraGlobalDatabase|AuroraProvisionedScaling|AuroraServerlessScaling|CustomActionLambda|DocumentDb|EC2AutoScaling|ECSServiceScaling|EKSResourceScaling|LambdaEventSourceMapping|ManualApproval|NeptuneGlobalDatabase|Parallel|RdsCreateCrossRegionReplica|RdsPromoteReadReplica|RdsSwitchoverReadReplica|Route53HealthCheck> (required)
├[-] service aws-artifact
│ ├      capitalized: Artifact
│ │      cloudFormationNamespace: AWS::Artifact
│ │      name: aws-artifact
│ │      shortName: artifact
│ └ resources
│    └ resource AWS::Artifact::Report
│      ├      name: Report
│      │      cloudFormationType: AWS::Artifact::Report
│      │      documentation: Resource schema for AWS Artifact Report
│      │      primaryIdentifier: ["Arn"]
│      └ attributes
│         ├ Arn: string
│         ├ ReportId: string
│         ├ Name: string
│         ├ Description: string
│         ├ PeriodStart: string
│         ├ PeriodEnd: string
│         ├ CreatedAt: string
│         ├ State: string<PUBLISHED|UNPUBLISHED>
│         ├ Series: string
│         ├ Category: string
│         ├ CompanyName: string
│         ├ ProductName: string
│         ├ TermArn: string
│         ├ Version: string
│         ├ AcceptanceType: string<PASSTHROUGH|EXPLICIT>
│         └ SequenceNumber: integer
├[~] service aws-athena
│ └ resources
│    └[-]  resource AWS::Athena::Session
│       ├      name: Session
│       │      cloudFormationType: AWS::Athena::Session
│       │      documentation: An Athena session is a Spark-based interactive environment for running calculations within a workgroup.
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ WorkGroup: string (required, immutable)
│       │  ├ EngineConfiguration: EngineConfiguration (required, immutable)
│       │  └ ExecutionRole: string (immutable)
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ SessionId: string
│       │  ├ EngineVersion: string
│       │  ├ EngineConfiguration.AdditionalConfigs: Map<string, string>
│       │  └ EngineConfiguration.SparkProperties: Map<string, string>
│       └ types
│          └ type EngineConfiguration
│            ├      documentation: Contains engine data processing unit (DPU) configuration settings.
│            │      name: EngineConfiguration
│            └ properties
│               ├ CoordinatorDpuSize: integer
│               ├ MaxConcurrentDpus: integer (required)
│               ├ DefaultExecutorDpuSize: integer
│               ├ AdditionalConfigs: Map<string, string>
│               └ SparkProperties: Map<string, string>
├[~] service aws-autoscaling
│ └ resources
│    └[~]  resource AWS::AutoScaling::AutoScalingGroup
│       └ types
│          ├[+]  type DistributionSegment
│          │  ├      name: DistributionSegment
│          │  └ properties
│          │     └ TargetCapacityTypes: Array<string<on-demand-capacity-reservation|capacity-block|interruptible-capacity-reservation|on-demand>> (required)
│          └[~] type InstancesDistribution
│            └ properties
│               └[+] DistributionSegments: Array<DistributionSegment>
├[-] service aws-backupsearch
│ ├      capitalized: BackupSearch
│ │      cloudFormationNamespace: AWS::BackupSearch
│ │      name: aws-backupsearch
│ │      shortName: backupsearch
│ └ resources
│    └ resource AWS::BackupSearch::SearchJob
│      ├      name: SearchJob
│      │      cloudFormationType: AWS::BackupSearch::SearchJob
│      │      documentation: Definition of AWS::BackupSearch::SearchJob Resource Type
│      │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│      │      arnTemplate: arn:${Partition}:backup-search:${Region}:${Account}:search-job/${ResourceId}
│      │      primaryIdentifier: ["SearchJobArn"]
│      ├ properties
│      │  ├ Name: string (immutable)
│      │  ├ SearchScope: SearchScope (required, immutable)
│      │  └ Tags: Array<TagsItems> (immutable)
│      ├ attributes
│      │  ├ SearchJobArn: string
│      │  ├ SearchJobIdentifier: string
│      │  ├ CreationTime: string
│      │  └ Status: string<RUNNING|COMPLETED|STOPPING|STOPPED|FAILED>
│      └ types
│         ├ type SearchScope
│         │ ├      documentation: The search scope for the search job.
│         │ │      name: SearchScope
│         │ └ properties
│         │    └ BackupResourceTypes: Array<string<S3|EBS>> (required)
│         └ type TagsItems
│           ├      name: TagsItems
│           └ properties
│              ├ Key: string (required)
│              └ Value: string (required)
├[~] service aws-batch
│ └ resources
│    ├[~]  resource AWS::Batch::ComputeEnvironment
│    │  ├ properties
│    │  │  └[+] EcsSettings: EcsSettings
│    │  └ types
│    │     ├[+]  type CapacityReservations
│    │     │  ├      name: CapacityReservations
│    │     │  └ properties
│    │     │     ├ ReservationGroupArn: string
│    │     │     └ ReservationPreference: string
│    │     ├[~] type ComputeResources
│    │     │ └ properties
│    │     │    ├[+] CapacityTags: Map<string, string>
│    │     │    ├[+] ManagedInstancesProvider: ManagedInstancesProvider
│    │     │    └ Subnets: - Array<string> (required, immutable?)
│    │     │               + Array<string> (immutable?)
│    │     ├[+]  type EcsSettings
│    │     │  ├      name: EcsSettings
│    │     │  └ properties
│    │     │     └ ContainerInsights: string<ENABLED|ENHANCED|DISABLED>
│    │     ├[+]  type InfrastructureOptimization
│    │     │  ├      name: InfrastructureOptimization
│    │     │  └ properties
│    │     │     └ ScaleInAfter: integer
│    │     ├[+]  type InstanceLaunchTemplate
│    │     │  ├      name: InstanceLaunchTemplate
│    │     │  └ properties
│    │     │     ├ Ec2InstanceProfileArn: string (required)
│    │     │     ├ NetworkConfiguration: ManagedInstancesNetworkConfiguration (required)
│    │     │     ├ InstanceRequirements: InstanceRequirements
│    │     │     ├ CapacityOptionType: string<ON_DEMAND|SPOT|RESERVED> (immutable)
│    │     │     ├ StorageConfiguration: ManagedInstancesStorageConfiguration
│    │     │     ├ Monitoring: string
│    │     │     ├ FipsEnabled: boolean (immutable)
│    │     │     ├ CapacityReservations: CapacityReservations
│    │     │     ├ InstanceMetadataTagsPropagation: boolean
│    │     │     └ LocalStorageConfiguration: ManagedInstancesLocalStorageConfiguration
│    │     ├[+]  type InstanceRequirements
│    │     │  ├      name: InstanceRequirements
│    │     │  └ properties
│    │     │     └ AllowedInstanceTypes: Array<string>
│    │     ├[+]  type ManagedInstancesLocalStorageConfiguration
│    │     │  ├      name: ManagedInstancesLocalStorageConfiguration
│    │     │  └ properties
│    │     │     └ UseLocalStorage: boolean
│    │     ├[+]  type ManagedInstancesNetworkConfiguration
│    │     │  ├      name: ManagedInstancesNetworkConfiguration
│    │     │  └ properties
│    │     │     ├ Subnets: Array<string> (required)
│    │     │     └ SecurityGroups: Array<string> (required)
│    │     ├[+]  type ManagedInstancesProvider
│    │     │  ├      name: ManagedInstancesProvider
│    │     │  └ properties
│    │     │     ├ PropagateTags: string<CAPACITY_PROVIDER|NONE>
│    │     │     ├ InfrastructureRoleArn: string (required)
│    │     │     ├ InstanceLaunchTemplate: InstanceLaunchTemplate (required)
│    │     │     └ InfrastructureOptimization: InfrastructureOptimization
│    │     └[+]  type ManagedInstancesStorageConfiguration
│    │        ├      name: ManagedInstancesStorageConfiguration
│    │        └ properties
│    │           └ StorageSizeGiB: integer
│    └[~]  resource AWS::Batch::JobDefinition
│       └ types
│          └[~] type EcsTaskProperties
│            └ properties
│               └[+] NetworkMode: string
├[~] service aws-bcmdataexports
│ └ resources
│    ├[~]  resource AWS::BCMDataExports::Export
│    │  └ types
│    │     └[~] type S3OutputConfigurations
│    │       └ properties
│    │          └ Compression: - string<GZIP|PARQUET> (required)
│    │                         + string<GZIP|PARQUET|ZIP> (required)
│    └[-]  resource AWS::BCMDataExports::Table
│       ├      name: Table
│       │      cloudFormationType: AWS::BCMDataExports::Table
│       │      documentation: Returns the metadata for the specified table and table properties, including the list of columns in the table schema, their data types, and column descriptions.
│       │      arnTemplate: arn:${Partition}:bcm-data-exports:${Region}:${Account}:table/${Identifier}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  └ TableName: string (required, immutable)
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ Description: string
│       │  └ Schema: Array<Column>
│       └ types
│          └ type Column
│            ├      documentation: Includes basic information for a data column such as its description, name, and type.
│            │      name: Column
│            └ properties
│               ├ Name: string
│               ├ Type: string
│               └ Description: string
├[~] service aws-bedrock
│ └ resources
│    ├[~]  resource AWS::Bedrock::AutomatedReasoningPolicy
│    │  └ properties
│    │     └ ForceDelete: - boolean (default=false, immutable)
│    │                    + boolean (default=false)
│    ├[-]  resource AWS::Bedrock::DefaultPromptRouter
│    │  ├      name: DefaultPromptRouter
│    │  │      cloudFormationType: AWS::Bedrock::DefaultPromptRouter
│    │  │      documentation: Definition of AWS::Bedrock::DefaultPromptRouter Resource Type
│    │  │      arnTemplate: arn:${Partition}:bedrock:${Region}:${Account}:default-prompt-router/${ResourceId}
│    │  │      primaryIdentifier: ["PromptRouterArn"]
│    │  ├ attributes
│    │  │  ├ PromptRouterArn: string
│    │  │  ├ PromptRouterId: string
│    │  │  ├ PromptRouterName: string
│    │  │  ├ Description: string
│    │  │  ├ RoutingCriteria: RoutingCriteria
│    │  │  ├ FallbackModel: PromptRouterTargetModel
│    │  │  ├ Models: Array<PromptRouterTargetModel>
│    │  │  ├ Status: string<AVAILABLE>
│    │  │  ├ Type: string<custom|default>
│    │  │  ├ CreatedAt: string
│    │  │  └ UpdatedAt: string
│    │  └ types
│    │     ├ type PromptRouterTargetModel
│    │     │ ├      documentation: A target model for the prompt router.
│    │     │ │      name: PromptRouterTargetModel
│    │     │ └ properties
│    │     │    └ ModelArn: string (required)
│    │     └ type RoutingCriteria
│    │       ├      documentation: Routing criteria for a prompt router.
│    │       │      name: RoutingCriteria
│    │       └ properties
│    │          └ ResponseQualityDifference: number (required)
│    ├[-]  resource AWS::Bedrock::ModelInvocationJob
│    │  ├      name: ModelInvocationJob
│    │  │      cloudFormationType: AWS::Bedrock::ModelInvocationJob
│    │  │      documentation: Resource Type definition for AWS::Bedrock::ModelInvocationJob
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:bedrock:${Region}:${Account}:model-invocation-job/${JobIdentifier}
│    │  │      primaryIdentifier: ["JobArn"]
│    │  ├ attributes
│    │  │  ├ JobArn: string
│    │  │  ├ JobName: string
│    │  │  ├ ModelId: string
│    │  │  ├ RoleArn: string
│    │  │  ├ InputDataConfig: ModelInvocationJobInputDataConfig
│    │  │  ├ OutputDataConfig: ModelInvocationJobOutputDataConfig
│    │  │  ├ VpcConfig: VpcConfig
│    │  │  ├ TimeoutDurationInHours: integer
│    │  │  ├ Status: string<Submitted|InProgress|Completed|Failed|Stopping|Stopped|PartiallyCompleted|Expired|Validating|Scheduled>
│    │  │  ├ SubmitTime: string
│    │  │  ├ LastModifiedTime: string
│    │  │  ├ JobExpirationTime: string
│    │  │  └ Tags: Array<tag>
│    │  └ types
│    │     ├ type ModelInvocationJobInputDataConfig
│    │     │ ├      documentation: Details about the location of the input to the batch inference job.
│    │     │ │      name: ModelInvocationJobInputDataConfig
│    │     │ └ properties
│    │     │    └ S3InputDataConfig: ModelInvocationJobS3InputDataConfig (required)
│    │     ├ type ModelInvocationJobOutputDataConfig
│    │     │ ├      documentation: Details about the location of the output of the batch inference job.
│    │     │ │      name: ModelInvocationJobOutputDataConfig
│    │     │ └ properties
│    │     │    └ S3OutputDataConfig: ModelInvocationJobS3OutputDataConfig (required)
│    │     ├ type ModelInvocationJobS3InputDataConfig
│    │     │ ├      documentation: Contains the configuration of the S3 location of the input data.
│    │     │ │      name: ModelInvocationJobS3InputDataConfig
│    │     │ └ properties
│    │     │    ├ S3Uri: string (required)
│    │     │    └ S3BucketOwner: string
│    │     ├ type ModelInvocationJobS3OutputDataConfig
│    │     │ ├      documentation: Contains the configuration of the S3 location of the output data.
│    │     │ │      name: ModelInvocationJobS3OutputDataConfig
│    │     │ └ properties
│    │     │    ├ S3Uri: string (required)
│    │     │    ├ S3EncryptionKeyId: string
│    │     │    └ S3BucketOwner: string
│    │     └ type VpcConfig
│    │       ├      documentation: The configuration of a virtual private cloud (VPC).
│    │       │      name: VpcConfig
│    │       └ properties
│    │          ├ SubnetIds: Array<string> (required)
│    │          └ SecurityGroupIds: Array<string> (required)
│    └[+]  resource AWS::Bedrock::Session
│       ├      name: Session
│       │      cloudFormationType: AWS::Bedrock::Session
│       │      documentation: Definition of AWS::Bedrock::Session Resource Type
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:bedrock:${Region}:${Account}:session/${SessionId}
│       │      primaryIdentifier: ["SessionArn"]
│       ├ properties
│       │  ├ SessionMetadata: Map<string, string>
│       │  ├ EncryptionKeyArn: string (immutable)
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ SessionArn: string
│          ├ SessionId: string
│          ├ SessionStatus: string<ACTIVE|EXPIRED|ENDED>
│          ├ CreatedAt: string
│          └ LastUpdatedAt: string
├[~] service aws-bedrockagentcore
│ └ resources
│    ├[-]  resource AWS::BedrockAgentCore::Browser
│    │  ├      name: Browser
│    │  │      cloudFormationType: AWS::BedrockAgentCore::Browser
│    │  │      documentation: Definition of AWS::BedrockAgentCore::Browser Resource Type. This is a read-only resource representing the default service-managed browser.
│    │  │      arnTemplate: arn:${Partition}:bedrock-agentcore:${Region}:aws:browser/${BrowserId}
│    │  │      vendedLogs: [{"permissionsVersion":"V2","logType":"USAGE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp","resource","attributes","metrics"]}]
│    │  │      primaryIdentifier: ["BrowserArn"]
│    │  └ attributes
│    │     ├ BrowserArn: string
│    │     ├ BrowserId: string
│    │     ├ Name: string
│    │     └ Status: string<READY>
│    ├[+]  resource AWS::BedrockAgentCore::CapacityProvider
│    │  ├      name: CapacityProvider
│    │  │      cloudFormationType: AWS::BedrockAgentCore::CapacityProvider
│    │  │      documentation: Resource Type definition for AWS::BedrockAgentCore::CapacityProvider. A capacity provider defines the compute resources (EC2) used to run Amazon Bedrock AgentCore agent runtimes.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:bedrock-agentcore:${Region}:${Account}:capacity-provider/${CapacityProviderId}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ Name: string (required, immutable)
│    │  │  ├ Description: string
│    │  │  ├ PermissionsConfiguration: PermissionsConfiguration (required, immutable)
│    │  │  ├ ComputeConfiguration: ComputeConfiguration (required, immutable)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  ├ CapacityProviderId: string
│    │  │  ├ Status: string<CREATING|CREATE_FAILED|UPDATING|UPDATE_FAILED|READY|DELETING>
│    │  │  ├ CreatedAt: string
│    │  │  └ LastUpdatedAt: string
│    │  └ types
│    │     ├ type CapacityReservationSpecification
│    │     │ ├      documentation: The Capacity Reservation targeting option.
│    │     │ │      name: CapacityReservationSpecification
│    │     │ └ properties
│    │     │    ├ CapacityReservationPreference: string<capacity-reservations-only|open|none>
│    │     │    └ CapacityReservationTarget: CapacityReservationTarget
│    │     ├ type CapacityReservationTarget
│    │     │ ├      documentation: Information about the target Capacity Reservation or Capacity Reservation group.
│    │     │ │      name: CapacityReservationTarget
│    │     │ └ properties
│    │     │    ├ CapacityReservationId: string
│    │     │    └ CapacityReservationResourceGroupArn: string
│    │     ├ type ComputeConfiguration
│    │     │ ├      documentation: The capacity configuration for the capacity provider. Defines the compute resources for this capacity provider.
│    │     │ │      name: ComputeConfiguration
│    │     │ └ properties
│    │     │    └ Ec2Configuration: Ec2Configuration (required)
│    │     ├ type EbsVolumeConfiguration
│    │     │ ├      documentation: Configuration for an EBS-backed persistent volume.
│    │     │ │      name: EbsVolumeConfiguration
│    │     │ └ properties
│    │     │    ├ Name: string (required)
│    │     │    ├ SizeGiB: integer (required)
│    │     │    ├ VolumeType: string<standard|io1|io2|gp2|sc1|st1|gp3>
│    │     │    ├ Iops: integer
│    │     │    ├ Throughput: integer
│    │     │    ├ Encrypted: boolean
│    │     │    ├ KmsKeyId: string
│    │     │    └ SnapshotId: string
│    │     ├ type Ec2Configuration
│    │     │ ├      documentation: Configuration for EC2-based capacity.
│    │     │ │      name: Ec2Configuration
│    │     │ └ properties
│    │     │    ├ LaunchTemplateSource: LaunchTemplateSource (required)
│    │     │    ├ VpcConfiguration: VpcConfiguration (required)
│    │     │    ├ Volumes: Array<VolumeConfiguration>
│    │     │    ├ RootVolume: RootVolumeConfiguration
│    │     │    └ LifecycleConfiguration: InstanceLifecycleConfiguration
│    │     ├ type EphemeralBlockDeviceMapping
│    │     │ ├      documentation: Describes an ephemeral block device mapping.
│    │     │ │      name: EphemeralBlockDeviceMapping
│    │     │ └ properties
│    │     │    ├ DeviceName: string
│    │     │    ├ VirtualName: string
│    │     │    └ Ebs: EphemeralEBSVolumeConfiguration
│    │     ├ type EphemeralEBSVolumeConfiguration
│    │     │ ├      documentation: Parameters used to automatically set up EBS volumes when the instance is launched.
│    │     │ │      name: EphemeralEBSVolumeConfiguration
│    │     │ └ properties
│    │     │    ├ Encrypted: boolean
│    │     │    ├ Iops: integer
│    │     │    ├ KmsKeyId: string
│    │     │    ├ SnapshotId: string
│    │     │    ├ VolumeSize: integer
│    │     │    ├ VolumeType: string<standard|io1|io2|gp2|sc1|st1|gp3>
│    │     │    ├ Throughput: integer
│    │     │    ├ VolumeInitializationRate: integer
│    │     │    └ EbsCardIndex: integer
│    │     ├ type InstanceLifecycleConfiguration
│    │     │ ├      documentation: Configuration for managing the lifecycle of instances in a capacity provider.
│    │     │ │      name: InstanceLifecycleConfiguration
│    │     │ └ properties
│    │     │    ├ IdleInstanceTimeout: integer
│    │     │    └ MaxLifetime: integer
│    │     ├ type InstanceRequirements
│    │     │ ├      documentation: Requirements for EC2 instance types.
│    │     │ │      name: InstanceRequirements
│    │     │ └ properties
│    │     │    └ AllowedInstanceTypes: Array<string> (required)
│    │     ├ type LaunchParameters
│    │     │ ├      documentation: Parameters for launching EC2 instances.
│    │     │ │      name: LaunchParameters
│    │     │ └ properties
│    │     │    ├ OperatingSystem: string<LINUX_X86_64|LINUX_ARM64|MAC_ARM64|WINDOWS_X86_64> (required)
│    │     │    ├ InstanceRequirements: InstanceRequirements (required)
│    │     │    ├ EphemeralVolumes: Array<EphemeralBlockDeviceMapping>
│    │     │    ├ Monitoring: string<BASIC|DETAILED>
│    │     │    ├ LicenseSpecifications: Array<LicenseSpecification>
│    │     │    ├ CapacityReservationSpecification: CapacityReservationSpecification
│    │     │    ├ SshKeyName: string
│    │     │    ├ InstanceProfileArn: string
│    │     │    └ PropagatedTags: Map<string, string>
│    │     ├ type LaunchTemplateSource
│    │     │ ├      documentation: How the launch template is specified.
│    │     │ │      name: LaunchTemplateSource
│    │     │ └ properties
│    │     │    └ LaunchParameters: LaunchParameters (required)
│    │     ├ type LicenseSpecification
│    │     │ ├      documentation: Describes a license configuration.
│    │     │ │      name: LicenseSpecification
│    │     │ └ properties
│    │     │    └ LicenseConfigurationArn: string (required)
│    │     ├ type PermissionsConfiguration
│    │     │ ├      documentation: Configuration for permissions associated with a capacity provider.
│    │     │ │      name: PermissionsConfiguration
│    │     │ └ properties
│    │     │    └ CapacityProviderOperatorRoleArn: string (required)
│    │     ├ type RootVolumeConfiguration
│    │     │ ├      documentation: Customer-facing configuration for the (service-managed) root volume. The service provisions the root volume at its own AMI size estimate plus FreeSpaceGiB, and pins the visible free space to FreeSpaceGiB with a filler file, so the space you are guaranteed does not change as the underlying AMI grows. The device name and the delete-on-termination behavior are service-owned and are not configurable.
│    │     │ │      name: RootVolumeConfiguration
│    │     │ └ properties
│    │     │    ├ FreeSpaceGiB: integer
│    │     │    ├ VolumeType: string<standard|io1|io2|gp2|sc1|st1|gp3>
│    │     │    ├ Iops: integer
│    │     │    ├ Throughput: integer
│    │     │    ├ Encrypted: boolean
│    │     │    └ KmsKeyId: string
│    │     ├ type VolumeConfiguration
│    │     │ ├      documentation: Configuration for a persistent volume attached to a capacity provider session.
│    │     │ │      name: VolumeConfiguration
│    │     │ └ properties
│    │     │    └ EbsConfiguration: EbsVolumeConfiguration (required)
│    │     └ type VpcConfiguration
│    │       ├      documentation: VPC configuration for launching EC2 instances.
│    │       │      name: VpcConfiguration
│    │       └ properties
│    │          ├ Subnets: Array<string> (required)
│    │          └ SecurityGroups: Array<string> (required)
│    ├[-]  resource AWS::BedrockAgentCore::CodeInterpreter
│    │  ├      name: CodeInterpreter
│    │  │      cloudFormationType: AWS::BedrockAgentCore::CodeInterpreter
│    │  │      documentation: Definition of AWS::BedrockAgentCore::CodeInterpreter Resource Type. This is a read-only resource representing the AWS-managed default code interpreter (aws.codeinterpreter.v1).
│    │  │      arnTemplate: arn:${Partition}:bedrock-agentcore:${Region}:aws:code-interpreter/${CodeInterpreterId}
│    │  │      vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp"],"optionalFields":["account_id","request_id","tool_session_id","span_id","trace_id","service_name","operation","request_payload","response_payload","resource","attributes","timeUnixNano","severityNumber","severityText","body","traceId","spanId"]},{"permissionsVersion":"V2","logType":"USAGE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}],"mandatoryFields":["resource_arn","event_timestamp","resource","attributes","metrics"]}]
│    │  │      primaryIdentifier: ["CodeInterpreterArn"]
│    │  └ attributes
│    │     ├ CodeInterpreterArn: string
│    │     ├ CodeInterpreterId: string
│    │     └ Status: string<CREATING|CREATE_FAILED|READY|DELETING|DELETE_FAILED|DELETED>
│    ├[~]  resource AWS::BedrockAgentCore::Evaluator
│    │  └ types
│    │     ├[~] type EvaluatorModelConfig
│    │     │ └ properties
│    │     │    ├ BedrockEvaluatorModelConfig: - BedrockEvaluatorModelConfig (required)
│    │     │    │                              + BedrockEvaluatorModelConfig
│    │     │    └[+] ResponsesEvaluatorModelConfig: OpenResponsesEvaluatorModelConfig
│    │     ├[+]  type OpenResponsesEvaluatorModelConfig
│    │     │  ├      documentation: The configuration for using OpenResponses-compatible models in evaluator assessments.
│    │     │  │      name: OpenResponsesEvaluatorModelConfig
│    │     │  └ properties
│    │     │     ├ ModelId: string (required)
│    │     │     ├ MaxOutputTokens: integer
│    │     │     ├ Temperature: number
│    │     │     ├ TopP: number
│    │     │     └ Reasoning: ReasoningConfiguration
│    │     └[+]  type ReasoningConfiguration
│    │        ├      documentation: The reasoning configuration for reasoning models.
│    │        │      name: ReasoningConfiguration
│    │        └ properties
│    │           └ Effort: string
│    ├[~]  resource AWS::BedrockAgentCore::Gateway
│    │  ├ properties
│    │  │  └ PolicyEngineConfiguration: (documentation changed)
│    │  └ types
│    │     ├[~] type AuthorizingClaimMatchValueType
│    │     │ ├      - documentation: The value or values in the custom claim to match and relationship of match
│    │     │ │      + documentation: undefined
│    │     │ └ properties
│    │     │    ├ ClaimMatchOperator: (documentation changed)
│    │     │    └ ClaimMatchValue: (documentation changed)
│    │     ├[~] type ClaimMatchValueType
│    │     │ ├      - documentation: The value or values in the custom claim to match for
│    │     │ │      + documentation: undefined
│    │     │ └ properties
│    │     │    ├ MatchValueString: (documentation changed)
│    │     │    └ MatchValueStringList: (documentation changed)
│    │     ├[~] type CustomClaimValidationType
│    │     │ ├      - documentation: Required custom claim
│    │     │ │      + documentation: undefined
│    │     │ └ properties
│    │     │    ├ AuthorizingClaimMatchValue: (documentation changed)
│    │     │    ├ InboundTokenClaimName: (documentation changed)
│    │     │    └ InboundTokenClaimValueType: (documentation changed)
│    │     ├[~] type CustomJWTAuthorizerConfiguration
│    │     │ └ properties
│    │     │    └[+] AdvertisedScopeMapping: Map<string, string>
│    │     ├[~] type GatewayPolicyEngineConfiguration
│    │     │ ├      - documentation: The configuration for a policy engine associated with a gateway. A policy engine is a collection of policies that evaluates and authorizes agent tool calls. When associated with a gateway, the policy engine intercepts all agent requests and determines whether to allow or deny each action based on the defined policies.
│    │     │ │      + documentation: undefined
│    │     │ └ properties
│    │     │    ├ Arn: (documentation changed)
│    │     │    └ Mode: (documentation changed)
│    │     ├[~] type InterceptorInputConfiguration
│    │     │ └ properties
│    │     │    └[+] PayloadFilter: InterceptorPayloadFilter
│    │     ├[+]  type InterceptorPayloadExclusionSelector
│    │     │  ├      name: InterceptorPayloadExclusionSelector
│    │     │  └ properties
│    │     │     └ Field: string<RESPONSE_BODY> (required)
│    │     ├[+]  type InterceptorPayloadFilter
│    │     │  ├      name: InterceptorPayloadFilter
│    │     │  └ properties
│    │     │     └ Exclude: Array<InterceptorPayloadExclusionSelector> (required)
│    │     └[~] type SessionConfiguration
│    │       └ properties
│    │          └ SessionTimeoutInSeconds: - integer
│    │                                     + number
│    ├[+]  resource AWS::BedrockAgentCore::GatewayRateLimit
│    │  ├      name: GatewayRateLimit
│    │  │      cloudFormationType: AWS::BedrockAgentCore::GatewayRateLimit
│    │  │      documentation: Definition of AWS::BedrockAgentCore::GatewayRateLimit Resource Type
│    │  │      primaryIdentifier: ["GatewayIdentifier","RateLimitId"]
│    │  ├ properties
│    │  │  ├ Description: string
│    │  │  ├ DimensionKeys: Array<string> (required, immutable)
│    │  │  ├ Entries: Array<LimitEntry> (required)
│    │  │  ├ GatewayIdentifier: string (immutable)
│    │  │  └ RateLimitId: string (immutable)
│    │  ├ attributes
│    │  │  ├ CreatedAt: string
│    │  │  ├ Status: string<CREATING|ACTIVE|UPDATING|DELETING>
│    │  │  └ UpdatedAt: string
│    │  └ types
│    │     ├ type LimitEntry
│    │     │ ├      documentation: A single rule entry within a limit, mapping dimension values to rate configurations
│    │     │ │      name: LimitEntry
│    │     │ └ properties
│    │     │    ├ Dimensions: Map<string, string> (required)
│    │     │    ├ Requests: Array<RateConfig>
│    │     │    ├ Tokens: Array<RateConfig>
│    │     │    └ Connections: Array<RateConfig>
│    │     └ type RateConfig
│    │       ├      documentation: Rate configuration for a metric (requests or tokens)
│    │       │      name: RateConfig
│    │       └ properties
│    │          ├ Rate: number (required)
│    │          └ Period: string<second|minute> (required)
│    ├[+]  resource AWS::BedrockAgentCore::GatewayRule
│    │  ├      name: GatewayRule
│    │  │      cloudFormationType: AWS::BedrockAgentCore::GatewayRule
│    │  │      documentation: Resource Type definition for AWS::BedrockAgentCore::GatewayRule
│    │  │      primaryIdentifier: ["GatewayIdentifier","RuleId"]
│    │  ├ properties
│    │  │  ├ Actions: Array<Action> (required)
│    │  │  ├ Conditions: Array<Condition>
│    │  │  ├ Description: string
│    │  │  ├ GatewayIdentifier: string (immutable)
│    │  │  └ Priority: number (required)
│    │  ├ attributes
│    │  │  ├ CreatedAt: string
│    │  │  ├ GatewayArn: string
│    │  │  ├ RuleId: string
│    │  │  ├ Status: string<CREATING|ACTIVE|UPDATING|DELETING>
│    │  │  └ UpdatedAt: string
│    │  └ types
│    │     ├ type Action
│    │     │ ├      name: Action
│    │     │ └ properties
│    │     │    ├ ConfigurationBundle: ConfigurationBundleAction
│    │     │    └ RouteToTarget: RouteToTargetAction
│    │     ├ type Condition
│    │     │ ├      name: Condition
│    │     │ └ properties
│    │     │    ├ MatchPrincipals: MatchPrincipals
│    │     │    └ MatchPaths: MatchPaths
│    │     ├ type ConfigurationBundleAction
│    │     │ ├      name: ConfigurationBundleAction
│    │     │ └ properties
│    │     │    ├ StaticOverride: StaticOverride
│    │     │    └ WeightedOverride: WeightedOverride
│    │     ├ type ConfigurationBundleReference
│    │     │ ├      name: ConfigurationBundleReference
│    │     │ └ properties
│    │     │    ├ BundleArn: string (required)
│    │     │    └ BundleVersion: string (required)
│    │     ├ type IamPrincipal
│    │     │ ├      name: IamPrincipal
│    │     │ └ properties
│    │     │    ├ Arn: string (required)
│    │     │    └ Operator: string<StringEquals|StringLike>
│    │     ├ type MatchPaths
│    │     │ ├      name: MatchPaths
│    │     │ └ properties
│    │     │    └ AnyOf: Array<string> (required)
│    │     ├ type MatchPrincipalEntry
│    │     │ ├      name: MatchPrincipalEntry
│    │     │ └ properties
│    │     │    └ IamPrincipal: IamPrincipal (required)
│    │     ├ type MatchPrincipals
│    │     │ ├      name: MatchPrincipals
│    │     │ └ properties
│    │     │    └ AnyOf: Array<MatchPrincipalEntry> (required)
│    │     ├ type RouteToTargetAction
│    │     │ ├      name: RouteToTargetAction
│    │     │ └ properties
│    │     │    ├ StaticRoute: StaticRoute
│    │     │    └ WeightedRoute: WeightedRoute
│    │     ├ type StaticOverride
│    │     │ ├      name: StaticOverride
│    │     │ └ properties
│    │     │    ├ BundleArn: string (required)
│    │     │    └ BundleVersion: string (required)
│    │     ├ type StaticRoute
│    │     │ ├      name: StaticRoute
│    │     │ └ properties
│    │     │    └ TargetName: string (required)
│    │     ├ type TargetTrafficSplitEntry
│    │     │ ├      name: TargetTrafficSplitEntry
│    │     │ └ properties
│    │     │    ├ Name: string (required)
│    │     │    ├ Weight: number (required)
│    │     │    ├ TargetName: string (required)
│    │     │    ├ Description: string
│    │     │    └ Metadata: Map<string, string>
│    │     ├ type TrafficSplitEntry
│    │     │ ├      name: TrafficSplitEntry
│    │     │ └ properties
│    │     │    ├ Name: string (required)
│    │     │    ├ Weight: number (required)
│    │     │    ├ ConfigurationBundle: ConfigurationBundleReference (required)
│    │     │    ├ Description: string
│    │     │    └ Metadata: Map<string, string>
│    │     ├ type WeightedOverride
│    │     │ ├      name: WeightedOverride
│    │     │ └ properties
│    │     │    └ TrafficSplit: Array<TrafficSplitEntry> (required)
│    │     └ type WeightedRoute
│    │       ├      name: WeightedRoute
│    │       └ properties
│    │          └ TrafficSplit: Array<TargetTrafficSplitEntry> (required)
│    ├[~]  resource AWS::BedrockAgentCore::GatewayTarget
│    │  ├ attributes
│    │  │  └ ProtocolType: - string<MCP|HTTP|INFERENCE>
│    │  │                  + string<MCP|HTTP>
│    │  └ types
│    │     ├[~] type ManagedVpcResource
│    │     │ └ properties
│    │     │    └[+] Tags: Map<string, string>
│    │     ├[~] type McpServerTargetConfiguration
│    │     │ └ properties
│    │     │    └ ResourcePriority: - integer
│    │     │                        + number
│    │     ├[~] type OAuthCredentialProvider
│    │     │ └ properties
│    │     │    ├ DefaultReturnUrl: (documentation changed)
│    │     │    └ GrantType: - string<AUTHORIZATION_CODE|CLIENT_CREDENTIALS|TOKEN_EXCHANGE>
│    │     │                 + string<CLIENT_CREDENTIALS|AUTHORIZATION_CODE|TOKEN_EXCHANGE>
│    │     └[~] type StickinessConfiguration
│    │       └ properties
│    │          └ Timeout: - integer
│    │                     + number
│    ├[+]  resource AWS::BedrockAgentCore::HarnessEndpoint
│    │  ├      name: HarnessEndpoint
│    │  │      cloudFormationType: AWS::BedrockAgentCore::HarnessEndpoint
│    │  │      documentation: Resource Type definition for AWS::BedrockAgentCore::HarnessEndpoint - a named, stable reference to a specific version of a Harness that callers invoke, allowing the underlying version to be updated without changing how the agent is invoked.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ HarnessId: string (required, immutable)
│    │  │  ├ EndpointName: string (required, immutable)
│    │  │  ├ TargetVersion: string
│    │  │  ├ Description: string
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ Arn: string
│    │     ├ HarnessName: string
│    │     ├ Status: string<CREATING|CREATE_FAILED|UPDATING|UPDATE_FAILED|READY|DELETING|DELETE_FAILED>
│    │     ├ LiveVersion: string
│    │     ├ CreatedAt: string
│    │     └ UpdatedAt: string
│    ├[~]  resource AWS::BedrockAgentCore::Memory
│    │  └ types
│    │     └[~] type MetadataSchemaEntry
│    │       └ properties
│    │          └[+] ExtractionType: string<LLM_INFERRED|STRICTLY_CONSISTENT>
│    ├[~]  resource AWS::BedrockAgentCore::OAuth2CredentialProvider
│    │  ├ attributes
│    │  │  └[+] Status: string<CREATING|CREATE_FAILED|UPDATING|UPDATE_FAILED|READY|DELETING|DELETE_FAILED>
│    │  └ types
│    │     ├[~] type CustomOauth2ProviderConfigInput
│    │     │ └ properties
│    │     │    ├ ClientAuthenticationMethod: - string<CLIENT_SECRET_BASIC|CLIENT_SECRET_POST|AWS_IAM_ID_TOKEN_JWT>
│    │     │    │                             + string<CLIENT_SECRET_BASIC|CLIENT_SECRET_POST|AWS_IAM_ID_TOKEN_JWT|PRIVATE_KEY_JWT>
│    │     │    ├[+] PrivateEndpoint: PrivateEndpoint
│    │     │    ├[+] PrivateEndpointOverrides: Array<PrivateEndpointOverride>
│    │     │    └[+] PrivateKeyJwtConfig: PrivateKeyJwtConfig
│    │     ├[+]  type KmsKeySourceType
│    │     │  ├      documentation: Contains the KMS key configuration for a JWT client assertion
│    │     │  │      name: KmsKeySourceType
│    │     │  └ properties
│    │     │     └ KmsKeyArn: string (required)
│    │     ├[+]  type ManagedVpcResource
│    │     │  ├      documentation: Configuration for a managed VPC Lattice resource. AgentCore creates and manages the VPC Lattice resource gateway and resource configuration on your behalf.
│    │     │  │      name: ManagedVpcResource
│    │     │  └ properties
│    │     │     ├ VpcIdentifier: string (required)
│    │     │     ├ SubnetIds: Array<string> (required)
│    │     │     ├ EndpointIpAddressType: string<IPV4|IPV6> (required)
│    │     │     ├ SecurityGroupIds: Array<string>
│    │     │     ├ RoutingDomain: string
│    │     │     └ Tags: Map<string, string>
│    │     ├[~] type Oauth2ProviderConfigOutput
│    │     │ └ properties
│    │     │    ├ ClientAuthenticationMethod: - string<CLIENT_SECRET_BASIC|CLIENT_SECRET_POST|AWS_IAM_ID_TOKEN_JWT>
│    │     │    │                             + string<CLIENT_SECRET_BASIC|CLIENT_SECRET_POST|AWS_IAM_ID_TOKEN_JWT|PRIVATE_KEY_JWT>
│    │     │    ├[+] PrivateEndpoint: PrivateEndpoint
│    │     │    ├[+] PrivateEndpointOverrides: Array<PrivateEndpointOverride>
│    │     │    └[+] PrivateKeyJwtConfig: PrivateKeyJwtConfig
│    │     ├[+]  type PrivateEndpoint
│    │     │  ├      documentation: The private endpoint configuration for connecting to private resources in your VPC
│    │     │  │      name: PrivateEndpoint
│    │     │  └ properties
│    │     │     ├ SelfManagedLatticeResource: SelfManagedLatticeResource
│    │     │     └ ManagedVpcResource: ManagedVpcResource
│    │     ├[+]  type PrivateEndpointOverride
│    │     │  ├      documentation: A mapping of a specific domain to a private endpoint for secure connectivity through a VPC Lattice resource configuration
│    │     │  │      name: PrivateEndpointOverride
│    │     │  └ properties
│    │     │     ├ Domain: string (required)
│    │     │     └ PrivateEndpoint: PrivateEndpoint (required)
│    │     ├[+]  type PrivateKeyJwtConfig
│    │     │  ├      documentation: Configuration for private_key_jwt client authentication (RFC 7523)
│    │     │  │      name: PrivateKeyJwtConfig
│    │     │  └ properties
│    │     │     ├ PrivateKeySource: PrivateKeySource
│    │     │     ├ SigningAlgorithm: string<RS256|PS256|ES256>
│    │     │     ├ AdditionalHeaderClaims: Map<string, string>
│    │     │     └ AdditionalPayloadClaims: Map<string, string>
│    │     ├[+]  type PrivateKeySource
│    │     │  ├      documentation: Contains the private key source configuration for a JWT client assertion
│    │     │  │      name: PrivateKeySource
│    │     │  └ properties
│    │     │     └ KmsKeySource: KmsKeySourceType
│    │     └[+]  type SelfManagedLatticeResource
│    │        ├      documentation: Configuration for a self-managed VPC Lattice resource. You create and manage the VPC Lattice resource gateway and resource configuration, then provide the resource configuration identifier.
│    │        │      name: SelfManagedLatticeResource
│    │        └ properties
│    │           └ ResourceConfigurationIdentifier: string (required)
│    ├[~]  resource AWS::BedrockAgentCore::PaymentConnector
│    │  ├ properties
│    │  │  ├ ConnectorType: - string<CoinbaseCDP|StripePrivy> (required)
│    │  │  │                + string<CoinbaseCDP|StripePrivy> (required, immutable)
│    │  │  ├ CredentialProviderConfigurations: - Array<CredentialsProviderConfiguration> (required)
│    │  │  │                                   + Array<CredentialsProviderConfiguration>
│    │  │  │                                   (documentation changed)
│    │  │  └[+] ProvisionMode: string<MANUAL|QUICK_CREATE> (immutable)
│    │  └ attributes
│    │     ├[+] AuthorizationUrl: string
│    │     └ ConnectorStatus: - string<CREATING|UPDATING|DELETING|READY|CREATE_FAILED|UPDATE_FAILED|DELETE_FAILED>
│    │                        + string<CREATING|UPDATING|DELETING|READY|CREATE_FAILED|UPDATE_FAILED|DELETE_FAILED|AWS_MARKETPLACE_SUBSCRIPTION_REQUIRED|PENDING_AUTHENTICATION|PROVISIONING|AUTHENTICATION_EXPIRED|AUTHENTICATION_FAILED>
│    ├[~]  resource AWS::BedrockAgentCore::PaymentCredentialProvider
│    │  └ properties
│    │     └ CredentialProviderVendor: - string<CoinbaseCDP|StripePrivy> (required)
│    │                                 + string<CoinbaseCDP|StripePrivy> (required, immutable)
│    ├[~]  resource AWS::BedrockAgentCore::Runtime
│    │  ├ properties
│    │  │  ├[+] CapacityProviderConfiguration: CapacityProviderConfiguration
│    │  │  └ NetworkConfiguration: - NetworkConfiguration (required)
│    │  │                          + NetworkConfiguration
│    │  └ types
│    │     ├[+]  type CapacityProviderConfiguration
│    │     │  ├      documentation: Configuration for a capacity provider
│    │     │  │      name: CapacityProviderConfiguration
│    │     │  └ properties
│    │     │     └ CapacityProviderArn: string (required)
│    │     ├[+]  type CapacityProviderVolumeConfiguration
│    │     │  ├      documentation: Configuration for a CapacityProvider-managed volume to mount into the agent runtime
│    │     │  │      name: CapacityProviderVolumeConfiguration
│    │     │  └ properties
│    │     │     ├ VolumeName: string (required)
│    │     │     └ MountPath: string (required)
│    │     └[~] type FilesystemConfiguration
│    │       └ properties
│    │          └[+] CapacityProviderVolume: CapacityProviderVolumeConfiguration
│    └[-]  resource AWS::BedrockAgentCore::TokenVault
│       ├      name: TokenVault
│       │      cloudFormationType: AWS::BedrockAgentCore::TokenVault
│       │      documentation: Resource Type definition for AWS::BedrockAgentCore::TokenVault
│       │      arnTemplate: arn:${Partition}:bedrock-agentcore:${Region}:${Account}:token-vault/${TokenVaultId}
│       │      primaryIdentifier: ["Arn"]
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ TokenVaultId: string
│       │  ├ KmsConfiguration: KmsConfiguration
│       │  └ LastModifiedDate: string
│       └ types
│          └ type KmsConfiguration
│            ├      documentation: Contains the KMS configuration for a resource.
│            │      name: KmsConfiguration
│            └ properties
│               ├ KeyType: string<CustomerManagedKey|ServiceManagedKey> (required)
│               └ KmsKeyArn: string
├[~] service aws-cases
│ └ resources
│    └[+]  resource AWS::Cases::Case
│       ├      name: Case
│       │      cloudFormationType: AWS::Cases::Case
│       │      documentation: Creates a case in the specified Cases domain.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ DomainId: string (required, immutable)
│       │  ├ TemplateId: string (required, immutable)
│       │  ├ Title: string (required)
│       │  ├ CustomerId: string (required, immutable)
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ Arn: string
│          └ CaseId: string
├[~] service aws-certificatemanager
│ └ resources
│    └[~]  resource AWS::CertificateManager::Certificate
│       └ attributes
│          └[-] Id: string
├[~] service aws-chime
│ └ resources
│    ├[~]  resource AWS::Chime::AppInstance
│    │  └ attributes
│    │     ├ CreatedTimestamp: - number
│    │     │                   + string
│    │     │                   (documentation changed)
│    │     └ LastUpdatedTimestamp: - number
│    │                             + string
│    │                             (documentation changed)
│    ├[~]  resource AWS::Chime::AppInstanceBot
│    │  └ attributes
│    │     ├ CreatedTimestamp: - number
│    │     │                   + string
│    │     │                   (documentation changed)
│    │     └ LastUpdatedTimestamp: - number
│    │                             + string
│    │                             (documentation changed)
│    └[+]  resource AWS::Chime::ChannelFlow
│       ├      name: ChannelFlow
│       │      cloudFormationType: AWS::Chime::ChannelFlow
│       │      documentation: Creates a channel flow in the Amazon Chime SDK Messaging service. A channel flow is a container for processors (Lambda functions) that perform actions on chat messages.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ AppInstanceArn: string (required, immutable)
│       │  ├ Name: string (required)
│       │  ├ Processors: Array<Processor> (required)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ AppInstanceId: string
│       │  ├ ChannelFlowId: string
│       │  ├ CreatedTimestamp: string
│       │  └ LastUpdatedTimestamp: string
│       └ types
│          ├ type LambdaConfiguration
│          │ ├      documentation: Stores metadata about a Lambda processor.
│          │ │      name: LambdaConfiguration
│          │ └ properties
│          │    ├ ResourceArn: string (required)
│          │    └ InvocationType: string<ASYNC> (required)
│          ├ type Processor
│          │ ├      documentation: Information about a processor in a channel flow.
│          │ │      name: Processor
│          │ └ properties
│          │    ├ Name: string (required)
│          │    ├ Configuration: ProcessorConfiguration (required)
│          │    ├ ExecutionOrder: integer (required)
│          │    └ FallbackAction: string<CONTINUE|ABORT> (required)
│          └ type ProcessorConfiguration
│            ├      documentation: A processor's metadata.
│            │      name: ProcessorConfiguration
│            └ properties
│               └ Lambda: LambdaConfiguration (required)
├[~] service aws-cloudformation
│ └ resources
│    ├[+]  resource AWS::CloudFormation::ChangeSet
│    │  ├      name: ChangeSet
│    │  │      cloudFormationType: AWS::CloudFormation::ChangeSet
│    │  │      documentation: Resource type definition for AWS::CloudFormation::ChangeSet
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["ChangeSetId"]
│    │  ├ properties
│    │  │  ├ ChangeSetName: string (required, immutable)
│    │  │  ├ StackName: string (required, immutable)
│    │  │  ├ TemplateBody: string (immutable)
│    │  │  ├ TemplateURL: string (immutable)
│    │  │  ├ UsePreviousTemplate: boolean (immutable)
│    │  │  ├ Description: string (immutable)
│    │  │  ├ ChangeSetType: string<CREATE|UPDATE|IMPORT> (immutable)
│    │  │  ├ Capabilities: Array<string<CAPABILITY_IAM|CAPABILITY_NAMED_IAM|CAPABILITY_AUTO_EXPAND>> (immutable)
│    │  │  ├ RoleARN: string (immutable)
│    │  │  ├ NotificationARNs: Array<string> (immutable)
│    │  │  ├ IncludeNestedStacks: boolean (immutable)
│    │  │  ├ OnStackFailure: string<DO_NOTHING|ROLLBACK|DELETE> (immutable)
│    │  │  ├ ImportExistingResources: boolean (immutable)
│    │  │  ├ DeploymentMode: string<REVERT_DRIFT> (immutable)
│    │  │  └ Tags: Array<TagsItems> (immutable)
│    │  ├ attributes
│    │  │  ├ ChangeSetId: string
│    │  │  ├ StackId: string
│    │  │  └ CreationTime: string
│    │  └ types
│    │     └ type TagsItems
│    │       ├      name: TagsItems
│    │       └ properties
│    │          ├ Key: string (required)
│    │          └ Value: string (required)
│    └[-]  resource AWS::CloudFormation::ResourceScan
│       ├      name: ResourceScan
│       │      cloudFormationType: AWS::CloudFormation::ResourceScan
│       │      documentation: Represents a CloudFormation resource scan that discovers existing AWS resources in an account and region.
│       │      arnTemplate: arn:${Partition}:cloudformation:${Region}:${Account}:resourceScan/${Id}
│       │      primaryIdentifier: ["ResourceScanId"]
│       ├ properties
│       │  └ ScanFilters: Array<ScanFilter> (immutable)
│       ├ attributes
│       │  ├ ResourceScanId: string
│       │  ├ ScanId: string
│       │  ├ Status: string<IN_PROGRESS|FAILED|COMPLETE|EXPIRED>
│       │  ├ StartTime: string
│       │  └ PercentageCompleted: number
│       └ types
│          └ type ScanFilter
│            ├      documentation: A filter that is used to specify which resource types to scan.
│            │      name: ScanFilter
│            └ properties
│               └ Types: Array<string>
├[+] service aws-cloudhsm
│ ├      capitalized: CloudHSM
│ │      cloudFormationNamespace: AWS::CloudHSM
│ │      name: aws-cloudhsm
│ │      shortName: cloudhsm
│ ├ resources
│ │  └ resource AWS::CloudHSM::Cluster
│ │    ├      name: Cluster
│ │    │      cloudFormationType: AWS::CloudHSM::Cluster
│ │    │      documentation: Creates and manages an AWS CloudHSM cluster.
│ │    │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│ │    │      arnTemplate: arn:${Partition}:cloudhsm:${Region}:${Account}:cluster/${CloudHsmClusterInstanceName}
│ │    │      primaryIdentifier: ["Arn"]
│ │    ├ properties
│ │    │  ├ HsmType: string (required, immutable)
│ │    │  ├ SubnetIds: Array<string> (immutable)
│ │    │  ├ BackupRetentionPolicy: BackupRetentionPolicy
│ │    │  ├ NetworkType: string<IPV4|DUALSTACK> (immutable)
│ │    │  ├ Mode: string<FIPS|NON_FIPS> (immutable)
│ │    │  └ Tags: Array<TagsItems>
│ │    ├ attributes
│ │    │  ├ Arn: string
│ │    │  ├ ClusterId: string
│ │    │  ├ State: string<CREATE_IN_PROGRESS|UNINITIALIZED|INITIALIZE_IN_PROGRESS|INITIALIZED|ACTIVE|UPDATE_IN_PROGRESS|MODIFY_IN_PROGRESS|ROLLBACK_IN_PROGRESS|DELETE_IN_PROGRESS|DELETED|DEGRADED>
│ │    │  ├ SecurityGroup: string
│ │    │  ├ VpcId: string
│ │    │  ├ SubnetMapping: Map<string, string>
│ │    │  └ BackupPolicy: string<DEFAULT>
│ │    ├ types
│ │    │  ├ type BackupRetentionPolicy
│ │    │  │ ├      documentation: A policy that defines how the service retains backups.
│ │    │  │ │      name: BackupRetentionPolicy
│ │    │  │ └ properties
│ │    │  │    ├ Type: string<DAYS>
│ │    │  │    └ Value: string
│ │    │  └ type TagsItems
│ │    │    ├      name: TagsItems
│ │    │    └ properties
│ │    │       ├ Key: string (required)
│ │    │       └ Value: string (required)
│ │    └ metrics
│ │       ├ AWS/CloudHSM • HsmKeysSessionOccupied • Sum
│ │       │ └ dimensionSets
│ │       │    └ HardwareSecurityModule [ClusterId, HsmId]
│ │       ├ AWS/CloudHSM • HsmKeysTokenOccupied • Sum
│ │       │ └ dimensionSets
│ │       │    └ HardwareSecurityModule [ClusterId, HsmId]
│ │       ├ AWS/CloudHSM • HsmSessionCount • Sum
│ │       │ └ dimensionSets
│ │       │    └ HardwareSecurityModule [ClusterId, HsmId]
│ │       ├ AWS/CloudHSM • HsmTemperature • Average
│ │       │ └ dimensionSets
│ │       │    └ HardwareSecurityModule [ClusterId, HsmId]
│ │       ├ AWS/CloudHSM • HsmUnhealthy • Sum
│ │       │ └ dimensionSets
│ │       │    └ HardwareSecurityModule [ClusterId, HsmId]
│ │       ├ AWS/CloudHSM • HsmUsersAvailable • Sum
│ │       │ └ dimensionSets
│ │       │    └ HardwareSecurityModule [ClusterId, HsmId]
│ │       ├ AWS/CloudHSM • HsmUsersMax • Maximum
│ │       │ └ dimensionSets
│ │       │    └ HardwareSecurityModule [ClusterId, HsmId]
│ │       ├ AWS/CloudHSM • InterfaceEth2OctetsInput • Sum
│ │       │ └ dimensionSets
│ │       │    └ HardwareSecurityModule [ClusterId, HsmId]
│ │       └ AWS/CloudHSM • InterfaceEth2OctetsOutput • Sum
│ │         └ dimensionSets
│ │            └ HardwareSecurityModule [ClusterId, HsmId]
│ └ metrics
│    ├ AWS/CloudHSM • HsmKeysSessionOccupied • Sum
│    │ └ dimensionSets
│    │    └ HardwareSecurityModule [ClusterId, HsmId]
│    ├ AWS/CloudHSM • HsmKeysTokenOccupied • Sum
│    │ └ dimensionSets
│    │    └ HardwareSecurityModule [ClusterId, HsmId]
│    ├ AWS/CloudHSM • HsmSessionCount • Sum
│    │ └ dimensionSets
│    │    └ HardwareSecurityModule [ClusterId, HsmId]
│    ├ AWS/CloudHSM • HsmTemperature • Average
│    │ └ dimensionSets
│    │    └ HardwareSecurityModule [ClusterId, HsmId]
│    ├ AWS/CloudHSM • HsmUnhealthy • Sum
│    │ └ dimensionSets
│    │    └ HardwareSecurityModule [ClusterId, HsmId]
│    ├ AWS/CloudHSM • HsmUsersAvailable • Sum
│    │ └ dimensionSets
│    │    └ HardwareSecurityModule [ClusterId, HsmId]
│    ├ AWS/CloudHSM • HsmUsersMax • Maximum
│    │ └ dimensionSets
│    │    └ HardwareSecurityModule [ClusterId, HsmId]
│    ├ AWS/CloudHSM • InterfaceEth2OctetsInput • Sum
│    │ └ dimensionSets
│    │    └ HardwareSecurityModule [ClusterId, HsmId]
│    └ AWS/CloudHSM • InterfaceEth2OctetsOutput • Sum
│      └ dimensionSets
│         └ HardwareSecurityModule [ClusterId, HsmId]
├[~] service aws-cloudwatch
│ └ resources
│    ├[~]  resource AWS::CloudWatch::Alarm
│    │  ├ properties
│    │  │  ├ EvaluationWindow: (documentation changed)
│    │  │  └[+] WarmUpConfiguration: WarmUpConfiguration
│    │  └ types
│    │     ├[~] type EvaluationWindow
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: The evaluation window that an alarm uses to select the range of metric data that it evaluates each time it runs. This is a union type. Set exactly one of its members, ``SlidingWindow`` or ``WallClockWindow``. If you don't set ``EvaluationWindow``, the alarm uses a ``SlidingWindow`` by default.
│    │     │ │       For more information, see [Alarm evaluation windows](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/alarm-evaluation-window.html) in the *CloudWatch User Guide*.
│    │     │ └ properties
│    │     │    ├ SlidingWindow: (documentation changed)
│    │     │    └ WallClockWindow: (documentation changed)
│    │     ├[~] type WallClockWindow
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: An evaluation window that aligns the evaluated range to fixed clock boundaries that match the alarm's period, such as the top of the hour, midnight, or the start of the calendar week, optionally in a specific time zone.
│    │     │ │       When you use a wall clock window, the alarm's period must be 1 minute (60 seconds), 5 minutes (300 seconds), 1 hour (3,600 seconds), 1 day (86,400 seconds), or 1 week (604,800 seconds). Other period values aren't supported with a wall clock window.
│    │     │ │       Choose a wall clock window when your monitoring is tied to a business or calendar period, such as daily reports, batch jobs, or backups, or when you want alarm evaluations to match the periods shown on a metric dashboard.
│    │     │ └ properties
│    │     │    └ Timezone: (documentation changed)
│    │     └[+]  type WarmUpConfiguration
│    │        ├      name: WarmUpConfiguration
│    │        └ properties
│    │           ├ WarmUpPeriodDurationInMinutes: integer
│    │           └ OnlyStartEvaluatingAfterWarmUpPeriodEnds: boolean
│    └[~]  resource AWS::CloudWatch::LogAlarm
│       ├ properties
│       │  └[+] WarmUpConfiguration: WarmUpConfiguration
│       └ types
│          └[+]  type WarmUpConfiguration
│             ├      documentation: The warm-up configuration for an alarm. A warm-up period delays alarm evaluation after you create or update the alarm. This reduces alarm noise from missing data while a new resource or service starts up. During the warm-up period, the alarm stays in INSUFFICIENT_DATA and doesn't perform alarm actions.
│             │      name: WarmUpConfiguration
│             └ properties
│                ├ WarmUpPeriodDurationInMinutes: integer
│                └ OnlyStartEvaluatingAfterWarmUpPeriodEnds: boolean
├[~] service aws-codeartifact
│ └ resources
│    └[-]  resource AWS::CodeArtifact::Package
│       ├      name: Package
│       │      cloudFormationType: AWS::CodeArtifact::Package
│       │      documentation: Resource Type definition for AWS::CodeArtifact::Package
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ DomainName: string (required, immutable)
│       │  ├ Repository: string (required, immutable)
│       │  ├ Format: string<npm|pypi|maven|nuget|generic|ruby|swift|cargo> (required, immutable)
│       │  ├ Namespace: string (immutable)
│       │  └ Name: string (required, immutable)
│       ├ attributes
│       │  ├ Arn: string
│       │  └ OriginConfiguration: OriginConfiguration
│       └ types
│          ├ type OriginConfiguration
│          │ ├      documentation: The package origin configuration for the package.
│          │ │      name: OriginConfiguration
│          │ └ properties
│          │    └ Restrictions: Restrictions
│          └ type Restrictions
│            ├      documentation: The origin restrictions for the package.
│            │      name: Restrictions
│            └ properties
│               ├ Publish: string<ALLOW|BLOCK>
│               └ Upstream: string<ALLOW|BLOCK>
├[~] service aws-codebuild
│ └ resources
│    ├[-]  resource AWS::CodeBuild::Sandbox
│    │  ├      name: Sandbox
│    │  │      cloudFormationType: AWS::CodeBuild::Sandbox
│    │  │      documentation: Represents a CodeBuild sandbox, an ephemeral compute environment started from a CodeBuild project.
│    │  │      arnTemplate: arn:${Partition}:codebuild:${Region}:${Account}:sandbox/${SandboxId}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  └ ProjectName: string (immutable)
│    │  └ attributes
│    │     ├ Arn: string
│    │     ├ Id: string
│    │     ├ Status: string
│    │     ├ RequestTime: string
│    │     ├ StartTime: string
│    │     ├ EncryptionKey: string
│    │     ├ ServiceRole: string
│    │     ├ TimeoutInMinutes: integer
│    │     └ QueuedTimeoutInMinutes: integer
│    └[~]  resource AWS::CodeBuild::SourceCredential
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["Arn"]
│       └ attributes
│          ├[+] Arn: string
│          └[-] Id: string
├[~] service aws-codecommit
│ └ resources
│    └[~]  resource AWS::CodeCommit::Repository
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["RepositoryId"]
│       └ attributes
│          └[+] RepositoryId: string
├[~] service aws-codeconnections
│ └ resources
│    └[+]  resource AWS::CodeConnections::Host
│       ├      name: Host
│       │      cloudFormationType: AWS::CodeConnections::Host
│       │      documentation: A resource that represents the infrastructure where a third-party provider is installed. You create one host for all connections to that provider.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["HostArn"]
│       ├ properties
│       │  ├ Name: string (required, immutable)
│       │  ├ ProviderType: string<Bitbucket|GitHub|GitHubEnterpriseServer|GitLab|GitLabSelfManaged|AzureDevOps> (required, immutable)
│       │  ├ ProviderEndpoint: string (required)
│       │  ├ VpcConfiguration: VpcConfiguration
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ HostArn: string
│       │  ├ HostId: string
│       │  └ Status: string
│       └ types
│          └ type VpcConfiguration
│            ├      documentation: The VPC configuration provisioned for the host.
│            │      name: VpcConfiguration
│            └ properties
│               ├ VpcId: string (required)
│               ├ SubnetIds: Array<string> (required)
│               ├ SecurityGroupIds: Array<string> (required)
│               └ TlsCertificate: string
├[-] service aws-cognitosync
│ ├      capitalized: CognitoSync
│ │      cloudFormationNamespace: AWS::CognitoSync
│ │      name: aws-cognitosync
│ │      shortName: cognitosync
│ └ resources
│    └ resource AWS::CognitoSync::Dataset
│      ├      name: Dataset
│      │      cloudFormationType: AWS::CognitoSync::Dataset
│      │      documentation: Resource type definition for a Cognito Sync Dataset. A dataset is a collection of key-value pairs per identity that can store up to 1 MB of data and sync across devices.
│      │      primaryIdentifier: ["Arn"]
│      ├ properties
│      │  ├ IdentityPoolId: string (immutable)
│      │  ├ IdentityId: string (immutable)
│      │  └ DatasetName: string (immutable)
│      └ attributes
│         ├ Arn: string
│         ├ CreationDate: string
│         ├ LastModifiedDate: string
│         ├ LastModifiedBy: string
│         ├ DataStorage: integer
│         └ NumRecords: integer
├[~] service aws-config
│ └ resources
│    └[~]  resource AWS::Config::DeliveryChannel
│       └ types
│          └[~] type ConfigSnapshotDeliveryProperties
│            └ properties
│               └ DeliveryFrequency: - string
│                                    + string<One_Hour|Three_Hours|Six_Hours|Twelve_Hours|TwentyFour_Hours>
├[~] service aws-connect
│ └ resources
│    ├[~]  resource AWS::Connect::EvaluationForm
│    │  └ types
│    │     └[~] type EvaluationFormLanguageConfiguration
│    │       └ properties
│    │          └ FormLanguage: - string<de-DE|en-US|es-ES|fr-FR|it-IT|pt-BR|ja-JP|ko-KR|zh-CN>
│    │                          + string<de-DE|en-US|es-ES|fr-FR|it-IT|pt-BR|ja-JP|ko-KR|zh-CN|ms-MY>
│    ├[+]  resource AWS::Connect::Metric
│    │  ├      name: Metric
│    │  │      cloudFormationType: AWS::Connect::Metric
│    │  │      documentation: Resource Type definition for AWS::Connect::Metric, a custom metric configured for an Amazon Connect instance
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["MetricArn"]
│    │  ├ properties
│    │  │  ├ InstanceArn: string (required, immutable)
│    │  │  ├ Name: string
│    │  │  ├ Description: string
│    │  │  ├ MetricCalculation: MetricCalculation
│    │  │  ├ Status: string<SAVED|PUBLISHED> (immutable)
│    │  │  ├ Unit: string<INTEGER|DOUBLE|PERCENT|SECONDS>
│    │  │  ├ PositiveTrendIndicator: string<POSITIVE|NEGATIVE|NEUTRAL>
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ MetricArn: string
│    │  │  ├ CreatedTime: number
│    │  │  ├ CreatedUser: CreatedByInfo
│    │  │  ├ LastModifiedTime: number
│    │  │  ├ LastModifiedRegion: string
│    │  │  ├ LastModifiedUser: CreatedByInfo
│    │  │  ├ CreationMethod: string<SERVICE_LEVEL_BUILDER|METRIC_BUILDER>
│    │  │  ├ Category: string
│    │  │  ├ Type: string<AWS_MANAGED|CUSTOMER_MANAGED>
│    │  │  ├ SupportsPreaggregateCalculation: boolean
│    │  │  ├ SupportsCustomCalculation: boolean
│    │  │  ├ Groupings: Array<string>
│    │  │  ├ Filters: Array<AvailableFilter>
│    │  │  ├ EffectiveTime: number
│    │  │  ├ RefreshRate: integer
│    │  │  ├ SupportedStats: Array<string>
│    │  │  ├ PrimaryEventSource: string
│    │  │  └ PrimaryEventSourceEffectiveTimestampType: string
│    │  └ types
│    │     ├ type AvailableFilter
│    │     │ ├      name: AvailableFilter
│    │     │ └ properties
│    │     │    ├ Id: string (required)
│    │     │    └ Type: string<METRIC_LEVEL|RESOURCE_LEVEL> (required)
│    │     ├ type CalculationComponent
│    │     │ ├      name: CalculationComponent
│    │     │ └ properties
│    │     │    ├ Alias: string (required)
│    │     │    ├ MetricName: string
│    │     │    ├ MetricId: string
│    │     │    └ MetricFilters: Array<MetricFilter>
│    │     ├ type CreatedByInfo
│    │     │ ├      name: CreatedByInfo
│    │     │ └ properties
│    │     │    ├ AWSIdentityArn: string
│    │     │    └ ConnectUserArn: string
│    │     ├ type MetricCalculation
│    │     │ ├      documentation: The calculation configuration for the metric
│    │     │ │      name: MetricCalculation
│    │     │ └ properties
│    │     │    ├ CalculationComponents: Array<CalculationComponent> (required)
│    │     │    └ Calculation: string (required)
│    │     ├ type MetricFilter
│    │     │ ├      name: MetricFilter
│    │     │ └ properties
│    │     │    ├ MetricFilterKey: string (required)
│    │     │    ├ Negate: boolean
│    │     │    ├ NumberCondition: MetricFilterNumberCondition
│    │     │    ├ StringCondition: MetricFilterStringCondition
│    │     │    └ BooleanCondition: MetricFilterBooleanCondition
│    │     ├ type MetricFilterBooleanCondition
│    │     │ ├      name: MetricFilterBooleanCondition
│    │     │ └ properties
│    │     │    └ Comparison: string<IS_TRUE|IS_FALSE> (required)
│    │     ├ type MetricFilterNumberCondition
│    │     │ ├      name: MetricFilterNumberCondition
│    │     │ └ properties
│    │     │    ├ Comparison: string<LESSER|LESSER_OR_EQUAL|GREATER|GREATER_OR_EQUAL> (required)
│    │     │    └ Values: Array<number> (required)
│    │     └ type MetricFilterStringCondition
│    │       ├      name: MetricFilterStringCondition
│    │       └ properties
│    │          ├ Comparison: string<MATCHES_ANY|MATCHES_NONE> (required)
│    │          └ Values: Array<string> (required)
│    └[~]  resource AWS::Connect::Queue
│       └ attributes
│          ├[+] LastModifiedRegion: string
│          └[+] LastModifiedTime: number
├[-] service aws-controlcatalog
│ ├      capitalized: ControlCatalog
│ │      cloudFormationNamespace: AWS::ControlCatalog
│ │      name: aws-controlcatalog
│ │      shortName: controlcatalog
│ └ resources
│    └ resource AWS::ControlCatalog::Objective
│      ├      name: Objective
│      │      cloudFormationType: AWS::ControlCatalog::Objective
│      │      documentation: Returns information about an objective in the AWS Control Catalog.
│      │      arnTemplate: arn:${Partition}:controlcatalog:::objective/${ObjectiveId}
│      │      primaryIdentifier: ["Arn"]
│      ├ attributes
│      │  ├ Arn: string
│      │  ├ ObjectiveId: string
│      │  ├ Name: string
│      │  ├ Description: string
│      │  ├ Domain: Domain
│      │  ├ CreateTime: string
│      │  └ LastUpdateTime: string
│      └ types
│         └ type Domain
│           ├      documentation: The domain that the objective belongs to.
│           │      name: Domain
│           └ properties
│              ├ Arn: string
│              └ Name: string
├[+] service aws-dataexchange
│ ├      capitalized: DataExchange
│ │      cloudFormationNamespace: AWS::DataExchange
│ │      name: aws-dataexchange
│ │      shortName: dataexchange
│ ├ resources
│ │  ├ resource AWS::DataExchange::DataSet
│ │  │ ├      name: DataSet
│ │  │ │      cloudFormationType: AWS::DataExchange::DataSet
│ │  │ │      documentation: Definition of AWS::DataExchange::DataSet Resource Type
│ │  │ │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│ │  │ │      arnTemplate: arn:${Partition}:dataexchange:${Region}:${Account}:data-sets/${DataSetId}
│ │  │ │      primaryIdentifier: ["Arn"]
│ │  │ ├ properties
│ │  │ │  ├ AssetType: string<S3_SNAPSHOT|REDSHIFT_DATA_SHARE|API_GATEWAY_API|S3_DATA_ACCESS|LAKE_FORMATION_DATA_PERMISSION> (required, immutable)
│ │  │ │  ├ Description: string (required)
│ │  │ │  ├ Name: string (required)
│ │  │ │  └ Tags: Array<tag>
│ │  │ ├ attributes
│ │  │ │  ├ Arn: string
│ │  │ │  ├ Id: string
│ │  │ │  ├ CreatedAt: string
│ │  │ │  ├ UpdatedAt: string
│ │  │ │  └ Origin: string<OWNED|ENTITLED>
│ │  │ └ events
│ │  │    ├ event aws.dataexchange@DataSetUpdateDelayed
│ │  │    │ ├      description: Schema for event type DataSetUpdateDelayed, published by AWS service aws.dataexchange
│ │  │    │ │      source: aws.dataexchange
│ │  │    │ │      detailType: Data Set Update Delayed
│ │  │    │ │      rootProperty: DataSetUpdateDelayed
│ │  │    │ │      resourcesFields: [
│ │  │    │ │        {
│ │  │    │ │          "type": "DataSet",
│ │  │    │ │          "resource": "DataSet"
│ │  │    │ │        }
│ │  │    │ │      ]
│ │  │    │ └ types
│ │  │    │    ├ type DataSet
│ │  │    │    │ └ properties
│ │  │    │    │    ├ AssetType: string (required)
│ │  │    │    │    ├ Id: string (required)
│ │  │    │    │    └ Name: string (required)
│ │  │    │    ├ type DataSetUpdateDelayed
│ │  │    │    │ └ properties
│ │  │    │    │    ├ DataSet: DataSet (required)
│ │  │    │    │    ├ Notification: Notification (required)
│ │  │    │    │    └ Product: Product (required)
│ │  │    │    ├ type LakeFormationTagPolicyDetails
│ │  │    │    │ └ properties
│ │  │    │    │    ├ Database: string
│ │  │    │    │    └ Table: string
│ │  │    │    ├ type Notification
│ │  │    │    │ └ properties
│ │  │    │    │    ├ Scope: Scope
│ │  │    │    │    ├ Comment: string
│ │  │    │    │    └ Type: string (required)
│ │  │    │    ├ type Product
│ │  │    │    │ └ properties
│ │  │    │    │    ├ Id: string (required)
│ │  │    │    │    ├ Name: string (required)
│ │  │    │    │    └ ProviderContact: string (required)
│ │  │    │    ├ type RedshiftDataShareDetails
│ │  │    │    │ └ properties
│ │  │    │    │    ├ Arn: string (required)
│ │  │    │    │    ├ Database: string (required)
│ │  │    │    │    ├ Function: string
│ │  │    │    │    ├ Table: string
│ │  │    │    │    └ View: string
│ │  │    │    ├ type S3DataAccessDetails
│ │  │    │    │ └ properties
│ │  │    │    │    ├ KeyPrefixes: string[]
│ │  │    │    │    └ Keys: string[]
│ │  │    │    └ type Scope
│ │  │    │      └ properties
│ │  │    │         ├ LakeFormationTagPolicies: LakeFormationTagPolicyDetails[]
│ │  │    │         ├ RedshiftDataShares: RedshiftDataShareDetails[]
│ │  │    │         └ S3DataAccesses: S3DataAccessDetails[]
│ │  │    ├ event aws.dataexchange@DataUpdatedInDataSet
│ │  │    │ ├      description: Schema for event type DataUpdatedInDataSet, published by AWS service aws.dataexchange
│ │  │    │ │      source: aws.dataexchange
│ │  │    │ │      detailType: Data Updated in Data Set
│ │  │    │ │      rootProperty: DataUpdatedInDataSet
│ │  │    │ │      resourcesFields: [
│ │  │    │ │        {
│ │  │    │ │          "type": "DataSet",
│ │  │    │ │          "resource": "DataSet"
│ │  │    │ │        }
│ │  │    │ │      ]
│ │  │    │ └ types
│ │  │    │    ├ type DataSet
│ │  │    │    │ └ properties
│ │  │    │    │    ├ AssetType: string (required)
│ │  │    │    │    ├ Id: string (required)
│ │  │    │    │    └ Name: string (required)
│ │  │    │    ├ type DataUpdate
│ │  │    │    │ └ properties
│ │  │    │    │    └ DataUpdatedAt: string
│ │  │    │    ├ type DataUpdatedInDataSet
│ │  │    │    │ └ properties
│ │  │    │    │    ├ DataSet: DataSet (required)
│ │  │    │    │    ├ Notification: Notification (required)
│ │  │    │    │    └ Product: Product (required)
│ │  │    │    ├ type Details
│ │  │    │    │ └ properties
│ │  │    │    │    └ DataUpdate: DataUpdate
│ │  │    │    ├ type LakeFormationTagPolicyDetails
│ │  │    │    │ └ properties
│ │  │    │    │    ├ Database: string
│ │  │    │    │    └ Table: string
│ │  │    │    ├ type Notification
│ │  │    │    │ └ properties
│ │  │    │    │    ├ Details: Details
│ │  │    │    │    ├ Scope: Scope
│ │  │    │    │    ├ Comment: string
│ │  │    │    │    └ Type: string (required)
│ │  │    │    ├ type Product
│ │  │    │    │ └ properties
│ │  │    │    │    ├ Id: string (required)
│ │  │    │    │    ├ Name: string (required)
│ │  │    │    │    └ ProviderContact: string (required)
│ │  │    │    ├ type RedshiftDataShareDetails
│ │  │    │    │ └ properties
│ │  │    │    │    ├ Arn: string (required)
│ │  │    │    │    ├ Database: string (required)
│ │  │    │    │    ├ Function: string
│ │  │    │    │    ├ Schema: string
│ │  │    │    │    └ View: string
│ │  │    │    ├ type S3DataAccessDetails
│ │  │    │    │ └ properties
│ │  │    │    │    ├ KeyPrefixes: string[]
│ │  │    │    │    └ Keys: string[]
│ │  │    │    └ type Scope
│ │  │    │      └ properties
│ │  │    │         ├ LakeFormationTagPolicies: LakeFormationTagPolicyDetails[]
│ │  │    │         ├ RedshiftDataShares: RedshiftDataShareDetails[]
│ │  │    │         └ S3DataAccesses: S3DataAccessDetails[]
│ │  │    ├ event aws.dataexchange@DeprecationPlannedForDataSet
│ │  │    │ ├      description: Schema for event type DeprecationPlannedForDataSet, published by AWS service aws.dataexchange
│ │  │    │ │      source: aws.dataexchange
│ │  │    │ │      detailType: Deprecation Planned for Data Set
│ │  │    │ │      rootProperty: DeprecationPlannedForDataSet
│ │  │    │ │      resourcesFields: [
│ │  │    │ │        {
│ │  │    │ │          "type": "DataSet",
│ │  │    │ │          "resource": "DataSet"
│ │  │    │ │        }
│ │  │    │ │      ]
│ │  │    │ └ types
│ │  │    │    ├ type DataSet
│ │  │    │    │ └ properties
│ │  │    │    │    ├ AssetType: string (required)
│ │  │    │    │    ├ Id: string (required)
│ │  │    │    │    └ Name: string (required)
│ │  │    │    ├ type Deprecation
│ │  │    │    │ └ properties
│ │  │    │    │    └ DeprecationAt: string (required)
│ │  │    │    ├ type DeprecationPlannedForDataSet
│ │  │    │    │ └ properties
│ │  │    │    │    ├ DataSet: DataSet (required)
│ │  │    │    │    ├ Notification: Notification (required)
│ │  │    │    │    └ Product: Product (required)
│ │  │    │    ├ type Details
│ │  │    │    │ └ properties
│ │  │    │    │    └ Deprecation: Deprecation (required)
│ │  │    │    ├ type LakeFormationTagPolicyDetails
│ │  │    │    │ └ properties
│ │  │    │    │    ├ Database: string
│ │  │    │    │    └ Table: string
│ │  │    │    ├ type Notification
│ │  │    │    │ └ properties
│ │  │    │    │    ├ Details: Details (required)
│ │  │    │    │    ├ Scope: Scope
│ │  │    │    │    ├ Comment: string (required)
│ │  │    │    │    └ Type: string (required)
│ │  │    │    ├ type Product
│ │  │    │    │ └ properties
│ │  │    │    │    ├ Id: string (required)
│ │  │    │    │    ├ Name: string (required)
│ │  │    │    │    └ ProviderContact: string (required)
│ │  │    │    ├ type RedshiftDataShareDetails
│ │  │    │    │ └ properties
│ │  │    │    │    ├ Arn: string (required)
│ │  │    │    │    ├ Database: string (required)
│ │  │    │    │    ├ Function: string
│ │  │    │    │    ├ Schema: string
│ │  │    │    │    ├ Table: string
│ │  │    │    │    └ View: string
│ │  │    │    ├ type S3DataAccessDetails
│ │  │    │    │ └ properties
│ │  │    │    │    ├ KeyPrefixes: string[]
│ │  │    │    │    └ Keys: string[]
│ │  │    │    └ type Scope
│ │  │    │      └ properties
│ │  │    │         ├ LakeFormationTagPolicies: LakeFormationTagPolicyDetails[]
│ │  │    │         ├ RedshiftDataShares: RedshiftDataShareDetails[]
│ │  │    │         └ S3DataAccesses: S3DataAccessDetails[]
│ │  │    └ event aws.dataexchange@SchemaChangePlannedForDataSet
│ │  │      ├      description: Schema for event type SchemaChangePlannedForDataSet, published by AWS service aws.dataexchange
│ │  │      │      source: aws.dataexchange
│ │  │      │      detailType: Schema Change Planned for Data Set
│ │  │      │      rootProperty: SchemaChangePlannedForDataSet
│ │  │      │      resourcesFields: [
│ │  │      │        {
│ │  │      │          "type": "DataSet",
│ │  │      │          "resource": "DataSet"
│ │  │      │        }
│ │  │      │      ]
│ │  │      └ types
│ │  │         ├ type DataSet
│ │  │         │ └ properties
│ │  │         │    ├ AssetType: string (required)
│ │  │         │    ├ Id: string (required)
│ │  │         │    └ Name: string (required)
│ │  │         ├ type Details
│ │  │         │ └ properties
│ │  │         │    └ SchemaChange: SchemaChange (required)
│ │  │         ├ type LakeFormationTagPolicyDetails
│ │  │         │ └ properties
│ │  │         │    ├ Database: string
│ │  │         │    └ Table: string
│ │  │         ├ type Notification
│ │  │         │ └ properties
│ │  │         │    ├ Details: Details (required)
│ │  │         │    ├ Scope: Scope
│ │  │         │    ├ Comment: string
│ │  │         │    └ Type: string (required)
│ │  │         ├ type Product
│ │  │         │ └ properties
│ │  │         │    ├ Id: string (required)
│ │  │         │    ├ Name: string (required)
│ │  │         │    └ ProviderContact: string (required)
│ │  │         ├ type RedshiftDataShareDetails
│ │  │         │ └ properties
│ │  │         │    ├ Arn: string (required)
│ │  │         │    ├ Database: string (required)
│ │  │         │    ├ Function: string
│ │  │         │    ├ Schema: string
│ │  │         │    ├ Table: string
│ │  │         │    └ View: string
│ │  │         ├ type S3DataAccessDetails
│ │  │         │ └ properties
│ │  │         │    ├ KeyPrefixes: string[]
│ │  │         │    └ Keys: string[]
│ │  │         ├ type SchemaChange
│ │  │         │ └ properties
│ │  │         │    ├ Changes: SchemaChangeItem[]
│ │  │         │    └ SchemaChangeAt: string (required)
│ │  │         ├ type SchemaChangeItem
│ │  │         │ └ properties
│ │  │         │    ├ Description: string
│ │  │         │    ├ Name: string (required)
│ │  │         │    └ Type: string (required)
│ │  │         ├ type SchemaChangePlannedForDataSet
│ │  │         │ └ properties
│ │  │         │    ├ DataSet: DataSet (required)
│ │  │         │    ├ Notification: Notification (required)
│ │  │         │    └ Product: Product (required)
│ │  │         └ type Scope
│ │  │           └ properties
│ │  │              ├ LakeFormationTagPolicies: LakeFormationTagPolicyDetails[]
│ │  │              ├ RedshiftDataShares: RedshiftDataShareDetails[]
│ │  │              └ S3DataAccesses: S3DataAccessDetails[]
│ │  └ resource AWS::DataExchange::EventAction
│ │    ├      name: EventAction
│ │    │      cloudFormationType: AWS::DataExchange::EventAction
│ │    │      documentation: An event action is an AWS Data Exchange resource that automatically exports data set revisions to Amazon S3 when a revision is published.
│ │    │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│ │    │      primaryIdentifier: ["Arn"]
│ │    ├ properties
│ │    │  ├ Action: Action (required)
│ │    │  ├ Event: Event (required, immutable)
│ │    │  └ Tags: Array<tag>
│ │    ├ attributes
│ │    │  ├ Arn: string
│ │    │  ├ EventActionId: string
│ │    │  ├ CreatedAt: string
│ │    │  └ UpdatedAt: string
│ │    └ types
│ │       ├ type Action
│ │       │ ├      documentation: What occurs after a certain event.
│ │       │ │      name: Action
│ │       │ └ properties
│ │       │    └ ExportRevisionToS3: AutoExportRevisionToS3RequestDetails
│ │       ├ type AutoExportRevisionDestinationEntry
│ │       │ ├      documentation: A revision destination is the Amazon S3 bucket folder destination to where the export will be sent.
│ │       │ │      name: AutoExportRevisionDestinationEntry
│ │       │ └ properties
│ │       │    ├ Bucket: string (required)
│ │       │    └ KeyPattern: string
│ │       ├ type AutoExportRevisionToS3RequestDetails
│ │       │ ├      documentation: Details of the operation to be performed by the job.
│ │       │ │      name: AutoExportRevisionToS3RequestDetails
│ │       │ └ properties
│ │       │    ├ Encryption: ExportServerSideEncryption
│ │       │    └ RevisionDestination: AutoExportRevisionDestinationEntry (required)
│ │       ├ type Event
│ │       │ ├      documentation: What occurs to start an action.
│ │       │ │      name: Event
│ │       │ └ properties
│ │       │    └ RevisionPublished: RevisionPublished
│ │       ├ type ExportServerSideEncryption
│ │       │ ├      documentation: Encryption configuration of the export job.
│ │       │ │      name: ExportServerSideEncryption
│ │       │ └ properties
│ │       │    ├ KmsKeyArn: string
│ │       │    └ Type: string<aws:kms|AES256> (required)
│ │       └ type RevisionPublished
│ │         ├      documentation: Information about the published revision.
│ │         │      name: RevisionPublished
│ │         └ properties
│ │            └ DataSetId: string (required)
│ └ metrics
│    ├ event aws.dataexchange@DataSetUpdateDelayed
│    │ ├      description: Schema for event type DataSetUpdateDelayed, published by AWS service aws.dataexchange
│    │ │      source: aws.dataexchange
│    │ │      detailType: Data Set Update Delayed
│    │ │      rootProperty: DataSetUpdateDelayed
│    │ │      resourcesFields: [
│    │ │        {
│    │ │          "type": "DataSet",
│    │ │          "resource": "DataSet"
│    │ │        }
│    │ │      ]
│    │ └ types
│    │    ├ type DataSet
│    │    │ └ properties
│    │    │    ├ AssetType: string (required)
│    │    │    ├ Id: string (required)
│    │    │    └ Name: string (required)
│    │    ├ type DataSetUpdateDelayed
│    │    │ └ properties
│    │    │    ├ DataSet: DataSet (required)
│    │    │    ├ Notification: Notification (required)
│    │    │    └ Product: Product (required)
│    │    ├ type LakeFormationTagPolicyDetails
│    │    │ └ properties
│    │    │    ├ Database: string
│    │    │    └ Table: string
│    │    ├ type Notification
│    │    │ └ properties
│    │    │    ├ Scope: Scope
│    │    │    ├ Comment: string
│    │    │    └ Type: string (required)
│    │    ├ type Product
│    │    │ └ properties
│    │    │    ├ Id: string (required)
│    │    │    ├ Name: string (required)
│    │    │    └ ProviderContact: string (required)
│    │    ├ type RedshiftDataShareDetails
│    │    │ └ properties
│    │    │    ├ Arn: string (required)
│    │    │    ├ Database: string (required)
│    │    │    ├ Function: string
│    │    │    ├ Table: string
│    │    │    └ View: string
│    │    ├ type S3DataAccessDetails
│    │    │ └ properties
│    │    │    ├ KeyPrefixes: string[]
│    │    │    └ Keys: string[]
│    │    └ type Scope
│    │      └ properties
│    │         ├ LakeFormationTagPolicies: LakeFormationTagPolicyDetails[]
│    │         ├ RedshiftDataShares: RedshiftDataShareDetails[]
│    │         └ S3DataAccesses: S3DataAccessDetails[]
│    ├ event aws.dataexchange@DataUpdatedInDataSet
│    │ ├      description: Schema for event type DataUpdatedInDataSet, published by AWS service aws.dataexchange
│    │ │      source: aws.dataexchange
│    │ │      detailType: Data Updated in Data Set
│    │ │      rootProperty: DataUpdatedInDataSet
│    │ │      resourcesFields: [
│    │ │        {
│    │ │          "type": "DataSet",
│    │ │          "resource": "DataSet"
│    │ │        }
│    │ │      ]
│    │ └ types
│    │    ├ type DataSet
│    │    │ └ properties
│    │    │    ├ AssetType: string (required)
│    │    │    ├ Id: string (required)
│    │    │    └ Name: string (required)
│    │    ├ type DataUpdate
│    │    │ └ properties
│    │    │    └ DataUpdatedAt: string
│    │    ├ type DataUpdatedInDataSet
│    │    │ └ properties
│    │    │    ├ DataSet: DataSet (required)
│    │    │    ├ Notification: Notification (required)
│    │    │    └ Product: Product (required)
│    │    ├ type Details
│    │    │ └ properties
│    │    │    └ DataUpdate: DataUpdate
│    │    ├ type LakeFormationTagPolicyDetails
│    │    │ └ properties
│    │    │    ├ Database: string
│    │    │    └ Table: string
│    │    ├ type Notification
│    │    │ └ properties
│    │    │    ├ Details: Details
│    │    │    ├ Scope: Scope
│    │    │    ├ Comment: string
│    │    │    └ Type: string (required)
│    │    ├ type Product
│    │    │ └ properties
│    │    │    ├ Id: string (required)
│    │    │    ├ Name: string (required)
│    │    │    └ ProviderContact: string (required)
│    │    ├ type RedshiftDataShareDetails
│    │    │ └ properties
│    │    │    ├ Arn: string (required)
│    │    │    ├ Database: string (required)
│    │    │    ├ Function: string
│    │    │    ├ Schema: string
│    │    │    └ View: string
│    │    ├ type S3DataAccessDetails
│    │    │ └ properties
│    │    │    ├ KeyPrefixes: string[]
│    │    │    └ Keys: string[]
│    │    └ type Scope
│    │      └ properties
│    │         ├ LakeFormationTagPolicies: LakeFormationTagPolicyDetails[]
│    │         ├ RedshiftDataShares: RedshiftDataShareDetails[]
│    │         └ S3DataAccesses: S3DataAccessDetails[]
│    ├ event aws.dataexchange@DeprecationPlannedForDataSet
│    │ ├      description: Schema for event type DeprecationPlannedForDataSet, published by AWS service aws.dataexchange
│    │ │      source: aws.dataexchange
│    │ │      detailType: Deprecation Planned for Data Set
│    │ │      rootProperty: DeprecationPlannedForDataSet
│    │ │      resourcesFields: [
│    │ │        {
│    │ │          "type": "DataSet",
│    │ │          "resource": "DataSet"
│    │ │        }
│    │ │      ]
│    │ └ types
│    │    ├ type DataSet
│    │    │ └ properties
│    │    │    ├ AssetType: string (required)
│    │    │    ├ Id: string (required)
│    │    │    └ Name: string (required)
│    │    ├ type Deprecation
│    │    │ └ properties
│    │    │    └ DeprecationAt: string (required)
│    │    ├ type DeprecationPlannedForDataSet
│    │    │ └ properties
│    │    │    ├ DataSet: DataSet (required)
│    │    │    ├ Notification: Notification (required)
│    │    │    └ Product: Product (required)
│    │    ├ type Details
│    │    │ └ properties
│    │    │    └ Deprecation: Deprecation (required)
│    │    ├ type LakeFormationTagPolicyDetails
│    │    │ └ properties
│    │    │    ├ Database: string
│    │    │    └ Table: string
│    │    ├ type Notification
│    │    │ └ properties
│    │    │    ├ Details: Details (required)
│    │    │    ├ Scope: Scope
│    │    │    ├ Comment: string (required)
│    │    │    └ Type: string (required)
│    │    ├ type Product
│    │    │ └ properties
│    │    │    ├ Id: string (required)
│    │    │    ├ Name: string (required)
│    │    │    └ ProviderContact: string (required)
│    │    ├ type RedshiftDataShareDetails
│    │    │ └ properties
│    │    │    ├ Arn: string (required)
│    │    │    ├ Database: string (required)
│    │    │    ├ Function: string
│    │    │    ├ Schema: string
│    │    │    ├ Table: string
│    │    │    └ View: string
│    │    ├ type S3DataAccessDetails
│    │    │ └ properties
│    │    │    ├ KeyPrefixes: string[]
│    │    │    └ Keys: string[]
│    │    └ type Scope
│    │      └ properties
│    │         ├ LakeFormationTagPolicies: LakeFormationTagPolicyDetails[]
│    │         ├ RedshiftDataShares: RedshiftDataShareDetails[]
│    │         └ S3DataAccesses: S3DataAccessDetails[]
│    └ event aws.dataexchange@SchemaChangePlannedForDataSet
│      ├      description: Schema for event type SchemaChangePlannedForDataSet, published by AWS service aws.dataexchange
│      │      source: aws.dataexchange
│      │      detailType: Schema Change Planned for Data Set
│      │      rootProperty: SchemaChangePlannedForDataSet
│      │      resourcesFields: [
│      │        {
│      │          "type": "DataSet",
│      │          "resource": "DataSet"
│      │        }
│      │      ]
│      └ types
│         ├ type DataSet
│         │ └ properties
│         │    ├ AssetType: string (required)
│         │    ├ Id: string (required)
│         │    └ Name: string (required)
│         ├ type Details
│         │ └ properties
│         │    └ SchemaChange: SchemaChange (required)
│         ├ type LakeFormationTagPolicyDetails
│         │ └ properties
│         │    ├ Database: string
│         │    └ Table: string
│         ├ type Notification
│         │ └ properties
│         │    ├ Details: Details (required)
│         │    ├ Scope: Scope
│         │    ├ Comment: string
│         │    └ Type: string (required)
│         ├ type Product
│         │ └ properties
│         │    ├ Id: string (required)
│         │    ├ Name: string (required)
│         │    └ ProviderContact: string (required)
│         ├ type RedshiftDataShareDetails
│         │ └ properties
│         │    ├ Arn: string (required)
│         │    ├ Database: string (required)
│         │    ├ Function: string
│         │    ├ Schema: string
│         │    ├ Table: string
│         │    └ View: string
│         ├ type S3DataAccessDetails
│         │ └ properties
│         │    ├ KeyPrefixes: string[]
│         │    └ Keys: string[]
│         ├ type SchemaChange
│         │ └ properties
│         │    ├ Changes: SchemaChangeItem[]
│         │    └ SchemaChangeAt: string (required)
│         ├ type SchemaChangeItem
│         │ └ properties
│         │    ├ Description: string
│         │    ├ Name: string (required)
│         │    └ Type: string (required)
│         ├ type SchemaChangePlannedForDataSet
│         │ └ properties
│         │    ├ DataSet: DataSet (required)
│         │    ├ Notification: Notification (required)
│         │    └ Product: Product (required)
│         └ type Scope
│           └ properties
│              ├ LakeFormationTagPolicies: LakeFormationTagPolicyDetails[]
│              ├ RedshiftDataShares: RedshiftDataShareDetails[]
│              └ S3DataAccesses: S3DataAccessDetails[]
├[~] service aws-dax
│ └ resources
│    └[~]  resource AWS::DAX::ParameterGroup
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["ParameterGroupName"]
│       ├ properties
│       │  └ Description: - string
│       │                 + string (immutable)
│       └ attributes
│          └[-] Id: string
├[~] service aws-deadline
│ └ resources
│    ├[+]  resource AWS::Deadline::Budget
│    │  ├      name: Budget
│    │  │      cloudFormationType: AWS::Deadline::Budget
│    │  │      documentation: Creates a budget to set spending thresholds for your rendering activity.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ FarmId: string (required, immutable)
│    │  │  ├ DisplayName: string (required)
│    │  │  ├ Description: string
│    │  │  ├ ApproximateDollarLimit: number (required)
│    │  │  ├ UsageTrackingResource: UsageTrackingResource (required, immutable)
│    │  │  ├ Actions: Array<BudgetActionToAdd> (required)
│    │  │  ├ Schedule: BudgetSchedule (required)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  ├ BudgetId: string
│    │  │  └ Status: string<ACTIVE|INACTIVE>
│    │  └ types
│    │     ├ type BudgetActionToAdd
│    │     │ ├      documentation: The budget action to add.
│    │     │ │      name: BudgetActionToAdd
│    │     │ └ properties
│    │     │    ├ Type: string<STOP_SCHEDULING_AND_COMPLETE_TASKS|STOP_SCHEDULING_AND_CANCEL_TASKS> (required)
│    │     │    ├ ThresholdPercentage: number (required)
│    │     │    └ Description: string
│    │     ├ type BudgetSchedule
│    │     │ ├      documentation: The start and end time of the budget.
│    │     │ │      name: BudgetSchedule
│    │     │ └ properties
│    │     │    └ Fixed: FixedBudgetSchedule (required)
│    │     ├ type FixedBudgetSchedule
│    │     │ ├      documentation: The details of a fixed budget schedule.
│    │     │ │      name: FixedBudgetSchedule
│    │     │ └ properties
│    │     │    ├ StartTime: string (required)
│    │     │    └ EndTime: string (required)
│    │     └ type UsageTrackingResource
│    │       ├      documentation: The usage details of the allotted budget.
│    │       │      name: UsageTrackingResource
│    │       └ properties
│    │          └ QueueId: string (required)
│    └[+]  resource AWS::Deadline::Worker
│       ├      name: Worker
│       │      cloudFormationType: AWS::Deadline::Worker
│       │      documentation: Definition of AWS::Deadline::Worker Resource Type
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ FarmId: string (required, immutable)
│       │  ├ FleetId: string (required, immutable)
│       │  ├ HostProperties: HostPropertiesRequest (immutable)
│       │  └ Tags: Array<TagsItems>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ WorkerId: string
│       │  ├ Status: string<CREATED|STARTED|STOPPING|STOPPED|NOT_RESPONDING|NOT_COMPATIBLE|RUNNING|IDLE>
│       │  ├ CreatedAt: string
│       │  └ CreatedBy: string
│       └ types
│          ├ type HostPropertiesRequest
│          │ ├      documentation: The host property details.
│          │ │      name: HostPropertiesRequest
│          │ └ properties
│          │    ├ HostName: string
│          │    └ IpAddresses: IpAddresses
│          ├ type IpAddresses
│          │ ├      documentation: The IP addresses for a host.
│          │ │      name: IpAddresses
│          │ └ properties
│          │    ├ IpV4Addresses: Array<string>
│          │    └ IpV6Addresses: Array<string>
│          └ type TagsItems
│            ├      name: TagsItems
│            └ properties
│               ├ Key: string (required)
│               └ Value: string (required)
├[~] service aws-devicefarm
│ └ resources
│    └[+]  resource AWS::DeviceFarm::Upload
│       ├      name: Upload
│       │      cloudFormationType: AWS::DeviceFarm::Upload
│       │      documentation: Represents an app or test scripts upload in AWS Device Farm.
│       │      arnTemplate: arn:${Partition}:devicefarm:${Region}:${Account}:upload:${ResourceId}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ ProjectArn: string (required, immutable)
│       │  ├ Name: string (required, immutable)
│       │  ├ Type: string<ANDROID_APP|IOS_APP|WEB_APP|EXTERNAL_DATA|APPIUM_JAVA_JUNIT_TEST_PACKAGE|APPIUM_JAVA_TESTNG_TEST_PACKAGE|APPIUM_PYTHON_TEST_PACKAGE|APPIUM_NODE_TEST_PACKAGE|APPIUM_RUBY_TEST_PACKAGE|APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE|APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE|APPIUM_WEB_PYTHON_TEST_PACKAGE|APPIUM_WEB_NODE_TEST_PACKAGE|APPIUM_WEB_RUBY_TEST_PACKAGE|CALABASH_TEST_PACKAGE|INSTRUMENTATION_TEST_PACKAGE|UIAUTOMATION_TEST_PACKAGE|UIAUTOMATOR_TEST_PACKAGE|XCTEST_TEST_PACKAGE|XCTEST_UI_TEST_PACKAGE|APPIUM_JAVA_JUNIT_TEST_SPEC|APPIUM_JAVA_TESTNG_TEST_SPEC|APPIUM_PYTHON_TEST_SPEC|APPIUM_NODE_TEST_SPEC|APPIUM_RUBY_TEST_SPEC|APPIUM_WEB_JAVA_JUNIT_TEST_SPEC|APPIUM_WEB_JAVA_TESTNG_TEST_SPEC|APPIUM_WEB_PYTHON_TEST_SPEC|APPIUM_WEB_NODE_TEST_SPEC|APPIUM_WEB_RUBY_TEST_SPEC|INSTRUMENTATION_TEST_SPEC|XCTEST_UI_TEST_SPEC> (required, immutable)
│       │  └ ContentType: string (immutable)
│       └ attributes
│          ├ Arn: string
│          ├ Status: string<INITIALIZED|PROCESSING|SUCCEEDED|FAILED>
│          ├ Category: string<CURATED|PRIVATE>
│          └ Created: string
├[~] service aws-devopsagent
│ └ resources
│    ├[+]  resource AWS::DevOpsAgent::Asset
│    │  ├      name: Asset
│    │  │      cloudFormationType: AWS::DevOpsAgent::Asset
│    │  │      documentation: Resource Type definition for AWS::DevOpsAgent::Asset. An asset attached to an existing AWS DevOps Agent Space. Customer-creatable types include skill, agents_md, and attachment; call ListAssetTypes for the current authoritative set.
│    │  │      primaryIdentifier: ["AgentSpaceId","AssetId"]
│    │  ├ properties
│    │  │  ├ AgentSpaceId: string (required, immutable)
│    │  │  ├ AssetType: string (required, immutable)
│    │  │  ├ Metadata: json
│    │  │  ├ Files: Array<AssetFile>
│    │  │  └ Zip: string
│    │  ├ attributes
│    │  │  ├ AssetId: string
│    │  │  ├ Version: integer
│    │  │  ├ CreatedAt: string
│    │  │  ├ UpdatedAt: string
│    │  │  └ Arn: string
│    │  └ types
│    │     └ type AssetFile
│    │       ├      documentation: A single file inside an Asset's bundle. Path is the diff key on update; Content is write-only and not repopulated by Read.
│    │       │      name: AssetFile
│    │       └ properties
│    │          ├ Path: string (required)
│    │          ├ ContentText: string
│    │          ├ ContentBytes: string
│    │          └ Metadata: json
│    ├[~]  resource AWS::DevOpsAgent::Service
│    │  └ properties
│    │     ├[+] ExchangeUrlPrivateConnectionName: string (immutable)
│    │     ├[+] PrivateConnectionName: string (immutable)
│    │     └[+] TargetUrlPrivateConnectionName: string (immutable)
│    └[+]  resource AWS::DevOpsAgent::Trigger
│       ├      name: Trigger
│       │      cloudFormationType: AWS::DevOpsAgent::Trigger
│       │      documentation: Resource Type definition for AWS::DevOpsAgent::Trigger. A trigger defines an automated action that fires on a schedule within an Agent Space.
│       │      primaryIdentifier: ["AgentSpaceId","TriggerId"]
│       ├ properties
│       │  ├ AgentSpaceId: string (required, immutable)
│       │  ├ Type: string<TIME_BASED> (required, immutable)
│       │  ├ Condition: Condition (required, immutable)
│       │  ├ Action: json (required, immutable)
│       │  └ Status: string<Active|Inactive> (default="Active")
│       ├ attributes
│       │  ├ TriggerId: string
│       │  ├ CreatedAt: string
│       │  ├ UpdatedAt: string
│       │  └ Arn: string
│       └ types
│          ├ type Condition
│          │ ├      documentation: The condition that causes the trigger to fire.
│          │ │      name: Condition
│          │ └ properties
│          │    └ Schedule: Schedule (required)
│          └ type Schedule
│            ├      documentation: Schedule configuration for a time-based trigger.
│            │      name: Schedule
│            └ properties
│               └ Expression: string (required)
├[~] service aws-directconnect
│ └ resources
│    ├[~]  resource AWS::DirectConnect::PrivateVirtualInterface
│    │  └ properties
│    │     └[+] RateLimit: string
│    ├[~]  resource AWS::DirectConnect::PublicVirtualInterface
│    │  └ properties
│    │     └[+] RateLimit: string
│    └[~]  resource AWS::DirectConnect::TransitVirtualInterface
│       └ properties
│          └[+] RateLimit: string
├[~] service aws-dms
│ └ resources
│    ├[~]  resource AWS::DMS::Endpoint
│    │  ├      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["EndpointArn"]
│    │  ├ attributes
│    │  │  ├[+] EndpointArn: string
│    │  │  └[-] Id: string
│    │  └ types
│    │     ├[~] type ElasticsearchSettings
│    │     │ └ properties
│    │     │    └ EndpointUri: - string
│    │     │                   + string (immutable)
│    │     └[~] type MongoDbSettings
│    │       └ properties
│    │          └ AuthType: - string
│    │                      + string (immutable)
│    ├[~]  resource AWS::DMS::EventSubscription
│    │  ├      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["SubscriptionName"]
│    │  └ attributes
│    │     └[-] Id: string
│    └[~]  resource AWS::DMS::ReplicationSubnetGroup
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["ReplicationSubnetGroupIdentifier"]
│       └ attributes
│          └[-] Id: string
├[~] service aws-docdb
│ └ resources
│    ├[~]  resource AWS::DocDB::DBClusterParameterGroup
│    │  ├      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["Name"]
│    │  └ attributes
│    │     └[-] Id: string
│    └[~]  resource AWS::DocDB::DBSubnetGroup
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["DBSubnetGroupName"]
│       └ attributes
│          └[-] Id: string
├[+] service aws-drs
│ ├      capitalized: DRS
│ │      cloudFormationNamespace: AWS::DRS
│ │      name: aws-drs
│ │      shortName: drs
│ └ resources
│    └ resource AWS::DRS::SourceNetwork
│      ├      name: SourceNetwork
│      │      cloudFormationType: AWS::DRS::SourceNetwork
│      │      documentation: A Source Network resource represents a VPC that is protected by AWS Elastic Disaster Recovery.
│      │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│      │      arnTemplate: arn:${Partition}:drs:${Region}:${Account}:source-network/${SourceNetworkID}
│      │      primaryIdentifier: ["Arn"]
│      ├ properties
│      │  ├ VpcID: string (required, immutable)
│      │  ├ OriginAccountID: string (required, immutable)
│      │  ├ OriginRegion: string (required, immutable)
│      │  └ Tags: Array<tag>
│      └ attributes
│         ├ Arn: string
│         └ SourceNetworkID: string
├[~] service aws-dynamodb
│ └ resources
│    ├[+]  resource AWS::DynamoDB::Backup
│    │  ├      name: Backup
│    │  │      cloudFormationType: AWS::DynamoDB::Backup
│    │  │      documentation: Creates an on-demand backup of a DynamoDB table.
│    │  │      primaryIdentifier: ["BackupArn"]
│    │  ├ properties
│    │  │  ├ TableName: string (required, immutable)
│    │  │  └ BackupName: string (required, immutable)
│    │  └ attributes
│    │     ├ BackupArn: string
│    │     ├ BackupId: string
│    │     ├ BackupStatus: string<CREATING|DELETED|AVAILABLE>
│    │     ├ BackupType: string<USER|SYSTEM|AWS_BACKUP>
│    │     ├ BackupCreationDateTime: string
│    │     └ BackupSizeBytes: integer
│    ├[-]  resource AWS::DynamoDB::Export
│    │  ├      name: Export
│    │  │      cloudFormationType: AWS::DynamoDB::Export
│    │  │      documentation: Represents a completed or in-progress DynamoDB table export to S3.
│    │  │      primaryIdentifier: ["ExportArn"]
│    │  ├ properties
│    │  │  ├ TableArn: string (required, immutable)
│    │  │  ├ S3Bucket: string (required, immutable)
│    │  │  ├ S3BucketOwner: string (immutable)
│    │  │  ├ S3Prefix: string (immutable)
│    │  │  ├ S3SseAlgorithm: string<AES256|KMS> (immutable)
│    │  │  ├ ExportFormat: string<DYNAMODB_JSON|ION> (immutable)
│    │  │  └ ExportType: string<FULL_EXPORT|INCREMENTAL_EXPORT> (immutable)
│    │  └ attributes
│    │     ├ ExportArn: string
│    │     ├ TableName: string
│    │     ├ ExportId: string
│    │     ├ ExportStatus: string<IN_PROGRESS|COMPLETED|FAILED>
│    │     ├ TableId: string
│    │     ├ ExportTime: string
│    │     ├ StartTime: string
│    │     ├ EndTime: string
│    │     ├ ExportManifest: string
│    │     ├ BilledSizeBytes: integer
│    │     └ ItemCount: integer
│    ├[~]  resource AWS::DynamoDB::GlobalTable
│    │  └ types
│    │     └[~] type ReplicaStreamSpecification
│    │       └ properties
│    │          └[+] Tags: Array<tag>
│    └[~]  resource AWS::DynamoDB::Table
│       └ types
│          └[~] type StreamSpecification
│            └ properties
│               └[+] Tags: Array<tag>
├[~] service aws-ec2
│ └ resources
│    ├[~]  resource AWS::EC2::EC2Fleet
│    │  └ types
│    │     └[~] type EbsBlockDevice
│    │       └ properties
│    │          └ VolumeType: - string<gp2|gp3|io1|io2|sc1|st1|standard>
│    │                        + string
│    ├[~]  resource AWS::EC2::SpotFleet
│    │  └ types
│    │     └[~] type EbsBlockDevice
│    │       └ properties
│    │          └ VolumeType: - string<gp2|gp3|io1|io2|sc1|st1|standard> (immutable)
│    │                        + string (immutable)
│    ├[+]  resource AWS::EC2::TransitGatewayPolicyTableEntry
│    │  ├      name: TransitGatewayPolicyTableEntry
│    │  │      cloudFormationType: AWS::EC2::TransitGatewayPolicyTableEntry
│    │  │      documentation: AWS::EC2::TransitGatewayPolicyTableEntry Resource Definition
│    │  │      primaryIdentifier: ["TransitGatewayPolicyTableId","PolicyRuleNumber"]
│    │  ├ properties
│    │  │  ├ TransitGatewayPolicyTableId: string (required, immutable)
│    │  │  ├ PolicyRuleNumber: string (required, immutable)
│    │  │  ├ PolicyRule: TransitGatewayPolicyRule (required)
│    │  │  └ TargetRouteTableId: string (required)
│    │  ├ attributes
│    │  │  └ State: string
│    │  └ types
│    │     └ type TransitGatewayPolicyRule
│    │       ├      name: TransitGatewayPolicyRule
│    │       └ properties
│    │          ├ SourceCidrBlock: string
│    │          ├ DestinationCidrBlock: string
│    │          ├ SourcePortRange: string
│    │          ├ DestinationPortRange: string
│    │          └ Protocol: string
│    ├[~]  resource AWS::EC2::VPC
│    │  ├ properties
│    │  │  └ VpcEncryptionControl: (documentation changed)
│    │  ├ attributes
│    │  │  ├ VpcEncryptionControl.ResourceExclusions: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.EgressOnlyInternetGateway: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.EgressOnlyInternetGateway.State: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.EgressOnlyInternetGateway.StateMessage: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.ElasticFileSystem: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.ElasticFileSystem.State: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.ElasticFileSystem.StateMessage: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.InternetGateway: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.InternetGateway.State: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.InternetGateway.StateMessage: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.Lambda: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.Lambda.State: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.Lambda.StateMessage: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.NatGateway: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.NatGateway.State: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.NatGateway.StateMessage: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.VirtualPrivateGateway: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.VirtualPrivateGateway.State: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.VirtualPrivateGateway.StateMessage: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.VpcLattice: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.VpcLattice.State: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.VpcLattice.StateMessage: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.VpcPeering: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.VpcPeering.State: (documentation changed)
│    │  │  ├ VpcEncryptionControl.ResourceExclusions.VpcPeering.StateMessage: (documentation changed)
│    │  │  ├ VpcEncryptionControl.State: (documentation changed)
│    │  │  ├ VpcEncryptionControl.StateMessage: (documentation changed)
│    │  │  ├ VpcEncryptionControl.VpcEncryptionControlId: (documentation changed)
│    │  │  └ VpcEncryptionControl.VpcId: (documentation changed)
│    │  └ types
│    │     ├[~] type VpcEncryptionControl
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: Describes the configuration and state of VPC encryption controls.
│    │     │ │       For more information, see [Enforce VPC encryption in transit](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html) in the *Amazon VPC User Guide*.
│    │     │ └ properties
│    │     │    ├ EgressOnlyInternetGatewayExclusion: (documentation changed)
│    │     │    ├ ElasticFileSystemExclusion: (documentation changed)
│    │     │    ├ InternetGatewayExclusion: (documentation changed)
│    │     │    ├ LambdaExclusion: (documentation changed)
│    │     │    ├ Mode: (documentation changed)
│    │     │    ├ NatGatewayExclusion: (documentation changed)
│    │     │    ├ ResourceExclusions: (documentation changed)
│    │     │    ├ State: (documentation changed)
│    │     │    ├ StateMessage: (documentation changed)
│    │     │    ├ VirtualPrivateGatewayExclusion: (documentation changed)
│    │     │    ├ VpcEncryptionControlId: (documentation changed)
│    │     │    ├ VpcId: (documentation changed)
│    │     │    ├ VpcLatticeExclusion: (documentation changed)
│    │     │    └ VpcPeeringExclusion: (documentation changed)
│    │     ├[~] type VpcEncryptionControlExclusion
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: Describes an exclusion configuration for VPC Encryption Control.
│    │     │ │       For more information, see [Enforce VPC encryption in transit](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html) in the *Amazon VPC User Guide*.
│    │     │ └ properties
│    │     │    ├ State: (documentation changed)
│    │     │    └ StateMessage: (documentation changed)
│    │     └[~] type VpcEncryptionControlExclusions
│    │       ├      - documentation: undefined
│    │       │      + documentation: Describes the exclusion configurations for various resource types in VPC Encryption Control.
│    │       │       For more information, see [Enforce VPC encryption in transit](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html) in the *Amazon VPC User Guide*.
│    │       └ properties
│    │          ├ EgressOnlyInternetGateway: (documentation changed)
│    │          ├ ElasticFileSystem: (documentation changed)
│    │          ├ InternetGateway: (documentation changed)
│    │          ├ Lambda: (documentation changed)
│    │          ├ NatGateway: (documentation changed)
│    │          ├ VirtualPrivateGateway: (documentation changed)
│    │          ├ VpcLattice: (documentation changed)
│    │          └ VpcPeering: (documentation changed)
│    └[~]  resource AWS::EC2::VPCEndpointService
│       ├ properties
│       │  ├[+] PrivateDnsName: string
│       │  └[+] PrivateDnsNameConfiguration: PrivateDnsNameConfiguration
│       ├ attributes
│       │  ├[+] PrivateDnsNameConfiguration.Name: string
│       │  ├[+] PrivateDnsNameConfiguration.State: string
│       │  ├[+] PrivateDnsNameConfiguration.Type: string
│       │  └[+] PrivateDnsNameConfiguration.Value: string
│       └ types
│          └[+]  type PrivateDnsNameConfiguration
│             ├      name: PrivateDnsNameConfiguration
│             └ properties
│                ├ Name: string
│                ├ State: string
│                ├ Type: string
│                └ Value: string
├[~] service aws-eks
│ └ resources
│    ├[~]  resource AWS::EKS::Capability
│    │  └ types
│    │     └[~] type CapabilityConfiguration
│    │       └ properties
│    │          └[+] Ack: json
│    ├[+]  resource AWS::EKS::CertificateAuthority
│    │  ├      name: CertificateAuthority
│    │  │      cloudFormationType: AWS::EKS::CertificateAuthority
│    │  │      documentation: Resource Type definition for EKS CertificateAuthority.
│    │  │      primaryIdentifier: ["ClusterName","Id"]
│    │  ├ properties
│    │  │  └ ClusterName: string (required, immutable)
│    │  ├ attributes
│    │  │  ├ Id: string
│    │  │  ├ CreatedAt: string
│    │  │  ├ CreatedBy: string
│    │  │  ├ ActivatedAt: string
│    │  │  ├ ActivatedBy: string
│    │  │  ├ SigningStatus: string
│    │  │  ├ DistributionStatus: string
│    │  │  ├ Validity: Validity
│    │  │  ├ Validity.NotBefore: string
│    │  │  ├ Validity.NotAfter: string
│    │  │  ├ ScheduledEvents: ScheduledEvents
│    │  │  ├ ScheduledEvents.FirstAutoActivation: string
│    │  │  ├ ScheduledEvents.FinalAutoActivation: string
│    │  │  ├ RollbackAvailable: boolean
│    │  │  └ Data: string
│    │  └ types
│    │     ├ type ScheduledEvents
│    │     │ ├      documentation: The scheduled auto-activation events for the certificate authority, computed from its validity window.
│    │     │ │      name: ScheduledEvents
│    │     │ └ properties
│    │     │    ├ FirstAutoActivation: string
│    │     │    └ FinalAutoActivation: string
│    │     └ type Validity
│    │       ├      documentation: The validity period of the certificate authority.
│    │       │      name: Validity
│    │       └ properties
│    │          ├ NotBefore: string
│    │          └ NotAfter: string
│    └[~]  resource AWS::EKS::Cluster
│       ├ properties
│       │  ├[+] ActiveCertificateAuthorityId: string
│       │  ├[+] CertificateAuthority: CertificateAuthority
│       │  ├[+] KubeApiServerConfig: KubeApiServerConfig
│       │  ├[+] KubeControllerManagerConfig: KubeControllerManagerConfig
│       │  └[+] KubeSchedulerConfig: KubeSchedulerConfig
│       ├ attributes
│       │  ├[+] CertificateAuthority.Active.ActivatedBy: string
│       │  ├[+] CertificateAuthority.Active.Id: string
│       │  └[+] CertificateAuthority.Data: string
│       └ types
│          ├[+]  type ActiveCertificateAuthority
│          │  ├      documentation: Identifies the certificate authority currently signing certificates for the cluster.
│          │  │      name: ActiveCertificateAuthority
│          │  └ properties
│          │     ├ Id: string
│          │     └ ActivatedBy: string
│          ├[+]  type CertificateAuthority
│          │  ├      documentation: The certificate authority information for the cluster, including the trust bundle and the currently active signing certificate authority.
│          │  │      name: CertificateAuthority
│          │  └ properties
│          │     ├ Data: string
│          │     └ Active: ActiveCertificateAuthority
│          ├[+]  type HorizontalPodAutoscalerControllerConfig
│          │  ├      documentation: The horizontal pod autoscaler controller configuration.
│          │  │      name: HorizontalPodAutoscalerControllerConfig
│          │  └ properties
│          │     └ HorizontalPodAutoscalerSyncPeriod: string
│          ├[+]  type KubeApiServerConfig
│          │  ├      documentation: The configuration for the Kubernetes API server on an Amazon EKS cluster.
│          │  │      name: KubeApiServerConfig
│          │  └ properties
│          │     ├ EventTtl: string
│          │     └ ServiceNodePortRange: ServiceNodePortRange
│          ├[+]  type KubeControllerManagerConfig
│          │  ├      documentation: The configuration for the Kubernetes controller manager on an Amazon EKS cluster.
│          │  │      name: KubeControllerManagerConfig
│          │  └ properties
│          │     └ HorizontalPodAutoscalerControllerConfig: HorizontalPodAutoscalerControllerConfig
│          ├[+]  type KubeSchedulerConfig
│          │  ├      documentation: The configuration for the Kubernetes scheduler on an Amazon EKS cluster.
│          │  │      name: KubeSchedulerConfig
│          │  └ properties
│          │     └ NodeResourcesFit: NodeResourcesFitConfig
│          ├[+]  type NodeResourcesFitConfig
│          │  ├      documentation: The NodeResourcesFit plugin configuration for the Kubernetes scheduler.
│          │  │      name: NodeResourcesFitConfig
│          │  └ properties
│          │     └ ScoringStrategy: ScoringStrategy
│          ├[+]  type ResourceWeight
│          │  ├      documentation: A resource weight entry for the scheduler scoring strategy.
│          │  │      name: ResourceWeight
│          │  └ properties
│          │     ├ Name: string
│          │     └ Weight: integer
│          ├[+]  type ScoringStrategy
│          │  ├      documentation: The scoring strategy configuration for the NodeResourcesFit scheduler plugin.
│          │  │      name: ScoringStrategy
│          │  └ properties
│          │     ├ Type: string
│          │     └ Resources: Array<ResourceWeight>
│          └[+]  type ServiceNodePortRange
│             ├      documentation: The port range for Kubernetes NodePort services.
│             │      name: ServiceNodePortRange
│             └ properties
│                ├ MinPort: integer
│                └ MaxPort: integer
├[~] service aws-elasticache
│ └ resources
│    ├[-]  resource AWS::ElastiCache::ReservedCacheNode
│    │  ├      name: ReservedCacheNode
│    │  │      cloudFormationType: AWS::ElastiCache::ReservedCacheNode
│    │  │      documentation: Represents an Amazon ElastiCache Reserved Cache Node. Reserved Cache Nodes provide a discounted hourly rate compared to on-demand cache node pricing.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["ReservationARN"]
│    │  ├ attributes
│    │  │  ├ ReservationARN: string
│    │  │  ├ ReservedCacheNodeId: string
│    │  │  ├ ReservedCacheNodesOfferingId: string
│    │  │  ├ CacheNodeType: string
│    │  │  ├ StartTime: string
│    │  │  ├ Duration: integer
│    │  │  ├ FixedPrice: number
│    │  │  ├ UsagePrice: number
│    │  │  ├ CacheNodeCount: integer
│    │  │  ├ ProductDescription: string
│    │  │  ├ OfferingType: string
│    │  │  ├ State: string
│    │  │  ├ RecurringCharges: Array<RecurringCharge>
│    │  │  └ Tags: Array<tag>
│    │  └ types
│    │     └ type RecurringCharge
│    │       ├      name: RecurringCharge
│    │       └ properties
│    │          ├ RecurringChargeAmount: number
│    │          └ RecurringChargeFrequency: string
│    └[+]  resource AWS::ElastiCache::ServerlessCacheSnapshot
│       ├      name: ServerlessCacheSnapshot
│       │      cloudFormationType: AWS::ElastiCache::ServerlessCacheSnapshot
│       │      documentation: Resource Type definition for AWS::ElastiCache::ServerlessCacheSnapshot. A serverless cache snapshot is a point-in-time backup of an ElastiCache serverless cache. Available for Valkey, Redis OSS and Serverless Memcached only.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:elasticache:${Region}:${Account}:serverlesscachesnapshot:${ServerlessCacheSnapshotName}
│       │      primaryIdentifier: ["ARN"]
│       ├ properties
│       │  ├ ServerlessCacheSnapshotName: string (required, immutable)
│       │  ├ ServerlessCacheName: string (required, immutable)
│       │  ├ KmsKeyId: string (immutable)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ ARN: string
│       │  ├ SnapshotType: string
│       │  ├ Status: string
│       │  ├ CreateTime: string
│       │  ├ BytesUsedForCache: string
│       │  └ ServerlessCacheConfiguration: ServerlessCacheConfiguration
│       └ types
│          └ type ServerlessCacheConfiguration
│            ├      name: ServerlessCacheConfiguration
│            └ properties
│               ├ ServerlessCacheName: string
│               ├ Engine: string
│               └ MajorEngineVersion: string
├[~] service aws-elementalinference
│ └ resources
│    └[~]  resource AWS::ElementalInference::Feed
│       └ types
│          ├[~] type ClippingConfig
│          │ └ properties
│          │    └[+] DataSourceConfiguration: DataSourceConfiguration
│          └[+]  type DataSourceConfiguration
│             ├      name: DataSourceConfiguration
│             └ properties
│                └ FixtureId: string (required)
├[~] service aws-emr
│ └ resources
│    └[-]  resource AWS::EMR::NotebookExecution
│       ├      name: NotebookExecution
│       │      cloudFormationType: AWS::EMR::NotebookExecution
│       │      documentation: An Amazon EMR Notebook execution. A notebook execution is a specific instance that an Amazon EMR Notebook is run using the StartNotebookExecution action.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:elasticmapreduce:${Region}:${Account}:notebook-execution/${NotebookExecutionId}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ NotebookExecutionName: string (immutable)
│       │  ├ NotebookParams: string (immutable)
│       │  ├ ExecutionEngine: ExecutionEngineConfig (immutable)
│       │  ├ NotebookS3Location: NotebookS3Location (immutable)
│       │  ├ OutputNotebookS3Location: OutputNotebookS3Location (immutable)
│       │  ├ OutputNotebookFormat: string<HTML> (immutable)
│       │  ├ EnvironmentVariables: Map<string, string> (immutable)
│       │  └ Tags: Array<tag> (immutable)
│       ├ attributes
│       │  ├ NotebookExecutionId: string
│       │  ├ Arn: string
│       │  ├ Status: string<START_PENDING|STARTING|RUNNING|FINISHING|FINISHED|FAILING|FAILED|STOP_PENDING|STOPPING|STOPPED>
│       │  └ StartTime: string
│       └ types
│          ├ type ExecutionEngineConfig
│          │ ├      documentation: Specifies the execution engine (cluster) to run the notebook and perform the notebook execution.
│          │ │      name: ExecutionEngineConfig
│          │ └ properties
│          │    ├ Id: string (required)
│          │    └ Type: string<EMR>
│          ├ type NotebookS3Location
│          │ ├      documentation: The Amazon S3 location that stores the notebook execution input.
│          │ │      name: NotebookS3Location
│          │ └ properties
│          │    ├ Bucket: string
│          │    └ Key: string
│          └ type OutputNotebookS3Location
│            ├      documentation: The Amazon S3 location for the notebook execution output.
│            │      name: OutputNotebookS3Location
│            └ properties
│               ├ Bucket: string
│               └ Key: string
├[~] service aws-events
│ └ resources
│    └[-]  resource AWS::Events::Replay
│       ├      name: Replay
│       │      cloudFormationType: AWS::Events::Replay
│       │      documentation: An EventBridge Replay replays archived events from an archive to an event bus.
│       │      arnTemplate: arn:${Partition}:events:${Region}:${Account}:replay/${ReplayName}
│       │      primaryIdentifier: ["ReplayArn"]
│       ├ properties
│       │  ├ ReplayName: string (required, immutable)
│       │  ├ EventSourceArn: string (required, immutable)
│       │  ├ EventStartTime: string (required, immutable)
│       │  ├ EventEndTime: string (required, immutable)
│       │  └ Destination: Destination (required, immutable)
│       ├ attributes
│       │  ├ ReplayArn: string
│       │  ├ State: string<STARTING|RUNNING|CANCELLING|COMPLETED|CANCELLED|FAILED>
│       │  └ ReplayStartTime: string
│       └ types
│          └ type Destination
│            ├      documentation: A ReplayDestination object that includes details about the destination for the replay.
│            │      name: Destination
│            └ properties
│               └ Arn: string (required)
├[~] service aws-evs
│ └ resources
│    └[~]  resource AWS::EVS::Environment
│       └ types
│          └[~] type HostInfoForCreate
│            └ properties
│               └ InstanceType: - string<i4i.metal|i7i.metal-24xl> (required)
│                               + string<i4i.metal|i7i.metal-24xl|i7i.metal-48xl> (required)
├[~] service aws-fis
│ └ resources
│    └[-]  resource AWS::FIS::SafetyLever
│       ├      name: SafetyLever
│       │      cloudFormationType: AWS::FIS::SafetyLever
│       │      documentation: Represents the AWS FIS account-level safety lever. This is a singleton resource (one per account per region) that controls whether FIS experiments are allowed to run.
│       │      arnTemplate: arn:${Partition}:fis:${Region}:${Account}:safety-lever/${Id}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  └ Id: string (immutable)
│       └ attributes
│          ├ Arn: string
│          ├ Status: string<disengaged|engaged|engaging>
│          └ Reason: string
├[~] service aws-fsx
│ └ resources
│    └[~]  resource AWS::FSx::FileSystem
│       └ types
│          ├[+]  type LogConfiguration
│          │  ├      name: LogConfiguration
│          │  └ properties
│          │     ├ Destination: string
│          │     └ Level: string (required)
│          └[~] type LustreConfiguration
│            └ properties
│               └[+] LogConfiguration: LogConfiguration
├[~] service aws-gamelift
│ └ resources
│    └[~]  resource AWS::GameLift::ContainerFleet
│       ├ attributes
│       │  └ Status: - string<PENDING|CREATING|CREATED|ACTIVATING|ACTIVE|UPDATING|DELETING>
│       │            + string<PENDING|CREATING|CREATED|ACTIVATING|ACTIVE|UPDATING|DELETING|EXPIRED>
│       └ types
│          └[~] type ScalingPolicy
│            └ properties
│               ├ MetricName: - string<ActivatingGameSessions|ActiveGameSessions|ActiveInstances|AvailableGameSessions|AvailablePlayerSessions|CurrentPlayerSessions|IdleInstances|PercentAvailableGameSessions|PercentIdleInstances|QueueDepth|WaitTime|ConcurrentActivatableGameSessions> (required)
│               │             + string<ActivatingGameSessions|ActiveGameSessions|ActiveInstances|AvailableGameSessions|AvailablePlayerSessions|CurrentPlayerSessions|IdleInstances|PercentAvailableGameSessions|PercentIdleInstances|QueueDepth|WaitTime|ConcurrentActivatableGameSessions>
│               └ PolicyType: - string<RuleBased|TargetBased>
│                             + string<RuleBased|TargetBased|ManagedScaling>
├[~] service aws-globalaccelerator
│ └ resources
│    └[~]  resource AWS::GlobalAccelerator::Accelerator
│       └      - arnTemplate: arn:${Partition}:globalaccelerator::${Account}:accelerator/${ResourceId}
│              + arnTemplate: arn:${Partition}:globalaccelerator::${Account}:accelerator/${AcceleratorId}
├[~] service aws-glue
│ └ resources
│    ├[~]  resource AWS::Glue::Classifier
│    │  ├      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["Name"]
│    │  └ attributes
│    │     ├[-] Id: string
│    │     └[+] Name: string
│    ├[~]  resource AWS::Glue::CustomEntityType
│    │  ├      - tagInformation: {"tagPropertyName":"Tags","variant":"map"}
│    │  │      + tagInformation: undefined
│    │  │      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["Name"]
│    │  ├ properties
│    │  │  └ Name: - string
│    │  │          + string (immutable)
│    │  └ attributes
│    │     └[-] Id: string
│    ├[~]  resource AWS::Glue::DataQualityRuleset
│    │  ├      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["Name"]
│    │  ├ properties
│    │  │  ├ Name: - string
│    │  │  │       + string (required, immutable)
│    │  │  └ Tags: - json
│    │  │          + Map<string, string> ⇐ json
│    │  ├ attributes
│    │  │  └[-] Id: string
│    │  └ types
│    │     └[~] type DataQualityTargetTable
│    │       └ properties
│    │          ├ DatabaseName: - string
│    │          │               + string (required)
│    │          └ TableName: - string
│    │                       + string (required)
│    ├[~]  resource AWS::Glue::MLTransform
│    │  ├      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["TransformId"]
│    │  ├ properties
│    │  │  ├ Tags: - json
│    │  │  │       + Map<string, string> ⇐ json
│    │  │  └ TransformEncryption: - TransformEncryption
│    │  │                         + TransformEncryption (immutable)
│    │  └ attributes
│    │     ├[-] Id: string
│    │     └[+] TransformId: string
│    ├[~]  resource AWS::Glue::SecurityConfiguration
│    │  ├      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["Name"]
│    │  └ attributes
│    │     └[-] Id: string
│    ├[+]  resource AWS::Glue::Session
│    │  ├      name: Session
│    │  │      cloudFormationType: AWS::Glue::Session
│    │  │      documentation: Resource Type definition for AWS::Glue::Session. Sessions provide an on-demand, serverless Apache Spark runtime environment for building, testing, and running data preparation and analytics applications.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ Id: string (required, immutable)
│    │  │  ├ Description: string (immutable)
│    │  │  ├ Role: string (required, immutable)
│    │  │  ├ Command: SessionCommand (required, immutable)
│    │  │  ├ Timeout: integer (immutable)
│    │  │  ├ IdleTimeout: integer (immutable)
│    │  │  ├ DefaultArguments: Map<string, string> (immutable)
│    │  │  ├ Connections: ConnectionsList (immutable)
│    │  │  ├ MaxCapacity: number (immutable)
│    │  │  ├ NumberOfWorkers: integer (immutable)
│    │  │  ├ WorkerType: string<Standard|G.1X|G.2X|G.025X|G.4X|G.8X|Z.2X> (immutable)
│    │  │  ├ SecurityConfiguration: string (immutable)
│    │  │  ├ GlueVersion: string (immutable)
│    │  │  ├ Tags: Array<tag>
│    │  │  └ RequestOrigin: string (immutable)
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  ├ CreatedOn: string
│    │  │  ├ Status: string<PROVISIONING|READY|FAILED|TIMEOUT|STOPPING|STOPPED>
│    │  │  └ Progress: number
│    │  └ types
│    │     ├ type ConnectionsList
│    │     │ ├      documentation: Specifies the connections used by the session.
│    │     │ │      name: ConnectionsList
│    │     │ └ properties
│    │     │    └ Connections: Array<string>
│    │     └ type SessionCommand
│    │       ├      documentation: The SessionCommand that runs the job.
│    │       │      name: SessionCommand
│    │       └ properties
│    │          ├ Name: string
│    │          └ PythonVersion: string
│    ├[~]  resource AWS::Glue::TableOptimizer
│    │  ├      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["TableName","DatabaseName","Type","CatalogId"]
│    │  ├ attributes
│    │  │  └[-] Id: string
│    │  └ types
│    │     └[~] type IcebergCompactionConfiguration
│    │       └ properties
│    │          ├ DeleteFileThreshold: (documentation changed)
│    │          ├ MinInputFiles: (documentation changed)
│    │          └ Strategy: (documentation changed)
│    └[~]  resource AWS::Glue::Workflow
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["Name"]
│       └ attributes
│          └[-] Id: string
├[~] service aws-greengrassv2
│ └ resources
│    ├[-]  resource AWS::GreengrassV2::Component
│    │  ├      name: Component
│    │  │      cloudFormationType: AWS::GreengrassV2::Component
│    │  │      documentation: Represents an AWS IoT Greengrass V2 component, which is a software module deployed to Greengrass core devices.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ ComponentName: string (immutable)
│    │  │  └ Tags: Array<TagsItems> (immutable)
│    │  ├ attributes
│    │  │  └ Arn: string
│    │  └ types
│    │     └ type TagsItems
│    │       ├      name: TagsItems
│    │       └ properties
│    │          ├ Key: string (required)
│    │          └ Value: string (required)
│    └[-]  resource AWS::GreengrassV2::CoreDevice
│       ├      name: CoreDevice
│       │      cloudFormationType: AWS::GreengrassV2::CoreDevice
│       │      documentation: Represents a Greengrass core device, which is an IoT thing that runs the IoT Greengrass Core software.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:greengrass:${Region}:${Account}:coreDevices:${CoreDeviceThingName}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  └ CoreDeviceThingName: string (immutable)
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ CoreVersion: string
│       │  ├ Platform: string
│       │  ├ Architecture: string
│       │  ├ Runtime: string
│       │  ├ Status: string<HEALTHY|UNHEALTHY>
│       │  ├ LastStatusUpdateTimestamp: string
│       │  └ Tags: Array<TagsItems>
│       └ types
│          └ type TagsItems
│            ├      name: TagsItems
│            └ properties
│               ├ Key: string (required)
│               └ Value: string (required)
├[~] service aws-guardduty
│ └ resources
│    └[+]  resource AWS::GuardDuty::CustomDetectionRuleAssociation
│       ├      name: CustomDetectionRuleAssociation
│       │      cloudFormationType: AWS::GuardDuty::CustomDetectionRuleAssociation
│       │      documentation: Resource Type definition for AWS::GuardDuty::CustomDetectionRuleAssociation. Associates a GuardDuty custom detection rule with the caller's account, enabling the rule in either LIVE or DRY_RUN mode.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["RuleId","AssociationId"]
│       ├ properties
│       │  ├ RuleId: string (required, immutable)
│       │  ├ Mode: string<LIVE|DRY_RUN> (required)
│       │  └ Tags: Array<TagItem>
│       ├ attributes
│       │  ├ AssociationId: string
│       │  ├ Arn: string
│       │  ├ AccountId: string
│       │  ├ CreatedAt: string
│       │  └ UpdatedAt: string
│       └ types
│          └ type TagItem
│            ├      name: TagItem
│            └ properties
│               ├ Key: string (required)
│               └ Value: string (required)
├[~] service aws-identitystore
│ └ resources
│    └[-]  resource AWS::IdentityStore::AllGroupMemberships
│       ├      name: AllGroupMemberships
│       │      cloudFormationType: AWS::IdentityStore::AllGroupMemberships
│       │      documentation: Retrieves membership metadata and attributes for a group membership in an identity store.
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ IdentityStoreId: string (immutable)
│       │  ├ GroupId: string (immutable)
│       │  └ MemberId: MemberId (immutable)
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ MembershipId: string
│       │  ├ CreatedAt: string
│       │  ├ UpdatedAt: string
│       │  ├ CreatedBy: string
│       │  └ UpdatedBy: string
│       └ types
│          └ type MemberId
│            ├      documentation: An object containing the identifier of a group member.
│            │      name: MemberId
│            └ properties
│               └ UserId: string (required)
├[~] service aws-imagebuilder
│ ├ resources
│ │  ├[-]  resource AWS::ImageBuilder::AllImageBuildVersions
│ │  │  ├      name: AllImageBuildVersions
│ │  │  │      cloudFormationType: AWS::ImageBuilder::AllImageBuildVersions
│ │  │  │      documentation: Resource Type definition for AWS::ImageBuilder::AllImageBuildVersions. Returns the list of image build versions for a specified image version ARN.
│ │  │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│ │  │  │      primaryIdentifier: ["Arn"]
│ │  │  ├ attributes
│ │  │  │  ├ Arn: string
│ │  │  │  ├ Name: string
│ │  │  │  ├ Version: string
│ │  │  │  ├ BuildNumber: string
│ │  │  │  ├ Type: string<AMI|DOCKER>
│ │  │  │  ├ Platform: string<Windows|Linux|macOS>
│ │  │  │  ├ OsVersion: string
│ │  │  │  ├ State: State
│ │  │  │  ├ DateCreated: string
│ │  │  │  ├ BuildType: string<USER_INITIATED|SCHEDULED|IMPORT|IMPORT_ISO>
│ │  │  │  ├ EnhancedImageMetadataEnabled: boolean
│ │  │  │  ├ ImageTestsConfiguration: ImageTestsConfiguration
│ │  │  │  ├ ExecutionRole: string
│ │  │  │  ├ ImageVersionArn: string
│ │  │  │  └ Tags: Array<TagsItems>
│ │  │  └ types
│ │  │     ├ type ImageTestsConfiguration
│ │  │     │ ├      documentation: The image tests configuration.
│ │  │     │ │      name: ImageTestsConfiguration
│ │  │     │ └ properties
│ │  │     │    ├ ImageTestsEnabled: boolean
│ │  │     │    └ TimeoutMinutes: integer
│ │  │     ├ type State
│ │  │     │ ├      documentation: Image status and the reason for that status.
│ │  │     │ │      name: State
│ │  │     │ └ properties
│ │  │     │    └ Status: string<PENDING|CREATING|BUILDING|TESTING|DISTRIBUTING|INTEGRATING|AVAILABLE|CANCELLED|FAILED|DEPRECATED|DELETED|DISABLED>
│ │  │     └ type TagsItems
│ │  │       ├      name: TagsItems
│ │  │       └ properties
│ │  │          ├ Key: string (required)
│ │  │          └ Value: string (required)
│ │  ├[-]  resource AWS::ImageBuilder::AllWorkflowBuildVersions
│ │  │  ├      name: AllWorkflowBuildVersions
│ │  │  │      cloudFormationType: AWS::ImageBuilder::AllWorkflowBuildVersions
│ │  │  │      documentation: Returns the list of workflow build versions for a specified workflow version ARN.
│ │  │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│ │  │  │      primaryIdentifier: ["Arn"]
│ │  │  ├ attributes
│ │  │  │  ├ Arn: string
│ │  │  │  ├ Name: string
│ │  │  │  ├ Version: string
│ │  │  │  ├ BuildNumber: string
│ │  │  │  ├ WorkflowType: string<build|test|distribution>
│ │  │  │  ├ Description: string
│ │  │  │  ├ ChangeDescription: string
│ │  │  │  ├ Owner: string
│ │  │  │  ├ Data: string
│ │  │  │  ├ DateCreated: string
│ │  │  │  ├ Parameters: Array<ParametersItems>
│ │  │  │  ├ Tags: Array<TagsItems>
│ │  │  │  └ WorkflowVersionArn: string
│ │  │  └ types
│ │  │     ├ type ParametersItems
│ │  │     │ ├      name: ParametersItems
│ │  │     │ └ properties
│ │  │     │    ├ Name: string (required)
│ │  │     │    ├ Type: string (required)
│ │  │     │    ├ DefaultValue: Array<string>
│ │  │     │    └ Description: string
│ │  │     └ type TagsItems
│ │  │       ├      name: TagsItems
│ │  │       └ properties
│ │  │          ├ Key: string (required)
│ │  │          └ Value: string (required)
│ │  ├[~]  resource AWS::ImageBuilder::ContainerRecipe
│ │  │  └ types
│ │  │     └[~] type EbsInstanceBlockDeviceSpecification
│ │  │       └ properties
│ │  │          └ VolumeType: - string<standard|io1|io2|gp2|gp3|sc1|st1> (immutable)
│ │  │                        + string<standard|io1|io2|io2a|gp2|gp3|gp3a|sc1|st1> (immutable)
│ │  ├[~]  resource AWS::ImageBuilder::ImageRecipe
│ │  │  └ types
│ │  │     └[~] type EbsInstanceBlockDeviceSpecification
│ │  │       └ properties
│ │  │          └ VolumeType: - string<standard|io1|io2|gp2|gp3|sc1|st1> (immutable)
│ │  │                        + string<standard|io1|io2|io2a|gp2|gp3|gp3a|sc1|st1> (immutable)
│ │  ├[-]  resource AWS::ImageBuilder::WorkflowExecution
│ │  │  ├      name: WorkflowExecution
│ │  │  │      cloudFormationType: AWS::ImageBuilder::WorkflowExecution
│ │  │  │      documentation: Represents a runtime instance of an EC2 Image Builder workflow. Workflow executions are created automatically when an image build runs a workflow.
│ │  │  │      arnTemplate: arn:${Partition}:imagebuilder:${Region}:${Account}:workflow-execution/${WorkflowExecutionId}
│ │  │  │      primaryIdentifier: ["Arn"]
│ │  │  ├ properties
│ │  │  │  └ ImageBuildVersionArn: string (immutable)
│ │  │  ├ attributes
│ │  │  │  ├ Arn: string
│ │  │  │  ├ WorkflowExecutionId: string
│ │  │  │  ├ WorkflowBuildVersionArn: string
│ │  │  │  ├ Type: string<BUILD|TEST|DISTRIBUTION>
│ │  │  │  ├ Status: string<PENDING|SKIPPED|RUNNING|COMPLETED|FAILED|ROLLBACK_IN_PROGRESS|ROLLBACK_COMPLETED|CANCELLED>
│ │  │  │  ├ TotalStepCount: integer
│ │  │  │  ├ TotalStepsSucceeded: integer
│ │  │  │  ├ TotalStepsFailed: integer
│ │  │  │  ├ TotalStepsSkipped: integer
│ │  │  │  ├ StartTime: string
│ │  │  │  └ EndTime: string
│ │  │  └ events
│ │  │     └ event aws.imagebuilder@EC2ImageBuilderWorkflowStepWaiting
│ │  │       ├      description: Schema for event type EC2ImageBuilderWorkflowStepWaiting, published by AWS service aws.imagebuilder
│ │  │       │      source: aws.imagebuilder
│ │  │       │      detailType: EC2 Image Builder Workflow Step Waiting
│ │  │       │      rootProperty: EC2ImageBuilderWorkflowStepWaiting
│ │  │       │      resourcesFields: [
│ │  │       │        {
│ │  │       │          "type": "EC2ImageBuilderWorkflowStepWaiting",
│ │  │       │          "fieldName": "workflow-execution-id",
│ │  │       │          "resource": "WorkflowExecution"
│ │  │       │        }
│ │  │       │      ]
│ │  │       └ types
│ │  │          └ type EC2ImageBuilderWorkflowStepWaiting
│ │  │            └ properties
│ │  │               ├ workflow-execution-id: string (required)
│ │  │               ├ workflow-step-execution-id: string (required)
│ │  │               └ workflow-step-name: string (required)
│ │  └[-]  resource AWS::ImageBuilder::WorkflowStepExecution
│ │     ├      name: WorkflowStepExecution
│ │     │      cloudFormationType: AWS::ImageBuilder::WorkflowStepExecution
│ │     │      documentation: Represents a runtime instance of a workflow step in an EC2 Image Builder workflow execution. Workflow step executions are created automatically when an image build runs a workflow.
│ │     │      arnTemplate: arn:${Partition}:imagebuilder:${Region}:${Account}:workflow-step-execution/${WorkflowStepExecutionId}
│ │     │      primaryIdentifier: ["StepExecutionId"]
│ │     └ attributes
│ │        ├ StepExecutionId: string
│ │        ├ WorkflowExecutionId: string
│ │        ├ WorkflowBuildVersionArn: string
│ │        ├ ImageBuildVersionArn: string
│ │        ├ Name: string
│ │        ├ Action: string
│ │        ├ Status: string<PENDING|SKIPPED|RUNNING|COMPLETED|FAILED|CANCELLED>
│ │        ├ Inputs: string
│ │        ├ Outputs: string
│ │        ├ StartTime: string
│ │        ├ EndTime: string
│ │        ├ OnFailure: string
│ │        └ TimeoutSeconds: integer
│ └ events
│    └[~]  event aws.imagebuilder@EC2ImageBuilderWorkflowStepWaiting
│       └      - resourcesField: [
│                {
│                  "type": "EC2ImageBuilderWorkflowStepWaiting",
│                  "fieldName": "workflow-execution-id",
│                  "resource": "WorkflowExecution"
│                }
│              ]
├[~] service aws-inspectorv2
│ └ resources
│    ├[~]  resource AWS::InspectorV2::CodeSecurityIntegration
│    │  └ properties
│    │     └ Tags: - Map<string, string> (immutable)
│    │             + Map<string, string>
│    ├[~]  resource AWS::InspectorV2::CodeSecurityScanConfiguration
│    │  └ properties
│    │     └ Tags: - Map<string, string> (immutable)
│    │             + Map<string, string>
│    └[+]  resource AWS::InspectorV2::Connector
│       ├      name: Connector
│       │      cloudFormationType: AWS::InspectorV2::Connector
│       │      documentation: Creates and manages a multi-cloud connector for Amazon Inspector, enabling vulnerability scanning of Azure resources.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["ConnectorArn"]
│       ├ properties
│       │  ├ Name: string (required, immutable)
│       │  ├ Description: string
│       │  ├ Provider: string<AZURE> (required, immutable)
│       │  ├ ProviderConfiguration: ProviderConfiguration (required)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ ConnectorArn: string
│       │  ├ EnablementStatus: string<ENABLED|PENDING_ENABLEMENT|FAILED_TO_ENABLE|PENDING_UPDATE|FAILED_TO_UPDATE|PENDING_DELETION|DELETED|FAILED_TO_DELETE>
│       │  ├ EnablementStatusReason: string
│       │  ├ Health: ConnectorHealth
│       │  ├ CreatedAt: string
│       │  ├ LastUpdatedAt: string
│       │  ├ ProviderConfiguration.Azure.ScopeConfiguration.VmScanning.State: string<ACTIVE|PENDING|ERROR|DISABLED>
│       │  ├ ProviderConfiguration.Azure.ScopeConfiguration.VmScanning.StateReason: string
│       │  ├ ProviderConfiguration.Azure.ScopeConfiguration.ContainerImageScanning.State: string<ACTIVE|PENDING|ERROR|DISABLED>
│       │  ├ ProviderConfiguration.Azure.ScopeConfiguration.ContainerImageScanning.StateReason: string
│       │  ├ ProviderConfiguration.Azure.ScopeConfiguration.ServerlessScanning.State: string<ACTIVE|PENDING|ERROR|DISABLED>
│       │  └ ProviderConfiguration.Azure.ScopeConfiguration.ServerlessScanning.StateReason: string
│       └ types
│          ├ type AzureProviderConfiguration
│          │ ├      name: AzureProviderConfiguration
│          │ └ properties
│          │    ├ AwsConfigConnectorArn: string (required, immutable)
│          │    ├ AzureRegions: Array<string> (required)
│          │    ├ ScopeConfiguration: AzureScopeConfigurationMap (required)
│          │    └ AutoInstallVMScanner: boolean (default=true)
│          ├ type AzureScopeConfigurationMap
│          │ ├      documentation: Defines which resource types to scan and at what scope level.
│          │ │      name: AzureScopeConfigurationMap
│          │ └ properties
│          │    ├ VmScanning: ScopeConfiguration
│          │    ├ ContainerImageScanning: ScopeConfiguration
│          │    └ ServerlessScanning: ScopeConfiguration
│          ├ type ConnectorHealth
│          │ ├      name: ConnectorHealth
│          │ └ properties
│          │    ├ ConnectorStatus: string<CONNECTED|DEGRADED|FAILED_TO_CONNECT|PENDING_AUTHORIZATION|PENDING_CONFIGURATION|UNKNOWN>
│          │    ├ LastCheckedAt: string
│          │    └ Message: string
│          ├ type ProviderConfiguration
│          │ ├      name: ProviderConfiguration
│          │ └ properties
│          │    └ Azure: AzureProviderConfiguration (required)
│          └ type ScopeConfiguration
│            ├      documentation: Defines the scope of Azure resources to monitor for a specific resource type.
│            │      name: ScopeConfiguration
│            └ properties
│               ├ ScopeType: string<TENANT|SUBSCRIPTION> (required)
│               ├ ScopeValues: Array<string>
│               ├ State: string<ACTIVE|PENDING|ERROR|DISABLED>
│               └ StateReason: string
├[~] service aws-iot
│ └ resources
│    ├[+]  resource AWS::IoT::Job
│    │  ├      name: Job
│    │  │      cloudFormationType: AWS::IoT::Job
│    │  │      documentation: Use the AWS::IoT::Job resource to declare an AWS IoT job. A job can be used to define a set of remote operations that are sent to and run on one or more devices (things or thing groups) connected to AWS IoT.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:iot:${Region}:${Account}:job/${JobId}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ JobId: string (required, immutable)
│    │  │  ├ Targets: Array<string> (required, immutable)
│    │  │  ├ DocumentSource: string (immutable)
│    │  │  ├ Document: string (immutable)
│    │  │  ├ Description: string
│    │  │  ├ PresignedUrlConfig: PresignedUrlConfig
│    │  │  ├ TargetSelection: string<CONTINUOUS|SNAPSHOT> (immutable)
│    │  │  ├ JobExecutionsRolloutConfig: JobExecutionsRolloutConfig
│    │  │  ├ AbortConfig: AbortConfig
│    │  │  ├ TimeoutConfig: TimeoutConfig
│    │  │  ├ JobTemplateArn: string (immutable)
│    │  │  ├ JobExecutionsRetryConfig: JobExecutionsRetryConfig (immutable)
│    │  │  ├ DocumentParameters: Map<string, string> (immutable)
│    │  │  ├ SchedulingConfig: SchedulingConfig (immutable)
│    │  │  ├ DestinationPackageVersions: Array<string> (immutable)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  └ CreatedAt: string
│    │  └ types
│    │     ├ type AbortConfig
│    │     │ ├      documentation: The criteria that determine when and how a job abort takes place.
│    │     │ │      name: AbortConfig
│    │     │ └ properties
│    │     │    └ CriteriaList: Array<AbortCriteria> (required)
│    │     ├ type AbortCriteria
│    │     │ ├      documentation: The criteria that determine when and how a job abort takes place.
│    │     │ │      name: AbortCriteria
│    │     │ └ properties
│    │     │    ├ FailureType: string<FAILED|REJECTED|TIMED_OUT|ALL> (required)
│    │     │    ├ Action: string<CANCEL> (required)
│    │     │    ├ ThresholdPercentage: number (required)
│    │     │    └ MinNumberOfExecutedThings: integer (required)
│    │     ├ type ExponentialRolloutRate
│    │     │ ├      documentation: Allows you to create an exponential rate of rollout for a job.
│    │     │ │      name: ExponentialRolloutRate
│    │     │ └ properties
│    │     │    ├ BaseRatePerMinute: integer (required)
│    │     │    ├ IncrementFactor: number (required)
│    │     │    └ RateIncreaseCriteria: RateIncreaseCriteria (required)
│    │     ├ type JobExecutionsRetryConfig
│    │     │ ├      documentation: The configuration that determines how many retries are allowed for each failure type for a job.
│    │     │ │      name: JobExecutionsRetryConfig
│    │     │ └ properties
│    │     │    └ CriteriaList: Array<RetryCriteria> (required)
│    │     ├ type JobExecutionsRolloutConfig
│    │     │ ├      documentation: Allows you to create a staged rollout of a job.
│    │     │ │      name: JobExecutionsRolloutConfig
│    │     │ └ properties
│    │     │    ├ MaximumPerMinute: integer
│    │     │    └ ExponentialRate: ExponentialRolloutRate
│    │     ├ type MaintenanceWindow
│    │     │ ├      documentation: An optional configuration within the SchedulingConfig to setup a recurring maintenance window with a predetermined start time and duration for the rollout of a job document to all devices in a target group for a job.
│    │     │ │      name: MaintenanceWindow
│    │     │ └ properties
│    │     │    ├ StartTime: string (required)
│    │     │    └ DurationInMinutes: integer (required)
│    │     ├ type PresignedUrlConfig
│    │     │ ├      documentation: Configuration for pre-signed S3 URLs.
│    │     │ │      name: PresignedUrlConfig
│    │     │ └ properties
│    │     │    ├ RoleArn: string
│    │     │    └ ExpiresInSec: integer
│    │     ├ type RateIncreaseCriteria
│    │     │ ├      documentation: Allows you to define a criteria to initiate the increase in rate of rollout for a job.
│    │     │ │      name: RateIncreaseCriteria
│    │     │ └ properties
│    │     │    ├ NumberOfNotifiedThings: integer
│    │     │    └ NumberOfSucceededThings: integer
│    │     ├ type RetryCriteria
│    │     │ ├      documentation: The criteria that determines how many retries are allowed for each failure type for a job.
│    │     │ │      name: RetryCriteria
│    │     │ └ properties
│    │     │    ├ FailureType: string<FAILED|TIMED_OUT|ALL> (required)
│    │     │    └ NumberOfRetries: integer (required)
│    │     ├ type SchedulingConfig
│    │     │ ├      documentation: Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group.
│    │     │ │      name: SchedulingConfig
│    │     │ └ properties
│    │     │    ├ StartTime: string
│    │     │    ├ EndTime: string
│    │     │    ├ EndBehavior: string<STOP_ROLLOUT|CANCEL|FORCE_CANCEL>
│    │     │    └ MaintenanceWindows: Array<MaintenanceWindow>
│    │     └ type TimeoutConfig
│    │       ├      documentation: Specifies the amount of time each device has to finish its execution of the job.
│    │       │      name: TimeoutConfig
│    │       └ properties
│    │          └ InProgressTimeoutInMinutes: integer
│    └[+]  resource AWS::IoT::Stream
│       ├      name: Stream
│       │      cloudFormationType: AWS::IoT::Stream
│       │      documentation: Resource Type definition for AWS IoT Stream. A stream is a publicly addressable resource that is an abstraction for a list of files that can be transferred to an IoT device.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ StreamId: string (required, immutable)
│       │  ├ Description: string
│       │  ├ Files: Array<StreamFile> (required)
│       │  ├ RoleArn: string (required)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ StreamVersion: integer
│       │  ├ CreatedAt: string
│       │  └ LastUpdatedAt: string
│       └ types
│          ├ type S3Location
│          │ ├      documentation: The location of the file in S3.
│          │ │      name: S3Location
│          │ └ properties
│          │    ├ Bucket: string
│          │    ├ Key: string
│          │    └ Version: string
│          └ type StreamFile
│            ├      documentation: Represents a file to stream.
│            │      name: StreamFile
│            └ properties
│               ├ FileId: integer
│               └ S3Location: S3Location
├[+] service aws-iotsecuretunneling
│ ├      capitalized: IoTSecureTunneling
│ │      cloudFormationNamespace: AWS::IoTSecureTunneling
│ │      name: aws-iotsecuretunneling
│ │      shortName: iotsecuretunneling
│ └ resources
│    └ resource AWS::IoTSecureTunneling::Tunnel
│      ├      name: Tunnel
│      │      cloudFormationType: AWS::IoTSecureTunneling::Tunnel
│      │      documentation: A connection between a source computer and a destination device using AWS IoT Secure Tunneling.
│      │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│      │      primaryIdentifier: ["TunnelArn"]
│      ├ properties
│      │  ├ Description: string (immutable)
│      │  ├ DestinationConfig: DestinationConfig (immutable)
│      │  ├ TimeoutConfig: TimeoutConfig (immutable)
│      │  └ Tags: Array<tag>
│      ├ attributes
│      │  ├ TunnelArn: string
│      │  ├ TunnelId: string
│      │  └ Status: string<OPEN|CLOSED>
│      └ types
│         ├ type DestinationConfig
│         │ ├      documentation: The destination configuration.
│         │ │      name: DestinationConfig
│         │ └ properties
│         │    ├ ThingName: string
│         │    └ Services: Array<string> (required)
│         └ type TimeoutConfig
│           ├      documentation: Tunnel timeout configuration.
│           │      name: TimeoutConfig
│           └ properties
│              └ MaxLifetimeTimeoutMinutes: integer
├[~] service aws-iotwireless
│ └ resources
│    └[~]  resource AWS::IoTWireless::WirelessDeviceImportTask
│       └      - arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:WirelessDeviceImportTask/${WirelessDeviceImportTaskId}
│              + arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:ImportTask/${ImportTaskId}
├[~] service aws-kendra
│ └ resources
│    ├[+]  resource AWS::Kendra::QuerySuggestionsBlockList
│    │  ├      name: QuerySuggestionsBlockList
│    │  │      cloudFormationType: AWS::Kendra::QuerySuggestionsBlockList
│    │  │      documentation: A block list used for query suggestions for an Amazon Kendra index. A block list contains words or phrases that should not appear as query suggestions.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ IndexId: string (required, immutable)
│    │  │  ├ Name: string (required)
│    │  │  ├ Description: string
│    │  │  ├ SourceS3Path: S3Path (required)
│    │  │  ├ RoleArn: string (required)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  └ Id: string
│    │  └ types
│    │     └ type S3Path
│    │       ├      documentation: Information required to find a specific file in an Amazon S3 bucket.
│    │       │      name: S3Path
│    │       └ properties
│    │          ├ Bucket: string (required)
│    │          └ Key: string (required)
│    └[+]  resource AWS::Kendra::Thesaurus
│       ├      name: Thesaurus
│       │      cloudFormationType: AWS::Kendra::Thesaurus
│       │      documentation: A thesaurus for an Amazon Kendra index. The thesaurus contains a list of synonyms in Solr format.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ IndexId: string (required, immutable)
│       │  ├ Name: string (required)
│       │  ├ Description: string
│       │  ├ RoleArn: string (required)
│       │  ├ SourceS3Path: S3Path (required)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ Arn: string
│       │  └ Id: string
│       └ types
│          └ type S3Path
│            ├      documentation: Information required to find a specific file in an Amazon S3 bucket.
│            │      name: S3Path
│            └ properties
│               ├ Bucket: string (required)
│               └ Key: string (required)
├[~] service aws-lambda
│ └ resources
│    ├[~]  resource AWS::Lambda::CapacityProvider
│    │  ├ properties
│    │  │  └ TelemetryConfig: (documentation changed)
│    │  └ types
│    │     ├[~] type CapacityProviderLoggingConfig
│    │     │ └ properties
│    │     │    ├ LogGroup: (documentation changed)
│    │     │    └ SystemLogLevel: (documentation changed)
│    │     └[~] type CapacityProviderTelemetryConfig
│    │       └ properties
│    │          └ LoggingConfig: (documentation changed)
│    ├[~]  resource AWS::Lambda::Function
│    │  └ types
│    │     ├[~] type Code
│    │     │ └ properties
│    │     │    └ S3ObjectStorageMode: (documentation changed)
│    │     └[~] type DurableConfig
│    │       └ properties
│    │          └ KMSKeyArn: (documentation changed)
│    └[+]  resource AWS::Lambda::ResourcePolicy
│       ├      name: ResourcePolicy
│       │      cloudFormationType: AWS::Lambda::ResourcePolicy
│       │      documentation: Resource Type definition for AWS::Lambda::ResourcePolicy
│       │      scrutinizable: ResourcePolicyResource
│       │      primaryIdentifier: ["ResourceArn"]
│       └ properties
│          ├ PolicyDocument: json (required)
│          └ ResourceArn: string (required, immutable)
├[~] service aws-lex
│ └ resources
│    └[~]  resource AWS::Lex::Bot
│       ├ properties
│       │  ├[+] BotMembers: Array<BotMember>
│       │  └[+] BotType: string<Bot|BotNetwork> (default="Bot", immutable)
│       └ types
│          └[+]  type BotMember
│             ├      documentation: A bot that is a member of a bot network.
│             │      name: BotMember
│             └ properties
│                ├ BotMemberName: string (required)
│                ├ BotMemberAliasName: string (required)
│                ├ BotMemberId: string (required)
│                ├ BotMemberVersion: string (required)
│                └ BotMemberAliasId: string (required)
├[~] service aws-licensemanager
│ └ resources
│    └[+]  resource AWS::LicenseManager::LicenseAssetRuleSet
│       ├      name: LicenseAssetRuleSet
│       │      cloudFormationType: AWS::LicenseManager::LicenseAssetRuleSet
│       │      documentation: Resource schema for AWS::LicenseManager::LicenseAssetRuleSet.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:license-manager:${Region}:${Account}:license-asset-ruleset:${LicenseAssetRulesetId}
│       │      primaryIdentifier: ["LicenseAssetRulesetArn"]
│       ├ properties
│       │  ├ Name: string (required)
│       │  ├ Description: string
│       │  ├ Rules: Array<LicenseAssetRule> (required)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  └ LicenseAssetRulesetArn: string
│       └ types
│          ├ type AndRuleStatement
│          │ ├      documentation: AND rule statement.
│          │ │      name: AndRuleStatement
│          │ └ properties
│          │    └ MatchingRuleStatements: Array<MatchingRuleStatement>
│          ├ type InstanceRuleStatement
│          │ ├      documentation: Instance rule statement.
│          │ │      name: InstanceRuleStatement
│          │ └ properties
│          │    ├ AndRuleStatement: AndRuleStatement
│          │    ├ OrRuleStatement: OrRuleStatement
│          │    └ MatchingRuleStatement: MatchingRuleStatement
│          ├ type LicenseAssetRule
│          │ ├      documentation: License asset rule.
│          │ │      name: LicenseAssetRule
│          │ └ properties
│          │    └ RuleStatement: RuleStatement (required)
│          ├ type LicenseConfigurationRuleStatement
│          │ ├      documentation: License configuration rule statement.
│          │ │      name: LicenseConfigurationRuleStatement
│          │ └ properties
│          │    ├ AndRuleStatement: AndRuleStatement
│          │    ├ OrRuleStatement: OrRuleStatement
│          │    └ MatchingRuleStatement: MatchingRuleStatement
│          ├ type LicenseRuleStatement
│          │ ├      documentation: License rule statement.
│          │ │      name: LicenseRuleStatement
│          │ └ properties
│          │    ├ AndRuleStatement: AndRuleStatement
│          │    ├ OrRuleStatement: OrRuleStatement
│          │    └ MatchingRuleStatement: MatchingRuleStatement
│          ├ type MatchingRuleStatement
│          │ ├      documentation: Matching rule statement.
│          │ │      name: MatchingRuleStatement
│          │ └ properties
│          │    ├ KeyToMatch: string (required)
│          │    ├ Constraint: string (required)
│          │    └ ValueToMatch: Array<string> (required)
│          ├ type OrRuleStatement
│          │ ├      documentation: OR rule statement.
│          │ │      name: OrRuleStatement
│          │ └ properties
│          │    └ MatchingRuleStatements: Array<MatchingRuleStatement>
│          └ type RuleStatement
│            ├      documentation: Rule statement. Specify exactly one of InstanceRuleStatement, LicenseRuleStatement, or LicenseConfigurationRuleStatement.
│            │      name: RuleStatement
│            └ properties
│               ├ InstanceRuleStatement: InstanceRuleStatement
│               ├ LicenseRuleStatement: LicenseRuleStatement
│               └ LicenseConfigurationRuleStatement: LicenseConfigurationRuleStatement
├[~] service aws-logs
│ └ resources
│    └[+]  resource AWS::Logs::StorageTierPolicy
│       ├      name: StorageTierPolicy
│       │      cloudFormationType: AWS::Logs::StorageTierPolicy
│       │      documentation: Resource Type definition for AWS::Logs::StorageTierPolicy. Manages the storage tier policy for a CloudWatch Logs account. When created, enables Intelligent-Tiering which automatically moves infrequently accessed log data to lower-cost storage tiers. Deleting this resource reverts the account to standard (single-tier) storage.
│       │      primaryIdentifier: ["AccountId"]
│       ├ properties
│       │  └ StorageTier: string<INTELLIGENT_TIERING> (required)
│       └ attributes
│          ├ AccountId: string
│          └ LastUpdatedTime: number
├[~] service aws-mediaconvert
│ └ resources
│    └[~]  resource AWS::MediaConvert::Preset
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["Name"]
│       └ attributes
│          └[-] Id: string
├[~] service aws-medialive
│ └ resources
│    └[-]  resource AWS::MediaLive::Offering
│       ├      name: Offering
│       │      cloudFormationType: AWS::MediaLive::Offering
│       │      documentation: Definition of AWS::MediaLive::Offering Resource Type
│       │      arnTemplate: arn:${Partition}:medialive:${Region}:${Account}:offering:${OfferingId}
│       │      primaryIdentifier: ["Arn"]
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ OfferingId: string
│       │  ├ CurrencyCode: string
│       │  ├ Duration: integer
│       │  ├ DurationUnits: string<MONTHS>
│       │  ├ FixedPrice: number
│       │  ├ OfferingDescription: string
│       │  ├ OfferingType: string<NO_UPFRONT>
│       │  ├ Region: string
│       │  ├ ResourceSpecification: ReservationResourceSpecification
│       │  └ UsagePrice: number
│       └ types
│          └ type ReservationResourceSpecification
│            ├      documentation: Resource configuration (codec, resolution, bitrate, ...)
│            │      name: ReservationResourceSpecification
│            └ properties
│               ├ ChannelClass: string<STANDARD|SINGLE_PIPELINE>
│               ├ Codec: string<MPEG2|AVC|HEVC|AUDIO|LINK|AV1>
│               ├ MaximumBitrate: string<MAX_10_MBPS|MAX_20_MBPS|MAX_50_MBPS>
│               ├ MaximumFramerate: string<MAX_30_FPS|MAX_60_FPS>
│               ├ Resolution: string<SD|HD|FHD|UHD>
│               ├ ResourceType: string<INPUT|OUTPUT|MULTIPLEX|CHANNEL>
│               ├ SpecialFeature: string<ADVANCED_AUDIO|AUDIO_NORMALIZATION|MGHD|MGUHD>
│               └ VideoQuality: string<STANDARD|ENHANCED|PREMIUM>
├[~] service aws-mediapackage
│ └ resources
│    └[-]  resource AWS::MediaPackage::HarvestJob
│       ├      name: HarvestJob
│       │      cloudFormationType: AWS::MediaPackage::HarvestJob
│       │      documentation: Resource schema for AWS::MediaPackage::HarvestJob. A HarvestJob extracts a video on demand (VOD) clip from a live content stream.
│       │      arnTemplate: arn:${Partition}:mediapackage:${Region}:${Account}:harvest_jobs/${HarvestJobIdentifier}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ EndTime: string (required, immutable)
│       │  ├ Id: string (required, immutable)
│       │  ├ OriginEndpointId: string (required, immutable)
│       │  ├ S3Destination: S3Destination (required, immutable)
│       │  └ StartTime: string (required, immutable)
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ ChannelId: string
│       │  ├ CreatedAt: string
│       │  └ Status: string<IN_PROGRESS|SUCCEEDED|FAILED>
│       └ types
│          └ type S3Destination
│            ├      documentation: Configuration parameters for where in an S3 bucket to place the harvested content.
│            │      name: S3Destination
│            └ properties
│               ├ BucketName: string (required)
│               ├ ManifestKey: string (required)
│               └ RoleArn: string (required)
├[~] service aws-mediapackagev2
│ └ resources
│    ├[~]  resource AWS::MediaPackageV2::Channel
│    │  └ properties
│    │     └[+] OutputLockingMode: string<EPOCH_LOCKED|NON_EPOCH_LOCKED> (immutable)
│    └[~]  resource AWS::MediaPackageV2::OriginEndpoint
│       └ types
│          ├[~] type DashAvailabilityStartTimeConfiguration
│          │ ├      - documentation: undefined
│          │ │      + documentation: <p>The configuration for the DASH <code>availabilityStartTime</code> attribute of the Media Presentation Description (MPD). Use this configuration to set a custom availability start time for your DASH manifest.</p>
│          │ └ properties
│          │    └ FixedAvailabilityStartTime: (documentation changed)
│          ├[~] type DashManifestConfiguration
│          │ └ properties
│          │    └ AvailabilityStartTimeConfiguration: (documentation changed)
│          └[~] type Segment
│            └ properties
│               └[+] OutputTimestampMode: string<PASSTHROUGH|REBASED_TO_CHANNEL_START>
├[~] service aws-mediatailor
│ └ resources
│    ├[+]  resource AWS::MediaTailor::Function
│    │  ├      name: Function
│    │  │      cloudFormationType: AWS::MediaTailor::Function
│    │  │      documentation: Resource Type definition for AWS::MediaTailor::Function
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["FunctionId"]
│    │  ├ properties
│    │  │  ├ FunctionId: string (required, immutable)
│    │  │  ├ FunctionType: string<HTTP_REQUEST|CUSTOM_OUTPUT|SEQUENTIAL_EXECUTOR> (required)
│    │  │  ├ Description: string
│    │  │  ├ HttpRequestConfiguration: HttpRequestConfiguration
│    │  │  ├ CustomOutputConfiguration: CustomOutputConfiguration
│    │  │  ├ SequentialExecutorConfiguration: SequentialExecutorConfiguration
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  └ Arn: string
│    │  └ types
│    │     ├ type CustomOutputConfiguration
│    │     │ ├      documentation: Configuration for custom output functions.
│    │     │ │      name: CustomOutputConfiguration
│    │     │ └ properties
│    │     │    ├ Runtime: string<JSONATA> (required)
│    │     │    └ Output: Map<string, string>
│    │     ├ type FunctionRef
│    │     │ ├      documentation: A reference to a function with an optional run condition.
│    │     │ │      name: FunctionRef
│    │     │ └ properties
│    │     │    ├ RunCondition: string
│    │     │    └ FunctionId: string
│    │     ├ type HttpRequestConfiguration
│    │     │ ├      documentation: Configuration for HTTP request functions.
│    │     │ │      name: HttpRequestConfiguration
│    │     │ └ properties
│    │     │    ├ Runtime: string<JSONATA> (required)
│    │     │    ├ Output: Map<string, string>
│    │     │    ├ MethodType: string<GET|POST> (required)
│    │     │    ├ RequestTimeoutMilliseconds: integer (required)
│    │     │    ├ Url: string (required)
│    │     │    ├ Body: string
│    │     │    └ Headers: Map<string, string>
│    │     └ type SequentialExecutorConfiguration
│    │       ├      documentation: Configuration for sequential executor functions.
│    │       │      name: SequentialExecutorConfiguration
│    │       └ properties
│    │          ├ Runtime: string<JSONATA> (required)
│    │          ├ Output: Map<string, string>
│    │          ├ FunctionList: Array<FunctionRef> (required)
│    │          └ TimeoutMilliseconds: integer (required)
│    ├[~]  resource AWS::MediaTailor::PlaybackConfiguration
│    │  ├ properties
│    │  │  ├[+] AdsPersonalizationConcurrency: AdsPersonalizationConcurrency
│    │  │  └[+] AdsPersonalizationTimeouts: AdsPersonalizationTimeouts
│    │  └ types
│    │     ├[~] type AdDecisionServerConfiguration
│    │     │ └ properties
│    │     │    └[+] VastResponse: VastResponse
│    │     ├[+]  type AdsPersonalizationConcurrency
│    │     │  ├      documentation: The settings that control how many concurrent requests MediaTailor makes to the ad decision server (ADS).
│    │     │  │      name: AdsPersonalizationConcurrency
│    │     │  └ properties
│    │     │     ├ MaxConcurrentAdsRequests: integer
│    │     │     └ EnableVodVastParallelization: boolean
│    │     ├[+]  type AdsPersonalizationTimeouts
│    │     │  ├      documentation: The ad decision server (ADS) request timeouts and personalization time budgets for live, VOD, and prefetch workflows.
│    │     │  │      name: AdsPersonalizationTimeouts
│    │     │  └ properties
│    │     │     ├ AdsRequestTimeoutMilliseconds: integer
│    │     │     ├ LiveMaximumAdsPersonalizationTimeMilliseconds: integer
│    │     │     ├ VodMaximumAdsPersonalizationTimeMilliseconds: integer
│    │     │     ├ PrefetchAdsRequestTimeoutMilliseconds: integer
│    │     │     └ PrefetchMaximumAdsPersonalizationTimeMilliseconds: integer
│    │     ├[~] type LivePreRollConfiguration
│    │     │ └ properties
│    │     │    └[+] AdDecisionServerConfiguration: PreRollAdDecisionServerConfiguration
│    │     ├[+]  type PreRollAdDecisionServerConfiguration
│    │     │  ├      documentation: The configuration for the request to the pre-roll Ad Decision Server.
│    │     │  │      name: PreRollAdDecisionServerConfiguration
│    │     │  └ properties
│    │     │     └ VastResponse: PreRollVastResponse
│    │     ├[+]  type PreRollVastResponse
│    │     │  ├      documentation: The configuration for how MediaTailor processes the VAST response returned by the pre-roll Ad Decision Server.
│    │     │  │      name: PreRollVastResponse
│    │     │  └ properties
│    │     │     └ AdSequencingMode: string<FOLLOW_AD_SEQUENCE|IGNORE_AD_SEQUENCE>
│    │     └[+]  type VastResponse
│    │        ├      documentation: The configuration for how MediaTailor processes the VAST response returned by the Ad Decision Server.
│    │        │      name: VastResponse
│    │        └ properties
│    │           └ AdSequencingMode: string<FOLLOW_AD_SEQUENCE|IGNORE_AD_SEQUENCE|FOLLOW_AD_SEQUENCE_ONLY_LIVE|FOLLOW_AD_SEQUENCE_ONLY_VOD>
│    └[+]  resource AWS::MediaTailor::PrefetchSchedule
│       ├      name: PrefetchSchedule
│       │      cloudFormationType: AWS::MediaTailor::PrefetchSchedule
│       │      documentation: Definition of AWS::MediaTailor::PrefetchSchedule Resource Type
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ Name: string (required, immutable)
│       │  ├ PlaybackConfigurationName: string (required, immutable)
│       │  ├ Consumption: PrefetchConsumption (immutable)
│       │  ├ Retrieval: PrefetchRetrieval (immutable)
│       │  ├ RecurringPrefetchConfiguration: RecurringPrefetchConfiguration (immutable)
│       │  ├ ScheduleType: string<SINGLE|RECURRING> (immutable)
│       │  ├ StreamId: string (immutable)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  └ Arn: string
│       └ types
│          ├ type AvailMatchingCriteria
│          │ ├      name: AvailMatchingCriteria
│          │ └ properties
│          │    ├ DynamicVariable: string (required)
│          │    └ Operator: string<EQUALS> (required)
│          ├ type PrefetchConsumption
│          │ ├      name: PrefetchConsumption
│          │ └ properties
│          │    ├ AvailMatchingCriteria: Array<AvailMatchingCriteria>
│          │    ├ EndTime: string (required)
│          │    └ StartTime: string
│          ├ type PrefetchRetrieval
│          │ ├      name: PrefetchRetrieval
│          │ └ properties
│          │    ├ DynamicVariables: Map<string, string>
│          │    ├ EndTime: string (required)
│          │    ├ StartTime: string
│          │    ├ TrafficShapingType: string<RETRIEVAL_WINDOW|TPS>
│          │    ├ TrafficShapingRetrievalWindow: TrafficShapingRetrievalWindow
│          │    └ TrafficShapingTpsConfiguration: TrafficShapingTpsConfiguration
│          ├ type RecurringConsumption
│          │ ├      name: RecurringConsumption
│          │ └ properties
│          │    ├ RetrievedAdExpirationSeconds: integer
│          │    └ AvailMatchingCriteria: Array<AvailMatchingCriteria>
│          ├ type RecurringPrefetchConfiguration
│          │ ├      name: RecurringPrefetchConfiguration
│          │ └ properties
│          │    ├ StartTime: string
│          │    ├ EndTime: string (required)
│          │    ├ RecurringConsumption: RecurringConsumption (required)
│          │    └ RecurringRetrieval: RecurringRetrieval (required)
│          ├ type RecurringRetrieval
│          │ ├      name: RecurringRetrieval
│          │ └ properties
│          │    ├ DynamicVariables: Map<string, string>
│          │    ├ DelayAfterAvailEndSeconds: integer
│          │    ├ TrafficShapingType: string<RETRIEVAL_WINDOW|TPS>
│          │    ├ TrafficShapingRetrievalWindow: TrafficShapingRetrievalWindow
│          │    └ TrafficShapingTpsConfiguration: TrafficShapingTpsConfiguration
│          ├ type TrafficShapingRetrievalWindow
│          │ ├      name: TrafficShapingRetrievalWindow
│          │ └ properties
│          │    └ RetrievalWindowDurationSeconds: integer
│          └ type TrafficShapingTpsConfiguration
│            ├      name: TrafficShapingTpsConfiguration
│            └ properties
│               ├ PeakTps: integer
│               └ PeakConcurrentUsers: integer
├[~] service aws-memorydb
│ └ resources
│    ├[-]  resource AWS::MemoryDB::MultiRegionParameterGroup
│    │  ├      name: MultiRegionParameterGroup
│    │  │      cloudFormationType: AWS::MemoryDB::MultiRegionParameterGroup
│    │  │      documentation: Represents a multi-region parameter group that can be applied to clusters across multiple regions in Amazon MemoryDB.
│    │  │      arnTemplate: arn:${Partition}:memorydb::${Account}:multiregionparametergroup/${MultiRegionParameterGroupName}
│    │  │      primaryIdentifier: ["Arn"]
│    │  └ attributes
│    │     ├ Arn: string
│    │     ├ MultiRegionParameterGroupName: string
│    │     ├ Family: string
│    │     └ Description: string
│    └[-]  resource AWS::MemoryDB::ReservedNode
│       ├      name: ReservedNode
│       │      cloudFormationType: AWS::MemoryDB::ReservedNode
│       │      documentation: Represents a MemoryDB reserved node purchased via PurchaseReservedNodesOffering. Reserved nodes are not eligible for cancellation and are non-refundable.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:memorydb:${Region}:${Account}:reservednode/${ReservationID}
│       │      primaryIdentifier: ["Arn"]
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ ReservationId: string
│       │  ├ ReservedNodesOfferingId: string
│       │  ├ NodeType: string
│       │  ├ Duration: integer
│       │  ├ FixedPrice: number
│       │  ├ NodeCount: integer
│       │  ├ OfferingType: string
│       │  ├ State: string
│       │  ├ StartTime: string
│       │  ├ RecurringCharges: Array<RecurringCharge>
│       │  └ Tags: Array<tag>
│       └ types
│          └ type RecurringCharge
│            ├      name: RecurringCharge
│            └ properties
│               ├ RecurringChargeAmount: number
│               └ RecurringChargeFrequency: string
├[+] service aws-mgn
│ ├      capitalized: MGN
│ │      cloudFormationNamespace: AWS::MGN
│ │      name: aws-mgn
│ │      shortName: mgn
│ ├ resources
│ │  └ resource AWS::MGN::NetworkMigrationDefinition
│ │    ├      name: NetworkMigrationDefinition
│ │    │      cloudFormationType: AWS::MGN::NetworkMigrationDefinition
│ │    │      documentation: Resource schema for AWS::MGN::NetworkMigrationDefinition
│ │    │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│ │    │      primaryIdentifier: ["Arn"]
│ │    ├ properties
│ │    │  ├ Name: string (required)
│ │    │  ├ Description: string
│ │    │  ├ SourceConfigurations: Array<SourceConfiguration> (required)
│ │    │  ├ TargetS3Configuration: TargetS3Configuration (required)
│ │    │  ├ TargetNetwork: TargetNetwork (required)
│ │    │  ├ TargetDeployment: string<SINGLE_ACCOUNT|MULTI_ACCOUNT>
│ │    │  ├ ScopeTags: Map<string, string>
│ │    │  └ Tags: Array<tag>
│ │    ├ attributes
│ │    │  ├ Arn: string
│ │    │  ├ NetworkMigrationDefinitionID: string
│ │    │  ├ CreatedAt: string
│ │    │  └ UpdatedAt: string
│ │    └ types
│ │       ├ type SourceConfiguration
│ │       │ ├      documentation: Configuration for a migration source environment.
│ │       │ │      name: SourceConfiguration
│ │       │ └ properties
│ │       │    ├ SourceEnvironment: string<NSX|VSPHERE|FORTIGATE_FIREWALL|PALO_ALTO_FIREWALL|CISCO_ACI|LOGICAL_MODEL|MODELIZE_IT> (required)
│ │       │    └ SourceS3Configuration: SourceS3Configuration (required)
│ │       ├ type SourceS3Configuration
│ │       │ ├      documentation: S3 configuration for source network data.
│ │       │ │      name: SourceS3Configuration
│ │       │ └ properties
│ │       │    ├ S3Bucket: string (required)
│ │       │    ├ S3BucketOwner: string (required)
│ │       │    └ S3Key: string (required)
│ │       ├ type TargetNetwork
│ │       │ ├      documentation: Configuration for the target network topology and addressing.
│ │       │ │      name: TargetNetwork
│ │       │ └ properties
│ │       │    ├ Topology: string<ISOLATED_VPC|HUB_AND_SPOKE> (required)
│ │       │    ├ InboundCidr: string
│ │       │    ├ OutboundCidr: string
│ │       │    └ InspectionCidr: string
│ │       └ type TargetS3Configuration
│ │         ├      documentation: S3 configuration for storing target network artifacts.
│ │         │      name: TargetS3Configuration
│ │         └ properties
│ │            ├ S3Bucket: string (required)
│ │            └ S3BucketOwner: string (required)
│ └ metrics
│    ├ event aws.mgn@MGNSourceServerDataReplicationStalledChange
│    │ ├      description: Schema for event type MGNSourceServerDataReplicationStalledChange, published by AWS service aws.mgn
│    │ │      source: aws.mgn
│    │ │      detailType: MGN Source Server Data Replication Stalled Change
│    │ │      rootProperty: MGNSourceServerDataReplicationStalledChange
│    │ └ types
│    │    └ type MGNSourceServerDataReplicationStalledChange
│    │      └ properties
│    │         └ state: string (required)
│    ├ event aws.mgn@MGNSourceServerLaunchResult
│    │ ├      description: Schema for event type MGNSourceServerLaunchResult, published by AWS service aws.mgn
│    │ │      source: aws.mgn
│    │ │      detailType: MGN Source Server Launch Result
│    │ │      rootProperty: MGNSourceServerLaunchResult
│    │ └ types
│    │    └ type MGNSourceServerLaunchResult
│    │      └ properties
│    │         ├ job-id: string (required)
│    │         └ state: string (required)
│    └ event aws.mgn@MGNSourceServerLifecycleStateChange
│      ├      description: Schema for event type MGNSourceServerLifecycleStateChange, published by AWS service aws.mgn
│      │      source: aws.mgn
│      │      detailType: MGN Source Server Lifecycle State Change
│      │      rootProperty: MGNSourceServerLifecycleStateChange
│      └ types
│         └ type MGNSourceServerLifecycleStateChange
│           └ properties
│              └ state: string (required)
├[~] service aws-msk
│ └ resources
│    ├[+]  resource AWS::MSK::Channel
│    │  ├      name: Channel
│    │  │      cloudFormationType: AWS::MSK::Channel
│    │  │      documentation: Resource Type definition for AWS::MSK::Channel
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"map"}
│    │  │      vendedLogs: [{"permissionsVersion":"V1","logType":"CHANNEL_LOGS","destinations":[{"destinationType":"S3","outputFormats":["json","plain","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["json","plain","raw"]}]}]
│    │  │      primaryIdentifier: ["ChannelArn"]
│    │  ├ properties
│    │  │  ├ ChannelName: string (required, immutable)
│    │  │  ├ ClusterArn: string (immutable)
│    │  │  ├ TopicConfigurationList: Array<TopicConfiguration> (required, immutable)
│    │  │  ├ EncryptionConfiguration: EncryptionConfiguration (immutable)
│    │  │  ├ IcebergDestinationConfiguration: IcebergDestinationConfiguration
│    │  │  ├ S3DestinationConfiguration: S3DestinationConfiguration
│    │  │  ├ LoggingInfo: ChannelLoggingInfo (immutable)
│    │  │  └ Tags: Map<string, string>
│    │  ├ attributes
│    │  │  ├ ChannelArn: string
│    │  │  ├ Status: string<CREATING|ACTIVE|UPDATING|DELETING|FAILED|SUSPENDING|SUSPENDED>
│    │  │  └ StateInfo: ChannelStateInfo
│    │  └ types
│    │     ├ type Catalog
│    │     │ ├      documentation: Catalog configuration of the destination
│    │     │ │      name: Catalog
│    │     │ └ properties
│    │     │    ├ CatalogArn: string (immutable)
│    │     │    └ WarehouseLocation: string (immutable)
│    │     ├ type ChannelLoggingInfo
│    │     │ ├      documentation: Log configuration details for Channel
│    │     │ │      name: ChannelLoggingInfo
│    │     │ └ properties
│    │     │    ├ S3: S3LogDestination
│    │     │    ├ CloudWatchLogs: CloudWatchLogsLogDestination
│    │     │    └ Firehose: FirehoseLogDestination
│    │     ├ type ChannelStateInfo
│    │     │ ├      documentation: Includes information about the channel state
│    │     │ │      name: ChannelStateInfo
│    │     │ └ properties
│    │     │    ├ Code: string
│    │     │    └ Message: string
│    │     ├ type CloudWatchLogsLogDestination
│    │     │ ├      documentation: CloudWatch Logs log destination details
│    │     │ │      name: CloudWatchLogsLogDestination
│    │     │ └ properties
│    │     │    ├ Enabled: boolean (required)
│    │     │    └ LogGroup: string
│    │     ├ type DeadLetterQueueS3
│    │     │ ├      documentation: Dead letter queue S3 configuration of the destination
│    │     │ │      name: DeadLetterQueueS3
│    │     │ └ properties
│    │     │    ├ BucketArn: string (required, immutable)
│    │     │    ├ ErrorOutputPrefix: string (required, immutable)
│    │     │    └ ExpectedBucketOwner: string (immutable)
│    │     ├ type DestinationTable
│    │     │ ├      documentation: Destination table configuration
│    │     │ │      name: DestinationTable
│    │     │ └ properties
│    │     │    ├ DestinationDatabaseName: string (required, immutable)
│    │     │    ├ DestinationTableName: string (required, immutable)
│    │     │    └ PartitionSpec: PartitionSpec (immutable)
│    │     ├ type EncryptionConfiguration
│    │     │ ├      documentation: Encryption configuration
│    │     │ │      name: EncryptionConfiguration
│    │     │ └ properties
│    │     │    └ KmsKeyArn: string (required)
│    │     ├ type FirehoseLogDestination
│    │     │ ├      documentation: Firehose log destination details
│    │     │ │      name: FirehoseLogDestination
│    │     │ └ properties
│    │     │    ├ Enabled: boolean (required)
│    │     │    └ DeliveryStream: string
│    │     ├ type IcebergDestinationConfiguration
│    │     │ ├      documentation: Iceberg destination configuration
│    │     │ │      name: IcebergDestinationConfiguration
│    │     │ └ properties
│    │     │    ├ ServiceExecutionRoleArn: string (required, immutable)
│    │     │    ├ DataFreshnessInSeconds: integer
│    │     │    ├ Catalog: Catalog (immutable)
│    │     │    ├ DeadLetterQueueS3: DeadLetterQueueS3 (required, immutable)
│    │     │    ├ AppendOnly: boolean (required, default=true, immutable)
│    │     │    ├ SchemaEvolution: SchemaEvolution (required, immutable)
│    │     │    ├ TableCreation: TableCreation (required, immutable)
│    │     │    ├ DestinationTableList: Array<DestinationTable> (required, immutable)
│    │     │    └ CompressionType: string<ZSTD|SNAPPY> (immutable)
│    │     ├ type PartitionSource
│    │     │ ├      documentation: Partition source configuration
│    │     │ │      name: PartitionSource
│    │     │ └ properties
│    │     │    └ SourceName: string (immutable)
│    │     ├ type PartitionSpec
│    │     │ ├      documentation: Partition specification
│    │     │ │      name: PartitionSpec
│    │     │ └ properties
│    │     │    ├ PartitionStrategy: string<TIME_HOUR> (required, immutable)
│    │     │    └ SourceList: Array<PartitionSource> (immutable)
│    │     ├ type RecordConverter
│    │     │ ├      documentation: Record converter configuration for a topic
│    │     │ │      name: RecordConverter
│    │     │ └ properties
│    │     │    └ ValueConverter: string<BYTE_ARRAY|JSON|JSON_SCHEMA_GSR|STRING> (required)
│    │     ├ type RecordSchema
│    │     │ ├      documentation: Record schema configuration for a topic
│    │     │ │      name: RecordSchema
│    │     │ └ properties
│    │     │    └ GsrArn: string (required)
│    │     ├ type S3DestinationConfiguration
│    │     │ ├      documentation: S3 destination configuration
│    │     │ │      name: S3DestinationConfiguration
│    │     │ └ properties
│    │     │    ├ DataFreshnessInSeconds: integer
│    │     │    ├ DeadLetterQueueS3: DeadLetterQueueS3 (required, immutable)
│    │     │    ├ ServiceExecutionRoleArn: string (required, immutable)
│    │     │    └ Storage: S3Storage (required, immutable)
│    │     ├ type S3LogDestination
│    │     │ ├      documentation: S3 log destination details
│    │     │ │      name: S3LogDestination
│    │     │ └ properties
│    │     │    ├ Enabled: boolean (required)
│    │     │    ├ Bucket: string
│    │     │    └ Prefix: string
│    │     ├ type S3Storage
│    │     │ ├      documentation: S3 storage configuration
│    │     │ │      name: S3Storage
│    │     │ └ properties
│    │     │    ├ BucketArn: string (required, immutable)
│    │     │    ├ OutputPrefix: string (immutable)
│    │     │    ├ OutputKeyTemplate: string (immutable)
│    │     │    ├ StorageClass: string<STANDARD|INTELLIGENT_TIERING|GLACIER_IR> (required, immutable)
│    │     │    ├ CompressionType: string<NONE|GZIP|ZSTD> (required, immutable)
│    │     │    └ ExpectedBucketOwner: string (immutable)
│    │     ├ type SchemaEvolution
│    │     │ ├      documentation: Schema evolution configuration of the destination
│    │     │ │      name: SchemaEvolution
│    │     │ └ properties
│    │     │    └ EnableSchemaEvolution: boolean (required, default=false, immutable)
│    │     ├ type TableCreation
│    │     │ ├      documentation: Table creation configuration of the destination
│    │     │ │      name: TableCreation
│    │     │ └ properties
│    │     │    └ EnableTableCreation: boolean (required, default=true, immutable)
│    │     └ type TopicConfiguration
│    │       ├      documentation: Configuration of topic in a channel
│    │       │      name: TopicConfiguration
│    │       └ properties
│    │          ├ TopicArn: string (required)
│    │          ├ RecordConverter: RecordConverter (required)
│    │          └ RecordSchema: RecordSchema
│    ├[~]  resource AWS::MSK::Cluster
│    │  └ types
│    │     ├[+]  type AuthorizerLogs
│    │     │  ├      name: AuthorizerLogs
│    │     │  └ properties
│    │     │     ├ S3: S3
│    │     │     ├ CloudWatchLogs: CloudWatchLogs
│    │     │     └ Firehose: Firehose
│    │     └[~] type LoggingInfo
│    │       └ properties
│    │          └[+] AuthorizerLogs: AuthorizerLogs
│    └[~]  resource AWS::MSK::Replicator
│       └ types
│          ├[~] type KafkaClusterClientAuthentication
│          │ └ properties
│          │    └[+] SaslOAuthBearer: KafkaClusterSaslOAuthBearerAuthentication
│          ├[+]  type KafkaClusterOAuthClientCredentials
│          │  ├      documentation: Details for SASL/OAUTHBEARER using the standard client_credentials grant. The referenced secret must contain client_id and client_secret.
│          │  │      name: KafkaClusterOAuthClientCredentials
│          │  └ properties
│          │     └ TokenRequestSecretArn: string (required)
│          ├[+]  type KafkaClusterOAuthClientCredentialsAssertion
│          │  ├      documentation: Details for SASL/OAUTHBEARER using the client credentials grant with a JWT client assertion (RFC 7521/7523 Section 2.2). An STS-vended JWT is used as the client_assertion.
│          │  │      name: KafkaClusterOAuthClientCredentialsAssertion
│          │  └ properties
│          │     ├ Audience: string (required)
│          │     ├ SigningAlgorithm: string<RS256|ES384> (required)
│          │     └ TokenRequestSecretArn: string
│          ├[+]  type KafkaClusterOAuthIamJwtBearer
│          │  ├      documentation: Details for SASL/OAUTHBEARER using the JWT Bearer assertion grant (RFC 7523). An STS-vended JWT is used as the assertion.
│          │  │      name: KafkaClusterOAuthIamJwtBearer
│          │  └ properties
│          │     ├ Audience: string (required)
│          │     ├ SigningAlgorithm: string<RS256|ES384> (required)
│          │     └ TokenRequestSecretArn: string
│          └[+]  type KafkaClusterSaslOAuthBearerAuthentication
│             ├      documentation: Details for client authentication using SASL/OAUTHBEARER.
│             │      name: KafkaClusterSaslOAuthBearerAuthentication
│             └ properties
│                ├ TokenEndpointUrl: string (required)
│                ├ ClientCredentials: KafkaClusterOAuthClientCredentials
│                ├ IamJwtBearer: KafkaClusterOAuthIamJwtBearer
│                ├ ClientCredentialsAssertion: KafkaClusterOAuthClientCredentialsAssertion
│                ├ TokenEndpointAuthenticationMethod: string<POST|BASIC|NONE> (required)
│                ├ Scope: string
│                └ TokenEndpointTlsCertificateArn: string
├[~] service aws-mwaaserverless
│ └ resources
│    └[~]  resource AWS::MWAAServerless::Workflow
│       ├ properties
│       │  └[+] Code: Code
│       ├ attributes
│       │  └[+] CodeSnapshottedAt: string
│       └ types
│          ├[+]  type Code
│          │  ├      documentation: The location of code artifacts in Amazon S3 for the workflow. Modeled as a single-member container so it stays extensible to future artifact types (e.g. OCI images).
│          │  │      name: Code
│          │  └ properties
│          │     └ S3Location: CodeS3Location
│          └[+]  type CodeS3Location
│             ├      name: CodeS3Location
│             └ properties
│                ├ Bucket: string (required)
│                ├ ObjectKey: string (required)
│                └ VersionId: string
├[~] service aws-networkmanager
│ └ resources
│    ├[~]  resource AWS::NetworkManager::ConnectAttachment
│    │  └      - arnTemplate: arn:${Partition}:networkmanager::${Account}:attachment/${AttachmentId}
│    │         + arnTemplate: arn:${Partition}:networkmanager::${Account}:attachment/${ResourceId}
│    └[~]  resource AWS::NetworkManager::VpcAttachment
│       └      - arnTemplate: arn:${Partition}:networkmanager::${Account}:attachment/${AttachmentId}
│              + arnTemplate: arn:${Partition}:networkmanager::${Account}:attachment/${ResourceId}
├[~] service aws-observabilityadmin
│ └ resources
│    ├[~]  resource AWS::ObservabilityAdmin::OrganizationCentralizationRule
│    │  └ types
│    │     ├[~] type DestinationLogsConfiguration
│    │     │ └ properties
│    │     │    └[+] TagPropagationConfiguration: TagPropagationConfiguration
│    │     ├[~] type LogsEncryptionConfiguration
│    │     │ └ properties
│    │     │    └[+] EncryptionScope: string<ENCRYPTED_SOURCE_ONLY|NEW_DESTINATION_LOG_GROUPS>
│    │     └[+]  type TagPropagationConfiguration
│    │        ├      name: TagPropagationConfiguration
│    │        └ properties
│    │           ├ DestinationRoleArn: string (required)
│    │           └ TagConflictResolutionStrategy: string<IN_SYNC|ADD_ONLY|UPDATE_SYNC>
│    ├[~]  resource AWS::ObservabilityAdmin::OrganizationTelemetryRule
│    │  └ types
│    │     └[~] type TelemetryDestinationConfiguration
│    │       └ properties
│    │          └[+] KmsKeyArn: string
│    └[~]  resource AWS::ObservabilityAdmin::TelemetryRule
│       └ types
│          └[~] type TelemetryDestinationConfiguration
│            └ properties
│               └[+] KmsKeyArn: string
├[~] service aws-omics
│ └ resources
│    ├[-]  resource AWS::Omics::Reference
│    │  ├      name: Reference
│    │  │      cloudFormationType: AWS::Omics::Reference
│    │  │      documentation: Represents a genomic reference stored in an AWS HealthOmics reference store.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ ReferenceStoreId: string (immutable)
│    │  │  ├ Name: string (immutable)
│    │  │  ├ Description: string (immutable)
│    │  │  └ Tags: Array<TagsItems> (immutable)
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  ├ Id: string
│    │  │  ├ Md5: string
│    │  │  ├ Status: string<ACTIVE|DELETING|DELETED>
│    │  │  ├ CreationTime: string
│    │  │  ├ UpdateTime: string
│    │  │  ├ CreationType: string<IMPORT>
│    │  │  └ CreationJobId: string
│    │  └ types
│    │     └ type TagsItems
│    │       ├      name: TagsItems
│    │       └ properties
│    │          ├ Key: string (required)
│    │          └ Value: string (required)
│    └[+]  resource AWS::Omics::RunCache
│       ├      name: RunCache
│       │      cloudFormationType: AWS::Omics::RunCache
│       │      documentation: Definition of AWS::Omics::RunCache Resource Type
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ CacheBehavior: string<CACHE_ON_FAILURE|CACHE_ALWAYS>
│       │  ├ CacheBucketOwnerId: string (immutable)
│       │  ├ CacheS3Location: string (immutable)
│       │  ├ Description: string
│       │  ├ Name: string
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ Arn: string
│          ├ CreationTime: string
│          ├ Id: string
│          └ Status: string<ACTIVE|DELETED|FAILED>
├[+] service aws-opensearch
│ ├      capitalized: OpenSearch
│ │      cloudFormationNamespace: AWS::OpenSearch
│ │      name: aws-opensearch
│ │      shortName: opensearch
│ └ resources
│    └ resource AWS::OpenSearch::DataSource
│      ├      name: DataSource
│      │      cloudFormationType: AWS::OpenSearch::DataSource
│      │      documentation: Creates a data source for an Amazon OpenSearch Service domain.
│      │      arnTemplate: arn:${Partition}:opensearch:${Region}:${Account}:datasource/${DataSourceName}
│      │      primaryIdentifier: ["Arn"]
│      ├ properties
│      │  ├ DomainName: string (required, immutable)
│      │  ├ Name: string (required, immutable)
│      │  ├ DataSourceType: DataSourceType (required)
│      │  └ Description: string
│      ├ attributes
│      │  ├ Arn: string
│      │  └ Status: string<ACTIVE|DISABLED>
│      └ types
│         ├ type DataSourceType
│         │ ├      documentation: The type of data source.
│         │ │      name: DataSourceType
│         │ └ properties
│         │    └ S3GlueDataCatalog: S3GlueDataCatalog
│         └ type S3GlueDataCatalog
│           ├      documentation: Configuration for an S3 Glue Data Catalog data source.
│           │      name: S3GlueDataCatalog
│           └ properties
│              └ RoleArn: string (required)
├[~] service aws-opensearchserverless
│ └ resources
│    └[~]  resource AWS::OpenSearchServerless::CollectionIndex
│       └      - documentation: Resource schema for AWS::OpenSearchServerless::CollectionIndex
│              + documentation: Resource Type definition for AWS::OpenSearchServerless::CollectionIndex
├[~] service aws-opensearchservice
│ └ resources
│    └[~]  resource AWS::OpenSearchService::Domain
│       └ types
│          └[~] type SoftwareUpdateOptions
│            └ properties
│               └[+] UseLatestServiceSoftwareForBlueGreen: boolean
├[~] service aws-osis
│ └ resources
│    └[-]  resource AWS::OSIS::PipelineBlueprint
│       ├      name: PipelineBlueprint
│       │      cloudFormationType: AWS::OSIS::PipelineBlueprint
│       │      documentation: An OpenSearch Ingestion blueprint, which is a preconfigured template for creating an ingestion pipeline.
│       │      arnTemplate: arn:${Partition}:osis:${Region}:${Account}:blueprint/${BlueprintName}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  └ BlueprintName: string (immutable)
│       └ attributes
│          ├ Arn: string
│          ├ PipelineConfigurationBody: string
│          ├ DisplayName: string
│          ├ DisplayDescription: string
│          ├ Service: string
│          └ UseCase: string
├[~] service aws-personalize
│ └ resources
│    ├[-]  resource AWS::Personalize::DataDeletionJob
│    │  ├      name: DataDeletionJob
│    │  │      cloudFormationType: AWS::Personalize::DataDeletionJob
│    │  │      documentation: Resource Type definition for AWS::Personalize::DataDeletionJob
│    │  │      arnTemplate: arn:${Partition}:personalize:${Region}:${Account}:data-deletion-job/${ResourceId}
│    │  │      primaryIdentifier: ["DataDeletionJobArn"]
│    │  ├ properties
│    │  │  ├ JobName: string (immutable)
│    │  │  ├ DatasetGroupArn: string (immutable)
│    │  │  ├ DataSource: DataSource (immutable)
│    │  │  └ RoleArn: string (immutable)
│    │  ├ attributes
│    │  │  ├ DataDeletionJobArn: string
│    │  │  ├ Status: string
│    │  │  ├ CreationDateTime: string
│    │  │  └ LastUpdatedDateTime: string
│    │  └ types
│    │     └ type DataSource
│    │       ├      documentation: The Amazon S3 bucket that contains the list of userIds to delete.
│    │       │      name: DataSource
│    │       └ properties
│    │          └ DataLocation: string
│    ├[~]  resource AWS::Personalize::Dataset
│    │  ├      - tagInformation: undefined
│    │  │      + tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  └ properties
│    │     └[+] Tags: Array<tag> (immutable)
│    ├[~]  resource AWS::Personalize::DatasetGroup
│    │  ├      - tagInformation: undefined
│    │  │      + tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  └ properties
│    │     └[+] Tags: Array<tag> (immutable)
│    ├[+]  resource AWS::Personalize::EventTracker
│    │  ├      name: EventTracker
│    │  │      cloudFormationType: AWS::Personalize::EventTracker
│    │  │      documentation: Resource schema for AWS::Personalize::EventTracker
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:personalize:${Region}:${Account}:event-tracker/${ResourceId}
│    │  │      primaryIdentifier: ["EventTrackerArn"]
│    │  ├ properties
│    │  │  ├ Name: string (required, immutable)
│    │  │  ├ DatasetGroupArn: string (required, immutable)
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ EventTrackerArn: string
│    │     └ TrackingId: string
│    ├[+]  resource AWS::Personalize::MetricAttribution
│    │  ├      name: MetricAttribution
│    │  │      cloudFormationType: AWS::Personalize::MetricAttribution
│    │  │      documentation: Creates a metric attribution for reporting on recommendation impact in Amazon Personalize.
│    │  │      primaryIdentifier: ["MetricAttributionArn"]
│    │  ├ properties
│    │  │  ├ Name: string (required, immutable)
│    │  │  ├ DatasetGroupArn: string (required, immutable)
│    │  │  ├ Metrics: Array<MetricAttribute> (required, immutable)
│    │  │  └ MetricsOutputConfig: MetricsOutputConfig (required)
│    │  ├ attributes
│    │  │  ├ MetricAttributionArn: string
│    │  │  └ Status: string
│    │  └ types
│    │     ├ type MetricAttribute
│    │     │ ├      documentation: A metric attribute for the metric attribution.
│    │     │ │      name: MetricAttribute
│    │     │ └ properties
│    │     │    ├ EventType: string (required)
│    │     │    ├ MetricName: string (required)
│    │     │    └ Expression: string (required)
│    │     ├ type MetricsOutputConfig
│    │     │ ├      documentation: The output configuration details for the metric attribution.
│    │     │ │      name: MetricsOutputConfig
│    │     │ └ properties
│    │     │    ├ S3DataDestination: S3DataDestination
│    │     │    └ RoleArn: string (required)
│    │     └ type S3DataDestination
│    │       ├      documentation: The configuration details of an Amazon S3 output bucket.
│    │       │      name: S3DataDestination
│    │       └ properties
│    │          ├ Path: string (required)
│    │          └ KmsKeyArn: string
│    ├[-]  resource AWS::Personalize::Recipe
│    │  ├      name: Recipe
│    │  │      cloudFormationType: AWS::Personalize::Recipe
│    │  │      documentation: Resource Type definition for AWS::Personalize::Recipe
│    │  │      arnTemplate: arn:${Partition}:personalize:::recipe/${ResourceId}
│    │  │      primaryIdentifier: ["RecipeArn"]
│    │  ├ properties
│    │  │  └ Name: string (immutable)
│    │  └ attributes
│    │     ├ RecipeArn: string
│    │     ├ AlgorithmArn: string
│    │     ├ FeatureTransformationArn: string
│    │     ├ Status: string
│    │     ├ Description: string
│    │     ├ RecipeType: string
│    │     ├ CreationDateTime: string
│    │     └ LastUpdatedDateTime: string
│    ├[~]  resource AWS::Personalize::Schema
│    │  ├      - tagInformation: undefined
│    │  │      + tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  └ properties
│    │     └[+] Tags: Array<tag> (immutable)
│    └[~]  resource AWS::Personalize::Solution
│       ├      - tagInformation: undefined
│       │      + tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       └ properties
│          └[+] Tags: Array<tag> (immutable)
├[~] service aws-pinpoint
│ └ resources
│    └[~]  resource AWS::Pinpoint::EmailTemplate
│       └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/EMAIL
│              + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/SMS
├[~] service aws-quicksight
│ └ resources
│    ├[~]  resource AWS::QuickSight::Analysis
│    │  └      - arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:analysis/${AnalysisId}
│    │         + arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:analysis/${ResourceId}
│    ├[+]  resource AWS::QuickSight::ApprovalPolicy
│    │  ├      name: ApprovalPolicy
│    │  │      cloudFormationType: AWS::QuickSight::ApprovalPolicy
│    │  │      documentation: Definition of the AWS::QuickSight::ApprovalPolicy Resource Type.
│    │  │      arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:approval-policy/${ResourceId}
│    │  │      primaryIdentifier: ["PolicyId"]
│    │  ├ properties
│    │  │  ├ ApplicableTo: ApplicableTo (required)
│    │  │  ├ AssetTypes: Array<json> (required)
│    │  │  ├ Description: string
│    │  │  ├ Actions: Array<json> (required)
│    │  │  ├ ApprovalGroups: Array<string> (required)
│    │  │  ├ PolicyId: string (required, immutable)
│    │  │  └ Name: string (required)
│    │  ├ attributes
│    │  │  ├ CreatedAt: string
│    │  │  ├ PolicyArn: string
│    │  │  └ UpdatedAt: string
│    │  └ types
│    │     └ type ApplicableTo
│    │       ├      documentation: Scoping: who the policy applies to.
│    │       │      GROUP: `groupArns` required (one or more group ARNs).
│    │       │      name: ApplicableTo
│    │       └ properties
│    │          ├ GroupArns: Array<string>
│    │          └ Type: json (required)
│    ├[+]  resource AWS::QuickSight::DLPSetting
│    │  ├      name: DLPSetting
│    │  │      cloudFormationType: AWS::QuickSight::DLPSetting
│    │  │      documentation: Definition of the AWS::QuickSight::DLPSetting Resource Type.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:dlpsetting/${ResourceId}
│    │  │      primaryIdentifier: ["AwsAccountId","DlpSettingId"]
│    │  ├ properties
│    │  │  ├ AwsAccountId: string (immutable)
│    │  │  ├ DlpSettingId: string (required, immutable)
│    │  │  ├ Enabled: boolean (required, default=false)
│    │  │  ├ Name: string (required)
│    │  │  ├ ProviderConfig: ProviderConfig (required)
│    │  │  ├ ProviderOutageAction: string<ALLOW|WARN|BLOCK> (required)
│    │  │  ├ ProviderType: string<MICROSOFT_PURVIEW> (required)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  ├ CreatedAt: string
│    │  │  ├ Status: string<ACTIVE|INACTIVE>
│    │  │  └ UpdatedAt: string
│    │  └ types
│    │     ├ type LabelActionMapping
│    │     │ ├      name: LabelActionMapping
│    │     │ └ properties
│    │     │    ├ LabelId: string (required)
│    │     │    ├ LabelName: string (required)
│    │     │    └ Action: string<ALLOW|WARN|BLOCK> (required)
│    │     ├ type MicrosoftPurviewCredentials
│    │     │ ├      name: MicrosoftPurviewCredentials
│    │     │ └ properties
│    │     │    └ SecretArn: string (required)
│    │     ├ type MicrosoftPurviewProviderConfig
│    │     │ ├      name: MicrosoftPurviewProviderConfig
│    │     │ └ properties
│    │     │    ├ Credentials: MicrosoftPurviewCredentials (required)
│    │     │    ├ LabelActionMappings: Array<LabelActionMapping> (required)
│    │     │    └ UnmappedAction: string<ALLOW|WARN|BLOCK> (required)
│    │     └ type ProviderConfig
│    │       ├      name: ProviderConfig
│    │       └ properties
│    │          └ MicrosoftPurview: MicrosoftPurviewProviderConfig (required)
│    ├[~]  resource AWS::QuickSight::Folder
│    │  └      - arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:folder/${FolderId}
│    │         + arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:folder/${ResourceId}
│    ├[+]  resource AWS::QuickSight::LimitsProfile
│    │  ├      name: LimitsProfile
│    │  │      cloudFormationType: AWS::QuickSight::LimitsProfile
│    │  │      documentation: Definition of AWS::QuickSight::LimitsProfile Resource Type
│    │  │      arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:limits-profile/${ResourceId}
│    │  │      primaryIdentifier: ["AccountId","ProfileId"]
│    │  ├ properties
│    │  │  ├ AccountId: string (required, immutable)
│    │  │  ├ Description: string
│    │  │  ├ ProfileName: string (required)
│    │  │  └ ResourceLimits: Map<string, ProfileLimitValue> (required)
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  ├ CreatedAt: string
│    │  │  ├ ProfileId: string
│    │  │  └ UpdatedAt: string
│    │  └ types
│    │     └ type ProfileLimitValue
│    │       ├      name: ProfileLimitValue
│    │       └ properties
│    │          ├ MaxValue: number (required)
│    │          └ Unit: string<MB|GB|HOURS|DAYS> (required)
│    ├[~]  resource AWS::QuickSight::Topic
│    │  ├ properties
│    │  │  └ CustomInstructions: (documentation changed)
│    │  └ types
│    │     ├[~] type CustomInstructions
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: <p>Instructions that provide additional guidance and context for response generation.</p>
│    │     │ └ properties
│    │     │    └ CustomInstructionsString: (documentation changed)
│    │     └[~] type TopicFilter
│    │       └ properties
│    │          ├ FilterClass: - string<ENFORCED_VALUE_FILTER|CONDITIONAL_VALUE_FILTER|NAMED_VALUE_FILTER>
│    │          │              + string<ENFORCED_VALUE_FILTER|CONDITIONAL_VALUE_FILTER|NAMED_VALUE_FILTER|DASHBOARD_DEFAULT_FILTER>
│    │          └ FilterType: - string<CATEGORY_FILTER|NUMERIC_EQUALITY_FILTER|NUMERIC_RANGE_FILTER|DATE_RANGE_FILTER|RELATIVE_DATE_FILTER>
│    │                        + string<CATEGORY_FILTER|NUMERIC_EQUALITY_FILTER|NUMERIC_RANGE_FILTER|DATE_RANGE_FILTER|RELATIVE_DATE_FILTER|NULL_FILTER>
│    └[+]  resource AWS::QuickSight::TopicV2
│       ├      name: TopicV2
│       │      cloudFormationType: AWS::QuickSight::TopicV2
│       │      documentation: Definition of the AWS::QuickSight::TopicV2 Resource Type.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["AwsAccountId","TopicId"]
│       ├ properties
│       │  ├ AwsAccountId: string (immutable)
│       │  ├ CustomInstructions: CustomInstructions
│       │  ├ DataSets: Array<DataSetReference>
│       │  ├ DataSetRelations: Array<DataSetRelation>
│       │  ├ Description: string
│       │  ├ FolderArns: Array<string> (immutable)
│       │  ├ Name: string
│       │  ├ Permissions: Array<ResourcePermission>
│       │  ├ Tags: Array<tag> (immutable)
│       │  └ TopicId: string (immutable)
│       ├ attributes
│       │  └ Arn: string
│       └ types
│          ├ type CustomInstructions
│          │ ├      name: CustomInstructions
│          │ └ properties
│          │    └ CustomInstructionsString: string (required)
│          ├ type DataSetReference
│          │ ├      documentation: A dataset reference used by a V2 (SEMANTIC_VIEW) topic.
│          │ │      name: DataSetReference
│          │ └ properties
│          │    ├ DataSetArn: string (required)
│          │    └ DataSetName: string
│          ├ type DataSetRelation
│          │ ├      documentation: A relation between two datasets referenced by a V2 (SEMANTIC_VIEW) topic.
│          │ │      name: DataSetRelation
│          │ └ properties
│          │    ├ Left: DataSetRelationEndpoint (required)
│          │    └ Right: DataSetRelationEndpoint (required)
│          ├ type DataSetRelationEndpoint
│          │ ├      name: DataSetRelationEndpoint
│          │ └ properties
│          │    ├ DataSetArn: string (required)
│          │    └ ColumnNames: Array<string> (required)
│          └ type ResourcePermission
│            ├      name: ResourcePermission
│            └ properties
│               ├ Principal: string (required)
│               └ Actions: Array<string> (required)
├[~] service aws-rds
│ └ resources
│    ├[+]  resource AWS::RDS::ClusterSnapshot
│    │  ├      name: ClusterSnapshot
│    │  │      cloudFormationType: AWS::RDS::ClusterSnapshot
│    │  │      documentation: Creates a snapshot of a DB cluster.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["DBClusterSnapshotArn"]
│    │  ├ properties
│    │  │  ├ DBClusterSnapshotIdentifier: string (required, immutable)
│    │  │  ├ DBClusterIdentifier: string (required, immutable)
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ DBClusterSnapshotArn: string
│    │     ├ AvailabilityZones: Array<string>
│    │     ├ Engine: string
│    │     ├ EngineVersion: string
│    │     ├ SnapshotType: string
│    │     ├ AllocatedStorage: integer
│    │     ├ Status: string
│    │     ├ Port: integer
│    │     ├ VpcId: string
│    │     ├ ClusterCreateTime: string
│    │     ├ MasterUsername: string
│    │     ├ EngineMode: string
│    │     ├ LicenseModel: string
│    │     ├ StorageEncrypted: boolean
│    │     ├ KmsKeyId: string
│    │     ├ IAMDatabaseAuthenticationEnabled: boolean
│    │     ├ DbClusterResourceId: string
│    │     └ SnapshotCreateTime: string
│    ├[~]  resource AWS::RDS::DBParameterGroup
│    │  ├      - arnTemplate: arn:${Partition}:rds:${Region}:${Account}:pg:${ParameterGroupName}
│    │  │      + arnTemplate: arn:${Partition}:rds:${Region}:${Account}:pg:${DBParameterGroupName}
│    │  └ attributes
│    │     └[+] DBParameterGroupArn: string
│    └[+]  resource AWS::RDS::DBSnapshot
│       ├      name: DBSnapshot
│       │      cloudFormationType: AWS::RDS::DBSnapshot
│       │      documentation: Creates a snapshot of a DB instance.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["DBSnapshotArn"]
│       ├ properties
│       │  ├ DBSnapshotIdentifier: string (required, immutable)
│       │  ├ DBInstanceIdentifier: string (required, immutable)
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ DBSnapshotArn: string
│          ├ Engine: string
│          ├ EngineVersion: string
│          ├ AllocatedStorage: integer
│          ├ Status: string
│          ├ Port: integer
│          ├ AvailabilityZone: string
│          ├ VpcId: string
│          ├ InstanceCreateTime: string
│          ├ MasterUsername: string
│          ├ SnapshotType: string
│          ├ Iops: integer
│          ├ OptionGroupName: string
│          ├ SnapshotCreateTime: string
│          ├ Encrypted: boolean
│          ├ KmsKeyId: string
│          ├ StorageType: string
│          ├ LicenseModel: string
│          ├ IAMDatabaseAuthenticationEnabled: boolean
│          ├ DbiResourceId: string
│          ├ OriginalSnapshotCreateTime: string
│          └ StorageThroughput: integer
├[~] service aws-redshift
│ └ resources
│    └[+]  resource AWS::Redshift::SnapshotSchedule
│       ├      name: SnapshotSchedule
│       │      cloudFormationType: AWS::Redshift::SnapshotSchedule
│       │      documentation: Creates a snapshot schedule that lets you set up automatic snapshots of your Amazon Redshift cluster at regular intervals.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:redshift:${Region}:${Account}:snapshotschedule:${ScheduleIdentifier}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ ScheduleIdentifier: string (required, immutable)
│       │  ├ ScheduleDescription: string (immutable)
│       │  ├ ScheduleDefinitions: Array<string> (required)
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ Arn: string
│          └ AssociatedClusterCount: integer
├[~] service aws-redshiftserverless
│ └ resources
│    └[-]  resource AWS::RedshiftServerless::RecoveryPoint
│       ├      name: RecoveryPoint
│       │      cloudFormationType: AWS::RedshiftServerless::RecoveryPoint
│       │      documentation: Represents an automatically created recovery point for an Amazon Redshift Serverless namespace. Recovery points are created every 30 minutes and kept for 24 hours.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:redshift-serverless:${Region}:${Account}:recoverypoint/${RecoveryPointId}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  └ NamespaceName: string (immutable)
│       └ attributes
│          ├ Arn: string
│          ├ RecoveryPointId: string
│          ├ RecoveryPointCreateTime: string
│          ├ TotalSizeInMegaBytes: number
│          ├ NamespaceArn: string
│          └ Tags: Array<tag>
├[~] service aws-rekognition
│ └ resources
│    └[+]  resource AWS::Rekognition::Dataset
│       ├      name: Dataset
│       │      cloudFormationType: AWS::Rekognition::Dataset
│       │      documentation: The AWS::Rekognition::Dataset type creates an Amazon Rekognition Custom Labels dataset.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["DatasetArn"]
│       ├ properties
│       │  ├ ProjectArn: string (immutable)
│       │  ├ DatasetType: string<TRAIN|TEST> (required, immutable)
│       │  └ Tags: Array<tag>
│       └ attributes
│          └ DatasetArn: string
├[~] service aws-route53
│ └ resources
│    └[~]  resource AWS::Route53::RecordSet
│       ├ properties
│       │  └ Failover: - string
│       │              + string<PRIMARY|SECONDARY>
│       └ types
│          └[~] type AliasTarget
│            └ properties
│               └ EvaluateTargetHealth: - boolean
│                                       + boolean (default=false)
├[~] service aws-route53globalresolver
│ └ resources
│    └[~]  resource AWS::Route53GlobalResolver::GlobalResolver
│       └ properties
│          └ Regions: (documentation changed)
├[~] service aws-s3
│ └ resources
│    └[~]  resource AWS::S3::Bucket
│       ├ attributes
│       │  └ MetadataConfiguration.AnnotationTableConfiguration.TableArn: (documentation changed)
│       └ types
│          ├[~] type AnnotationTableConfiguration
│          │ ├      - documentation: undefined
│          │ │      + documentation: The annotation table configuration for an S3 Metadata configuration. The annotation table tracks all annotations on objects in your bucket so that you can query annotation data at scale.
│          │ │        If you've disabled your annotation table configuration and now want to re-enable it, you must first manually delete the old annotation table from your AWS managed table bucket. Otherwise, the newly re-enabled annotation table configuration will enter a failed state because the annotation table already exists in the table bucket.
│          │ └ properties
│          │    ├ ConfigurationState: (documentation changed)
│          │    └ TableArn: (documentation changed)
│          └[~] type MetadataConfiguration
│            └ properties
│               └ AnnotationTableConfiguration: (documentation changed)
├[~] service aws-sagemaker
│ └ resources
│    ├[+]  resource AWS::SageMaker::Artifact
│    │  ├      name: Artifact
│    │  │      cloudFormationType: AWS::SageMaker::Artifact
│    │  │      documentation: Resource type definition for AWS::SageMaker::Artifact. An artifact is a lineage tracking entity that represents a URI addressable object or data, such as an S3 URI of a dataset or the ECR registry path of an image.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:sagemaker:${Region}:${Account}:artifact/${HashOfArtifactSource}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ ArtifactName: string
│    │  │  ├ ArtifactType: string (required, immutable)
│    │  │  ├ Source: ArtifactSource (required, immutable)
│    │  │  ├ Properties: Map<string, string>
│    │  │  ├ MetadataProperties: MetadataProperties (immutable)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  ├ CreationTime: string
│    │  │  └ LastModifiedTime: string
│    │  └ types
│    │     ├ type ArtifactSource
│    │     │ ├      name: ArtifactSource
│    │     │ └ properties
│    │     │    ├ SourceUri: string (required)
│    │     │    └ SourceTypes: Array<ArtifactSourceType>
│    │     ├ type ArtifactSourceType
│    │     │ ├      name: ArtifactSourceType
│    │     │ └ properties
│    │     │    ├ SourceIdType: string<MD5Hash|S3ETag|S3Version|Custom> (required)
│    │     │    └ Value: string (required)
│    │     └ type MetadataProperties
│    │       ├      name: MetadataProperties
│    │       └ properties
│    │          ├ CommitId: string
│    │          ├ Repository: string
│    │          ├ GeneratedBy: string
│    │          └ ProjectId: string
│    ├[~]  resource AWS::SageMaker::EndpointConfig
│    │  ├ properties
│    │  │  └[+] MetricsConfig: MetricsConfig (immutable)
│    │  └ types
│    │     ├[+]  type CoreDumpConfig
│    │     │  ├      name: CoreDumpConfig
│    │     │  └ properties
│    │     │     ├ KmsKeyId: string
│    │     │     └ DestinationS3Uri: string (required)
│    │     ├[~] type ManagedInstanceScaling
│    │     │ └ properties
│    │     │    └[+] ScaleInPolicy: ScaleInPolicy
│    │     ├[+]  type MetricsConfig
│    │     │  ├      name: MetricsConfig
│    │     │  └ properties
│    │     │     ├ EnableEnhancedMetrics: boolean
│    │     │     ├ EnableDetailedObservability: boolean
│    │     │     └ MetricPublishFrequencyInSeconds: integer
│    │     ├[+]  type PrefixAwareRoutingConfig
│    │     │  ├      name: PrefixAwareRoutingConfig
│    │     │  └ properties
│    │     │     ├ ConcurrencyThreshold: integer
│    │     │     └ PrefixLength: integer
│    │     ├[~] type ProductionVariant
│    │     │ └ properties
│    │     │    └[+] CoreDumpConfig: CoreDumpConfig
│    │     ├[~] type RoutingConfig
│    │     │ └ properties
│    │     │    └[+] PrefixAwareRoutingConfig: PrefixAwareRoutingConfig
│    │     └[+]  type ScaleInPolicy
│    │        ├      name: ScaleInPolicy
│    │        └ properties
│    │           ├ Strategy: string (required)
│    │           ├ CooldownInMinutes: integer
│    │           └ MaximumStepSize: integer
│    ├[~]  resource AWS::SageMaker::ExperimentTrialComponent
│    │  ├      - documentation: Resource type definition for AWS SageMaker Experiment Trial Component
│    │  │      + documentation: Resource Type definition for AWS::SageMaker::ExperimentTrialComponent
│    │  │      - primaryIdentifier: ["Arn"]
│    │  │      + primaryIdentifier: ["Id"]
│    │  ├ properties
│    │  │  ├ DisplayName: (documentation changed)
│    │  │  ├ EndTime: (documentation changed)
│    │  │  ├ MetadataProperties: (documentation changed)
│    │  │  ├ StartTime: (documentation changed)
│    │  │  ├ Status: (documentation changed)
│    │  │  ├ Tags: (documentation changed)
│    │  │  └ TrialComponentName: (documentation changed)
│    │  ├ attributes
│    │  │  ├ Arn: (documentation changed)
│    │  │  ├ CreationTime: (documentation changed)
│    │  │  ├[+] Id: string
│    │  │  ├ LastModifiedTime: (documentation changed)
│    │  │  └ LineageGroupArn: (documentation changed)
│    │  └ types
│    │     ├[~] type MetadataProperties
│    │     │ ├      - documentation: Metadata properties of the tracking entity, trial, or trial component.
│    │     │ │      + documentation: undefined
│    │     │ └ properties
│    │     │    ├ CommitId: (documentation changed)
│    │     │    ├ GeneratedBy: (documentation changed)
│    │     │    ├ ProjectId: (documentation changed)
│    │     │    └ Repository: (documentation changed)
│    │     ├[~] type Status
│    │     │ ├      - documentation: The status of the trial component.
│    │     │ │      + documentation: undefined
│    │     │ └ properties
│    │     │    ├ Message: (documentation changed)
│    │     │    └ PrimaryStatus: - string<InProgress|Completed|Failed|Stopping|Stopped>
│    │     │                     + string
│    │     │                     (documentation changed)
│    │     └[~] type TagsItems
│    │       └ properties
│    │          ├ Key: (documentation changed)
│    │          └ Value: (documentation changed)
│    ├[+]  resource AWS::SageMaker::HumanTaskUi
│    │  ├      name: HumanTaskUi
│    │  │      cloudFormationType: AWS::SageMaker::HumanTaskUi
│    │  │      documentation: Resource Type definition for AWS::SageMaker::HumanTaskUi
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:sagemaker:${Region}:${Account}:human-task-ui/${HumanTaskUiName}
│    │  │      primaryIdentifier: ["HumanTaskUiArn"]
│    │  ├ properties
│    │  │  ├ HumanTaskUiName: string (required, immutable)
│    │  │  ├ UiTemplate: UiTemplate (immutable)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ HumanTaskUiArn: string
│    │  │  └ CreationTime: string
│    │  └ types
│    │     └ type UiTemplate
│    │       ├      documentation: The Liquid template for the worker user interface.
│    │       │      name: UiTemplate
│    │       └ properties
│    │          └ Content: string (required)
│    ├[-]  resource AWS::SageMaker::ModelCardExportJob
│    │  ├      name: ModelCardExportJob
│    │  │      cloudFormationType: AWS::SageMaker::ModelCardExportJob
│    │  │      documentation: Definition of AWS::SageMaker::ModelCardExportJob Resource Type
│    │  │      primaryIdentifier: ["ModelCardExportJobArn"]
│    │  ├ properties
│    │  │  ├ ModelCardExportJobName: string (required, immutable)
│    │  │  ├ ModelCardName: string (required, immutable)
│    │  │  ├ ModelCardVersion: integer (immutable)
│    │  │  └ OutputConfig: ModelCardExportOutputConfig (required, immutable)
│    │  ├ attributes
│    │  │  ├ ModelCardExportJobArn: string
│    │  │  ├ Status: string<InProgress|Completed|Failed>
│    │  │  ├ CreatedAt: string
│    │  │  ├ LastModifiedAt: string
│    │  │  └ ExportArtifacts: ModelCardExportArtifacts
│    │  └ types
│    │     ├ type ModelCardExportArtifacts
│    │     │ ├      documentation: The artifacts of the model card export job.
│    │     │ │      name: ModelCardExportArtifacts
│    │     │ └ properties
│    │     │    └ S3ExportArtifacts: string (required)
│    │     └ type ModelCardExportOutputConfig
│    │       ├      documentation: Configure the export output details for an Amazon SageMaker Model Card.
│    │       │      name: ModelCardExportOutputConfig
│    │       └ properties
│    │          └ S3OutputPath: string (required)
│    ├[-]  resource AWS::SageMaker::MonitoringScheduleAlert
│    │  ├      name: MonitoringScheduleAlert
│    │  │      cloudFormationType: AWS::SageMaker::MonitoringScheduleAlert
│    │  │      documentation: Resource type definition for AWS::SageMaker::MonitoringScheduleAlert. A monitoring alert associated with a SageMaker monitoring schedule.
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ MonitoringScheduleName: string (required, immutable)
│    │  │  ├ MonitoringAlertName: string (required, immutable)
│    │  │  ├ DatapointsToAlert: integer (required, immutable)
│    │  │  └ EvaluationPeriod: integer (required, immutable)
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  ├ AlertStatus: string<InAlert|OK>
│    │  │  ├ CreationTime: string
│    │  │  ├ LastModifiedTime: string
│    │  │  └ Actions: MonitoringAlertActions
│    │  └ types
│    │     ├ type ModelDashboardIndicatorAction
│    │     │ ├      documentation: An alert action taken to light up an icon on the Amazon SageMaker Model Dashboard when an alert goes into InAlert status.
│    │     │ │      name: ModelDashboardIndicatorAction
│    │     │ └ properties
│    │     │    └ Enabled: boolean
│    │     └ type MonitoringAlertActions
│    │       ├      documentation: A list of alert actions taken in response to an alert going into InAlert status.
│    │       │      name: MonitoringAlertActions
│    │       └ properties
│    │          └ ModelDashboardIndicator: ModelDashboardIndicatorAction
│    ├[-]  resource AWS::SageMaker::TransformJob
│    │  ├      name: TransformJob
│    │  │      cloudFormationType: AWS::SageMaker::TransformJob
│    │  │      documentation: Resource type definition for AWS::SageMaker::TransformJob. A transform job uses a trained model to get inferences on a dataset and saves these results to an Amazon S3 location that you specify.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:sagemaker:${Region}:${Account}:transform-job/${TransformJobName}
│    │  │      primaryIdentifier: ["TransformJobArn"]
│    │  ├ properties
│    │  │  ├ ModelName: string (required, immutable)
│    │  │  ├ MaxConcurrentTransforms: integer (immutable)
│    │  │  ├ ModelClientConfig: ModelClientConfig (immutable)
│    │  │  ├ MaxPayloadInMB: integer (immutable)
│    │  │  ├ BatchStrategy: string<MultiRecord|SingleRecord> (immutable)
│    │  │  ├ Environment: Map<string, string> (immutable)
│    │  │  ├ TransformInput: TransformInput (required, immutable)
│    │  │  ├ TransformOutput: TransformOutput (required, immutable)
│    │  │  ├ DataCaptureConfig: DataCaptureConfig (immutable)
│    │  │  ├ TransformResources: TransformResources (required, immutable)
│    │  │  ├ DataProcessing: DataProcessing (immutable)
│    │  │  ├ ExperimentConfig: ExperimentConfig (immutable)
│    │  │  └ Tags: Array<TagsItems> (immutable)
│    │  ├ attributes
│    │  │  ├ TransformJobArn: string
│    │  │  ├ TransformJobName: string (required)
│    │  │  ├ TransformJobStatus: string<InProgress|Completed|Failed|Stopping|Stopped>
│    │  │  ├ CreationTime: string
│    │  │  ├ TransformStartTime: string
│    │  │  └ TransformEndTime: string
│    │  └ types
│    │     ├ type DataCaptureConfig
│    │     │ ├      documentation: Configuration to control how SageMaker captures inference data.
│    │     │ │      name: DataCaptureConfig
│    │     │ └ properties
│    │     │    ├ DestinationS3Uri: string (required)
│    │     │    ├ KmsKeyId: string
│    │     │    └ GenerateInferenceId: boolean
│    │     ├ type DataProcessing
│    │     │ ├      documentation: The data structure used to specify the data to be used for inference in a batch transform job.
│    │     │ │      name: DataProcessing
│    │     │ └ properties
│    │     │    ├ InputFilter: string
│    │     │    ├ OutputFilter: string
│    │     │    └ JoinSource: string<Input|None>
│    │     ├ type DataSource
│    │     │ ├      documentation: Describes the location of the channel data.
│    │     │ │      name: DataSource
│    │     │ └ properties
│    │     │    └ S3DataSource: S3DataSource (required)
│    │     ├ type ExperimentConfig
│    │     │ ├      documentation: Associates a SageMaker job as a trial component with an experiment and trial.
│    │     │ │      name: ExperimentConfig
│    │     │ └ properties
│    │     │    ├ ExperimentName: string
│    │     │    ├ TrialName: string
│    │     │    └ TrialComponentDisplayName: string
│    │     ├ type ModelClientConfig
│    │     │ ├      documentation: Configures the timeout and maximum number of retries for processing a transform job invocation.
│    │     │ │      name: ModelClientConfig
│    │     │ └ properties
│    │     │    ├ InvocationsTimeoutInSeconds: integer
│    │     │    └ InvocationsMaxRetries: integer
│    │     ├ type S3DataSource
│    │     │ ├      documentation: The S3 location of the data source.
│    │     │ │      name: S3DataSource
│    │     │ └ properties
│    │     │    ├ S3DataType: string<ManifestFile|S3Prefix|AugmentedManifestFile|Converse> (required)
│    │     │    └ S3Uri: string (required)
│    │     ├ type TagsItems
│    │     │ ├      name: TagsItems
│    │     │ └ properties
│    │     │    ├ Key: string (required)
│    │     │    └ Value: string (required)
│    │     ├ type TransformInput
│    │     │ ├      documentation: Describes the input source and the way the transform job consumes it.
│    │     │ │      name: TransformInput
│    │     │ └ properties
│    │     │    ├ DataSource: DataSource (required)
│    │     │    ├ ContentType: string
│    │     │    ├ CompressionType: string<None|Gzip>
│    │     │    └ SplitType: string<None|Line|RecordIO|TFRecord>
│    │     ├ type TransformOutput
│    │     │ ├      documentation: Describes the results of the transform job.
│    │     │ │      name: TransformOutput
│    │     │ └ properties
│    │     │    ├ S3OutputPath: string (required)
│    │     │    ├ Accept: string
│    │     │    ├ AssembleWith: string<None|Line>
│    │     │    └ KmsKeyId: string
│    │     └ type TransformResources
│    │       ├      documentation: Describes the resources, including ML instance types and ML instance count, to use for the transform job.
│    │       │      name: TransformResources
│    │       └ properties
│    │          ├ InstanceType: string (required)
│    │          ├ InstanceCount: integer (required)
│    │          └ VolumeKmsKeyId: string
│    ├[~]  resource AWS::SageMaker::UserProfile
│    │  └ types
│    │     └[~] type StudioWebPortalSettings
│    │       └ properties
│    │          └ HiddenInstanceTypes: - Array<string<system|ml.t3.micro|ml.t3.small|ml.t3.medium|ml.t3.large|ml.t3.xlarge|ml.t3.2xlarge|ml.m5.large|ml.m5.xlarge|ml.m5.2xlarge|ml.m5.4xlarge|ml.m5.8xlarge|ml.m5.12xlarge|ml.m5.16xlarge|ml.m5.24xlarge|ml.m5d.large|ml.m5d.xlarge|ml.m5d.2xlarge|ml.m5d.4xlarge|ml.m5d.8xlarge|ml.m5d.12xlarge|ml.m5d.16xlarge|ml.m5d.24xlarge|ml.c5.large|ml.c5.xlarge|ml.c5.2xlarge|ml.c5.4xlarge|ml.c5.9xlarge|ml.c5.12xlarge|ml.c5.18xlarge|ml.c5.24xlarge|ml.p3.2xlarge|ml.p3.8xlarge|ml.p3.16xlarge|ml.p3dn.24xlarge|ml.g4dn.xlarge|ml.g4dn.2xlarge|ml.g4dn.4xlarge|ml.g4dn.8xlarge|ml.g4dn.12xlarge|ml.g4dn.16xlarge|ml.r5.large|ml.r5.xlarge|ml.r5.2xlarge|ml.r5.4xlarge|ml.r5.8xlarge|ml.r5.12xlarge|ml.r5.16xlarge|ml.r5.24xlarge|ml.g5.xlarge|ml.g5.2xlarge|ml.g5.4xlarge|ml.g5.8xlarge|ml.g5.12xlarge|ml.g5.16xlarge|ml.g5.24xlarge|ml.g5.48xlarge|ml.g6.xlarge|ml.g6.2xlarge|ml.g6.4xlarge|ml.g6.8xlarge|ml.g6.12xlarge|ml.g6.16xlarge|ml.g6.24xlarge|ml.g6.48xlarge|ml.g6e.xlarge|ml.g6e.2xlarge|ml.g6e.4xlarge|ml.g6e.8xlarge|ml.g6e.12xlarge|ml.g6e.16xlarge|ml.g6e.24xlarge|ml.g6e.48xlarge|ml.geospatial.interactive|ml.p4d.24xlarge|ml.p4de.24xlarge|ml.trn1.2xlarge|ml.trn1.32xlarge|ml.trn1n.32xlarge|ml.p5.48xlarge|ml.p5e.48xlarge|ml.p5en.48xlarge|ml.m6i.large|ml.m6i.xlarge|ml.m6i.2xlarge|ml.m6i.4xlarge|ml.m6i.8xlarge|ml.m6i.12xlarge|ml.m6i.16xlarge|ml.m6i.24xlarge|ml.m6i.32xlarge|ml.m7i.large|ml.m7i.xlarge|ml.m7i.2xlarge|ml.m7i.4xlarge|ml.m7i.8xlarge|ml.m7i.12xlarge|ml.m7i.16xlarge|ml.m7i.24xlarge|ml.m7i.48xlarge|ml.c6i.large|ml.c6i.xlarge|ml.c6i.2xlarge|ml.c6i.4xlarge|ml.c6i.8xlarge|ml.c6i.12xlarge|ml.c6i.16xlarge|ml.c6i.24xlarge|ml.c6i.32xlarge|ml.c7i.large|ml.c7i.xlarge|ml.c7i.2xlarge|ml.c7i.4xlarge|ml.c7i.8xlarge|ml.c7i.12xlarge|ml.c7i.16xlarge|ml.c7i.24xlarge|ml.c7i.48xlarge|ml.r6i.large|ml.r6i.xlarge|ml.r6i.2xlarge|ml.r6i.4xlarge|ml.r6i.8xlarge|ml.r6i.12xlarge|ml.r6i.16xlarge|ml.r6i.24xlarge|ml.r6i.32xlarge|ml.r7i.large|ml.r7i.xlarge|ml.r7i.2xlarge|ml.r7i.4xlarge|ml.r7i.8xlarge|ml.r7i.12xlarge|ml.r7i.16xlarge|ml.r7i.24xlarge|ml.r7i.48xlarge|ml.m6id.large|ml.m6id.xlarge|ml.m6id.2xlarge|ml.m6id.4xlarge|ml.m6id.8xlarge|ml.m6id.12xlarge|ml.m6id.16xlarge|ml.m6id.24xlarge|ml.m6id.32xlarge|ml.c6id.large|ml.c6id.xlarge|ml.c6id.2xlarge|ml.c6id.4xlarge|ml.c6id.8xlarge|ml.c6id.12xlarge|ml.c6id.16xlarge|ml.c6id.24xlarge|ml.c6id.32xlarge|ml.r6id.large|ml.r6id.xlarge|ml.r6id.2xlarge|ml.r6id.4xlarge|ml.r6id.8xlarge|ml.r6id.12xlarge|ml.r6id.16xlarge|ml.r6id.24xlarge|ml.r6id.32xlarge>>
│    │                                 + Array<string<system|ml.t3.micro|ml.t3.small|ml.t3.medium|ml.t3.large|ml.t3.xlarge|ml.t3.2xlarge|ml.m5.large|ml.m5.xlarge|ml.m5.2xlarge|ml.m5.4xlarge|ml.m5.8xlarge|ml.m5.12xlarge|ml.m5.16xlarge|ml.m5.24xlarge|ml.m5d.large|ml.m5d.xlarge|ml.m5d.2xlarge|ml.m5d.4xlarge|ml.m5d.8xlarge|ml.m5d.12xlarge|ml.m5d.16xlarge|ml.m5d.24xlarge|ml.c5.large|ml.c5.xlarge|ml.c5.2xlarge|ml.c5.4xlarge|ml.c5.9xlarge|ml.c5.12xlarge|ml.c5.18xlarge|ml.c5.24xlarge|ml.p3.2xlarge|ml.p3.8xlarge|ml.p3.16xlarge|ml.p3dn.24xlarge|ml.g4dn.xlarge|ml.g4dn.2xlarge|ml.g4dn.4xlarge|ml.g4dn.8xlarge|ml.g4dn.12xlarge|ml.g4dn.16xlarge|ml.r5.large|ml.r5.xlarge|ml.r5.2xlarge|ml.r5.4xlarge|ml.r5.8xlarge|ml.r5.12xlarge|ml.r5.16xlarge|ml.r5.24xlarge|ml.g5.xlarge|ml.g5.2xlarge|ml.g5.4xlarge|ml.g5.8xlarge|ml.g5.12xlarge|ml.g5.16xlarge|ml.g5.24xlarge|ml.g5.48xlarge|ml.g6.xlarge|ml.g6.2xlarge|ml.g6.4xlarge|ml.g6.8xlarge|ml.g6.12xlarge|ml.g6.16xlarge|ml.g6.24xlarge|ml.g6.48xlarge|ml.g6e.xlarge|ml.g6e.2xlarge|ml.g6e.4xlarge|ml.g6e.8xlarge|ml.g6e.12xlarge|ml.g6e.16xlarge|ml.g6e.24xlarge|ml.g6e.48xlarge|ml.geospatial.interactive|ml.p4d.24xlarge|ml.p4de.24xlarge|ml.trn1.2xlarge|ml.trn1.32xlarge|ml.trn1n.32xlarge|ml.p5.48xlarge|ml.p5e.48xlarge|ml.p5en.48xlarge|ml.m6i.large|ml.m6i.xlarge|ml.m6i.2xlarge|ml.m6i.4xlarge|ml.m6i.8xlarge|ml.m6i.12xlarge|ml.m6i.16xlarge|ml.m6i.24xlarge|ml.m6i.32xlarge|ml.m7i.large|ml.m7i.xlarge|ml.m7i.2xlarge|ml.m7i.4xlarge|ml.m7i.8xlarge|ml.m7i.12xlarge|ml.m7i.16xlarge|ml.m7i.24xlarge|ml.m7i.48xlarge|ml.c6i.large|ml.c6i.xlarge|ml.c6i.2xlarge|ml.c6i.4xlarge|ml.c6i.8xlarge|ml.c6i.12xlarge|ml.c6i.16xlarge|ml.c6i.24xlarge|ml.c6i.32xlarge|ml.c7i.large|ml.c7i.xlarge|ml.c7i.2xlarge|ml.c7i.4xlarge|ml.c7i.8xlarge|ml.c7i.12xlarge|ml.c7i.16xlarge|ml.c7i.24xlarge|ml.c7i.48xlarge|ml.r6i.large|ml.r6i.xlarge|ml.r6i.2xlarge|ml.r6i.4xlarge|ml.r6i.8xlarge|ml.r6i.12xlarge|ml.r6i.16xlarge|ml.r6i.24xlarge|ml.r6i.32xlarge|ml.r7i.large|ml.r7i.xlarge|ml.r7i.2xlarge|ml.r7i.4xlarge|ml.r7i.8xlarge|ml.r7i.12xlarge|ml.r7i.16xlarge|ml.r7i.24xlarge|ml.r7i.48xlarge|ml.m6id.large|ml.m6id.xlarge|ml.m6id.2xlarge|ml.m6id.4xlarge|ml.m6id.8xlarge|ml.m6id.12xlarge|ml.m6id.16xlarge|ml.m6id.24xlarge|ml.m6id.32xlarge|ml.c6id.large|ml.c6id.xlarge|ml.c6id.2xlarge|ml.c6id.4xlarge|ml.c6id.8xlarge|ml.c6id.12xlarge|ml.c6id.16xlarge|ml.c6id.24xlarge|ml.c6id.32xlarge|ml.r6id.large|ml.r6id.xlarge|ml.r6id.2xlarge|ml.r6id.4xlarge|ml.r6id.8xlarge|ml.r6id.12xlarge|ml.r6id.16xlarge|ml.r6id.24xlarge|ml.r6id.32xlarge|ml.p5.4xlarge|ml.p6-b200.48xlarge|ml.g7.2xlarge|ml.g7.4xlarge|ml.g7.8xlarge|ml.g7.12xlarge|ml.g7.24xlarge|ml.g7.48xlarge|ml.g7e.2xlarge|ml.g7e.4xlarge|ml.g7e.8xlarge|ml.g7e.12xlarge|ml.g7e.24xlarge|ml.g7e.48xlarge>>
│    └[+]  resource AWS::SageMaker::Workforce
│       ├      name: Workforce
│       │      cloudFormationType: AWS::SageMaker::Workforce
│       │      documentation: Resource Type definition for AWS::SageMaker::Workforce. Use to create a private workforce that you can use to label your training data using Amazon SageMaker Ground Truth.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:sagemaker:${Region}:${Account}:workforce/${WorkforceName}
│       │      primaryIdentifier: ["WorkforceArn"]
│       ├ properties
│       │  ├ WorkforceName: string (required, immutable)
│       │  ├ CognitoConfig: CognitoConfig (immutable)
│       │  ├ OidcConfig: OidcConfig
│       │  ├ SourceIpConfig: SourceIpConfig
│       │  ├ WorkforceVpcConfig: WorkforceVpcConfigRequest
│       │  ├ IpAddressType: string<ipv4|dualstack>
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ WorkforceArn: string
│       │  └ SubDomain: string
│       └ types
│          ├ type CognitoConfig
│          │ ├      documentation: The configuration of an Amazon Cognito workforce. A single Cognito workforce is created using and corresponds to a single Amazon Cognito user pool.
│          │ │      name: CognitoConfig
│          │ └ properties
│          │    ├ ClientId: string (required)
│          │    └ UserPool: string (required)
│          ├ type OidcConfig
│          │ ├      documentation: The configuration of an OIDC Identity Provider (IdP) private workforce.
│          │ │      name: OidcConfig
│          │ └ properties
│          │    ├ AuthenticationRequestExtraParams: Map<string, string>
│          │    ├ AuthorizationEndpoint: string (required)
│          │    ├ ClientId: string (required)
│          │    ├ ClientSecret: string
│          │    ├ Issuer: string (required)
│          │    ├ JwksUri: string (required)
│          │    ├ LogoutEndpoint: string (required)
│          │    ├ Scope: string
│          │    ├ TokenEndpoint: string (required)
│          │    └ UserInfoEndpoint: string (required)
│          ├ type SourceIpConfig
│          │ ├      documentation: A list of IP address ranges used to access your training data.
│          │ │      name: SourceIpConfig
│          │ └ properties
│          │    └ Cidrs: Array<string> (required)
│          └ type WorkforceVpcConfigRequest
│            ├      documentation: The VPC configuration for the workforce.
│            │      name: WorkforceVpcConfigRequest
│            └ properties
│               ├ SecurityGroupIds: Array<string>
│               ├ Subnets: Array<string>
│               └ VpcId: string
├[~] service aws-sdb
│ └ resources
│    └[~]  resource AWS::SDB::Domain
│       └ attributes
│          └ Id: (documentation changed)
├[~] service aws-securityagent
│ └ resources
│    ├[+]  resource AWS::SecurityAgent::Artifact
│    │  ├      name: Artifact
│    │  │      cloudFormationType: AWS::SecurityAgent::Artifact
│    │  │      documentation: Uploads an artifact to an agent space. Artifacts provide additional context for security testing, such as architecture diagrams, API specifications, or configuration files.
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ AgentSpaceId: string (required, immutable)
│    │  │  ├ ArtifactContent: string (immutable)
│    │  │  ├ ArtifactType: string<TXT|PNG|JPEG|MD|PDF|DOCX|DOC|JSON|YAML> (required, immutable)
│    │  │  └ FileName: string (required, immutable)
│    │  └ attributes
│    │     ├ ArtifactId: string
│    │     ├ Arn: string
│    │     └ UpdatedAt: string
│    └[~]  resource AWS::SecurityAgent::Pentest
│       └ types
│          ├[~] type Actor
│          │ └ properties
│          │    ├[+] EnableEmailMfa: boolean
│          │    └[+] MfaForwardingAddress: string
│          └[~] type IntegratedRepository
│            └ properties
│               └[+] Branch: string
├[~] service aws-securityhub
│ └ resources
│    ├[~]  resource AWS::SecurityHub::Connector
│    │  └ types
│    │     └[~] type Provider
│    │       └      - documentation: The CSPM provider configuration for the connector
│    │              + documentation: undefined
│    └[~]  resource AWS::SecurityHub::PolicyAssociation
│       └ attributes
│          └ AssociationStatus: - string<SUCCESS|PENDING|FAILED>
│                               + string<SUCCESS|PENDING|FAILED|DISABLED>
├[+] service aws-serverlessrepo
│ ├      capitalized: ServerlessRepo
│ │      cloudFormationNamespace: AWS::ServerlessRepo
│ │      name: aws-serverlessrepo
│ │      shortName: serverlessrepo
│ └ resources
│    └ resource AWS::ServerlessRepo::Application
│      ├      name: Application
│      │      cloudFormationType: AWS::ServerlessRepo::Application
│      │      documentation: Resource type definition for an AWS Serverless Application Repository application.
│      │      arnTemplate: arn:${Partition}:serverlessrepo:${Region}:${Account}:applications/${ResourceId}
│      │      primaryIdentifier: ["ApplicationId"]
│      ├ properties
│      │  ├ Author: string (required)
│      │  ├ Description: string (required)
│      │  ├ Name: string (required, immutable)
│      │  ├ HomePageUrl: string
│      │  ├ Labels: Array<string>
│      │  ├ LicenseBody: string (immutable)
│      │  ├ ReadmeBody: string
│      │  ├ SpdxLicenseId: string (immutable)
│      │  ├ SemanticVersion: string (immutable)
│      │  ├ SourceCodeUrl: string (immutable)
│      │  └ TemplateBody: string (immutable)
│      └ attributes
│         ├ ApplicationId: string
│         ├ CreationTime: string
│         └ IsVerifiedAuthor: boolean
├[~] service aws-servicediscovery
│ └ resources
│    ├[~]  resource AWS::ServiceDiscovery::PrivateDnsNamespace
│    │  └ properties
│    │     └ Vpc: - string (required, immutable)
│    │            + string (immutable)
│    └[~]  resource AWS::ServiceDiscovery::Service
│       └ properties
│          └ ServiceAttributes: - json ⇐ Map<string, string>
│                               + Map<string, string>
├[~] service aws-ses
│ └ resources
│    ├[~]  resource AWS::SES::ConfigurationSetEventDestination
│    │  └      - primaryIdentifier: ["Id"]
│    │         + primaryIdentifier: ["Id","ConfigurationSetName"]
│    ├[~]  resource AWS::SES::ReceiptFilter
│    │  └ types
│    │     ├[~] type Filter
│    │     │ └ properties
│    │     │    ├ IpFilter: - IpFilter (required)
│    │     │    │           + IpFilter (required, immutable)
│    │     │    └ Name: - string
│    │     │            + string (immutable)
│    │     └[~] type IpFilter
│    │       └ properties
│    │          ├ Cidr: - string (required)
│    │          │       + string (required, immutable)
│    │          └ Policy: - string (required)
│    │                    + string (required, immutable)
│    ├[~]  resource AWS::SES::ReceiptRule
│    │  ├      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["RuleName","RuleSetName"]
│    │  └ attributes
│    │     └[+] RuleName: string
│    └[~]  resource AWS::SES::ReceiptRuleSet
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["RuleSetName"]
│       └ attributes
│          └[-] Id: string
├[~] service aws-signer
│ └ resources
│    └[-]  resource AWS::Signer::SigningJob
│       ├      name: SigningJob
│       │      cloudFormationType: AWS::Signer::SigningJob
│       │      documentation: Represents an AWS Signer signing job. Signing jobs are initiated via StartSigningJob and are read-only resources that provide visibility into code signing operations.
│       │      arnTemplate: arn:${Partition}:signer:${Region}:${Account}:/signing-jobs/${JobId}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  └ ProfileName: string (required, immutable)
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ JobId: string
│       │  ├ Source: Source
│       │  ├ Status: string<InProgress|Failed|Succeeded>
│       │  ├ CreatedAt: string
│       │  ├ CompletedAt: string
│       │  ├ SignatureExpiresAt: string
│       │  ├ RequestedBy: string
│       │  ├ JobOwner: string
│       │  ├ JobInvoker: string
│       │  ├ SignedObject: SignedObject
│       │  ├ PlatformId: string
│       │  ├ PlatformDisplayName: string
│       │  └ ProfileVersion: string
│       └ types
│          ├ type S3SignedObject
│          │ ├      documentation: The Amazon S3 bucket name and key where Signer saved the signed code image.
│          │ │      name: S3SignedObject
│          │ └ properties
│          │    ├ BucketName: string
│          │    └ Key: string
│          ├ type S3Source
│          │ ├      documentation: Information about the Amazon S3 bucket where unsigned code is stored.
│          │ │      name: S3Source
│          │ └ properties
│          │    ├ BucketName: string (required)
│          │    ├ Key: string (required)
│          │    └ Version: string (required)
│          ├ type SignedObject
│          │ ├      documentation: The S3 location of the signed code image.
│          │ │      name: SignedObject
│          │ └ properties
│          │    └ S3: S3SignedObject
│          └ type Source
│            ├      documentation: Information about the S3 bucket where unsigned code is stored.
│            │      name: Source
│            └ properties
│               └ S3: S3Source
├[~] service aws-ssm
│ └ resources
│    ├[+]  resource AWS::SSM::CloudConnector
│    │  ├      name: CloudConnector
│    │  │      cloudFormationType: AWS::SSM::CloudConnector
│    │  │      documentation: Resource Type definition for AWS::SSM::CloudConnector. Enables AWS Systems Manager to manage resources in external cloud providers.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:ssm:${Region}:${Account}:cloud-connector/${CloudConnectorId}
│    │  │      primaryIdentifier: ["CloudConnectorArn"]
│    │  ├ properties
│    │  │  ├ DisplayName: string (required)
│    │  │  ├ Description: string
│    │  │  ├ RoleArn: string (required, immutable)
│    │  │  ├ Configuration: CloudConnectorConfiguration (required)
│    │  │  ├ ConfigConnectorArn: string (required, immutable)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ CloudConnectorArn: string
│    │  │  ├ CloudConnectorId: string
│    │  │  ├ CreatedAt: string
│    │  │  └ UpdatedAt: string
│    │  └ types
│    │     ├ type AzureConfiguration
│    │     │ ├      documentation: Configuration for connecting to Azure.
│    │     │ │      name: AzureConfiguration
│    │     │ └ properties
│    │     │    ├ TenantId: string (required, immutable)
│    │     │    ├ TenantDisplayName: string
│    │     │    ├ ApplicationId: string (required)
│    │     │    ├ ApplicationDisplayName: string
│    │     │    └ Targets: ConfigurationTargets
│    │     ├ type AzureSubscription
│    │     │ ├      documentation: An Azure subscription with its ID and optional display name.
│    │     │ │      name: AzureSubscription
│    │     │ └ properties
│    │     │    ├ Id: string (required)
│    │     │    └ DisplayName: string
│    │     ├ type CloudConnectorConfiguration
│    │     │ ├      documentation: The configuration for the cloud connector. Currently supports Azure.
│    │     │ │      name: CloudConnectorConfiguration
│    │     │ └ properties
│    │     │    └ AzureConfiguration: AzureConfiguration (required)
│    │     └ type ConfigurationTargets
│    │       ├      documentation: The targets for the cloud connector. If omitted, the entire tenant is targeted.
│    │       │      name: ConfigurationTargets
│    │       └ properties
│    │          └ Subscriptions: Array<AzureSubscription> (required)
│    ├[+]  resource AWS::SSM::ServiceSetting
│    │  ├      name: ServiceSetting
│    │  │      cloudFormationType: AWS::SSM::ServiceSetting
│    │  │      documentation: Resource Type definition for AWS::SSM::ServiceSetting. ServiceSetting is an account-level setting for an AWS service that defines how a user interacts with or uses a service or feature.
│    │  │      arnTemplate: arn:${Partition}:ssm:${Region}:${Account}:servicesetting/${ResourceId}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ SettingId: string (required, immutable)
│    │  │  └ SettingValue: string (required)
│    │  └ attributes
│    │     ├ Status: string
│    │     ├ LastModifiedDate: string
│    │     ├ LastModifiedUser: string
│    │     └ Arn: string
│    └[-]  resource AWS::SSM::Session
│       ├      name: Session
│       │      cloudFormationType: AWS::SSM::Session
│       │      documentation: Returns information about a Session Manager session.
│       │      arnTemplate: arn:${Partition}:ssm:${Region}:${Account}:session/${SessionId}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ Target: string (immutable)
│       │  └ Reason: string (immutable)
│       └ attributes
│          ├ Arn: string
│          ├ SessionId: string
│          ├ Status: string<Connected|Connecting|Disconnected|Terminated|Terminating|Failed>
│          ├ StartDate: string
│          ├ Owner: string
│          └ AccessType: string<Standard|JustInTime>
├[~] service aws-sso
│ └ resources
│    └[-]  resource AWS::SSO::ApplicationProvider
│       ├      name: ApplicationProvider
│       │      cloudFormationType: AWS::SSO::ApplicationProvider
│       │      documentation: An application provider that can be used to connect an AWS managed application or customer managed application to IAM Identity Center.
│       │      arnTemplate: arn:${Partition}:sso::aws:applicationProvider/${ApplicationProviderId}
│       │      primaryIdentifier: ["ApplicationProviderArn"]
│       ├ attributes
│       │  ├ ApplicationProviderArn: string
│       │  ├ FederationProtocol: string<SAML|OAUTH>
│       │  ├ DisplayData: DisplayData
│       │  └ ResourceServerConfig: ResourceServerConfig
│       └ types
│          ├ type DisplayData
│          │ ├      documentation: A structure that describes how IAM Identity Center represents the application provider in the portal.
│          │ │      name: DisplayData
│          │ └ properties
│          │    ├ DisplayName: string
│          │    ├ IconUrl: string
│          │    └ Description: string
│          ├ type ResourceServerConfig
│          │ ├      documentation: A structure that describes the configuration of a resource server.
│          │ │      name: ResourceServerConfig
│          │ └ properties
│          │    └ Scopes: Map<string, ResourceServerScopeDetails>
│          └ type ResourceServerScopeDetails
│            ├      documentation: Details for an IAM Identity Center access scope associated with a resource server.
│            │      name: ResourceServerScopeDetails
│            └ properties
│               ├ DetailedTitle: string
│               └ LongDescription: string
├[-] service aws-states
│ ├      capitalized: States
│ │      cloudFormationNamespace: AWS::States
│ │      name: aws-states
│ │      shortName: states
│ ├ resources
│ │  └ resource AWS::States::Execution
│ │    ├      name: Execution
│ │    │      cloudFormationType: AWS::States::Execution
│ │    │      documentation: Represents an AWS Step Functions state machine execution.
│ │    │      primaryIdentifier: ["ExecutionArn"]
│ │    ├ properties
│ │    │  ├ StateMachineArn: string (required, immutable)
│ │    │  ├ Name: string (immutable)
│ │    │  └ Input: string (immutable)
│ │    ├ attributes
│ │    │  ├ ExecutionArn: string
│ │    │  ├ StateMachineName: string
│ │    │  ├ Status: string<RUNNING|SUCCEEDED|FAILED|TIMED_OUT|ABORTED|PENDING_REDRIVE>
│ │    │  ├ StartDate: string
│ │    │  ├ RedriveCount: integer
│ │    │  └ RedriveStatus: string<REDRIVABLE|NOT_REDRIVABLE|REDRIVABLE_BY_MAP_RUN>
│ │    └ events
│ │       └ event aws.states@StepFunctionsExecutionStatusChange
│ │         ├      description: Schema for event type StepFunctionsExecutionStatusChange, published by AWS service aws.states
│ │         │      source: aws.states
│ │         │      detailType: Step Functions Execution Status Change
│ │         │      rootProperty: StepFunctionsExecutionStatusChange
│ │         │      resourcesFields: [
│ │         │        {
│ │         │          "type": "StepFunctionsExecutionStatusChange",
│ │         │          "fieldName": "executionArn",
│ │         │          "resource": "Execution"
│ │         │        }
│ │         │      ]
│ │         └ types
│ │            └ type StepFunctionsExecutionStatusChange
│ │              └ properties
│ │                 ├ output: string (required)
│ │                 ├ input: string (required)
│ │                 ├ executionArn: string (required)
│ │                 ├ name: string (required)
│ │                 ├ stateMachineArn: string (required)
│ │                 ├ startDate: integer (required)
│ │                 ├ stopDate: integer (required)
│ │                 └ status: string (required)
│ └ metrics
│    ├ event aws.states@AWSAPICallViaCloudTrail
│    │ ├      description: Schema for event type AWSAPICallViaCloudTrail, published by AWS service aws.states
│    │ │      source: aws.states
│    │ │      detailType: AWS API Call via CloudTrail
│    │ │      rootProperty: AWSAPICallViaCloudTrail
│    │ └ types
│    │    ├ type Attributes
│    │    │ └ properties
│    │    │    ├ mfaAuthenticated: string
│    │    │    └ creationDate: string
│    │    ├ type AWSAPICallViaCloudTrail
│    │    │ └ properties
│    │    │    ├ responseElements: ResponseElements (required)
│    │    │    ├ requestParameters: RequestParameters (required)
│    │    │    ├ userIdentity: UserIdentity (required)
│    │    │    ├ eventID: string (required)
│    │    │    ├ awsRegion: string (required)
│    │    │    ├ eventVersion: string (required)
│    │    │    ├ sourceIPAddress: string (required)
│    │    │    ├ eventSource: string (required)
│    │    │    ├ errorMessage: string
│    │    │    ├ errorCode: string
│    │    │    ├ userAgent: string (required)
│    │    │    ├ eventType: string (required)
│    │    │    ├ requestID: string (required)
│    │    │    ├ eventTime: string (required)
│    │    │    └ eventName: string (required)
│    │    ├ type RequestParameters
│    │    │ └ properties
│    │    │    ├ input: string
│    │    │    ├ executionArn: string
│    │    │    ├ roleArn: string
│    │    │    ├ name: string
│    │    │    ├ definition: string
│    │    │    ├ stateMachineArn: string
│    │    │    ├ activityArn: string
│    │    │    └ tags: json[]
│    │    ├ type ResponseElements
│    │    │ └ properties
│    │    │    ├ updateDate: string
│    │    │    ├ executionArn: string
│    │    │    ├ creationDate: string
│    │    │    ├ stateMachineArn: string
│    │    │    ├ activityArn: string
│    │    │    ├ startDate: string
│    │    │    └ stopDate: string
│    │    ├ type SessionContext
│    │    │ └ properties
│    │    │    ├ webIdFederationData: json
│    │    │    ├ sessionIssuer: SessionIssuer
│    │    │    └ attributes: Attributes
│    │    ├ type SessionIssuer
│    │    │ └ properties
│    │    │    ├ accountId: string
│    │    │    ├ principalId: string
│    │    │    ├ type: string
│    │    │    ├ arn: string
│    │    │    └ userName: string
│    │    └ type UserIdentity
│    │      └ properties
│    │         ├ sessionContext: SessionContext
│    │         ├ accessKeyId: string (required)
│    │         ├ accountId: string (required)
│    │         ├ principalId: string (required)
│    │         ├ type: string (required)
│    │         ├ arn: string (required)
│    │         ├ invokedBy: string
│    │         └ userName: string
│    └ event aws.states@StepFunctionsExecutionStatusChange
│      ├      description: Schema for event type StepFunctionsExecutionStatusChange, published by AWS service aws.states
│      │      source: aws.states
│      │      detailType: Step Functions Execution Status Change
│      │      rootProperty: StepFunctionsExecutionStatusChange
│      │      resourcesFields: [
│      │        {
│      │          "type": "StepFunctionsExecutionStatusChange",
│      │          "fieldName": "executionArn",
│      │          "resource": "Execution"
│      │        }
│      │      ]
│      └ types
│         └ type StepFunctionsExecutionStatusChange
│           └ properties
│              ├ output: string (required)
│              ├ input: string (required)
│              ├ executionArn: string (required)
│              ├ name: string (required)
│              ├ stateMachineArn: string (required)
│              ├ startDate: integer (required)
│              ├ stopDate: integer (required)
│              └ status: string (required)
├[~] service aws-stepfunctions
│ └ resources
│    └[-]  resource AWS::StepFunctions::MapRun
│       ├      name: MapRun
│       │      cloudFormationType: AWS::StepFunctions::MapRun
│       │      documentation: Resource schema for AWS::StepFunctions::MapRun. A Map Run is a set of child workflow executions started by a Distributed Map state in Step Functions.
│       │      primaryIdentifier: ["MapRunArn"]
│       ├ properties
│       │  └ ExecutionArn: string (immutable)
│       ├ attributes
│       │  ├ MapRunArn: string
│       │  ├ Status: string<RUNNING|SUCCEEDED|FAILED|ABORTED>
│       │  ├ StartDate: string
│       │  ├ StopDate: string
│       │  ├ MaxConcurrency: integer
│       │  ├ ToleratedFailurePercentage: number
│       │  ├ ToleratedFailureCount: integer
│       │  ├ ItemCounts: MapRunItemCounts
│       │  └ ExecutionCounts: MapRunExecutionCounts
│       └ types
│          ├ type MapRunExecutionCounts
│          │ ├      documentation: Contains details about all child workflow executions started by a Map Run.
│          │ │      name: MapRunExecutionCounts
│          │ └ properties
│          │    ├ Pending: integer
│          │    ├ Running: integer
│          │    ├ Succeeded: integer
│          │    ├ Failed: integer
│          │    ├ TimedOut: integer
│          │    ├ Aborted: integer
│          │    ├ Total: integer
│          │    ├ ResultsWritten: integer
│          │    ├ FailuresNotRedrivable: integer
│          │    └ PendingRedrive: integer
│          └ type MapRunItemCounts
│            ├      documentation: Contains details about items processed in all child workflow executions started by a Map Run.
│            │      name: MapRunItemCounts
│            └ properties
│               ├ Pending: integer
│               ├ Running: integer
│               ├ Succeeded: integer
│               ├ Failed: integer
│               ├ TimedOut: integer
│               ├ Aborted: integer
│               ├ Total: integer
│               ├ ResultsWritten: integer
│               ├ FailuresNotRedrivable: integer
│               └ PendingRedrive: integer
├[~] service aws-synthetics
│ └ resources
│    └[~]  resource AWS::Synthetics::Canary
│       ├ properties
│       │  ├[+] KmsKeyArn: string
│       │  └[+] Replicas: Array<Replica>
│       └ types
│          ├[+]  type Replica
│          │  ├      documentation: Configuration and status for a replica location in a multi-location canary
│          │  │      name: Replica
│          │  └ properties
│          │     ├ Location: string (required)
│          │     ├ VpcConfig: VPCConfig
│          │     ├ Tags: Array<tag>
│          │     ├ ResourcesToReplicateTags: Array<string<lambda-function>>
│          │     ├ KmsKeyArn: string
│          │     ├ CanaryState: string
│          │     ├ LastModified: number
│          │     └ ReplicationStatus: ReplicaReplicationStatus
│          └[+]  type ReplicaReplicationStatus
│             ├      documentation: Replication status details
│             │      name: ReplicaReplicationStatus
│             └ properties
│                └ State: string
├[+] service aws-textract
│ ├      capitalized: Textract
│ │      cloudFormationNamespace: AWS::Textract
│ │      name: aws-textract
│ │      shortName: textract
│ └ resources
│    └ resource AWS::Textract::Adapter
│      ├      name: Adapter
│      │      cloudFormationType: AWS::Textract::Adapter
│      │      documentation: The AWS::Textract::Adapter resource creates an Amazon Textract adapter, which can be fine-tuned for enhanced performance on user-provided documents.
│      │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│      │      primaryIdentifier: ["Arn"]
│      ├ properties
│      │  ├ AdapterName: string (required)
│      │  ├ Description: string
│      │  ├ FeatureTypes: Array<string<QUERIES>> (required, immutable)
│      │  ├ AutoUpdate: string<ENABLED|DISABLED>
│      │  └ Tags: Array<tag>
│      └ attributes
│         ├ Arn: string
│         ├ AdapterId: string
│         └ CreationTime: string
├[-] service aws-thinclient
│ ├      capitalized: ThinClient
│ │      cloudFormationNamespace: AWS::ThinClient
│ │      name: aws-thinclient
│ │      shortName: thinclient
│ └ resources
│    └ resource AWS::ThinClient::SoftwareSet
│      ├      name: SoftwareSet
│      │      cloudFormationType: AWS::ThinClient::SoftwareSet
│      │      documentation: Describes a software set for Amazon WorkSpaces Thin Client.
│      │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│      │      arnTemplate: arn:${Partition}:thinclient:${Region}:${Account}:softwareset/${SoftwareSetId}
│      │      primaryIdentifier: ["Arn"]
│      ├ properties
│      │  └ Tags: Array<tag> (immutable)
│      ├ attributes
│      │  ├ Arn: string
│      │  ├ Id: string
│      │  ├ Version: string
│      │  ├ ReleasedAt: string
│      │  ├ ValidationStatus: string<VALIDATED|NOT_VALIDATED>
│      │  └ Software: Array<Software>
│      └ types
│         └ type Software
│           ├      documentation: Describes software.
│           │      name: Software
│           └ properties
│              ├ Name: string
│              └ Version: string
├[~] service aws-timestream
│ └ resources
│    ├[~]  resource AWS::Timestream::InfluxDBCluster
│    │  └      - arnTemplate: undefined
│    │         + arnTemplate: arn:${Partition}:timestream-influxdb:${Region}:${Account}:db-cluster/${DbClusterId}
│    └[~]  resource AWS::Timestream::InfluxDBInstance
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:timestream-influxdb:${Region}:${Account}:db-instance/${DbInstanceIdentifier}
├[~] service aws-transcribe
│ └ resources
│    └[-]  resource AWS::Transcribe::MedicalTranscriptionJob
│       ├      name: MedicalTranscriptionJob
│       │      cloudFormationType: AWS::Transcribe::MedicalTranscriptionJob
│       │      documentation: Resource type definition for an Amazon Transcribe Medical Transcription Job
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:transcribe:${Region}:${Account}:medical-transcription-job/${JobName}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ MedicalTranscriptionJobName: string (required, immutable)
│       │  ├ LanguageCode: string (required, immutable)
│       │  ├ MediaSampleRateHertz: integer (immutable)
│       │  ├ MediaFormat: string<mp3|mp4|wav|flac|ogg|amr|webm|m4a> (immutable)
│       │  ├ Media: Media (required, immutable)
│       │  ├ Settings: MedicalTranscriptionSetting (immutable)
│       │  ├ Specialty: string<PRIMARYCARE> (required, immutable)
│       │  ├ Type: string<CONVERSATION|DICTATION> (required, immutable)
│       │  └ Tags: Array<tag> (immutable)
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ TranscriptionJobStatus: string<QUEUED|IN_PROGRESS|FAILED|COMPLETED>
│       │  ├ Transcript: MedicalTranscript
│       │  └ CreationTime: string
│       └ types
│          ├ type Media
│          │ ├      name: Media
│          │ └ properties
│          │    └ MediaFileUri: string
│          ├ type MedicalTranscript
│          │ ├      name: MedicalTranscript
│          │ └ properties
│          │    └ TranscriptFileUri: string
│          └ type MedicalTranscriptionSetting
│            ├      name: MedicalTranscriptionSetting
│            └ properties
│               ├ ChannelIdentification: boolean
│               └ ShowAlternatives: boolean
├[~] service aws-transfer
│ └ resources
│    └[+]  resource AWS::Transfer::HostKey
│       ├      name: HostKey
│       │      cloudFormationType: AWS::Transfer::HostKey
│       │      documentation: Resource type definition for AWS::Transfer::HostKey
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ ServerId: string (required, immutable)
│       │  ├ HostKeyBody: string (immutable)
│       │  ├ Description: string
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ Arn: string
│          ├ HostKeyId: string
│          ├ HostKeyFingerprint: string
│          ├ Type: string
│          └ DateImported: string
├[+] service aws-translate
│ ├      capitalized: Translate
│ │      cloudFormationNamespace: AWS::Translate
│ │      name: aws-translate
│ │      shortName: translate
│ ├ resources
│ │  └ resource AWS::Translate::ParallelData
│ │    ├      name: ParallelData
│ │    │      cloudFormationType: AWS::Translate::ParallelData
│ │    │      documentation: A parallel data resource in Amazon Translate used to customize machine translation output.
│ │    │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│ │    │      primaryIdentifier: ["Arn"]
│ │    ├ properties
│ │    │  ├ Name: string (required, immutable)
│ │    │  ├ Description: string (immutable)
│ │    │  ├ ParallelDataConfig: ParallelDataConfig (required)
│ │    │  ├ EncryptionKey: EncryptionKey (immutable)
│ │    │  └ Tags: Array<TagsItems>
│ │    ├ attributes
│ │    │  ├ Arn: string
│ │    │  ├ Status: string<CREATING|UPDATING|ACTIVE|DELETING|FAILED>
│ │    │  ├ SourceLanguageCode: string
│ │    │  ├ TargetLanguageCodes: Array<string>
│ │    │  ├ ImportedDataSize: integer
│ │    │  ├ ImportedRecordCount: integer
│ │    │  ├ FailedRecordCount: integer
│ │    │  ├ SkippedRecordCount: integer
│ │    │  ├ CreatedAt: string
│ │    │  └ LastUpdatedAt: string
│ │    └ types
│ │       ├ type EncryptionKey
│ │       │ ├      documentation: The encryption key used to encrypt this object.
│ │       │ │      name: EncryptionKey
│ │       │ └ properties
│ │       │    ├ Type: string<KMS> (required)
│ │       │    └ Id: string (required)
│ │       ├ type ParallelDataConfig
│ │       │ ├      documentation: Specifies the format and S3 location of the parallel data input file.
│ │       │ │      name: ParallelDataConfig
│ │       │ └ properties
│ │       │    ├ S3Uri: string (required)
│ │       │    └ Format: string<TSV|CSV|TMX> (required)
│ │       └ type TagsItems
│ │         ├      name: TagsItems
│ │         └ properties
│ │            ├ Key: string (required)
│ │            └ Value: string (required)
│ └ metrics
│    ├ event aws.translate@TranslateParallelDataStateChange
│    │ ├      description: Schema for event type TranslateParallelDataStateChange, published by AWS service aws.translate
│    │ │      source: aws.translate
│    │ │      detailType: Translate TextTranslationJob State Change
│    │ │      rootProperty: TranslateTextTranslationJobStateChange
│    │ └ types
│    │    └ type TranslateTextTranslationJobStateChange
│    │      └ properties
│    │         ├ jobId: string (required)
│    │         └ jobStatus: string (required)
│    └ event aws.translate@TranslateTextTranslationJobStateChange
│      ├      description: Schema for event type TranslateTextTranslationJobStateChange, published by AWS service aws.translate
│      │      source: aws.translate
│      │      detailType: Translate Parallel Data State Change
│      │      rootProperty: TranslateParallelDataStateChange
│      └ types
│         └ type TranslateParallelDataStateChange
│           └ properties
│              ├ latestUpdateAttemptAt: string (required)
│              ├ latestUpdateAttemptStatus: string (required)
│              ├ name: string (required)
│              ├ operation: string (required)
│              └ status: string (required)
├[-] service aws-usernotifications
│ ├      capitalized: UserNotifications
│ │      cloudFormationNamespace: AWS::UserNotifications
│ │      name: aws-usernotifications
│ │      shortName: usernotifications
│ └ resources
│    └ resource AWS::UserNotifications::ManagedNotificationConfiguration
│      ├      name: ManagedNotificationConfiguration
│      │      cloudFormationType: AWS::UserNotifications::ManagedNotificationConfiguration
│      │      documentation: Resource type definition for AWS User Notifications ManagedNotificationConfiguration. This is a read-only resource representing AWS-managed notification configurations.
│      │      primaryIdentifier: ["Arn"]
│      ├ properties
│      │  ├ Category: string (immutable)
│      │  └ SubCategory: string (immutable)
│      └ attributes
│         ├ Arn: string
│         ├ Name: string
│         └ Description: string
├[~] service aws-vpclattice
│ └ resources
│    └[~]  resource AWS::VpcLattice::ServiceNetwork
│       └ properties
│          └ SharingConfig: - SharingConfig
│                           + SharingConfig (immutable)
├[~] service aws-wafv2
│ └ resources
│    ├[~]  resource AWS::WAFv2::RuleGroup
│    │  └ types
│    │     ├[~] type ByteMatchStatement
│    │     │ └ properties
│    │     │    └[+] PreParseTextTransformations: Array<PreParseTextTransformation>
│    │     ├[+]  type PreParseTextTransformation
│    │     │  ├      documentation: Text Transformation applied before parsing the query string.
│    │     │  │      name: PreParseTextTransformation
│    │     │  └ properties
│    │     │     ├ Priority: integer (required)
│    │     │     └ Type: string<NONE|URL_DECODE|URL_DECODE_UNI|COMBINE_DUPLICATE_QUERY_ARGS_BY_COMMA|REPLACE_SEMICOLONS_WITH_AMPERSANDS> (required)
│    │     ├[~] type RegexMatchStatement
│    │     │ └ properties
│    │     │    └[+] PreParseTextTransformations: Array<PreParseTextTransformation>
│    │     ├[~] type RegexPatternSetReferenceStatement
│    │     │ └ properties
│    │     │    └[+] PreParseTextTransformations: Array<PreParseTextTransformation>
│    │     ├[~] type SizeConstraintStatement
│    │     │ └ properties
│    │     │    └[+] PreParseTextTransformations: Array<PreParseTextTransformation>
│    │     ├[~] type SqliMatchStatement
│    │     │ └ properties
│    │     │    └[+] PreParseTextTransformations: Array<PreParseTextTransformation>
│    │     ├[~] type TextTransformation
│    │     │ └ properties
│    │     │    └ Type: - string<NONE|COMPRESS_WHITE_SPACE|HTML_ENTITY_DECODE|LOWERCASE|CMD_LINE|URL_DECODE|BASE64_DECODE|HEX_DECODE|MD5|REPLACE_COMMENTS|ESCAPE_SEQ_DECODE|SQL_HEX_DECODE|CSS_DECODE|JS_DECODE|NORMALIZE_PATH|NORMALIZE_PATH_WIN|REMOVE_NULLS|REPLACE_NULLS|BASE64_DECODE_EXT|URL_DECODE_UNI|UTF8_TO_UNICODE> (required)
│    │     │            + string<NONE|COMPRESS_WHITE_SPACE|HTML_ENTITY_DECODE|LOWERCASE|CMD_LINE|URL_DECODE|BASE64_DECODE|HEX_DECODE|MD5|REPLACE_COMMENTS|ESCAPE_SEQ_DECODE|SQL_HEX_DECODE|CSS_DECODE|JS_DECODE|NORMALIZE_PATH|NORMALIZE_PATH_WIN|REMOVE_NULLS|REPLACE_NULLS|BASE64_DECODE_EXT|URL_DECODE_UNI|UTF8_TO_UNICODE|REMOVE_WHITESPACE|TRIM|TRIM_LEFT|TRIM_RIGHT|REMOVE_COMMENTS_CHAR|UPPERCASE|CMD_LINE_WIN|CMD_LINE_UNIX|JS_DECODE_EXT|SHA256> (required)
│    │     └[~] type XssMatchStatement
│    │       └ properties
│    │          └[+] PreParseTextTransformations: Array<PreParseTextTransformation>
│    └[~]  resource AWS::WAFv2::WebACL
│       └ types
│          ├[~] type ByteMatchStatement
│          │ └ properties
│          │    └[+] PreParseTextTransformations: Array<PreParseTextTransformation>
│          ├[+]  type PreParseTextTransformation
│          │  ├      documentation: Text Transformation applied before parsing the query string.
│          │  │      name: PreParseTextTransformation
│          │  └ properties
│          │     ├ Priority: integer (required)
│          │     └ Type: string<NONE|URL_DECODE|URL_DECODE_UNI|COMBINE_DUPLICATE_QUERY_ARGS_BY_COMMA|REPLACE_SEMICOLONS_WITH_AMPERSANDS> (required)
│          ├[~] type RegexMatchStatement
│          │ └ properties
│          │    └[+] PreParseTextTransformations: Array<PreParseTextTransformation>
│          ├[~] type RegexPatternSetReferenceStatement
│          │ └ properties
│          │    └[+] PreParseTextTransformations: Array<PreParseTextTransformation>
│          ├[~] type SizeConstraintStatement
│          │ └ properties
│          │    └[+] PreParseTextTransformations: Array<PreParseTextTransformation>
│          ├[~] type SqliMatchStatement
│          │ └ properties
│          │    └[+] PreParseTextTransformations: Array<PreParseTextTransformation>
│          ├[~] type TextTransformation
│          │ └ properties
│          │    └ Type: - string<NONE|COMPRESS_WHITE_SPACE|HTML_ENTITY_DECODE|LOWERCASE|CMD_LINE|URL_DECODE|BASE64_DECODE|HEX_DECODE|MD5|REPLACE_COMMENTS|ESCAPE_SEQ_DECODE|SQL_HEX_DECODE|CSS_DECODE|JS_DECODE|NORMALIZE_PATH|NORMALIZE_PATH_WIN|REMOVE_NULLS|REPLACE_NULLS|BASE64_DECODE_EXT|URL_DECODE_UNI|UTF8_TO_UNICODE> (required)
│          │            + string<NONE|COMPRESS_WHITE_SPACE|HTML_ENTITY_DECODE|LOWERCASE|CMD_LINE|URL_DECODE|BASE64_DECODE|HEX_DECODE|MD5|REPLACE_COMMENTS|ESCAPE_SEQ_DECODE|SQL_HEX_DECODE|CSS_DECODE|JS_DECODE|NORMALIZE_PATH|NORMALIZE_PATH_WIN|REMOVE_NULLS|REPLACE_NULLS|BASE64_DECODE_EXT|URL_DECODE_UNI|UTF8_TO_UNICODE|REMOVE_WHITESPACE|TRIM|TRIM_LEFT|TRIM_RIGHT|REMOVE_COMMENTS_CHAR|UPPERCASE|CMD_LINE_WIN|CMD_LINE_UNIX|JS_DECODE_EXT|SHA256> (required)
│          └[~] type XssMatchStatement
│            └ properties
│               └[+] PreParseTextTransformations: Array<PreParseTextTransformation>
├[~] service aws-wellarchitected
│ └ resources
│    └[+]  resource AWS::WellArchitected::Workload
│       ├      name: Workload
│       │      cloudFormationType: AWS::WellArchitected::Workload
│       │      documentation: Definition of AWS::WellArchitected::Workload Resource Type
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:wellarchitected:${Region}:${Account}:workload/${ResourceId}
│       │      primaryIdentifier: ["WorkloadArn"]
│       ├ properties
│       │  ├ WorkloadName: string (required)
│       │  ├ Description: string (required)
│       │  ├ Environment: string<PRODUCTION|PREPRODUCTION> (required)
│       │  ├ AccountIds: Array<string>
│       │  ├ AwsRegions: Array<string>
│       │  ├ NonAwsRegions: Array<string>
│       │  ├ ArchitecturalDesign: string
│       │  ├ ReviewOwner: string
│       │  ├ IndustryType: string
│       │  ├ Industry: string
│       │  ├ Lenses: Array<string> (required, immutable)
│       │  ├ Notes: string
│       │  ├ DiscoveryConfig: DiscoveryConfig
│       │  └ Tags: Array<TagsItems>
│       ├ attributes
│       │  ├ WorkloadArn: string
│       │  ├ WorkloadId: string
│       │  └ ImprovementStatus: string<NOT_APPLICABLE|NOT_STARTED|IN_PROGRESS|COMPLETE|RISK_ACKNOWLEDGED>
│       └ types
│          ├ type DiscoveryConfig
│          │ ├      documentation: Discovery configuration associated to the workload.
│          │ │      name: DiscoveryConfig
│          │ └ properties
│          │    ├ TrustedAdvisorIntegrationStatus: string<ENABLED|DISABLED>
│          │    └ WorkloadResourceDefinition: Array<string<WORKLOAD_METADATA|APP_REGISTRY>>
│          └ type TagsItems
│            ├      name: TagsItems
│            └ properties
│               ├ Key: string (required)
│               └ Value: string (required)
└[+] service aws-wickr
  ├      capitalized: Wickr
  │      cloudFormationNamespace: AWS::Wickr
  │      name: aws-wickr
  │      shortName: wickr
  └ resources
     └ resource AWS::Wickr::Network
       ├      name: Network
       │      cloudFormationType: AWS::Wickr::Network
       │      documentation: Resource Type definition for AWS::Wickr::Network. Creates and manages an AWS Wickr network for secure enterprise communications.
       │      arnTemplate: arn:${Partition}:wickr:${Region}:${Account}:network/${NetworkId}
       │      primaryIdentifier: ["NetworkArn"]
       ├ properties
       │  ├ NetworkName: string (required)
       │  └ AccessLevel: string<STANDARD|PREMIUM> (required, immutable)
       └ attributes
          ├ NetworkArn: string
          ├ NetworkId: string
          ├ AwsAccountId: string
          ├ Standing: integer
          └ MigrationState: integer
```

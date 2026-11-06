Updates the L1 CloudFormation resource definitions with the latest changes from `@aws-cdk/aws-service-spec`

**L1 CloudFormation resource definition changes:**
```
├[~] service aws-agentregistry
│ └ resources
│    └[~]  resource AWS::AgentRegistry::Registry
│       ├ properties
│       │  ├[+] AutoDetectionEnabled: boolean
│       │  ├[+] AutoDetectionScope: string<ORGANIZATION>
│       │  └[+] EncryptionConfiguration: EncryptionConfiguration (immutable)
│       ├ attributes
│       │  └[+] AutoDetectionStatus: string<ACTIVE|INACTIVE>
│       └ types
│          └[+]  type EncryptionConfiguration
│             ├      documentation: The server-side encryption configuration for a registry. Specifies a customer managed key used to encrypt the registry's content. When omitted, the registry's content is encrypted with an AWS owned key. You cannot change the encryption configuration after registry creation. Specifying a different KMS key, adding this property to an existing registry, or removing it replaces the registry: CloudFormation creates a new registry with a new Amazon Resource Name (ARN) and then deletes the original, including all registry records it contains. Registry records that are not managed by the stack are not re-created in the new registry, and if any remain in the original registry its deletion fails and it is left behind.
│             │      name: EncryptionConfiguration
│             └ properties
│                └ KmsKeyArn: string (required)
├[+] service aws-appfabric
│ ├      capitalized: AppFabric
│ │      cloudFormationNamespace: AWS::AppFabric
│ │      name: aws-appfabric
│ │      shortName: appfabric
│ └ resources
│    ├ resource AWS::AppFabric::AppAuthorization
│    │ ├      name: AppAuthorization
│    │ │      cloudFormationType: AWS::AppFabric::AppAuthorization
│    │ │      documentation: Creates an app authorization within an app bundle, which allows AppFabric to connect to an application.
│    │ │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │ │      primaryIdentifier: ["AppAuthorizationArn"]
│    │ ├ properties
│    │ │  ├ AppBundleIdentifier: string (required, immutable)
│    │ │  ├ App: string (required, immutable)
│    │ │  ├ AuthType: string<oauth2|apiKey> (required, immutable)
│    │ │  ├ Credential: Credential
│    │ │  ├ Tenant: Tenant (required)
│    │ │  └ Tags: Array<tag>
│    │ ├ attributes
│    │ │  ├ AppAuthorizationArn: string
│    │ │  ├ AppAuthorizationIdentifier: string
│    │ │  ├ AppBundleArn: string
│    │ │  ├ Status: string<PendingConnect|Connected|ConnectionValidationFailed|TokenAutoRotationFailed>
│    │ │  ├ CreatedAt: string
│    │ │  ├ UpdatedAt: string
│    │ │  └ Persona: string<admin|endUser>
│    │ └ types
│    │    ├ type ApiKeyCredential
│    │    │ ├      documentation: Contains API key credential information.
│    │    │ │      name: ApiKeyCredential
│    │    │ └ properties
│    │    │    └ ApiKey: string (required)
│    │    ├ type Credential
│    │    │ ├      documentation: Contains credential information for the application.
│    │    │ │      name: Credential
│    │    │ └ properties
│    │    │    ├ Oauth2Credential: Oauth2Credential
│    │    │    └ ApiKeyCredential: ApiKeyCredential
│    │    ├ type Oauth2Credential
│    │    │ ├      documentation: Contains OAuth2 client credential information.
│    │    │ │      name: Oauth2Credential
│    │    │ └ properties
│    │    │    ├ ClientId: string (required)
│    │    │    └ ClientSecret: string (required)
│    │    └ type Tenant
│    │      ├      documentation: Contains information about an application tenant.
│    │      │      name: Tenant
│    │      └ properties
│    │         ├ TenantIdentifier: string (required)
│    │         └ TenantDisplayName: string (required)
│    └ resource AWS::AppFabric::IngestionDestination
│      ├      name: IngestionDestination
│      │      cloudFormationType: AWS::AppFabric::IngestionDestination
│      │      documentation: Creates an ingestion destination, which specifies how an application's ingested data is processed by Amazon Web Services AppFabric and where it's delivered.
│      │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│      │      primaryIdentifier: ["Arn"]
│      ├ properties
│      │  ├ AppBundleArn: string (required, immutable)
│      │  ├ IngestionArn: string (required, immutable)
│      │  ├ ProcessingConfiguration: ProcessingConfiguration (required, immutable)
│      │  ├ DestinationConfiguration: DestinationConfiguration (required)
│      │  └ Tags: Array<tag>
│      ├ attributes
│      │  ├ Arn: string
│      │  ├ Status: string<Active|Failed>
│      │  ├ CreatedAt: string
│      │  └ UpdatedAt: string
│      └ types
│         ├ type AuditLogDestinationConfiguration
│         │ ├      documentation: Contains information about an audit log destination configuration.
│         │ │      name: AuditLogDestinationConfiguration
│         │ └ properties
│         │    └ Destination: Destination (required)
│         ├ type AuditLogProcessingConfiguration
│         │ ├      documentation: Contains information about an audit log processing configuration.
│         │ │      name: AuditLogProcessingConfiguration
│         │ └ properties
│         │    ├ Schema: string<ocsf|raw> (required)
│         │    └ Format: string<json|parquet> (required)
│         ├ type Destination
│         │ ├      documentation: Contains information about an audit log destination.
│         │ │      name: Destination
│         │ └ properties
│         │    ├ S3Bucket: S3Bucket
│         │    └ FirehoseStream: FirehoseStream
│         ├ type DestinationConfiguration
│         │ ├      documentation: Contains information about the destination of ingested data.
│         │ │      name: DestinationConfiguration
│         │ └ properties
│         │    └ AuditLog: AuditLogDestinationConfiguration (required)
│         ├ type FirehoseStream
│         │ ├      documentation: Contains information about an Amazon Kinesis Data Firehose delivery stream.
│         │ │      name: FirehoseStream
│         │ └ properties
│         │    └ StreamName: string (required)
│         ├ type ProcessingConfiguration
│         │ ├      documentation: Contains information about how ingested data is processed.
│         │ │      name: ProcessingConfiguration
│         │ └ properties
│         │    └ AuditLog: AuditLogProcessingConfiguration (required)
│         └ type S3Bucket
│           ├      documentation: Contains information about an Amazon S3 bucket.
│           │      name: S3Bucket
│           └ properties
│              ├ BucketName: string (required)
│              └ Prefix: string
├[~] service aws-applicationsignals
│ └ resources
│    └[+]  resource AWS::ApplicationSignals::InstrumentationConfig
│       ├      name: InstrumentationConfig
│       │      cloudFormationType: AWS::ApplicationSignals::InstrumentationConfig
│       │      documentation: Creates a dynamic instrumentation configuration for a specific code or endpoint location within a service and environment.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["InstrumentationType","Service","Environment","SignalType","LocationHash"]
│       ├ properties
│       │  ├ InstrumentationType: string<BREAKPOINT|PROBE> (required, immutable)
│       │  ├ Service: string (required, immutable)
│       │  ├ Environment: string (required, immutable)
│       │  ├ SignalType: string<SNAPSHOT> (required, immutable)
│       │  ├ Location: Location (required, immutable)
│       │  ├ Description: string (immutable)
│       │  ├ ExpiresAt: string (immutable)
│       │  ├ AttributeFilters: Array<Map<string, string>> (immutable)
│       │  ├ CaptureConfiguration: CaptureConfiguration (required, immutable)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ LocationHash: string
│       │  └ CreatedAt: string
│       └ types
│          ├ type CaptureConfiguration
│          │ ├      documentation: Specifies what to capture when the instrumentation point is hit.
│          │ │      name: CaptureConfiguration
│          │ └ properties
│          │    └ CodeCapture: CodeCaptureConfiguration (required)
│          ├ type CaptureLimitsConfig
│          │ ├      documentation: Safety limits that bound what is captured.
│          │ │      name: CaptureLimitsConfig
│          │ └ properties
│          │    ├ MaxHits: integer
│          │    ├ MaxStringLength: integer
│          │    ├ MaxCollectionWidth: integer
│          │    ├ MaxCollectionDepth: integer
│          │    ├ MaxStackFrames: integer
│          │    ├ MaxStackTraceSize: integer
│          │    ├ MaxObjectDepth: integer
│          │    └ MaxFieldsPerObject: integer
│          ├ type CodeCaptureConfiguration
│          │ ├      documentation: Defines what data to capture for code-level instrumentation.
│          │ │      name: CodeCaptureConfiguration
│          │ └ properties
│          │    ├ CaptureArguments: Array<string>
│          │    ├ CaptureReturn: boolean
│          │    ├ CaptureStackTrace: boolean
│          │    ├ CaptureLocals: Array<string>
│          │    └ CaptureLimits: CaptureLimitsConfig (required)
│          ├ type CodeLocation
│          │ ├      documentation: Identifies a code location to instrument.
│          │ │      name: CodeLocation
│          │ └ properties
│          │    ├ Language: string<Java|Python|Javascript> (required)
│          │    ├ CodeUnit: string
│          │    ├ ClassName: string
│          │    ├ MethodName: string
│          │    ├ FilePath: string (required)
│          │    └ LineNumber: integer
│          └ type Location
│            ├      documentation: The location where instrumentation should be applied.
│            │      name: Location
│            └ properties
│               └ CodeLocation: CodeLocation (required)
├[~] service aws-bedrockagentcore
│ └ resources
│    ├[~]  resource AWS::BedrockAgentCore::Evaluator
│    │  ├      - documentation: Resource Type definition for AWS::BedrockAgentCore::Evaluator - Creates a custom evaluator for agent quality assessment using LLM-as-a-Judge configurations.
│    │  │      + documentation: Resource Type definition for AWS::BedrockAgentCore::Evaluator - Creates a custom evaluator for agent quality assessment using LLM-as-a-Judge, code-based, or derived evaluator configurations. Derived evaluators run an existing built-in or third-party evaluator's logic on a model that you supply.
│    │  ├ attributes
│    │  │  ├[+] EvaluatorType: string<Builtin|ThirdParty|Custom|CustomCode|CustomDerived>
│    │  │  └[+] Provider: string<AWS|DeepEval|AutoEval|Custom>
│    │  └ types
│    │     ├[+]  type DerivedEvaluatorConfig
│    │     │  ├      documentation: The configuration for an evaluator derived from an existing base evaluator (a built-in or third-party evaluator), run on your own model. The base evaluator supplies the prompt and scoring logic.
│    │     │  │      name: DerivedEvaluatorConfig
│    │     │  └ properties
│    │     │     ├ BaseEvaluatorId: string (required, immutable)
│    │     │     └ ModelConfig: EvaluatorModelConfig (required)
│    │     └[~] type EvaluatorConfig
│    │       └ properties
│    │          └[+] Derived: DerivedEvaluatorConfig
│    └[~]  resource AWS::BedrockAgentCore::Harness
│       └ types
│          └[~] type HarnessAgentCoreMemoryRetrievalConfig
│            └ properties
│               ├ RelevanceScore: - number | string
│               │                 + number | string ⇐ number
│               │                 (documentation changed)
│               └ TopK: - integer | string
│                       + integer | string ⇐ integer
│                       (documentation changed)
├[~] service aws-cloudwatch
│ └ resources
│    ├[~]  resource AWS::CloudWatch::AnomalyDetector
│    │  ├      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["AnomalyDetectorId"]
│    │  ├ properties
│    │  │  └ Configuration: - Configuration
│    │  │                   + MetricConfiguration ⇐ Configuration
│    │  ├ attributes
│    │  │  ├[+] AnomalyDetectorId: string
│    │  │  └[-] Id: string
│    │  └ types
│    │     └[+]  type MetricConfiguration
│    │        ├      name: MetricConfiguration
│    │        └ properties
│    │           ├ MetricTimeZone: string
│    │           └ ExcludedTimeRanges: Array<Range>
│    └[+]  resource AWS::CloudWatch::ResourceMetricsConfiguration
│       ├      name: ResourceMetricsConfiguration
│       │      cloudFormationType: AWS::CloudWatch::ResourceMetricsConfiguration
│       │      documentation: Resource Type definition for AWS::CloudWatch::ResourceMetricsConfiguration. Manages the detailed monitoring metric selections for an AWS resource, identified by the ARN of the resource being monitored.
│       │      primaryIdentifier: ["ResourceArn"]
│       ├ properties
│       │  ├ ResourceArn: string (required, immutable)
│       │  └ MetricSelections: Array<ResourceMetricSelection>
│       ├ attributes
│       │  ├ CreatedAt: string
│       │  └ UpdatedAt: string
│       └ types
│          └ type ResourceMetricSelection
│            ├      documentation: Defines which metrics are enabled for detailed monitoring on the resource.
│            │      name: ResourceMetricSelection
│            └ properties
│               └ IncludeMetrics: Array<string> (required)
├[~] service aws-codebuild
│ └ resources
│    └[~]  resource AWS::CodeBuild::ReportGroup
│       └      - primaryIdentifier: ["Id"]
│              + primaryIdentifier: ["Arn"]
├[~] service aws-devicefarm
│ └ resources
│    └[~]  resource AWS::DeviceFarm::InstanceProfile
│       └      - arnTemplate: arn:${Partition}:devicefarm:${Region}:${Account}:instanceprofile:${InstanceProfileId}
│              + arnTemplate: arn:${Partition}:devicefarm:${Region}:${Account}:instanceprofile:${ResourceId}
├[~] service aws-devopsagent
│ └ resources
│    ├[~]  resource AWS::DevOpsAgent::AgentSpace
│    │  ├ attributes
│    │  │  ├[+] OperatorApp.Idp.CreatedAt: string
│    │  │  ├[+] OperatorApp.Idp.UpdatedAt: string
│    │  │  └[+] OperatorApp.Idp.UserIdClaim: string
│    │  └ types
│    │     ├[+]  type IdpAuthConfiguration
│    │     │  ├      documentation: External identity provider configuration for the Operator App.
│    │     │  │      name: IdpAuthConfiguration
│    │     │  └ properties
│    │     │     ├ OperatorAppRoleArn: string (required)
│    │     │     ├ IssuerUrl: string (required)
│    │     │     ├ ClientId: string (required)
│    │     │     ├ ClientSecret: string (required)
│    │     │     ├ Provider: string<okta|entra> (required)
│    │     │     ├ UserIdClaim: string
│    │     │     ├ CreatedAt: string
│    │     │     └ UpdatedAt: string
│    │     └[~] type OperatorApp
│    │       └ properties
│    │          └[+] Idp: IdpAuthConfiguration
│    ├[~]  resource AWS::DevOpsAgent::Association
│    │  └ types
│    │     ├[~] type AWSConfiguration
│    │     │ └ properties
│    │     │    └[+] AgentElevatedRoleArn: string
│    │     ├[~] type MCPServerDatadogConfiguration
│    │     │ └ properties
│    │     │    └[+] EnabledElevatedTools: Array<string>
│    │     ├[~] type MCPServerGrafanaConfiguration
│    │     │ └ properties
│    │     │    └[+] EnabledElevatedTools: Array<string>
│    │     ├[+]  type SlackBidirectionalConfiguration
│    │     │  ├      documentation: Optional bidirectional communication configuration. Supply this configuration and set Enabled to true so you can interact with the agent directly from Slack
│    │     │  │      name: SlackBidirectionalConfiguration
│    │     │  └ properties
│    │     │     ├ RoleArn: string (required)
│    │     │     └ Enabled: boolean
│    │     ├[~] type SlackConfiguration
│    │     │ └ properties
│    │     │    └[+] Bidirectional: SlackBidirectionalConfiguration
│    │     └[~] type SourceAwsConfiguration
│    │       └ properties
│    │          └[+] AgentElevatedRoleArn: string
│    └[~]  resource AWS::DevOpsAgent::Service
│       ├ properties
│       │  └[+] Name: string
│       └ types
│          ├[~] type AdditionalServiceDetails
│          │ └ properties
│          │    └[+] GitHub: RegisteredGitHubServiceDetails
│          ├[+]  type GitHubAppVerificationDetails
│          │  ├      documentation: The token verifies an existing DevOps Agent GitHub App installation on github.com and is then discarded. Not supported for GitHub Enterprise Server
│          │  │      name: GitHubAppVerificationDetails
│          │  └ properties
│          │     ├ TokenValue: string (required)
│          │     ├ TargetUrl: string
│          │     ├ OrganizationName: string
│          │     └ AppVariant: string<READ_ONLY|READ_WRITE|CUSTOM_APP> (required)
│          ├[+]  type GitHubDetails
│          │  ├      name: GitHubDetails
│          │  └ properties
│          │     ├ AppVerification: GitHubAppVerificationDetails
│          │     └ DirectAccess: GitHubPatDetails
│          ├[+]  type GitHubPatDetails
│          │  ├      documentation: The token is stored and used as the long-lived credential for GitHub API access
│          │  │      name: GitHubPatDetails
│          │  └ properties
│          │     ├ TokenValue: string (required)
│          │     ├ TargetUrl: string
│          │     └ OrganizationName: string
│          ├[+]  type RegisteredGitHubServiceDetails
│          │  ├      documentation: GitHub service details returned after registration
│          │  │      name: RegisteredGitHubServiceDetails
│          │  └ properties
│          │     ├ Owner: string (required)
│          │     ├ OwnerType: string<organization|user> (required)
│          │     ├ TargetUrl: string
│          │     ├ AppVariant: string<READ_ONLY|READ_WRITE|CUSTOM_APP>
│          │     ├ HostingType: string<SAAS|SELF_MANAGED|DEDICATED>
│          │     └ AuthMode: string<app|pat>
│          └[~] type ServiceDetails
│            └ properties
│               └[+] GitHub: GitHubDetails (immutable)
├[~] service aws-directoryservice
│ └ resources
│    └[~]  resource AWS::DirectoryService::MicrosoftAD
│       └      - arnTemplate: arn:${Partition}:ds:${Region}:${Account}:${DirectoryId}
│              + arnTemplate: arn:${Partition}:ds:${Region}:${Account}:directory/${DirectoryId}
├[~] service aws-drs
│ └ resources
│    └[+]  resource AWS::DRS::RecoveryPlan
│       ├      name: RecoveryPlan
│       │      cloudFormationType: AWS::DRS::RecoveryPlan
│       │      documentation: A Recovery Plan orchestrates multi-server disaster recovery in AWS Elastic Disaster Recovery.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ Name: string (required)
│       │  ├ Description: string
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ Arn: string
│          ├ RecoveryPlanID: string
│          ├ Status: string<ACTIVE|INVALID>
│          ├ CreatedAt: string
│          └ UpdatedAt: string
├[~] service aws-ec2
│ └ resources
│    ├[~]  resource AWS::EC2::ClientVpnRoute
│    │  └ attributes
│    │     └ Id: (documentation changed)
│    ├[~]  resource AWS::EC2::FlowLog
│    │  └      - arnTemplate: arn:${Partition}:ec2:${Region}:${Account}:vpc-flow-log/${FlowLogId}
│    │         + arnTemplate: arn:${Partition}:ec2:${Region}:${Account}:vpc-flow-log/${VpcFlowLogId}
│    └[+]  resource AWS::EC2::SecondaryNetwork
│       ├      name: SecondaryNetwork
│       │      cloudFormationType: AWS::EC2::SecondaryNetwork
│       │      documentation: Resource Type definition for AWS::EC2::SecondaryNetwork. Creates a secondary network for RDMA (Remote Direct Memory Access) connectivity.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:ec2:${Region}:${Account}:secondary-network/${SecondaryNetworkId}
│       │      primaryIdentifier: ["SecondaryNetworkArn"]
│       ├ properties
│       │  ├ NetworkType: string<rdma> (required, immutable)
│       │  ├ Ipv4CidrBlock: string (required, immutable)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ SecondaryNetworkArn: string
│       │  ├ SecondaryNetworkId: string
│       │  ├ OwnerId: string
│       │  └ Ipv4CidrBlockAssociations: Array<Ipv4CidrBlockAssociation>
│       └ types
│          └ type Ipv4CidrBlockAssociation
│            ├      name: Ipv4CidrBlockAssociation
│            └ properties
│               ├ AssociationId: string
│               ├ CidrBlock: string
│               └ State: string<associating|associated|association-failed|disassociating|disassociated|disassociation-failed>
├[~] service aws-eks
│ └ resources
│    └[~]  resource AWS::EKS::Capability
│       └ types
│          └[~] type ArgoCd
│            └ properties
│               └[+] EndpointPrefix: string (immutable)
├[~] service aws-emr
│ └ resources
│    └[~]  resource AWS::EMR::InstanceFleetConfig
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["ClusterId","InstanceFleetId"]
│       ├ attributes
│       │  └[+] InstanceFleetId: string
│       └ types
│          ├[+]  type ApplicationConfiguration
│          │  ├      documentation: Configuration specifies optional configurations for customizing open-source big data applications and environment parameters.
│          │  │      name: ApplicationConfiguration
│          │  └ properties
│          │     ├ Classification: string
│          │     ├ ConfigurationProperties: Map<string, string>
│          │     └ Configurations: Array<ApplicationConfiguration>
│          └[~] type InstanceTypeConfig
│            └ properties
│               └ Configurations: - Array<Configuration> (immutable)
│                                 + Array<ApplicationConfiguration> ⇐ Array<Configuration> (immutable)
├[~] service aws-gamelift
│ └ resources
│    └[~]  resource AWS::GameLift::ContainerGroupDefinition
│       └ types
│          └[~] type GameServerContainerDefinition
│            └ properties
│               └[+] Vcpu: number
├[~] service aws-globalaccelerator
│ └ resources
│    └[~]  resource AWS::GlobalAccelerator::Accelerator
│       └      - arnTemplate: arn:${Partition}:globalaccelerator::${Account}:accelerator/${ResourceId}
│              + arnTemplate: arn:${Partition}:globalaccelerator::${Account}:accelerator/${AcceleratorId}
├[~] service aws-glue
│ └ resources
│    └[~]  resource AWS::Glue::Table
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["CatalogId","DatabaseName","Name"]
│       ├ attributes
│       │  └[-] Id: string
│       └ types
│          ├[~] type IcebergInput
│          │ └ properties
│          │    └ MetadataOperation: - json ⇐ string
│          │                         + string
│          └[~] type IcebergTableInput
│            └ properties
│               └ Properties: - Map<string, string> ⇐ json
│                             + Map<string, string>
├[~] service aws-iot
│ └ resources
│    └[~]  resource AWS::IoT::PolicyPrincipalAttachment
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["PolicyName","Principal"]
│       └ attributes
│          └[-] Id: string
├[~] service aws-iotwireless
│ └ resources
│    └[~]  resource AWS::IoTWireless::WirelessDeviceImportTask
│       └      - arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:WirelessDeviceImportTask/${WirelessDeviceImportTaskId}
│              + arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:ImportTask/${ImportTaskId}
├[~] service aws-ivs
│ └ resources
│    └[+]  resource AWS::IVS::AdConfiguration
│       ├      name: AdConfiguration
│       │      cloudFormationType: AWS::IVS::AdConfiguration
│       │      documentation: Resource type definition for AWS::IVS::AdConfiguration. An ad configuration links Amazon IVS resources to AWS Elemental MediaTailor playback configurations, enabling server-side ad insertion for a channel.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ Name: string
│       │  ├ MediaTailorPlaybackConfigurations: Array<MediaTailorPlaybackConfiguration> (required)
│       │  ├ PostRollConfiguration: PostRollConfiguration
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  └ Arn: string
│       └ types
│          ├ type MediaTailorPlaybackConfiguration
│          │ ├      documentation: Object specifying a configuration for integration with an AWS Elemental MediaTailor (EMT).
│          │ │      name: MediaTailorPlaybackConfiguration
│          │ └ properties
│          │    └ PlaybackConfigurationArn: string
│          └ type PostRollConfiguration
│            ├      documentation: Configuration for the post-roll ad break to use for this ad configuration.
│            │      name: PostRollConfiguration
│            └ properties
│               ├ DurationSeconds: integer (required)
│               └ Enabled: boolean (required)
├[~] service aws-lambda
│ └ resources
│    ├[~]  resource AWS::Lambda::WebFunction
│    │  └      - arnTemplate: undefined
│    │         + arnTemplate: arn:${Partition}:lambda:${Region}:${Account}:web-function/${FunctionName}
│    └[~]  resource AWS::Lambda::WebFunctionRevision
│       └ types
│          └[~] type ServiceConfig
│            └ properties
│               └[+] EgressNetworkConnectorArn: string
├[~] service aws-licensemanager
│ └ resources
│    ├[+]  resource AWS::LicenseManager::LicenseConfiguration
│    │  ├      name: LicenseConfiguration
│    │  │      cloudFormationType: AWS::LicenseManager::LicenseConfiguration
│    │  │      documentation: Resource schema for AWS::LicenseManager::LicenseConfiguration. A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["LicenseConfigurationArn"]
│    │  ├ properties
│    │  │  ├ Name: string (required)
│    │  │  ├ Description: string
│    │  │  ├ LicenseCountingType: string<vCPU|Instance|Core|Socket> (required, immutable)
│    │  │  ├ LicenseCount: integer
│    │  │  ├ LicenseCountHardLimit: boolean
│    │  │  ├ LicenseRules: Array<string> (immutable)
│    │  │  ├ LicenseExpiry: integer
│    │  │  ├ DisassociateWhenNotFound: boolean
│    │  │  ├ ProductInformationList: Array<ProductInformation>
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ LicenseConfigurationId: string
│    │  │  ├ LicenseConfigurationArn: string
│    │  │  ├ Status: string
│    │  │  └ OwnerAccountId: string
│    │  └ types
│    │     ├ type ProductInformation
│    │     │ ├      documentation: Describes product information for a license configuration.
│    │     │ │      name: ProductInformation
│    │     │ └ properties
│    │     │    ├ ResourceType: string (required)
│    │     │    └ ProductInformationFilterList: Array<ProductInformationFilter> (required)
│    │     └ type ProductInformationFilter
│    │       ├      documentation: Describes a product information filter.
│    │       │      name: ProductInformationFilter
│    │       └ properties
│    │          ├ ProductInformationFilterName: string (required)
│    │          ├ ProductInformationFilterValue: Array<string>
│    │          └ ProductInformationFilterComparator: string (required)
│    └[+]  resource AWS::LicenseManager::ReportGenerator
│       ├      name: ReportGenerator
│       │      cloudFormationType: AWS::LicenseManager::ReportGenerator
│       │      documentation: A report generator that creates periodic reports about your AWS License Manager license configurations.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ ReportGeneratorName: string (required)
│       │  ├ ReportType: Array<string<LicenseConfigurationSummaryReport|LicenseConfigurationUsageReport|LicenseAssetGroupUsageReport>> (required)
│       │  ├ ReportContext: ReportContext (required)
│       │  ├ ReportFrequency: ReportFrequency (required)
│       │  ├ Description: string
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ S3Location: S3Location
│       │  ├ CreateTime: string
│       │  └ ReportCreatorAccount: string
│       └ types
│          ├ type ReportContext
│          │ ├      documentation: Details of the license configurations and asset groups that this generator reports on.
│          │ │      name: ReportContext
│          │ └ properties
│          │    ├ LicenseConfigurationArns: Array<string>
│          │    ├ LicenseAssetGroupArns: Array<string>
│          │    ├ ReportStartDate: string
│          │    └ ReportEndDate: string
│          ├ type ReportFrequency
│          │ ├      documentation: Details about how frequently reports are generated.
│          │ │      name: ReportFrequency
│          │ └ properties
│          │    ├ Value: integer
│          │    └ Period: string<DAY|WEEK|MONTH|ONE_TIME>
│          └ type S3Location
│            ├      documentation: Details of the S3 bucket that report generator reports are published to.
│            │      name: S3Location
│            └ properties
│               ├ Bucket: string
│               └ KeyPrefix: string
├[+] service aws-licensemanagerlinuxsubscriptions
│ ├      capitalized: LicenseManagerLinuxSubscriptions
│ │      cloudFormationNamespace: AWS::LicenseManagerLinuxSubscriptions
│ │      name: aws-licensemanagerlinuxsubscriptions
│ │      shortName: licensemanagerlinuxsubscriptions
│ └ resources
│    └ resource AWS::LicenseManagerLinuxSubscriptions::SubscriptionProvider
│      ├      name: SubscriptionProvider
│      │      cloudFormationType: AWS::LicenseManagerLinuxSubscriptions::SubscriptionProvider
│      │      documentation: Resource Type definition for AWS::LicenseManagerLinuxSubscriptions::SubscriptionProvider. Registers a third-party Linux subscription provider so that License Manager can retrieve subscription details for the discovered Linux instances in an account.
│      │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│      │      primaryIdentifier: ["SubscriptionProviderArn"]
│      ├ properties
│      │  ├ SubscriptionProviderSource: string<RedHat> (required, immutable)
│      │  ├ SecretArn: string (required, immutable)
│      │  └ Tags: Array<tag>
│      └ attributes
│         ├ SubscriptionProviderArn: string
│         ├ SubscriptionProviderStatus: string<ACTIVE|INVALID|PENDING>
│         ├ SubscriptionProviderStatusMessage: string
│         └ LastSuccessfulDataRetrievalTime: string
├[~] service aws-mediatailor
│ └ resources
│    ├[~]  resource AWS::MediaTailor::PlaybackConfiguration
│    │  ├ properties
│    │  │  └[+] BeaconingConfiguration: BeaconingConfiguration
│    │  └ types
│    │     ├[+]  type BeaconingConfiguration
│    │     │  ├      documentation: The beaconing configuration for a playback configuration. Beaconing controls whether AWS Elemental MediaTailor includes its own beacons in the ad tracking response, in addition to the ad server beacons. If you omit this setting, MediaTailor uses INSIGHTS.
│    │     │  │      name: BeaconingConfiguration
│    │     │  └ properties
│    │     │     └ ClientSide: ClientSideBeaconingConfiguration
│    │     └[+]  type ClientSideBeaconingConfiguration
│    │        ├      documentation: The beaconing settings that apply to client-side reporting sessions: whether AWS Elemental MediaTailor includes its beacons in the ad tracking response, and which player operation events it reports on. If you omit this object, MediaTailor uses INSIGHTS reporting mode.
│    │        │      name: ClientSideBeaconingConfiguration
│    │        └ properties
│    │           ├ ReportingMode: string<DISABLED|INSIGHTS> (required)
│    │           └ AdditionalEventTypes: Array<string<MUTE|UNMUTE|PAUSE|SKIP>>
│    └[~]  resource AWS::MediaTailor::SourceLocation
│       └      - arnTemplate: arn:${Partition}:mediatailor:${Region}:${Account}:sourceLocation/${ResourceId}
│              + arnTemplate: arn:${Partition}:mediatailor:${Region}:${Account}:sourceLocation/${SourceLocationName}
├[~] service aws-neptune
│ └ resources
│    └[~]  resource AWS::Neptune::DBClusterParameterGroup
│       └      - arnTemplate: arn:${Partition}:rds:${Region}:${Account}:cluster-pg:${ClusterParameterGroupName}
│              + arnTemplate: arn:aws:rds:${Region}:${Account}:cluster-pg:${ClusterPGName}
├[~] service aws-networkfirewall
│ └ resources
│    └[~]  resource AWS::NetworkFirewall::RuleGroup
│       └      - arnTemplate: arn:${Partition}:network-firewall:${Region}:${Account}:stateful-rulegroup/${Name}
│              + arnTemplate: arn:${Partition}:network-firewall:${Region}:${Account}:stateless-rulegroup/${Name}
├[~] service aws-networksecuritymanager
│ └ resources
│    ├[~]  resource AWS::NetworkSecurityManager::Deployment
│    │  ├      - arnTemplate: undefined
│    │  │      + arnTemplate: arn:${Partition}:network-security-manager:${Region}:${Account}:deployment:${DeploymentId}
│    │  └ attributes
│    │     ├ Status: - string<DRAFT|ACTIVE>
│    │     │         + string<DRAFT|ACTIVE|DISABLED>
│    │     └[+] UpdatedAt: string
│    ├[+]  resource AWS::NetworkSecurityManager::Policy
│    │  ├      name: Policy
│    │  │      cloudFormationType: AWS::NetworkSecurityManager::Policy
│    │  │      documentation: Resource Type definition for AWS::NetworkSecurityManager::Policy. Creates and manages a Network Security Manager policy.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:network-security-manager:${Region}:${Account}:policy:${PolicyId}
│    │  │      primaryIdentifier: ["PolicyArn"]
│    │  ├ properties
│    │  │  ├ PolicyName: string (required, immutable)
│    │  │  ├ PolicyDescription: string
│    │  │  ├ Priority: integer (required)
│    │  │  ├ AssociatedTemplateAndRuleList: Array<AssociatedTemplateAndRule>
│    │  │  ├ FirewallType: string<WAF|SHIELD_ADVANCED> (required, immutable)
│    │  │  ├ PolicyConfiguration: PolicyConfiguration (required)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ PolicyId: string
│    │  │  ├ PolicyArn: string
│    │  │  ├ Status: string<DRAFT|ACTIVE|DISABLED>
│    │  │  ├ Version: string
│    │  │  └ UpdatedAt: string
│    │  └ types
│    │     ├ type AssociatedTemplateAndRule
│    │     │ ├      documentation: Associates either a template or a rule with a policy.
│    │     │ │      name: AssociatedTemplateAndRule
│    │     │ └ properties
│    │     │    ├ TemplateArn: string
│    │     │    └ RuleArn: string
│    │     ├ type PolicyConfiguration
│    │     │ ├      documentation: Configuration settings for policy behavior.
│    │     │ │      name: PolicyConfiguration
│    │     │ └ properties
│    │     │    ├ RemediationEnabled: boolean
│    │     │    ├ ResourcesCleanUp: boolean
│    │     │    └ WafConfig: WafConfig
│    │     └ type WafConfig
│    │       ├      documentation: WAF-specific policy settings. Populated only for WAF firewall type policies.
│    │       │      name: WafConfig
│    │       └ properties
│    │          ├ ExistingCustomerWebACLResolution: string<RETROFIT|OVERRIDE_ASSOCIATION|NO_REMEDIATION> (required)
│    │          └ ConflictResolution: string<MERGE_WHERE_APPLICABLE> (required)
│    ├[~]  resource AWS::NetworkSecurityManager::Rule
│    │  └ attributes
│    │     ├ Status: - string<DRAFT|ACTIVE>
│    │     │         + string<DRAFT|ACTIVE|DISABLED>
│    │     └[+] UpdatedAt: string
│    ├[~]  resource AWS::NetworkSecurityManager::Scope
│    │  └ attributes
│    │     ├ Status: - string<DRAFT|ACTIVE>
│    │     │         + string<DRAFT|ACTIVE|DISABLED>
│    │     └[+] UpdatedAt: string
│    └[~]  resource AWS::NetworkSecurityManager::Template
│       ├      - arnTemplate: undefined
│       │      + arnTemplate: arn:${Partition}:network-security-manager:${Region}:${Account}:template:${TemplateId}
│       ├ properties
│       │  └ FirewallType: - string<WAF> (immutable)
│       │                  + string<WAF|NETWORK_FIREWALL|NETWORK_FIREWALL_V2|IGW_FIREWALL> (immutable)
│       └ attributes
│          ├ Status: - string<DRAFT|ACTIVE>
│          │         + string<DRAFT|ACTIVE|DISABLED>
│          └[+] UpdatedAt: string
├[~] service aws-pcs
│ └ resources
│    └[~]  resource AWS::PCS::ComputeNodeGroup
│       └ properties
│          └ CustomLaunchTemplate: - CustomLaunchTemplate (required)
│                                  + CustomLaunchTemplate
├[~] service aws-personalize
│ └ resources
│    └[+]  resource AWS::Personalize::Campaign
│       ├      name: Campaign
│       │      cloudFormationType: AWS::Personalize::Campaign
│       │      documentation: A deployment of a solution version that provides real-time recommendations.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:personalize:${Region}:${Account}:campaign/${ResourceId}
│       │      primaryIdentifier: ["CampaignArn"]
│       ├ properties
│       │  ├ Name: string (required, immutable)
│       │  ├ SolutionVersionArn: string (required)
│       │  ├ MinProvisionedTPS: integer
│       │  ├ CampaignConfig: CampaignConfig
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ CampaignArn: string
│       │  ├ Status: string
│       │  ├ CreationDateTime: string
│       │  └ LastUpdatedDateTime: string
│       └ types
│          └ type CampaignConfig
│            ├      documentation: The configuration details of a campaign.
│            │      name: CampaignConfig
│            └ properties
│               ├ ItemExplorationConfig: Map<string, string>
│               ├ EnableMetadataWithRecommendations: boolean
│               ├ SyncWithLatestSolutionVersion: boolean
│               └ RankingInfluence: Map<string, number>
├[~] service aws-pinpoint
│ └ resources
│    └[~]  resource AWS::Pinpoint::SmsTemplate
│       └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/SMS
│              + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/PUSH
├[~] service aws-quicksight
│ └ resources
│    ├[~]  resource AWS::QuickSight::Analysis
│    │  ├      - arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:analysis/${ResourceId}
│    │  │      + arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:analysis/${AnalysisId}
│    │  └ types
│    │     └[~] type SheetLayoutGroupMember
│    │       └ properties
│    │          └ Type: - json (required)
│    │                  + string<ELEMENT|GROUP> (required)
│    ├[~]  resource AWS::QuickSight::Dashboard
│    │  ├      - arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:dashboard/${ResourceId}
│    │  │      + arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:dashboard/${DashboardId}
│    │  └ types
│    │     └[~] type SheetLayoutGroupMember
│    │       └ properties
│    │          └ Type: - json (required)
│    │                  + string<ELEMENT|GROUP> (required)
│    ├[~]  resource AWS::QuickSight::DataSource
│    │  └ types
│    │     ├[~] type DatabricksParameters
│    │     │ └ properties
│    │     │    ├[+] AuthenticationType: string<PASSWORD|TOKEN|X509|KEYPAIR>
│    │     │    └[+] OAuthParameters: OAuthParameters
│    │     ├[~] type DataSourceCredentials
│    │     │ └ properties
│    │     │    └[+] OAuthClientCredentials: OAuthClientCredentials
│    │     └[+]  type OAuthClientCredentials
│    │        ├      name: OAuthClientCredentials
│    │        └ properties
│    │           ├ Username: string
│    │           ├ ClientSecret: string
│    │           └ ClientId: string
│    └[~]  resource AWS::QuickSight::Template
│       └ types
│          └[~] type SheetLayoutGroupMember
│            └ properties
│               └ Type: - json (required)
│                       + string<ELEMENT|GROUP> (required)
├[~] service aws-rds
│ └ resources
│    ├[+]  resource AWS::RDS::DBClusterEndpoint
│    │  ├      name: DBClusterEndpoint
│    │  │      cloudFormationType: AWS::RDS::DBClusterEndpoint
│    │  │      documentation: Resource Type definition for AWS::RDS::DBClusterEndpoint. Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster. This resource applies only to Aurora DB clusters.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["DBClusterEndpointArn"]
│    │  ├ properties
│    │  │  ├ DBClusterEndpointIdentifier: string (required, immutable)
│    │  │  ├ DBClusterIdentifier: string (required, immutable)
│    │  │  ├ CustomEndpointType: string<READER|WRITER|ANY> (required)
│    │  │  ├ StaticMembers: Array<string>
│    │  │  ├ ExcludedMembers: Array<string>
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ DBClusterEndpointArn: string
│    │     ├ Endpoint: string
│    │     ├ DBClusterEndpointResourceIdentifier: string
│    │     ├ EndpointType: string
│    │     └ Status: string
│    └[~]  resource AWS::RDS::DBParameterGroup
│       └      - arnTemplate: arn:${Partition}:rds:${Region}:${Account}:pg:${ParameterGroupName}
│              + arnTemplate: arn:${Partition}:rds:${Region}:${Account}:pg:${DBParameterGroupName}
├[~] service aws-rekognition
│ └ resources
│    └[~]  resource AWS::Rekognition::StreamProcessor
│       └      - arnTemplate: arn:${Partition}:rekognition:${Region}:${Account}:streamprocessor/${StreamprocessorId}
│              + arnTemplate: arn:${Partition}:rekognition:${Region}:${Account}:streamprocessor/${Name}
├[~] service aws-resiliencehub
│ └ resources
│    └[~]  resource AWS::ResilienceHub::ResiliencyPolicy
│       └      - arnTemplate: arn:${Partition}:resiliencehub:${Region}:${Account}:resiliency-policy/${PolicyId}
│              + arnTemplate: arn:${Partition}:resiliencehub:${Region}:${Account}:resiliency-policy/${ResiliencyPolicyId}
├[~] service aws-sagemaker
│ └ resources
│    └[~]  resource AWS::SageMaker::Cluster
│       └ types
│          └[~] type ClusterInstanceGroup
│            └ properties
│               └[+] ImageReleaseVersion: string
├[~] service aws-scn
│ └ resources
│    └[+]  resource AWS::SCN::Instance
│       ├      name: Instance
│       │      cloudFormationType: AWS::SCN::Instance
│       │      documentation: Resource Type definition for AWS::SCN::Instance
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:scn:${Region}:${Account}:instance/${InstanceId}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ InstanceName: string
│       │  ├ InstanceDescription: string
│       │  ├ WebAppDnsDomain: string (immutable)
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ Arn: string
│          ├ InstanceId: string
│          ├ State: string<Initializing|Active|CreateFailed|DeleteFailed|Deleting|Deleted>
│          ├ AwsAccountId: string
│          ├ CreatedTime: string
│          ├ LastModifiedTime: string
│          └ VersionNumber: number
├[~] service aws-securityagent
│ └ resources
│    └[+]  resource AWS::SecurityAgent::Integration
│       ├      name: Integration
│       │      cloudFormationType: AWS::SecurityAgent::Integration
│       │      documentation: Resource Type definition for AWS::SecurityAgent::Integration. Creates a connection between Security Agent and a third-party provider for code review and remediation.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ Provider: string<GITHUB|GITLAB|BITBUCKET|CONFLUENCE> (required, immutable)
│       │  ├ ProviderInput: ProviderInput (immutable)
│       │  ├ DisplayName: string (required, immutable)
│       │  ├ KmsKeyId: string (immutable)
│       │  ├ PrivateConnectionName: string (immutable)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ IntegrationId: string
│       │  ├ InstallationId: string
│       │  ├ ProviderType: string<SOURCE_CODE|DOCUMENTATION>
│       │  └ TargetUrl: string
│       └ types
│          ├ type BitbucketInput
│          │ ├      documentation: The input required to create a Bitbucket integration.
│          │ │      name: BitbucketInput
│          │ └ properties
│          │    ├ InstallationId: string (required)
│          │    ├ Workspace: string (required)
│          │    ├ Code: string (required)
│          │    └ State: string (required)
│          ├ type ConfluenceInput
│          │ ├      documentation: The input required to create a Confluence integration.
│          │ │      name: ConfluenceInput
│          │ └ properties
│          │    ├ InstallationId: string (required)
│          │    ├ Code: string (required)
│          │    ├ State: string (required)
│          │    └ SiteUrl: string (required)
│          ├ type GitHubInput
│          │ ├      documentation: The input required to create a GitHub integration.
│          │ │      name: GitHubInput
│          │ └ properties
│          │    ├ Code: string (required)
│          │    ├ State: string (required)
│          │    ├ OrganizationName: string
│          │    ├ TargetUrl: string
│          │    └ InstallationId: string
│          ├ type GitLabInput
│          │ ├      documentation: The input required to create a GitLab integration.
│          │ │      name: GitLabInput
│          │ └ properties
│          │    ├ AccessToken: string (required)
│          │    ├ TokenType: string<PERSONAL|GROUP> (required)
│          │    ├ TargetUrl: string
│          │    └ GroupId: string
│          └ type ProviderInput
│            ├      documentation: The provider-specific input required to create the integration. Exactly one of the provider input objects must be specified.
│            │      name: ProviderInput
│            └ properties
│               ├ Github: GitHubInput
│               ├ Gitlab: GitLabInput
│               ├ Bitbucket: BitbucketInput
│               └ Confluence: ConfluenceInput
├[~] service aws-smsvoice
│ └ resources
│    ├[+]  resource AWS::SMSVOICE::NotifyConfiguration
│    │  ├      name: NotifyConfiguration
│    │  │      cloudFormationType: AWS::SMSVOICE::NotifyConfiguration
│    │  │      documentation: A notify configuration defines the settings used to send templated messages with AWS End User Messaging SMS managed messaging, including the display name, use case, enabled channels, and enabled countries.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["NotifyConfigurationArn"]
│    │  ├ properties
│    │  │  ├ DisplayName: string (required, immutable)
│    │  │  ├ UseCase: string<CODE_VERIFICATION> (required, immutable)
│    │  │  ├ DefaultTemplateId: string
│    │  │  ├ PoolId: string
│    │  │  ├ EnabledCountries: Array<string>
│    │  │  ├ EnabledChannels: Array<string<SMS|VOICE|MMS|RCS>> (required)
│    │  │  ├ DeletionProtectionEnabled: boolean
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ NotifyConfigurationArn: string
│    │     ├ NotifyConfigurationId: string
│    │     ├ Tier: string<BASIC|ADVANCED>
│    │     ├ TierUpgradeStatus: string<BASIC|PENDING_UPGRADE|ADVANCED|REJECTED>
│    │     ├ Status: string<PENDING|ACTIVE|REJECTED|REQUIRES_VERIFICATION>
│    │     └ CreatedTimestamp: string
│    └[+]  resource AWS::SMSVOICE::RcsAgent
│       ├      name: RcsAgent
│       │      cloudFormationType: AWS::SMSVOICE::RcsAgent
│       │      documentation: An AWS RCS Agent in AWS End User Messaging SMS. The RCS agent is the top-level resource representing your brand for RCS messaging, and serves as an origination identity for sending RCS messages. A newly created agent is in CREATED status; it advances through TESTING, PARTIAL and ACTIVE only as testing and country launch registrations are submitted and approved by carriers.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["RcsAgentArn"]
│       ├ properties
│       │  ├ DeletionProtectionEnabled: boolean
│       │  ├ OptOutListName: string
│       │  ├ SelfManagedOptOutsEnabled: boolean
│       │  ├ TwoWayEnabled: boolean
│       │  ├ TwoWayChannelArn: string
│       │  ├ TwoWayChannelRole: string
│       │  ├ TwoWayMediaS3BucketName: string
│       │  ├ TwoWayMediaS3KeyPrefix: string
│       │  ├ TwoWayMediaS3Role: string
│       │  ├ TwoWayRcsEventsEnabled: Array<string>
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ RcsAgentArn: string
│       │  ├ RcsAgentId: string
│       │  ├ Status: string<CREATED|PENDING|TESTING|PARTIAL|ACTIVE|DELETED>
│       │  ├ CreatedTimestamp: string
│       │  ├ PoolId: string
│       │  └ TestingAgent: TestingAgentInformation
│       └ types
│          └ type TestingAgentInformation
│            ├      documentation: Information about the testing agent (RCS for Business ID) associated with the RCS agent. A testing agent is created by submitting a testing registration, and allows sending to registered test devices without carrier approval.
│            │      name: TestingAgentInformation
│            └ properties
│               ├ TestingAgentStatus: string<CREATED|PENDING|ACTIVE> (required)
│               ├ TestingAgentId: string
│               └ RegistrationId: string (required)
├[~] service aws-translate
│ └ resources
│    └[~]  resource AWS::Translate::Terminology
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:translate:${Region}:${Account}:terminology/${ResourceName}
└[~] service aws-workspaces
  └ resources
     └[+]  resource AWS::WorkSpaces::Directory
        ├      name: Directory
        │      cloudFormationType: AWS::WorkSpaces::Directory
        │      documentation: Resource Type definition for AWS::WorkSpaces::Directory
        │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
        │      primaryIdentifier: ["Arn"]
        ├ properties
        │  ├ SubnetIds: Array<string> (immutable)
        │  ├ EnableSelfService: boolean (immutable)
        │  ├ Tenancy: string<DEDICATED|SHARED> (immutable)
        │  ├ Tags: Array<tag>
        │  ├ WorkspaceDirectoryName: string (immutable)
        │  ├ WorkspaceDirectoryDescription: string (immutable)
        │  ├ UserIdentityType: string<CUSTOMER_MANAGED|AWS_DIRECTORY_SERVICE|AWS_IAM_IDENTITY_CENTER> (immutable)
        │  ├ IdcInstanceArn: string (immutable)
        │  ├ MicrosoftEntraConfig: MicrosoftEntraConfig (immutable)
        │  ├ WorkspaceType: string<PERSONAL|POOLS> (immutable)
        │  ├ ActiveDirectoryConfig: ActiveDirectoryConfig (immutable)
        │  ├ WorkspaceCreationProperties: DefaultWorkspaceCreationProperties
        │  ├ IpGroupIds: Array<string>
        │  ├ WorkspaceAccessProperties: WorkspaceAccessProperties
        │  ├ SelfservicePermissions: SelfservicePermissions
        │  ├ SamlProperties: SamlProperties
        │  ├ CertificateBasedAuthProperties: CertificateBasedAuthProperties
        │  ├ EndpointEncryptionMode: string<STANDARD_TLS|FIPS_VALIDATED>
        │  └ StreamingProperties: StreamingProperties
        ├ attributes
        │  ├ DirectoryId: string
        │  ├ Arn: string
        │  ├ State: string<REGISTERING|REGISTERED|DEREGISTERING|DEREGISTERED|ERROR>
        │  ├ Alias: string
        │  ├ DirectoryName: string
        │  ├ DirectoryType: string<SIMPLE_AD|AD_CONNECTOR|CUSTOMER_MANAGED|AWS_IAM_IDENTITY_CENTER>
        │  ├ DnsIpAddresses: Array<string>
        │  ├ DnsIpv6Addresses: Array<string>
        │  ├ CustomerUserName: string
        │  ├ IamRoleId: string
        │  ├ RegistrationCode: string
        │  ├ WorkspaceSecurityGroupId: string
        │  └ IDCConfig: IDCConfig
        └ types
           ├ type AccessEndpoint
           │ ├      documentation: Describes the access type and endpoint for a WorkSpace.
           │ │      name: AccessEndpoint
           │ └ properties
           │    ├ AccessEndpointType: string<STREAMING_WSP>
           │    └ VpcEndpointId: string
           ├ type AccessEndpointConfig
           │ ├      documentation: Describes the access endpoint configuration for a WorkSpace.
           │ │      name: AccessEndpointConfig
           │ └ properties
           │    ├ AccessEndpoints: Array<AccessEndpoint> (required)
           │    └ InternetFallbackProtocols: Array<string<PCOIP>>
           ├ type ActiveDirectoryConfig
           │ ├      documentation: Information about the Active Directory config.
           │ │      name: ActiveDirectoryConfig
           │ └ properties
           │    ├ DomainName: string (required)
           │    └ ServiceAccountSecretArn: string (required)
           ├ type CertificateBasedAuthProperties
           │ ├      documentation: Describes the properties of the certificate-based authentication you want to use with your WorkSpaces.
           │ │      name: CertificateBasedAuthProperties
           │ └ properties
           │    ├ Status: string<DISABLED|ENABLED>
           │    └ CertificateAuthorityArn: string
           ├ type DefaultWorkspaceCreationProperties
           │ ├      documentation: The default values that are used to create WorkSpaces.
           │ │      name: DefaultWorkspaceCreationProperties
           │ └ properties
           │    ├ EnableInternetAccess: boolean
           │    ├ DefaultOu: string
           │    ├ CustomSecurityGroupId: string
           │    ├ UserEnabledAsLocalAdministrator: boolean
           │    ├ EnableMaintenanceMode: boolean
           │    └ InstanceIamRoleArn: string
           ├ type GlobalAcceleratorForDirectory
           │ ├      documentation: Describes the Global Accelerator for directory.
           │ │      name: GlobalAcceleratorForDirectory
           │ └ properties
           │    ├ Mode: string<ENABLED_AUTO|DISABLED> (required)
           │    └ PreferredProtocol: string<TCP|NONE>
           ├ type IDCConfig
           │ ├      documentation: Specifies the configurations of the identity center.
           │ │      name: IDCConfig
           │ └ properties
           │    ├ InstanceArn: string
           │    └ ApplicationArn: string
           ├ type MicrosoftEntraConfig
           │ ├      documentation: Specifies the configurations of the Microsoft Entra.
           │ │      name: MicrosoftEntraConfig
           │ └ properties
           │    ├ TenantId: string
           │    └ ApplicationConfigSecretArn: string
           ├ type SamlProperties
           │ ├      documentation: Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.
           │ │      name: SamlProperties
           │ └ properties
           │    ├ Status: string<DISABLED|ENABLED|ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK>
           │    ├ UserAccessUrl: string
           │    └ RelayStateParameterName: string
           ├ type SelfservicePermissions
           │ ├      documentation: Describes the self-service permissions for a directory.
           │ │      name: SelfservicePermissions
           │ └ properties
           │    ├ RestartWorkspace: string<ENABLED|DISABLED>
           │    ├ IncreaseVolumeSize: string<ENABLED|DISABLED>
           │    ├ ChangeComputeType: string<ENABLED|DISABLED>
           │    ├ SwitchRunningMode: string<ENABLED|DISABLED>
           │    └ RebuildWorkspace: string<ENABLED|DISABLED>
           ├ type StorageConnector
           │ ├      documentation: Describes the storage connector.
           │ │      name: StorageConnector
           │ └ properties
           │    ├ ConnectorType: string<HOME_FOLDER> (required)
           │    └ Status: string<ENABLED|DISABLED> (required)
           ├ type StreamingProperties
           │ ├      documentation: Describes the streaming properties.
           │ │      name: StreamingProperties
           │ └ properties
           │    ├ StreamingExperiencePreferredProtocol: string<TCP|UDP>
           │    ├ UserSettings: Array<UserSetting>
           │    ├ StorageConnectors: Array<StorageConnector>
           │    └ GlobalAccelerator: GlobalAcceleratorForDirectory
           ├ type UserSetting
           │ ├      documentation: Information about the user's permission settings.
           │ │      name: UserSetting
           │ └ properties
           │    ├ Action: string<CLIPBOARD_COPY_FROM_LOCAL_DEVICE|CLIPBOARD_COPY_TO_LOCAL_DEVICE|PRINTING_TO_LOCAL_DEVICE|SMART_CARD> (required)
           │    ├ Permission: string<ENABLED|DISABLED> (required)
           │    └ MaximumLength: integer
           └ type WorkspaceAccessProperties
             ├      documentation: The device types and operating systems that can be used to access a WorkSpace.
             │      name: WorkspaceAccessProperties
             └ properties
                ├ DeviceTypeWindows: string<ALLOW|DENY>
                ├ DeviceTypeOsx: string<ALLOW|DENY>
                ├ DeviceTypeWeb: string<ALLOW|DENY>
                ├ DeviceTypeIos: string<ALLOW|DENY>
                ├ DeviceTypeAndroid: string<ALLOW|DENY>
                ├ DeviceTypeChromeOs: string<ALLOW|DENY>
                ├ DeviceTypeZeroClient: string<ALLOW|DENY>
                ├ DeviceTypeLinux: string<ALLOW|DENY>
                ├ DeviceTypeWorkSpacesThinClient: string<ALLOW|DENY>
                └ AccessEndpointConfig: AccessEndpointConfig
```

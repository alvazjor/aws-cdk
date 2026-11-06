Updates the L1 CloudFormation resource definitions with the latest changes from `@aws-cdk/aws-service-spec`

**L1 CloudFormation resource definition changes:**
```
├[~] service aws-appstream
│ └ resources
│    ├[~]  resource AWS::AppStream::AppBlockBuilder
│    │  └ properties
│    │     └[+] DisableIMDSV1: boolean
│    ├[~]  resource AWS::AppStream::Fleet
│    │  ├      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["Name"]
│    │  ├ properties
│    │  │  └[+] AttributesToDelete: Array<string<VPC_CONFIGURATION|VPC_CONFIGURATION_SECURITY_GROUP_IDS|DOMAIN_JOIN_INFO|IAM_ROLE_ARN|USB_DEVICE_FILTER_STRINGS|SESSION_SCRIPT_S3_LOCATION|MAX_SESSIONS_PER_INSTANCE>>
│    │  └ attributes
│    │     └[+] Arn: string
│    └[~]  resource AWS::AppStream::StackFleetAssociation
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["FleetName","StackName"]
│       └ properties
│          ├ FleetName: - string (required)
│          │            + string (required, immutable)
│          └ StackName: - string (required)
│                       + string (required, immutable)
├[~] service aws-appsync
│ └ resources
│    └[~]  resource AWS::AppSync::ApiCache
│       ├ properties
│       │  ├ AtRestEncryptionEnabled: - boolean
│       │  │                          + boolean (immutable)
│       │  ├ TransitEncryptionEnabled: - boolean
│       │  │                           + boolean (immutable)
│       │  └ Ttl: - number (required)
│       │         + integer ⇐ number (required)
│       └ attributes
│          └ Id: (documentation changed)
├[~] service aws-arcregionswitch
│ └ resources
│    └[~]  resource AWS::ARCRegionSwitch::Plan
│       ├ properties
│       │  └[+] ServiceQuotaChecksEnabled: boolean
│       └ types
│          ├[~] type Ec2AsgCapacityIncreaseConfiguration
│          │ └ properties
│          │    └[+] WaitELBTargetGroupHealthy: string<enabled|disabled>
│          └[~] type EcsCapacityIncreaseConfiguration
│            └ properties
│               └[+] WaitELBTargetGroupHealthy: string<enabled|disabled>
├[~] service aws-bcmpricingcalculator
│ └ resources
│    └[~]  resource AWS::BcmPricingCalculator::WorkloadEstimate
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:bcm-pricing-calculator::${Account}:workload-estimate/${WorkloadEstimateId}
├[~] service aws-bedrockagentcore
│ └ resources
│    ├[~]  resource AWS::BedrockAgentCore::Harness
│    │  ├ properties
│    │  │  └[+] Hooks: Array<HarnessHook>
│    │  └ types
│    │     ├[+]  type HarnessAfterInvocationHook
│    │     │  ├      documentation: A hook that runs after an agent invocation.
│    │     │  │      name: HarnessAfterInvocationHook
│    │     │  └ properties
│    │     │     ├ Name: string (required)
│    │     │     └ Target: HarnessHookTarget (required)
│    │     ├[+]  type HarnessAfterToolCallHook
│    │     │  ├      documentation: A hook that runs after each tool call.
│    │     │  │      name: HarnessAfterToolCallHook
│    │     │  └ properties
│    │     │     ├ Name: string (required)
│    │     │     └ Target: HarnessHookTarget (required)
│    │     ├[~] type HarnessBedrockModelConfig
│    │     │ └ properties
│    │     │    └[+] AdditionalParams: json
│    │     ├[+]  type HarnessBeforeInvocationHook
│    │     │  ├      documentation: A hook that runs before an agent invocation.
│    │     │  │      name: HarnessBeforeInvocationHook
│    │     │  └ properties
│    │     │     ├ Name: string (required)
│    │     │     └ Target: HarnessHookTarget (required)
│    │     ├[+]  type HarnessBeforeToolCallHook
│    │     │  ├      documentation: A hook that runs before each tool call.
│    │     │  │      name: HarnessBeforeToolCallHook
│    │     │  └ properties
│    │     │     ├ Name: string (required)
│    │     │     └ Target: HarnessHookTarget (required)
│    │     ├[+]  type HarnessHook
│    │     │  ├      documentation: A lifecycle hook configured for one phase of the agent loop.
│    │     │  │      name: HarnessHook
│    │     │  └ properties
│    │     │     ├ BeforeInvocation: HarnessBeforeInvocationHook
│    │     │     ├ AfterInvocation: HarnessAfterInvocationHook
│    │     │     ├ BeforeToolCall: HarnessBeforeToolCallHook
│    │     │     └ AfterToolCall: HarnessAfterToolCallHook
│    │     ├[+]  type HarnessHookEventBridgeTarget
│    │     │  ├      documentation: An EventBridge event bus that receives lifecycle hook events asynchronously.
│    │     │  │      name: HarnessHookEventBridgeTarget
│    │     │  └ properties
│    │     │     └ Arn: string (required)
│    │     ├[+]  type HarnessHookLambdaTarget
│    │     │  ├      documentation: A Lambda function invoked synchronously for a lifecycle hook.
│    │     │  │      name: HarnessHookLambdaTarget
│    │     │  └ properties
│    │     │     ├ Arn: string (required)
│    │     │     ├ TimeoutSeconds: integer
│    │     │     └ FailureMode: string<allow|deny>
│    │     ├[+]  type HarnessHookSnsTarget
│    │     │  ├      documentation: An SNS topic that receives lifecycle hook events asynchronously.
│    │     │  │      name: HarnessHookSnsTarget
│    │     │  └ properties
│    │     │     └ Arn: string (required)
│    │     ├[+]  type HarnessHookTarget
│    │     │  ├      documentation: The destination that receives lifecycle hook events.
│    │     │  │      name: HarnessHookTarget
│    │     │  └ properties
│    │     │     ├ Lambda: HarnessHookLambdaTarget
│    │     │     ├ Sns: HarnessHookSnsTarget
│    │     │     └ EventBridge: HarnessHookEventBridgeTarget
│    │     ├[~] type HarnessLiteLlmModelConfig
│    │     │ └ properties
│    │     │    └[+] AdditionalParams: json
│    │     └[~] type HarnessOpenAiModelConfig
│    │       └ properties
│    │          └[+] AdditionalParams: json
│    └[~]  resource AWS::BedrockAgentCore::OnlineEvaluationConfig
│       ├ properties
│       │  └[+] OutputConfig: OutputConfig
│       ├ attributes
│       │  └[-] OutputConfig: OutputConfig
│       └ types
│          ├[~] type CloudWatchLogsInputConfig
│          │ └ properties
│          │    ├[+] LogGroupNamePrefixes: Array<string>
│          │    └ LogGroupNames: - Array<string> (required)
│          │                     + Array<string>
│          └[~] type CloudWatchOutputConfig
│            └ properties
│               ├ LogGroupName: (documentation changed)
│               ├[+] MetricsNamespace: string
│               └[+] ResultDestination: string<DEDICATED_LOG_GROUP|SOURCE_LOG_GROUP>
├[~] service aws-cloud9
│ └ resources
│    └[~]  resource AWS::Cloud9::EnvironmentEC2
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["EnvironmentId"]
│       ├ properties
│       │  ├ ImageId: - string (required, immutable)
│       │  │          + string (immutable)
│       │  └ InstanceType: - string (required, immutable)
│       │                  + string (immutable)
│       └ attributes
│          ├[+] EnvironmentId: string
│          └[-] Id: string
├[~] service aws-cloudfront
│ └ resources
│    └[~]  resource AWS::CloudFront::FieldLevelEncryptionProfile
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:cloudfront::${Account}:field-level-encryption-profile/${Id}
├[~] service aws-cloudwatch
│ └ resources
│    ├[~]  resource AWS::CloudWatch::Alarm
│    │  ├ properties
│    │  │  └ WarmUpConfiguration: (documentation changed)
│    │  └ types
│    │     └[~] type WarmUpConfiguration
│    │       ├      - documentation: undefined
│    │       │      + documentation: The configuration settings that define the warm-up behavior for an alarm. Use these settings to delay alarm evaluation after you create or update the alarm, which reduces alarm noise while a new resource or service starts publishing data.
│    │       │       During the warm-up period, the alarm stays in ``INSUFFICIENT_DATA`` and does not perform alarm actions.
│    │       └ properties
│    │          ├ OnlyStartEvaluatingAfterWarmUpPeriodEnds: (documentation changed)
│    │          └ WarmUpPeriodDurationInMinutes: (documentation changed)
│    ├[~]  resource AWS::CloudWatch::OTelEnrichment
│    │  ├ properties
│    │  │  ├[+] ExcludeFilters: Array<OTelEnrichmentMetricSelector>
│    │  │  └[+] IncludeFilters: Array<OTelEnrichmentMetricSelector>
│    │  └ types
│    │     └[+]  type OTelEnrichmentMetricSelector
│    │        ├      documentation: Selects metrics within one namespace. The same shape serves both the include and the exclude direction. Namespaces are compared byte-for-byte and case-sensitively; no wildcards, prefixes or normalization.
│    │        │      name: OTelEnrichmentMetricSelector
│    │        └ properties
│    │           ├ Namespace: string (required)
│    │           └ MetricNames: Array<string>
│    └[+]  resource AWS::CloudWatch::View
│       ├      name: View
│       │      cloudFormationType: AWS::CloudWatch::View
│       │      documentation: Resource Type definition for AWS::CloudWatch::View. A view is a named, reusable SQL query that can be referenced from CloudWatch telemetry queries. View names must be unique within the account and region.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:cloudwatch:${Region}:${Account}:view/${ViewName}
│       │      primaryIdentifier: ["Name"]
│       ├ properties
│       │  ├ Name: string (immutable)
│       │  ├ Definition: string (required)
│       │  ├ Description: string
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ Arn: string
│          ├ Type: string<USER|MANAGED>
│          ├ CreatedAt: string
│          └ UpdatedAt: string
├[~] service aws-codebuild
│ └ resources
│    └[~]  resource AWS::CodeBuild::ReportGroup
│       ├ properties
│       │  └ Type: - string (required, immutable)
│       │          + string<TEST|CODE_COVERAGE> (required, immutable)
│       └ types
│          ├[~] type ReportExportConfig
│          │ └ properties
│          │    └ ExportConfigType: - string (required)
│          │                        + string<S3|NO_EXPORT> (required)
│          └[~] type S3ReportExportConfig
│            └ properties
│               └ Packaging: - string
│                            + string<NONE|ZIP>
├[~] service aws-comprehend
│ └ resources
│    ├[~]  resource AWS::Comprehend::EntityRecognizer
│    │  └      - arnTemplate: undefined
│    │         + arnTemplate: arn:${Partition}:comprehend:${Region}:${Account}:entity-recognizer/${EntityRecognizerName}
│    └[+]  resource AWS::Comprehend::EntityRecognizerEndpoint
│       ├      name: EntityRecognizerEndpoint
│       │      cloudFormationType: AWS::Comprehend::EntityRecognizerEndpoint
│       │      documentation: An Amazon Comprehend endpoint that hosts a custom entity recognizer model for real-time inference.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:comprehend:${Region}:${Account}:entity-recognizer-endpoint/${EndpointName}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ EndpointName: string (required, immutable)
│       │  ├ ModelArn: string
│       │  ├ DesiredInferenceUnits: integer (required)
│       │  ├ DataAccessRoleArn: string
│       │  ├ FlywheelArn: string (immutable)
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ Arn: string
│          ├ CurrentInferenceUnits: integer
│          ├ EndpointStatus: string<CREATING|DELETING|FAILED|IN_SERVICE|UPDATING>
│          ├ CreationTime: string
│          └ LastModifiedTime: string
├[~] service aws-config
│ └ resources
│    ├[~]  resource AWS::Config::ConfigurationRecorder
│    │  └ attributes
│    │     └[-] Id: string
│    └[~]  resource AWS::Config::OrganizationConfigRule
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["OrganizationConfigRuleName"]
│       └ attributes
│          ├[-] Id: string
│          └[+] OrganizationConfigRuleArn: string
├[~] service aws-connect
│ └ resources
│    ├[~]  resource AWS::Connect::EvaluationForm
│    │  ├ properties
│    │  │  └ AIVersion: (documentation changed)
│    │  └ types
│    │     ├[~] type EvaluationFormMetricConfiguration
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: Information about the metric configuration for an evaluation form question. Use this to associate a business outcome metric with a question.
│    │     │ └ properties
│    │     │    ├ MetricName: (documentation changed)
│    │     │    └ MetricType: (documentation changed)
│    │     └[~] type EvaluationFormQuestion
│    │       └ properties
│    │          └ MetricConfiguration: (documentation changed)
│    ├[~]  resource AWS::Connect::IntegrationAssociation
│    │  └ properties
│    │     ├ IntegrationType: - string<LEX_BOT|LAMBDA_FUNCTION|APPLICATION|CASES_DOMAIN|WISDOM_ASSISTANT|WISDOM_KNOWLEDGE_BASE|WISDOM_QUICK_RESPONSES|FILE_SCANNER|MESSAGE_PROCESSOR|Q_MESSAGE_TEMPLATES|SES_IDENTITY> (required, immutable)
│    │     │                  + string<LEX_BOT|LAMBDA_FUNCTION|APPLICATION|CASES_DOMAIN|WISDOM_ASSISTANT|WISDOM_KNOWLEDGE_BASE|WISDOM_QUICK_RESPONSES|FILE_SCANNER|MESSAGE_PROCESSOR|Q_MESSAGE_TEMPLATES|SES_IDENTITY|EVENT> (required, immutable)
│    │     ├[+] SourceApplicationName: string (immutable)
│    │     ├[+] SourceApplicationUrl: string (immutable)
│    │     └[+] SourceType: string<SALESFORCE|ZENDESK|CASES> (immutable)
│    └[+]  resource AWS::Connect::UseCase
│       ├      name: UseCase
│       │      cloudFormationType: AWS::Connect::UseCase
│       │      documentation: Resource Type definition for a use case associated with an Amazon Connect integration association.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["InstanceId","IntegrationAssociationId","UseCaseId"]
│       ├ properties
│       │  ├ InstanceId: string (required, immutable)
│       │  ├ IntegrationAssociationId: string (required, immutable)
│       │  ├ UseCaseType: string<RULES_EVALUATION|CONNECT_CAMPAIGNS> (required, immutable)
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ UseCaseArn: string
│          └ UseCaseId: string
├[~] service aws-datapipeline
│ └ resources
│    └[~]  resource AWS::DataPipeline::Pipeline
│       └      - arnTemplate: arn:${Partition}:datapipeline:${Region}:${Account}:pipeline/${PipelineID}
│              + arnTemplate: arn:${Partition}:datapipeline:${Region}:${Account}:pipeline/${PipelineId}
├[~] service aws-datazone
│ └ resources
│    ├[~]  resource AWS::DataZone::PolicyGrant
│    │  ├ properties
│    │  │  ├ Detail: - PolicyGrantDetail (immutable)
│    │  │  │         + PolicyGrantDetail (required, immutable)
│    │  │  └ Principal: - PolicyGrantPrincipal (immutable)
│    │  │               + PolicyGrantPrincipal (required, immutable)
│    │  └ types
│    │     └[~] type ProjectPolicyGrantPrincipal
│    │       └ properties
│    │          └ ProjectDesignation: - string<OWNER|CONTRIBUTOR|PROJECT_CATALOG_STEWARD>
│    │                                + string
│    ├[~]  resource AWS::DataZone::Project
│    │  └ types
│    │     └[~] type ProjectMembershipAssignment
│    │       └ properties
│    │          └ Designation: - string<PROJECT_OWNER|PROJECT_CONTRIBUTOR> (required)
│    │                         + string (required)
│    └[~]  resource AWS::DataZone::ProjectMembership
│       └ properties
│          └ Designation: - string<PROJECT_OWNER|PROJECT_CONTRIBUTOR|PROJECT_CATALOG_VIEWER|PROJECT_CATALOG_CONSUMER|PROJECT_CATALOG_STEWARD> (required)
│                         + string (required)
├[~] service aws-devicefarm
│ └ resources
│    └[~]  resource AWS::DeviceFarm::InstanceProfile
│       └      - arnTemplate: arn:${Partition}:devicefarm:${Region}:${Account}:instanceprofile:${ResourceId}
│              + arnTemplate: arn:${Partition}:devicefarm:${Region}:${Account}:instanceprofile:${InstanceProfileId}
├[~] service aws-directoryservice
│ └ resources
│    └[~]  resource AWS::DirectoryService::MicrosoftAD
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["DirectoryId"]
│       ├ properties
│       │  ├ Edition: - string (immutable)
│       │  │          + string<Enterprise|Standard> (default="Enterprise", immutable)
│       │  ├ EnableSso: - boolean
│       │  │            + boolean (default=false)
│       │  └ Password: - string (required, immutable)
│       │              + string (immutable)
│       └ attributes
│          ├[+] DirectoryId: string
│          └[-] Id: string
├[~] service aws-dms
│ └ resources
│    └[~]  resource AWS::DMS::DataProvider
│       ├ properties
│       │  └[+] Virtual: boolean (default=false)
│       └ types
│          ├[~] type IbmDb2LuwSettings
│          │ └ properties
│          │    ├[+] EncryptionAlgorithm: integer
│          │    └[+] SecurityMechanism: integer
│          └[~] type MicrosoftSqlServerSettings
│            └ properties
│               ├[+] S3AccessRoleArn: string
│               └[+] S3Path: string
├[~] service aws-docdb
│ └ resources
│    └[~]  resource AWS::DocDB::DBClusterParameterGroup
│       └      - arnTemplate: arn:${Partition}:rds:${Region}:${Account}:cluster-pg:${ClusterParameterGroupName}
│              + arnTemplate: arn:${Partition}:rds:${Region}:${Account}:cluster-pg:${ClusterPGName}
├[~] service aws-drs
│ └ resources
│    └[~]  resource AWS::DRS::ReplicationConfigurationTemplate
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:drs:${Region}:${Account}:replication-configuration-template/${ReplicationConfigurationTemplateID}
├[~] service aws-ec2
│ └ resources
│    ├[~]  resource AWS::EC2::ClientVpnAuthorizationRule
│    │  └ attributes
│    │     └ Id: (documentation changed)
│    ├[~]  resource AWS::EC2::InstanceEventWindow
│    │  └      - arnTemplate: undefined
│    │         + arnTemplate: arn:${Partition}:ec2:${Region}:${Account}:instance-event-window/${InstanceEventWindowId}
│    └[~]  resource AWS::EC2::SubnetCidrReservation
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:ec2:${Region}:${Account}:subnet-cidr-reservation/${SubnetCidrReservationId}
├[~] service aws-ecs
│ └ resources
│    └[~]  resource AWS::ECS::Service
│       └ types
│          ├[+]  type VpcLatticeAdvancedConfiguration
│          │  ├      name: VpcLatticeAdvancedConfiguration
│          │  └ properties
│          │     ├ TestListenerRule: string
│          │     ├ AlternateTargetGroupArn: string
│          │     └ ProductionListenerRule: string
│          └[~] type VpcLatticeConfiguration
│            └ properties
│               └[+] AdvancedConfiguration: VpcLatticeAdvancedConfiguration
├[~] service aws-elasticache
│ └ resources
│    ├[~]  resource AWS::ElastiCache::ServerlessCache
│    │  └ properties
│    │     └[+] ConnectionType: string<vpc|public> (immutable)
│    └[+]  resource AWS::ElastiCache::Snapshot
│       ├      name: Snapshot
│       │      cloudFormationType: AWS::ElastiCache::Snapshot
│       │      documentation: Represents a copy of an entire cluster or replication group as of the time when the snapshot was taken.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:elasticache:${Region}:${Account}:snapshot:${SnapshotName}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ SnapshotName: string (required, immutable)
│       │  ├ CacheClusterId: string (immutable)
│       │  ├ ReplicationGroupId: string (immutable)
│       │  ├ KmsKeyId: string (immutable)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ SnapshotStatus: string<creating|available|restoring|copying|deleting|failed|deleted>
│       │  ├ SnapshotSource: string
│       │  ├ CacheNodeType: string
│       │  ├ Engine: string
│       │  ├ EngineVersion: string
│       │  ├ NumCacheNodes: integer
│       │  ├ NumNodeGroups: integer
│       │  ├ PreferredMaintenanceWindow: string
│       │  ├ CacheParameterGroupName: string
│       │  ├ CacheSubnetGroupName: string
│       │  ├ SnapshotRetentionLimit: integer
│       │  ├ SnapshotWindow: string
│       │  ├ TopicArn: string
│       │  ├ Port: integer
│       │  ├ PreferredAvailabilityZone: string
│       │  ├ VpcId: string
│       │  ├ AutoMinorVersionUpgrade: boolean
│       │  ├ AutomaticFailover: string<enabled|disabled|enabling|disabling>
│       │  ├ ReplicationGroupDescription: string
│       │  ├ DataTiering: string<enabled|disabled>
│       │  ├ CacheClusterCreateTime: string
│       │  └ NodeSnapshots: Array<NodeSnapshot>
│       └ types
│          └ type NodeSnapshot
│            ├      name: NodeSnapshot
│            └ properties
│               ├ CacheClusterId: string
│               ├ CacheNodeCreateTime: string
│               ├ CacheNodeId: string
│               ├ CacheSize: string
│               ├ NodeGroupId: string
│               └ SnapshotCreateTime: string
├[~] service aws-emrcontainers
│ └ resources
│    └[~]  resource AWS::EMRContainers::JobTemplate
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:emr-containers:${Region}:${Account}:/jobtemplates/${JobTemplateId}
├[~] service aws-gamelift
│ └ resources
│    └[~]  resource AWS::GameLift::ContainerGroupDefinition
│       └ properties
│          └ TotalVcpuLimit: - number (required)
│                            + number
├[~] service aws-globalaccelerator
│ └ resources
│    └[~]  resource AWS::GlobalAccelerator::Accelerator
│       └      - arnTemplate: arn:${Partition}:globalaccelerator::${Account}:accelerator/${AcceleratorId}
│              + arnTemplate: arn:${Partition}:globalaccelerator::${Account}:accelerator/${ResourceId}
├[~] service aws-glue
│ └ resources
│    └[~]  resource AWS::Glue::Table
│       ├ properties
│       │  └ Name: (documentation changed)
│       └ types
│          ├[~] type IcebergInput
│          │ └ properties
│          │    └ IcebergTableInput: (documentation changed)
│          ├[~] type IcebergPartitionField
│          │ ├      - documentation: undefined
│          │ │      + documentation: A partition field in an Iceberg partition spec.
│          │ └ properties
│          │    ├ FieldId: (documentation changed)
│          │    ├ Name: (documentation changed)
│          │    ├ SourceId: (documentation changed)
│          │    └ Transform: (documentation changed)
│          ├[~] type IcebergPartitionSpec
│          │ ├      - documentation: undefined
│          │ │      + documentation: The partition spec for an Iceberg table.
│          │ └ properties
│          │    ├ Fields: (documentation changed)
│          │    └ SpecId: (documentation changed)
│          ├[~] type IcebergSchema
│          │ ├      - documentation: undefined
│          │ │      + documentation: The schema for an Iceberg table.
│          │ └ properties
│          │    ├ Fields: (documentation changed)
│          │    ├ IdentifierFieldIds: (documentation changed)
│          │    ├ SchemaId: (documentation changed)
│          │    └ Type: (documentation changed)
│          ├[~] type IcebergSortField
│          │ ├      - documentation: undefined
│          │ │      + documentation: A sort field in an Iceberg sort order.
│          │ └ properties
│          │    ├ Direction: (documentation changed)
│          │    ├ NullOrder: (documentation changed)
│          │    ├ SourceId: (documentation changed)
│          │    └ Transform: (documentation changed)
│          ├[~] type IcebergSortOrder
│          │ ├      - documentation: undefined
│          │ │      + documentation: The sort order for an Iceberg table.
│          │ └ properties
│          │    ├ Fields: (documentation changed)
│          │    └ OrderId: (documentation changed)
│          ├[~] type IcebergStructField
│          │ ├      - documentation: undefined
│          │ │      + documentation: A field in an Iceberg schema.
│          │ └ properties
│          │    ├ Doc: (documentation changed)
│          │    ├ Id: (documentation changed)
│          │    ├ Name: (documentation changed)
│          │    ├ Required: (documentation changed)
│          │    └ Type: (documentation changed)
│          ├[~] type IcebergTableInput
│          │ ├      - documentation: undefined
│          │ │      + documentation: Specifies the Iceberg table configuration.
│          │ └ properties
│          │    ├ Location: (documentation changed)
│          │    ├ PartitionSpec: (documentation changed)
│          │    ├ Properties: - json
│          │    │             + Map<string, string> ⇐ json
│          │    │             (documentation changed)
│          │    ├ Schema: (documentation changed)
│          │    └ WriteOrder: (documentation changed)
│          ├[~] type TableInput
│          │ └ properties
│          │    └ ViewDefinition: (documentation changed)
│          ├[~] type ViewDefinition
│          │ ├      - documentation: undefined
│          │ │      + documentation: A structure that defines the view.
│          │ └ properties
│          │    ├ Definer: (documentation changed)
│          │    ├ IsProtected: (documentation changed)
│          │    ├ Representations: (documentation changed)
│          │    └ SubObjects: (documentation changed)
│          └[~] type ViewRepresentation
│            ├      - documentation: undefined
│            │      + documentation: A structure that defines a view representation.
│            └ properties
│               ├ Dialect: (documentation changed)
│               ├ DialectVersion: (documentation changed)
│               ├ ValidationConnection: (documentation changed)
│               ├ ViewExpandedText: (documentation changed)
│               └ ViewOriginalText: (documentation changed)
├[~] service aws-iotwireless
│ └ resources
│    └[~]  resource AWS::IoTWireless::PartnerAccount
│       └      - arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:SidewalkAccount/${AmazonId}
│              + arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:SidewalkAccount/${SidewalkAccountId}
├[~] service aws-kinesis
│ └ resources
│    └[~]  resource AWS::Kinesis::Stream
│       └ properties
│          └[+] RecordDistributionStrategy: string<AUTO|USER_PARTITION_KEY>
├[~] service aws-lambda
│ └ resources
│    ├[~]  resource AWS::Lambda::NetworkConnector
│    │  ├ attributes
│    │  │  ├[+] LatestVersion: integer
│    │  │  └[+] LatestVersionArn: string
│    │  └ types
│    │     └[~] type VpcEgressConfiguration
│    │       └ properties
│    │          ├ AssociatedComputeResourceTypes: (documentation changed)
│    │          ├ NetworkProtocol: - string<IPv4|DualStack>
│    │          │                  + string<IPv4|DualStack> (required)
│    │          └ SecurityGroupIds: - Array<string>
│    │                              + Array<string> (required)
│    ├[+]  resource AWS::Lambda::WebFunction
│    │  ├      name: WebFunction
│    │  │      cloudFormationType: AWS::Lambda::WebFunction
│    │  │      documentation: Resource Type definition for AWS::Lambda::WebFunction. Creates a Lambda Web function container.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["FunctionArn"]
│    │  ├ properties
│    │  │  ├ FunctionName: string (required, immutable)
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ FunctionArn: string
│    │     ├ State: string<Pending|Active|Failed|Deleting>
│    │     ├ StateReason: string
│    │     ├ CreatedAt: string
│    │     └ UpdatedAt: string
│    ├[+]  resource AWS::Lambda::WebFunctionEndpoint
│    │  ├      name: WebFunctionEndpoint
│    │  │      cloudFormationType: AWS::Lambda::WebFunctionEndpoint
│    │  │      documentation: Resource Type definition for AWS::Lambda::WebFunctionEndpoint. An endpoint exposes a Lambda web function over HTTPS and routes traffic to one or more revisions. The endpoint type determines how traffic is served and routed across Regions.
│    │  │      primaryIdentifier: ["EndpointArn"]
│    │  ├ properties
│    │  │  ├ FunctionName: string (required, immutable)
│    │  │  ├ EndpointName: string (required, immutable)
│    │  │  ├ Description: string
│    │  │  ├ EndpointType: string<HomeRegion|MultiRegion|PerRegion> (required, immutable)
│    │  │  ├ AuthType: string<ApplicationManaged|IamAuth> (required)
│    │  │  ├ RevisionWeights: Array<RevisionWeight>
│    │  │  ├ Regions: Array<string> (immutable)
│    │  │  ├ ScalingConfig: ScalingConfig
│    │  │  └ ThrottleConfig: ThrottleConfig
│    │  ├ attributes
│    │  │  ├ FunctionArn: string
│    │  │  ├ EndpointArn: string
│    │  │  ├ DomainName: string
│    │  │  ├ State: string<Pending|Active|Failed|Deleting>
│    │  │  ├ StateReason: string
│    │  │  ├ UpdateStatus: string<InProgress|Successful|Failed>
│    │  │  ├ UpdateStatusReason: string
│    │  │  ├ RegionalEndpoints: Map<string, RegionalEndpoint>
│    │  │  ├ CreatedAt: string
│    │  │  └ UpdatedAt: string
│    │  └ types
│    │     ├ type RegionalEndpoint
│    │     │ ├      documentation: Per-region endpoint information.
│    │     │ │      name: RegionalEndpoint
│    │     │ └ properties
│    │     │    ├ DomainName: string
│    │     │    ├ AuthType: string<ApplicationManaged|IamAuth>
│    │     │    ├ RevisionWeights: Array<RevisionWeight>
│    │     │    ├ ScalingConfig: ScalingConfig
│    │     │    ├ ThrottleConfig: ThrottleConfig
│    │     │    ├ State: string<Pending|Active|Failed|Deleting>
│    │     │    ├ StateReason: string
│    │     │    ├ UpdateStatus: string<InProgress|Successful|Failed>
│    │     │    └ UpdateStatusReason: string
│    │     ├ type RevisionWeight
│    │     │ ├      documentation: A revision routing entry.
│    │     │ │      name: RevisionWeight
│    │     │ └ properties
│    │     │    ├ RevisionId: string (required)
│    │     │    └ Weight: integer (required)
│    │     ├ type ScalingConfig
│    │     │ ├      documentation: The scaling configuration for the endpoint. Optionally constrains how many concurrent execution environments the endpoint can use, in addition to your account's vCPU quota.
│    │     │ │      name: ScalingConfig
│    │     │ └ properties
│    │     │    └ MaxEnvironments: integer
│    │     └ type ThrottleConfig
│    │       ├      documentation: The throttling configuration for the endpoint. Optionally constrains the request rate that the endpoint accepts, in addition to your account's rate limit quota.
│    │       │      name: ThrottleConfig
│    │       └ properties
│    │          └ RateLimit: integer
│    └[+]  resource AWS::Lambda::WebFunctionRevision
│       ├      name: WebFunctionRevision
│       │      cloudFormationType: AWS::Lambda::WebFunctionRevision
│       │      documentation: Resource Type definition for AWS::Lambda::WebFunctionRevision. An immutable revision of a Lambda web function, containing the function code and configuration.
│       │      primaryIdentifier: ["RevisionArn"]
│       ├ properties
│       │  ├ FunctionName: string (required, immutable)
│       │  ├ Description: string (immutable)
│       │  ├ KmsKeyArn: string (immutable)
│       │  ├ ServiceConfig: ServiceConfig (required, immutable)
│       │  └ BuildConfig: BuildConfig (required, immutable)
│       ├ attributes
│       │  ├ FunctionArn: string
│       │  ├ RevisionId: string
│       │  ├ RevisionArn: string
│       │  ├ State: string<Pending|Active|Failed>
│       │  ├ StateReason: string
│       │  └ CreatedAt: string
│       └ types
│          ├ type BuildConfig
│          │ ├      documentation: The build configuration for the revision.
│          │ │      name: BuildConfig
│          │ └ properties
│          │    ├ RuntimeConfig: RuntimeConfig (required)
│          │    └ CodeConfig: CodeConfig (required)
│          ├ type CodeConfig
│          │ ├      documentation: The code configuration for the revision.
│          │ │      name: CodeConfig
│          │ └ properties
│          │    └ S3Object: S3Object (required)
│          ├ type LoggingConfig
│          │ ├      documentation: The logging configuration.
│          │ │      name: LoggingConfig
│          │ └ properties
│          │    ├ ApplicationLogLevel: string<TRACE|DEBUG|INFO|WARN|ERROR|FATAL>
│          │    ├ LogGroup: string
│          │    └ SystemLogLevel: string<DEBUG|INFO|WARN>
│          ├ type RuntimeConfig
│          │ ├      documentation: The runtime configuration for the revision.
│          │ │      name: RuntimeConfig
│          │ └ properties
│          │    └ Runtime: string (required)
│          ├ type S3Object
│          │ ├      documentation: The S3 location of the function code.
│          │ │      name: S3Object
│          │ └ properties
│          │    ├ VersionId: string
│          │    ├ Bucket: string (required)
│          │    └ Key: string (required)
│          ├ type ServiceConfig
│          │ ├      documentation: The service configuration for the revision.
│          │ │      name: ServiceConfig
│          │ └ properties
│          │    ├ TimeoutSeconds: integer
│          │    ├ ExecutionRoleArn: string (required)
│          │    ├ MaxConcurrencyPerEnvironment: integer
│          │    ├ EnvironmentVariables: Map<string, string>
│          │    └ TelemetryConfig: TelemetryConfig
│          └ type TelemetryConfig
│            ├      documentation: The telemetry configuration.
│            │      name: TelemetryConfig
│            └ properties
│               └ LoggingConfig: LoggingConfig
├[~] service aws-mediatailor
│ └ resources
│    ├[~]  resource AWS::MediaTailor::Function
│    │  ├ properties
│    │  │  ├[+] AwsServiceRequestConfiguration: AwsServiceRequestConfiguration
│    │  │  ├ FunctionType: - string<HTTP_REQUEST|CUSTOM_OUTPUT|CONCURRENT_EXECUTOR|SEQUENTIAL_EXECUTOR> (required)
│    │  │  │               + string<HTTP_REQUEST|AWS_SERVICE_REQUEST|CUSTOM_OUTPUT|CONCURRENT_EXECUTOR|SEQUENTIAL_EXECUTOR|VAST_REQUEST> (required)
│    │  │  └[+] VastRequestConfiguration: VastRequestConfiguration
│    │  └ types
│    │     ├[+]  type AwsServiceRequestConfiguration
│    │     │  ├      documentation: The configuration for an AWS_SERVICE_REQUEST function. Contains the target service, target Region, and request parameters that the function uses to call an AWS service API. For more information, see AWS_SERVICE_REQUEST (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-types-aws-service-request.html) in the MediaTailor User Guide.
│    │     │  │      name: AwsServiceRequestConfiguration
│    │     │  └ properties
│    │     │     ├ Runtime: string<JSONATA> (required)
│    │     │     ├ Output: Map<string, string>
│    │     │     ├ MethodType: string<GET|POST> (required)
│    │     │     ├ RequestTimeoutMilliseconds: integer (required)
│    │     │     ├ Url: string (required)
│    │     │     ├ Body: string
│    │     │     ├ Headers: Map<string, string>
│    │     │     ├ TargetService: string (required)
│    │     │     └ TargetRegion: string (required)
│    │     └[+]  type VastRequestConfiguration
│    │        ├      documentation: The configuration for a VAST_REQUEST function. Specifies the HTTP method, URL, headers, body, timeout, and output expressions for a request to a VAST endpoint. MediaTailor parses the response as VAST and resolves wrapper redirects, then makes the parsed ads available to the function's output expressions. For more information, see Function types and composition (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-types.html) in the MediaTailor User Guide.
│    │        │      name: VastRequestConfiguration
│    │        └ properties
│    │           ├ Runtime: string<JSONATA> (required)
│    │           ├ Output: Map<string, string>
│    │           ├ MethodType: string<GET|POST> (required)
│    │           ├ RequestTimeoutMilliseconds: integer (required)
│    │           ├ Url: string (required)
│    │           ├ Body: string
│    │           └ Headers: Map<string, string>
│    ├[~]  resource AWS::MediaTailor::PlaybackConfiguration
│    │  └ types
│    │     └[~] type AdDecisionServerConfiguration
│    │       └ properties
│    │          └ HttpRequest: - HttpRequest (required)
│    │                         + HttpRequest
│    └[+]  resource AWS::MediaTailor::Program
│       ├      name: Program
│       │      cloudFormationType: AWS::MediaTailor::Program
│       │      documentation: Resource schema for AWS::MediaTailor::Program
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ ChannelName: string (required, immutable)
│       │  ├ ProgramName: string (required, immutable)
│       │  ├ SourceLocationName: string (required, immutable)
│       │  ├ LiveSourceName: string (immutable)
│       │  ├ VodSourceName: string (immutable)
│       │  ├ AdBreaks: Array<AdBreak>
│       │  ├ AudienceMedia: Array<AudienceMedia>
│       │  └ ScheduleConfiguration: ScheduleConfiguration
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ CreationTime: string
│       │  ├ ScheduledStartTime: string
│       │  ├ ClipRange: ClipRange
│       │  └ DurationMillis: integer
│       └ types
│          ├ type AdBreak
│          │ ├      documentation: Ad break configuration parameters.
│          │ │      name: AdBreak
│          │ └ properties
│          │    ├ AdBreakMetadata: Array<KeyValuePair>
│          │    ├ MessageType: string<SPLICE_INSERT|TIME_SIGNAL>
│          │    ├ OffsetMillis: integer (required)
│          │    ├ Slate: SlateSource
│          │    ├ SpliceInsertMessage: SpliceInsertMessage
│          │    └ TimeSignalMessage: TimeSignalMessage
│          ├ type AlternateMedia
│          │ ├      documentation: A playlist of media to be played instead of the default media on a particular program.
│          │ │      name: AlternateMedia
│          │ └ properties
│          │    ├ SourceLocationName: string
│          │    ├ LiveSourceName: string
│          │    ├ VodSourceName: string
│          │    ├ ClipRange: ClipRange
│          │    ├ ScheduledStartTimeMillis: integer
│          │    ├ AdBreaks: Array<AdBreak>
│          │    └ DurationMillis: integer
│          ├ type AudienceMedia
│          │ ├      documentation: An AudienceMedia object contains an Audience and a list of AlternateMedia.
│          │ │      name: AudienceMedia
│          │ └ properties
│          │    ├ Audience: string
│          │    └ AlternateMedia: Array<AlternateMedia>
│          ├ type ClipRange
│          │ ├      documentation: Clip range configuration for the VOD source associated with the program.
│          │ │      name: ClipRange
│          │ └ properties
│          │    ├ EndOffsetMillis: integer
│          │    └ StartOffsetMillis: integer
│          ├ type KeyValuePair
│          │ ├      documentation: For SCTE35_ENHANCED output, defines a key and corresponding value.
│          │ │      name: KeyValuePair
│          │ └ properties
│          │    ├ Key: string (required)
│          │    └ Value: string (required)
│          ├ type ScheduleConfiguration
│          │ ├      documentation: Schedule configuration parameters.
│          │ │      name: ScheduleConfiguration
│          │ └ properties
│          │    ├ Transition: Transition (required)
│          │    └ ClipRange: ClipRange
│          ├ type SegmentationDescriptor
│          │ ├      documentation: The segmentation_descriptor message configuration.
│          │ │      name: SegmentationDescriptor
│          │ └ properties
│          │    ├ SegmentationEventId: integer
│          │    ├ SegmentationUpidType: integer
│          │    ├ SegmentationUpid: string
│          │    ├ SegmentationTypeId: integer
│          │    ├ SegmentNum: integer
│          │    ├ SegmentsExpected: integer
│          │    ├ SubSegmentNum: integer
│          │    └ SubSegmentsExpected: integer
│          ├ type SlateSource
│          │ ├      documentation: Slate VOD source configuration.
│          │ │      name: SlateSource
│          │ └ properties
│          │    ├ SourceLocationName: string
│          │    └ VodSourceName: string
│          ├ type SpliceInsertMessage
│          │ ├      documentation: Splice insert message configuration.
│          │ │      name: SpliceInsertMessage
│          │ └ properties
│          │    ├ AvailNum: integer
│          │    ├ AvailsExpected: integer
│          │    ├ SpliceEventId: integer
│          │    └ UniqueProgramId: integer
│          ├ type TimeSignalMessage
│          │ ├      documentation: The SCTE-35 time_signal message configuration.
│          │ │      name: TimeSignalMessage
│          │ └ properties
│          │    └ SegmentationDescriptors: Array<SegmentationDescriptor>
│          └ type Transition
│            ├      documentation: Program transition configuration.
│            │      name: Transition
│            └ properties
│               ├ DurationMillis: integer
│               ├ RelativePosition: string<BEFORE_PROGRAM|AFTER_PROGRAM> (required)
│               ├ RelativeProgram: string
│               ├ ScheduledStartTimeMillis: integer
│               └ Type: string (required)
├[~] service aws-mgn
│ └ resources
│    ├[~]  resource AWS::MGN::Connector
│    │  └      - arnTemplate: undefined
│    │         + arnTemplate: arn:${Partition}:mgn:${Region}:${Account}:connector/${ConnectorID}
│    └[~]  resource AWS::MGN::LaunchConfigurationTemplate
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:mgn:${Region}:${Account}:launch-configuration-template/${LaunchConfigurationTemplateID}
├[~] service aws-neptune
│ └ resources
│    └[~]  resource AWS::Neptune::DBClusterParameterGroup
│       └      - arnTemplate: arn:aws:rds:${Region}:${Account}:cluster-pg:${ClusterPGName}
│              + arnTemplate: arn:${Partition}:rds:${Region}:${Account}:cluster-pg:${ClusterParameterGroupName}
├[~] service aws-networkflowmonitor
│ └ resources
│    └[~]  resource AWS::NetworkFlowMonitor::Scope
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:networkflowmonitor:${Region}:${Account}:scope/${ScopeId}
├[~] service aws-networkmanager
│ └ resources
│    ├[~]  resource AWS::NetworkManager::ConnectAttachment
│    │  └      - arnTemplate: arn:${Partition}:networkmanager::${Account}:attachment/${AttachmentId}
│    │         + arnTemplate: arn:${Partition}:networkmanager::${Account}:attachment/${ResourceId}
│    ├[~]  resource AWS::NetworkManager::CoreNetwork
│    │  └      - arnTemplate: arn:${Partition}:networkmanager::${Account}:core-network/${ResourceId}
│    │         + arnTemplate: arn:${Partition}:networkmanager::${Account}:core-network/${CoreNetworkId}
│    ├[~]  resource AWS::NetworkManager::GlobalNetwork
│    │  └      - arnTemplate: arn:${Partition}:networkmanager::${Account}:global-network/${GlobalNetworkId}
│    │         + arnTemplate: arn:${Partition}:networkmanager::${Account}:global-network/${ResourceId}
│    └[~]  resource AWS::NetworkManager::VpcAttachment
│       └      - arnTemplate: arn:${Partition}:networkmanager::${Account}:attachment/${AttachmentId}
│              + arnTemplate: arn:${Partition}:networkmanager::${Account}:attachment/${ResourceId}
├[~] service aws-networkmonitor
│ └ resources
│    └[~]  resource AWS::NetworkMonitor::Monitor
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:networkmonitor:${Region}:${Account}:monitor/${MonitorName}
├[+] service aws-networksecuritymanager
│ ├      capitalized: NetworkSecurityManager
│ │      cloudFormationNamespace: AWS::NetworkSecurityManager
│ │      name: aws-networksecuritymanager
│ │      shortName: networksecuritymanager
│ └ resources
│    ├ resource AWS::NetworkSecurityManager::Deployment
│    │ ├      name: Deployment
│    │ │      cloudFormationType: AWS::NetworkSecurityManager::Deployment
│    │ │      documentation: Resource Type definition for AWS::NetworkSecurityManager::Deployment. Creates and manages a Network Security Manager deployment.
│    │ │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │ │      primaryIdentifier: ["DeploymentArn"]
│    │ ├ properties
│    │ │  ├ DeploymentName: string (required, immutable)
│    │ │  ├ DeploymentDescription: string
│    │ │  ├ AssociatedPolicyList: Array<AssociatedPolicy>
│    │ │  ├ AssociatedScopeList: Array<AssociatedScope>
│    │ │  ├ DeploymentConfiguration: DeploymentConfiguration
│    │ │  └ Tags: Array<tag>
│    │ ├ attributes
│    │ │  ├ DeploymentId: string
│    │ │  ├ DeploymentArn: string
│    │ │  ├ Status: string<DRAFT|ACTIVE>
│    │ │  └ Version: string
│    │ └ types
│    │    ├ type AssociatedPolicy
│    │    │ ├      name: AssociatedPolicy
│    │    │ └ properties
│    │    │    └ PolicyArn: string (required)
│    │    ├ type AssociatedScope
│    │    │ ├      name: AssociatedScope
│    │    │ └ properties
│    │    │    └ ScopeArn: string (required)
│    │    └ type DeploymentConfiguration
│    │      ├      documentation: Configuration settings for the deployment.
│    │      │      name: DeploymentConfiguration
│    │      └ properties
│    │         └ EnableCrossAccountVisibility: boolean (required)
│    ├ resource AWS::NetworkSecurityManager::Rule
│    │ ├      name: Rule
│    │ │      cloudFormationType: AWS::NetworkSecurityManager::Rule
│    │ │      documentation: Resource Type definition for AWS::NetworkSecurityManager::Rule. Creates and manages a Network Security Manager rule.
│    │ │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │ │      arnTemplate: arn:${Partition}:network-security-manager:${Region}:${Account}:rule:${RuleId}
│    │ │      primaryIdentifier: ["RuleArn"]
│    │ ├ properties
│    │ │  ├ RuleName: string (required, immutable)
│    │ │  ├ FirewallType: string<WAF> (immutable)
│    │ │  ├ RuleType: string<CONFIGURATION|INSPECTION> (immutable)
│    │ │  ├ RuleDescription: string
│    │ │  ├ Configuration: string
│    │ │  └ Tags: Array<tag>
│    │ └ attributes
│    │    ├ RuleId: string
│    │    ├ RuleArn: string
│    │    ├ Status: string<DRAFT|ACTIVE>
│    │    └ Version: string
│    ├ resource AWS::NetworkSecurityManager::Scope
│    │ ├      name: Scope
│    │ │      cloudFormationType: AWS::NetworkSecurityManager::Scope
│    │ │      documentation: Resource Type definition for AWS::NetworkSecurityManager::Scope. Creates and manages a Network Security Manager scope.
│    │ │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │ │      arnTemplate: arn:${Partition}:network-security-manager:${Region}:${Account}:scope:${ScopeId}
│    │ │      primaryIdentifier: ["ScopeArn"]
│    │ ├ properties
│    │ │  ├ ScopeName: string (required, immutable)
│    │ │  ├ ScopeDescription: string
│    │ │  ├ ScopeConfiguration: string
│    │ │  └ Tags: Array<tag>
│    │ └ attributes
│    │    ├ ScopeId: string
│    │    ├ ScopeArn: string
│    │    ├ Status: string<DRAFT|ACTIVE>
│    │    └ Version: string
│    └ resource AWS::NetworkSecurityManager::Template
│      ├      name: Template
│      │      cloudFormationType: AWS::NetworkSecurityManager::Template
│      │      documentation: Resource Type definition for AWS::NetworkSecurityManager::Template. Creates and manages a Network Security Manager template.
│      │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│      │      primaryIdentifier: ["TemplateArn"]
│      ├ properties
│      │  ├ TemplateName: string (required, immutable)
│      │  ├ TemplateDescription: string
│      │  ├ AssociatedRuleList: Array<AssociatedRule>
│      │  ├ FirewallType: string<WAF> (immutable)
│      │  └ Tags: Array<tag>
│      ├ attributes
│      │  ├ TemplateId: string
│      │  ├ TemplateArn: string
│      │  ├ Status: string<DRAFT|ACTIVE>
│      │  └ Version: string
│      └ types
│         └ type AssociatedRule
│           ├      documentation: An association between a template and a rule.
│           │      name: AssociatedRule
│           └ properties
│              └ RuleArn: string (required)
├[~] service aws-observabilityadmin
│ └ resources
│    └[+]  resource AWS::ObservabilityAdmin::DatasetIntegration
│       ├      name: DatasetIntegration
│       │      cloudFormationType: AWS::ObservabilityAdmin::DatasetIntegration
│       │      documentation: The AWS::ObservabilityAdmin::DatasetIntegration resource represents a CloudWatch dataset integration for an account in a region. The integration enables telemetry forwarding into the caller's CloudWatch dataset via a customer-provided IAM role.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:observabilityadmin:${Region}:${Account}:dataset-integration/${DatasetIntegrationIdentifier}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ RoleArn: string (required)
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ Arn: string
│          ├ CreatedAt: string
│          └ UpdatedAt: string
├[~] service aws-personalize
│ └ resources
│    └[~]  resource AWS::Personalize::Filter
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:personalize:${Region}:${Account}:filter/${ResourceId}
├[~] service aws-pinpoint
│ └ resources
│    ├[~]  resource AWS::Pinpoint::EmailTemplate
│    │  └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/EMAIL
│    │         + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/PUSH
│    ├[~]  resource AWS::Pinpoint::InAppTemplate
│    │  └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/EMAIL
│    │         + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/PUSH
│    ├[~]  resource AWS::Pinpoint::PushTemplate
│    │  └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/EMAIL
│    │         + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/PUSH
│    └[~]  resource AWS::Pinpoint::SmsTemplate
│       └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/EMAIL
│              + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/SMS
├[~] service aws-quicksight
│ └ resources
│    ├[~]  resource AWS::QuickSight::Analysis
│    │  └      - arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:analysis/${AnalysisId}
│    │         + arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:analysis/${ResourceId}
│    └[~]  resource AWS::QuickSight::Dashboard
│       └      - arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:dashboard/${DashboardId}
│              + arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:dashboard/${ResourceId}
├[~] service aws-ram
│ └ resources
│    ├[+]  resource AWS::RAM::PermissionAssociation
│    │  ├      name: PermissionAssociation
│    │  │      cloudFormationType: AWS::RAM::PermissionAssociation
│    │  │      documentation: Associates a specified AWS RAM permission with a resource share. You can only associate one permission with each resource type in a resource share.
│    │  │      primaryIdentifier: ["ResourceShareArn","PermissionArn"]
│    │  ├ properties
│    │  │  ├ Replace: boolean (default=false)
│    │  │  ├ ResourceShareArn: string (required, immutable)
│    │  │  └ PermissionArn: string (required, immutable)
│    │  └ attributes
│    │     ├ IsDefault: boolean
│    │     ├ AssociationStatus: string<ASSOCIATING|ASSOCIATED|FAILED|DISASSOCIATING|SUSPENDED|SUSPENDING|RESTORING|DISASSOCIATED>
│    │     ├ LastUpdatedTime: string
│    │     ├ FeatureSet: string<STANDARD|CREATED_FROM_POLICY|PROMOTING_TO_STANDARD>
│    │     ├ ResourceType: string
│    │     └ PermissionVersion: string
│    ├[+]  resource AWS::RAM::PrincipalAssociation
│    │  ├      name: PrincipalAssociation
│    │  │      cloudFormationType: AWS::RAM::PrincipalAssociation
│    │  │      documentation: Associates a specified principal with a resource share.
│    │  │      primaryIdentifier: ["ResourceShareArn","Principal"]
│    │  ├ properties
│    │  │  ├ ResourceShareArn: string (required, immutable)
│    │  │  └ Principal: string (required, immutable)
│    │  └ attributes
│    │     ├ AssociationType: string
│    │     ├ Status: string<ASSOCIATING|ASSOCIATED|FAILED|DISASSOCIATING|DISASSOCIATED|SUSPENDED|SUSPENDING|RESTORING>
│    │     ├ CreationTime: string
│    │     ├ LastUpdatedTime: string
│    │     └ External: boolean
│    ├[+]  resource AWS::RAM::ResourceAssociation
│    │  ├      name: ResourceAssociation
│    │  │      cloudFormationType: AWS::RAM::ResourceAssociation
│    │  │      documentation: Associates a specified resource with a resource share.
│    │  │      primaryIdentifier: ["ResourceShareArn","ResourceArn"]
│    │  ├ properties
│    │  │  ├ ResourceShareArn: string (required, immutable)
│    │  │  └ ResourceArn: string (required, immutable)
│    │  └ attributes
│    │     ├ AssociationType: string
│    │     ├ Status: string<ASSOCIATING|ASSOCIATED|FAILED|DISASSOCIATING|DISASSOCIATED|SUSPENDED|SUSPENDING|RESTORING>
│    │     ├ CreationTime: string
│    │     ├ LastUpdatedTime: string
│    │     └ External: boolean
│    └[+]  resource AWS::RAM::SourceAssociation
│       ├      name: SourceAssociation
│       │      cloudFormationType: AWS::RAM::SourceAssociation
│       │      documentation: Associates a specified source account with a resource share.
│       │      primaryIdentifier: ["ResourceShareArn","SourceId"]
│       ├ properties
│       │  ├ ResourceShareArn: string (required, immutable)
│       │  └ SourceId: string (required, immutable)
│       └ attributes
│          ├ SourceType: string
│          ├ Status: string<ASSOCIATING|ASSOCIATED|FAILED|DISASSOCIATING|DISASSOCIATED|SUSPENDED|SUSPENDING|RESTORING>
│          ├ CreationTime: string
│          └ LastUpdatedTime: string
├[~] service aws-rds
│ └ resources
│    ├[~]  resource AWS::RDS::DBInstance
│    │  └      - arnTemplate: arn:${Partition}:rds:${Region}:${Account}:db:${DbInstanceName}
│    │         + arnTemplate: arn:${Partition}:rds:${Region}:${Account}:db:${DBInstanceId}
│    └[~]  resource AWS::RDS::DBProxyTargetGroup
│       ├      - tagInformation: undefined
│       │      + tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       └ properties
│          └[+] Tags: Array<tag>
├[~] service aws-redshift
│ └ resources
│    └[+]  resource AWS::Redshift::RedshiftIdcApplication
│       ├      name: RedshiftIdcApplication
│       │      cloudFormationType: AWS::Redshift::RedshiftIdcApplication
│       │      documentation: Resource Type definition for AWS::Redshift::RedshiftIdcApplication. Creates an Amazon Redshift application for use with IAM Identity Center.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:redshift:${Region}:${Account}:redshiftidcapplication:${RedshiftIdcApplicationId}
│       │      primaryIdentifier: ["RedshiftIdcApplicationArn"]
│       ├ properties
│       │  ├ IdcInstanceArn: string (required, immutable)
│       │  ├ RedshiftIdcApplicationName: string (required, immutable)
│       │  ├ IdentityNamespace: string
│       │  ├ IdcDisplayName: string (required)
│       │  ├ IamRoleArn: string (required)
│       │  ├ AuthorizedTokenIssuerList: Array<AuthorizedTokenIssuer>
│       │  ├ ServiceIntegrations: Array<ServiceIntegrationsUnion>
│       │  ├ ApplicationType: string<None|Lakehouse> (immutable)
│       │  ├ Tags: Array<tag>
│       │  └ SsoTagKeys: Array<string> (immutable)
│       ├ attributes
│       │  ├ RedshiftIdcApplicationArn: string
│       │  ├ IdcManagedApplicationArn: string
│       │  └ IdcOnboardStatus: string
│       └ types
│          ├ type AuthorizedTokenIssuer
│          │ ├      documentation: The authorized token issuer for the Amazon Redshift IAM Identity Center application.
│          │ │      name: AuthorizedTokenIssuer
│          │ └ properties
│          │    ├ TrustedTokenIssuerArn: string
│          │    └ AuthorizedAudiencesList: Array<string>
│          ├ type Connect
│          │ ├      documentation: The Amazon Redshift connect integration scope.
│          │ │      name: Connect
│          │ └ properties
│          │    └ Authorization: string<Enabled|Disabled> (required)
│          ├ type LakeFormationQuery
│          │ ├      documentation: The Lake Formation scope.
│          │ │      name: LakeFormationQuery
│          │ └ properties
│          │    └ Authorization: string<Enabled|Disabled> (required)
│          ├ type LakeFormationScopeUnion
│          │ ├      documentation: A list of scopes set up for Lake Formation integration.
│          │ │      name: LakeFormationScopeUnion
│          │ └ properties
│          │    └ LakeFormationQuery: LakeFormationQuery
│          ├ type ReadWriteAccess
│          │ ├      documentation: The S3 Access Grants scope.
│          │ │      name: ReadWriteAccess
│          │ └ properties
│          │    └ Authorization: string<Enabled|Disabled> (required)
│          ├ type RedshiftScopeUnion
│          │ ├      documentation: A union structure that defines the scope of Amazon Redshift service integrations.
│          │ │      name: RedshiftScopeUnion
│          │ └ properties
│          │    └ Connect: Connect
│          ├ type S3AccessGrantsScopeUnion
│          │ ├      documentation: A list of scopes set up for S3 Access Grants integration.
│          │ │      name: S3AccessGrantsScopeUnion
│          │ └ properties
│          │    └ ReadWriteAccess: ReadWriteAccess
│          └ type ServiceIntegrationsUnion
│            ├      documentation: A list of service integrations.
│            │      name: ServiceIntegrationsUnion
│            └ properties
│               ├ LakeFormation: Array<LakeFormationScopeUnion>
│               ├ S3AccessGrants: Array<S3AccessGrantsScopeUnion>
│               └ Redshift: Array<RedshiftScopeUnion>
├[~] service aws-rekognition
│ └ resources
│    └[~]  resource AWS::Rekognition::StreamProcessor
│       └      - arnTemplate: arn:${Partition}:rekognition:${Region}:${Account}:streamprocessor/${Name}
│              + arnTemplate: arn:${Partition}:rekognition:${Region}:${Account}:streamprocessor/${StreamprocessorId}
├[~] service aws-route53
│ └ resources
│    ├[~]  resource AWS::Route53::DelegationSet
│    │  └      - arnTemplate: undefined
│    │         + arnTemplate: arn:${Partition}:route53:::delegationset/${Id}
│    └[~]  resource AWS::Route53::QueryLoggingConfig
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:route53:::queryloggingconfig/${Id}
├[~] service aws-sagemaker
│ └ resources
│    └[~]  resource AWS::SageMaker::ClusterSchedulerConfig
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:sagemaker:${Region}:${Account}:cluster-scheduler-config/${ClusterSchedulerConfigId}
├[~] service aws-smsvoice
│ └ resources
│    ├[~]  resource AWS::SMSVOICE::RegistrationAttachment
│    │  └      - arnTemplate: undefined
│    │         + arnTemplate: arn:${Partition}:sms-voice:${Region}:${Account}:registration-attachment/${RegistrationAttachmentId}
│    └[~]  resource AWS::SMSVOICE::VerifiedDestinationNumber
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:sms-voice:${Region}:${Account}:verified-destination-number/${VerifiedDestinationNumberId}
├[~] service aws-transcribe
│ └ resources
│    └[~]  resource AWS::Transcribe::MedicalVocabulary
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:transcribe:${Region}:${Account}:medical-vocabulary/${VocabularyName}
├[~] service aws-translate
│ └ resources
│    └[+]  resource AWS::Translate::Terminology
│       ├      name: Terminology
│       │      cloudFormationType: AWS::Translate::Terminology
│       │      documentation: A custom terminology resource for Amazon Translate that enables customized translations.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ Name: string (required, immutable)
│       │  ├ Description: string
│       │  ├ MergeStrategy: string<OVERWRITE>
│       │  ├ TerminologyData: TerminologyData
│       │  ├ EncryptionKey: EncryptionKey (immutable)
│       │  └ Tags: Array<TagsItems>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ SourceLanguageCode: string
│       │  ├ TargetLanguageCodes: Array<string>
│       │  ├ SizeBytes: integer
│       │  ├ TermCount: integer
│       │  ├ CreatedAt: string
│       │  ├ LastUpdatedAt: string
│       │  ├ Directionality: string<UNI|MULTI>
│       │  └ Format: string<CSV|TMX|TSV>
│       └ types
│          ├ type EncryptionKey
│          │ ├      documentation: The encryption key for the custom terminology.
│          │ │      name: EncryptionKey
│          │ └ properties
│          │    ├ Type: string<KMS> (required)
│          │    └ Id: string (required)
│          ├ type TagsItems
│          │ ├      name: TagsItems
│          │ └ properties
│          │    ├ Key: string (required)
│          │    └ Value: string (required)
│          └ type TerminologyData
│            ├      documentation: The terminology data for the custom terminology being imported.
│            │      name: TerminologyData
│            └ properties
│               ├ File: string (required)
│               ├ Format: string<CSV|TMX|TSV> (required)
│               └ Directionality: string<UNI|MULTI>
├[~] service aws-wellarchitected
│ └ resources
│    └[~]  resource AWS::WellArchitected::AgentProfile
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:wellarchitected:${Region}:${Account}:agent-profile/${ProfileName}
└[~] service aws-wisdom
  └ resources
     ├[+]  resource AWS::Wisdom::Content
     │  ├      name: Content
     │  │      cloudFormationType: AWS::Wisdom::Content
     │  │      documentation: Definition of AWS::Wisdom::Content Resource Type
     │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
     │  │      primaryIdentifier: ["ContentArn"]
     │  ├ properties
     │  │  ├ KnowledgeBaseId: string (required, immutable)
     │  │  ├ Metadata: Map<string, string>
     │  │  ├ Name: string (required, immutable)
     │  │  ├ OverrideLinkOutUri: string
     │  │  ├ Tags: Array<tag>
     │  │  ├ Title: string
     │  │  └ UploadId: string
     │  └ attributes
     │     ├ ContentArn: string
     │     ├ ContentId: string
     │     ├ ContentType: string
     │     ├ KnowledgeBaseArn: string
     │     ├ LinkOutUri: string
     │     ├ RevisionId: string
     │     └ Status: string<CREATE_IN_PROGRESS|CREATE_FAILED|ACTIVE|DELETE_IN_PROGRESS|DELETE_FAILED|DELETED|UPDATE_FAILED>
     └[+]  resource AWS::Wisdom::ContentAssociation
        ├      name: ContentAssociation
        │      cloudFormationType: AWS::Wisdom::ContentAssociation
        │      documentation: Definition of AWS::Wisdom::ContentAssociation Resource Type
        │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
        │      primaryIdentifier: ["ContentAssociationArn"]
        ├ properties
        │  ├ ContentId: string (required, immutable)
        │  ├ KnowledgeBaseId: string (required, immutable)
        │  ├ AssociationType: string<AMAZON_CONNECT_GUIDE> (required, immutable)
        │  ├ Association: ContentAssociationContents (required, immutable)
        │  └ Tags: Array<tag> (immutable)
        ├ attributes
        │  ├ ContentAssociationArn: string
        │  ├ ContentAssociationId: string
        │  ├ ContentArn: string
        │  └ KnowledgeBaseArn: string
        └ types
           ├ type AmazonConnectGuideAssociationData
           │ ├      name: AmazonConnectGuideAssociationData
           │ └ properties
           │    └ FlowId: string
           └ type ContentAssociationContents
             ├      name: ContentAssociationContents
             └ properties
                └ AmazonConnectGuideAssociation: AmazonConnectGuideAssociationData (required)
```

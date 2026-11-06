Updates the L1 CloudFormation resource definitions with the latest changes from `@aws-cdk/aws-service-spec`

**L1 CloudFormation resource definition changes:**
```
├[~] service aws-agentregistry
│ └ resources
│    └[~]  resource AWS::AgentRegistry::RegistryRecord
│       └ properties
│          └ RegistryId: - string (required, immutable)
│                        + string (immutable)
│                        (documentation changed)
├[~] service aws-appconfig
│ └ resources
│    └[+]  resource AWS::AppConfig::ExperimentRun
│       ├      name: ExperimentRun
│       │      cloudFormationType: AWS::AppConfig::ExperimentRun
│       │      documentation: Resource Type definition for AWS::AppConfig::ExperimentRun
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["ApplicationId","ExperimentDefinitionId","Run"]
│       ├ properties
│       │  ├ Description: string
│       │  ├ TreatmentOverrides: TreatmentOverrides
│       │  ├ ApplicationIdentifier: string (required, immutable)
│       │  ├ ExperimentDefinitionIdentifier: string (required, immutable)
│       │  ├ ExposurePercentage: number (required)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ ApplicationId: string
│       │  ├ ExperimentDefinitionId: string
│       │  ├ Run: string
│       │  ├ Status: string<RUNNING|DONE>
│       │  ├ StartedAt: string
│       │  └ UpdatedAt: string
│       └ types
│          └ type TreatmentOverrides
│            ├      documentation: Treatment overrides for specific entities.
│            │      name: TreatmentOverrides
│            └ properties
│               └ Inline: Map<string, string>
├[~] service aws-autoscaling
│ └ resources
│    └[~]  resource AWS::AutoScaling::AutoScalingGroup
│       └ types
│          └[~] type DistributionSegment
│            └ properties
│               └ TargetCapacityTypes: (documentation changed)
├[~] service aws-bedrockagentcore
│ └ resources
│    ├[~]  resource AWS::BedrockAgentCore::GatewayRule
│    │  ├ attributes
│    │  │  └[+] System: SystemManagedBlock
│    │  └ types
│    │     └[+]  type SystemManagedBlock
│    │        ├      name: SystemManagedBlock
│    │        └ properties
│    │           └ ManagedBy: string (required)
│    └[~]  resource AWS::BedrockAgentCore::GatewayTarget
│       └ types
│          ├[+]  type HttpConnectorSource
│          │  ├      name: HttpConnectorSource
│          │  └ properties
│          │     └ ConnectorId: string (required)
│          ├[+]  type HttpConnectorTargetConfiguration
│          │  ├      name: HttpConnectorTargetConfiguration
│          │  └ properties
│          │     ├ Source: HttpConnectorSource (required)
│          │     └ Parameters: Map<string, string>
│          └[~] type HttpTargetConfiguration
│            └ properties
│               └[+] Connector: HttpConnectorTargetConfiguration
├[~] service aws-chime
│ └ resources
│    └[+]  resource AWS::Chime::MediaPipelineKinesisVideoStreamPool
│       ├      name: MediaPipelineKinesisVideoStreamPool
│       │      cloudFormationType: AWS::Chime::MediaPipelineKinesisVideoStreamPool
│       │      documentation: Resource Type definition for an Amazon Chime SDK Media Pipeline Kinesis Video Stream Pool
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ PoolName: string (required, immutable)
│       │  ├ StreamConfiguration: StreamConfiguration (required)
│       │  └ Tags: Array<TagsItems>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ PoolId: string
│       │  ├ PoolStatus: string<CREATING|ACTIVE|UPDATING|DELETING|FAILED>
│       │  ├ CreatedTimestamp: string
│       │  └ UpdatedTimestamp: string
│       └ types
│          ├ type StreamConfiguration
│          │ ├      documentation: The configuration settings for the Kinesis video stream.
│          │ │      name: StreamConfiguration
│          │ └ properties
│          │    ├ Region: string (required, immutable)
│          │    └ DataRetentionInHours: integer
│          └ type TagsItems
│            ├      name: TagsItems
│            └ properties
│               ├ Key: string (required)
│               └ Value: string (required)
├[~] service aws-cleanrooms
│ └ resources
│    ├[~]  resource AWS::CleanRooms::ConfiguredTable
│    │  └ types
│    │     ├[+]  type AggregationThreshold
│    │     │  ├      name: AggregationThreshold
│    │     │  └ properties
│    │     │     ├ IdentityColumns: Array<string> (required)
│    │     │     ├ MinimumIdentityCount: integer (required)
│    │     │     ├ Type: string<COUNT_DISTINCT> (required)
│    │     │     ├ OutputColumnThresholds: Array<OutputColumnThreshold>
│    │     │     └ AllowedAggregateExpressionType: string<COLUMNS_ONLY|ANY_EXPRESSION> (required)
│    │     ├[~] type AnalysisRuleCustom
│    │     │ └ properties
│    │     │    ├[+] AggregationThresholds: Array<AggregationThreshold>
│    │     │    └[+] ComparisonControls: ComparisonControls
│    │     ├[+]  type ComparisonControls
│    │     │  ├      name: ComparisonControls
│    │     │  └ properties
│    │     │     ├ AllowedLiteralComparisonColumns: Array<string> (required)
│    │     │     └ AllowedColumnComparisonColumns: Array<string> (required)
│    │     └[+]  type OutputColumnThreshold
│    │        ├      name: OutputColumnThreshold
│    │        └ properties
│    │           ├ OutputColumnName: string (required)
│    │           └ MinimumIdentityCount: integer (required)
│    └[~]  resource AWS::CleanRooms::IntermediateTable
│       └ types
│          ├[+]  type AggregationThreshold
│          │  ├      name: AggregationThreshold
│          │  └ properties
│          │     ├ IdentityColumns: Array<string> (required)
│          │     ├ MinimumIdentityCount: integer (required)
│          │     ├ Type: string<COUNT_DISTINCT> (required)
│          │     ├ OutputColumnThresholds: Array<OutputColumnThreshold>
│          │     └ AllowedAggregateExpressionType: string<COLUMNS_ONLY|ANY_EXPRESSION> (required)
│          ├[+]  type ComparisonControls
│          │  ├      name: ComparisonControls
│          │  └ properties
│          │     ├ AllowedLiteralComparisonColumns: Array<string> (required)
│          │     └ AllowedColumnComparisonColumns: Array<string> (required)
│          ├[~] type IntermediateTableAnalysisRuleCustom
│          │ └ properties
│          │    ├[+] AggregationThresholds: Array<AggregationThreshold>
│          │    └[+] ComparisonControls: ComparisonControls
│          └[+]  type OutputColumnThreshold
│             ├      name: OutputColumnThreshold
│             └ properties
│                ├ OutputColumnName: string (required)
│                └ MinimumIdentityCount: integer (required)
├[~] service aws-codebuild
│ └ resources
│    └[~]  resource AWS::CodeBuild::ReportGroup
│       └ attributes
│          └[-] Id: string
├[~] service aws-devicefarm
│ └ resources
│    └[~]  resource AWS::DeviceFarm::Project
│       └      - arnTemplate: arn:${Partition}:devicefarm:${Region}:${Account}:project:${ResourceId}
│              + arnTemplate: arn:${Partition}:devicefarm:${Region}:${Account}:project:${ProjectId}
├[~] service aws-dlm
│ └ resources
│    └[~]  resource AWS::DLM::LifecyclePolicy
│       ├      - arnTemplate: arn:${Partition}:dlm:${Region}:${Account}:policy/${ResourceName}
│       │      + arnTemplate: arn:${Partition}:dlm:${Region}:${Account}:policy/${PolicyId}
│       ├ attributes
│       │  └[+] PolicyId: string
│       └ types
│          ├[~] type CrossRegionCopyTarget
│          │ └ properties
│          │    └ TargetRegion: (documentation changed)
│          ├[~] type Exclusions
│          │ └ properties
│          │    └ ExcludeVolumeTypes: - Array<json>
│          │                          + Array<string> ⇐ Array<json>
│          └[~] type FastRestoreRule
│            └ properties
│               └ AvailabilityZoneIds: (documentation changed)
├[~] service aws-dms
│ └ resources
│    └[~]  resource AWS::DMS::ReplicationTask
│       └      - primaryIdentifier: ["Id"]
│              + primaryIdentifier: ["ReplicationTaskArn"]
├[~] service aws-ec2
│ └ resources
│    └[+]  resource AWS::EC2::ApplicationStatusCheck
│       ├      name: ApplicationStatusCheck
│       │      cloudFormationType: AWS::EC2::ApplicationStatusCheck
│       │      documentation: An application status check monitors an HTTP or HTTPS endpoint on Amazon EC2 instances and reports application-layer health. Configure a health check with a Protocol, Port, and Path, and then associate it with EC2 instances via AWS::EC2::ApplicationStatusCheckInstanceAssociation or AWS::EC2::ApplicationStatusCheckTagAssociation.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ Protocol: string<http|https> (required)
│       │  ├ Port: integer (required)
│       │  ├ Path: string
│       │  ├ Aggregation: string<included|excluded>
│       │  ├ IpVersion: string<ipv4|ipv6>
│       │  ├ IpScope: string<private> (immutable)
│       │  ├ DeviceIndex: integer
│       │  ├ Interval: integer (immutable)
│       │  ├ Timeout: integer
│       │  ├ FailureThreshold: integer
│       │  ├ SuccessThreshold: integer
│       │  ├ StatusCodeMatcher: string
│       │  ├ InitializationGracePeriodSeconds: integer
│       │  ├ HealthCheckPaths: Array<HealthCheckPath>
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ ApplicationStatusCheckId: string
│       │  └ CreationTime: string
│       └ types
│          ├ type HealthCheckPath
│          │ ├      name: HealthCheckPath
│          │ └ properties
│          │    ├ Source: HealthCheckPathSource
│          │    └ Destinations: Array<HealthCheckPathDestination>
│          ├ type HealthCheckPathDestination
│          │ ├      name: HealthCheckPathDestination
│          │ └ properties
│          │    ├ SubnetId: string
│          │    └ SecurityGroupId: string
│          └ type HealthCheckPathSource
│            ├      name: HealthCheckPathSource
│            └ properties
│               ├ SubnetId: string
│               └ SecurityGroupId: string
├[~] service aws-eks
│ └ resources
│    └[~]  resource AWS::EKS::Capability
│       └ types
│          ├[+]  type Ack
│          │  ├      documentation: Configuration settings for an ACK (AWS Controllers for Kubernetes) capability.
│          │  │      name: Ack
│          │  └ properties
│          │     ├ EnableCrossNamespace: boolean
│          │     └ DisabledServices: Array<string>
│          └[~] type CapabilityConfiguration
│            └ properties
│               └ Ack: - json
│                      + Ack
│                      (documentation changed)
├[~] service aws-elementalinference
│ └ resources
│    └[~]  resource AWS::ElementalInference::Feed
│       ├      - vendedLogs: undefined
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","resource_type","detail"],"mandatoryFields":["resource_arn","event_timestamp","log_level","message"]}]
│       ├ vendedLogs
│       │  └[+] logType: APPLICATION_LOGS
│       │    ├permissionsVersion: V2
│       │    ├destinations: [S3, CWL, FH]
│       │    ├mandatoryFields: [resource_arn, event_timestamp, log_level, message]
│       │    └optionalFields: [timestamp, resource_id, resource_type, detail]
│       └ types
│          ├[~] type ClippingConfig
│          │ └ properties
│          │    └ DataSourceConfiguration: (documentation changed)
│          └[~] type DataSourceConfiguration
│            ├      - documentation: undefined
│            │      + documentation: Identifies the fixture whose event data Elemental Inference maps onto the clipping metadata for an output.
│            └ properties
│               └ FixtureId: (documentation changed)
├[~] service aws-fsx
│ └ resources
│    └[~]  resource AWS::FSx::Volume
│       └ types
│          ├[~] type AggregateConfiguration
│          │ └ properties
│          │    ├ Aggregates: - Array<string>
│          │    │             + Array<string> (immutable)
│          │    └ ConstituentsPerAggregate: - integer
│          │                                + integer (immutable)
│          └[~] type OntapConfiguration
│            └ properties
│               ├ AggregateConfiguration: - AggregateConfiguration
│               │                         + AggregateConfiguration (immutable)
│               └ VolumeStyle: - string
│                              + string (immutable)
├[~] service aws-iot
│ └ resources
│    ├[~]  resource AWS::IoT::TopicRule
│    │  └ types
│    │     ├[~] type Action
│    │     │ └ properties
│    │     │    └[+] InfluxDB: InfluxDBAction
│    │     ├[+]  type InfluxDBAction
│    │     │  ├      name: InfluxDBAction
│    │     │  └ properties
│    │     │     ├ DestinationArn: string (required)
│    │     │     ├ RoleArn: string (required)
│    │     │     ├ DatabaseName: string (required)
│    │     │     ├ TableName: string (required)
│    │     │     ├ Organization: string
│    │     │     ├ TimestampUnit: string
│    │     │     ├ Tags: Map<string, string>
│    │     │     └ BatchConfig: InfluxDBBatchConfig
│    │     └[+]  type InfluxDBBatchConfig
│    │        ├      name: InfluxDBBatchConfig
│    │        └ properties
│    │           ├ MaxBatchSize: integer
│    │           ├ MaxBatchOpenMs: integer
│    │           ├ MaxBatchSizeBytes: integer
│    │           └ BatchAcrossTopics: boolean
│    └[~]  resource AWS::IoT::TopicRuleDestination
│       ├ properties
│       │  └[+] InfluxDBProperties: InfluxDBDestinationProperties (immutable)
│       └ types
│          └[+]  type InfluxDBDestinationProperties
│             ├      name: InfluxDBDestinationProperties
│             └ properties
│                ├ Endpoint: string (required)
│                ├ InfluxDBVersion: string (required)
│                ├ SecretId: string (required)
│                ├ SecretType: string
│                └ SecretKey: string
├[~] service aws-iotsitewise
│ └ resources
│    ├[+]  resource AWS::IoTSiteWise::Pipeline
│    │  ├      name: Pipeline
│    │  │      cloudFormationType: AWS::IoTSiteWise::Pipeline
│    │  │      documentation: Resource schema for AWS::IoTSiteWise::Pipeline. A pipeline defines a directed acyclic graph (DAG) of compute nodes, where each node references a task definition and can declare dependencies on other nodes.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["PipelineArn"]
│    │  ├ properties
│    │  │  ├ WorkspaceName: string (required, immutable)
│    │  │  ├ PipelineName: string (required, immutable)
│    │  │  ├ Description: string
│    │  │  ├ EnvironmentVariables: Map<string, string>
│    │  │  ├ Computations: Array<ComputeNode> (required)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ PipelineArn: string
│    │  │  └ Status: string<ACTIVE|CREATING|UPDATING|DELETING|FAILED>
│    │  └ types
│    │     └ type ComputeNode
│    │       ├      documentation: A single compute node in a pipeline DAG.
│    │       │      name: ComputeNode
│    │       └ properties
│    │          ├ ComputeNodeName: string (required)
│    │          ├ TaskName: string (required)
│    │          ├ EnvironmentVariables: Map<string, string>
│    │          └ DependsOn: Array<string>
│    ├[+]  resource AWS::IoTSiteWise::Task
│    │  ├      name: Task
│    │  │      cloudFormationType: AWS::IoTSiteWise::Task
│    │  │      documentation: Resource schema for AWS::IoTSiteWise::Task. A task defines a reusable containerized compute workload that can be referenced by one or more pipeline compute nodes.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["TaskArn"]
│    │  ├ properties
│    │  │  ├ WorkspaceName: string (required, immutable)
│    │  │  ├ TaskName: string (required, immutable)
│    │  │  ├ Description: string
│    │  │  ├ TaskConfiguration: TaskConfiguration (required)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ TaskArn: string
│    │  │  └ Status: string<ACTIVE|CREATING|UPDATING|DELETING|FAILED>
│    │  └ types
│    │     ├ type ContainerTaskConfiguration
│    │     │ ├      documentation: Configuration for running a custom container image on managed compute.
│    │     │ │      name: ContainerTaskConfiguration
│    │     │ └ properties
│    │     │    ├ EcrUri: string (required)
│    │     │    ├ TaskExecutionRole: string (required)
│    │     │    ├ ProcessingType: string<GENERIC_COMPUTE_PROCESSING|HARDWARE_ACCELERATED_PROCESSING> (required)
│    │     │    ├ ProcessingUnit: string<UNITS_2|UNITS_4|UNITS_8|UNITS_12|UNITS_16|UNITS_24|UNITS_32|UNITS_36|UNITS_48|UNITS_60|UNITS_64|UNITS_72|UNITS_84|UNITS_96> (required)
│    │     │    ├ Command: Array<string>
│    │     │    ├ TimeoutSeconds: integer
│    │     │    └ EnvironmentVariables: Map<string, string>
│    │     └ type TaskConfiguration
│    │       ├      documentation: The task execution configuration.
│    │       │      name: TaskConfiguration
│    │       └ properties
│    │          └ ContainerTaskConfiguration: ContainerTaskConfiguration (required)
│    └[+]  resource AWS::IoTSiteWise::Workspace
│       ├      name: Workspace
│       │      cloudFormationType: AWS::IoTSiteWise::Workspace
│       │      documentation: Represents an AWS IoT SiteWise workspace that provides logical isolation for tasks and pipelines.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["WorkspaceArn"]
│       ├ properties
│       │  ├ WorkspaceName: string (required, immutable)
│       │  ├ WorkspaceDescription: string
│       │  ├ EncryptionConfiguration: EncryptionConfiguration (required, immutable)
│       │  ├ KmsKeyId: string (immutable)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ WorkspaceArn: string
│       │  ├ Status: string<CREATING|ACTIVE|UPDATING|DELETING|FAILED>
│       │  ├ CreatedAt: string
│       │  └ UpdatedAt: string
│       └ types
│          └ type EncryptionConfiguration
│            ├      documentation: The encryption configuration for the workspace.
│            │      name: EncryptionConfiguration
│            └ properties
│               └ EncryptionType: string<SITEWISE_DEFAULT_ENCRYPTION|KMS_BASED_ENCRYPTION> (required)
├[~] service aws-lakeformation
│ └ resources
│    └[~]  resource AWS::LakeFormation::PrincipalPermissions
│       └ types
│          ├[+]  type CatalogResource
│          │  ├      name: CatalogResource
│          │  └ properties
│          │     └ Id: string
│          └[~] type Resource
│            └ properties
│               └ Catalog: - json (immutable)
│                          + CatalogResource ⇐ json (immutable)
├[~] service aws-location
│ └ resources
│    └[~]  resource AWS::Location::GeofenceCollection
│       └      - arnTemplate: arn:${Partition}:geo:${Region}:${Account}:geofence-collection/${GeofenceCollectionName}
│              + arnTemplate: arn:${Partition}:geo:${Region}:${Account}:geofence-collection/${CollectionName}
├[~] service aws-mediaconnect
│ └ resources
│    └[~]  resource AWS::MediaConnect::RouterOutput
│       ├ properties
│       │  └[+] FabricConfiguration: FabricConfiguration
│       └ types
│          └[+]  type FabricConfiguration
│             ├      documentation: The fabric configuration settings for the router output.
│             │      name: FabricConfiguration
│             └ properties
│                └ RecoveryLatencyMode: string<BALANCED|LOW_LATENCY> (required)
├[~] service aws-mediapackagev2
│ └ resources
│    └[~]  resource AWS::MediaPackageV2::OriginEndpoint
│       └ properties
│          └[+] StreamNameOutputMode: string<INDEX|PASSTHROUGH_NAME>
├[~] service aws-networkfirewall
│ └ resources
│    └[~]  resource AWS::NetworkFirewall::RuleGroup
│       └      - arnTemplate: arn:${Partition}:network-firewall:${Region}:${Account}:stateful-rulegroup/${Name}
│              + arnTemplate: arn:${Partition}:network-firewall:${Region}:${Account}:stateless-rulegroup/${Name}
├[~] service aws-pinpoint
│ └ resources
│    ├[~]  resource AWS::Pinpoint::EmailTemplate
│    │  └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/SMS
│    │         + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/EMAIL
│    ├[~]  resource AWS::Pinpoint::InAppTemplate
│    │  └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/SMS
│    │         + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/VOICE
│    └[~]  resource AWS::Pinpoint::PushTemplate
│       └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/SMS
│              + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/PUSH
├[+] service aws-pricingplanmanager
│ ├      capitalized: PricingPlanManager
│ │      cloudFormationNamespace: AWS::PricingPlanManager
│ │      name: aws-pricingplanmanager
│ │      shortName: pricingplanmanager
│ └ resources
│    └ resource AWS::PricingPlanManager::Subscription
│      ├      name: Subscription
│      │      cloudFormationType: AWS::PricingPlanManager::Subscription
│      │      documentation: Resource type definition for AWS::PricingPlanManager::Subscription. Deleting an activated subscription does not terminate it immediately; it schedules a cancellation that takes effect at the end of the current billing period. Until that date the subscription remains active and billing continues. Deleting a subscription that has not yet been activated (PENDING_APPROVAL status) removes it immediately with no further charges.
│      │      arnTemplate: arn:${Partition}:pricingplanmanager::${Account}:subscription/${SubscriptionId}
│      │      primaryIdentifier: ["Arn"]
│      ├ properties
│      │  ├ PlanFamily: string<CloudFront> (required, immutable)
│      │  ├ PlanTier: string (required)
│      │  ├ UsageLevel: string<DEFAULT|CF_PREMIUM_L2|CF_PREMIUM_L3|CF_PREMIUM_L4|CF_PREMIUM_L5|CF_PREMIUM_L6|CF_PREMIUM_L7>
│      │  └ ResourceArns: Array<string> (required)
│      └ attributes
│         ├ Arn: string
│         ├ CurrentPlanTier: string
│         ├ Status: string<ACTIVE|SYNC_IN_PROGRESS|FAILED|PENDING_APPROVAL>
│         ├ StatusReason: string
│         ├ CreatedAt: string
│         └ UpdatedAt: string
├[~] service aws-quicksight
│ └ resources
│    └[~]  resource AWS::QuickSight::Folder
│       └      - arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:folder/${FolderId}
│              + arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:folder/${ResourceId}
├[~] service aws-rds
│ └ resources
│    ├[~]  resource AWS::RDS::DBInstance
│    │  ├      - arnTemplate: arn:${Partition}:rds:${Region}:${Account}:db:${DBInstanceId}
│    │  │      + arnTemplate: arn:${Partition}:rds:${Region}:${Account}:db:${DbInstanceName}
│    │  ├ attributes
│    │  │  ├[+] StorageOperationPercentProgress: integer
│    │  │  └[+] StorageOperationStatus: string
│    │  └ types
│    │     └[~] type AdditionalStorageVolume
│    │       └ properties
│    │          ├[+] StorageOperationPercentProgress: integer
│    │          └[+] StorageOperationStatus: string
│    └[~]  resource AWS::RDS::DBParameterGroup
│       └      - arnTemplate: arn:${Partition}:rds:${Region}:${Account}:pg:${DBParameterGroupName}
│              + arnTemplate: arn:${Partition}:rds:${Region}:${Account}:pg:${ParameterGroupName}
├[~] service aws-rekognition
│ └ resources
│    └[~]  resource AWS::Rekognition::StreamProcessor
│       └      - arnTemplate: arn:${Partition}:rekognition:${Region}:${Account}:streamprocessor/${StreamprocessorId}
│              + arnTemplate: arn:${Partition}:rekognition:${Region}:${Account}:streamprocessor/${Name}
├[~] service aws-sagemaker
│ └ resources
│    ├[~]  resource AWS::SageMaker::Cluster
│    │  └ types
│    │     ├[+]  type ClusterAccountingDatabase
│    │     │  ├      documentation: External MySQL-compatible accounting database that a Slurm cluster's slurmdbd connects to. Database credentials are supplied out-of-band through the referenced Secrets Manager secret. Supported only with Continuous node provisioning.
│    │     │  │      name: ClusterAccountingDatabase
│    │     │  └ properties
│    │     │     ├ SecretArn: string (required)
│    │     │     ├ Endpoint: string (required)
│    │     │     ├ Port: integer (default=3306)
│    │     │     └ Name: string (default="slurm_acct_db")
│    │     └[~] type ClusterOrchestratorSlurmConfig
│    │       └ properties
│    │          └[+] AccountingDatabase: ClusterAccountingDatabase
│    └[~]  resource AWS::SageMaker::EndpointConfig
│       ├ attributes
│       │  └[-] Id: string
│       └ types
│          ├[~] type ClarifyInferenceConfig
│          │ └ properties
│          │    ├ FeatureHeaders: - Array<json> ⇐ Array<string> (immutable)
│          │    │                 + Array<string> (immutable)
│          │    ├ FeatureTypes: - Array<json> ⇐ Array<string> (immutable)
│          │    │               + Array<string> (immutable)
│          │    └ LabelHeaders: - Array<json> ⇐ Array<string> (immutable)
│          │                    + Array<string> (immutable)
│          ├[-]  type InstancePools
│          │  ├      name: InstancePools
│          │  └ properties
│          │     ├ ModelNameOverride: string
│          │     ├ InstanceType: string (required)
│          │     └ Priority: integer (required)
│          └[~] type ProductionVariant
│            └ properties
│               └ InstancePools: - Array<InstancePools> ⇐ Array<InstancePool>
│                                + Array<InstancePool>
└[~] service aws-workspaces
  └ resources
     └[~]  resource AWS::WorkSpaces::WorkspaceIpGroup
        └      - documentation: Resource type definition for an IP access control group for Amazon WorkSpaces.
               + documentation: Resource Type definition for an IP access control group for Amazon WorkSpaces.
```

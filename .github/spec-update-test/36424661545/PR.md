Updates the L1 CloudFormation resource definitions with the latest changes from `@aws-cdk/aws-service-spec`

**L1 CloudFormation resource definition changes:**
```
├[~] service aws-applicationautoscaling
│ └ resources
│    └[~]  resource AWS::ApplicationAutoScaling::ScalableTarget
│       ├      - tagInformation: undefined
│       │      + tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       └ properties
│          └[+] Tags: Array<tag>
├[~] service aws-appstream
│ └ resources
│    └[~]  resource AWS::AppStream::ImageBuilder
│       ├      - tagInformation: undefined
│       │      + tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       └ properties
│          └[+] DisableIMDSV1: boolean
├[~] service aws-appsync
│ └ resources
│    ├[~]  resource AWS::AppSync::ApiKey
│    │  └      - primaryIdentifier: ["ApiKeyId"]
│    │         + primaryIdentifier: ["ApiId","ApiKeyId"]
│    └[~]  resource AWS::AppSync::GraphQLApi
│       └      - primaryIdentifier: ["ApiId"]
│              + primaryIdentifier: ["Arn"]
├[~] service aws-autoscaling
│ └ resources
│    └[~]  resource AWS::AutoScaling::AutoScalingGroup
│       └ types
│          ├[~] type DistributionSegment
│          │ ├      - documentation: undefined
│          │ │      + documentation: Use this structure to specify the capacity types that Amazon EC2 Auto Scaling prioritizes when it launches instances.
│          │ └ properties
│          │    └ TargetCapacityTypes: (documentation changed)
│          └[~] type InstancesDistribution
│            └ properties
│               └ DistributionSegments: (documentation changed)
├[~] service aws-batch
│ └ resources
│    └[~]  resource AWS::Batch::ComputeEnvironment
│       ├ attributes
│       │  └[+] EksConfiguration.AccessEntry.Status: string<ACTIVE|INACTIVE>
│       └ types
│          ├[~] type EcsSettings
│          │ └ properties
│          │    └ ContainerInsights: (documentation changed)
│          ├[+]  type EksAccessEntry
│          │  ├      documentation: The EKS access entry configuration for the compute environment. Controls whether AWS Batch manages the EKS access entry for the compute environment's service role, or inherits it from the cluster.
│          │  │      name: EksAccessEntry
│          │  └ properties
│          │     ├ DesiredState: string<ENABLED|DISABLED|INHERIT_FROM_CLUSTER>
│          │     └ Status: string<ACTIVE|INACTIVE>
│          └[~] type EksConfiguration
│            └ properties
│               └[+] AccessEntry: EksAccessEntry
├[~] service aws-bcm
│ └ resources
│    └[+]  resource AWS::BCM::ScheduledReport
│       ├      name: ScheduledReport
│       │      cloudFormationType: AWS::BCM::ScheduledReport
│       │      documentation: Creates and manages a scheduled report for an AWS Billing and Cost Management Dashboards dashboard. A scheduled report renders a snapshot of the dashboard on a cron schedule, using an IAM role that the service assumes to read the underlying cost and usage data.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ Name: string (required)
│       │  ├ Description: string
│       │  ├ DashboardArn: string (required)
│       │  ├ ScheduledReportExecutionRoleArn: string (required)
│       │  ├ ScheduleConfig: ScheduleConfig (required)
│       │  ├ WidgetIds: Array<string>
│       │  ├ WidgetDateRangeOverride: DateTimeRange
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ CreatedAt: string
│       │  ├ UpdatedAt: string
│       │  └ HealthStatus: HealthStatus
│       └ types
│          ├ type DateTimeRange
│          │ ├      documentation: An absolute or relative date range.
│          │ │      name: DateTimeRange
│          │ └ properties
│          │    ├ StartTime: DateTimeValue (required)
│          │    └ EndTime: DateTimeValue (required)
│          ├ type DateTimeValue
│          │ ├      documentation: A date expressed either as an absolute instant or as an offset from now.
│          │ │      name: DateTimeValue
│          │ └ properties
│          │    ├ Type: string<ABSOLUTE|RELATIVE> (required)
│          │    └ Value: string (required)
│          ├ type HealthStatus
│          │ ├      documentation: The health of the scheduled report as of its last refresh.
│          │ │      name: HealthStatus
│          │ └ properties
│          │    ├ StatusCode: string<HEALTHY|UNHEALTHY> (required)
│          │    └ LastRefreshedAt: string
│          ├ type ScheduleConfig
│          │ ├      documentation: Defines when and how often a scheduled report runs.
│          │ │      name: ScheduleConfig
│          │ └ properties
│          │    ├ ScheduleExpression: string
│          │    ├ ScheduleExpressionTimeZone: string
│          │    ├ SchedulePeriod: SchedulePeriod
│          │    └ State: string<ENABLED|DISABLED>
│          └ type SchedulePeriod
│            ├      documentation: The window during which the schedule is active. When omitted the service defaults it. EndTime must be within three years of the time of the request.
│            │      name: SchedulePeriod
│            └ properties
│               ├ StartTime: string
│               └ EndTime: string
├[~] service aws-bcmpricingcalculator
│ └ resources
│    └[+]  resource AWS::BcmPricingCalculator::WorkloadEstimate
│       ├      name: WorkloadEstimate
│       │      cloudFormationType: AWS::BcmPricingCalculator::WorkloadEstimate
│       │      documentation: Resource Type definition for AWS::BcmPricingCalculator::WorkloadEstimate
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ Name: string (required)
│       │  ├ RateType: string<BEFORE_DISCOUNTS|AFTER_DISCOUNTS|AFTER_DISCOUNTS_AND_COMMITMENTS> (immutable)
│       │  ├ ExpiresAt: string
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ Arn: string
│          ├ Id: string
│          ├ Status: string<UPDATING|VALID|INVALID|ACTION_NEEDED>
│          ├ TotalCost: number
│          ├ CostCurrency: string<USD>
│          ├ CreatedAt: string
│          ├ RateTimestamp: string
│          └ FailureMessage: string
├[~] service aws-bedrock
│ └ resources
│    ├[~]  resource AWS::Bedrock::DataSource
│    │  └ types
│    │     ├[+]  type DayOfMonth
│    │     │  ├      documentation: Day of the month on which a monthly refresh runs. Exactly one variant is set: an explicit day number, or the last calendar day of the month.
│    │     │  │      name: DayOfMonth
│    │     │  └ properties
│    │     │     ├ DayNumber: integer
│    │     │     └ LastDayOfMonth: json
│    │     ├[~] type ManagedKnowledgeBaseConnectorConfiguration
│    │     │ └ properties
│    │     │    └[+] SyncSchedule: SyncSchedule
│    │     ├[+]  type MonthlySchedule
│    │     │  ├      documentation: A monthly refresh on a specified day of the month.
│    │     │  │      name: MonthlySchedule
│    │     │  └ properties
│    │     │     └ DayOfMonth: DayOfMonth (required)
│    │     ├[~] type ParsingConfiguration
│    │     │ └ properties
│    │     │    └ ParsingStrategy: - string<BEDROCK_FOUNDATION_MODEL|BEDROCK_DATA_AUTOMATION|SMART_PARSING> (required)
│    │     │                       + string<BEDROCK_FOUNDATION_MODEL|BEDROCK_DATA_AUTOMATION|SMART_PARSING|MULTI_MODAL_EMBEDDINGS> (required)
│    │     ├[+]  type SyncSchedule
│    │     │  ├      documentation: Recurring schedule on which the connector automatically refreshes ingested content. Exactly one frequency variant is set.
│    │     │  │      name: SyncSchedule
│    │     │  └ properties
│    │     │     ├ Daily: json
│    │     │     ├ Weekly: WeeklySchedule
│    │     │     └ Monthly: MonthlySchedule
│    │     └[+]  type WeeklySchedule
│    │        ├      documentation: A weekly refresh on a specified day of the week.
│    │        │      name: WeeklySchedule
│    │        └ properties
│    │           └ DayOfWeek: string<SUNDAY|MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY|SATURDAY> (required)
│    └[~]  resource AWS::Bedrock::KnowledgeBase
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"TRACES","destinations":[{"destinationType":"XRAY"}],"optionalFields":["timestamp","resourceArn"],"mandatoryFields":["trace"]},{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","event_timestamp","event","event_version","event_type","level"]}]
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"TRACES","destinations":[{"destinationType":"XRAY"}],"optionalFields":["timestamp","resourceArn"],"mandatoryFields":["trace"]},{"permissionsVersion":"V2","logType":"RUNTIME_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_type","resource_id","accountId","requestId","operation","eventType","traceId","spanId","parentSpanId","sessionId","timeUnixNano","endTimeUnixNano","body","attributes","resource","scope","status","level"],"mandatoryFields":["resourceArn","eventTimestamp"]},{"permissionsVersion":"V2","logType":"APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","event_timestamp","event","event_version","event_type","level"]}]
│       ├ vendedLogs
│       │  └[+] logType: RUNTIME_LOGS
│       │    ├permissionsVersion: V2
│       │    ├destinations: [S3, CWL, FH]
│       │    ├mandatoryFields: [resourceArn, eventTimestamp]
│       │    └optionalFields: [timestamp, resource_type, resource_id, accountId, requestId, operation, eventType, traceId, spanId, parentSpanId, sessionId, timeUnixNano, endTimeUnixNano, body, attributes, resource, scope, status, level]
│       └ types
│          ├[~] type BedrockEmbeddingModelConfiguration
│          │ └ properties
│          │    └[+] ModelConfiguration: json
│          └[~] type ManagedKnowledgeBaseConfiguration
│            └ properties
│               └[+] SupplementalDataStorageConfiguration: SupplementalDataStorageConfiguration
├[~] service aws-bedrockagentcore
│ └ resources
│    ├[~]  resource AWS::BedrockAgentCore::Gateway
│    │  └ types
│    │     └[~] type ManagedVpcResource
│    │       └ properties
│    │          └[+] Tags: Map<string, string>
│    ├[~]  resource AWS::BedrockAgentCore::Memory
│    │  ├ properties
│    │  │  └[+] NamespaceKeys: Array<NamespaceKeyEntry>
│    │  └ types
│    │     ├[+]  type NamespaceKeyEntry
│    │     │  ├      documentation: A namespace variable key definition with optional validation rules
│    │     │  │      name: NamespaceKeyEntry
│    │     │  └ properties
│    │     │     ├ Key: string (required)
│    │     │     └ Validation: NamespaceKeyValidation
│    │     └[+]  type NamespaceKeyValidation
│    │        ├      documentation: Validation rules for namespace variable values. Multiple rules can be specified and all must pass.
│    │        │      name: NamespaceKeyValidation
│    │        └ properties
│    │           ├ AllowedValues: Array<string>
│    │           └ RegexPattern: string
│    ├[~]  resource AWS::BedrockAgentCore::Runtime
│    │  ├ properties
│    │  │  └[+] PlatformVersion: string
│    │  └ attributes
│    │     └ Status: - string<CREATING|CREATE_FAILED|UPDATING|UPDATE_FAILED|READY|DELETING>
│    │               + string<CREATING|CREATE_FAILED|UPDATING|UPDATE_FAILED|READY|DELETING|DELETE_FAILED>
│    └[~]  resource AWS::BedrockAgentCore::RuntimeEndpoint
│       └ attributes
│          └ Status: - string<CREATING|CREATE_FAILED|UPDATING|UPDATE_FAILED|READY|DELETING>
│                    + string<CREATING|CREATE_FAILED|UPDATING|UPDATE_FAILED|READY|DELETING|DELETE_FAILED>
├[~] service aws-billingconductor
│ └ resources
│    └[~]  resource AWS::BillingConductor::PricingRule
│       └ types
│          ├[+]  type CustomTier
│          │  ├      documentation: A custom volume tier that defines the rate applied to usage within the given range.
│          │  │      name: CustomTier
│          │  └ properties
│          │     ├ BeginRangeInclusive: number (required)
│          │     ├ EndRangeExclusive: number
│          │     └ RateValue: number (required)
│          └[~] type Tiering
│            └ properties
│               └[+] CustomTiers: Array<CustomTier>
├[~] service aws-cases
│ └ resources
│    └[+]  resource AWS::Cases::RelatedItem
│       ├      name: RelatedItem
│       │      cloudFormationType: AWS::Cases::RelatedItem
│       │      documentation: Resource Type definition for AWS::Cases::RelatedItem. Creates a related item (comments) and associates it with a case.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["RelatedItemArn"]
│       ├ properties
│       │  ├ DomainId: string (required, immutable)
│       │  ├ CaseId: string (required, immutable)
│       │  ├ Type: string<Contact|Comment|File|Sla|ConnectCase|Custom> (required, immutable)
│       │  ├ Content: RelatedItemContent (required, immutable)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ RelatedItemArn: string
│       │  └ RelatedItemId: string
│       └ types
│          ├ type CommentContent
│          │ ├      documentation: Represents a comment.
│          │ │      name: CommentContent
│          │ └ properties
│          │    ├ Body: string (required)
│          │    └ ContentType: string<Text/Plain> (required)
│          └ type RelatedItemContent
│            ├      documentation: Represents the content of a related item.
│            │      name: RelatedItemContent
│            └ properties
│               └ Comment: CommentContent
├[~] service aws-certificatemanager
│ └ resources
│    └[~]  resource AWS::CertificateManager::AcmeEndpoint
│       └ properties
│          └ AuthorizationBehavior: - string (required)
│                                   + string (required, immutable)
├[~] service aws-chime
│ ├ resources
│ │  ├[+]  resource AWS::Chime::Channel
│ │  │  ├      name: Channel
│ │  │  │      cloudFormationType: AWS::Chime::Channel
│ │  │  │      documentation: Creates a channel in an Amazon Chime SDK Messaging AppInstance. Members of a channel exchange messages within it. Every channel operation is performed on behalf of an AppInstanceUser or AppInstanceBot, whose ARN is supplied as ChimeBearer and forms part of the channel's CloudFormation identifier.
│ │  │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│ │  │  │      primaryIdentifier: ["Arn","ChimeBearer"]
│ │  │  ├ properties
│ │  │  │  ├ ChimeBearer: string (required, immutable)
│ │  │  │  ├ AppInstanceArn: string (required, immutable)
│ │  │  │  ├ ChannelId: string (immutable)
│ │  │  │  ├ Name: string (required)
│ │  │  │  ├ Mode: string<UNRESTRICTED|RESTRICTED>
│ │  │  │  ├ Privacy: string<PUBLIC|PRIVATE> (immutable)
│ │  │  │  ├ Metadata: string
│ │  │  │  ├ MemberArns: Array<string> (immutable)
│ │  │  │  ├ ModeratorArns: Array<string> (immutable)
│ │  │  │  ├ ElasticChannelConfiguration: ElasticChannelConfiguration (immutable)
│ │  │  │  ├ ExpirationSettings: ExpirationSettings
│ │  │  │  └ Tags: Array<tag>
│ │  │  ├ attributes
│ │  │  │  ├ Arn: string
│ │  │  │  ├ CreatedBy: Identity
│ │  │  │  ├ CreatedTimestamp: string
│ │  │  │  ├ LastUpdatedTimestamp: string
│ │  │  │  ├ LastMessageTimestamp: string
│ │  │  │  └ ChannelFlowArn: string
│ │  │  └ types
│ │  │     ├ type ElasticChannelConfiguration
│ │  │     │ ├      documentation: The attributes required to configure and create an elastic channel. An elastic channel must use RESTRICTED mode, cannot be created with MemberArns, and is available only in some regions.
│ │  │     │ │      name: ElasticChannelConfiguration
│ │  │     │ └ properties
│ │  │     │    ├ MaximumSubChannels: integer (required)
│ │  │     │    ├ TargetMembershipsPerSubChannel: integer (required)
│ │  │     │    └ MinimumMembershipPercentage: integer (required)
│ │  │     ├ type ExpirationSettings
│ │  │     │ ├      documentation: Settings that control the interval after which the channel is automatically deleted.
│ │  │     │ │      name: ExpirationSettings
│ │  │     │ └ properties
│ │  │     │    ├ ExpirationDays: integer (required)
│ │  │     │    └ ExpirationCriterion: string<CREATED_TIMESTAMP|LAST_MESSAGE_TIMESTAMP> (required)
│ │  │     └ type Identity
│ │  │       ├      documentation: The AppInstanceUser or AppInstanceBot that created the channel.
│ │  │       │      name: Identity
│ │  │       └ properties
│ │  │          ├ Arn: string
│ │  │          └ Name: string
│ │  ├[+]  resource AWS::Chime::MediaInsightsPipelineConfiguration
│ │  │  ├      name: MediaInsightsPipelineConfiguration
│ │  │  │      cloudFormationType: AWS::Chime::MediaInsightsPipelineConfiguration
│ │  │  │      documentation: Resource Type definition for an Amazon Chime SDK Media Insights Pipeline Configuration
│ │  │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│ │  │  │      primaryIdentifier: ["MediaInsightsPipelineConfigurationArn"]
│ │  │  ├ properties
│ │  │  │  ├ MediaInsightsPipelineConfigurationName: string (required, immutable)
│ │  │  │  ├ ResourceAccessRoleArn: string (required)
│ │  │  │  ├ RealTimeAlertConfiguration: RealTimeAlertConfiguration
│ │  │  │  ├ Elements: Array<MediaInsightsPipelineConfigurationElement> (required)
│ │  │  │  └ Tags: Array<tag>
│ │  │  ├ attributes
│ │  │  │  ├ MediaInsightsPipelineConfigurationArn: string
│ │  │  │  ├ MediaInsightsPipelineConfigurationId: string
│ │  │  │  ├ CreatedTimestamp: string
│ │  │  │  └ UpdatedTimestamp: string
│ │  │  └ types
│ │  │     ├ type AmazonTranscribeCallAnalyticsProcessorConfiguration
│ │  │     │ ├      name: AmazonTranscribeCallAnalyticsProcessorConfiguration
│ │  │     │ └ properties
│ │  │     │    ├ LanguageCode: string<en-US|en-GB|es-US|fr-CA|fr-FR|en-AU|it-IT|de-DE|pt-BR> (required)
│ │  │     │    ├ VocabularyName: string
│ │  │     │    ├ VocabularyFilterName: string
│ │  │     │    ├ VocabularyFilterMethod: string<remove|mask|tag>
│ │  │     │    ├ LanguageModelName: string
│ │  │     │    ├ EnablePartialResultsStabilization: boolean
│ │  │     │    ├ PartialResultsStability: string<high|medium|low>
│ │  │     │    ├ ContentIdentificationType: string<PII>
│ │  │     │    ├ ContentRedactionType: string<PII>
│ │  │     │    ├ PiiEntityTypes: string
│ │  │     │    ├ FilterPartialResults: boolean
│ │  │     │    ├ PostCallAnalyticsSettings: PostCallAnalyticsSettings
│ │  │     │    └ CallAnalyticsStreamCategories: Array<string>
│ │  │     ├ type AmazonTranscribeProcessorConfiguration
│ │  │     │ ├      name: AmazonTranscribeProcessorConfiguration
│ │  │     │ └ properties
│ │  │     │    ├ LanguageCode: string<en-US|en-GB|es-US|fr-CA|fr-FR|en-AU|it-IT|de-DE|pt-BR>
│ │  │     │    ├ VocabularyName: string
│ │  │     │    ├ VocabularyFilterName: string
│ │  │     │    ├ VocabularyFilterMethod: string<remove|mask|tag>
│ │  │     │    ├ ShowSpeakerLabel: boolean
│ │  │     │    ├ EnablePartialResultsStabilization: boolean
│ │  │     │    ├ PartialResultsStability: string<high|medium|low>
│ │  │     │    ├ ContentIdentificationType: string<PII>
│ │  │     │    ├ ContentRedactionType: string<PII>
│ │  │     │    ├ PiiEntityTypes: string
│ │  │     │    ├ LanguageModelName: string
│ │  │     │    ├ FilterPartialResults: boolean
│ │  │     │    ├ IdentifyLanguage: boolean
│ │  │     │    ├ IdentifyMultipleLanguages: boolean
│ │  │     │    ├ LanguageOptions: string
│ │  │     │    ├ PreferredLanguage: string<en-US|en-GB|es-US|fr-CA|fr-FR|en-AU|it-IT|de-DE|pt-BR>
│ │  │     │    ├ VocabularyNames: string
│ │  │     │    └ VocabularyFilterNames: string
│ │  │     ├ type IssueDetectionConfiguration
│ │  │     │ ├      name: IssueDetectionConfiguration
│ │  │     │ └ properties
│ │  │     │    └ RuleName: string (required)
│ │  │     ├ type KeywordMatchConfiguration
│ │  │     │ ├      name: KeywordMatchConfiguration
│ │  │     │ └ properties
│ │  │     │    ├ RuleName: string (required)
│ │  │     │    ├ Keywords: Array<string> (required)
│ │  │     │    └ Negate: boolean
│ │  │     ├ type KinesisDataStreamSinkConfiguration
│ │  │     │ ├      name: KinesisDataStreamSinkConfiguration
│ │  │     │ └ properties
│ │  │     │    └ InsightsTarget: string
│ │  │     ├ type MediaInsightsPipelineConfigurationElement
│ │  │     │ ├      name: MediaInsightsPipelineConfigurationElement
│ │  │     │ └ properties
│ │  │     │    ├ Type: string<AmazonTranscribeCallAnalyticsProcessor|AmazonTranscribeProcessor|KinesisDataStreamSink|S3RecordingSink> (required)
│ │  │     │    ├ AmazonTranscribeCallAnalyticsProcessorConfiguration: AmazonTranscribeCallAnalyticsProcessorConfiguration
│ │  │     │    ├ AmazonTranscribeProcessorConfiguration: AmazonTranscribeProcessorConfiguration
│ │  │     │    ├ KinesisDataStreamSinkConfiguration: KinesisDataStreamSinkConfiguration
│ │  │     │    └ S3RecordingSinkConfiguration: S3RecordingSinkConfiguration
│ │  │     ├ type PostCallAnalyticsSettings
│ │  │     │ ├      name: PostCallAnalyticsSettings
│ │  │     │ └ properties
│ │  │     │    ├ OutputLocation: string (required)
│ │  │     │    ├ DataAccessRoleArn: string (required)
│ │  │     │    ├ ContentRedactionOutput: string<redacted|redacted_and_unredacted>
│ │  │     │    └ OutputEncryptionKMSKeyId: string
│ │  │     ├ type RealTimeAlertConfiguration
│ │  │     │ ├      name: RealTimeAlertConfiguration
│ │  │     │ └ properties
│ │  │     │    ├ Disabled: boolean
│ │  │     │    └ Rules: Array<RealTimeAlertRule>
│ │  │     ├ type RealTimeAlertRule
│ │  │     │ ├      name: RealTimeAlertRule
│ │  │     │ └ properties
│ │  │     │    ├ Type: string<KeywordMatch|Sentiment|IssueDetection> (required)
│ │  │     │    ├ KeywordMatchConfiguration: KeywordMatchConfiguration
│ │  │     │    ├ SentimentConfiguration: SentimentConfiguration
│ │  │     │    └ IssueDetectionConfiguration: IssueDetectionConfiguration
│ │  │     ├ type S3RecordingSinkConfiguration
│ │  │     │ ├      name: S3RecordingSinkConfiguration
│ │  │     │ └ properties
│ │  │     │    ├ Destination: string
│ │  │     │    └ RecordingFileFormat: string<Wav|Opus>
│ │  │     └ type SentimentConfiguration
│ │  │       ├      name: SentimentConfiguration
│ │  │       └ properties
│ │  │          ├ RuleName: string (required)
│ │  │          ├ SentimentType: string<NEGATIVE> (required)
│ │  │          └ TimePeriod: integer (required)
│ │  ├[+]  resource AWS::Chime::SipMediaApplication
│ │  │  ├      name: SipMediaApplication
│ │  │  │      cloudFormationType: AWS::Chime::SipMediaApplication
│ │  │  │      documentation: Resource Type definition for AWS::Chime::SipMediaApplication
│ │  │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│ │  │  │      primaryIdentifier: ["SipMediaApplicationArn"]
│ │  │  ├ properties
│ │  │  │  ├ AwsRegion: string (required, immutable)
│ │  │  │  ├ Name: string (required)
│ │  │  │  ├ Endpoints: Array<SipMediaApplicationEndpoint> (required)
│ │  │  │  └ Tags: Array<tag>
│ │  │  ├ attributes
│ │  │  │  ├ SipMediaApplicationId: string
│ │  │  │  ├ SipMediaApplicationArn: string
│ │  │  │  ├ CreatedTimestamp: string
│ │  │  │  └ UpdatedTimestamp: string
│ │  │  └ types
│ │  │     └ type SipMediaApplicationEndpoint
│ │  │       ├      name: SipMediaApplicationEndpoint
│ │  │       └ properties
│ │  │          └ LambdaArn: string (required)
│ │  └[+]  resource AWS::Chime::VoiceConnector
│ │     ├      name: VoiceConnector
│ │     │      cloudFormationType: AWS::Chime::VoiceConnector
│ │     │      documentation: An Amazon Chime SDK Voice Connector configuration, including outbound host name and encryption settings.
│ │     │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│ │     │      primaryIdentifier: ["VoiceConnectorArn"]
│ │     ├ properties
│ │     │  ├ Name: string (required)
│ │     │  ├ RequireEncryption: boolean (required)
│ │     │  ├ AwsRegion: string<us-east-1|us-west-2|ca-central-1|eu-central-1|eu-west-1|eu-west-2|ap-northeast-2|ap-northeast-1|ap-southeast-1|ap-southeast-2> (immutable)
│ │     │  ├ NetworkType: string<IPV4_ONLY|DUAL_STACK> (immutable)
│ │     │  └ Tags: Array<tag>
│ │     ├ attributes
│ │     │  ├ VoiceConnectorArn: string
│ │     │  ├ VoiceConnectorId: string
│ │     │  ├ OutboundHostName: string
│ │     │  ├ CreatedTimestamp: string
│ │     │  └ UpdatedTimestamp: string
│ │     └ events
│ │        └ event aws.chime@ChimeVoiceConnectorStreamingStatus
│ │          ├      description: Schema for event type ChimeVoiceConnectorStreamingStatus, published by AWS service aws.chime
│ │          │      source: aws.chime
│ │          │      detailType: Chime VoiceConnector Streaming Status
│ │          │      rootProperty: ChimeVoiceConnectorStreamingStatus
│ │          │      resourcesFields: [
│ │          │        {
│ │          │          "type": "ChimeVoiceConnectorStreamingStatus",
│ │          │          "fieldName": "voiceConnectorId",
│ │          │          "resource": "VoiceConnector"
│ │          │        }
│ │          │      ]
│ │          └ types
│ │             └ type ChimeVoiceConnectorStreamingStatus
│ │               └ properties
│ │                  ├ callId: string (required)
│ │                  ├ direction: string (required)
│ │                  ├ mediaType: string (required)
│ │                  ├ startFragmentNumber: string (required)
│ │                  ├ startTime: string (required)
│ │                  ├ streamArn: string (required)
│ │                  ├ streamingStatus: string (required)
│ │                  ├ transactionId: string (required)
│ │                  ├ version: string (required)
│ │                  ├ voiceConnectorId: string (required)
│ │                  ├ inviteHeaders: Map<string>
│ │                  └ siprecMetadata: string
│ └ events
│    └[~]  event aws.chime@ChimeVoiceConnectorStreamingStatus
│       └      + resourcesField: [
│                {
│                  "type": "ChimeVoiceConnectorStreamingStatus",
│                  "fieldName": "voiceConnectorId",
│                  "resource": "VoiceConnector"
│                }
│              ]
├[~] service aws-cloudfront
│ └ resources
│    └[+]  resource AWS::CloudFront::FieldLevelEncryptionProfile
│       ├      name: FieldLevelEncryptionProfile
│       │      cloudFormationType: AWS::CloudFront::FieldLevelEncryptionProfile
│       │      documentation: Resource Type definition for AWS::CloudFront::FieldLevelEncryptionProfile. A field-level encryption profile maps CloudFront public keys and provider identities to the request-body field patterns that CloudFront encrypts with them.
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  └ FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig (required)
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ Id: string
│       │  └ LastModifiedTime: string
│       └ types
│          ├ type EncryptionEntity
│          │ ├      documentation: A public key, its provider identity, and the field patterns CloudFront encrypts with that key.
│          │ │      name: EncryptionEntity
│          │ └ properties
│          │    ├ PublicKeyId: string (required)
│          │    ├ ProviderId: string (required)
│          │    └ FieldPatterns: Array<string> (required)
│          └ type FieldLevelEncryptionProfileConfig
│            ├      documentation: The configuration of a field-level encryption profile.
│            │      name: FieldLevelEncryptionProfileConfig
│            └ properties
│               ├ Name: string (required)
│               ├ CallerReference: string (required, immutable)
│               ├ Comment: string
│               └ EncryptionEntities: Array<EncryptionEntity> (required)
├[~] service aws-codebuild
│ └ resources
│    ├[~]  resource AWS::CodeBuild::Fleet
│    │  └ properties
│    │     └ Name: - string
│    │             + string (immutable)
│    └[~]  resource AWS::CodeBuild::ReportGroup
│       ├      - primaryIdentifier: ["Arn"]
│       │      + primaryIdentifier: ["Id"]
│       ├ properties
│       │  └ Type: - string<TEST|CODE_COVERAGE> (required, immutable)
│       │          + string (required, immutable)
│       ├ attributes
│       │  └[+] Id: string
│       └ types
│          ├[~] type ReportExportConfig
│          │ └ properties
│          │    └ ExportConfigType: - string<S3|NO_EXPORT> (required)
│          │                        + string (required)
│          └[~] type S3ReportExportConfig
│            └ properties
│               └ Packaging: - string<NONE|ZIP>
│                            + string
├[~] service aws-comprehend
│ └ resources
│    ├[+]  resource AWS::Comprehend::DocumentClassifierEndpoint
│    │  ├      name: DocumentClassifierEndpoint
│    │  │      cloudFormationType: AWS::Comprehend::DocumentClassifierEndpoint
│    │  │      documentation: An Amazon Comprehend endpoint that hosts a custom document classification model for real-time inference.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:comprehend:${Region}:${Account}:document-classifier-endpoint/${EndpointName}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ EndpointName: string (required, immutable)
│    │  │  ├ ModelArn: string (required)
│    │  │  ├ DesiredInferenceUnits: integer (required)
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ Arn: string
│    │     ├ CurrentInferenceUnits: integer
│    │     ├ CreationTime: string
│    │     └ LastModifiedTime: string
│    └[+]  resource AWS::Comprehend::EntityRecognizer
│       ├      name: EntityRecognizer
│       │      cloudFormationType: AWS::Comprehend::EntityRecognizer
│       │      documentation: An Amazon Comprehend custom entity recognizer: a trained model that identifies custom entity types in text, created via an asynchronous training job.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ RecognizerName: string (required, immutable)
│       │  ├ VersionName: string (immutable)
│       │  ├ DataAccessRoleArn: string (required, immutable)
│       │  ├ LanguageCode: string<en|es|fr|de|it|pt|ar|hi|ja|ko|zh|zh-TW> (required, immutable)
│       │  ├ InputDataConfig: EntityRecognizerInputDataConfig (required, immutable)
│       │  ├ VolumeKmsKeyId: string (immutable)
│       │  ├ ModelKmsKeyId: string (immutable)
│       │  ├ VpcConfig: VpcConfig (immutable)
│       │  ├ ModelPolicy: string (immutable)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  └ Arn: string
│       └ types
│          ├ type AugmentedManifestsListItem
│          │ ├      documentation: An augmented manifest file that provides training data for your custom model.
│          │ │      name: AugmentedManifestsListItem
│          │ └ properties
│          │    ├ S3Uri: string (required)
│          │    ├ Split: string<TRAIN|TEST>
│          │    ├ AttributeNames: Array<string> (required)
│          │    ├ AnnotationDataS3Uri: string
│          │    ├ SourceDocumentsS3Uri: string
│          │    └ DocumentType: string<PLAIN_TEXT_DOCUMENT|SEMI_STRUCTURED_DOCUMENT>
│          ├ type EntityRecognizerAnnotations
│          │ ├      documentation: Describes the annotations associated with an entity recognizer.
│          │ │      name: EntityRecognizerAnnotations
│          │ └ properties
│          │    ├ S3Uri: string (required)
│          │    └ TestS3Uri: string
│          ├ type EntityRecognizerDocuments
│          │ ├      documentation: Describes the training documents submitted with an entity recognizer.
│          │ │      name: EntityRecognizerDocuments
│          │ └ properties
│          │    ├ S3Uri: string (required)
│          │    ├ TestS3Uri: string
│          │    └ InputFormat: string<ONE_DOC_PER_FILE|ONE_DOC_PER_LINE>
│          ├ type EntityRecognizerEntityList
│          │ ├      documentation: Describes the entity list submitted with an entity recognizer.
│          │ │      name: EntityRecognizerEntityList
│          │ └ properties
│          │    └ S3Uri: string (required)
│          ├ type EntityRecognizerInputDataConfig
│          │ ├      documentation: Specifies the format and location of the input data for an entity recognizer.
│          │ │      name: EntityRecognizerInputDataConfig
│          │ └ properties
│          │    ├ DataFormat: string<COMPREHEND_CSV|AUGMENTED_MANIFEST>
│          │    ├ EntityTypes: Array<EntityTypesListItem> (required)
│          │    ├ Documents: EntityRecognizerDocuments
│          │    ├ Annotations: EntityRecognizerAnnotations
│          │    ├ EntityList: EntityRecognizerEntityList
│          │    └ AugmentedManifests: Array<AugmentedManifestsListItem>
│          ├ type EntityTypesListItem
│          │ ├      documentation: An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity recognizer.
│          │ │      name: EntityTypesListItem
│          │ └ properties
│          │    └ Type: string (required)
│          └ type VpcConfig
│            ├      documentation: Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job.
│            │      name: VpcConfig
│            └ properties
│               ├ SecurityGroupIds: Array<string> (required)
│               └ Subnets: Array<string> (required)
├[~] service aws-config
│ └ resources
│    ├[~]  resource AWS::Config::ConfigurationRecorder
│    │  ├      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["Name"]
│    │  ├ properties
│    │  │  └[+] StartedOnCreate: boolean (default=true, immutable)
│    │  └ attributes
│    │     └[+] ResourceARN: string
│    └[~]  resource AWS::Config::DeliveryChannel
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["Name"]
│       └ attributes
│          └[-] Id: string
├[~] service aws-connect
│ └ resources
│    ├[~]  resource AWS::Connect::EvaluationForm
│    │  ├ properties
│    │  │  └[+] AIVersion: string
│    │  └ types
│    │     ├[+]  type EvaluationFormMetricConfiguration
│    │     │  ├      name: EvaluationFormMetricConfiguration
│    │     │  └ properties
│    │     │     ├ MetricType: string<BUSINESS_OUTCOME> (required)
│    │     │     └ MetricName: string (required)
│    │     └[~] type EvaluationFormQuestion
│    │       └ properties
│    │          └[+] MetricConfiguration: EvaluationFormMetricConfiguration
│    ├[~]  resource AWS::Connect::Metric
│    │  └ properties
│    │     ├ MetricCalculation: - MetricCalculation
│    │     │                    + MetricCalculation (required)
│    │     ├ Name: - string
│    │     │       + string (required)
│    │     ├ Status: - string<SAVED|PUBLISHED> (immutable)
│    │     │         + string<SAVED|PUBLISHED> (required, immutable)
│    │     └ Unit: - string<INTEGER|DOUBLE|PERCENT|SECONDS>
│    │             + string<INTEGER|DOUBLE|PERCENT|SECONDS> (required)
│    └[+]  resource AWS::Connect::Vocabulary
│       ├      name: Vocabulary
│       │      cloudFormationType: AWS::Connect::Vocabulary
│       │      documentation: Resource type definition for AWS::Connect::Vocabulary
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ InstanceId: string (required, immutable)
│       │  ├ VocabularyName: string (required, immutable)
│       │  ├ LanguageCode: string<ar-AE|de-CH|de-DE|en-AB|en-AU|en-GB|en-IE|en-IN|en-US|en-WL|es-ES|es-US|fr-CA|fr-FR|hi-IN|it-IT|ja-JP|ko-KR|pt-BR|pt-PT|zh-CN|en-NZ|en-ZA|ca-ES|da-DK|fi-FI|id-ID|ms-MY|nl-NL|no-NO|pl-PL|sv-SE|tl-PH> (required, immutable)
│       │  ├ Content: string (required, immutable)
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ Arn: string
│          ├ VocabularyId: string
│          ├ State: string<CREATION_IN_PROGRESS|ACTIVE|CREATION_FAILED|DELETE_IN_PROGRESS>
│          └ LastModifiedTime: string
├[~] service aws-customerprofiles
│ └ resources
│    └[+]  resource AWS::CustomerProfiles::RecommenderSchema
│       ├      name: RecommenderSchema
│       │      cloudFormationType: AWS::CustomerProfiles::RecommenderSchema
│       │      documentation: A recommender schema defining the set of data columns available for training recommenders and filters under an Amazon Connect Customer Profiles domain.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ DomainName: string (required, immutable)
│       │  ├ RecommenderSchemaName: string (required, immutable)
│       │  ├ Fields: Map<string, Array<RecommenderSchemaField>> (required, immutable)
│       │  └ Tags: Array<TagsItems>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ CreatedAt: string
│       │  └ Status: string<ACTIVE|DELETING>
│       └ types
│          ├ type RecommenderSchemaField
│          │ ├      name: RecommenderSchemaField
│          │ └ properties
│          │    ├ TargetFieldName: string (required)
│          │    ├ ContentType: string<STRING|NUMBER>
│          │    └ FeatureType: string<TEXTUAL|CATEGORICAL>
│          └ type TagsItems
│            ├      name: TagsItems
│            └ properties
│               ├ Key: string (required)
│               └ Value: string (required)
├[~] service aws-datasync
│ └ resources
│    ├[~]  resource AWS::DataSync::LocationAzureBlob
│    │  ├ properties
│    │  │  ├ AzureBlobAuthenticationType: - string<SAS|NONE> (required, default="SAS")
│    │  │  │                              + string<SAS|NONE|OIDC> (required, default="SAS")
│    │  │  └[+] FederatedIdentity: AzureFederatedIdentityConfig
│    │  └ types
│    │     ├[+]  type AzureFederatedIdentityConfig
│    │     │  ├      documentation: Specifies the identity federation configuration that DataSync uses to access your Azure Blob Storage container using an OpenID Connect (OIDC) token.
│    │     │  │      name: AzureFederatedIdentityConfig
│    │     │  └ properties
│    │     │     ├ AwsIamRole: string
│    │     │     └ AzureOidc: AzureOidcConfig
│    │     └[+]  type AzureOidcConfig
│    │        ├      documentation: Specifies the Microsoft Entra (Azure AD) identity that DataSync federates with to obtain an access token for your Azure Blob Storage container.
│    │        │      name: AzureOidcConfig
│    │        └ properties
│    │           ├ TenantId: string (required)
│    │           └ ClientId: string (required)
│    ├[~]  resource AWS::DataSync::LocationFSxOpenZFS
│    │  └ types
│    │     └[~] type MountOptions
│    │       └ properties
│    │          └ Version: - string<AUTOMATIC|NFS3|NFS4_0|NFS4_1> (immutable)
│    │                     + string<AUTOMATIC|NFS3|NFS4_0|NFS4_1|NFS4_2> (immutable)
│    ├[~]  resource AWS::DataSync::LocationNFS
│    │  └ types
│    │     └[~] type MountOptions
│    │       └ properties
│    │          └ Version: - string<AUTOMATIC|NFS3|NFS4_0|NFS4_1>
│    │                     + string<AUTOMATIC|NFS3|NFS4_0|NFS4_1|NFS4_2>
│    ├[~]  resource AWS::DataSync::LocationObjectStorage
│    │  ├ properties
│    │  │  └[+] FederatedIdentity: ObjectStorageFederatedIdentityConfig
│    │  └ types
│    │     ├[+]  type GoogleOidcConfig
│    │     │  ├      documentation: Specifies the Google Cloud workload identity federation configuration that DataSync uses to obtain an access token for your Google Cloud Storage bucket.
│    │     │  │      name: GoogleOidcConfig
│    │     │  └ properties
│    │     │     ├ ProjectName: string (required)
│    │     │     ├ ProjectNumber: string (required)
│    │     │     ├ IdentityPoolName: string (required)
│    │     │     └ IdentityProviderName: string (required)
│    │     ├[+]  type ObjectStorageExternalIdentityConfig
│    │     │  ├      documentation: Specifies the external (non-AWS) identity provider that DataSync federates with to access your object storage location.
│    │     │  │      name: ObjectStorageExternalIdentityConfig
│    │     │  └ properties
│    │     │     └ GoogleOidc: GoogleOidcConfig
│    │     └[+]  type ObjectStorageFederatedIdentityConfig
│    │        ├      documentation: Specifies the identity federation configuration that DataSync uses to access your object storage location using an OpenID Connect (OIDC) token.
│    │        │      name: ObjectStorageFederatedIdentityConfig
│    │        └ properties
│    │           ├ AwsIamRole: string
│    │           └ ExternalIdentity: ObjectStorageExternalIdentityConfig
│    └[~]  resource AWS::DataSync::Task
│       └ types
│          └[~] type Options
│            └ properties
│               └[+] ObjectMetadata: string<PRESERVE|NONE>
├[~] service aws-datazone
│ └ resources
│    └[~]  resource AWS::DataZone::Connection
│       └ types
│          └[~] type IamPropertiesInput
│            └ properties
│               └[+] RoleArn: string
├[~] service aws-devopsagent
│ └ resources
│    ├[~]  resource AWS::DevOpsAgent::AgentSpace
│    │  ├ properties
│    │  │  └[+] Preferences: Preferences
│    │  └ types
│    │     └[+]  type Preferences
│    │        ├      documentation: Preferences that configure behavior of this AgentSpace. This container fully owns the AgentSpace preferences: the properties supplied here replace the stored preferences in their entirety, and omitting the Preferences container reverts all preferences to their service defaults.
│    │        │      name: Preferences
│    │        └ properties
│    │           └ ElevatedActionsEnabled: boolean
│    └[~]  resource AWS::DevOpsAgent::Service
│       └ types
│          └[~] type MCPServerSigV4AuthorizationConfig
│            └ properties
│               └ RoleArn: (documentation changed)
├[~] service aws-dlm
│ └ resources
│    └[~]  resource AWS::DLM::LifecyclePolicy
│       ├ attributes
│       │  └[-] Id: string
│       └ types
│          └[~] type Exclusions
│            └ properties
│               └ ExcludeVolumeTypes: - Array<json> ⇐ Array<string>
│                                     + Array<string>
├[~] service aws-docdb
│ └ resources
│    └[~]  resource AWS::DocDB::DBClusterParameterGroup
│       └      - arnTemplate: arn:${Partition}:rds:${Region}:${Account}:cluster-pg:${ClusterPGName}
│              + arnTemplate: arn:${Partition}:rds:${Region}:${Account}:cluster-pg:${ClusterParameterGroupName}
├[~] service aws-docdbelastic
│ └ resources
│    └[+]  resource AWS::DocDBElastic::ClusterSnapshot
│       ├      name: ClusterSnapshot
│       │      cloudFormationType: AWS::DocDBElastic::ClusterSnapshot
│       │      documentation: Resource Type definition for AWS::DocDBElastic::ClusterSnapshot. Creates a manual snapshot of an Amazon DocumentDB elastic cluster.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:docdb-elastic:${Region}:${Account}:cluster-snapshot/${ResourceId}
│       │      primaryIdentifier: ["SnapshotArn"]
│       ├ properties
│       │  ├ SnapshotName: string (required, immutable)
│       │  ├ ClusterArn: string (required, immutable)
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ SnapshotArn: string
│          ├ Status: string
│          ├ SnapshotType: string<MANUAL|AUTOMATED>
│          ├ SnapshotCreationTime: string
│          ├ ClusterCreationTime: string
│          ├ SubnetIds: Array<string>
│          ├ VpcSecurityGroupIds: Array<string>
│          ├ AdminUserName: string
│          └ KmsKeyId: string
├[~] service aws-drs
│ └ resources
│    ├[+]  resource AWS::DRS::LaunchConfigurationTemplate
│    │  ├      name: LaunchConfigurationTemplate
│    │  │      cloudFormationType: AWS::DRS::LaunchConfigurationTemplate
│    │  │      documentation: Account level Launch Configuration Template for AWS Elastic Disaster Recovery.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:drs:${Region}:${Account}:launch-configuration-template/${LaunchConfigurationTemplateID}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ LaunchDisposition: string<STOPPED|STARTED>
│    │  │  ├ TargetInstanceTypeRightSizingMethod: string<NONE|BASIC|IN_AWS>
│    │  │  ├ CopyPrivateIp: boolean
│    │  │  ├ CopyTags: boolean
│    │  │  ├ Licensing: Licensing
│    │  │  ├ ExportBucketArn: string
│    │  │  ├ PostLaunchEnabled: boolean
│    │  │  ├ LaunchIntoSourceInstance: boolean
│    │  │  └ Tags: Array<tag> (immutable)
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  └ LaunchConfigurationTemplateID: string
│    │  └ types
│    │     └ type Licensing
│    │       ├      documentation: Configuration of a machine's license.
│    │       │      name: Licensing
│    │       └ properties
│    │          └ OsByol: boolean
│    └[+]  resource AWS::DRS::ReplicationConfigurationTemplate
│       ├      name: ReplicationConfigurationTemplate
│       │      cloudFormationType: AWS::DRS::ReplicationConfigurationTemplate
│       │      documentation: A replication configuration template for AWS Elastic Disaster Recovery Service.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ StagingAreaSubnetId: string (required)
│       │  ├ AssociateDefaultSecurityGroup: boolean
│       │  ├ ReplicationServersSecurityGroupsIDs: Array<string> (required)
│       │  ├ ReplicationServerInstanceType: string
│       │  ├ UseDedicatedReplicationServer: boolean
│       │  ├ DefaultLargeStagingDiskType: string<GP2|GP3|ST1|AUTO>
│       │  ├ EbsEncryption: string<DEFAULT|CUSTOM|NONE> (required)
│       │  ├ EbsEncryptionKeyArn: string
│       │  ├ BandwidthThrottling: integer (required)
│       │  ├ DataPlaneRouting: string<PRIVATE_IP|PUBLIC_IP>
│       │  ├ CreatePublicIP: boolean
│       │  ├ StagingAreaTags: Map<string, string> (required)
│       │  ├ PitPolicy: Array<PITPolicyRule> (required)
│       │  ├ Tags: Array<tag>
│       │  ├ AutoReplicateNewDisks: boolean
│       │  └ InternetProtocol: string<IPV4|IPV6>
│       ├ attributes
│       │  ├ Arn: string
│       │  └ ReplicationConfigurationTemplateID: string
│       └ types
│          └ type PITPolicyRule
│            ├      name: PITPolicyRule
│            └ properties
│               ├ RuleID: integer
│               ├ Units: string<MINUTE|HOUR|DAY> (required)
│               ├ Interval: integer (required)
│               ├ RetentionDuration: integer (required)
│               └ Enabled: boolean
├[~] service aws-dynamodb
│ └ resources
│    ├[-]  resource AWS::DynamoDB::Backup
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
│    ├[~]  resource AWS::DynamoDB::GlobalTable
│    │  ├ properties
│    │  │  └[+] VectorIndexes: Array<VectorIndex>
│    │  └ types
│    │     ├[+]  type SearchSchemaElement
│    │     │  ├      name: SearchSchemaElement
│    │     │  └ properties
│    │     │     ├ AttributeName: string (required)
│    │     │     └ SearchSchemaElementType: string<HASH|INLINE_FILTER> (required)
│    │     ├[+]  type VectorAttribute
│    │     │  ├      name: VectorAttribute
│    │     │  └ properties
│    │     │     └ AttributeName: string (required)
│    │     └[+]  type VectorIndex
│    │        ├      name: VectorIndex
│    │        └ properties
│    │           ├ IndexName: string (required)
│    │           ├ VectorAttribute: VectorAttribute (required)
│    │           ├ Projection: Projection (required)
│    │           ├ Dimensions: integer (required)
│    │           ├ SearchSchema: Array<SearchSchemaElement>
│    │           └ DistanceFunction: string<COSINE|DOT_PRODUCT|EUCLIDEAN> (required)
│    └[~]  resource AWS::DynamoDB::Table
│       ├ properties
│       │  └[+] VectorIndexes: Array<VectorIndex>
│       └ types
│          ├[+]  type SearchSchemaElement
│          │  ├      name: SearchSchemaElement
│          │  └ properties
│          │     ├ AttributeName: string (required)
│          │     └ SearchSchemaElementType: string<HASH|INLINE_FILTER> (required)
│          ├[+]  type VectorAttribute
│          │  ├      name: VectorAttribute
│          │  └ properties
│          │     └ AttributeName: string (required)
│          └[+]  type VectorIndex
│             ├      name: VectorIndex
│             └ properties
│                ├ IndexName: string (required)
│                ├ VectorAttribute: VectorAttribute (required)
│                ├ Projection: Projection (required)
│                ├ Dimensions: integer (required)
│                ├ SearchSchema: Array<SearchSchemaElement>
│                └ DistanceFunction: string<COSINE|DOT_PRODUCT|EUCLIDEAN> (required)
├[~] service aws-ec2
│ └ resources
│    ├[~]  resource AWS::EC2::EC2Fleet
│    │  └ types
│    │     ├[~] type EbsBlockDevice
│    │     │ └ properties
│    │     │    └[+] MultiAvailabilityZoneConfiguration: MultiAvailabilityZoneConfiguration
│    │     ├[+]  type MultiAvailabilityZoneConfiguration
│    │     │  ├      name: MultiAvailabilityZoneConfiguration
│    │     │  └ properties
│    │     │     ├ ConfigurationType: string
│    │     │     └ StandbyAvailabilityZones: Array<StandbyAvailabilityZone>
│    │     └[+]  type StandbyAvailabilityZone
│    │        ├      name: StandbyAvailabilityZone
│    │        └ properties
│    │           ├ AvailabilityZoneId: string
│    │           └ AvailabilityZone: string
│    ├[+]  resource AWS::EC2::InstanceEventWindow
│    │  ├      name: InstanceEventWindow
│    │  │      cloudFormationType: AWS::EC2::InstanceEventWindow
│    │  │      documentation: Resource type definition for AWS::EC2::InstanceEventWindow. An event window defines a recurring set of time ranges, or a cron expression, during which AWS-initiated maintenance events may be scheduled for the associated Amazon EC2 instances or Dedicated Hosts.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ Name: string
│    │  │  ├ TimeRanges: Array<TimeRange>
│    │  │  ├ CronExpression: string
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  ├ InstanceEventWindowId: string
│    │  │  └ State: string
│    │  └ types
│    │     └ type TimeRange
│    │       ├      documentation: A time range during which an AWS-initiated maintenance event may occur.
│    │       │      name: TimeRange
│    │       └ properties
│    │          ├ StartWeekDay: string<sunday|monday|tuesday|wednesday|thursday|friday|saturday>
│    │          ├ StartHour: integer
│    │          ├ EndWeekDay: string<sunday|monday|tuesday|wednesday|thursday|friday|saturday>
│    │          └ EndHour: integer
│    ├[+]  resource AWS::EC2::IPv4Pool
│    │  ├      name: IPv4Pool
│    │  │      cloudFormationType: AWS::EC2::IPv4Pool
│    │  │      documentation: Resource Type definition for AWS::EC2::IPv4Pool. A public IPv4 pool is an EC2 IP address pool required for the public IPv4 CIDRs that you own and bring to AWS to manage with IPAM (BYOIP).
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ Arn: string
│    │     ├ PoolId: string
│    │     ├ Description: string
│    │     ├ NetworkBorderGroup: string
│    │     ├ TotalAddressCount: integer
│    │     └ TotalAvailableAddressCount: integer
│    ├[+]  resource AWS::EC2::SubnetCidrReservation
│    │  ├      name: SubnetCidrReservation
│    │  │      cloudFormationType: AWS::EC2::SubnetCidrReservation
│    │  │      documentation: Resource Type definition for a CIDR range reserved inside an Amazon EC2 subnet.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["SubnetId","SubnetCidrReservationId"]
│    │  ├ properties
│    │  │  ├ SubnetId: string (required, immutable)
│    │  │  ├ Cidr: string (required, immutable)
│    │  │  ├ ReservationType: string<prefix|explicit> (required, immutable)
│    │  │  ├ Description: string (immutable)
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ Arn: string
│    │     ├ SubnetCidrReservationId: string
│    │     └ OwnerId: string
│    └[~]  resource AWS::EC2::VPCEndpoint
│       └ properties
│          └ VpcEndpointType: - string<Interface|Gateway|GatewayLoadBalancer|ServiceNetwork|Resource> (immutable)
│                             + string<Interface|Gateway|GatewayLoadBalancer|ServiceNetwork|Resource|Tunnel> (immutable)
├[~] service aws-ecs
│ └ resources
│    ├[~]  resource AWS::ECS::Daemon
│    │  └ properties
│    │     └[+] Critical: boolean
│    └[~]  resource AWS::ECS::Service
│       └ types
│          ├[~] type DeploymentConfiguration
│          │ └ properties
│          │    └[+] EarlySuccessCriteria: DeploymentEarlySuccessCriteria
│          └[+]  type DeploymentEarlySuccessCriteria
│             ├      name: DeploymentEarlySuccessCriteria
│             └ properties
│                ├ SourceServiceRevisionCleanup: string<BLOCKING|DEFERRED>
│                ├ HealthyPercent: integer
│                └ Enable: boolean
├[~] service aws-elasticache
│ └ resources
│    └[~]  resource AWS::ElastiCache::GlobalReplicationGroup
│       ├      - tagInformation: undefined
│       │      + tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       ├ properties
│       │  └[+] Tags: Array<tag>
│       └ attributes
│          └[+] Arn: string
├[~] service aws-elasticbeanstalk
│ └ resources
│    └[~]  resource AWS::ElasticBeanstalk::ApplicationVersion
│       ├ properties
│       │  ├[+] BuildConfiguration: BuildConfiguration (immutable)
│       │  ├[+] ImageConfiguration: ImageConfiguration (immutable)
│       │  ├[+] Process: boolean (immutable)
│       │  └ SourceBundle: - SourceBundle (required, immutable)
│       │                  + SourceBundle (immutable)
│       └ types
│          ├[+]  type BuildConfiguration
│          │  ├      name: BuildConfiguration
│          │  └ properties
│          │     ├ CodeBuildServiceRole: string (required)
│          │     ├ Image: string (required)
│          │     ├ ComputeType: string<BUILD_GENERAL1_SMALL|BUILD_GENERAL1_MEDIUM|BUILD_GENERAL1_LARGE>
│          │     ├ TimeoutInMinutes: integer
│          │     └ ArtifactName: string
│          ├[+]  type ImageBuildConfiguration
│          │  ├      name: ImageBuildConfiguration
│          │  └ properties
│          │     ├ Type: string<docker|buildpack> (required)
│          │     ├ DockerfileLocation: string
│          │     ├ Buildpack: string
│          │     ├ Architecture: string<amd64|arm64>
│          │     ├ CodeBuildServiceRole: string (required)
│          │     ├ ComputeType: string<BUILD_GENERAL1_SMALL|BUILD_GENERAL1_MEDIUM|BUILD_GENERAL1_LARGE>
│          │     └ TimeoutInMinutes: integer
│          ├[+]  type ImageConfiguration
│          │  ├      name: ImageConfiguration
│          │  └ properties
│          │     ├ Source: ImageSource
│          │     └ Build: ImageBuildConfiguration
│          └[+]  type ImageSource
│             ├      name: ImageSource
│             └ properties
│                └ Uri: string
├[~] service aws-emr
│ └ resources
│    └[~]  resource AWS::EMR::InstanceGroupConfig
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["InstanceGroupId","JobFlowId"]
│       ├ properties
│       │  └ Configurations: - Array<Configuration> (immutable)
│       │                    + Array<AppConfiguration> ⇐ Array<Configuration> (immutable)
│       ├ attributes
│       │  ├[-] Id: string
│       │  └[+] InstanceGroupId: string
│       └ types
│          └[+]  type AppConfiguration
│             ├      name: AppConfiguration
│             └ properties
│                ├ Classification: string
│                ├ ConfigurationProperties: Map<string, string>
│                └ Configurations: Array<AppConfiguration>
├[~] service aws-emrcontainers
│ └ resources
│    └[+]  resource AWS::EMRContainers::JobTemplate
│       ├      name: JobTemplate
│       │      cloudFormationType: AWS::EMRContainers::JobTemplate
│       │      documentation: Represents an Amazon EMR on EKS job template. A job template stores the values of a StartJobRun API request in a reusable template, so they can be used to start a job run or to enforce certain values in a StartJobRun API request.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ Name: string (required, immutable)
│       │  ├ JobTemplateData: JobTemplateData (required, immutable)
│       │  └ Tags: Array<tag> (immutable)
│       ├ attributes
│       │  ├ Id: string
│       │  ├ Arn: string
│       │  ├ CreatedAt: string
│       │  └ CreatedBy: string
│       └ types
│          ├ type Configuration
│          │ ├      documentation: A configuration specification to be used when provisioning virtual clusters, which can include configurations for applications and software bundled with Amazon EMR on EKS.
│          │ │      name: Configuration
│          │ └ properties
│          │    ├ Classification: string (required)
│          │    ├ Properties: Map<string, string>
│          │    └ Configurations: Array<Configuration>
│          ├ type JobDriver
│          │ ├      documentation: Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either SparkSqlJobDriver or SparkSubmitJobDriver.
│          │ │      name: JobDriver
│          │ └ properties
│          │    ├ SparkSubmitJobDriver: SparkSubmitJobDriver
│          │    └ SparkSqlJobDriver: SparkSqlJobDriver
│          ├ type JobTemplateData
│          │ ├      documentation: The values of a StartJobRun API request used in job runs started using the job template.
│          │ │      name: JobTemplateData
│          │ └ properties
│          │    ├ ExecutionRoleArn: string (required)
│          │    ├ ReleaseLabel: string (required)
│          │    ├ ConfigurationOverrides: ParametricConfigurationOverrides
│          │    ├ JobDriver: JobDriver (required)
│          │    ├ ParameterConfiguration: Map<string, TemplateParameterConfiguration>
│          │    └ JobTags: Map<string, string>
│          ├ type ParametricCloudWatchMonitoringConfiguration
│          │ ├      documentation: A configuration for CloudWatch monitoring. This data type allows job template parameters to be specified within.
│          │ │      name: ParametricCloudWatchMonitoringConfiguration
│          │ └ properties
│          │    ├ LogGroupName: string
│          │    └ LogStreamNamePrefix: string
│          ├ type ParametricConfigurationOverrides
│          │ ├      documentation: A configuration specification to be used to override existing configurations. This data type allows job template parameters to be specified within.
│          │ │      name: ParametricConfigurationOverrides
│          │ └ properties
│          │    ├ ApplicationConfiguration: Array<Configuration>
│          │    └ MonitoringConfiguration: ParametricMonitoringConfiguration
│          ├ type ParametricMonitoringConfiguration
│          │ ├      documentation: Configuration setting for monitoring. This data type allows job template parameters to be specified within.
│          │ │      name: ParametricMonitoringConfiguration
│          │ └ properties
│          │    ├ PersistentAppUI: string
│          │    ├ CloudWatchMonitoringConfiguration: ParametricCloudWatchMonitoringConfiguration
│          │    └ S3MonitoringConfiguration: ParametricS3MonitoringConfiguration
│          ├ type ParametricS3MonitoringConfiguration
│          │ ├      documentation: Amazon S3 configuration for monitoring log publishing. This data type allows job template parameters to be specified within.
│          │ │      name: ParametricS3MonitoringConfiguration
│          │ └ properties
│          │    └ LogUri: string
│          ├ type SparkSqlJobDriver
│          │ ├      documentation: The job driver for job type.
│          │ │      name: SparkSqlJobDriver
│          │ └ properties
│          │    ├ EntryPoint: string
│          │    └ SparkSqlParameters: string
│          ├ type SparkSubmitJobDriver
│          │ ├      documentation: The information about job driver for Spark submit.
│          │ │      name: SparkSubmitJobDriver
│          │ └ properties
│          │    ├ EntryPoint: string (required)
│          │    ├ EntryPointArguments: Array<string>
│          │    └ SparkSubmitParameters: string
│          └ type TemplateParameterConfiguration
│            ├      documentation: The configuration of a job template parameter.
│            │      name: TemplateParameterConfiguration
│            └ properties
│               ├ Type: string<NUMBER|STRING>
│               └ DefaultValue: string
├[+] service aws-eventsv2
│ ├      capitalized: EventsV2
│ │      cloudFormationNamespace: AWS::EventsV2
│ │      name: aws-eventsv2
│ │      shortName: eventsv2
│ └ resources
│    ├ resource AWS::EventsV2::EventBus
│    │ ├      name: EventBus
│    │ │      cloudFormationType: AWS::EventsV2::EventBus
│    │ │      documentation: Resource type definition for AWS::EventsV2::EventBus, an Amazon EventBridge custom event bus that receives events and delivers them to matching subscribers.
│    │ │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │ │      primaryIdentifier: ["EventBusArn"]
│    │ ├ properties
│    │ │  ├ Name: string (required, immutable)
│    │ │  ├ Description: string
│    │ │  ├ StorageConfiguration: StorageConfiguration
│    │ │  ├ EncryptionConfiguration: EncryptionConfiguration
│    │ │  └ Tags: Array<tag>
│    │ ├ attributes
│    │ │  ├ EventBusArn: string
│    │ │  ├ State: string<CREATING|ACTIVE|UPDATING|CREATE_FAILED|UPDATE_FAILED|DELETE_FAILED|DELETING>
│    │ │  ├ CreationTime: string
│    │ │  └ LastModifiedTime: string
│    │ └ types
│    │    ├ type EncryptionConfiguration
│    │    │ ├      documentation: Encryption configuration for an event bus.
│    │    │ │      name: EncryptionConfiguration
│    │    │ └ properties
│    │    │    └ KmsKeyIdentifier: string
│    │    └ type StorageConfiguration
│    │      ├      documentation: Storage (retention) configuration for the event bus.
│    │      │      name: StorageConfiguration
│    │      └ properties
│    │         └ RetentionPeriodInDays: integer
│    ├ resource AWS::EventsV2::EventSource
│    │ ├      name: EventSource
│    │ │      cloudFormationType: AWS::EventsV2::EventSource
│    │ │      documentation: Resource schema for AWS::EventsV2::EventSource. A managed event source that forwards AWS service events or partner events onto a custom event bus.
│    │ │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │ │      primaryIdentifier: ["EventSourceArn"]
│    │ ├ properties
│    │ │  ├ Name: string (required, immutable)
│    │ │  ├ EventBusArn: string (required, immutable)
│    │ │  ├ Configuration: EventSourceConfiguration (required)
│    │ │  ├ Description: string
│    │ │  └ Tags: Array<tag>
│    │ ├ attributes
│    │ │  ├ EventSourceArn: string
│    │ │  ├ State: string<CREATING|ACTIVE|UPDATING|CREATE_FAILED|UPDATE_FAILED|DELETING|DELETE_FAILED>
│    │ │  ├ Revoked: boolean
│    │ │  ├ CreationTime: string
│    │ │  └ LastModifiedTime: string
│    │ └ types
│    │    ├ type AwsServiceEventsConfiguration
│    │    │ ├      documentation: Forward a single AWS service's events from the account's default event bus.
│    │    │ │      name: AwsServiceEventsConfiguration
│    │    │ └ properties
│    │    │    ├ AwsService: string (required)
│    │    │    ├ Pattern: string
│    │    │    └ OnFailureConfiguration: OnFailureConfiguration
│    │    ├ type EventSourceConfiguration
│    │    │ ├      documentation: Event source configuration. Exactly one of the two variants must be set.
│    │    │ │      name: EventSourceConfiguration
│    │    │ └ properties
│    │    │    ├ AwsServiceEventsConfiguration: AwsServiceEventsConfiguration
│    │    │    └ PartnerEventsConfiguration: PartnerEventsConfiguration
│    │    ├ type OnFailureConfiguration
│    │    │ ├      documentation: The destination for events that could not be forwarded by the managed forwarding target or, for partner event sources, the managed partner event bus. Arn is optional. An empty object removes a configured destination on update.
│    │    │ │      name: OnFailureConfiguration
│    │    │ └ properties
│    │    │    └ Arn: string
│    │    └ type PartnerEventsConfiguration
│    │      ├      documentation: Forward a partner event source's events through a managed partner event bus.
│    │      │      name: PartnerEventsConfiguration
│    │      └ properties
│    │         ├ PartnerEventSourceArn: string (required, immutable)
│    │         ├ Pattern: string
│    │         ├ PartnerBusKmsKeyIdentifier: string
│    │         └ OnFailureConfiguration: OnFailureConfiguration
│    ├ resource AWS::EventsV2::ResourcePolicy
│    │ ├      name: ResourcePolicy
│    │ │      cloudFormationType: AWS::EventsV2::ResourcePolicy
│    │ │      documentation: Resource type definition for AWS::EventsV2::ResourcePolicy, the resource policy of an Amazon EventBridge event bus. This manages only the resource policy named "default", which the bus owner writes. It does not manage the policy named "AWS_RAM", which AWS Resource Access Manager owns on behalf of the bus owner. If the bus already has a default policy, creating this resource fails. Deleting this resource removes all permissions granted by it. An explicit Deny in this policy takes precedence over an Allow in the "AWS_RAM" policy, so deleting this resource can widen access. Set DeletionPolicy: Retain if the policy carries a Deny that you rely on. Required permissions: events:PutResourcePolicy, events:GetResourcePolicy, and events:DeleteResourcePolicy. Listing resources of this type also requires events:ListEventBuses and events:ListResourcePolicies.
│    │ │      scrutinizable: ResourcePolicyResource
│    │ │      primaryIdentifier: ["EventBusArn"]
│    │ ├ properties
│    │ │  ├ EventBusArn: string (required, immutable)
│    │ │  └ PolicyDocument: json (required)
│    │ └ attributes
│    │    └ RevisionId: string
│    └ resource AWS::EventsV2::Subscriber
│      ├      name: Subscriber
│      │      cloudFormationType: AWS::EventsV2::Subscriber
│      │      documentation: Resource type definition for AWS::EventsV2::Subscriber, an Amazon EventBridge subscription that delivers events from an event bus to a target. Canonical identity is the combination of bus, name, and target. Replacement uses delete_then_create.
│      │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│      │      primaryIdentifier: ["SubscriberArn"]
│      ├ properties
│      │  ├ Name: string (required, immutable)
│      │  ├ EventBusArn: string (required, immutable)
│      │  ├ FilterConfiguration: FilterConfiguration
│      │  ├ Type: string<FIFO|UNORDERED> (immutable)
│      │  ├ StartingPosition: string<LATEST|POINT_IN_TIME> (immutable)
│      │  ├ PointInTimeConfiguration: PointInTimeConfiguration (immutable)
│      │  ├ BatchConfiguration: BatchConfiguration
│      │  ├ Transformer: Transformer
│      │  ├ RetryPolicy: RetryPolicy
│      │  ├ OnFailureConfiguration: OnFailureConfiguration
│      │  ├ LogConfiguration: LogConfiguration
│      │  ├ Description: string
│      │  ├ State: string<RUNNING|STOPPED>
│      │  ├ ResumePosition: string<LAST_PROCESSED|LATEST>
│      │  └ Tags: Array<tag>
│      ├ attributes
│      │  ├ SubscriberArn: string
│      │  ├ BusName: string
│      │  ├ CreationTime: string
│      │  └ LastModifiedTime: string
│      └ types
│         ├ type BatchConfiguration
│         │ ├      documentation: Configuration for batching events into a single delivery.
│         │ │      name: BatchConfiguration
│         │ └ properties
│         │    ├ MaxBatchSize: integer
│         │    └ MaxBatchWindowInSeconds: integer
│         ├ type Filter
│         │ ├      documentation: A single filter entry: an event pattern and the scope of the event it is evaluated against.
│         │ │      name: Filter
│         │ └ properties
│         │    ├ Pattern: string (required)
│         │    └ Scope: string<DATA|METADATA|SYSTEM_METADATA> (required)
│         ├ type FilterConfiguration
│         │ ├      documentation: Configuration for filtering which events are delivered to the target. An event must match every filter to be delivered.
│         │ │      name: FilterConfiguration
│         │ └ properties
│         │    ├ Filters: Array<Filter> (required)
│         │    └ Language: string<EVENT_BRIDGE_PATTERN>
│         ├ type JsonataConfiguration
│         │ ├      documentation: JSONata transform settings.
│         │ │      name: JsonataConfiguration
│         │ └ properties
│         │    └ Expression: string (required)
│         ├ type LogConfiguration
│         │ ├      documentation: Delivery logging configuration.
│         │ │      name: LogConfiguration
│         │ └ properties
│         │    ├ Level: string<OFF|ERROR|INFO>
│         │    └ IncludePayload: string<FULL|ON_ERROR_ONLY>
│         ├ type OnFailureConfiguration
│         │ ├      documentation: The destination for events that could not be delivered.
│         │ │      name: OnFailureConfiguration
│         │ └ properties
│         │    └ Arn: string
│         ├ type PointInTimeConfiguration
│         │ ├      documentation: The point in time to start delivering events from, used when StartingPosition is POINT_IN_TIME.
│         │ │      name: PointInTimeConfiguration
│         │ └ properties
│         │    ├ PointType: string<HORIZON|TIMESTAMP> (required)
│         │    ├ StartingPoint: integer
│         │    └ EndPoint: integer
│         ├ type RetryPolicy
│         │ ├      documentation: The retry policy for failed deliveries.
│         │ │      name: RetryPolicy
│         │ └ properties
│         │    ├ MaxRetryAttempts: integer
│         │    ├ MaxEventAgeInSeconds: integer
│         │    └ RetryStrategy: string<ALL>
│         └ type Transformer
│           ├      documentation: Configuration for transforming events before delivery: the raw payload, the payload with its metadata envelope, or the output of a JSONata expression.
│           │      name: Transformer
│           └ properties
│              ├ Type: string<RAW|WITH_METADATA|JSONATA>
│              └ JsonataConfiguration: JsonataConfiguration
├[~] service aws-fms
│ └ resources
│    ├[+]  resource AWS::FMS::ApplicationsList
│    │  ├      name: ApplicationsList
│    │  │      cloudFormationType: AWS::FMS::ApplicationsList
│    │  │      documentation: Creates an AWS Firewall Manager applications list.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:fms:${Region}:${Account}:applications-list/${Id}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ ListName: string (required)
│    │  │  ├ AppsList: Array<App> (required)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  ├ ListId: string
│    │  │  ├ CreateTime: string
│    │  │  └ LastUpdateTime: string
│    │  └ types
│    │     └ type App
│    │       ├      documentation: An individual Firewall Manager application.
│    │       │      name: App
│    │       └ properties
│    │          ├ AppName: string (required)
│    │          ├ Protocol: string (required)
│    │          └ Port: integer (required)
│    └[+]  resource AWS::FMS::ProtocolsList
│       ├      name: ProtocolsList
│       │      cloudFormationType: AWS::FMS::ProtocolsList
│       │      documentation: Creates an AWS Firewall Manager protocols list.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:fms:${Region}:${Account}:protocols-list/${Id}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ ListName: string (required)
│       │  ├ ProtocolsList: Array<string> (required)
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ Arn: string
│          ├ ListId: string
│          ├ CreateTime: string
│          └ LastUpdateTime: string
├[~] service aws-fsx
│ └ resources
│    ├[+]  resource AWS::FSx::Backup
│    │  ├      name: Backup
│    │  │      cloudFormationType: AWS::FSx::Backup
│    │  │      documentation: Creates a backup of an existing Amazon FSx for Windows File Server file system, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:fsx:${Region}:${Account}:backup/${BackupId}
│    │  │      primaryIdentifier: ["ResourceARN"]
│    │  ├ properties
│    │  │  ├ FileSystemId: string (required, immutable)
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ BackupId: string
│    │     ├ ResourceARN: string
│    │     ├ Lifecycle: string<AVAILABLE|CREATING|TRANSFERRING|DELETED|FAILED|PENDING|COPYING>
│    │     ├ Type: string<AUTOMATIC|USER_INITIATED|AWS_BACKUP>
│    │     └ CreationTime: string
│    └[+]  resource AWS::FSx::FileCache
│       ├      name: FileCache
│       │      cloudFormationType: AWS::FSx::FileCache
│       │      documentation: Resource Type definition for AWS::FSx::FileCache
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:fsx:${Region}:${Account}:file-cache/${FileCacheId}
│       │      primaryIdentifier: ["ResourceARN"]
│       ├ properties
│       │  ├ FileCacheType: string<LUSTRE> (required, immutable)
│       │  ├ FileCacheTypeVersion: string (required, immutable)
│       │  ├ StorageCapacity: integer (required, immutable)
│       │  ├ SubnetIds: Array<string> (required, immutable)
│       │  ├ SecurityGroupIds: Array<string> (immutable)
│       │  ├ Tags: Array<tag>
│       │  ├ CopyTagsToDataRepositoryAssociations: boolean (immutable)
│       │  ├ KmsKeyId: string (immutable)
│       │  ├ LustreConfiguration: LustreConfiguration
│       │  └ DataRepositoryAssociations: Array<DataRepositoryAssociation> (immutable)
│       ├ attributes
│       │  ├ ResourceARN: string
│       │  ├ FileCacheId: string
│       │  ├ DNSName: string
│       │  ├ VpcId: string
│       │  ├ NetworkInterfaceIds: Array<string>
│       │  ├ DataRepositoryAssociationIds: Array<string>
│       │  ├ OwnerId: string
│       │  ├ CreationTime: string
│       │  ├ Lifecycle: string<AVAILABLE|CREATING|DELETING|UPDATING|FAILED>
│       │  ├ LustreConfiguration.MountName: string
│       │  └ LustreConfiguration.LogConfiguration: LogConfiguration
│       └ types
│          ├ type DataRepositoryAssociation
│          │ ├      name: DataRepositoryAssociation
│          │ └ properties
│          │    ├ FileCachePath: string (required)
│          │    └ DataRepositoryPath: string (required)
│          ├ type LogConfiguration
│          │ ├      name: LogConfiguration
│          │ └ properties
│          │    ├ Level: string<DISABLED|WARN_ONLY|ERROR_ONLY|WARN_ERROR> (required)
│          │    └ Destination: string
│          ├ type LustreConfiguration
│          │ ├      name: LustreConfiguration
│          │ └ properties
│          │    ├ PerUnitStorageThroughput: integer (required, immutable)
│          │    ├ DeploymentType: string<CACHE_1> (required, immutable)
│          │    ├ WeeklyMaintenanceStartTime: string
│          │    ├ MetadataConfiguration: MetadataConfiguration (required, immutable)
│          │    ├ MountName: string
│          │    └ LogConfiguration: LogConfiguration
│          └ type MetadataConfiguration
│            ├      name: MetadataConfiguration
│            └ properties
│               └ StorageCapacity: integer (required)
├[~] service aws-globalaccelerator
│ └ resources
│    └[~]  resource AWS::GlobalAccelerator::Accelerator
│       └      - arnTemplate: arn:${Partition}:globalaccelerator::${Account}:accelerator/${ResourceId}
│              + arnTemplate: arn:${Partition}:globalaccelerator::${Account}:accelerator/${AcceleratorId}
├[~] service aws-glue
│ └ resources
│    ├[+]  resource AWS::Glue::ConnectionType
│    │  ├      name: ConnectionType
│    │  │      cloudFormationType: AWS::Glue::ConnectionType
│    │  │      documentation: Registers a custom connection type in Glue based on the configuration provided. This enables customers to configure custom connectors for any data source with REST-based APIs.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:glue:${Region}:${Account}:connectionType:${ConnectionTypeName}
│    │  │      primaryIdentifier: ["ConnectionTypeArn"]
│    │  ├ properties
│    │  │  ├ ConnectionType: string (required, immutable)
│    │  │  ├ IntegrationType: string<REST> (immutable)
│    │  │  ├ Description: string (immutable)
│    │  │  ├ ConnectionProperties: ConnectionPropertiesConfiguration (immutable)
│    │  │  ├ ConnectorAuthenticationConfiguration: ConnectorAuthenticationConfiguration (immutable)
│    │  │  ├ RestConfiguration: RestConfiguration (required, immutable)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  └ ConnectionTypeArn: string
│    │  └ types
│    │     ├ type BasicAuthenticationProperties
│    │     │ ├      documentation: Basic authentication configuration.
│    │     │ │      name: BasicAuthenticationProperties
│    │     │ └ properties
│    │     │    ├ Username: SecretConnectorProperty
│    │     │    └ Password: SecretConnectorProperty
│    │     ├ type BetweenConfiguration
│    │     │ ├      documentation: Configuration that defines how BETWEEN range filter operations are translated into REST API request parameters.
│    │     │ │      name: BetweenConfiguration
│    │     │ └ properties
│    │     │    ├ LowBoundKey: string
│    │     │    ├ HighBoundKey: string
│    │     │    └ Template: string
│    │     ├ type ClientCredentialsProperties
│    │     │ ├      documentation: OAuth2 client credentials configuration.
│    │     │ │      name: ClientCredentialsProperties
│    │     │ └ properties
│    │     │    ├ TokenUrl: ConnectorProperty
│    │     │    ├ RequestMethod: string<GET|POST>
│    │     │    ├ ContentType: string<APPLICATION_JSON|URL_ENCODED>
│    │     │    ├ ClientId: SecretConnectorProperty
│    │     │    ├ ClientSecret: SecretConnectorProperty
│    │     │    ├ Scope: ConnectorProperty
│    │     │    └ TokenUrlParameters: Array<ConnectorProperty>
│    │     ├ type ConnectionPropertiesConfiguration
│    │     │ ├      documentation: Configuration that defines the base URL and additional request parameters needed during connection creation.
│    │     │ │      name: ConnectionPropertiesConfiguration
│    │     │ └ properties
│    │     │    ├ Url: ConnectorProperty
│    │     │    └ AdditionalRequestParameters: Array<ConnectorProperty>
│    │     ├ type ConnectorAuthenticationConfiguration
│    │     │ ├      documentation: Configuration that defines supported authentication types and required properties.
│    │     │ │      name: ConnectorAuthenticationConfiguration
│    │     │ └ properties
│    │     │    ├ AuthenticationTypes: Array<string<BASIC|OAUTH2|CUSTOM|IAM>> (required)
│    │     │    ├ OAuth2Properties: ConnectorOAuth2Properties
│    │     │    ├ BasicAuthenticationProperties: BasicAuthenticationProperties
│    │     │    └ CustomAuthenticationProperties: CustomAuthenticationProperties
│    │     ├ type ConnectorAuthorizationCodeProperties
│    │     │ ├      documentation: OAuth2 authorization code configuration.
│    │     │ │      name: ConnectorAuthorizationCodeProperties
│    │     │ └ properties
│    │     │    ├ AuthorizationCodeUrl: ConnectorProperty
│    │     │    ├ AuthorizationCode: ConnectorProperty
│    │     │    ├ RedirectUri: ConnectorProperty
│    │     │    ├ TokenUrl: ConnectorProperty
│    │     │    ├ RequestMethod: string<GET|POST>
│    │     │    ├ ContentType: string<APPLICATION_JSON|URL_ENCODED>
│    │     │    ├ ClientId: SecretConnectorProperty
│    │     │    ├ ClientSecret: SecretConnectorProperty
│    │     │    ├ Scope: ConnectorProperty
│    │     │    ├ Prompt: ConnectorProperty
│    │     │    └ TokenUrlParameters: Array<ConnectorProperty>
│    │     ├ type ConnectorOAuth2Properties
│    │     │ ├      documentation: OAuth2 configuration container.
│    │     │ │      name: ConnectorOAuth2Properties
│    │     │ └ properties
│    │     │    ├ OAuth2GrantType: string<CLIENT_CREDENTIALS|JWT_BEARER|AUTHORIZATION_CODE> (required)
│    │     │    ├ ClientCredentialsProperties: ClientCredentialsProperties
│    │     │    ├ JWTBearerProperties: JWTBearerProperties
│    │     │    └ AuthorizationCodeProperties: ConnectorAuthorizationCodeProperties
│    │     ├ type ConnectorProperty
│    │     │ ├      documentation: Defines a property configuration for connection types.
│    │     │ │      name: ConnectorProperty
│    │     │ └ properties
│    │     │    ├ Name: string (required)
│    │     │    ├ KeyOverride: string
│    │     │    ├ Required: boolean (required)
│    │     │    ├ DefaultValue: string
│    │     │    ├ AllowedValues: Array<string>
│    │     │    ├ PropertyLocation: string<HEADER|BODY|QUERY_PARAM|PATH>
│    │     │    └ PropertyType: string<USER_INPUT|SECRET|READ_ONLY|UNUSED|SECRET_OR_USER_INPUT> (required)
│    │     ├ type CursorConfiguration
│    │     │ ├      documentation: Cursor-based pagination configuration.
│    │     │ │      name: CursorConfiguration
│    │     │ └ properties
│    │     │    ├ NextPage: ExtractedParameter (required)
│    │     │    └ LimitParameter: ExtractedParameter
│    │     ├ type CustomAuthenticationProperties
│    │     │ ├      documentation: Custom authentication configuration.
│    │     │ │      name: CustomAuthenticationProperties
│    │     │ └ properties
│    │     │    └ AuthenticationParameters: Array<SecretConnectorProperty> (required)
│    │     ├ type EntityConfiguration
│    │     │ ├      documentation: Configuration for interacting with a specific data entity.
│    │     │ │      name: EntityConfiguration
│    │     │ └ properties
│    │     │    ├ SourceConfiguration: SourceConfiguration
│    │     │    └ Schema: Map<string, FieldDefinition>
│    │     ├ type ExtractedParameter
│    │     │ ├      documentation: Parameter extraction configuration.
│    │     │ │      name: ExtractedParameter
│    │     │ └ properties
│    │     │    ├ Key: string
│    │     │    ├ DefaultValue: string
│    │     │    ├ PropertyLocation: string<HEADER|BODY|QUERY_PARAM|PATH>
│    │     │    └ Value: ResponseExtractionMapping
│    │     ├ type FieldDefinition
│    │     │ ├      documentation: Defines a field in an entity schema.
│    │     │ │      name: FieldDefinition
│    │     │ └ properties
│    │     │    ├ Name: string (required)
│    │     │    ├ FieldDataType: string<INT|SMALLINT|BIGINT|FLOAT|LONG|DATE|BOOLEAN|MAP|ARRAY|STRING|TIMESTAMP|DECIMAL|BYTE|SHORT|DOUBLE|STRUCT|BINARY|UNION> (required)
│    │     │    ├ ResponseDateFormat: string
│    │     │    ├ IsPartitionable: boolean
│    │     │    ├ IsNullable: boolean
│    │     │    ├ IsQueryable: boolean
│    │     │    ├ IsOrderable: boolean
│    │     │    └ FilterOverrides: FilterOverrides
│    │     ├ type FilterConfiguration
│    │     │ ├      documentation: Configuration that defines how filter predicates are applied to REST API requests, supporting both query parameter and filter string strategies.
│    │     │ │      name: FilterConfiguration
│    │     │ └ properties
│    │     │    ├ FilterMode: string<QUERY_PARAMS|FILTER_STRING> (required)
│    │     │    ├ OperatorMappings: Map<string, string>
│    │     │    ├ DateTimeFormat: string
│    │     │    ├ StripQuotes: boolean
│    │     │    ├ BetweenConfiguration: BetweenConfiguration
│    │     │    └ FilterStringConfiguration: FilterStringConfiguration
│    │     ├ type FilterOverrides
│    │     │ ├      documentation: Configuration that defines per-field overrides for filter behavior, allowing individual fields to customize how filter operations are applied.
│    │     │ │      name: FilterOverrides
│    │     │ └ properties
│    │     │    ├ FieldName: string
│    │     │    ├ OperatorMappings: Map<string, string>
│    │     │    ├ BetweenConfiguration: BetweenConfiguration
│    │     │    └ DateTimeFormat: string
│    │     ├ type FilterStringConfiguration
│    │     │ ├      documentation: Configuration for constructing filter expression strings when using the FILTER_STRING filter mode.
│    │     │ │      name: FilterStringConfiguration
│    │     │ └ properties
│    │     │    ├ QueryParameterName: string (required)
│    │     │    ├ QuoteStringValues: boolean
│    │     │    └ QuoteCharacter: string
│    │     ├ type JWTBearerProperties
│    │     │ ├      documentation: JWT bearer token configuration.
│    │     │ │      name: JWTBearerProperties
│    │     │ └ properties
│    │     │    ├ TokenUrl: ConnectorProperty
│    │     │    ├ RequestMethod: string<GET|POST>
│    │     │    ├ ContentType: string<APPLICATION_JSON|URL_ENCODED>
│    │     │    ├ JwtToken: SecretConnectorProperty
│    │     │    └ TokenUrlParameters: Array<ConnectorProperty>
│    │     ├ type OffsetConfiguration
│    │     │ ├      documentation: Offset-based pagination configuration.
│    │     │ │      name: OffsetConfiguration
│    │     │ └ properties
│    │     │    ├ OffsetParameter: ExtractedParameter (required)
│    │     │    └ LimitParameter: ExtractedParameter (required)
│    │     ├ type PaginationConfiguration
│    │     │ ├      documentation: Configuration for handling paginated responses.
│    │     │ │      name: PaginationConfiguration
│    │     │ └ properties
│    │     │    ├ CursorConfiguration: CursorConfiguration
│    │     │    └ OffsetConfiguration: OffsetConfiguration
│    │     ├ type ResponseConfiguration
│    │     │ ├      documentation: Configuration for parsing JSON responses from REST API calls.
│    │     │ │      name: ResponseConfiguration
│    │     │ └ properties
│    │     │    ├ ResultPath: string (required)
│    │     │    └ ErrorPath: string
│    │     ├ type ResponseExtractionMapping
│    │     │ ├      documentation: Defines how to extract values from HTTP responses.
│    │     │ │      name: ResponseExtractionMapping
│    │     │ └ properties
│    │     │    ├ ContentPath: string
│    │     │    └ HeaderKey: string
│    │     ├ type RestConfiguration
│    │     │ ├      documentation: Configuration for HTTP request and response handling.
│    │     │ │      name: RestConfiguration
│    │     │ └ properties
│    │     │    ├ GlobalSourceConfiguration: SourceConfiguration
│    │     │    ├ ValidationEndpointConfiguration: ValidationEndpointConfiguration
│    │     │    └ EntityConfigurations: Map<string, EntityConfiguration>
│    │     ├ type SecretConnectorProperty
│    │     │ ├      documentation: Defines a secret property configuration. SECRET-type properties cannot have DefaultValue or AllowedValues.
│    │     │ │      name: SecretConnectorProperty
│    │     │ └ properties
│    │     │    ├ Name: string (required)
│    │     │    ├ KeyOverride: string
│    │     │    ├ Required: boolean (required)
│    │     │    ├ PropertyLocation: string<HEADER|BODY|QUERY_PARAM|PATH>
│    │     │    └ PropertyType: string<SECRET> (required)
│    │     ├ type SourceConfiguration
│    │     │ ├      documentation: Configuration that defines how to make requests to endpoints.
│    │     │ │      name: SourceConfiguration
│    │     │ └ properties
│    │     │    ├ RequestMethod: string<GET|POST>
│    │     │    ├ RequestPath: string
│    │     │    ├ RequestParameters: Array<ConnectorProperty>
│    │     │    ├ ResponseConfiguration: ResponseConfiguration
│    │     │    ├ PaginationConfiguration: PaginationConfiguration
│    │     │    └ FilterConfiguration: FilterConfiguration
│    │     └ type ValidationEndpointConfiguration
│    │       ├      documentation: Configuration for the validation endpoint. Only supports RequestMethod and RequestPath.
│    │       │      name: ValidationEndpointConfiguration
│    │       └ properties
│    │          ├ RequestMethod: string<GET|POST>
│    │          └ RequestPath: string
│    └[~]  resource AWS::Glue::Partition
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["CatalogId","DatabaseName","TableName","IdentifierPartitionInputValues"]
│       └ attributes
│          ├[-] Id: string
│          └[+] IdentifierPartitionInputValues: string
├[+] service aws-healthagent
│ ├      capitalized: HealthAgent
│ │      cloudFormationNamespace: AWS::HealthAgent
│ │      name: aws-healthagent
│ │      shortName: healthagent
│ └ resources
│    └ resource AWS::HealthAgent::Domain
│      ├      name: Domain
│      │      cloudFormationType: AWS::HealthAgent::Domain
│      │      documentation: Resource Type definition for AWS::HealthAgent::Domain. Creates and manages a HealthAgent Domain resource.
│      │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│      │      arnTemplate: arn:${Partition}:health-agent:${Region}:${Account}:domain/${DomainId}
│      │      primaryIdentifier: ["Arn"]
│      ├ properties
│      │  ├ Name: string (required, immutable)
│      │  └ Tags: Array<TagsItems>
│      ├ attributes
│      │  ├ Arn: string
│      │  ├ DomainId: string
│      │  ├ Status: string<ACTIVE|DELETING|DELETED>
│      │  ├ EncryptionContext: EncryptionContext
│      │  └ CreatedAt: string
│      └ types
│         ├ type EncryptionContext
│         │ ├      documentation: Encryption context for the Domain.
│         │ │      name: EncryptionContext
│         │ └ properties
│         │    └ EncryptionType: string<AWS_OWNED_KEY|CUSTOMER_MANAGED_KEY> (required)
│         └ type TagsItems
│           ├      name: TagsItems
│           └ properties
│              ├ Key: string (required)
│              └ Value: string (required)
├[~] service aws-iot
│ └ resources
│    └[~]  resource AWS::IoT::ThingPrincipalAttachment
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["ThingName","Principal"]
│       ├ properties
│       │  └ ThingPrincipalType: - string
│       │                        + string (immutable)
│       │                        (documentation changed)
│       └ attributes
│          └[-] Id: string
├[~] service aws-iotfleetwise
│ └ resources
│    └[~]  resource AWS::IoTFleetWise::ModelManifest
│       └ properties
│          └ SignalCatalogArn: - string (required)
│                              + string (required, immutable)
├[~] service aws-iotsitewise
│ └ resources
│    ├[+]  resource AWS::IoTSiteWise::Application
│    │  ├      name: Application
│    │  │      cloudFormationType: AWS::IoTSiteWise::Application
│    │  │      documentation: Represents an AWS IoT SiteWise application that provides IAM Identity Center based access to a workspace.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ WorkspaceName: string (required, immutable)
│    │  │  ├ Name: string (required, immutable)
│    │  │  ├ Description: string (immutable)
│    │  │  ├ IdcInstanceArn: string (immutable)
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ Arn: string
│    │     ├ ApplicationId: string
│    │     ├ IdcApplicationArn: string
│    │     ├ DnsSubdomain: string
│    │     ├ Status: string<CREATING|ACTIVE|DELETING>
│    │     ├ CreatedAt: string
│    │     └ UpdatedAt: string
│    ├[~]  resource AWS::IoTSiteWise::Dataset
│    │  ├ properties
│    │  │  ├[+] DatasetConfig: DatasetConfig
│    │  │  ├ DatasetSource: - DatasetSource (required)
│    │  │  │                + DatasetSource
│    │  │  ├[+] DatasetType: string<SESSION|CURATED|EXTERNAL> (immutable)
│    │  │  └[+] WorkspaceName: string (immutable)
│    │  └ types
│    │     ├[+]  type DatasetConfig
│    │     │  ├      name: DatasetConfig
│    │     │  └ properties
│    │     │     └ Session: SessionConfig
│    │     ├[~] type DatasetSource
│    │     │ └ properties
│    │     │    ├ SourceFormat: - string<KNOWLEDGE_BASE> (required)
│    │     │    │               + string<KNOWLEDGE_BASE|TIMESERIES> (required)
│    │     │    └ SourceType: - string<KENDRA> (required)
│    │     │                  + string<KENDRA|SITEWISE> (required)
│    │     └[+]  type SessionConfig
│    │        ├      name: SessionConfig
│    │        └ properties
│    │           ├ SessionStartTime: string (required)
│    │           └ SessionEndTime: string (required)
│    └[~]  resource AWS::IoTSiteWise::Task
│       └ types
│          ├[~] type ContainerTaskConfiguration
│          │ └ properties
│          │    ├[+] EphemeralStorageConfiguration: EphemeralStorageConfiguration
│          │    └[+] Mounts: Array<Mount>
│          ├[+]  type EphemeralStorageConfiguration
│          │  ├      documentation: Configuration for ephemeral storage attached to the container task.
│          │  │      name: EphemeralStorageConfiguration
│          │  └ properties
│          │     ├ StorageClass: string<STANDARD_1|STANDARD_2|THROUGHPUT_1|THROUGHPUT_2> (required)
│          │     └ StorageSizeInGiB: integer (required)
│          ├[+]  type Mount
│          │  ├      documentation: Attaches a data source to the container filesystem for a task at a customer-supplied relative path under the service-owned mount root.
│          │  │      name: Mount
│          │  └ properties
│          │     ├ Name: string (required)
│          │     ├ RelativePath: string (required)
│          │     ├ Source: MountSource (required)
│          │     └ StorageType: string<SHARED_STORAGE> (required)
│          ├[+]  type MountSource
│          │  ├      documentation: The data source configuration for a mount.
│          │  │      name: MountSource
│          │  └ properties
│          │     └ S3AccessPoint: S3AccessPointSource (required)
│          └[+]  type S3AccessPointSource
│             ├      documentation: Configures a mount that reads from an Amazon S3 access point.
│             │      name: S3AccessPointSource
│             └ properties
│                ├ AccessPointArn: string (required)
│                └ Prefix: string
├[~] service aws-iotwireless
│ └ resources
│    └[~]  resource AWS::IoTWireless::WirelessDeviceImportTask
│       └      - arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:ImportTask/${ImportTaskId}
│              + arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:WirelessDeviceImportTask/${WirelessDeviceImportTaskId}
├[~] service aws-kendra
│ └ resources
│    └[+]  resource AWS::Kendra::FeaturedResultsSet
│       ├      name: FeaturedResultsSet
│       │      cloudFormationType: AWS::Kendra::FeaturedResultsSet
│       │      documentation: Resource Type definition for AWS::Kendra::FeaturedResultsSet. A set of featured results that are displayed at the top of your search results. Featured results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ IndexId: string (required, immutable)
│       │  ├ FeaturedResultsSetName: string (required)
│       │  ├ Description: string
│       │  ├ Status: string<ACTIVE|INACTIVE>
│       │  ├ QueryTexts: Array<string>
│       │  ├ FeaturedDocuments: Array<FeaturedDocument>
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ Arn: string
│       │  └ FeaturedResultsSetId: string
│       └ types
│          └ type FeaturedDocument
│            ├      documentation: A featured document. This document is displayed at the top of the search results page.
│            │      name: FeaturedDocument
│            └ properties
│               └ Id: string
├[~] service aws-kinesis
│ └ resources
│    └[+]  resource AWS::Kinesis::Channel
│       ├      name: Channel
│       │      cloudFormationType: AWS::Kinesis::Channel
│       │      documentation: Resource Type definition for AWS::Kinesis::Channel
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:kinesis:${Region}:${Account}:channel/${ChannelId}
│       │      primaryIdentifier: ["ChannelARN"]
│       ├ properties
│       │  ├ ChannelName: string (required, immutable)
│       │  ├ EncryptionConfiguration: EncryptionConfiguration (immutable)
│       │  ├ S3DestinationConfiguration: S3DestinationConfiguration
│       │  ├ LoggingConfiguration: LoggingConfiguration
│       │  ├ StreamConfigurationList: Array<StreamConfiguration> (required, immutable)
│       │  ├ ServiceExecutionRoleARN: string (required, immutable)
│       │  ├ S3TablesDestinationConfiguration: S3TablesDestinationConfiguration
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ ChannelARN: string
│       │  ├ ChannelId: string
│       │  ├ ChannelStatus: string<CREATING|ACTIVE|UPDATING|DELETING|FAILED>
│       │  └ ChannelCreationTimestamp: string
│       └ types
│          ├ type CloudWatchLogsConfiguration
│          │ ├      documentation: CloudWatch Logs configuration for the channel. When Enabled is true and LogGroupName is omitted, the service uses a default group derived from the channel name and id; LogStreamName defaults to the literal string 'DestinationDelivery'.
│          │ │      name: CloudWatchLogsConfiguration
│          │ └ properties
│          │    ├ LogStreamName: string (default="DestinationDelivery")
│          │    ├ Enabled: boolean (required)
│          │    └ LogGroupName: string
│          ├ type DeadLetterQueueS3Configuration
│          │ ├      documentation: Configuration of the S3 bucket used to capture records that cannot be delivered to the primary destination.
│          │ │      name: DeadLetterQueueS3Configuration
│          │ └ properties
│          │    ├ ErrorOutputPrefix: string
│          │    ├ BucketARN: string (required)
│          │    └ ExpectedBucketOwner: string (required)
│          ├ type EncryptionConfiguration
│          │ ├      documentation: Server-side encryption configuration for data at rest in the destination. Data delivered to S3 / S3 Tables is encrypted with the same key.
│          │ │      name: EncryptionConfiguration
│          │ └ properties
│          │    ├ EncryptionType: string<KMS> (required)
│          │    └ KeyId: string (required)
│          ├ type LoggingConfiguration
│          │ ├      documentation: Configuration for delivering channel operational logs.
│          │ │      name: LoggingConfiguration
│          │ └ properties
│          │    └ CloudWatchLogs: CloudWatchLogsConfiguration (required)
│          ├ type PartitionField
│          │ ├      documentation: A single partition field consisting of a transform applied to a source column.
│          │ │      name: PartitionField
│          │ └ properties
│          │    ├ SourceName: string (required)
│          │    └ Transform: string<TIME_HOUR> (required)
│          ├ type PartitionSpec
│          │ ├      documentation: Partitioning specification for the destination Iceberg table. Follows the S3 Tables / Iceberg PartitionSpec format.
│          │ │      name: PartitionSpec
│          │ └ properties
│          │    └ PartitionFields: Array<PartitionField> (required)
│          ├ type RecordConfiguration
│          │ ├      documentation: The configuration that describes how records on the source stream are encoded.
│          │ │      name: RecordConfiguration
│          │ └ properties
│          │    ├ GSRSchemaARN: string
│          │    └ RecordFormatType: string<GSR_JSON|JSON|STRING|BYTE_ARRAY> (required)
│          ├ type S3DestinationConfiguration
│          │ ├      documentation: Configuration for delivery to a vanilla S3 bucket destination. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified on the channel.
│          │ │      name: S3DestinationConfiguration
│          │ └ properties
│          │    ├ DeadLetterQueueS3Configuration: DeadLetterQueueS3Configuration (immutable)
│          │    ├ DataFreshnessInSeconds: integer (default=300)
│          │    └ StorageConfiguration: S3StorageConfiguration (required, immutable)
│          ├ type S3StorageConfiguration
│          │ ├      documentation: S3 storage configuration that describes the destination bucket and how delivered objects are stored.
│          │ │      name: S3StorageConfiguration
│          │ └ properties
│          │    ├ BucketARN: string (required)
│          │    ├ StorageClass: string<STANDARD|INTELLIGENT_TIERING|GLACIER_IR> (default="STANDARD")
│          │    ├ OutputKeyTemplate: string
│          │    ├ CompressionType: string<NONE|GZIP|ZSTD> (required)
│          │    └ ExpectedBucketOwner: string (required)
│          ├ type S3TableConfiguration
│          │ ├      documentation: An S3 Tables destination including its table bucket, namespace, table name, and partition spec.
│          │ │      name: S3TableConfiguration
│          │ └ properties
│          │    ├ TableBucketARN: string (required)
│          │    ├ TableName: string (required)
│          │    ├ CompressionType: string<NONE|ZSTD|SNAPPY> (required)
│          │    ├ PartitionSpec: PartitionSpec
│          │    └ Namespace: string (required)
│          ├ type S3TablesDestinationConfiguration
│          │ ├      documentation: Configuration for delivery to S3 Tables destinations. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified on the channel.
│          │ │      name: S3TablesDestinationConfiguration
│          │ └ properties
│          │    ├ S3TablesConfigurationList: Array<S3TableConfiguration> (required, immutable)
│          │    ├ DeadLetterQueueS3Configuration: DeadLetterQueueS3Configuration (required, immutable)
│          │    └ DataFreshnessInSeconds: integer (default=300)
│          └ type StreamConfiguration
│            ├      documentation: The configuration of a Kinesis stream that the channel reads from.
│            │      name: StreamConfiguration
│            └ properties
│               ├ RecordConfiguration: RecordConfiguration (required)
│               └ StreamARN: string (required)
├[~] service aws-lakeformation
│ └ resources
│    └[~]  resource AWS::LakeFormation::PrincipalPermissions
│       └ types
│          └[~] type CatalogResource
│            └      - documentation: undefined
│                   + documentation: A structure for the catalog object.
│                     This is an object with no properties that effectively behaves as a true or false. A valid input for this property type in both yaml or json is null or ``{}``.
├[~] service aws-lambda
│ └ resources
│    ├[~]  resource AWS::Lambda::EventSourceMapping
│    │  └ types
│    │     ├[~] type SchemaRegistryAccessConfig
│    │     │ └ properties
│    │     │    └ Type: - string<BASIC_AUTH|CLIENT_CERTIFICATE_TLS_AUTH|SERVER_ROOT_CA_CERTIFICATE>
│    │     │            + string<BASIC_AUTH|CLIENT_CERTIFICATE_TLS_AUTH|SERVER_ROOT_CA_CERTIFICATE|OAUTHBEARER_AUTH>
│    │     ├[~] type SelfManagedKafkaEventSourceConfig
│    │     │ └ properties
│    │     │    └[+] ConsumptionMode: string<Stream|Queue>
│    │     └[~] type SourceAccessConfiguration
│    │       └ properties
│    │          └ Type: - string<BASIC_AUTH|VPC_SUBNET|VPC_SECURITY_GROUP|SASL_SCRAM_512_AUTH|SASL_SCRAM_256_AUTH|VIRTUAL_HOST|CLIENT_CERTIFICATE_TLS_AUTH|SERVER_ROOT_CA_CERTIFICATE>
│    │                  + string<BASIC_AUTH|VPC_SUBNET|VPC_SECURITY_GROUP|SASL_SCRAM_512_AUTH|SASL_SCRAM_256_AUTH|VIRTUAL_HOST|CLIENT_CERTIFICATE_TLS_AUTH|SERVER_ROOT_CA_CERTIFICATE|OAUTHBEARER_AUTH|OAUTHBEARER_SCOPE|OAUTHBEARER_AUDIENCE|OAUTHBEARER_LOGICAL_CLUSTER|OAUTHBEARER_IDENTITY_POOL|IAM_AUTH|IAM_OAUTHBEARER_AUTH>
│    ├[~]  resource AWS::Lambda::Function
│    │  └ types
│    │     ├[~] type FileSystemConfig
│    │     │ └ properties
│    │     │    └ S3FilesConfig: (documentation changed)
│    │     └[~] type S3FilesConfig
│    │       ├      - documentation: undefined
│    │       │      + documentation: Setting controls how your function accesses data from an Amazon S3 file system.
│    │       └ properties
│    │          └ DirectS3Read: (documentation changed)
│    └[~]  resource AWS::Lambda::ResourcePolicy
│       └ properties
│          └ ResourceArn: (documentation changed)
├[~] service aws-licensemanager
│ └ resources
│    └[+]  resource AWS::LicenseManager::LicenseAssetGroup
│       ├      name: LicenseAssetGroup
│       │      cloudFormationType: AWS::LicenseManager::LicenseAssetGroup
│       │      documentation: Resource Type definition for AWS::LicenseManager::LicenseAssetGroup
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:license-manager:${Region}:${Account}:license-asset-group:${LicenseAssetGroupId}
│       │      primaryIdentifier: ["LicenseAssetGroupArn"]
│       ├ properties
│       │  ├ Name: string (required)
│       │  ├ Description: string
│       │  ├ AssociatedLicenseAssetRulesetARNs: Array<string> (required)
│       │  ├ LicenseAssetGroupConfigurations: Array<LicenseAssetGroupConfiguration> (required, immutable)
│       │  ├ Properties: Array<LicenseAssetGroupProperty>
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  └ LicenseAssetGroupArn: string
│       └ types
│          ├ type LicenseAssetGroupConfiguration
│          │ ├      name: LicenseAssetGroupConfiguration
│          │ └ properties
│          │    └ UsageDimension: string
│          └ type LicenseAssetGroupProperty
│            ├      name: LicenseAssetGroupProperty
│            └ properties
│               ├ Key: string
│               └ Value: string
├[~] service aws-lightsail
│ └ resources
│    └[+]  resource AWS::Lightsail::KeyPair
│       ├      name: KeyPair
│       │      cloudFormationType: AWS::Lightsail::KeyPair
│       │      documentation: Resource Type definition for AWS::Lightsail::KeyPair
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:lightsail:${Region}:${Account}:KeyPair/${Id}
│       │      primaryIdentifier: ["KeyPairName"]
│       ├ properties
│       │  ├ KeyPairName: string (required, immutable)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ KeyPairArn: string
│       │  ├ Fingerprint: string
│       │  ├ CreatedAt: string
│       │  ├ SupportCode: string
│       │  ├ ResourceType: string
│       │  └ Location: ResourceLocation
│       └ types
│          └ type ResourceLocation
│            ├      name: ResourceLocation
│            └ properties
│               ├ AvailabilityZone: string
│               └ RegionName: string
├[~] service aws-logs
│ └ resources
│    └[~]  resource AWS::Logs::LogGroup
│       ├      - vendedLogs: undefined
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"INSIGHTS_QUERY_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","create_time","query_language"],"mandatoryFields":["resource_arn","event_timestamp","log_type","query_id","account_id","principal_arn","status","bytes_scanned","records_scanned","records_matched","estimated_bytes_skipped","estimated_records_skipped","query_duration_ms","start_time","end_time","log_group_names","log_group_count","query_text","error_message","client_info","query_source"]}]
│       └ vendedLogs
│          └[+] logType: INSIGHTS_QUERY_LOGS
│            ├permissionsVersion: V2
│            ├destinations: [S3, CWL, FH]
│            ├mandatoryFields: [resource_arn, event_timestamp, log_type, query_id, account_id, principal_arn, status, bytes_scanned, records_scanned, records_matched, estimated_bytes_skipped, estimated_records_skipped, query_duration_ms, start_time, end_time, log_group_names, log_group_count, query_text, error_message, client_info, query_source]
│            └optionalFields: [timestamp, create_time, query_language]
├[~] service aws-macie
│ └ resources
│    └[+]  resource AWS::Macie::Member
│       ├      name: Member
│       │      cloudFormationType: AWS::Macie::Member
│       │      documentation: Represents the association between an Amazon Macie administrator account and a member account. Creating this resource associates the specified account with the Macie administrator account that performs the operation; deleting it removes the association.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:macie2:${Region}:${Account}:member/${ResourceId}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ AccountId: string (required, immutable)
│       │  ├ Email: string (immutable)
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ Arn: string
│          ├ AdministratorAccountId: string
│          ├ RelationshipStatus: string<Enabled|Paused|Invited|Created|Removed|Resigned|EmailVerificationInProgress|EmailVerificationFailed|RegionDisabled|AccountSuspended>
│          └ UpdatedAt: string
├[~] service aws-mediaconnect
│ └ resources
│    ├[+]  resource AWS::MediaConnect::FlowMediaStream
│    │  ├      name: FlowMediaStream
│    │  │      cloudFormationType: AWS::MediaConnect::FlowMediaStream
│    │  │      documentation: Resource schema for AWS::MediaConnect::FlowMediaStream. A media stream represents a single track or stream of media containing video, audio, or ancillary data that is transported using the SMPTE 2110 JPEG XS or CDI protocol.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ FlowArn: string (required, immutable)
│    │  │  ├ MediaStreamName: string (required, immutable)
│    │  │  ├ MediaStreamId: integer (required, immutable)
│    │  │  ├ MediaStreamType: string<video|audio|ancillary-data> (required)
│    │  │  ├ ClockRate: integer
│    │  │  ├ Description: string
│    │  │  ├ VideoFormat: string
│    │  │  ├ Attributes: MediaStreamAttributes
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  └ Fmt: integer
│    │  └ types
│    │     ├ type Fmtp
│    │     │ ├      documentation: A set of parameters that define the media stream.
│    │     │ │      name: Fmtp
│    │     │ └ properties
│    │     │    ├ ChannelOrder: string
│    │     │    ├ Colorimetry: string<BT601|BT709|BT2020|BT2100|ST2065-1|ST2065-3|XYZ>
│    │     │    ├ ExactFramerate: string
│    │     │    ├ Par: string
│    │     │    ├ Range: string<NARROW|FULL|FULLPROTECT>
│    │     │    ├ ScanMode: string<progressive|interlace|progressive-segmented-frame>
│    │     │    └ Tcs: string<SDR|PQ|HLG|LINEAR|BT2100LINPQ|BT2100LINHLG|ST2065-1|ST428-1|DENSITY>
│    │     └ type MediaStreamAttributes
│    │       ├      documentation: Attributes that are related to the media stream.
│    │       │      name: MediaStreamAttributes
│    │       └ properties
│    │          ├ Fmtp: Fmtp
│    │          └ Lang: string
│    └[~]  resource AWS::MediaConnect::RouterOutput
│       └ types
│          ├[~] type RouterOutputProtocolConfiguration
│          │ └ properties
│          │    └[+] RtmpPush: RtmpPushRouterOutputConfiguration
│          ├[+]  type RtmpPushRouterOutputConfiguration
│          │  ├      documentation: The configuration settings for a router output that pushes a stream to a destination using the RTMP (Real-Time Messaging Protocol) protocol, or RTMPS (RTMP over TLS) when TLS encryption is specified. These settings include the destination address and port, the application and stream names, and optional TLS encryption configuration.
│          │  │      name: RtmpPushRouterOutputConfiguration
│          │  └ properties
│          │     ├ DestinationAddress: string (required)
│          │     ├ DestinationPort: integer (required)
│          │     ├ ApplicationName: string (required)
│          │     ├ StreamName: string (required)
│          │     └ TlsEncryption: TlsEncryption
│          ├[~] type StandardRouterOutputConfiguration
│          │ └ properties
│          │    └ Protocol: - string<RTP|RIST|SRT_CALLER|SRT_LISTENER>
│          │                + string<RTP|RIST|SRT_CALLER|SRT_LISTENER|RTMP_PUSH>
│          ├[+]  type TlsEncryption
│          │  ├      documentation: The Transport Layer Security (TLS) encryption settings used to establish a secure connection to a destination.
│          │  │      name: TlsEncryption
│          │  └ properties
│          │     ├ EncryptionType: string<PUBLIC>
│          │     └ EncryptionConfiguration: TlsEncryptionConfiguration (required)
│          └[+]  type TlsEncryptionConfiguration
│             ├      documentation: The configuration settings for TLS encryption.
│             │      name: TlsEncryptionConfiguration
│             └ properties
│                └ Public: json (required)
├[~] service aws-mediaconvert
│ └ resources
│    ├[~]  resource AWS::MediaConvert::JobTemplate
│    │  ├      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["Name"]
│    │  └ attributes
│    │     └[-] Id: string
│    └[~]  resource AWS::MediaConvert::Queue
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["Name"]
│       ├ properties
│       │  └ MaximumConcurrentFeeds: (documentation changed)
│       └ attributes
│          └[-] Id: string
├[~] service aws-medialive
│ └ resources
│    └[~]  resource AWS::MediaLive::Channel
│       └ types
│          ├[+]  type AbWatermarkingCustomProfile
│          │  ├      name: AbWatermarkingCustomProfile
│          │  └ properties
│          │     ├ TargetPsnr: number
│          │     ├ SceneCut: number
│          │     └ EmbeddingFrequency: number
│          ├[~] type ArchiveCdnSettings
│          │ └ properties
│          │    └ ArchiveS3Settings: - ArchiveS3Settings
│          │                         + ArchiveFrameCaptureHlsS3Settings ⇐ ArchiveS3Settings
│          ├[+]  type ArchiveFrameCaptureHlsS3Settings
│          │  ├      name: ArchiveFrameCaptureHlsS3Settings
│          │  └ properties
│          │     └ CannedAcl: string
│          ├[~] type AvailSettings
│          │ └ properties
│          │    ├ Scte35SpliceInsert: - Scte35SpliceInsert
│          │    │                     + Scte35SpliceInsertTimeSignalAposSettings ⇐ Scte35SpliceInsert
│          │    └ Scte35TimeSignalApos: - Scte35TimeSignalApos
│          │                            + Scte35SpliceInsertTimeSignalAposSettings ⇐ Scte35TimeSignalApos
│          ├[~] type CaptionDestinationSettings
│          │ └ properties
│          │    └ EmbeddedDestinationSettings: - json ⇐ EmbeddedDestinationSettings
│          │                                   + EmbeddedDestinationSettings
│          ├[~] type CaptionSelectorSettings
│          │ └ properties
│          │    ├ DvbSubSourceSettings: - DvbSubSourceSettings
│          │    │                       + Scte27DvbSubSourceSettings ⇐ DvbSubSourceSettings
│          │    └ Scte27SourceSettings: - Scte27SourceSettings
│          │                            + Scte27DvbSubSourceSettings ⇐ Scte27SourceSettings
│          ├[+]  type CmafIngestFrameCaptureOutputSettings
│          │  ├      name: CmafIngestFrameCaptureOutputSettings
│          │  └ properties
│          │     └ NameModifier: string
│          ├[~] type CmafIngestGroupSettings
│          │ └ properties
│          │    └[+] WatermarkingSettings: CmafIngestWatermarkingSettings
│          ├[+]  type CmafIngestMediaPackageV2AbWatermarkerIrdetoSettings
│          │  ├      name: CmafIngestMediaPackageV2AbWatermarkerIrdetoSettings
│          │  └ properties
│          │     ├ WatermarkIdLength: string
│          │     ├ AdditionalDestinationsAlternateDestinations: Array<OutputLocationRef>
│          │     ├ PolyPeriod: integer
│          │     ├ AlternateDestination: OutputLocationRef
│          │     ├ License: string
│          │     ├ CustomProfile: AbWatermarkingCustomProfile
│          │     ├ OperatorId: integer
│          │     └ Profile: string
│          ├[-]  type CmafIngestOutputSettings
│          │  ├      name: CmafIngestOutputSettings
│          │  └ properties
│          │     └ NameModifier: string
│          ├[+]  type CmafIngestWatermarkingSettings
│          │  ├      name: CmafIngestWatermarkingSettings
│          │  └ properties
│          │     └ CmafIngestAbWatermarkerIrdetoSettings: CmafIngestMediaPackageV2AbWatermarkerIrdetoSettings
│          ├[+]  type EmbeddedCaptionPositionSettings
│          │  ├      name: EmbeddedCaptionPositionSettings
│          │  └ properties
│          │     └ YPositionLine: integer
│          ├[~] type EmbeddedDestinationSettings
│          │ └ properties
│          │    ├[+] Position: EmbeddedCaptionPositionSettings
│          │    └[+] StyleControl: string
│          ├[~] type FrameCaptureCdnSettings
│          │ └ properties
│          │    └ FrameCaptureS3Settings: - FrameCaptureS3Settings
│          │                              + ArchiveFrameCaptureHlsS3Settings ⇐ FrameCaptureS3Settings
│          ├[~] type HlsCdnSettings
│          │ └ properties
│          │    └ HlsS3Settings: - HlsS3Settings
│          │                     + ArchiveFrameCaptureHlsS3Settings ⇐ HlsS3Settings
│          ├[~] type InferenceSettings
│          │ └ properties
│          │    └[+] EnrichmentMethods: Array<string>
│          ├[-]  type MediaConnectRouterContainerSettings
│          │  ├      name: MediaConnectRouterContainerSettings
│          │  └ properties
│          │     └ M2tsSettings: M2tsSettings
│          ├[~] type MediaConnectRouterOutputSettings
│          │ └ properties
│          │    └ ContainerSettings: - MediaConnectRouterContainerSettings
│          │                         + UdpMediaConnectRouterContainerSettings
│          ├[-]  type MediaPackageAdditionalDestinations
│          │  ├      name: MediaPackageAdditionalDestinations
│          │  └ properties
│          │     └ Destination: OutputLocationRef
│          ├[~] type MediaPackageV2DestinationSettings
│          │ └ properties
│          │    └[+] OutputUsage: Array<string>
│          ├[~] type MediaPackageV2GroupSettings
│          │ └ properties
│          │    ├ AdditionalDestinations: - Array<MediaPackageAdditionalDestinations>
│          │    │                         + Array<AdditionalDestinations>
│          │    └[+] WatermarkingSettings: MediaPackageV2WatermarkingSettings
│          ├[+]  type MediaPackageV2WatermarkingSettings
│          │  ├      name: MediaPackageV2WatermarkingSettings
│          │  └ properties
│          │     └ MediaPackageV2AbWatermarkerIrdetoSettings: CmafIngestMediaPackageV2AbWatermarkerIrdetoSettings
│          ├[+]  type NielsenNaesIiNwOnlySettings
│          │  ├      name: NielsenNaesIiNwOnlySettings
│          │  └ properties
│          │     ├ Timezone: string
│          │     ├ CheckDigitString: string
│          │     └ Sid: number
│          ├[-]  type NielsenNwOnly
│          │  ├      name: NielsenNwOnly
│          │  └ properties
│          │     ├ Timezone: string
│          │     ├ CheckDigitString: string
│          │     └ Sid: number
│          ├[~] type NielsenWatermarksSettings
│          │ └ properties
│          │    ├ NielsenNaesIiNwSettings: - NielsenNaesIiNw
│          │    │                          + NielsenNaesIiNwOnlySettings ⇐ NielsenNaesIiNw
│          │    └ NielsenNwOnlySettings: - NielsenNwOnly
│          │                             + NielsenNaesIiNwOnlySettings
│          ├[~] type OutputSettings
│          │ └ properties
│          │    ├ CmafIngestOutputSettings: - CmafIngestOutputSettings
│          │    │                           + CmafIngestFrameCaptureOutputSettings
│          │    └ FrameCaptureOutputSettings: - FrameCaptureOutputSettings
│          │                                  + CmafIngestFrameCaptureOutputSettings ⇐ FrameCaptureOutputSettings
│          ├[+]  type Scte27DvbSubSourceSettings
│          │  ├      name: Scte27DvbSubSourceSettings
│          │  └ properties
│          │     ├ OcrLanguage: string
│          │     └ Pid: integer
│          ├[+]  type Scte35SpliceInsertTimeSignalAposSettings
│          │  ├      name: Scte35SpliceInsertTimeSignalAposSettings
│          │  └ properties
│          │     ├ AdAvailOffset: integer
│          │     ├ WebDeliveryAllowedFlag: string
│          │     └ NoRegionalBlackoutFlag: string
│          ├[~] type SrtOutputSettings
│          │ └ properties
│          │    └ ContainerSettings: - UdpContainerSettings
│          │                         + UdpMediaConnectRouterContainerSettings
│          ├[+]  type TextCaptionPositionSettings
│          │  ├      name: TextCaptionPositionSettings
│          │  └ properties
│          │     └ YPositionPercentage: integer
│          ├[~] type TtmlDestinationSettings
│          │ └ properties
│          │    └[+] Position: TextCaptionPositionSettings
│          ├[+]  type UdpMediaConnectRouterContainerSettings
│          │  ├      name: UdpMediaConnectRouterContainerSettings
│          │  └ properties
│          │     └ M2tsSettings: M2tsSettings
│          ├[~] type UdpOutputSettings
│          │ └ properties
│          │    └ ContainerSettings: - UdpContainerSettings
│          │                         + UdpMediaConnectRouterContainerSettings ⇐ UdpContainerSettings
│          ├[~] type VideoDescription
│          │ └ properties
│          │    ├[+] Border: integer
│          │    ├[+] CropRectangle: VideoPositionRectangle
│          │    └[+] OutputPositionRectangle: VideoPositionRectangle
│          ├[+]  type VideoPositionRectangle
│          │  ├      name: VideoPositionRectangle
│          │  └ properties
│          │     ├ X: integer
│          │     ├ Y: integer
│          │     ├ Height: integer
│          │     └ Width: integer
│          └[~] type WebvttDestinationSettings
│            └ properties
│               └[+] Position: TextCaptionPositionSettings
├[~] service aws-mediapackagev2
│ └ resources
│    └[~]  resource AWS::MediaPackageV2::Channel
│       ├ properties
│       │  ├ InputType: - string<HLS|CMAF> (immutable)
│       │  │            + string<HLS|CMAF|MULTIVIEW> (immutable)
│       │  └[+] MultiviewConfiguration: MultiviewConfiguration
│       ├ attributes
│       │  └[+] AttachedMultiviewChannels: Array<string>
│       └ types
│          └[+]  type MultiviewConfiguration
│             ├      documentation: <p>The multiview configuration for a channel. A multiview channel composites video from several source channels into a single tiled output stream. Players receive one standard HLS or DASH stream instead of several separate streams. This setting is required when <code>InputType</code> is <code>MULTIVIEW</code>, and can't be set for any other input type.</p>
│             │      name: MultiviewConfiguration
│             └ properties
│                ├ AvailableSources: Array<string> (required)
│                └ AvailableLayouts: Array<string<LAYOUT_2EH|LAYOUT_2PL|LAYOUT_3EL|LAYOUT_3PL|LAYOUT_4E|LAYOUT_4PL>> (required)
├[~] service aws-mediatailor
│ └ resources
│    ├[~]  resource AWS::MediaTailor::Function
│    │  ├ properties
│    │  │  ├[+] ConcurrentExecutorConfiguration: ConcurrentExecutorConfiguration
│    │  │  ├ FunctionType: - string<HTTP_REQUEST|CUSTOM_OUTPUT|SEQUENTIAL_EXECUTOR> (required)
│    │  │  │               + string<HTTP_REQUEST|CUSTOM_OUTPUT|CONCURRENT_EXECUTOR|SEQUENTIAL_EXECUTOR> (required)
│    │  │  └ SequentialExecutorConfiguration: (documentation changed)
│    │  └ types
│    │     ├[+]  type ConcurrentExecutorConfiguration
│    │     │  ├      documentation: The configuration for a CONCURRENT_EXECUTOR function. A CONCURRENT_EXECUTOR runs a set of child functions in parallel, up to a maximum concurrency, and combines their output when all functions complete. For more information about functions, see Working with functions (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions.html) in the MediaTailor User Guide.
│    │     │  │      name: ConcurrentExecutorConfiguration
│    │     │  └ properties
│    │     │     ├ Runtime: string<JSONATA> (required)
│    │     │     ├ Output: Map<string, string> (required)
│    │     │     ├ FunctionList: Array<FunctionRef> (required)
│    │     │     ├ TimeoutMilliseconds: integer (required)
│    │     │     └ MaxConcurrency: integer (required)
│    │     ├[~] type CustomOutputConfiguration
│    │     │ └ properties
│    │     │    └ Runtime: (documentation changed)
│    │     ├[~] type FunctionRef
│    │     │ ├      - documentation: A reference to a function with an optional run condition.
│    │     │ │      + documentation: A reference to a child function within an executor function.
│    │     │ └ properties
│    │     │    ├[+] Alias: string
│    │     │    ├ FunctionId: (documentation changed)
│    │     │    └ RunCondition: (documentation changed)
│    │     ├[~] type HttpRequestConfiguration
│    │     │ └ properties
│    │     │    └ Runtime: (documentation changed)
│    │     └[~] type SequentialExecutorConfiguration
│    │       ├      - documentation: Configuration for sequential executor functions.
│    │       │      + documentation: The configuration for a SEQUENTIAL_EXECUTOR function. A SEQUENTIAL_EXECUTOR runs an ordered list of child functions one at a time, passing data between them. For more information about functions, see Working with functions (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions.html) in the MediaTailor User Guide.
│    │       └ properties
│    │          ├ FunctionList: (documentation changed)
│    │          ├ Output: (documentation changed)
│    │          ├ Runtime: (documentation changed)
│    │          └ TimeoutMilliseconds: (documentation changed)
│    └[~]  resource AWS::MediaTailor::PlaybackConfiguration
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"AD_DECISION_SERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","originId","customerId","eventType","sessionType","requestId","eventDescription","sessionId","vodVastResponseTimeOffset","adsRequestUrl","adMarkers","segmentationUpid","segmentationTypeId","originalTargetUrl","updatedTargetUrl","rawAdsRequest","rawAdsRequestIndex","rawAdsResponse","rawAdsResponseIndex","avail","vastResponse","vastAd","vodCreativeOffsets","requestHeaders","beaconInfo","adBreakCorrelationId","prefetchScheduleName","eventId","functionId","executionTimeMs","functionType","status","errorType","error","additionalInfo","cause","input","output","http"],"mandatoryFields":["eventTimestamp","awsAccountId"]},{"permissionsVersion":"V2","logType":"MANIFEST_SERVICE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","customerId","eventType","sessionType","requestId","eventDescription","sessionId","originRequestUrl","mediaTailorPath","responseBody","requestNextToken","assetPath","originFullUrl","originPrefixUrl","additionalInfo","cause","response","httpCode","errorMessage","adAdsResponse","adAdsRawResponse","adAdsRequest","adNumNewAvails","generatedMediaPlaylist","requestStartTime","requestEndTime","requestStartTimeEpochMillis","requestEndTimeEpochMillis","eventId","functionId","executionTimeMs","functionType","status","errorType","input","output","http"],"mandatoryFields":["eventTimestamp","awsAccountId","originId"]},{"permissionsVersion":"V2","logType":"TRANSCODE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","eventType","eventDescription","sessionId","creativeUniqueId","profileName","adUri","transcodeRequestId","cacheStatus"],"mandatoryFields":["originId","eventTimestamp","awsAccountId"]}]
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"AD_DECISION_SERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","originId","customerId","eventType","sessionType","requestId","eventDescription","sessionId","vodVastResponseTimeOffset","adsRequestUrl","adMarkers","segmentationUpid","segmentationTypeId","originalTargetUrl","updatedTargetUrl","rawAdsRequest","rawAdsRequestIndex","rawAdsResponse","rawAdsResponseIndex","avail","vastResponse","vastAd","vodCreativeOffsets","requestHeaders","beaconInfo","adBreakCorrelationId","prefetchScheduleName","eventId","functionId","executionTimeMs","functionType","status","errorType","error","additionalInfo","cause","input","output","http","streamId"],"mandatoryFields":["eventTimestamp","awsAccountId"]},{"permissionsVersion":"V2","logType":"MANIFEST_SERVICE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","customerId","eventType","sessionType","requestId","eventDescription","sessionId","originRequestUrl","mediaTailorPath","responseBody","requestNextToken","assetPath","originFullUrl","originPrefixUrl","additionalInfo","cause","response","httpCode","errorMessage","adAdsResponse","adAdsRawResponse","adAdsRequest","adNumNewAvails","generatedMediaPlaylist","requestStartTime","requestEndTime","requestStartTimeEpochMillis","requestEndTimeEpochMillis","eventId","functionId","executionTimeMs","functionType","status","errorType","input","output","http","streamId"],"mandatoryFields":["eventTimestamp","awsAccountId","originId"]},{"permissionsVersion":"V2","logType":"TRANSCODE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","eventType","eventDescription","sessionId","creativeUniqueId","profileName","adUri","transcodeRequestId","cacheStatus"],"mandatoryFields":["originId","eventTimestamp","awsAccountId"]}]
│       └ vendedLogs
│          ├[~] logType: AD_DECISION_SERVER_LOGS
│          │ └optionalFields:
│          │  ├- [timestamp, originId, customerId, eventType, sessionType, requestId, eventDescription, sessionId, vodVastResponseTimeOffset, adsRequestUrl, adMarkers, segmentationUpid, segmentationTypeId, originalTargetUrl, updatedTargetUrl, rawAdsRequest, rawAdsRequestIndex, rawAdsResponse, rawAdsResponseIndex, avail, vastResponse, vastAd, vodCreativeOffsets, requestHeaders, beaconInfo, adBreakCorrelationId, prefetchScheduleName, eventId, functionId, executionTimeMs, functionType, status, errorType, error, additionalInfo, cause, input, output, http]
│          │  └+ [timestamp, originId, customerId, eventType, sessionType, requestId, eventDescription, sessionId, vodVastResponseTimeOffset, adsRequestUrl, adMarkers, segmentationUpid, segmentationTypeId, originalTargetUrl, updatedTargetUrl, rawAdsRequest, rawAdsRequestIndex, rawAdsResponse, rawAdsResponseIndex, avail, vastResponse, vastAd, vodCreativeOffsets, requestHeaders, beaconInfo, adBreakCorrelationId, prefetchScheduleName, eventId, functionId, executionTimeMs, functionType, status, errorType, error, additionalInfo, cause, input, output, http, streamId]
│          └[~] logType: MANIFEST_SERVICE_LOGS
│            └optionalFields:
│             ├- [timestamp, customerId, eventType, sessionType, requestId, eventDescription, sessionId, originRequestUrl, mediaTailorPath, responseBody, requestNextToken, assetPath, originFullUrl, originPrefixUrl, additionalInfo, cause, response, httpCode, errorMessage, adAdsResponse, adAdsRawResponse, adAdsRequest, adNumNewAvails, generatedMediaPlaylist, requestStartTime, requestEndTime, requestStartTimeEpochMillis, requestEndTimeEpochMillis, eventId, functionId, executionTimeMs, functionType, status, errorType, input, output, http]
│             └+ [timestamp, customerId, eventType, sessionType, requestId, eventDescription, sessionId, originRequestUrl, mediaTailorPath, responseBody, requestNextToken, assetPath, originFullUrl, originPrefixUrl, additionalInfo, cause, response, httpCode, errorMessage, adAdsResponse, adAdsRawResponse, adAdsRequest, adNumNewAvails, generatedMediaPlaylist, requestStartTime, requestEndTime, requestStartTimeEpochMillis, requestEndTimeEpochMillis, eventId, functionId, executionTimeMs, functionType, status, errorType, input, output, http, streamId]
├[~] service aws-memorydb
│ └ resources
│    └[+]  resource AWS::MemoryDB::Snapshot
│       ├      name: Snapshot
│       │      cloudFormationType: AWS::MemoryDB::Snapshot
│       │      documentation: Resource Type definition for AWS::MemoryDB::Snapshot. Represents a copy of an entire cluster as of the time when the snapshot was taken.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:memorydb:${Region}:${Account}:snapshot/${SnapshotName}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ SnapshotName: string (required, immutable)
│       │  ├ ClusterName: string (required, immutable)
│       │  ├ KmsKeyId: string (immutable)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ Status: string
│       │  ├ Source: string
│       │  ├ ClusterConfiguration: ClusterConfiguration
│       │  └ DataTiering: string<true|false>
│       └ types
│          └ type ClusterConfiguration
│            ├      name: ClusterConfiguration
│            └ properties
│               ├ Name: string
│               ├ Description: string
│               ├ NodeType: string
│               ├ Engine: string
│               ├ EngineVersion: string
│               ├ MaintenanceWindow: string
│               ├ TopicArn: string
│               ├ Port: integer
│               ├ ParameterGroupName: string
│               ├ SubnetGroupName: string
│               ├ VpcId: string
│               ├ SnapshotRetentionLimit: integer
│               ├ SnapshotWindow: string
│               └ NumShards: integer
├[~] service aws-mgn
│ └ resources
│    ├[+]  resource AWS::MGN::Connector
│    │  ├      name: Connector
│    │  │      cloudFormationType: AWS::MGN::Connector
│    │  │      documentation: Resource schema for AWS::MGN::Connector. A Connector provides connectivity between a source environment and Application Migration Service (MGN) via AWS Systems Manager (SSM).
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ Name: string (required)
│    │  │  ├ SsmInstanceID: string (required, immutable)
│    │  │  ├ SsmCommandConfig: ConnectorSsmCommandConfig
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ ConnectorID: string
│    │  │  └ Arn: string
│    │  └ types
│    │     └ type ConnectorSsmCommandConfig
│    │       ├      documentation: SSM command configuration for the connector.
│    │       │      name: ConnectorSsmCommandConfig
│    │       └ properties
│    │          ├ S3OutputEnabled: boolean (required)
│    │          ├ OutputS3BucketName: string
│    │          ├ CloudWatchOutputEnabled: boolean (required)
│    │          └ CloudWatchLogGroupName: string
│    └[+]  resource AWS::MGN::LaunchConfigurationTemplate
│       ├      name: LaunchConfigurationTemplate
│       │      cloudFormationType: AWS::MGN::LaunchConfigurationTemplate
│       │      documentation: Account level Launch Configuration Template for AWS Application Migration Service.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ PostLaunchActions: PostLaunchActions
│       │  ├ EnableMapAutoTagging: boolean
│       │  ├ MapAutoTaggingMpeID: string
│       │  ├ LaunchDisposition: string<STOPPED|STARTED>
│       │  ├ TargetInstanceTypeRightSizingMethod: string<NONE|BASIC>
│       │  ├ CopyPrivateIp: boolean
│       │  ├ AssociatePublicIpAddress: boolean
│       │  ├ CopyTags: boolean
│       │  ├ Licensing: Licensing
│       │  ├ BootMode: string<LEGACY_BIOS|UEFI|USE_SOURCE>
│       │  ├ SmallVolumeMaxSize: integer
│       │  ├ SmallVolumeConf: LaunchTemplateDiskConf
│       │  ├ LargeVolumeConf: LaunchTemplateDiskConf
│       │  ├ EnableParametersEncryption: boolean
│       │  ├ ParametersEncryptionKey: string
│       │  └ Tags: Array<tag> (immutable)
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ LaunchConfigurationTemplateID: string
│       │  └ Ec2LaunchTemplateID: string
│       └ types
│          ├ type LaunchTemplateDiskConf
│          │ ├      documentation: Launch template disk configuration.
│          │ │      name: LaunchTemplateDiskConf
│          │ └ properties
│          │    ├ VolumeType: string<io1|io2|gp3|gp2|st1|sc1|standard>
│          │    ├ Iops: integer
│          │    └ Throughput: integer
│          ├ type Licensing
│          │ ├      documentation: Configuration of a machine's license.
│          │ │      name: Licensing
│          │ └ properties
│          │    └ OsByol: boolean
│          ├ type PostLaunchActions
│          │ ├      documentation: Post launch actions to execute on the Test or Cutover instance.
│          │ │      name: PostLaunchActions
│          │ └ properties
│          │    ├ Deployment: string<TEST_AND_CUTOVER|CUTOVER_ONLY|TEST_ONLY>
│          │    ├ S3LogBucket: string
│          │    ├ S3OutputKeyPrefix: string
│          │    ├ CloudWatchLogGroupName: string
│          │    └ SsmDocuments: Array<SsmDocument>
│          ├ type SsmDocument
│          │ ├      documentation: An AWS Systems Manager Document to execute as a post launch action.
│          │ │      name: SsmDocument
│          │ └ properties
│          │    ├ ActionName: string (required)
│          │    ├ SsmDocumentName: string (required)
│          │    ├ TimeoutSeconds: integer
│          │    ├ MustSucceedForCutover: boolean
│          │    ├ Parameters: Map<string, Array<SsmParameterStoreParameter>>
│          │    └ ExternalParameters: Map<string, SsmExternalParameter>
│          ├ type SsmExternalParameter
│          │ ├      documentation: An AWS Systems Manager Document external parameter.
│          │ │      name: SsmExternalParameter
│          │ └ properties
│          │    └ DynamicPath: string (required)
│          └ type SsmParameterStoreParameter
│            ├      documentation: An AWS Systems Manager Parameter Store parameter.
│            │      name: SsmParameterStoreParameter
│            └ properties
│               ├ ParameterType: string<STRING|SECURE_STRING> (required)
│               └ ParameterName: string (required)
├[~] service aws-neptunegraph
│ └ resources
│    └[~]  resource AWS::NeptuneGraph::Graph
│       ├ properties
│       │  └[+] ImportTask: ImportTask (immutable)
│       └ types
│          ├[+]  type ImportOptions
│          │  ├      documentation: Contains options for controlling the import process. For example, if the failOnError key is set to false, the import skips the data that caused the error and continues if possible (whereas if set to true, the default, or if omitted, the import operation halts immediately when an error is encountered).
│          │  │      name: ImportOptions
│          │  └ properties
│          │     └ Neptune: NeptuneImportOptions
│          ├[+]  type ImportTask
│          │  ├      documentation: The import task details to import data into the graph at creation time.
│          │  │      name: ImportTask
│          │  └ properties
│          │     ├ Format: string<CSV|OPEN_CYPHER|PARQUET|NTRIPLES>
│          │     ├ BlankNodeHandling: string<convertToIri>
│          │     ├ ParquetType: string<COLUMNAR>
│          │     ├ FailOnError: boolean
│          │     ├ MaxProvisionedMemory: integer
│          │     ├ Source: string (required)
│          │     ├ RoleArn: string (required)
│          │     ├ ImportOptions: ImportOptions
│          │     └ MinProvisionedMemory: integer
│          └[+]  type NeptuneImportOptions
│             ├      documentation: Options for importing data from a Neptune database.
│             │      name: NeptuneImportOptions
│             └ properties
│                ├ PreserveDefaultVertexLabels: boolean
│                ├ S3ExportKmsKeyId: string (required)
│                ├ S3ExportPath: string (required)
│                └ PreserveEdgeIds: boolean
├[~] service aws-networkfirewall
│ └ resources
│    └[+]  resource AWS::NetworkFirewall::ContainerAssociation
│       ├      name: ContainerAssociation
│       │      cloudFormationType: AWS::NetworkFirewall::ContainerAssociation
│       │      documentation: Resource type definition for AWS::NetworkFirewall::ContainerAssociation. A container association monitors container lifecycle events in your Amazon ECS or Amazon EKS clusters and resolves running container addresses for use in Network Firewall rules.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:network-firewall:${Region}:${Account}:container-association/${Name}
│       │      primaryIdentifier: ["ContainerAssociationArn"]
│       ├ properties
│       │  ├ ContainerAssociationName: string (required, immutable)
│       │  ├ Description: string
│       │  ├ Type: string<ECS|EKS> (required, immutable)
│       │  ├ ContainerMonitoringConfigurations: Array<ContainerMonitoringConfiguration> (required)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ ContainerAssociationArn: string
│       │  ├ Status: string<ACTIVE|CREATING|DELETING|UPDATING>
│       │  └ ResolvedCidrCount: integer
│       └ types
│          ├ type ContainerAttribute
│          │ ├      documentation: A key-value filter pair used in container association monitoring configurations to narrow which containers are tracked.
│          │ │      name: ContainerAttribute
│          │ └ properties
│          │    ├ Key: string (required)
│          │    └ Value: string (required)
│          └ type ContainerMonitoringConfiguration
│            ├      documentation: Contains the monitoring configuration for a single cluster in a container association. Specifies the cluster ARN and optional attribute filters to narrow which containers are tracked.
│            │      name: ContainerMonitoringConfiguration
│            └ properties
│               ├ ClusterArn: string (required)
│               └ AttributeFilters: Array<ContainerAttribute>
├[~] service aws-networkflowmonitor
│ └ resources
│    └[+]  resource AWS::NetworkFlowMonitor::Scope
│       ├      name: Scope
│       │      cloudFormationType: AWS::NetworkFlowMonitor::Scope
│       │      documentation: Resource Type definition for AWS::NetworkFlowMonitor::Scope. Creates a scope to define the resources that Network Flow Monitor monitors for network performance.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["ScopeArn"]
│       ├ properties
│       │  ├ Targets: Array<TargetResource> (required, immutable)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ ScopeArn: string
│       │  ├ ScopeId: string
│       │  └ Status: string<SUCCEEDED|IN_PROGRESS|FAILED>
│       └ types
│          ├ type TargetId
│          │ ├      documentation: A target ID is an internally-generated identifier for a target.
│          │ │      name: TargetId
│          │ └ properties
│          │    └ AccountId: string (required)
│          ├ type TargetIdentifier
│          │ ├      documentation: A target identifier is a pair of identifying information for a scope target.
│          │ │      name: TargetIdentifier
│          │ └ properties
│          │    ├ TargetId: TargetId (required)
│          │    └ TargetType: string<ACCOUNT> (required)
│          └ type TargetResource
│            ├      documentation: A target resource in a scope, identified by a Region and target identifier.
│            │      name: TargetResource
│            └ properties
│               ├ TargetIdentifier: TargetIdentifier (required)
│               └ Region: string (required)
├[~] service aws-networkmanager
│ └ resources
│    ├[~]  resource AWS::NetworkManager::ConnectAttachment
│    │  └ properties
│    │     ├[-] ProposedNetworkFunctionGroupChange: ProposedNetworkFunctionGroupChange
│    │     └ RoutingPolicyLabel: - string (immutable)
│    │                           + string
│    ├[+]  resource AWS::NetworkManager::Connection
│    │  ├      name: Connection
│    │  │      cloudFormationType: AWS::NetworkManager::Connection
│    │  │      documentation: Resource Type definition for AWS::NetworkManager::Connection. Describes a connection between two devices in a global network.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["ConnectionArn"]
│    │  ├ properties
│    │  │  ├ GlobalNetworkId: string (required, immutable)
│    │  │  ├ DeviceId: string (required, immutable)
│    │  │  ├ ConnectedDeviceId: string (required, immutable)
│    │  │  ├ LinkId: string
│    │  │  ├ ConnectedLinkId: string
│    │  │  ├ Description: string
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ ConnectionArn: string
│    │     ├ ConnectionId: string
│    │     ├ CreatedAt: string
│    │     └ State: string<PENDING|AVAILABLE|DELETING|UPDATING>
│    ├[~]  resource AWS::NetworkManager::CoreNetwork
│    │  └      - arnTemplate: arn:${Partition}:networkmanager::${Account}:core-network/${CoreNetworkId}
│    │         + arnTemplate: arn:${Partition}:networkmanager::${Account}:core-network/${ResourceId}
│    ├[~]  resource AWS::NetworkManager::DirectConnectGatewayAttachment
│    │  └ properties
│    │     ├[-] ProposedNetworkFunctionGroupChange: ProposedNetworkFunctionGroupChange
│    │     ├[-] ProposedSegmentChange: ProposedSegmentChange
│    │     └ RoutingPolicyLabel: - string (immutable)
│    │                           + string
│    ├[~]  resource AWS::NetworkManager::SiteToSiteVpnAttachment
│    │  └ properties
│    │     ├[-] ProposedNetworkFunctionGroupChange: ProposedNetworkFunctionGroupChange
│    │     └ RoutingPolicyLabel: - string (immutable)
│    │                           + string
│    ├[~]  resource AWS::NetworkManager::TransitGatewayRouteTableAttachment
│    │  └ properties
│    │     ├[-] ProposedNetworkFunctionGroupChange: ProposedNetworkFunctionGroupChange
│    │     └ RoutingPolicyLabel: - string (immutable)
│    │                           + string
│    └[~]  resource AWS::NetworkManager::VpcAttachment
│       └ properties
│          ├[-] ProposedNetworkFunctionGroupChange: ProposedNetworkFunctionGroupChange
│          └ RoutingPolicyLabel: - string (immutable)
│                                + string
├[+] service aws-networkmonitor
│ ├      capitalized: NetworkMonitor
│ │      cloudFormationNamespace: AWS::NetworkMonitor
│ │      name: aws-networkmonitor
│ │      shortName: networkmonitor
│ └ resources
│    └ resource AWS::NetworkMonitor::Monitor
│      ├      name: Monitor
│      │      cloudFormationType: AWS::NetworkMonitor::Monitor
│      │      documentation: An Amazon CloudWatch Network Monitor resource that monitors network traffic between a source VPC subnet and a destination IP address.
│      │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│      │      primaryIdentifier: ["MonitorArn"]
│      ├ properties
│      │  ├ MonitorName: string (required, immutable)
│      │  ├ AggregationPeriod: integer
│      │  └ Tags: Array<tag>
│      └ attributes
│         ├ MonitorArn: string
│         ├ State: string<PENDING|ACTIVE|INACTIVE|ERROR|DELETING>
│         ├ CreatedAt: string
│         └ ModifiedAt: string
├[~] service aws-notifications
│ └ resources
│    ├[~]  resource AWS::Notifications::ManagedNotificationAccountContactAssociation
│    │  └ properties
│    │     └[+] IsSensitiveEventsSubscribed: boolean
│    └[~]  resource AWS::Notifications::ManagedNotificationAdditionalChannelAssociation
│       └ properties
│          └[+] IsSensitiveEventsSubscribed: boolean
├[~] service aws-observabilityadmin
│ └ resources
│    ├[~]  resource AWS::ObservabilityAdmin::OrganizationTelemetryRule
│    │  └ types
│    │     ├[~] type LogDeliveryParameters
│    │     │ └ properties
│    │     │    └ LogTypes: - Array<string<SECURITY_FINDING_LOGS>>
│    │     │                + Array<string<SECURITY_FINDING_LOGS|S3_SERVER_ACCESS_LOGS|ACCESS_LOGS|CONNECTION_LOGS|ALB_ACCESS_LOGS|ALB_CONNECTION_LOGS|ALB_HEALTH_CHECK_LOGS>>
│    │     ├[+]  type MskMonitoringParameters
│    │     │  ├      documentation: Configuration parameters for Amazon MSK cluster monitoring.
│    │     │  │      name: MskMonitoringParameters
│    │     │  └ properties
│    │     │     └ EnhancedMonitoring: string<DEFAULT|PER_BROKER|PER_TOPIC_PER_BROKER|PER_TOPIC_PER_PARTITION>
│    │     ├[~] type TelemetryDestinationConfiguration
│    │     │ └ properties
│    │     │    └[+] MskMonitoringParameters: MskMonitoringParameters
│    │     └[~] type TelemetryRule
│    │       └ properties
│    │          └ ResourceType: - string<AWS::EC2::VPC|AWS::WAFv2::WebACL|AWS::CloudTrail|AWS::EKS::Cluster|AWS::ElasticLoadBalancingV2::LoadBalancer|AWS::EC2::Instance|AWS::SecurityHub::Hub> (required)
│    │                          + string<AWS::EC2::VPC|AWS::WAFv2::WebACL|AWS::CloudTrail|AWS::EKS::Cluster|AWS::ElasticLoadBalancingV2::LoadBalancer|AWS::EC2::Instance|AWS::SecurityHub::Hub|AWS::SecurityHub::HubV2|AWS::S3::Bucket|AWS::MSK::Cluster|AWS::CloudFront::Distribution|AWS::CloudWatch::OTelEnrichment> (required)
│    └[~]  resource AWS::ObservabilityAdmin::TelemetryRule
│       └ types
│          ├[~] type LogDeliveryParameters
│          │ └ properties
│          │    └ LogTypes: - Array<string<APPLICATION_LOGS|USAGE_LOGS|SECURITY_FINDING_LOGS>>
│          │                + Array<string<APPLICATION_LOGS|USAGE_LOGS|SECURITY_FINDING_LOGS|S3_SERVER_ACCESS_LOGS|ACCESS_LOGS|CONNECTION_LOGS|ALB_ACCESS_LOGS|ALB_CONNECTION_LOGS|ALB_HEALTH_CHECK_LOGS>>
│          ├[+]  type MskMonitoringParameters
│          │  ├      documentation: Configuration parameters for Amazon MSK cluster monitoring.
│          │  │      name: MskMonitoringParameters
│          │  └ properties
│          │     └ EnhancedMonitoring: string<DEFAULT|PER_BROKER|PER_TOPIC_PER_BROKER|PER_TOPIC_PER_PARTITION>
│          ├[~] type TelemetryDestinationConfiguration
│          │ └ properties
│          │    └[+] MskMonitoringParameters: MskMonitoringParameters
│          └[~] type TelemetryRule
│            └ properties
│               └ ResourceType: - string<AWS::EC2::VPC|AWS::WAFv2::WebACL|AWS::CloudTrail|AWS::EKS::Cluster|AWS::ElasticLoadBalancingV2::LoadBalancer|AWS::EC2::Instance|AWS::BedrockAgentCore::Runtime|AWS::BedrockAgentCore::Browser|AWS::BedrockAgentCore::CodeInterpreter|AWS::SecurityHub::Hub> (required)
│                               + string<AWS::EC2::VPC|AWS::WAFv2::WebACL|AWS::CloudTrail|AWS::EKS::Cluster|AWS::ElasticLoadBalancingV2::LoadBalancer|AWS::EC2::Instance|AWS::BedrockAgentCore::Runtime|AWS::BedrockAgentCore::Browser|AWS::BedrockAgentCore::CodeInterpreter|AWS::SecurityHub::Hub|AWS::SecurityHub::HubV2|AWS::S3::Bucket|AWS::MSK::Cluster|AWS::CloudFront::Distribution|AWS::CloudWatch::OTelEnrichment|AWS::Bedrock::KnowledgeBase|AWS::BedrockAgentCore::Memory|AWS::BedrockAgentCore::Gateway|AWS::BedrockAgentCore::WorkloadIdentity> (required)
├[~] service aws-outposts
│ ├ resources
│ │  └[+]  resource AWS::Outposts::Outpost
│ │     ├      name: Outpost
│ │     │      cloudFormationType: AWS::Outposts::Outpost
│ │     │      documentation: Definition of AWS::Outposts::Outpost Resource Type
│ │     │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│ │     │      arnTemplate: arn:${Partition}:outposts:${Region}:${Account}:outpost/${OutpostId}
│ │     │      primaryIdentifier: ["OutpostArn"]
│ │     ├ properties
│ │     │  ├ SiteId: string (required, immutable)
│ │     │  ├ Name: string (required)
│ │     │  ├ Description: string
│ │     │  ├ AvailabilityZone: string (immutable)
│ │     │  ├ AvailabilityZoneId: string (immutable)
│ │     │  ├ SupportedHardwareType: string<RACK|SERVER>
│ │     │  └ Tags: Array<tag>
│ │     ├ attributes
│ │     │  ├ OutpostId: string
│ │     │  ├ OutpostArn: string
│ │     │  ├ OwnerId: string
│ │     │  ├ SiteArn: string
│ │     │  └ LifeCycleStatus: string
│ │     └ metrics
│ │        ├ AWS/Outposts • AvailableInstanceType_Count • Sum
│ │        │ └ dimensionSets
│ │        │    └ InstanceTypePerOutpost [OutpostId, InstanceType]
│ │        ├ AWS/Outposts • CapacityExceptions • Sum
│ │        │ └ dimensionSets
│ │        │    └ InstanceTypePerOutpost [OutpostId, InstanceType]
│ │        └ AWS/Outposts • UsedInstanceType_Count • Sum
│ │          └ dimensionSets
│ │             └ InstanceTypePerOutpost [OutpostId, InstanceType]
│ └ metrics
│    ├[+]  AWS/Outposts • AvailableInstanceType_Count • Sum
│    │  └ dimensionSets
│    │     └ InstanceTypePerOutpost [OutpostId, InstanceType]
│    ├[+]  AWS/Outposts • CapacityExceptions • Sum
│    │  └ dimensionSets
│    │     └ InstanceTypePerOutpost [OutpostId, InstanceType]
│    └[+]  AWS/Outposts • UsedInstanceType_Count • Sum
│       └ dimensionSets
│          └ InstanceTypePerOutpost [OutpostId, InstanceType]
├[~] service aws-pcs
│ └ resources
│    ├[~]  resource AWS::PCS::Cluster
│    │  ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"PCS_SCHEDULER_AUDIT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp"],"mandatoryFields":["resource_id","resource_type","event_timestamp","log_level","log_name","scheduler_type","scheduler_major_version","scheduler_patch_version","node_type","log_type","message"]},{"permissionsVersion":"V2","logType":"PCS_JOBCOMP_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp"],"mandatoryFields":["resource_id","resource_type","event_timestamp","scheduler_type","scheduler_major_version","fields"]},{"permissionsVersion":"V2","logType":"PCS_SCHEDULER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp"],"mandatoryFields":["resource_id","resource_type","event_timestamp","log_level","log_name","scheduler_type","scheduler_major_version","scheduler_patch_version","node_type","message"]}]
│    │  │      + vendedLogs: [{"permissionsVersion":"V2","logType":"PCS_SCHEDULER_AUDIT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp"],"mandatoryFields":["resource_id","resource_type","event_timestamp","log_level","log_name","scheduler_type","scheduler_major_version","scheduler_patch_version","node_type","log_type","message"]},{"permissionsVersion":"V2","logType":"PCS_JOBCOMP_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp"],"mandatoryFields":["resource_id","resource_type","event_timestamp","scheduler_type","scheduler_major_version","fields"]},{"permissionsVersion":"V2","logType":"PCS_SCALING_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","event_timestamp","id","resource_type","compute_node_group_id","scheduler_node_id","status_code","reason_code","description","details"]},{"permissionsVersion":"V2","logType":"PCS_SCHEDULER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp"],"mandatoryFields":["resource_id","resource_type","event_timestamp","log_level","log_name","scheduler_type","scheduler_major_version","scheduler_patch_version","node_type","message"]}]
│    │  └ vendedLogs
│    │     └[+] logType: PCS_SCALING_LOGS
│    │       ├permissionsVersion: V2
│    │       ├destinations: [S3, CWL, FH]
│    │       └optionalFields: [timestamp, resource_id, event_timestamp, id, resource_type, compute_node_group_id, scheduler_node_id, status_code, reason_code, description, details]
│    └[~]  resource AWS::PCS::ComputeNodeGroup
│       └ types
│          └[~] type SlurmConfiguration
│            └ properties
│               └[+] GresCustomSettings: Array<Map<string, string>>
├[~] service aws-personalize
│ └ resources
│    └[+]  resource AWS::Personalize::Filter
│       ├      name: Filter
│       │      cloudFormationType: AWS::Personalize::Filter
│       │      documentation: A recommendation filter that defines which items are included or excluded from recommendations.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["FilterArn"]
│       ├ properties
│       │  ├ Name: string (required, immutable)
│       │  ├ DatasetGroupArn: string (required, immutable)
│       │  ├ FilterExpression: string (required, immutable)
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ FilterArn: string
│          ├ Status: string
│          ├ CreationDateTime: string
│          └ LastUpdatedDateTime: string
├[+] service aws-pi
│ ├      capitalized: PI
│ │      cloudFormationNamespace: AWS::PI
│ │      name: aws-pi
│ │      shortName: pi
│ └ resources
│    └ resource AWS::PI::PerfReports
│      ├      name: PerfReports
│      │      cloudFormationType: AWS::PI::PerfReports
│      │      documentation: Creates and manages a Performance Insights performance analysis report for a specified DB instance.
│      │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│      │      primaryIdentifier: ["Arn"]
│      ├ properties
│      │  ├ ServiceType: string<RDS|DOCDB> (required, immutable)
│      │  ├ Identifier: string (required, immutable)
│      │  ├ StartTime: string (required, immutable)
│      │  ├ EndTime: string (required, immutable)
│      │  └ Tags: Array<tag> (immutable)
│      └ attributes
│         ├ Arn: string
│         ├ AnalysisReportId: string
│         ├ CreateTime: string
│         └ Status: string<RUNNING|SUCCEEDED|FAILED>
├[~] service aws-pinpoint
│ └ resources
│    ├[~]  resource AWS::Pinpoint::PushTemplate
│    │  └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/PUSH
│    │         + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/EMAIL
│    └[~]  resource AWS::Pinpoint::SmsTemplate
│       └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/SMS
│              + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/EMAIL
├[~] service aws-quicksight
│ └ resources
│    ├[~]  resource AWS::QuickSight::Analysis
│    │  └ types
│    │     ├[~] type AnalysisDefinition
│    │     │ └ properties
│    │     │    └[+] TopicIdentifierDeclarations: Array<TopicIdentifierDeclaration>
│    │     ├[~] type AnalysisSourceTemplate
│    │     │ └ properties
│    │     │    └[+] TopicReferences: Array<TopicReference>
│    │     ├[~] type BarChartConfiguration
│    │     │ └ properties
│    │     │    ├[+] DefaultSeriesSettings: BarChartDefaultSeriesSettings
│    │     │    └[+] Series: Array<BarSeriesItem>
│    │     ├[+]  type BarChartDefaultSeriesSettings
│    │     │  ├      name: BarChartDefaultSeriesSettings
│    │     │  └ properties
│    │     │     ├ BorderSettings: BorderSettings
│    │     │     └ DecalSettings: DecalSettings
│    │     ├[+]  type BarSeriesItem
│    │     │  └      name: BarSeriesItem
│    │     ├[+]  type BorderSettings
│    │     │  ├      name: BorderSettings
│    │     │  └ properties
│    │     │     ├ BorderVisibility: string<HIDDEN|VISIBLE>
│    │     │     ├ BorderColor: string
│    │     │     └ BorderWidth: string
│    │     ├[~] type CalculatedField
│    │     │ └ properties
│    │     │    ├ DataSetIdentifier: - string (required)
│    │     │    │                    + string (default="")
│    │     │    └[+] TopicIdentifier: string
│    │     ├[~] type ColumnConfiguration
│    │     │ └ properties
│    │     │    └[+] DecalSettingsConfiguration: DecalSettingsConfiguration
│    │     ├[~] type ColumnIdentifier
│    │     │ └ properties
│    │     │    ├ DataSetIdentifier: - string (required)
│    │     │    │                    + string (default="")
│    │     │    └[+] TopicIdentifier: string
│    │     ├[~] type ComboChartConfiguration
│    │     │ └ properties
│    │     │    ├[+] DefaultSeriesSettings: ComboChartDefaultSeriesSettings
│    │     │    └[+] Series: Array<ComboSeriesItem>
│    │     ├[+]  type ComboChartDefaultSeriesSettings
│    │     │  ├      name: ComboChartDefaultSeriesSettings
│    │     │  └ properties
│    │     │     ├ BorderSettings: BorderSettings
│    │     │     ├ DecalSettings: DecalSettings
│    │     │     ├ LineStyleSettings: LineChartLineStyleSettings
│    │     │     └ MarkerStyleSettings: LineChartMarkerStyleSettings
│    │     ├[+]  type ComboSeriesItem
│    │     │  └      name: ComboSeriesItem
│    │     ├[~] type CustomContentVisual
│    │     │ └ properties
│    │     │    ├ DataSetIdentifier: - string (required)
│    │     │    │                    + string (default="")
│    │     │    └[+] TopicIdentifier: string
│    │     ├[+]  type DecalSettings
│    │     │  ├      name: DecalSettings
│    │     │  └ properties
│    │     │     ├ DecalStyleType: string<Manual|Auto>
│    │     │     ├ DecalColor: string
│    │     │     ├ DecalVisibility: string<HIDDEN|VISIBLE>
│    │     │     ├ DecalPatternType: string<SOLID|DIAGONAL_MEDIUM|CIRCLE_MEDIUM|DIAMOND_GRID_MEDIUM|CHECKERBOARD_MEDIUM|TRIANGLE_MEDIUM|DIAGONAL_OPPOSITE_MEDIUM|DIAMOND_MEDIUM|DIAGONAL_LARGE|CIRCLE_LARGE|DIAMOND_GRID_LARGE|CHECKERBOARD_LARGE|TRIANGLE_LARGE|DIAGONAL_OPPOSITE_LARGE|DIAMOND_LARGE|DIAGONAL_SMALL|CIRCLE_SMALL|DIAMOND_GRID_SMALL|CHECKERBOARD_SMALL|TRIANGLE_SMALL|DIAGONAL_OPPOSITE_SMALL|DIAMOND_SMALL>
│    │     │     └ ElementValue: string
│    │     ├[+]  type DecalSettingsConfiguration
│    │     │  ├      name: DecalSettingsConfiguration
│    │     │  └ properties
│    │     │     └ CustomDecalSettings: Array<DecalSettings>
│    │     ├[~] type EmptyVisual
│    │     │ └ properties
│    │     │    ├ DataSetIdentifier: - string (required)
│    │     │    │                    + string (default="")
│    │     │    └[+] TopicIdentifier: string
│    │     ├[~] type FreeFormLayoutConfiguration
│    │     │ └ properties
│    │     │    └[+] Groups: Array<SheetLayoutGroup>
│    │     ├[~] type FreeFormLayoutElement
│    │     │ └ properties
│    │     │    ├[+] BorderRadius: string
│    │     │    └[+] Padding: string
│    │     ├[~] type FreeFormLayoutElementBorderStyle
│    │     │ └ properties
│    │     │    └[+] Width: string
│    │     ├[~] type GridLayoutElement
│    │     │ └ properties
│    │     │    ├[+] BackgroundStyle: GridLayoutElementBackgroundStyle
│    │     │    ├[+] BorderRadius: string
│    │     │    ├[+] BorderStyle: GridLayoutElementBorderStyle
│    │     │    ├[+] LoadingAnimation: LoadingAnimation
│    │     │    ├[+] Padding: string
│    │     │    └[+] SelectedBorderStyle: GridLayoutElementBorderStyle
│    │     ├[+]  type GridLayoutElementBackgroundStyle
│    │     │  ├      name: GridLayoutElementBackgroundStyle
│    │     │  └ properties
│    │     │     ├ Color: string
│    │     │     └ Visibility: string<HIDDEN|VISIBLE>
│    │     ├[+]  type GridLayoutElementBorderStyle
│    │     │  ├      name: GridLayoutElementBorderStyle
│    │     │  └ properties
│    │     │     ├ Color: string
│    │     │     ├ Visibility: string<HIDDEN|VISIBLE>
│    │     │     └ Width: string
│    │     ├[~] type InsightVisual
│    │     │ └ properties
│    │     │    ├ DataSetIdentifier: - string (required)
│    │     │    │                    + string (default="")
│    │     │    └[+] TopicIdentifier: string
│    │     ├[~] type LayerMapVisual
│    │     │ └ properties
│    │     │    ├ DataSetIdentifier: - string (required)
│    │     │    │                    + string (default="")
│    │     │    └[+] TopicIdentifier: string
│    │     ├[~] type LineChartDefaultSeriesSettings
│    │     │ └ properties
│    │     │    └[+] DecalSettings: DecalSettings
│    │     ├[~] type LineChartSeriesSettings
│    │     │ └ properties
│    │     │    └[+] DecalSettings: DecalSettings
│    │     ├[+]  type SheetLayoutGroup
│    │     │  ├      name: SheetLayoutGroup
│    │     │  └ properties
│    │     │     ├ Id: string (required)
│    │     │     └ Members: Array<SheetLayoutGroupMember> (required)
│    │     ├[+]  type SheetLayoutGroupMember
│    │     │  ├      name: SheetLayoutGroupMember
│    │     │  └ properties
│    │     │     ├ Type: json (required)
│    │     │     └ Id: string (required)
│    │     ├[+]  type SparklinesOptions
│    │     │  ├      name: SparklinesOptions
│    │     │  └ properties
│    │     │     ├ LineInterpolation: string<LINEAR|SMOOTH|STEPPED>
│    │     │     ├ MaxValueMarker: LineChartMarkerStyleSettings
│    │     │     ├ XAxisField: DimensionField (required)
│    │     │     ├ AllPointsMarker: LineChartMarkerStyleSettings
│    │     │     ├ MinValueMarker: LineChartMarkerStyleSettings
│    │     │     ├ FieldId: string (required)
│    │     │     ├ VisualType: string<LINE|AREA_LINE>
│    │     │     ├ LineColor: string
│    │     │     └ YAxisBehavior: string<SHARED|INDEPENDENT>
│    │     ├[~] type TableInlineVisualization
│    │     │ └ properties
│    │     │    └[+] Sparklines: SparklinesOptions
│    │     ├[~] type TooltipOptions
│    │     │ └ properties
│    │     │    └ SelectedTooltipType: - string<BASIC|DETAILED>
│    │     │                           + string<BASIC|DETAILED|SHEET>
│    │     ├[+]  type TopicIdentifierDeclaration
│    │     │  ├      name: TopicIdentifierDeclaration
│    │     │  └ properties
│    │     │     ├ Identifier: string (required)
│    │     │     └ TopicArn: string (required)
│    │     └[+]  type TopicReference
│    │        ├      name: TopicReference
│    │        └ properties
│    │           ├ TopicArn: string (required)
│    │           └ TopicPlaceholder: string (required)
│    ├[+]  resource AWS::QuickSight::Customization
│    │  ├      name: Customization
│    │  │      cloudFormationType: AWS::QuickSight::Customization
│    │  │      documentation: Definition of the AWS::QuickSight::Customization Resource Type.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:customization/${ResourceId}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ Namespace: string (required, immutable)
│    │  │  ├ DefaultTheme: string (required)
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ Arn: string
│    │     └ AwsAccountId: string
│    ├[~]  resource AWS::QuickSight::Dashboard
│    │  └ types
│    │     ├[~] type BarChartConfiguration
│    │     │ └ properties
│    │     │    ├[+] DefaultSeriesSettings: BarChartDefaultSeriesSettings
│    │     │    └[+] Series: Array<BarSeriesItem>
│    │     ├[+]  type BarChartDefaultSeriesSettings
│    │     │  ├      name: BarChartDefaultSeriesSettings
│    │     │  └ properties
│    │     │     ├ BorderSettings: BorderSettings
│    │     │     └ DecalSettings: DecalSettings
│    │     ├[+]  type BarSeriesItem
│    │     │  └      name: BarSeriesItem
│    │     ├[+]  type BorderSettings
│    │     │  ├      name: BorderSettings
│    │     │  └ properties
│    │     │     ├ BorderVisibility: string<HIDDEN|VISIBLE>
│    │     │     ├ BorderColor: string
│    │     │     └ BorderWidth: string
│    │     ├[~] type CalculatedField
│    │     │ └ properties
│    │     │    ├ DataSetIdentifier: - string (required)
│    │     │    │                    + string (default="")
│    │     │    └[+] TopicIdentifier: string
│    │     ├[~] type ColumnConfiguration
│    │     │ └ properties
│    │     │    └[+] DecalSettingsConfiguration: DecalSettingsConfiguration
│    │     ├[~] type ColumnIdentifier
│    │     │ └ properties
│    │     │    ├ DataSetIdentifier: - string (required)
│    │     │    │                    + string (default="")
│    │     │    └[+] TopicIdentifier: string
│    │     ├[~] type ComboChartConfiguration
│    │     │ └ properties
│    │     │    ├[+] DefaultSeriesSettings: ComboChartDefaultSeriesSettings
│    │     │    └[+] Series: Array<ComboSeriesItem>
│    │     ├[+]  type ComboChartDefaultSeriesSettings
│    │     │  ├      name: ComboChartDefaultSeriesSettings
│    │     │  └ properties
│    │     │     ├ BorderSettings: BorderSettings
│    │     │     ├ DecalSettings: DecalSettings
│    │     │     ├ LineStyleSettings: LineChartLineStyleSettings
│    │     │     └ MarkerStyleSettings: LineChartMarkerStyleSettings
│    │     ├[+]  type ComboSeriesItem
│    │     │  └      name: ComboSeriesItem
│    │     ├[~] type CustomContentVisual
│    │     │ └ properties
│    │     │    ├ DataSetIdentifier: - string (required)
│    │     │    │                    + string (default="")
│    │     │    └[+] TopicIdentifier: string
│    │     ├[~] type DashboardSourceTemplate
│    │     │ └ properties
│    │     │    └[+] TopicReferences: Array<TopicReference>
│    │     ├[~] type DashboardVersionDefinition
│    │     │ └ properties
│    │     │    └[+] TopicIdentifierDeclarations: Array<TopicIdentifierDeclaration>
│    │     ├[+]  type DecalSettings
│    │     │  ├      name: DecalSettings
│    │     │  └ properties
│    │     │     ├ DecalStyleType: string<Manual|Auto>
│    │     │     ├ DecalColor: string
│    │     │     ├ DecalVisibility: string<HIDDEN|VISIBLE>
│    │     │     ├ DecalPatternType: string<SOLID|DIAGONAL_MEDIUM|CIRCLE_MEDIUM|DIAMOND_GRID_MEDIUM|CHECKERBOARD_MEDIUM|TRIANGLE_MEDIUM|DIAGONAL_OPPOSITE_MEDIUM|DIAMOND_MEDIUM|DIAGONAL_LARGE|CIRCLE_LARGE|DIAMOND_GRID_LARGE|CHECKERBOARD_LARGE|TRIANGLE_LARGE|DIAGONAL_OPPOSITE_LARGE|DIAMOND_LARGE|DIAGONAL_SMALL|CIRCLE_SMALL|DIAMOND_GRID_SMALL|CHECKERBOARD_SMALL|TRIANGLE_SMALL|DIAGONAL_OPPOSITE_SMALL|DIAMOND_SMALL>
│    │     │     └ ElementValue: string
│    │     ├[+]  type DecalSettingsConfiguration
│    │     │  ├      name: DecalSettingsConfiguration
│    │     │  └ properties
│    │     │     └ CustomDecalSettings: Array<DecalSettings>
│    │     ├[~] type EmptyVisual
│    │     │ └ properties
│    │     │    ├ DataSetIdentifier: - string (required)
│    │     │    │                    + string (default="")
│    │     │    └[+] TopicIdentifier: string
│    │     ├[~] type FreeFormLayoutConfiguration
│    │     │ └ properties
│    │     │    └[+] Groups: Array<SheetLayoutGroup>
│    │     ├[~] type InsightVisual
│    │     │ └ properties
│    │     │    ├ DataSetIdentifier: - string (required)
│    │     │    │                    + string (default="")
│    │     │    └[+] TopicIdentifier: string
│    │     ├[~] type LayerMapVisual
│    │     │ └ properties
│    │     │    ├ DataSetIdentifier: - string (required)
│    │     │    │                    + string (default="")
│    │     │    └[+] TopicIdentifier: string
│    │     ├[~] type LineChartDefaultSeriesSettings
│    │     │ └ properties
│    │     │    └[+] DecalSettings: DecalSettings
│    │     ├[~] type LineChartSeriesSettings
│    │     │ └ properties
│    │     │    └[+] DecalSettings: DecalSettings
│    │     ├[+]  type SheetLayoutGroup
│    │     │  ├      name: SheetLayoutGroup
│    │     │  └ properties
│    │     │     ├ Id: string (required)
│    │     │     └ Members: Array<SheetLayoutGroupMember> (required)
│    │     ├[+]  type SheetLayoutGroupMember
│    │     │  ├      name: SheetLayoutGroupMember
│    │     │  └ properties
│    │     │     ├ Type: json (required)
│    │     │     └ Id: string (required)
│    │     ├[+]  type SparklinesOptions
│    │     │  ├      name: SparklinesOptions
│    │     │  └ properties
│    │     │     ├ LineInterpolation: string<LINEAR|SMOOTH|STEPPED>
│    │     │     ├ MaxValueMarker: LineChartMarkerStyleSettings
│    │     │     ├ XAxisField: DimensionField (required)
│    │     │     ├ AllPointsMarker: LineChartMarkerStyleSettings
│    │     │     ├ MinValueMarker: LineChartMarkerStyleSettings
│    │     │     ├ FieldId: string (required)
│    │     │     ├ VisualType: string<LINE|AREA_LINE>
│    │     │     ├ LineColor: string
│    │     │     └ YAxisBehavior: string<SHARED|INDEPENDENT>
│    │     ├[~] type TableInlineVisualization
│    │     │ └ properties
│    │     │    └[+] Sparklines: SparklinesOptions
│    │     ├[~] type TooltipOptions
│    │     │ └ properties
│    │     │    └ SelectedTooltipType: - string<BASIC|DETAILED>
│    │     │                           + string<BASIC|DETAILED|SHEET>
│    │     ├[+]  type TopicIdentifierDeclaration
│    │     │  ├      name: TopicIdentifierDeclaration
│    │     │  └ properties
│    │     │     ├ Identifier: string (required)
│    │     │     └ TopicArn: string (required)
│    │     └[+]  type TopicReference
│    │        ├      name: TopicReference
│    │        └ properties
│    │           ├ TopicArn: string (required)
│    │           └ TopicPlaceholder: string (required)
│    ├[~]  resource AWS::QuickSight::DataSource
│    │  └ types
│    │     └[~] type AthenaParameters
│    │       └ properties
│    │          └[+] ConsumerAccountRoleArn: string
│    ├[~]  resource AWS::QuickSight::Template
│    │  └ types
│    │     ├[~] type BarChartConfiguration
│    │     │ └ properties
│    │     │    ├[+] DefaultSeriesSettings: BarChartDefaultSeriesSettings
│    │     │    └[+] Series: Array<BarSeriesItem>
│    │     ├[+]  type BarChartDefaultSeriesSettings
│    │     │  ├      name: BarChartDefaultSeriesSettings
│    │     │  └ properties
│    │     │     ├ BorderSettings: BorderSettings
│    │     │     └ DecalSettings: DecalSettings
│    │     ├[+]  type BarSeriesItem
│    │     │  └      name: BarSeriesItem
│    │     ├[+]  type BorderSettings
│    │     │  ├      name: BorderSettings
│    │     │  └ properties
│    │     │     ├ BorderVisibility: string<HIDDEN|VISIBLE>
│    │     │     ├ BorderColor: string
│    │     │     └ BorderWidth: string
│    │     ├[~] type CalculatedField
│    │     │ └ properties
│    │     │    ├ DataSetIdentifier: - string (required)
│    │     │    │                    + string (default="")
│    │     │    └[+] TopicIdentifier: string
│    │     ├[~] type ColumnConfiguration
│    │     │ └ properties
│    │     │    └[+] DecalSettingsConfiguration: DecalSettingsConfiguration
│    │     ├[~] type ColumnIdentifier
│    │     │ └ properties
│    │     │    ├ DataSetIdentifier: - string (required)
│    │     │    │                    + string (default="")
│    │     │    └[+] TopicIdentifier: string
│    │     ├[~] type ComboChartConfiguration
│    │     │ └ properties
│    │     │    ├[+] DefaultSeriesSettings: ComboChartDefaultSeriesSettings
│    │     │    └[+] Series: Array<ComboSeriesItem>
│    │     ├[+]  type ComboChartDefaultSeriesSettings
│    │     │  ├      name: ComboChartDefaultSeriesSettings
│    │     │  └ properties
│    │     │     ├ BorderSettings: BorderSettings
│    │     │     ├ DecalSettings: DecalSettings
│    │     │     ├ LineStyleSettings: LineChartLineStyleSettings
│    │     │     └ MarkerStyleSettings: LineChartMarkerStyleSettings
│    │     ├[+]  type ComboSeriesItem
│    │     │  └      name: ComboSeriesItem
│    │     ├[~] type CustomContentVisual
│    │     │ └ properties
│    │     │    ├ DataSetIdentifier: - string (required)
│    │     │    │                    + string (default="")
│    │     │    └[+] TopicIdentifier: string
│    │     ├[+]  type DecalSettings
│    │     │  ├      name: DecalSettings
│    │     │  └ properties
│    │     │     ├ DecalStyleType: string<Manual|Auto>
│    │     │     ├ DecalColor: string
│    │     │     ├ DecalVisibility: string<HIDDEN|VISIBLE>
│    │     │     ├ DecalPatternType: string<SOLID|DIAGONAL_MEDIUM|CIRCLE_MEDIUM|DIAMOND_GRID_MEDIUM|CHECKERBOARD_MEDIUM|TRIANGLE_MEDIUM|DIAGONAL_OPPOSITE_MEDIUM|DIAMOND_MEDIUM|DIAGONAL_LARGE|CIRCLE_LARGE|DIAMOND_GRID_LARGE|CHECKERBOARD_LARGE|TRIANGLE_LARGE|DIAGONAL_OPPOSITE_LARGE|DIAMOND_LARGE|DIAGONAL_SMALL|CIRCLE_SMALL|DIAMOND_GRID_SMALL|CHECKERBOARD_SMALL|TRIANGLE_SMALL|DIAGONAL_OPPOSITE_SMALL|DIAMOND_SMALL>
│    │     │     └ ElementValue: string
│    │     ├[+]  type DecalSettingsConfiguration
│    │     │  ├      name: DecalSettingsConfiguration
│    │     │  └ properties
│    │     │     └ CustomDecalSettings: Array<DecalSettings>
│    │     ├[~] type EmptyVisual
│    │     │ └ properties
│    │     │    ├ DataSetIdentifier: - string (required)
│    │     │    │                    + string (default="")
│    │     │    └[+] TopicIdentifier: string
│    │     ├[~] type FreeFormLayoutConfiguration
│    │     │ └ properties
│    │     │    └[+] Groups: Array<SheetLayoutGroup>
│    │     ├[+]  type GeospatialCategoricalColor
│    │     │  ├      name: GeospatialCategoricalColor
│    │     │  └ properties
│    │     │     ├ CategoryDataColors: Array<GeospatialCategoricalDataColor> (required)
│    │     │     ├ DefaultOpacity: number
│    │     │     ├ NullDataVisibility: string<HIDDEN|VISIBLE>
│    │     │     └ NullDataSettings: GeospatialNullDataSettings
│    │     ├[+]  type GeospatialCategoricalDataColor
│    │     │  ├      name: GeospatialCategoricalDataColor
│    │     │  └ properties
│    │     │     ├ DataValue: string (required)
│    │     │     └ Color: string (required)
│    │     ├[+]  type GeospatialCircleRadius
│    │     │  ├      name: GeospatialCircleRadius
│    │     │  └ properties
│    │     │     └ Radius: number
│    │     ├[+]  type GeospatialCircleSymbolStyle
│    │     │  ├      name: GeospatialCircleSymbolStyle
│    │     │  └ properties
│    │     │     ├ FillColor: GeospatialColor
│    │     │     ├ StrokeWidth: GeospatialLineWidth
│    │     │     ├ StrokeColor: GeospatialColor
│    │     │     └ CircleRadius: GeospatialCircleRadius
│    │     ├[+]  type GeospatialColor
│    │     │  ├      name: GeospatialColor
│    │     │  └ properties
│    │     │     ├ Gradient: GeospatialGradientColor
│    │     │     ├ Categorical: GeospatialCategoricalColor
│    │     │     └ Solid: GeospatialSolidColor
│    │     ├[+]  type GeospatialDataSourceItem
│    │     │  ├      name: GeospatialDataSourceItem
│    │     │  └ properties
│    │     │     └ StaticFileDataSource: GeospatialStaticFileSource
│    │     ├[+]  type GeospatialGradientColor
│    │     │  ├      name: GeospatialGradientColor
│    │     │  └ properties
│    │     │     ├ DefaultOpacity: number
│    │     │     ├ StepColors: Array<GeospatialGradientStepColor> (required)
│    │     │     ├ NullDataVisibility: string<HIDDEN|VISIBLE>
│    │     │     └ NullDataSettings: GeospatialNullDataSettings
│    │     ├[+]  type GeospatialGradientStepColor
│    │     │  ├      name: GeospatialGradientStepColor
│    │     │  └ properties
│    │     │     ├ DataValue: number (required, default=0)
│    │     │     └ Color: string (required)
│    │     ├[+]  type GeospatialLayerColorField
│    │     │  ├      name: GeospatialLayerColorField
│    │     │  └ properties
│    │     │     ├ ColorValuesFields: Array<MeasureField>
│    │     │     └ ColorDimensionsFields: Array<DimensionField>
│    │     ├[+]  type GeospatialLayerDefinition
│    │     │  ├      name: GeospatialLayerDefinition
│    │     │  └ properties
│    │     │     ├ PointLayer: GeospatialPointLayer
│    │     │     ├ PolygonLayer: GeospatialPolygonLayer
│    │     │     └ LineLayer: GeospatialLineLayer
│    │     ├[+]  type GeospatialLayerItem
│    │     │  ├      name: GeospatialLayerItem
│    │     │  └ properties
│    │     │     ├ LayerId: string (required)
│    │     │     ├ JoinDefinition: GeospatialLayerJoinDefinition
│    │     │     ├ Actions: Array<LayerCustomAction>
│    │     │     ├ LayerType: string<POINT|LINE|POLYGON>
│    │     │     ├ LayerDefinition: GeospatialLayerDefinition
│    │     │     ├ Tooltip: TooltipOptions
│    │     │     ├ Label: string
│    │     │     ├ Visibility: string<HIDDEN|VISIBLE>
│    │     │     └ DataSource: GeospatialDataSourceItem
│    │     ├[+]  type GeospatialLayerJoinDefinition
│    │     │  ├      name: GeospatialLayerJoinDefinition
│    │     │  └ properties
│    │     │     ├ ColorField: GeospatialLayerColorField
│    │     │     ├ ShapeKeyField: string
│    │     │     └ DatasetKeyField: UnaggregatedField
│    │     ├[+]  type GeospatialLayerMapConfiguration
│    │     │  ├      name: GeospatialLayerMapConfiguration
│    │     │  └ properties
│    │     │     ├ Legend: LegendOptions
│    │     │     ├ MapState: GeospatialMapState
│    │     │     ├ MapStyle: GeospatialMapStyle
│    │     │     ├ Interactions: VisualInteractionOptions
│    │     │     └ MapLayers: Array<GeospatialLayerItem>
│    │     ├[+]  type GeospatialLineLayer
│    │     │  ├      name: GeospatialLineLayer
│    │     │  └ properties
│    │     │     └ Style: GeospatialLineStyle (required)
│    │     ├[+]  type GeospatialLineStyle
│    │     │  ├      name: GeospatialLineStyle
│    │     │  └ properties
│    │     │     └ LineSymbolStyle: GeospatialLineSymbolStyle
│    │     ├[+]  type GeospatialLineSymbolStyle
│    │     │  ├      name: GeospatialLineSymbolStyle
│    │     │  └ properties
│    │     │     ├ FillColor: GeospatialColor
│    │     │     └ LineWidth: GeospatialLineWidth
│    │     ├[+]  type GeospatialLineWidth
│    │     │  ├      name: GeospatialLineWidth
│    │     │  └ properties
│    │     │     └ LineWidth: number
│    │     ├[~] type GeospatialMapConfiguration
│    │     │ └ properties
│    │     │    └[+] Interactions: VisualInteractionOptions
│    │     ├[+]  type GeospatialMapState
│    │     │  ├      name: GeospatialMapState
│    │     │  └ properties
│    │     │     ├ Bounds: GeospatialCoordinateBounds
│    │     │     └ MapNavigation: string<ENABLED|DISABLED>
│    │     ├[+]  type GeospatialMapStyle
│    │     │  ├      name: GeospatialMapStyle
│    │     │  └ properties
│    │     │     ├ BaseMapStyle: string<LIGHT_GRAY|DARK_GRAY|STREET|IMAGERY>
│    │     │     ├ BaseMapVisibility: string<HIDDEN|VISIBLE>
│    │     │     └ BackgroundColor: string
│    │     ├[+]  type GeospatialNullDataSettings
│    │     │  ├      name: GeospatialNullDataSettings
│    │     │  └ properties
│    │     │     └ SymbolStyle: GeospatialNullSymbolStyle (required)
│    │     ├[+]  type GeospatialNullSymbolStyle
│    │     │  ├      name: GeospatialNullSymbolStyle
│    │     │  └ properties
│    │     │     ├ FillColor: string
│    │     │     ├ StrokeWidth: number
│    │     │     └ StrokeColor: string
│    │     ├[+]  type GeospatialPointLayer
│    │     │  ├      name: GeospatialPointLayer
│    │     │  └ properties
│    │     │     └ Style: GeospatialPointStyle (required)
│    │     ├[+]  type GeospatialPointStyle
│    │     │  ├      name: GeospatialPointStyle
│    │     │  └ properties
│    │     │     └ CircleSymbolStyle: GeospatialCircleSymbolStyle
│    │     ├[+]  type GeospatialPolygonLayer
│    │     │  ├      name: GeospatialPolygonLayer
│    │     │  └ properties
│    │     │     └ Style: GeospatialPolygonStyle (required)
│    │     ├[+]  type GeospatialPolygonStyle
│    │     │  ├      name: GeospatialPolygonStyle
│    │     │  └ properties
│    │     │     └ PolygonSymbolStyle: GeospatialPolygonSymbolStyle
│    │     ├[+]  type GeospatialPolygonSymbolStyle
│    │     │  ├      name: GeospatialPolygonSymbolStyle
│    │     │  └ properties
│    │     │     ├ FillColor: GeospatialColor
│    │     │     ├ StrokeWidth: GeospatialLineWidth
│    │     │     └ StrokeColor: GeospatialColor
│    │     ├[+]  type GeospatialSolidColor
│    │     │  ├      documentation: Describes the properties for a solid color
│    │     │  │      name: GeospatialSolidColor
│    │     │  └ properties
│    │     │     ├ State: string<ENABLED|DISABLED>
│    │     │     └ Color: string (required)
│    │     ├[+]  type GeospatialStaticFileSource
│    │     │  ├      name: GeospatialStaticFileSource
│    │     │  └ properties
│    │     │     └ StaticFileId: string (required)
│    │     ├[~] type GridLayoutElement
│    │     │ └ properties
│    │     │    ├[+] BackgroundStyle: GridLayoutElementBackgroundStyle
│    │     │    ├[+] BorderRadius: string
│    │     │    ├[+] BorderStyle: GridLayoutElementBorderStyle
│    │     │    ├[+] LoadingAnimation: LoadingAnimation
│    │     │    ├[+] Padding: string
│    │     │    └[+] SelectedBorderStyle: GridLayoutElementBorderStyle
│    │     ├[+]  type GridLayoutElementBackgroundStyle
│    │     │  ├      name: GridLayoutElementBackgroundStyle
│    │     │  └ properties
│    │     │     ├ Color: string
│    │     │     └ Visibility: string<HIDDEN|VISIBLE>
│    │     ├[+]  type GridLayoutElementBorderStyle
│    │     │  ├      name: GridLayoutElementBorderStyle
│    │     │  └ properties
│    │     │     ├ Color: string
│    │     │     ├ Visibility: string<HIDDEN|VISIBLE>
│    │     │     └ Width: string
│    │     ├[+]  type ImageStaticFile
│    │     │  ├      name: ImageStaticFile
│    │     │  └ properties
│    │     │     ├ StaticFileId: string (required)
│    │     │     └ Source: StaticFileSource
│    │     ├[~] type InsightVisual
│    │     │ └ properties
│    │     │    ├ DataSetIdentifier: - string (required)
│    │     │    │                    + string (default="")
│    │     │    └[+] TopicIdentifier: string
│    │     ├[+]  type LayerCustomAction
│    │     │  ├      name: LayerCustomAction
│    │     │  └ properties
│    │     │     ├ Status: string<ENABLED|DISABLED>
│    │     │     ├ Trigger: string<DATA_POINT_CLICK|DATA_POINT_MENU> (required)
│    │     │     ├ CustomActionId: string (required)
│    │     │     ├ Name: string (required)
│    │     │     └ ActionOperations: Array<LayerCustomActionOperation> (required)
│    │     ├[+]  type LayerCustomActionOperation
│    │     │  ├      name: LayerCustomActionOperation
│    │     │  └ properties
│    │     │     ├ NavigationOperation: CustomActionNavigationOperation
│    │     │     ├ SetParametersOperation: CustomActionSetParametersOperation
│    │     │     ├ FilterOperation: CustomActionFilterOperation
│    │     │     └ URLOperation: CustomActionURLOperation
│    │     ├[+]  type LayerMapVisual
│    │     │  ├      name: LayerMapVisual
│    │     │  └ properties
│    │     │     ├ Subtitle: VisualSubtitleLabelOptions
│    │     │     ├ VisualId: string (required)
│    │     │     ├ ChartConfiguration: GeospatialLayerMapConfiguration
│    │     │     ├ DataSetIdentifier: string (default="")
│    │     │     ├ Title: VisualTitleLabelOptions
│    │     │     ├ VisualContentAltText: string
│    │     │     └ TopicIdentifier: string
│    │     ├[~] type LineChartDefaultSeriesSettings
│    │     │ └ properties
│    │     │    └[+] DecalSettings: DecalSettings
│    │     ├[~] type LineChartSeriesSettings
│    │     │ └ properties
│    │     │    └[+] DecalSettings: DecalSettings
│    │     ├[+]  type SheetLayoutGroup
│    │     │  ├      name: SheetLayoutGroup
│    │     │  └ properties
│    │     │     ├ Id: string (required)
│    │     │     └ Members: Array<SheetLayoutGroupMember> (required)
│    │     ├[+]  type SheetLayoutGroupMember
│    │     │  ├      name: SheetLayoutGroupMember
│    │     │  └ properties
│    │     │     ├ Type: json (required)
│    │     │     └ Id: string (required)
│    │     ├[+]  type SparklinesOptions
│    │     │  ├      name: SparklinesOptions
│    │     │  └ properties
│    │     │     ├ LineInterpolation: string<LINEAR|SMOOTH|STEPPED>
│    │     │     ├ MaxValueMarker: LineChartMarkerStyleSettings
│    │     │     ├ XAxisField: DimensionField (required)
│    │     │     ├ AllPointsMarker: LineChartMarkerStyleSettings
│    │     │     ├ MinValueMarker: LineChartMarkerStyleSettings
│    │     │     ├ FieldId: string (required)
│    │     │     ├ VisualType: string<LINE|AREA_LINE>
│    │     │     ├ LineColor: string
│    │     │     └ YAxisBehavior: string<SHARED|INDEPENDENT>
│    │     ├[+]  type SpatialStaticFile
│    │     │  ├      name: SpatialStaticFile
│    │     │  └ properties
│    │     │     ├ StaticFileId: string (required)
│    │     │     └ Source: StaticFileSource
│    │     ├[+]  type StaticFile
│    │     │  ├      name: StaticFile
│    │     │  └ properties
│    │     │     ├ ImageStaticFile: ImageStaticFile
│    │     │     └ SpatialStaticFile: SpatialStaticFile
│    │     ├[+]  type StaticFileS3SourceOptions
│    │     │  ├      name: StaticFileS3SourceOptions
│    │     │  └ properties
│    │     │     ├ BucketName: string (required)
│    │     │     ├ ObjectKey: string (required)
│    │     │     └ Region: string (required)
│    │     ├[+]  type StaticFileSource
│    │     │  ├      name: StaticFileSource
│    │     │  └ properties
│    │     │     ├ UrlOptions: StaticFileUrlSourceOptions
│    │     │     └ S3Options: StaticFileS3SourceOptions
│    │     ├[+]  type StaticFileUrlSourceOptions
│    │     │  ├      name: StaticFileUrlSourceOptions
│    │     │  └ properties
│    │     │     └ Url: string (required)
│    │     ├[~] type TableInlineVisualization
│    │     │ └ properties
│    │     │    └[+] Sparklines: SparklinesOptions
│    │     ├[~] type TemplateSourceAnalysis
│    │     │ └ properties
│    │     │    └[+] TopicReferences: Array<TopicReference>
│    │     ├[~] type TemplateVersionDefinition
│    │     │ └ properties
│    │     │    ├[+] StaticFiles: Array<StaticFile>
│    │     │    └[+] TopicConfigurations: Array<TopicConfiguration>
│    │     ├[~] type TooltipOptions
│    │     │ └ properties
│    │     │    └ SelectedTooltipType: - string<BASIC|DETAILED>
│    │     │                           + string<BASIC|DETAILED|SHEET>
│    │     ├[+]  type TopicConfiguration
│    │     │  ├      name: TopicConfiguration
│    │     │  └ properties
│    │     │     ├ Placeholder: string
│    │     │     ├ DataSetSchema: DataSetSchema
│    │     │     └ ColumnGroupSchemaList: Array<ColumnGroupSchema>
│    │     ├[+]  type TopicReference
│    │     │  ├      name: TopicReference
│    │     │  └ properties
│    │     │     ├ TopicArn: string (required)
│    │     │     └ TopicPlaceholder: string (required)
│    │     └[~] type Visual
│    │       └ properties
│    │          └[+] LayerMapVisual: LayerMapVisual
│    └[~]  resource AWS::QuickSight::Theme
│       └ types
│          ├[~] type BorderStyle
│          │ └ properties
│          │    ├[+] Color: string
│          │    └[+] Width: string
│          ├[+]  type FontConfiguration
│          │  ├      name: FontConfiguration
│          │  └ properties
│          │     ├ FontSize: FontSize
│          │     ├ FontDecoration: string<UNDERLINE|NONE>
│          │     ├ FontColor: string
│          │     ├ FontWeight: FontWeight
│          │     ├ FontStyle: string<NORMAL|ITALIC>
│          │     └ FontFamily: string
│          ├[+]  type FontSize
│          │  ├      name: FontSize
│          │  └ properties
│          │     └ Absolute: string
│          ├[+]  type FontWeight
│          │  ├      name: FontWeight
│          │  └ properties
│          │     └ Name: string<NORMAL|BOLD>
│          ├[+]  type SheetBackgroundStyle
│          │  ├      name: SheetBackgroundStyle
│          │  └ properties
│          │     ├ Color: string
│          │     └ Gradient: string
│          ├[~] type SheetStyle
│          │ └ properties
│          │    └[+] Background: SheetBackgroundStyle
│          ├[~] type TileStyle
│          │ └ properties
│          │    ├[+] BackgroundColor: string
│          │    ├[+] BorderRadius: string
│          │    └[+] Padding: string
│          ├[~] type Typography
│          │ └ properties
│          │    ├[+] AxisLabelFontConfiguration: FontConfiguration
│          │    ├[+] AxisTitleFontConfiguration: FontConfiguration
│          │    ├[+] DataLabelFontConfiguration: FontConfiguration
│          │    ├[+] LegendTitleFontConfiguration: FontConfiguration
│          │    ├[+] LegendValueFontConfiguration: FontConfiguration
│          │    ├[+] VisualSubtitleFontConfiguration: VisualSubtitleFontConfiguration
│          │    └[+] VisualTitleFontConfiguration: VisualTitleFontConfiguration
│          ├[+]  type VisualSubtitleFontConfiguration
│          │  ├      name: VisualSubtitleFontConfiguration
│          │  └ properties
│          │     ├ FontConfiguration: FontConfiguration
│          │     ├ TextAlignment: string<LEFT|CENTER|RIGHT|AUTO>
│          │     └ TextTransform: string<CAPITALIZE>
│          └[+]  type VisualTitleFontConfiguration
│             ├      name: VisualTitleFontConfiguration
│             └ properties
│                ├ FontConfiguration: FontConfiguration
│                ├ TextAlignment: string<LEFT|CENTER|RIGHT|AUTO>
│                └ TextTransform: string<CAPITALIZE>
├[~] service aws-redshift
│ └ resources
│    ├[+]  resource AWS::Redshift::QEV2IdcApplication
│    │  ├      name: QEV2IdcApplication
│    │  │      cloudFormationType: AWS::Redshift::QEV2IdcApplication
│    │  │      documentation: Creates an Amazon Redshift Query Editor (QEV2) IAM Identity Center application.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:redshift:${Region}:${Account}:qev2idcapplication:${Qev2IdcApplicationId}
│    │  │      primaryIdentifier: ["Qev2IdcApplicationArn"]
│    │  ├ properties
│    │  │  ├ IdcInstanceArn: string (required, immutable)
│    │  │  ├ Qev2IdcApplicationName: string (required, immutable)
│    │  │  ├ IdcDisplayName: string (required)
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ Qev2IdcApplicationArn: string
│    │     ├ IdcManagedApplicationArn: string
│    │     └ IdcOnboardStatus: string
│    ├[+]  resource AWS::Redshift::Snapshot
│    │  ├      name: Snapshot
│    │  │      cloudFormationType: AWS::Redshift::Snapshot
│    │  │      documentation: Resource Type definition for AWS::Redshift::Snapshot. Creates a manual snapshot of the specified cluster. The cluster must be in the available state.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["SnapshotArn"]
│    │  ├ properties
│    │  │  ├ SnapshotIdentifier: string (required, immutable)
│    │  │  ├ ClusterIdentifier: string (required, immutable)
│    │  │  ├ ManualSnapshotRetentionPeriod: integer
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ SnapshotArn: string
│    │     ├ Status: string
│    │     ├ SnapshotType: string
│    │     ├ AvailabilityZone: string
│    │     ├ ClusterCreateTime: string
│    │     ├ MasterUsername: string
│    │     ├ ClusterVersion: string
│    │     ├ EngineFullVersion: string
│    │     ├ SnapshotCreateTime: string
│    │     ├ NodeType: string
│    │     ├ NumberOfNodes: integer
│    │     ├ DBName: string
│    │     ├ Port: integer
│    │     ├ VpcId: string
│    │     ├ Encrypted: boolean
│    │     ├ EncryptedWithHSM: boolean
│    │     ├ KmsKeyId: string
│    │     ├ EnhancedVpcRouting: boolean
│    │     ├ MaintenanceTrackName: string
│    │     └ OwnerAccount: string
│    ├[+]  resource AWS::Redshift::SnapshotCopyGrant
│    │  ├      name: SnapshotCopyGrant
│    │  │      cloudFormationType: AWS::Redshift::SnapshotCopyGrant
│    │  │      documentation: Creates a snapshot copy grant that permits Amazon Redshift to use an encrypted symmetric key from AWS Key Management Service (KMS) to encrypt copied snapshots in a destination region.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:redshift:${Region}:${Account}:snapshotcopygrant:${SnapshotCopyGrantName}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ SnapshotCopyGrantName: string (required, immutable)
│    │  │  ├ KmsKeyId: string (immutable)
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     └ Arn: string
│    └[+]  resource AWS::Redshift::UsageLimit
│       ├      name: UsageLimit
│       │      cloudFormationType: AWS::Redshift::UsageLimit
│       │      documentation: Resource Type definition for AWS::Redshift::UsageLimit. Creates a usage limit for a specified Amazon Redshift feature on a cluster. The usage limit is identified by the returned usage limit identifier.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:redshift:${Region}:${Account}:usagelimit:${UsageLimitId}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ ClusterIdentifier: string (required, immutable)
│       │  ├ FeatureType: string<spectrum|concurrency-scaling|cross-region-datasharing|extra-compute-for-automatic-optimization> (required, immutable)
│       │  ├ LimitType: string<time|data-scanned> (required, immutable)
│       │  ├ Amount: number (required)
│       │  ├ Period: string<daily|weekly|monthly> (immutable)
│       │  ├ BreachAction: string<log|emit-metric|disable>
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ Arn: string
│          └ UsageLimitId: string
├[~] service aws-resiliencehubv2
│ └ resources
│    ├[~]  resource AWS::ResilienceHubV2::Policy
│    │  └ properties
│    │     └[+] SharingEnabled: boolean (default=false)
│    └[~]  resource AWS::ResilienceHubV2::Service
│       └ types
│          ├[+]  type EksLabelSelector
│          │  ├      documentation: Kubernetes label selector that scopes discovery to matching objects in the specified namespaces. An object must satisfy both MatchLabels and MatchExpressions. Specify at least one of them; a selector carrying neither is treated as though no selector were supplied, and all supported objects in the specified namespaces are discovered.
│          │  │      name: EksLabelSelector
│          │  └ properties
│          │     ├ MatchLabels: Map<string, string>
│          │     └ MatchExpressions: Array<EksLabelSelectorRequirement>
│          ├[+]  type EksLabelSelectorRequirement
│          │  ├      documentation: A single label selector requirement. Specify Values when Operator is IN or NOT_IN, and omit Values when Operator is EXISTS or DOES_NOT_EXIST.
│          │  │      name: EksLabelSelectorRequirement
│          │  └ properties
│          │     ├ Key: string (required)
│          │     ├ Operator: string<IN|NOT_IN|EXISTS|DOES_NOT_EXIST> (required)
│          │     └ Values: Array<string>
│          └[~] type EksSource
│            └ properties
│               └[+] LabelSelector: EksLabelSelector
├[~] service aws-route53
│ └ resources
│    ├[+]  resource AWS::Route53::DelegationSet
│    │  ├      name: DelegationSet
│    │  │      cloudFormationType: AWS::Route53::DelegationSet
│    │  │      documentation: Resource Type definition for AWS::Route53::DelegationSet. Creates a reusable delegation set (a group of four name servers) that can be associated with multiple hosted zones.
│    │  │      primaryIdentifier: ["Arn"]
│    │  └ attributes
│    │     ├ Arn: string
│    │     ├ Id: string
│    │     ├ CallerReference: string
│    │     └ NameServers: Array<string>
│    ├[+]  resource AWS::Route53::QueryLoggingConfig
│    │  ├      name: QueryLoggingConfig
│    │  │      cloudFormationType: AWS::Route53::QueryLoggingConfig
│    │  │      documentation: Resource Type definition for AWS::Route53::QueryLoggingConfig. Creates a configuration for DNS query logging, which publishes query logs for a public hosted zone to an Amazon CloudWatch Logs log group.
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ HostedZoneId: string (required, immutable)
│    │  │  └ CloudWatchLogsLogGroupArn: string (required, immutable)
│    │  └ attributes
│    │     ├ Arn: string
│    │     └ Id: string
│    ├[+]  resource AWS::Route53::TrafficPolicy
│    │  ├      name: TrafficPolicy
│    │  │      cloudFormationType: AWS::Route53::TrafficPolicy
│    │  │      documentation: Resource Type definition for AWS::Route53::TrafficPolicy. Creates a Route 53 traffic policy, a JSON document that describes how Route 53 responds to DNS queries for a domain name.
│    │  │      arnTemplate: arn:${Partition}:route53:::trafficpolicy/${Id}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ Name: string (required, immutable)
│    │  │  ├ Document: string (required, immutable)
│    │  │  └ Comment: string
│    │  └ attributes
│    │     ├ Arn: string
│    │     ├ Id: string
│    │     ├ Version: integer
│    │     └ Type: string<SOA|A|TXT|NS|CNAME|MX|NAPTR|PTR|SRV|SPF|AAAA|CAA|DS|TLSA|SSHFP|SVCB|HTTPS>
│    └[+]  resource AWS::Route53::TrafficPolicyInstance
│       ├      name: TrafficPolicyInstance
│       │      cloudFormationType: AWS::Route53::TrafficPolicyInstance
│       │      documentation: Resource Type definition for AWS::Route53::TrafficPolicyInstance. Applies a version of a Route 53 traffic policy to a DNS name in a public hosted zone, and Route 53 creates and owns the resource record sets that answer queries for that name.
│       │      arnTemplate: arn:${Partition}:route53:::trafficpolicyinstance/${Id}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ HostedZoneId: string (required, immutable)
│       │  ├ Name: string (required, immutable)
│       │  ├ TTL: integer (required)
│       │  ├ TrafficPolicyId: string (required)
│       │  └ TrafficPolicyVersion: integer (required)
│       └ attributes
│          ├ Arn: string
│          ├ Id: string
│          ├ State: string
│          └ TrafficPolicyType: string<SOA|A|TXT|NS|CNAME|MX|NAPTR|PTR|SRV|SPF|AAAA|CAA|DS|TLSA|SSHFP|SVCB|HTTPS>
├[~] service aws-s3
│ └ resources
│    └[~]  resource AWS::S3::Bucket
│       └ types
│          ├[+]  type DefaultEventHold
│          │  ├      name: DefaultEventHold
│          │  └ properties
│          │     ├ Years: integer
│          │     └ Days: integer
│          └[~] type DefaultRetention
│            └ properties
│               └[+] DefaultEventHold: DefaultEventHold
├[~] service aws-sagemaker
│ └ resources
│    ├[+]  resource AWS::SageMaker::AIWorkloadConfig
│    │  ├      name: AIWorkloadConfig
│    │  │      cloudFormationType: AWS::SageMaker::AIWorkloadConfig
│    │  │      documentation: Resource Type definition for AWS::SageMaker::AIWorkloadConfig. A reusable AI workload configuration that defines datasets, data sources and benchmark tool settings for consistent performance testing of generative AI inference deployments on Amazon SageMaker AI.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:sagemaker:${Region}:${Account}:ai-workload-config/${AIWorkloadConfigName}
│    │  │      primaryIdentifier: ["AIWorkloadConfigArn"]
│    │  ├ properties
│    │  │  ├ AIWorkloadConfigName: string (required, immutable)
│    │  │  ├ DatasetConfig: AIDatasetConfig (immutable)
│    │  │  ├ AIWorkloadConfigs: AIWorkloadConfigs (immutable)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ AIWorkloadConfigArn: string
│    │  │  └ CreationTime: string
│    │  └ types
│    │     ├ type AIDatasetConfig
│    │     │ ├      documentation: The dataset configuration for an AI workload.
│    │     │ │      name: AIDatasetConfig
│    │     │ └ properties
│    │     │    └ InputDataConfig: Array<AIWorkloadInputDataConfig> (required)
│    │     ├ type AIWorkloadConfigs
│    │     │ ├      documentation: The benchmark tool configuration for an AI workload.
│    │     │ │      name: AIWorkloadConfigs
│    │     │ └ properties
│    │     │    └ WorkloadSpec: WorkloadSpec (required)
│    │     ├ type AIWorkloadDataSource
│    │     │ ├      documentation: The data source for an AI workload input data channel.
│    │     │ │      name: AIWorkloadDataSource
│    │     │ └ properties
│    │     │    └ S3DataSource: AIWorkloadS3DataSource
│    │     ├ type AIWorkloadInputDataConfig
│    │     │ ├      documentation: A channel of input data for an AI workload configuration.
│    │     │ │      name: AIWorkloadInputDataConfig
│    │     │ └ properties
│    │     │    ├ ChannelName: string (required)
│    │     │    └ DataSource: AIWorkloadDataSource (required)
│    │     ├ type AIWorkloadS3DataSource
│    │     │ ├      documentation: The Amazon S3 data source for an AI workload.
│    │     │ │      name: AIWorkloadS3DataSource
│    │     │ └ properties
│    │     │    └ S3Uri: string (required)
│    │     └ type WorkloadSpec
│    │       ├      documentation: The workload specification for benchmark tool configuration.
│    │       │      name: WorkloadSpec
│    │       └ properties
│    │          └ Inline: string (required)
│    ├[+]  resource AWS::SageMaker::ClusterSchedulerConfig
│    │  ├      name: ClusterSchedulerConfig
│    │  │      cloudFormationType: AWS::SageMaker::ClusterSchedulerConfig
│    │  │      documentation: Resource Type definition for AWS::SageMaker::ClusterSchedulerConfig. Cluster policy configuration used for task prioritization and fair-share allocation of idle compute.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["ClusterSchedulerConfigArn"]
│    │  ├ properties
│    │  │  ├ Name: string (required, immutable)
│    │  │  ├ ClusterArn: string (required, immutable)
│    │  │  ├ Description: string
│    │  │  ├ SchedulerConfig: SchedulerConfig (required)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ ClusterSchedulerConfigArn: string
│    │  │  ├ ClusterSchedulerConfigId: string
│    │  │  ├ ClusterSchedulerConfigVersion: integer
│    │  │  ├ Status: string<Creating|CreateFailed|CreateRollbackFailed|Created|Updating|UpdateFailed|UpdateRollbackFailed|Updated|Deleting|DeleteFailed|DeleteRollbackFailed|Deleted>
│    │  │  └ CreationTime: string
│    │  └ types
│    │     ├ type PriorityClass
│    │     │ ├      documentation: Priority class configuration.
│    │     │ │      name: PriorityClass
│    │     │ └ properties
│    │     │    ├ Name: string (required)
│    │     │    └ Weight: integer (required)
│    │     └ type SchedulerConfig
│    │       ├      documentation: Cluster policy configuration.
│    │       │      name: SchedulerConfig
│    │       └ properties
│    │          ├ PriorityClasses: Array<PriorityClass>
│    │          ├ FairShare: string<Enabled|Disabled>
│    │          └ IdleResourceSharing: string<Enabled|Disabled>
│    ├[~]  resource AWS::SageMaker::CodeRepository
│    │  ├      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["CodeRepositoryArn"]
│    │  └ attributes
│    │     ├[+] CodeRepositoryArn: string
│    │     └[-] Id: string
│    ├[~]  resource AWS::SageMaker::NotebookInstance
│    │  ├      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["NotebookInstanceArn"]
│    │  └ attributes
│    │     └[-] Id: string
│    ├[~]  resource AWS::SageMaker::NotebookInstanceLifecycleConfig
│    │  ├      - tagInformation: undefined
│    │  │      + tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["NotebookInstanceLifecycleConfigArn"]
│    │  ├ properties
│    │  │  └[+] Tags: Array<tag>
│    │  └ attributes
│    │     ├[-] Id: string
│    │     └[+] NotebookInstanceLifecycleConfigArn: string
│    └[~]  resource AWS::SageMaker::Workteam
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["WorkteamArn"]
│       ├ properties
│       │  ├ Description: - string
│       │  │              + string (required)
│       │  └ MemberDefinitions: - Array<MemberDefinition>
│       │                       + Array<MemberDefinition> (required)
│       ├ attributes
│       │  ├[-] Id: string
│       │  └[+] WorkteamArn: string
│       └ types
│          └[~] type OidcMemberDefinition
│            └ properties
│               └ OidcGroups: (documentation changed)
├[~] service aws-scn
│ └ resources
│    └[+]  resource AWS::SCN::DataIntegrationFlow
│       ├      name: DataIntegrationFlow
│       │      cloudFormationType: AWS::SCN::DataIntegrationFlow
│       │      documentation: Represents an AWS Supply Chain data integration flow.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ InstanceId: string (required, immutable)
│       │  ├ Name: string (required, immutable)
│       │  ├ Sources: Array<DataIntegrationFlowSource> (required)
│       │  ├ Transformation: DataIntegrationFlowTransformation (required)
│       │  ├ Target: DataIntegrationFlowTarget (required)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ CreatedTime: string
│       │  └ LastModifiedTime: string
│       └ types
│          ├ type DataIntegrationFlowSource
│          │ ├      documentation: The DataIntegrationFlow source parameters.
│          │ │      name: DataIntegrationFlowSource
│          │ └ properties
│          │    ├ SourceType: string<S3|DATASET> (required)
│          │    ├ SourceName: string (required)
│          │    ├ S3Source: S3SourceConfiguration
│          │    └ DatasetSource: DatasetSourceConfiguration
│          ├ type DataIntegrationFlowTarget
│          │ ├      documentation: The DataIntegrationFlow target parameters.
│          │ │      name: DataIntegrationFlowTarget
│          │ └ properties
│          │    ├ TargetType: string<DATASET> (required)
│          │    └ DatasetTarget: DatasetTargetConfiguration
│          ├ type DataIntegrationFlowTransformation
│          │ ├      documentation: The DataIntegrationFlow transformation parameters.
│          │ │      name: DataIntegrationFlowTransformation
│          │ └ properties
│          │    ├ TransformationType: string<SQL|NONE> (required)
│          │    └ SqlTransformation: SqlTransformationConfiguration
│          ├ type DatasetOptions
│          │ ├      documentation: The dataset options.
│          │ │      name: DatasetOptions
│          │ └ properties
│          │    ├ LoadType: string<INCREMENTAL|REPLACE>
│          │    ├ DedupeRecords: boolean
│          │    └ DedupeStrategy: DedupeStrategy
│          ├ type DatasetSourceConfiguration
│          │ ├      documentation: The dataset source configuration parameters.
│          │ │      name: DatasetSourceConfiguration
│          │ └ properties
│          │    ├ DatasetIdentifier: string (required)
│          │    └ Options: DatasetOptions
│          ├ type DatasetTargetConfiguration
│          │ ├      documentation: The dataset target configuration parameters.
│          │ │      name: DatasetTargetConfiguration
│          │ └ properties
│          │    ├ DatasetIdentifier: string (required)
│          │    └ Options: DatasetOptions
│          ├ type DedupeStrategy
│          │ ├      documentation: The deduplication strategy.
│          │ │      name: DedupeStrategy
│          │ └ properties
│          │    ├ Type: string<FIELD_PRIORITY> (required)
│          │    └ FieldPriority: FieldPriorityDedupeStrategyConfiguration
│          ├ type FieldPriorityDedupeField
│          │ ├      documentation: A deduplication field.
│          │ │      name: FieldPriorityDedupeField
│          │ └ properties
│          │    ├ Name: string (required)
│          │    └ SortOrder: string<ASC|DESC> (required)
│          ├ type FieldPriorityDedupeStrategyConfiguration
│          │ ├      documentation: The field priority deduplication strategy configuration.
│          │ │      name: FieldPriorityDedupeStrategyConfiguration
│          │ └ properties
│          │    └ Fields: Array<FieldPriorityDedupeField> (required)
│          ├ type S3Options
│          │ ├      documentation: The Amazon S3 options.
│          │ │      name: S3Options
│          │ └ properties
│          │    └ FileType: string<CSV|PARQUET|JSON>
│          ├ type S3SourceConfiguration
│          │ ├      documentation: The S3 source configuration parameters.
│          │ │      name: S3SourceConfiguration
│          │ └ properties
│          │    ├ BucketName: string (required)
│          │    ├ Prefix: string (required)
│          │    └ Options: S3Options
│          └ type SqlTransformationConfiguration
│            ├      documentation: The SQL transformation configuration parameters.
│            │      name: SqlTransformationConfiguration
│            └ properties
│               └ Query: string (required)
├[~] service aws-securityhub
│ └ resources
│    └[~]  resource AWS::SecurityHub::HubV2
│       ├ properties
│       │  └[+] NetworkScanning: NetworkScanning
│       └ types
│          └[+]  type NetworkScanning
│             ├      documentation: Configuration for the Network Scanning opt-in feature of Security Hub V2. Network Scanning is available in the AWS commercial partition only; specifying this property in another partition, such as AWS GovCloud (US) or China, fails. This property is desired state: if you remove it from a stack that previously set it, the feature is disabled. If a stack has never set it, the feature is left as-is, so a stack that does not manage Network Scanning will not disable it. Network Scanning requires Security Hub V2 to be enabled in the same account and Region.
│             │      name: NetworkScanning
│             └ properties
│                └ Status: string<ENABLED|DISABLED> (required)
├[~] service aws-servicediscovery
│ └ resources
│    └[~]  resource AWS::ServiceDiscovery::Instance
│       └      - primaryIdentifier: ["InstanceId"]
│              + primaryIdentifier: ["ServiceId","InstanceId"]
├[~] service aws-ses
│ └ resources
│    └[+]  resource AWS::SES::EmailIdentityCertificate
│       ├      name: EmailIdentityCertificate
│       │      cloudFormationType: AWS::SES::EmailIdentityCertificate
│       │      documentation: Associates an AWS Certificate Manager certificate with a sender under an SES email identity, so that SES signs the sender's mail with S/MIME. Removing this resource removes only the association. The ACM certificate itself stays intact. SES stores the sender lower-cased, and this provider matches senders case-insensitively and preserves the casing from the template.
│       │      primaryIdentifier: ["EmailIdentity","FromAddress"]
│       └ properties
│          ├ EmailIdentity: string (required, immutable)
│          ├ FromAddress: string (required, immutable)
│          └ CertificateArn: string (required, immutable)
├[~] service aws-smsvoice
│ └ resources
│    ├[+]  resource AWS::SMSVOICE::RegistrationAttachment
│    │  ├      name: RegistrationAttachment
│    │  │      cloudFormationType: AWS::SMSVOICE::RegistrationAttachment
│    │  │      documentation: Resource Type definition for AWS::SMSVOICE::RegistrationAttachment
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["RegistrationAttachmentArn"]
│    │  ├ properties
│    │  │  ├ AttachmentBody: string (immutable)
│    │  │  ├ AttachmentUrl: string (immutable)
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ RegistrationAttachmentArn: string
│    │     ├ RegistrationAttachmentId: string
│    │     ├ AttachmentStatus: string<UPLOAD_IN_PROGRESS|UPLOAD_COMPLETE|UPLOAD_FAILED|DELETED>
│    │     ├ CreatedTimestamp: string
│    │     └ UploadedAttachmentUrl: string
│    └[+]  resource AWS::SMSVOICE::VerifiedDestinationNumber
│       ├      name: VerifiedDestinationNumber
│       │      cloudFormationType: AWS::SMSVOICE::VerifiedDestinationNumber
│       │      documentation: A destination phone number that has been registered for verification with AWS End User Messaging SMS. A newly created number is in PENDING status; it becomes VERIFIED only after the recipient supplies the one-time code out of band.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["VerifiedDestinationNumberArn"]
│       ├ properties
│       │  ├ DestinationPhoneNumber: string (required, immutable)
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ VerifiedDestinationNumberArn: string
│          ├ VerifiedDestinationNumberId: string
│          ├ Status: string<PENDING|VERIFIED|UNSUPPORTED>
│          └ CreatedTimestamp: string
├[~] service aws-sns
│ └ resources
│    └[~]  resource AWS::SNS::Topic
│       └ properties
│          └[+] MaximumMessageSize: integer
├[~] service aws-storagegateway
│ └ resources
│    ├[+]  resource AWS::StorageGateway::Tape
│    │  ├      name: Tape
│    │  │      cloudFormationType: AWS::StorageGateway::Tape
│    │  │      documentation: Creates a virtual tape with a user-defined barcode on a Tape Gateway (VTL). A virtual tape is stored in Amazon S3 and can be archived to S3 Glacier or S3 Glacier Deep Archive.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:storagegateway:${Region}:${Account}:tape/${TapeBarcode}
│    │  │      primaryIdentifier: ["TapeARN"]
│    │  ├ properties
│    │  │  ├ GatewayARN: string (required, immutable)
│    │  │  ├ TapeBarcode: string (immutable)
│    │  │  ├ TapeSizeInBytes: number (required, immutable)
│    │  │  ├ KMSEncrypted: boolean (immutable)
│    │  │  ├ KMSKey: string (immutable)
│    │  │  ├ PoolId: string (immutable)
│    │  │  ├ Worm: boolean (immutable)
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ TapeARN: string
│    │     ├ TapeStatus: string
│    │     ├ TapeCreatedDate: string
│    │     └ TapeUsedInBytes: number
│    └[+]  resource AWS::StorageGateway::Volume
│       ├      name: Volume
│       │      cloudFormationType: AWS::StorageGateway::Volume
│       │      documentation: Creates a cached iSCSI volume on a Storage Gateway. A cached volume stores data in Amazon S3 and retains a copy of frequently accessed data subsets locally.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["VolumeARN"]
│       ├ properties
│       │  ├ GatewayARN: string (required, immutable)
│       │  ├ TargetName: string (required, immutable)
│       │  ├ NetworkInterfaceId: string (required, immutable)
│       │  ├ VolumeSizeInBytes: number (required, immutable)
│       │  ├ SnapshotId: string (immutable)
│       │  ├ SourceVolumeARN: string (immutable)
│       │  ├ KMSEncrypted: boolean (immutable)
│       │  ├ KMSKey: string (immutable)
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ VolumeARN: string
│          ├ VolumeId: string
│          ├ TargetARN: string
│          ├ VolumeStatus: string
│          ├ VolumeAttachmentStatus: string
│          ├ VolumeType: string
│          ├ VolumeUsedInBytes: number
│          └ CreatedDate: string
├[~] service aws-transcribe
│ └ resources
│    ├[+]  resource AWS::Transcribe::CallAnalyticsCategory
│    │  ├      name: CallAnalyticsCategory
│    │  │      cloudFormationType: AWS::Transcribe::CallAnalyticsCategory
│    │  │      documentation: Resource type definition for AWS::Transcribe::CallAnalyticsCategory
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:transcribe:${Region}:${Account}:analytics-category/${CategoryName}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ CategoryName: string (required, immutable)
│    │  │  ├ Rules: Array<Rule> (required)
│    │  │  ├ InputType: string<REAL_TIME|POST_CALL> (immutable)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  ├ CreateTime: string
│    │  │  └ LastUpdateTime: string
│    │  └ types
│    │     ├ type AbsoluteTimeRange
│    │     │ ├      name: AbsoluteTimeRange
│    │     │ └ properties
│    │     │    ├ StartTime: integer
│    │     │    ├ EndTime: integer
│    │     │    ├ First: integer
│    │     │    └ Last: integer
│    │     ├ type InterruptionFilter
│    │     │ ├      name: InterruptionFilter
│    │     │ └ properties
│    │     │    ├ Threshold: integer
│    │     │    ├ ParticipantRole: string<AGENT|CUSTOMER>
│    │     │    ├ AbsoluteTimeRange: AbsoluteTimeRange
│    │     │    ├ RelativeTimeRange: RelativeTimeRange
│    │     │    └ Negate: boolean
│    │     ├ type NonTalkTimeFilter
│    │     │ ├      name: NonTalkTimeFilter
│    │     │ └ properties
│    │     │    ├ Threshold: integer
│    │     │    ├ AbsoluteTimeRange: AbsoluteTimeRange
│    │     │    ├ RelativeTimeRange: RelativeTimeRange
│    │     │    └ Negate: boolean
│    │     ├ type RelativeTimeRange
│    │     │ ├      name: RelativeTimeRange
│    │     │ └ properties
│    │     │    ├ StartPercentage: integer
│    │     │    ├ EndPercentage: integer
│    │     │    ├ First: integer
│    │     │    └ Last: integer
│    │     ├ type Rule
│    │     │ ├      name: Rule
│    │     │ └ properties
│    │     │    ├ NonTalkTimeFilter: NonTalkTimeFilter
│    │     │    ├ InterruptionFilter: InterruptionFilter
│    │     │    ├ TranscriptFilter: TranscriptFilter
│    │     │    └ SentimentFilter: SentimentFilter
│    │     ├ type SentimentFilter
│    │     │ ├      name: SentimentFilter
│    │     │ └ properties
│    │     │    ├ Sentiments: Array<string<POSITIVE|NEGATIVE|NEUTRAL|MIXED>> (required)
│    │     │    ├ AbsoluteTimeRange: AbsoluteTimeRange
│    │     │    ├ RelativeTimeRange: RelativeTimeRange
│    │     │    ├ ParticipantRole: string<AGENT|CUSTOMER>
│    │     │    └ Negate: boolean
│    │     └ type TranscriptFilter
│    │       ├      name: TranscriptFilter
│    │       └ properties
│    │          ├ TranscriptFilterType: string<EXACT> (required)
│    │          ├ AbsoluteTimeRange: AbsoluteTimeRange
│    │          ├ RelativeTimeRange: RelativeTimeRange
│    │          ├ ParticipantRole: string<AGENT|CUSTOMER>
│    │          ├ Negate: boolean
│    │          └ Targets: Array<string> (required)
│    ├[+]  resource AWS::Transcribe::MedicalVocabulary
│    │  ├      name: MedicalVocabulary
│    │  │      cloudFormationType: AWS::Transcribe::MedicalVocabulary
│    │  │      documentation: Resource type definition for AWS::Transcribe::MedicalVocabulary
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ VocabularyName: string (required, immutable)
│    │  │  ├ LanguageCode: string<af-ZA|ar-AE|ar-SA|da-DK|de-CH|de-DE|en-AB|en-AU|en-GB|en-IE|en-IN|en-US|en-WL|es-ES|es-US|fa-IR|fr-CA|fr-FR|he-IL|hi-IN|id-ID|it-IT|ja-JP|ko-KR|ms-MY|nl-NL|pt-BR|pt-PT|ru-RU|ta-IN|te-IN|tr-TR|zh-CN|zh-TW|th-TH|en-ZA|en-NZ|vi-VN|sv-SE> (required, immutable)
│    │  │  ├ VocabularyFileUri: string
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     └ Arn: string
│    └[+]  resource AWS::Transcribe::Vocabulary
│       ├      name: Vocabulary
│       │      cloudFormationType: AWS::Transcribe::Vocabulary
│       │      documentation: Creates a custom vocabulary that you can use to improve the transcription accuracy of domain-specific words and phrases.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:transcribe:${Region}:${Account}:vocabulary/${VocabularyName}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ VocabularyName: string (required, immutable)
│       │  ├ LanguageCode: string (required, immutable)
│       │  ├ Phrases: Array<string>
│       │  ├ VocabularyFileUri: string
│       │  ├ DataAccessRoleArn: string
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ Arn: string
│          ├ VocabularyState: string<PENDING|READY|FAILED>
│          └ LastModifiedTime: string
├[~] service aws-transfer
│ └ resources
│    ├[~]  resource AWS::Transfer::Connector
│    │  └ types
│    │     └[~] type SftpConfig
│    │       └ properties
│    │          └[+] OrderedUserSecretVersionStages: Array<string>
│    └[~]  resource AWS::Transfer::Server
│       └ types
│          ├[~] type ProtocolDetails
│          │ └ properties
│          │    └[+] ProxyConfig: ProxyConfig
│          └[+]  type ProxyConfig
│             ├      name: ProxyConfig
│             └ properties
│                └ SftpMode: string<PROXY_PROTOCOL_V2_ENFORCED|NONE>
├[~] service aws-vpclattice
│ └ resources
│    └[~]  resource AWS::VpcLattice::ResourceConfiguration
│       ├ properties
│       │  └ ResourceConfigurationType: - string<GROUP|CHILD|SINGLE|ARN> (required, immutable)
│       │                               + string<GROUP|CHILD|SINGLE|ARN|CIDR> (required, immutable)
│       └ types
│          ├[+]  type CidrResource
│          │  ├      name: CidrResource
│          │  └ properties
│          │     └ CidrRanges: Array<string> (required)
│          └[~] type ResourceConfigurationDefinition
│            └ properties
│               └[+] CidrResource: CidrResource
└[~] service aws-wellarchitected
  └ resources
     ├[+]  resource AWS::WellArchitected::AgentContext
     │  ├      name: AgentContext
     │  │      cloudFormationType: AWS::WellArchitected::AgentContext
     │  │      documentation: Resource schema for AWS::WellArchitected::AgentContext. An Agent Context provides supplemental application context (free-form content) within an Agent Profile, used to improve the quality of Well-Architected Agent recommendations.
     │  │      primaryIdentifier: ["Arn"]
     │  ├ properties
     │  │  ├ ProfileArn: string (required, immutable)
     │  │  ├ Title: string (required)
     │  │  ├ ContextType: string<APPLICATION> (required, immutable)
     │  │  └ Content: json (required)
     │  └ attributes
     │     ├ Arn: string
     │     ├ Id: string
     │     ├ ApplicationType: string<SAS|DESKTOP_APPLICATION|OTHER>
     │     ├ Criticality: string<MISSION_CRITICAL|BUSINESS_CRITICAL|NON_CRITICAL|TEST_DEVELOPMENT>
     │     ├ CreatedBy: string
     │     ├ CreatedAt: string
     │     ├ LastModifiedBy: string
     │     └ LastModifiedAt: string
     ├[+]  resource AWS::WellArchitected::AgentGoal
     │  ├      name: AgentGoal
     │  │      cloudFormationType: AWS::WellArchitected::AgentGoal
     │  │      documentation: Resource schema for AWS::WellArchitected::AgentGoal. An Agent Goal expresses a Well-Architected objective (a title, optional description, and the pillars it targets) within an Agent Profile, used to focus Well-Architected Agent recommendations.
     │  │      primaryIdentifier: ["Arn"]
     │  ├ properties
     │  │  ├ ProfileArn: string (required, immutable)
     │  │  ├ Pillars: Array<string<COST_OPTIMIZATION|SECURITY|RESILIENCE|PERFORMANCE|OPERATIONAL_EXCELLENCE>> (required)
     │  │  ├ Title: string (required)
     │  │  └ Description: string
     │  └ attributes
     │     ├ Arn: string
     │     ├ Id: string
     │     ├ CreatedBy: string
     │     ├ CreatedAt: string
     │     ├ LastModifiedBy: string
     │     └ LastModifiedAt: string
     └[+]  resource AWS::WellArchitected::AgentProfile
        ├      name: AgentProfile
        │      cloudFormationType: AWS::WellArchitected::AgentProfile
        │      documentation: Resource Type definition for AWS::WellArchitected::AgentProfile. An Agent Profile defines the execution role, account/region scope (via aggregation configuration access roles), and Well-Architected pillar focus used to generate Well-Architected Agent recommendations.
        │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
        │      primaryIdentifier: ["Arn"]
        ├ properties
        │  ├ Name: string (required, immutable)
        │  ├ DisplayName: string
        │  ├ Description: string
        │  ├ BusinessOverview: string
        │  ├ ExecutionRoleArn: string (required)
        │  ├ Pillars: Array<string<COST_OPTIMIZATION|SECURITY|RESILIENCE|PERFORMANCE>> (required)
        │  ├ AggregationConfiguration: Array<AggregationConfiguration> (required)
        │  ├ DeletionProtection: boolean
        │  └ Tags: Array<tag>
        ├ attributes
        │  ├ Arn: string
        │  ├ CreatedBy: string
        │  ├ CreatedAt: string
        │  ├ LastModifiedBy: string
        │  └ LastModifiedAt: string
        └ types
           └ type AggregationConfiguration
             ├      documentation: Defines an account, its in-scope regions, and the access role used to reach resources in that account.
             │      name: AggregationConfiguration
             └ properties
                ├ AccountId: string (required)
                ├ Regions: Array<string> (required)
                └ AccessRoleArn: string (required)
```

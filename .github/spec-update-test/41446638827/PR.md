Updates the L1 CloudFormation resource definitions with the latest changes from `@aws-cdk/aws-service-spec`

**L1 CloudFormation resource definition changes:**
```
├[~] service aws-appfabric
│ └ resources
│    ├[+]  resource AWS::AppFabric::AppBundle
│    │  ├      name: AppBundle
│    │  │      cloudFormationType: AWS::AppFabric::AppBundle
│    │  │      documentation: Creates an app bundle to collect data from an application using AppFabric.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ CustomerManagedKeyIdentifier: string (immutable)
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     └ Arn: string
│    └[+]  resource AWS::AppFabric::Ingestion
│       ├      name: Ingestion
│       │      cloudFormationType: AWS::AppFabric::Ingestion
│       │      documentation: Creates a data ingestion for an application using AppFabric.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ AppBundleArn: string (required, immutable)
│       │  ├ App: string (required, immutable)
│       │  ├ TenantId: string (required, immutable)
│       │  ├ IngestionType: string<auditLog> (required, immutable)
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ Arn: string
│          ├ State: string<enabled|disabled>
│          ├ CreatedAt: string
│          └ UpdatedAt: string
├[~] service aws-appstream
│ └ resources
│    ├[~]  resource AWS::AppStream::Fleet
│    │  └ attributes
│    │     └[-] Id: string
│    ├[~]  resource AWS::AppStream::Stack
│    │  └ properties
│    │     └[+] StorageConnectorAuthentication: string
│    └[~]  resource AWS::AppStream::StackFleetAssociation
│       └ attributes
│          └[-] Id: string
├[~] service aws-aps
│ └ resources
│    └[~]  resource AWS::APS::Scraper
│       ├ properties
│       │  └[+] Exporters: Array<ExporterConfiguration>
│       └ types
│          ├[+]  type ExporterConfiguration
│          │  ├      documentation: Exporter configuration
│          │  │      name: ExporterConfiguration
│          │  └ properties
│          │     └ OpenSearchConfiguration: OpenSearchConfiguration (required)
│          └[+]  type OpenSearchConfiguration
│             ├      documentation: Configuration for OpenSearch exporter
│             │      name: OpenSearchConfiguration
│             └ properties
│                └ DomainArn: string (required)
├[~] service aws-arcregionswitch
│ └ resources
│    └[~]  resource AWS::ARCRegionSwitch::Plan
│       └ types
│          └[~] type Lambdas
│            └ properties
│               └[+] Payload: string
├[~] service aws-autoscalingplans
│ └ resources
│    └[~]  resource AWS::AutoScalingPlans::ScalingPlan
│       └ attributes
│          └[-] Id: string
├[~] service aws-backup
│ └ resources
│    └[+]  resource AWS::Backup::BackupAccessPoint
│       ├      name: BackupAccessPoint
│       │      cloudFormationType: AWS::Backup::BackupAccessPoint
│       │      documentation: Creates a backup access point for an Amazon S3 recovery point. A backup access point provides on-demand, read-only access to the backup data in a recovery point through an Amazon S3 access point, without initiating a restore. While a backup access point is active for a recovery point, Backup pauses lifecycle transitions and blocks deletion of that recovery point.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ Name: string (immutable)
│       │  ├ RecoveryPointArn: string (required, immutable)
│       │  ├ AccessPointPolicy: json (immutable)
│       │  ├ AccessPointInTime: string (immutable)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ AccessPointMetadata: AccessPointMetadata
│       │  ├ AccessPointMetadata.AccessPointInTime: string
│       │  ├ AccessPointMetadata.S3AccessPointAlias: string
│       │  ├ AccessPointMetadata.S3AccessPointArn: string
│       │  ├ Arn: string
│       │  ├ BackupVaultArn: string
│       │  ├ BackupVaultName: string
│       │  ├ CreationTime: string
│       │  ├ ResourceArn: string
│       │  ├ ResourceType: string
│       │  └ Status: string<AVAILABLE|CREATING|DELETING|DISASSOCIATED|DISASSOCIATING|EXPIRED|FAILED>
│       └ types
│          └ type AccessPointMetadata
│            ├      documentation: Metadata the service reports for the backup access point. Once the access point reaches the AVAILABLE status this carries the Amazon S3 access point ARN and alias; for continuous recovery points it also echoes the AccessPointInTime that was supplied at create time.
│            │      name: AccessPointMetadata
│            └ properties
│               ├ S3AccessPointArn: string
│               ├ S3AccessPointAlias: string
│               └ AccessPointInTime: string
├[~] service aws-batch
│ └ resources
│    └[~]  resource AWS::Batch::QuotaShare
│       └ properties
│          └ QuotaShareName: - string (required, immutable)
│                            + string (immutable)
├[~] service aws-bcmpricingcalculator
│ └ resources
│    └[+]  resource AWS::BcmPricingCalculator::BillEstimate
│       ├      name: BillEstimate
│       │      cloudFormationType: AWS::BcmPricingCalculator::BillEstimate
│       │      documentation: Resource Type definition for AWS::BcmPricingCalculator::BillEstimate
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:bcm-pricing-calculator::${Account}:bill-estimate/${BillEstimateId}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ BillScenarioId: string (immutable)
│       │  ├ Name: string (required)
│       │  ├ ExpiresAt: string
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ Id: string
│       │  ├ BillInterval: BillInterval
│       │  ├ Status: string<IN_PROGRESS|COMPLETE|FAILED>
│       │  ├ CreatedAt: string
│       │  ├ GroupSharingPreference: string<OPEN|PRIORITIZED|RESTRICTED>
│       │  ├ CostCategoryGroupSharingPreferenceArn: string
│       │  └ CostCategoryGroupSharingPreferenceEffectiveDate: string
│       └ types
│          └ type BillInterval
│            ├      name: BillInterval
│            └ properties
│               ├ Start: string
│               └ End: string
├[~] service aws-bedrock
│ └ resources
│    └[+]  resource AWS::Bedrock::RetrievalInstruction
│       ├      name: RetrievalInstruction
│       │      cloudFormationType: AWS::Bedrock::RetrievalInstruction
│       │      documentation: Resource Type definition for AWS::Bedrock::RetrievalInstruction
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:bedrock:${Region}:${Account}:retrieval-instruction/${RetrievalInstructionId}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ Name: string (required, immutable)
│       │  ├ Instruction: Instruction (required)
│       │  ├ Description: string
│       │  ├ CustomerEncryptionKeyArn: string (immutable)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ RetrievalInstructionId: string
│       │  ├ Status: string<ACTIVE|INACTIVE>
│       │  ├ LastTransitionStatus: string<CREATING|UPDATING|CREATE_SUCCESSFUL|CREATE_FAILED|UPDATE_SUCCESSFUL|UPDATE_FAILED>
│       │  ├ CreatedAt: string
│       │  ├ UpdatedAt: string
│       │  └ Arn: string
│       └ types
│          └ type Instruction
│            ├      documentation: The reviewed content this instruction serves — what AgenticRetrieveStream resolves while status is ACTIVE. Absent until the first create review passes. Always present on a numbered version.
│            │      name: Instruction
│            └ properties
│               ├ RetrievalGuidance: string
│               ├ Persona: string
│               ├ AnswerFormat: string
│               └ AnswerPolicy: string
├[~] service aws-bedrockagentcore
│ └ resources
│    ├[~]  resource AWS::BedrockAgentCore::Dataset
│    │  └ properties
│    │     └ SchemaType: - string<AGENTCORE_EVALUATION_PREDEFINED_V1|AGENTCORE_EVALUATION_SIMULATED_V1|GENERIC_EVALUATION_PREDEFINED_V1> (required, immutable)
│    │                   + string<AGENTCORE_EVALUATION_PREDEFINED_V1|AGENTCORE_EVALUATION_SIMULATED_V1|GENERIC_EVALUATION_PREDEFINED_V1|THIRD_PARTY_EVALUATION_V1> (required, immutable)
│    ├[~]  resource AWS::BedrockAgentCore::Gateway
│    │  └ types
│    │     └[~] type MCPGatewayConfiguration
│    │       └ properties
│    │          └[+] DisableMcpListToolsPagination: boolean
│    ├[~]  resource AWS::BedrockAgentCore::GatewayRule
│    │  └ types
│    │     ├[+]  type CircuitBreakerConfiguration
│    │     │  ├      name: CircuitBreakerConfiguration
│    │     │  └ properties
│    │     │     └ Mode: string<ENABLED|DISABLED>
│    │     ├[~] type Condition
│    │     │ └ properties
│    │     │    └[+] MatchModels: MatchModels
│    │     ├[+]  type Fallback
│    │     │  ├      name: Fallback
│    │     │  └ properties
│    │     │     ├ TriggerOn: FallbackTriggers
│    │     │     ├ FirstByteTimeoutMilliseconds: integer
│    │     │     ├ CircuitBreaker: CircuitBreakerConfiguration
│    │     │     └ TargetFallback: Array<FallbackTarget> (required)
│    │     ├[+]  type FallbackTarget
│    │     │  ├      name: FallbackTarget
│    │     │  └ properties
│    │     │     ├ TargetName: string (required)
│    │     │     ├ Model: string
│    │     │     ├ TriggerOn: FallbackTriggers
│    │     │     └ FirstByteTimeoutMilliseconds: integer
│    │     ├[+]  type FallbackTriggers
│    │     │  ├      name: FallbackTriggers
│    │     │  └ properties
│    │     │     ├ StatusCodes: Array<string>
│    │     │     └ Errors: Array<string<CONNECTION_ERROR|FIRST_BYTE_TIMEOUT|UNROUTABLE>>
│    │     ├[+]  type MatchModelEntry
│    │     │  ├      name: MatchModelEntry
│    │     │  └ properties
│    │     │     ├ Value: string (required)
│    │     │     └ Operator: string<StringEquals|StringLike>
│    │     ├[+]  type MatchModels
│    │     │  ├      name: MatchModels
│    │     │  └ properties
│    │     │     └ AnyOf: Array<MatchModelEntry> (required)
│    │     ├[~] type StaticRoute
│    │     │ └ properties
│    │     │    ├[+] Fallback: Fallback
│    │     │    └[+] Model: string
│    │     └[~] type TargetTrafficSplitEntry
│    │       └ properties
│    │          ├[+] Fallback: Fallback
│    │          └[+] Model: string
│    ├[~]  resource AWS::BedrockAgentCore::GatewayTarget
│    │  ├ properties
│    │  │  └[+] CertificateConfigurations: Array<CertificateConfiguration>
│    │  └ types
│    │     ├[+]  type CertificateConfiguration
│    │     │  ├      name: CertificateConfiguration
│    │     │  └ properties
│    │     │     ├ S3: S3CertificateConfiguration
│    │     │     └ SecretsManager: SecretsManagerCertificateConfiguration
│    │     ├[+]  type S3CertificateConfiguration
│    │     │  ├      name: S3CertificateConfiguration
│    │     │  └ properties
│    │     │     ├ Uri: string (required)
│    │     │     └ BucketOwnerAccountId: string
│    │     └[+]  type SecretsManagerCertificateConfiguration
│    │        ├      name: SecretsManagerCertificateConfiguration
│    │        └ properties
│    │           └ SecretArn: string (required)
│    ├[~]  resource AWS::BedrockAgentCore::Memory
│    │  └ types
│    │     ├[~] type CustomMemoryStrategy
│    │     │ └ properties
│    │     │    ├[+] RecordExpiryDurationDays: integer
│    │     │    └[+] RecordExpirySpecification: RecordExpirySpecification
│    │     ├[~] type EpisodicMemoryStrategy
│    │     │ └ properties
│    │     │    ├[+] RecordExpiryDurationDays: integer
│    │     │    └[+] RecordExpirySpecification: RecordExpirySpecification
│    │     ├[+]  type RecordExpirySpecification
│    │     │  ├      documentation: Specifies the record expiry (LTM TTL) for a strategy. Provide RecordExpiryDurationDays to configure the duration after which records expire. Omit the specification entirely to leave records without an expiry on create, or to clear a previously configured expiry on update (the handler derives the removal from the previous and desired state).
│    │     │  │      name: RecordExpirySpecification
│    │     │  └ properties
│    │     │     └ RecordExpiryDurationDays: integer (required)
│    │     ├[~] type SemanticMemoryStrategy
│    │     │ └ properties
│    │     │    ├[+] RecordExpiryDurationDays: integer
│    │     │    └[+] RecordExpirySpecification: RecordExpirySpecification
│    │     ├[~] type SummaryMemoryStrategy
│    │     │ └ properties
│    │     │    ├[+] RecordExpiryDurationDays: integer
│    │     │    └[+] RecordExpirySpecification: RecordExpirySpecification
│    │     └[~] type UserPreferenceMemoryStrategy
│    │       └ properties
│    │          ├[+] RecordExpiryDurationDays: integer
│    │          └[+] RecordExpirySpecification: RecordExpirySpecification
│    └[~]  resource AWS::BedrockAgentCore::PaymentManager
│       ├ properties
│       │  ├ AuthorizerConfiguration: (documentation changed)
│       │  ├ AuthorizerType: (documentation changed)
│       │  └ Tags: (documentation changed)
│       ├ attributes
│       │  ├ PaymentManagerArn: (documentation changed)
│       │  ├ Status: (documentation changed)
│       │  └ WorkloadIdentityDetails: (documentation changed)
│       └ types
│          ├[~] type AuthorizerConfiguration
│          │ ├      - documentation: undefined
│          │ │      + documentation: The authorizer configuration for the payment manager
│          │ └ properties
│          │    └ CustomJWTAuthorizer: - CustomJWTAuthorizerConfiguration (required)
│          │                           + CustomJWTAuthorizer (required)
│          ├[+]  type AuthorizingClaimMatchValue
│          │  ├      name: AuthorizingClaimMatchValue
│          │  └ properties
│          │     ├ ClaimMatchValue: ClaimMatchValue (required)
│          │     └ ClaimMatchOperator: string<EQUALS|CONTAINS|CONTAINS_ANY> (required)
│          ├[-]  type AuthorizingClaimMatchValueType
│          │  ├      name: AuthorizingClaimMatchValueType
│          │  └ properties
│          │     ├ ClaimMatchValue: ClaimMatchValueType (required)
│          │     └ ClaimMatchOperator: string<EQUALS|CONTAINS|CONTAINS_ANY> (required)
│          ├[+]  type ClaimMatchValue
│          │  ├      name: ClaimMatchValue
│          │  └ properties
│          │     ├ MatchValueString: string
│          │     └ MatchValueStringList: Array<string>
│          ├[-]  type ClaimMatchValueType
│          │  ├      name: ClaimMatchValueType
│          │  └ properties
│          │     ├ MatchValueString: string
│          │     └ MatchValueStringList: Array<string>
│          ├[~] type CustomClaimValidationType
│          │ └ properties
│          │    └ AuthorizingClaimMatchValue: - AuthorizingClaimMatchValueType (required)
│          │                                  + AuthorizingClaimMatchValue (required)
│          ├[+]  type CustomJWTAuthorizer
│          │  ├      name: CustomJWTAuthorizer
│          │  └ properties
│          │     ├ DiscoveryUrl: string (required)
│          │     ├ AllowedAudience: Array<string>
│          │     ├ AllowedClients: Array<string>
│          │     ├ AllowedScopes: Array<string>
│          │     └ CustomClaims: Array<CustomClaimValidationType>
│          ├[-]  type CustomJWTAuthorizerConfiguration
│          │  ├      name: CustomJWTAuthorizerConfiguration
│          │  └ properties
│          │     ├ DiscoveryUrl: string (required)
│          │     ├ AllowedAudience: Array<string>
│          │     ├ AllowedClients: Array<string>
│          │     ├ AllowedScopes: Array<string>
│          │     └ CustomClaims: Array<CustomClaimValidationType>
│          └[~] type WorkloadIdentityDetails
│            ├      - documentation: undefined
│            │      + documentation: The workload identity details for the payment manager
│            └ properties
│               └ WorkloadIdentityArn: - string (required)
│                                      + string
├[~] service aws-chatbot
│ └ resources
│    ├[~]  resource AWS::Chatbot::CustomAction
│    │  ├      - documentation: > AWS Chatbot is now  . [Learn more](https://docs.aws.amazon.com//chatbot/latest/adminguide/service-rename.html)
│    │  │      > 
│    │  │      > `Type` attribute values remain unchanged.
│    │  │      + documentation: > AWS Chatbot is now Amazon Q Developer . [Learn more](https://docs.aws.amazon.com//chatbot/latest/adminguide/service-rename.html)
│    │  │      > 
│    │  │      > `Type` attribute values remain unchanged.
│    │  └ types
│    │     ├[~] type CustomActionAttachment
│    │     │ └      - documentation: > AWS Chatbot is now  . [Learn more](https://docs.aws.amazon.com//chatbot/latest/adminguide/service-rename.html)
│    │     │        > 
│    │     │        > `Type` attribute values remain unchanged. 
│    │     │        Defines when a custom action button should be attached to a notification.
│    │     │        + documentation: > AWS Chatbot is now Amazon Q Developer . [Learn more](https://docs.aws.amazon.com//chatbot/latest/adminguide/service-rename.html)
│    │     │        > 
│    │     │        > `Type` attribute values remain unchanged. 
│    │     │        Defines when a custom action button should be attached to a notification.
│    │     ├[~] type CustomActionAttachmentCriteria
│    │     │ └      - documentation: > AWS Chatbot is now  . [Learn more](https://docs.aws.amazon.com//chatbot/latest/adminguide/service-rename.html)
│    │     │        > 
│    │     │        > `Type` attribute values remain unchanged. 
│    │     │        A criteria for when a button should be shown based on values in the notification.
│    │     │        + documentation: > AWS Chatbot is now Amazon Q Developer . [Learn more](https://docs.aws.amazon.com//chatbot/latest/adminguide/service-rename.html)
│    │     │        > 
│    │     │        > `Type` attribute values remain unchanged. 
│    │     │        A criteria for when a button should be shown based on values in the notification.
│    │     └[~] type CustomActionDefinition
│    │       └      - documentation: > AWS Chatbot is now  . [Learn more](https://docs.aws.amazon.com//chatbot/latest/adminguide/service-rename.html)
│    │              > 
│    │              > `Type` attribute values remain unchanged. 
│    │              The definition of the command to run when invoked as an alias or as an action button.
│    │              + documentation: > AWS Chatbot is now Amazon Q Developer . [Learn more](https://docs.aws.amazon.com//chatbot/latest/adminguide/service-rename.html)
│    │              > 
│    │              > `Type` attribute values remain unchanged. 
│    │              The definition of the command to run when invoked as an alias or as an action button.
│    ├[~]  resource AWS::Chatbot::MicrosoftTeamsChannelConfiguration
│    │  ├      - documentation: > AWS Chatbot is now  . [Learn more](https://docs.aws.amazon.com//chatbot/latest/adminguide/service-rename.html)
│    │  │      > 
│    │  │      > `Type` attribute values remain unchanged. 
│    │  │      The `AWS::Chatbot::MicrosoftTeamsChannelConfiguration` resource configures a Microsoft Teams channel to allow users to use  with CloudFormation templates.
│    │  │      This resource requires some setup to be done in the  in chat applications console. To provide the required Microsoft Teams team and tenant IDs, you must perform the initial authorization flow with Microsoft Teams in the  in chat applications console, then copy and paste the IDs from the console. For more details, see steps 1-3 in [Get started with Microsoft Teams](https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html#teams-client-setup) in the *in chat applications Administrator Guide* .
│    │  │      + documentation: > AWS Chatbot is now Amazon Q Developer . [Learn more](https://docs.aws.amazon.com//chatbot/latest/adminguide/service-rename.html)
│    │  │      > 
│    │  │      > `Type` attribute values remain unchanged. 
│    │  │      The `AWS::Chatbot::MicrosoftTeamsChannelConfiguration` resource configures a Microsoft Teams channel to allow users to use Amazon Q Developer with CloudFormation templates.
│    │  │      This resource requires some setup to be done in the Amazon Q Developer in chat applications console. To provide the required Microsoft Teams team and tenant IDs, you must perform the initial authorization flow with Microsoft Teams in the Amazon Q Developer in chat applications console, then copy and paste the IDs from the console. For more details, see steps 1-3 in [Get started with Microsoft Teams](https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html#teams-client-setup) in the *Amazon Q Developer in chat applications Administrator Guide* .
│    │  └ properties
│    │     ├ CustomizationResourceArns: (documentation changed)
│    │     ├ IamRoleArn: (documentation changed)
│    │     ├ SnsTopicArns: (documentation changed)
│    │     ├ TeamId: (documentation changed)
│    │     └ TeamsTenantId: (documentation changed)
│    └[~]  resource AWS::Chatbot::SlackChannelConfiguration
│       ├      - documentation: > AWS Chatbot is now  . [Learn more](https://docs.aws.amazon.com//chatbot/latest/adminguide/service-rename.html)
│       │      > 
│       │      > `Type` attribute values remain unchanged. 
│       │      The `AWS::Chatbot::SlackChannelConfiguration` resource configures a Slack channel to allow users to use  with CloudFormation templates.
│       │      This resource requires some setup to be done in the  in chat applications console. To provide the required Slack workspace ID, you must perform the initial authorization flow with Slack in the  in chat applications console, then copy and paste the workspace ID from the console. For more details, see steps 1-3 in [Tutorial: Get started with Slack](https://docs.aws.amazon.com/chatbot/latest/adminguide/slack-setup.html#slack-client-setup) in the *in chat applications User Guide* .
│       │      + documentation: > AWS Chatbot is now Amazon Q Developer . [Learn more](https://docs.aws.amazon.com//chatbot/latest/adminguide/service-rename.html)
│       │      > 
│       │      > `Type` attribute values remain unchanged. 
│       │      The `AWS::Chatbot::SlackChannelConfiguration` resource configures a Slack channel to allow users to use Amazon Q Developer with CloudFormation templates.
│       │      This resource requires some setup to be done in the Amazon Q Developer in chat applications console. To provide the required Slack workspace ID, you must perform the initial authorization flow with Slack in the Amazon Q Developer in chat applications console, then copy and paste the workspace ID from the console. For more details, see steps 1-3 in [Tutorial: Get started with Slack](https://docs.aws.amazon.com/chatbot/latest/adminguide/slack-setup.html#slack-client-setup) in the *Amazon Q Developer in chat applications User Guide* .
│       └ properties
│          ├ CustomizationResourceArns: (documentation changed)
│          ├ IamRoleArn: (documentation changed)
│          ├ SlackWorkspaceId: (documentation changed)
│          └ SnsTopicArns: (documentation changed)
├[~] service aws-cleanrooms
│ └ resources
│    └[~]  resource AWS::CleanRooms::ConfiguredTable
│       └ types
│          ├[+]  type DatabricksConnectionType
│          │  ├      name: DatabricksConnectionType
│          │  └ properties
│          │     └ DeltaSharing: DatabricksDeltaSharingConnection (required)
│          ├[+]  type DatabricksDeltaSharingConnection
│          │  ├      name: DatabricksDeltaSharingConnection
│          │  └ properties
│          │     ├ DeltaShareEndpoint: string (required)
│          │     └ ShareName: string (required)
│          ├[+]  type DatabricksTableReference
│          │  ├      name: DatabricksTableReference
│          │  └ properties
│          │     ├ SchemaName: string (required)
│          │     ├ TableName: string (required)
│          │     ├ WorkspaceUrl: string (required)
│          │     └ ConnectionType: DatabricksConnectionType (required)
│          └[~] type TableReference
│            └ properties
│               └[+] Databricks: DatabricksTableReference
├[~] service aws-cloudfront
│ └ resources
│    └[~]  resource AWS::CloudFront::FieldLevelEncryptionConfig
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:cloudfront::${Account}:field-level-encryption-config/${Id}
├[~] service aws-cloudwatch
│ └ resources
│    ├[+]  resource AWS::CloudWatch::AccessGrant
│    │  ├      name: AccessGrant
│    │  │      cloudFormationType: AWS::CloudWatch::AccessGrant
│    │  │      documentation: Resource Type definition for AWS::CloudWatch::AccessGrant. An access grant authorizes a principal to perform a set of actions on resources in a space.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ Name: string (required, immutable)
│    │  │  ├ DomainId: string (required, immutable)
│    │  │  ├ SpaceId: string (required, immutable)
│    │  │  ├ Principal: AccessGrantPrincipal (required, immutable)
│    │  │  ├ Permission: string<SPACE_ADMIN|READ|READ_WRITE_DELETE|CUSTOM> (required, immutable)
│    │  │  ├ ScopedActions: Array<ScopedActions> (immutable)
│    │  │  └ Tags: Array<tag> (immutable)
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  ├ GrantId: string
│    │  │  ├ AccountId: string
│    │  │  ├ GrantType: string<SERVICE_MANAGED|CUSTOMER_MANAGED>
│    │  │  ├ CreatedBy: string
│    │  │  ├ CreatedAt: string
│    │  │  └ UpdatedAt: string
│    │  └ types
│    │     ├ type AccessGrantPrincipal
│    │     │ ├      documentation: The principal receiving the grant. Specify PrincipalId, PrincipalAttributes, or both.
│    │     │ │      name: AccessGrantPrincipal
│    │     │ └ properties
│    │     │    ├ PrincipalType: string<IDC_USER|IDC_GROUP|IAM_USER|IAM_ROLE|IAM_ROOT|ACCESS_PROFILE|ALERT|AGENT> (required)
│    │     │    ├ PrincipalId: string
│    │     │    └ PrincipalAttributes: Array<AccessGrantPrincipalAttribute>
│    │     ├ type AccessGrantPrincipalAttribute
│    │     │ ├      documentation: A single attribute condition used to match principals for attribute-based access.
│    │     │ │      name: AccessGrantPrincipalAttribute
│    │     │ └ properties
│    │     │    ├ Key: string (required)
│    │     │    └ Value: string (required)
│    │     ├ type ResourceScope
│    │     │ ├      documentation: A single resource scope entry within an access grant. Associates a resource type with optional ARN patterns, tag conditions, and row-level filters.
│    │     │ │      name: ResourceScope
│    │     │ └ properties
│    │     │    ├ ResourceType: string (required)
│    │     │    ├ ResourceArns: Array<string>
│    │     │    ├ Tags: Map<string, string>
│    │     │    ├ SignalTypes: Array<string<LOGS|TRACES>>
│    │     │    └ RowScopeGroups: Array<Array<RowScope>>
│    │     ├ type RowScope
│    │     │ ├      documentation: A single additive row-level filter on an access grant. A row is visible when its value for the given field matches the filter's values.
│    │     │ │      name: RowScope
│    │     │ └ properties
│    │     │    ├ Field: string (required)
│    │     │    ├ Operator: string<IN> (required)
│    │     │    └ Values: Array<string> (required)
│    │     └ type ScopedActions
│    │       ├      documentation: A group of actions within an access grant, together with the resource scopes and context conditions that apply to exactly those actions.
│    │       │      name: ScopedActions
│    │       └ properties
│    │          ├ Actions: Array<string> (required)
│    │          ├ Resources: Array<ResourceScope>
│    │          └ ContextConditions: Map<string, Array<string>>
│    ├[+]  resource AWS::CloudWatch::AccessProfile
│    │  ├      name: AccessProfile
│    │  │      cloudFormationType: AWS::CloudWatch::AccessProfile
│    │  │      documentation: Resource type definition for AWS::CloudWatch::AccessProfile
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:cloudwatch:${Region}:${Account}:access-profile/${ProfileId}
│    │  │      primaryIdentifier: ["SpaceId","ProfileId"]
│    │  ├ properties
│    │  │  ├ SpaceId: string (required, immutable)
│    │  │  ├ Name: string (required)
│    │  │  ├ Description: string
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ Arn: string
│    │     ├ ProfileId: string
│    │     ├ ProfileType: string<SERVICE_MANAGED|CUSTOMER_MANAGED>
│    │     ├ AssumeStatus: string<ALLOWED|DENIED>
│    │     ├ CreatedAt: string
│    │     └ UpdatedAt: string
│    ├[~]  resource AWS::CloudWatch::AnomalyDetector
│    │  ├      - primaryIdentifier: ["AnomalyDetectorId"]
│    │  │      + primaryIdentifier: ["Id"]
│    │  ├ properties
│    │  │  └ Configuration: - MetricConfiguration ⇐ Configuration
│    │  │                   + Configuration
│    │  ├ attributes
│    │  │  ├[-] AnomalyDetectorId: string
│    │  │  └[+] Id: string
│    │  └ types
│    │     └[-]  type MetricConfiguration
│    │        ├      name: MetricConfiguration
│    │        └ properties
│    │           ├ MetricTimeZone: string
│    │           └ ExcludedTimeRanges: Array<Range>
│    ├[+]  resource AWS::CloudWatch::Domain
│    │  ├      name: Domain
│    │  │      cloudFormationType: AWS::CloudWatch::Domain
│    │  │      documentation: The account-level boundary for CloudWatch Omni. A domain configures the
│    │  │      identity providers users sign in through and exposes the endpoint URLs used
│    │  │      to reach CloudWatch Omni. Spaces are created within a domain.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:cloudwatch:${Region}:${Account}:domain/${DomainId}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ Name: string (required)
│    │  │  ├ IdentityProviders: Array<string<IAM|IDC>> (required)
│    │  │  ├ IdentityProviderConfiguration: IdentityProviderConfiguration
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ DomainEndpointUrl: string
│    │  │  ├ CustomEndpointUrls: Array<string>
│    │  │  ├ IdentityCenterApplicationArn: string
│    │  │  ├ Region: string
│    │  │  ├ CreatedAt: string
│    │  │  ├ UpdatedAt: string
│    │  │  ├ Status: string<ACTIVE>
│    │  │  ├ DomainId: string
│    │  │  └ Arn: string
│    │  └ types
│    │     ├ type IdentityCenterConfiguration
│    │     │ ├      documentation: Identity Center configuration. Required when identityProviders includes IDC.
│    │     │ │      name: IdentityCenterConfiguration
│    │     │ └ properties
│    │     │    └ IdentityCenterInstanceArn: string
│    │     └ type IdentityProviderConfiguration
│    │       ├      documentation: Identity provider configuration for the domain.
│    │       │      name: IdentityProviderConfiguration
│    │       └ properties
│    │          └ IdentityCenterConfiguration: IdentityCenterConfiguration
│    ├[+]  resource AWS::CloudWatch::DomainAccessGrantForOrganization
│    │  ├      name: DomainAccessGrantForOrganization
│    │  │      cloudFormationType: AWS::CloudWatch::DomainAccessGrantForOrganization
│    │  │      documentation: Resource Type definition for AWS::CloudWatch::DomainAccessGrantForOrganization. An organization access grant authorizes a principal to administer an organization domain.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ Name: string (required, immutable)
│    │  │  ├ DomainId: string (required, immutable)
│    │  │  ├ Principal: OrganizationAccessGrantPrincipal (required, immutable)
│    │  │  ├ Permission: string<ADMIN> (required, immutable)
│    │  │  └ Tags: Array<tag> (immutable)
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  ├ GrantId: string
│    │  │  ├ GrantType: string<SERVICE_MANAGED|CUSTOMER_MANAGED>
│    │  │  ├ CreatedBy: string
│    │  │  ├ CreatedAt: string
│    │  │  └ UpdatedAt: string
│    │  └ types
│    │     ├ type OrganizationAccessGrantPrincipal
│    │     │ ├      documentation: The principal the grant is issued to. Supply PrincipalId, or PrincipalAttributes for an attribute-based grant.
│    │     │ │      name: OrganizationAccessGrantPrincipal
│    │     │ └ properties
│    │     │    ├ PrincipalType: string<IDC_USER|IDC_GROUP|IAM_USER|IAM_ROLE|IAM_ROOT> (required)
│    │     │    ├ PrincipalId: string
│    │     │    └ PrincipalAttributes: Array<PrincipalAttribute>
│    │     └ type PrincipalAttribute
│    │       ├      documentation: An attribute key-value pair used to select principals.
│    │       │      name: PrincipalAttribute
│    │       └ properties
│    │          ├ Key: string (required)
│    │          └ Value: string (required)
│    ├[+]  resource AWS::CloudWatch::DomainForOrganization
│    │  ├      name: DomainForOrganization
│    │  │      cloudFormationType: AWS::CloudWatch::DomainForOrganization
│    │  │      documentation: Resource Type definition for AWS::CloudWatch::DomainForOrganization. An organization domain provides a single sign-in URL and centralized identity provider configuration for your AWS Organization, removing the need for each account to configure its own domain. Only the management account can create it.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ Name: string (required)
│    │  │  ├ IdentityProviders: Array<string<IAM|IDC>> (required)
│    │  │  ├ IdentityProviderConfiguration: IdentityProviderConfiguration
│    │  │  ├ DomainAccessRoleArn: string (required, immutable)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ DomainEndpointUrl: string
│    │  │  ├ CustomEndpointUrls: Array<string>
│    │  │  ├ OrganizationId: string
│    │  │  ├ OwnerAccountId: string
│    │  │  ├ IdentityCenterApplicationArn: string
│    │  │  ├ Region: string
│    │  │  ├ CreatedAt: string
│    │  │  ├ UpdatedAt: string
│    │  │  ├ Status: string<ACTIVE>
│    │  │  ├ DomainId: string
│    │  │  └ Arn: string
│    │  └ types
│    │     ├ type IdentityCenterConfiguration
│    │     │ ├      documentation: Identity Center configuration. Required when identityProviders includes IDC.
│    │     │ │      name: IdentityCenterConfiguration
│    │     │ └ properties
│    │     │    └ IdentityCenterInstanceArn: string
│    │     └ type IdentityProviderConfiguration
│    │       ├      documentation: Identity provider configuration for the domain.
│    │       │      name: IdentityProviderConfiguration
│    │       └ properties
│    │          └ IdentityCenterConfiguration: IdentityCenterConfiguration
│    ├[+]  resource AWS::CloudWatch::OmniDashboard
│    │  ├      name: OmniDashboard
│    │  │      cloudFormationType: AWS::CloudWatch::OmniDashboard
│    │  │      documentation: Resource Type definition for AWS::CloudWatch::OmniDashboard. A dashboard is a saved arrangement of panels that shows your team one agreed view of a system, backed by queries against your space's telemetry.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:cloudwatch:${Region}:${Account}:omni-dashboard/${DashboardId}
│    │  │      primaryIdentifier: ["SpaceId","DashboardId"]
│    │  ├ properties
│    │  │  ├ SpaceId: string (required, immutable)
│    │  │  ├ Name: string (required)
│    │  │  ├ Body: string (required)
│    │  │  ├ Description: string
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ Arn: string
│    │     ├ DashboardId: string
│    │     ├ CreatedBy: string
│    │     ├ CreatedAt: string
│    │     └ UpdatedAt: string
│    └[+]  resource AWS::CloudWatch::Space
│       ├      name: Space
│       │      cloudFormationType: AWS::CloudWatch::Space
│       │      documentation: Resource type definition for AWS::CloudWatch::Space
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:cloudwatch:${Region}:${Account}:space/${SpaceId}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ Name: string (required)
│       │  ├ DomainId: string (required, immutable)
│       │  ├ DataAccessRoleArn: string (required, immutable)
│       │  ├ AgentCoreEvaluationRoleArn: string (immutable)
│       │  ├ EncryptionConfiguration: EncryptionConfiguration
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ SpaceId: string
│       │  ├ Region: string
│       │  ├ OwnerAccountId: string
│       │  ├ CreatedAt: string
│       │  ├ UpdatedAt: string
│       │  └ Status: string<ACTIVE|SUSPENDED|MOVING>
│       └ types
│          └ type EncryptionConfiguration
│            ├      documentation: The encryption configuration for the space.
│            │      name: EncryptionConfiguration
│            └ properties
│               ├ EncryptionStrategy: string<AWS_OWNED|CUSTOMER_MANAGED> (required)
│               └ KmsKeyArn: string
├[~] service aws-codebuild
│ └ resources
│    └[~]  resource AWS::CodeBuild::Project
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["Name"]
│       └ types
│          ├[~] type BatchRestrictions
│          │ └ properties
│          │    └[+] FleetsAllowed: Array<string>
│          ├[~] type DockerServer
│          │ └ properties
│          │    ├ ComputeType: (documentation changed)
│          │    └ SecurityGroupIds: (documentation changed)
│          └[~] type Environment
│            └ properties
│               └ HostKernel: (documentation changed)
├[~] service aws-codedeploy
│ └ resources
│    └[~]  resource AWS::CodeDeploy::DeploymentGroup
│       ├ properties
│       │  └[+] Ec2DeploymentOptions: Ec2DeploymentOptions
│       └ types
│          └[+]  type Ec2DeploymentOptions
│             ├      documentation: Options that control how CodeDeploy manages Amazon EC2 Auto Scaling groups during deployments to the deployment group.
│             │      name: Ec2DeploymentOptions
│             └ properties
│                └ AutoScalingGroupProcessesToSuspend: Array<string>
├[~] service aws-connect
│ └ resources
│    └[~]  resource AWS::Connect::Instance
│       └ types
│          └[~] type Attributes
│            └ properties
│               └[+] AutoMuteAgentOnHold: boolean
├[~] service aws-customerprofiles
│ └ resources
│    ├[~]  resource AWS::CustomerProfiles::CalculatedAttributeDefinition
│    │  └ properties
│    │     ├ AttributeDetails: - AttributeDetails (required)
│    │     │                   + AttributeDetails (required, immutable)
│    │     └ Statistic: - string<FIRST_OCCURRENCE|LAST_OCCURRENCE|COUNT|SUM|MINIMUM|MAXIMUM|AVERAGE|MAX_OCCURRENCE> (required)
│    │                  + string<FIRST_OCCURRENCE|LAST_OCCURRENCE|COUNT|SUM|MINIMUM|MAXIMUM|AVERAGE|MAX_OCCURRENCE> (required, immutable)
│    └[~]  resource AWS::CustomerProfiles::EventTrigger
│       ├ properties
│       │  └[+] IntentFilterDefinition: IntentFilterDefinition
│       └ types
│          ├[+]  type Intent
│          │  ├      documentation: Identifies a predicted intent by domain and type.
│          │  │      name: Intent
│          │  └ properties
│          │     ├ IntentDomain: string<DEFAULT> (required)
│          │     └ Type: string<PRICE_SENSITIVITY|UPGRADE_UPSELL_PROPENSITY|LAST_SEARCH_INTENT> (required)
│          ├[+]  type IntentFilterCondition
│          │  ├      documentation: The criteria that a predicted intent must meet.
│          │  │      name: IntentFilterCondition
│          │  └ properties
│          │     ├ Intent: Intent (required)
│          │     ├ ComparisonOperator: string<INCLUSIVE|EXCLUSIVE|CONTAINS|GREATER_THAN|LESS_THAN|GREATER_THAN_OR_EQUAL|LESS_THAN_OR_EQUAL|EQUAL> (required)
│          │     └ Values: Array<string> (required)
│          ├[+]  type IntentFilterDefinition
│          │  ├      documentation: Filters the destination to profiles whose predicted intents meet the specified conditions.
│          │  │      name: IntentFilterDefinition
│          │  └ properties
│          │     ├ Groups: Array<IntentFilterGroup> (required)
│          │     └ LogicalOperator: string<ANY|ALL|NONE> (required)
│          └[+]  type IntentFilterGroup
│             ├      documentation: A group of intent filter conditions combined by the group's logical operator.
│             │      name: IntentFilterGroup
│             └ properties
│                ├ Conditions: Array<IntentFilterCondition> (required)
│                └ LogicalOperator: string<ANY|ALL|NONE> (required)
├[~] service aws-datapipeline
│ └ resources
│    └[~]  resource AWS::DataPipeline::Pipeline
│       └      - arnTemplate: arn:${Partition}:datapipeline:${Region}:${Account}:pipeline/${PipelineID}
│              + arnTemplate: arn:${Partition}:datapipeline:${Region}:${Account}:pipeline/${PipelineId}
├[~] service aws-directconnect
│ └ resources
│    └[+]  resource AWS::DirectConnect::ResiliencyGroup
│       ├      name: ResiliencyGroup
│       │      cloudFormationType: AWS::DirectConnect::ResiliencyGroup
│       │      documentation: Resource Type definition for AWS::DirectConnect::ResiliencyGroup
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:directconnect::${Account}:dx-resiliency-group/${ResiliencyGroupId}
│       │      primaryIdentifier: ["ResiliencyGroupArn"]
│       ├ properties
│       │  ├ Tags: Array<tag>
│       │  ├ ResiliencyGroupName: string (required)
│       │  ├ IntendedResiliencyModel: string<maximum-resiliency|high-resiliency|basic-resiliency> (immutable)
│       │  └ ConnectionArns: Array<string>
│       └ attributes
│          ├ ResiliencyGroupArn: string
│          └ ResiliencyGroupId: string
├[~] service aws-directoryservice
│ └ resources
│    └[~]  resource AWS::DirectoryService::MicrosoftAD
│       └      - arnTemplate: arn:${Partition}:ds:${Region}:${Account}:${DirectoryId}
│              + arnTemplate: arn:${Partition}:ds:${Region}:${Account}:directory/${DirectoryId}
├[~] service aws-docdb
│ └ resources
│    ├[~]  resource AWS::DocDB::DBCluster
│    │  └ attributes
│    │     └[+] ServerlessV2PlatformVersion: string
│    └[~]  resource AWS::DocDB::DBClusterParameterGroup
│       └      - arnTemplate: arn:${Partition}:rds:${Region}:${Account}:cluster-pg:${ClusterPGName}
│              + arnTemplate: arn:${Partition}:rds:${Region}:${Account}:cluster-pg:${ClusterParameterGroupName}
├[~] service aws-dynamodb
│ └ resources
│    └[~]  resource AWS::DynamoDB::GlobalTable
│       ├ properties
│       │  └[+] TableType: string<GlobalTableReplica|Regional>
│       └ types
│          └[~] type ReplicaSpecification
│            └ properties
│               └[+] DisassociationProtectionEnabled: boolean
├[~] service aws-ec2
│ ├ resources
│ │  ├[~]  resource AWS::EC2::FlowLog
│ │  │  └      - arnTemplate: arn:${Partition}:ec2:${Region}:${Account}:vpc-flow-log/${VpcFlowLogId}
│ │  │         + arnTemplate: arn:${Partition}:ec2:${Region}:${Account}:vpc-flow-log/${FlowLogId}
│ │  ├[~]  resource AWS::EC2::Instance
│ │  │  ├      - vendedLogs: undefined
│ │  │  │      + vendedLogs: [{"permissionsVersion":"V2","logType":"CONSOLE_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id"],"mandatoryFields":["resource_arn","event_timestamp","message"]}]
│ │  │  └ vendedLogs
│ │  │     └[+] logType: CONSOLE_LOGS
│ │  │       ├permissionsVersion: V2
│ │  │       ├destinations: [S3, CWL, FH]
│ │  │       ├mandatoryFields: [resource_arn, event_timestamp, message]
│ │  │       └optionalFields: [timestamp, resource_id]
│ │  ├[~]  resource AWS::EC2::IpamInternetRegistryAssociation
│ │  │  └      - arnTemplate: undefined
│ │  │         + arnTemplate: arn:${Partition}:ec2::${Account}:ipam-internet-registry-association/${IpamInternetRegistryAssociationId}
│ │  ├[~]  resource AWS::EC2::IPv4Pool
│ │  │  └      - arnTemplate: undefined
│ │  │         + arnTemplate: arn:${Partition}:ec2:${Region}:${Account}:ipv4pool-ec2/${Ipv4PoolEc2Id}
│ │  ├[+]  resource AWS::EC2::Snapshot
│ │  │  ├      name: Snapshot
│ │  │  │      cloudFormationType: AWS::EC2::Snapshot
│ │  │  │      documentation: Creates a snapshot of an EBS volume and stores it in Amazon S3.
│ │  │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│ │  │  │      primaryIdentifier: ["Arn"]
│ │  │  ├ properties
│ │  │  │  ├ VolumeId: string (required, immutable)
│ │  │  │  ├ Description: string (immutable)
│ │  │  │  └ Tags: Array<TagsItems>
│ │  │  ├ attributes
│ │  │  │  ├ Arn: string
│ │  │  │  ├ SnapshotId: string
│ │  │  │  ├ VolumeSize: integer
│ │  │  │  ├ Encrypted: boolean
│ │  │  │  ├ KmsKeyId: string
│ │  │  │  ├ OwnerId: string
│ │  │  │  ├ Progress: string
│ │  │  │  ├ StartTime: string
│ │  │  │  ├ State: string<pending|completed|error|recoverable|recovering>
│ │  │  │  └ StorageTier: string<archive|standard>
│ │  │  ├ types
│ │  │  │  └ type TagsItems
│ │  │  │    ├      name: TagsItems
│ │  │  │    └ properties
│ │  │  │       ├ Key: string (required)
│ │  │  │       └ Value: string (required)
│ │  │  └ events
│ │  │     └ event aws.ec2@EBSSnapshotNotification
│ │  │       ├      description: Schema for event type EBSSnapshotNotification, published by AWS service aws.ec2
│ │  │       │      source: aws.ec2
│ │  │       │      detailType: EBS Snapshot Notification
│ │  │       │      rootProperty: EBSSnapshotNotification
│ │  │       │      resourcesFields: [
│ │  │       │        {
│ │  │       │          "type": "EBSSnapshotNotification",
│ │  │       │          "fieldName": "snapshot_id",
│ │  │       │          "resource": "Snapshot"
│ │  │       │        }
│ │  │       │      ]
│ │  │       └ types
│ │  │          └ type EBSSnapshotNotification
│ │  │            └ properties
│ │  │               ├ result: string (required)
│ │  │               ├ EndTime: string (required)
│ │  │               ├ snapshot_id: string (required)
│ │  │               ├ StartTime: string (required)
│ │  │               ├ cause: string (required)
│ │  │               ├ source: string (required)
│ │  │               ├ event: string (required)
│ │  │               └ request-id: string (required)
│ │  ├[+]  resource AWS::EC2::TransitGatewayAttachmentNatConfiguration
│ │  │  ├      name: TransitGatewayAttachmentNatConfiguration
│ │  │  │      cloudFormationType: AWS::EC2::TransitGatewayAttachmentNatConfiguration
│ │  │  │      documentation: Resource Type definition for AWS::EC2::TransitGatewayAttachmentNatConfiguration. Configures static 1:1 NAT on a transit gateway attachment. Each rule translates a source CIDR to a NAT CIDR. NatGatewaySupport controls whether creating this resource activates the rules or stages them; deleting this resource disables NAT gateway support and removes all NAT rules. This resource must be managed from the account that owns the transit gateway. NAT support depends on the attachment type, and the transit gateway rejects a request to configure NAT on an attachment type that does not support it.
│ │  │  │      primaryIdentifier: ["Arn"]
│ │  │  ├ properties
│ │  │  │  ├ TransitGatewayAttachmentId: string (required, immutable)
│ │  │  │  ├ NatGatewayRules: Array<NatRule> (required)
│ │  │  │  ├ NatGatewaySupport: string<enable|disable> (required)
│ │  │  │  └ NatSystemRouteSupport: string<enable|disable>
│ │  │  ├ attributes
│ │  │  │  └ Arn: string
│ │  │  └ types
│ │  │     └ type NatRule
│ │  │       ├      documentation: A static 1:1 NAT rule. Traffic whose source address falls within MatchSourceCidr is translated to the corresponding address in NatCidr.
│ │  │       │      name: NatRule
│ │  │       └ properties
│ │  │          ├ RuleNumber: integer (required)
│ │  │          ├ MatchSourceCidr: string (required)
│ │  │          └ NatCidr: string (required)
│ │  └[~]  resource AWS::EC2::VPNConcentrator
│ │     └ properties
│ │        └ TransitGatewayId: - string (required, immutable)
│ │                            + string (immutable)
│ └ events
│    └[~]  event aws.ec2@EBSSnapshotNotification
│       └      + resourcesField: [
│                {
│                  "type": "EBSSnapshotNotification",
│                  "fieldName": "snapshot_id",
│                  "resource": "Snapshot"
│                }
│              ]
├[~] service aws-ecs
│ └ resources
│    ├[~]  resource AWS::ECS::Daemon
│    │  └ properties
│    │     └ Critical: (documentation changed)
│    ├[+]  resource AWS::ECS::Gateway
│    │  ├      name: Gateway
│    │  │      cloudFormationType: AWS::ECS::Gateway
│    │  │      documentation: Resource schema for AWS ECS Gateway
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ InfrastructureRoleArn: string (required)
│    │  │  ├ Configuration: GatewayConfiguration (required)
│    │  │  ├ PropagateTags: string<NONE|GATEWAY>
│    │  │  ├ GatewayName: string (required, immutable)
│    │  │  ├ DeletionProtection: boolean (default=true)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  ├ Status: string<ACTIVE|UPDATE_IN_PROGRESS|UPDATE_COMPLETE|UPDATE_FAILED|DELETED>
│    │  │  ├ AccessType: string<PUBLIC|PRIVATE>
│    │  │  ├ CreatedAt: string
│    │  │  ├ UpdatedAt: string
│    │  │  └ Configuration.HostSharedAlb.CurrentAlbCount: integer
│    │  └ types
│    │     ├ type GatewayAlbTestTrafficRules
│    │     │ ├      documentation: The test traffic rules for the gateway ALB.
│    │     │ │      name: GatewayAlbTestTrafficRules
│    │     │ └ properties
│    │     │    └ Header: GatewayTestTrafficHeader
│    │     ├ type GatewayConfiguration
│    │     │ ├      documentation: The configuration for the gateway. Currently only supports hostSharedAlb.
│    │     │ │      name: GatewayConfiguration
│    │     │ └ properties
│    │     │    └ HostSharedAlb: HostSharedAlbConfiguration (required)
│    │     ├ type GatewayElbAccessLogConfiguration
│    │     │ ├      documentation: The access log configuration for the gateway ALB. Access logging is enabled by the presence of a destination.
│    │     │ │      name: GatewayElbAccessLogConfiguration
│    │     │ └ properties
│    │     │    └ Destination: GatewayElbAccessLogDestination
│    │     ├ type GatewayElbAccessLogDestination
│    │     │ ├      documentation: The destination for gateway ALB access logs. Exactly one destination type must be specified.
│    │     │ │      name: GatewayElbAccessLogDestination
│    │     │ └ properties
│    │     │    └ S3: GatewayElbAccessLogS3Destination (required)
│    │     ├ type GatewayElbAccessLogS3Destination
│    │     │ ├      documentation: The S3 destination for gateway ALB access logs.
│    │     │ │      name: GatewayElbAccessLogS3Destination
│    │     │ └ properties
│    │     │    ├ Bucket: string (required)
│    │     │    └ Prefix: string
│    │     ├ type GatewayElbNetworkConfiguration
│    │     │ ├      documentation: The network configuration for the gateway ALB.
│    │     │ │      name: GatewayElbNetworkConfiguration
│    │     │ └ properties
│    │     │    ├ IpAddressType: string<ipv4|dualstack|dualstack-without-public-ipv4> (immutable)
│    │     │    ├ Subnets: Array<string> (immutable)
│    │     │    └ InboundSecurityGroup: string
│    │     ├ type GatewayTestTrafficHeader
│    │     │ ├      documentation: The header configuration for test traffic routing.
│    │     │ │      name: GatewayTestTrafficHeader
│    │     │ └ properties
│    │     │    ├ Values: Array<string> (required)
│    │     │    └ Name: string (required)
│    │     └ type HostSharedAlbConfiguration
│    │       ├      documentation: The host shared ALB configuration for the gateway.
│    │       │      name: HostSharedAlbConfiguration
│    │       └ properties
│    │          ├ MaxAlbCount: integer
│    │          ├ Scheme: string<internet-facing|internal> (immutable)
│    │          ├ TestTrafficRules: GatewayAlbTestTrafficRules
│    │          ├ Port: integer (immutable)
│    │          ├ CurrentAlbCount: integer
│    │          ├ NetworkConfiguration: GatewayElbNetworkConfiguration
│    │          ├ Protocol: string<HTTP|HTTPS> (immutable)
│    │          ├ WebACLArn: string
│    │          ├ AccessLogs: GatewayElbAccessLogConfiguration
│    │          └ HttpDesync: string<monitor|defensive|strictest>
│    ├[+]  resource AWS::ECS::GatewayClusterAssociations
│    │  ├      name: GatewayClusterAssociations
│    │  │      cloudFormationType: AWS::ECS::GatewayClusterAssociations
│    │  │      documentation: Resource Type definition for AWS::ECS::GatewayClusterAssociations, which associates an ECS Gateway with an ECS Cluster.
│    │  │      primaryIdentifier: ["Gateway","Cluster"]
│    │  ├ properties
│    │  │  ├ Gateway: string (required, immutable)
│    │  │  └ Cluster: string (required, immutable)
│    │  └ attributes
│    │     ├ GatewayArn: string
│    │     ├ ClusterArn: string
│    │     └ Status: string<ACTIVE|DISASSOCIATING>
│    ├[~]  resource AWS::ECS::Service
│    │  ├ properties
│    │  │  └[+] GatewayConnectors: Array<GatewayConnector>
│    │  └ types
│    │     ├[+]  type GatewayConnector
│    │     │  ├      name: GatewayConnector
│    │     │  └ properties
│    │     │     ├ Filters: GatewayConnectorFilters
│    │     │     ├ HealthCheck: GatewayConnectorHealthCheck
│    │     │     └ PortName: string (required)
│    │     ├[+]  type GatewayConnectorFilters
│    │     │  ├      name: GatewayConnectorFilters
│    │     │  └ properties
│    │     │     └ AccessTypes: Array<string<PUBLIC|PRIVATE>>
│    │     ├[+]  type GatewayConnectorHealthCheck
│    │     │  ├      name: GatewayConnectorHealthCheck
│    │     │  └ properties
│    │     │     ├ HealthCheckIntervalSeconds: integer
│    │     │     ├ Matcher: GatewayConnectorHealthCheckMatcher
│    │     │     ├ HealthyThresholdCount: integer
│    │     │     ├ HealthCheckPath: string
│    │     │     ├ HealthCheckProtocol: string<HTTP|HTTPS>
│    │     │     ├ HealthCheckPort: integer
│    │     │     ├ UnhealthyThresholdCount: integer
│    │     │     └ HealthCheckTimeoutSeconds: integer
│    │     ├[+]  type GatewayConnectorHealthCheckMatcher
│    │     │  ├      name: GatewayConnectorHealthCheckMatcher
│    │     │  └ properties
│    │     │     ├ GrpcCode: string
│    │     │     └ HttpCode: string
│    │     ├[~] type ServiceConnectConfiguration
│    │     │ └ properties
│    │     │    └[+] ContainerConfigurations: Array<ServiceConnectContainerConfiguration>
│    │     ├[+]  type ServiceConnectContainerConfiguration
│    │     │  ├      name: ServiceConnectContainerConfiguration
│    │     │  └ properties
│    │     │     └ LogLevel: string<debug|info>
│    │     ├[~] type VpcLatticeAdvancedConfiguration
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: The advanced settings for VPC Lattice used in blue/green deployments. Specify the alternate target group and listener rules required for traffic shifting during blue/green deployments. For more information, see [Required resources for Amazon ECS blue/green deployments](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/blue-green-deployment-implementation.html) in the *Amazon Elastic Container Service Developer Guide*.
│    │     │ └ properties
│    │     │    ├ AlternateTargetGroupArn: (documentation changed)
│    │     │    ├ ProductionListenerRule: (documentation changed)
│    │     │    └ TestListenerRule: (documentation changed)
│    │     └[~] type VpcLatticeConfiguration
│    │       └ properties
│    │          └ AdvancedConfiguration: (documentation changed)
│    └[~]  resource AWS::ECS::TaskDefinition
│       └ types
│          ├[+]  type NvidiaMpsAllocation
│          │  ├      name: NvidiaMpsAllocation
│          │  └ properties
│          │     ├ Memory: integer (required)
│          │     └ MaxComputePercent: integer
│          ├[~] type ResourceRequirement
│          │ └ properties
│          │    ├[+] SharingStrategy: SharingStrategy
│          │    └ Value: - string (required, immutable)
│          │             + string (immutable)
│          └[+]  type SharingStrategy
│             ├      name: SharingStrategy
│             └ properties
│                └ NvidiaMps: NvidiaMpsAllocation (required)
├[~] service aws-eks
│ └ resources
│    ├[~]  resource AWS::EKS::Capability
│    │  ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_COMMITSERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","version","component","duration"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_NOTIFICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","level","message","notification_event","service","destination","success","duration_ms","status_code","error","app","namespace","reason","resource","trigger_count","template_count","service_count","enabled"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ACK_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","err","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","kind","name","namespace","aws.service","version","type","generation","is_adopted","iam_role_selector","role"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_SERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","name","namespace","reason","application","user","grpc.code","grpc.method","grpc.service","grpc.time_ms","grpc.method_type","grpc.error","type","duration","dest-namespace","dest-server","project"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","application","app-namespace","project","dest-server","dest-namespace","dest-name","comparison-level","time_ms","patch_ms","setop_ms","compare_app_state_ms","refresh_app_conditions_ms","process_refresh_app_conditions_errors_ms","comparison_with_nothing_ms","name","namespace","app_status_update_ms","auto_sync_ms","diff_ms","git_ms","health_ms","live_ms","manifests_ms","repo_ms","sync_ms","cluster","syncId","duration","eventType","kind"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_APPLICATIONSET_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","name","namespace","application","app-namespace","project","applicationset","action","count","requeueAfter","type","version","err","repoURL","revision"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_REPOSERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","grpc.code","grpc.method","grpc.service","grpc.time_ms","grpc.method_type","grpc.component","grpc.error","version","component","duration","execID"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_KRO_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","err","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","gvr","crd","name","namespace","type","breakingChanges","summary","existingRGDID","newRGDID"],"mandatoryFields":["resource_arn","event_timestamp"]}]
│    │  │      + vendedLogs: [{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_COMMITSERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","version","component","duration"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_NOTIFICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","level","message","notification_event","service","destination","success","duration_ms","status_code","error","app","namespace","reason","resource","trigger_count","template_count","service_count","enabled"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ACK_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","err","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","kind","name","namespace","aws.service","version","type","generation","is_adopted","iam_role_selector","role","diff"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_SERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","name","namespace","reason","application","user","grpc.code","grpc.method","grpc.service","grpc.time_ms","grpc.method_type","grpc.error","type","duration","dest-namespace","dest-server","project"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","application","app-namespace","project","dest-server","dest-namespace","dest-name","comparison-level","time_ms","patch_ms","setop_ms","compare_app_state_ms","refresh_app_conditions_ms","process_refresh_app_conditions_errors_ms","comparison_with_nothing_ms","name","namespace","app_status_update_ms","auto_sync_ms","diff_ms","git_ms","health_ms","live_ms","manifests_ms","repo_ms","sync_ms","cluster","syncId","duration","eventType","kind"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_APPLICATIONSET_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","name","namespace","application","app-namespace","project","applicationset","action","count","requeueAfter","type","version","err","repoURL","revision"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_REPOSERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","grpc.code","grpc.method","grpc.service","grpc.time_ms","grpc.method_type","grpc.component","grpc.error","version","component","duration","execID"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_KRO_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","err","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","gvr","crd","name","namespace","type","breakingChanges","summary","existingRGDID","newRGDID"],"mandatoryFields":["resource_arn","event_timestamp"]}]
│    │  └ vendedLogs
│    │     └[~] logType: EKS_CAPABILITY_ACK_LOGS
│    │       └optionalFields:
│    │        ├- [timestamp, resource_id, stream, level, message, err, error, controller, controllerGroup, controllerKind, reconcileID, worker-count, kind, name, namespace, aws.service, version, type, generation, is_adopted, iam_role_selector, role]
│    │        └+ [timestamp, resource_id, stream, level, message, err, error, controller, controllerGroup, controllerKind, reconcileID, worker-count, kind, name, namespace, aws.service, version, type, generation, is_adopted, iam_role_selector, role, diff]
│    └[~]  resource AWS::EKS::Cluster
│       └ types
│          ├[~] type ElasticLoadBalancing
│          │ └ properties
│          │    └[+] GatewayApi: GatewayApi
│          ├[+]  type GatewayApi
│          │  ├      documentation: The Gateway API configuration for the load balancing capability of EKS Auto Mode.
│          │  │      name: GatewayApi
│          │  └ properties
│          │     └ Crds: GatewayApiCrds (required)
│          └[+]  type GatewayApiCrds
│             ├      documentation: The Gateway API Custom Resource Definition (CRD) configuration for the cluster.
│             │      name: GatewayApiCrds
│             └ properties
│                └ Managed: boolean (required)
├[~] service aws-imagebuilder
│ └ resources
│    └[~]  resource AWS::ImageBuilder::InfrastructureConfiguration
│       ├ properties
│       │  ├[+] ParentInstance: ParentInstance
│       │  └[+] TerminateInstanceOnCompletion: boolean
│       └ types
│          ├[+]  type AutoScalingGroup
│          │  ├      documentation: Identifies the Amazon EC2 Auto Scaling group that Image Builder takes the build instance from, and how long Image Builder waits when the group has no instance available.
│          │  │      name: AutoScalingGroup
│          │  └ properties
│          │     ├ Name: string (required)
│          │     └ CapacityWaitTimeoutSeconds: integer
│          └[+]  type ParentInstance
│             ├      documentation: Settings for building on an instance that is already running, instead of an instance that Image Builder launches for the build.
│             │      name: ParentInstance
│             └ properties
│                └ AutoScalingGroup: AutoScalingGroup (required)
├[~] service aws-iot
│ └ resources
│    └[+]  resource AWS::IoT::OTAUpdate
│       ├      name: OTAUpdate
│       │      cloudFormationType: AWS::IoT::OTAUpdate
│       │      documentation: Creates an IoT OTA update on a target group of things or groups.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:iot:${Region}:${Account}:otaupdate/${OtaUpdateId}
│       │      primaryIdentifier: ["OtaUpdateArn"]
│       ├ properties
│       │  ├ OtaUpdateId: string (required, immutable)
│       │  ├ Description: string (immutable)
│       │  ├ Targets: Array<string> (required, immutable)
│       │  ├ Protocols: Array<string<MQTT|HTTP>> (immutable)
│       │  ├ TargetSelection: string<CONTINUOUS|SNAPSHOT> (immutable)
│       │  ├ AwsJobExecutionsRolloutConfig: AwsJobExecutionsRolloutConfig (immutable)
│       │  ├ AwsJobPresignedUrlConfig: AwsJobPresignedUrlConfig (immutable)
│       │  ├ AwsJobAbortConfig: AwsJobAbortConfig (immutable)
│       │  ├ AwsJobTimeoutConfig: AwsJobTimeoutConfig (immutable)
│       │  ├ Files: Array<OTAUpdateFile> (required, immutable)
│       │  ├ RoleArn: string (immutable)
│       │  ├ AdditionalParameters: Map<string, string> (immutable)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ OtaUpdateArn: string
│       │  ├ OtaUpdateStatus: string<CREATE_PENDING|CREATE_IN_PROGRESS|CREATE_COMPLETE|CREATE_FAILED|DELETE_IN_PROGRESS|DELETE_FAILED>
│       │  ├ CreationDate: string
│       │  └ LastModifiedDate: string
│       └ types
│          ├ type AwsJobAbortConfig
│          │ ├      name: AwsJobAbortConfig
│          │ └ properties
│          │    └ AbortCriteriaList: Array<AwsJobAbortCriteria> (required)
│          ├ type AwsJobAbortCriteria
│          │ ├      name: AwsJobAbortCriteria
│          │ └ properties
│          │    ├ FailureType: string<FAILED|REJECTED|TIMED_OUT|ALL> (required)
│          │    ├ Action: string<CANCEL> (required)
│          │    ├ ThresholdPercentage: number (required)
│          │    └ MinNumberOfExecutedThings: integer (required)
│          ├ type AwsJobExecutionsRolloutConfig
│          │ ├      name: AwsJobExecutionsRolloutConfig
│          │ └ properties
│          │    ├ MaximumPerMinute: integer
│          │    └ ExponentialRate: AwsJobExponentialRolloutRate
│          ├ type AwsJobExponentialRolloutRate
│          │ ├      name: AwsJobExponentialRolloutRate
│          │ └ properties
│          │    ├ BaseRatePerMinute: integer (required)
│          │    ├ IncrementFactor: number (required)
│          │    └ RateIncreaseCriteria: AwsJobRateIncreaseCriteria (required)
│          ├ type AwsJobPresignedUrlConfig
│          │ ├      name: AwsJobPresignedUrlConfig
│          │ └ properties
│          │    └ ExpiresInSec: integer
│          ├ type AwsJobRateIncreaseCriteria
│          │ ├      name: AwsJobRateIncreaseCriteria
│          │ └ properties
│          │    ├ NumberOfNotifiedThings: integer
│          │    └ NumberOfSucceededThings: integer
│          ├ type AwsJobTimeoutConfig
│          │ ├      name: AwsJobTimeoutConfig
│          │ └ properties
│          │    └ InProgressTimeoutInMinutes: integer
│          ├ type CodeSigning
│          │ ├      name: CodeSigning
│          │ └ properties
│          │    ├ AwsSignerJobId: string
│          │    ├ StartSigningJobParameter: StartSigningJobParameter
│          │    └ CustomCodeSigning: CustomCodeSigning
│          ├ type CodeSigningCertificateChain
│          │ ├      name: CodeSigningCertificateChain
│          │ └ properties
│          │    ├ CertificateName: string
│          │    └ InlineDocument: string
│          ├ type CodeSigningSignature
│          │ ├      name: CodeSigningSignature
│          │ └ properties
│          │    └ InlineDocument: string
│          ├ type CustomCodeSigning
│          │ ├      name: CustomCodeSigning
│          │ └ properties
│          │    ├ Signature: CodeSigningSignature
│          │    ├ CertificateChain: CodeSigningCertificateChain
│          │    ├ HashAlgorithm: string
│          │    └ SignatureAlgorithm: string
│          ├ type Destination
│          │ ├      name: Destination
│          │ └ properties
│          │    └ S3Destination: S3Destination
│          ├ type FileLocation
│          │ ├      name: FileLocation
│          │ └ properties
│          │    ├ Stream: Stream
│          │    └ S3Location: S3Location
│          ├ type OTAUpdateFile
│          │ ├      name: OTAUpdateFile
│          │ └ properties
│          │    ├ FileName: string
│          │    ├ FileType: integer
│          │    ├ FileVersion: string
│          │    ├ FileLocation: FileLocation
│          │    ├ CodeSigning: CodeSigning
│          │    └ Attributes: Map<string, string>
│          ├ type S3Destination
│          │ ├      name: S3Destination
│          │ └ properties
│          │    ├ Bucket: string
│          │    └ Prefix: string
│          ├ type S3Location
│          │ ├      name: S3Location
│          │ └ properties
│          │    ├ Bucket: string
│          │    ├ Key: string
│          │    └ Version: string
│          ├ type SigningProfileParameter
│          │ ├      name: SigningProfileParameter
│          │ └ properties
│          │    ├ CertificateArn: string
│          │    ├ Platform: string
│          │    └ CertificatePathOnDevice: string
│          ├ type StartSigningJobParameter
│          │ ├      name: StartSigningJobParameter
│          │ └ properties
│          │    ├ SigningProfileParameter: SigningProfileParameter
│          │    ├ SigningProfileName: string
│          │    └ Destination: Destination
│          └ type Stream
│            ├      name: Stream
│            └ properties
│               ├ StreamId: string
│               └ FileId: integer
├[~] service aws-iotevents
│ └ resources
│    ├[~]  resource AWS::IoTEvents::AlarmModel
│    │  ├      - tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      + tagInformation: undefined
│    │  │      - arnTemplate: arn:${Partition}:iotevents:${Region}:${Account}:alarmModel/${AlarmModelName}
│    │  │      + arnTemplate: undefined
│    │  │      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: undefined
│    │  └ attributes
│    │     └[-] Id: string
│    ├[~]  resource AWS::IoTEvents::DetectorModel
│    │  ├      - tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      + tagInformation: undefined
│    │  │      - arnTemplate: arn:${Partition}:iotevents:${Region}:${Account}:detectorModel/${DetectorModelName}
│    │  │      + arnTemplate: undefined
│    │  │      - primaryIdentifier: ["DetectorModelName"]
│    │  │      + primaryIdentifier: undefined
│    │  └ properties
│    │     └ EvaluationMethod: - string<BATCH|SERIAL>
│    │                         + string
│    └[~]  resource AWS::IoTEvents::Input
│       └      - tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│              + tagInformation: undefined
│              - arnTemplate: arn:${Partition}:iotevents:${Region}:${Account}:input/${InputName}
│              + arnTemplate: undefined
│              - primaryIdentifier: ["InputName"]
│              + primaryIdentifier: undefined
├[~] service aws-kinesisanalyticsv2
│ └ resources
│    └[~]  resource AWS::KinesisAnalyticsV2::Application
│       └ types
│          ├[~] type ApplicationRestoreConfiguration
│          │ └ properties
│          │    └[+] SnapshotArn: string
│          └[~] type ApplicationSnapshotConfiguration
│            └ properties
│               └[+] SnapshotMode: string<APPLICATION_SNAPSHOTS_LEGACY|ENHANCED_SNAPSHOTS>
├[~] service aws-kms
│ └ resources
│    └[~]  resource AWS::KMS::Key
│       └ properties
│          ├ KeySpec: - string<SYMMETRIC_DEFAULT|RSA_2048|RSA_3072|RSA_4096|ECC_NIST_P256|ECC_NIST_P384|ECC_NIST_P521|ECC_SECG_P256K1|HMAC_224|HMAC_256|HMAC_384|HMAC_512|SM2|ML_DSA_44|ML_DSA_65|ML_DSA_87|ECC_NIST_EDWARDS25519> (default="SYMMETRIC_DEFAULT")
│          │          + string<SYMMETRIC_DEFAULT|RSA_2048|RSA_3072|RSA_4096|ECC_NIST_P256|ECC_NIST_P384|ECC_NIST_P521|ECC_SECG_P256K1|HMAC_224|HMAC_256|HMAC_384|HMAC_512|SM2|ML_DSA_44|ML_DSA_65|ML_DSA_87|ECC_NIST_EDWARDS25519|ML_KEM_512|ML_KEM_768|ML_KEM_1024> (default="SYMMETRIC_DEFAULT")
│          └ KeyUsage: - string<ENCRYPT_DECRYPT|SIGN_VERIFY|GENERATE_VERIFY_MAC|KEY_AGREEMENT> (default="ENCRYPT_DECRYPT")
│                      + string<ENCRYPT_DECRYPT|SIGN_VERIFY|GENERATE_VERIFY_MAC|KEY_AGREEMENT|ENCAPSULATE_DECAPSULATE> (default="ENCRYPT_DECRYPT")
├[~] service aws-lambda
│ └ resources
│    └[~]  resource AWS::Lambda::NetworkConnector
│       └ types
│          └[~] type VpcEgressConfiguration
│            └ properties
│               └[+] ElasticIpConfiguration: json
├[~] service aws-lex
│ └ resources
│    └[~]  resource AWS::Lex::Bot
│       └ types
│          ├[~] type IntentConfirmationSetting
│          │ └ properties
│          │    └ PromptSpecification: - PromptSpecification (required)
│          │                           + PromptSpecification
│          ├[~] type NluImprovementSpecification
│          │ └ properties
│          │    └ AssistedNluMode: - string<Primary|Fallback>
│          │                       + string<Primary|Fallback|DialogManager>
│          └[~] type WaitAndContinueSpecification
│            └ properties
│               ├ ContinueResponse: - ResponseSpecification (required)
│               │                   + ResponseSpecification
│               └ WaitingResponse: - ResponseSpecification (required)
│                                  + ResponseSpecification
├[~] service aws-location
│ └ resources
│    └[~]  resource AWS::Location::GeofenceCollection
│       └      - arnTemplate: arn:${Partition}:geo:${Region}:${Account}:geofence-collection/${GeofenceCollectionName}
│              + arnTemplate: arn:${Partition}:geo:${Region}:${Account}:geofence-collection/${CollectionName}
├[~] service aws-lookoutvision
│ └ resources
│    └[~]  resource AWS::LookoutVision::Project
│       └      - arnTemplate: arn:${Partition}:lookoutvision:${Region}:${Account}:project/${ProjectName}
│              + arnTemplate: undefined
│              - primaryIdentifier: ["ProjectName"]
│              + primaryIdentifier: undefined
├[~] service aws-mediaconnect
│ └ resources
│    ├[+]  resource AWS::MediaConnect::DestinationEndpoint
│    │  ├      name: DestinationEndpoint
│    │  │      cloudFormationType: AWS::MediaConnect::DestinationEndpoint
│    │  │      documentation: Represents a destination endpoint in AWS Elemental MediaConnect that can be connected to a router output
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ Configuration: DestinationEndpointConfiguration (required)
│    │  │  ├ Description: string
│    │  │  ├ RegionName: string (immutable)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  ├ AssociatedResourceDetails: DestinationEndpointAssociatedResourceDetails
│    │  │  ├ AvailabilityZone: string
│    │  │  ├ AvailabilityZoneId: string
│    │  │  ├ ConnectionState: string<CONNECTED|DISCONNECTED|CONNECTING|DISCONNECTING>
│    │  │  ├ CreatedAt: string
│    │  │  ├ DestinationType: string<STANDARD|ROUTER_INPUT>
│    │  │  ├ Id: string
│    │  │  ├ LifecycleManagement: string<MANAGED|UNMANAGED>
│    │  │  ├ Name: string
│    │  │  ├ RegistrationState: string<REGISTERED|REGISTERING|DEREGISTERING|REGISTRATION_FAILED>
│    │  │  └ UpdatedAt: string
│    │  └ types
│    │     ├ type DestinationEndpointAssociatedResourceDetails
│    │     │ ├      name: DestinationEndpointAssociatedResourceDetails
│    │     │ └ properties
│    │     │    ├ Standard: json
│    │     │    └ RouterInput: RouterInputDestinationEndpointAssociatedResourceDetails
│    │     ├ type DestinationEndpointConfiguration
│    │     │ ├      name: DestinationEndpointConfiguration
│    │     │ └ properties
│    │     │    ├ Standard: StandardDestinationEndpointConfiguration
│    │     │    └ RouterInput: RouterInputDestinationEndpointConfiguration (immutable)
│    │     ├ type EndpointEncryptionSecretConfiguration
│    │     │ ├      documentation: The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.
│    │     │ │      name: EndpointEncryptionSecretConfiguration
│    │     │ └ properties
│    │     │    └ SecretArn: string (required)
│    │     ├ type PublicDestinationEndpointNetworkingConfiguration
│    │     │ ├      documentation: The networking configuration for a publicly accessible destination endpoint, including the CIDR blocks that are allowed to connect.
│    │     │ │      name: PublicDestinationEndpointNetworkingConfiguration
│    │     │ └ properties
│    │     │    └ DestinationAllowRules: Array<PublicDestinationEndpointNetworkingConfigurationAllowRule> (required)
│    │     ├ type PublicDestinationEndpointNetworkingConfigurationAllowRule
│    │     │ ├      documentation: A rule that allows a specific CIDR block to connect to the public destination endpoint.
│    │     │ │      name: PublicDestinationEndpointNetworkingConfigurationAllowRule
│    │     │ └ properties
│    │     │    └ Cidr: string (required)
│    │     ├ type RistStandardDestinationEndpointConfiguration
│    │     │ ├      documentation: The configuration settings for a destination endpoint that uses the RIST protocol.
│    │     │ │      name: RistStandardDestinationEndpointConfiguration
│    │     │ └ properties
│    │     │    ├ DestinationAddress: string (required)
│    │     │    └ DestinationIngestPort: integer (required)
│    │     ├ type RouterInputDestinationEndpointAssociatedResourceDetails
│    │     │ ├      documentation: The details of the router input that is associated with a destination endpoint.
│    │     │ │      name: RouterInputDestinationEndpointAssociatedResourceDetails
│    │     │ └ properties
│    │     │    ├ Name: string (required)
│    │     │    ├ MaximumBitrate: integer (required)
│    │     │    └ State: string<CREATING|STANDBY|STARTING|ACTIVE|STOPPING|DELETING|UPDATING|ERROR|RECOVERING|MIGRATING> (required)
│    │     ├ type RouterInputDestinationEndpointConfiguration
│    │     │ ├      documentation: The configuration settings for a destination endpoint that represents a router input.
│    │     │ │      name: RouterInputDestinationEndpointConfiguration
│    │     │ └ properties
│    │     │    └ RouterInputArn: string (required)
│    │     ├ type RtpStandardDestinationEndpointConfiguration
│    │     │ ├      documentation: The configuration settings for a destination endpoint that uses the RTP protocol.
│    │     │ │      name: RtpStandardDestinationEndpointConfiguration
│    │     │ └ properties
│    │     │    ├ DestinationAddress: string (required)
│    │     │    ├ DestinationIngestPort: integer (required)
│    │     │    └ ForwardErrorCorrectionState: string<ENABLED|DISABLED> (required)
│    │     ├ type SrtCallerStandardDestinationEndpointConfiguration
│    │     │ ├      documentation: The configuration settings for a destination endpoint that uses SRT in caller mode.
│    │     │ │      name: SrtCallerStandardDestinationEndpointConfiguration
│    │     │ └ properties
│    │     │    ├ SourceListenerPort: integer (required)
│    │     │    ├ MinimumLatencyMilliseconds: integer (required)
│    │     │    └ EncryptionPassphrase: EndpointEncryptionSecretConfiguration
│    │     ├ type SrtListenerStandardDestinationEndpointConfiguration
│    │     │ ├      documentation: The configuration settings for a destination endpoint that uses SRT in listener mode.
│    │     │ │      name: SrtListenerStandardDestinationEndpointConfiguration
│    │     │ └ properties
│    │     │    ├ DestinationAddress: string (required)
│    │     │    ├ DestinationIngestPort: integer (required)
│    │     │    ├ MinimumLatencyMilliseconds: integer (required)
│    │     │    ├ StreamId: string
│    │     │    └ EncryptionPassphrase: EndpointEncryptionSecretConfiguration
│    │     ├ type StandardDestinationEndpointConfiguration
│    │     │ ├      documentation: The configuration settings for a standard destination endpoint.
│    │     │ │      name: StandardDestinationEndpointConfiguration
│    │     │ └ properties
│    │     │    ├ Name: string (required)
│    │     │    ├ DestinationNetworkingConfiguration: StandardDestinationEndpointNetworkingConfiguration (required)
│    │     │    ├ ProtocolConfiguration: StandardDestinationEndpointProtocolConfiguration (required)
│    │     │    ├ DestinationNetworkingType: string<PUBLIC|VPC>
│    │     │    └ Protocol: string<RTP|RIST|SRT_CALLER|SRT_LISTENER>
│    │     ├ type StandardDestinationEndpointNetworkingConfiguration
│    │     │ ├      name: StandardDestinationEndpointNetworkingConfiguration
│    │     │ └ properties
│    │     │    ├ Public: PublicDestinationEndpointNetworkingConfiguration
│    │     │    └ Vpc: VpcDestinationEndpointNetworkingConfiguration (immutable)
│    │     ├ type StandardDestinationEndpointProtocolConfiguration
│    │     │ ├      name: StandardDestinationEndpointProtocolConfiguration
│    │     │ └ properties
│    │     │    ├ Rist: RistStandardDestinationEndpointConfiguration
│    │     │    ├ SrtListener: SrtListenerStandardDestinationEndpointConfiguration
│    │     │    ├ SrtCaller: SrtCallerStandardDestinationEndpointConfiguration
│    │     │    └ Rtp: RtpStandardDestinationEndpointConfiguration
│    │     └ type VpcDestinationEndpointNetworkingConfiguration
│    │       ├      documentation: The networking configuration for a destination endpoint in a virtual private cloud (VPC).
│    │       │      name: VpcDestinationEndpointNetworkingConfiguration
│    │       └ properties
│    │          ├ SecurityGroupIds: Array<string> (required)
│    │          └ SubnetId: string (required)
│    ├[~]  resource AWS::MediaConnect::RouterInput
│    │  ├ properties
│    │  │  └ Tier: - string<INPUT_100|INPUT_50|INPUT_20> (required)
│    │  │          + string<INPUT_100|INPUT_50|INPUT_20|INPUT_500|INPUT_250> (required)
│    │  ├ attributes
│    │  │  ├[+] AssociatedDestinationEndpointArns: Array<string>
│    │  │  └ InputType: - string<STANDARD|FAILOVER|MERGE|MEDIACONNECT_FLOW|MEDIALIVE_CHANNEL>
│    │  │               + string<STANDARD|FAILOVER|MERGE|MEDIACONNECT_FLOW|MEDIALIVE_CHANNEL|DESTINATION_ENDPOINT>
│    │  └ types
│    │     ├[+]  type DestinationEndpointRouterInputConfiguration
│    │     │  ├      documentation: Configuration settings for a router input that is represented by a destination endpoint.
│    │     │  │      name: DestinationEndpointRouterInputConfiguration
│    │     │  └ properties
│    │     │     ├ EndpointLifecycleManagement: string<MANAGED|UNMANAGED> (required)
│    │     │     ├ SourceTransitDecryptionType: string<SECRETS_MANAGER|AUTOMATIC>
│    │     │     └ SourceTransitDecryption: EndpointEncryptionConfiguration (required)
│    │     ├[+]  type EndpointEncryptionConfiguration
│    │     │  ├      name: EndpointEncryptionConfiguration
│    │     │  └ properties
│    │     │     ├ SecretsManager: SecretsManagerEndpointEncryptionConfiguration
│    │     │     └ Automatic: json
│    │     ├[+]  type EndpointEncryptionSecretConfiguration
│    │     │  ├      documentation: The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.
│    │     │  │      name: EndpointEncryptionSecretConfiguration
│    │     │  └ properties
│    │     │     └ SecretArn: string (required)
│    │     ├[~] type MediaConnectFlowRouterInputConfiguration
│    │     │ └      - documentation: Configuration settings for connecting a router input to a flow output.
│    │     │        + documentation: Configuration settings for connecting a router input to a flow output. To connect the router input to the flow output, provide both flowArn and flowOutputArn. To disconnect it, call the update operation and omit both fields while keeping this configuration object. You can't change sourceTransitDecryption while the router input is connected to a flow output. To change it, first disconnect the router input, then update the decryption.
│    │     ├[~] type MediaLiveChannelRouterInputConfiguration
│    │     │ └      - documentation: Configuration settings for connecting a router input to a MediaLive channel output.
│    │     │        + documentation: Configuration settings for connecting a router input to a MediaLive channel output. To connect the router input to the MediaLive channel output, provide all three of mediaLiveChannelArn, mediaLivePipelineId, and mediaLiveChannelOutputName. To disconnect it, call the update operation and omit all three fields while keeping this configuration object. You can't change sourceTransitDecryption while the router input is connected to a MediaLive channel output. To change it, first disconnect the router input, then update the decryption.
│    │     ├[~] type RouterInputConfiguration
│    │     │ └ properties
│    │     │    ├[+] DestinationEndpoint: DestinationEndpointRouterInputConfiguration
│    │     │    ├ MediaConnectFlow: (documentation changed)
│    │     │    └ MediaLiveChannel: (documentation changed)
│    │     └[+]  type SecretsManagerEndpointEncryptionConfiguration
│    │        ├      documentation: The endpoint encryption configuration for connections that use a key or passphrase that you store in Secrets Manager.
│    │        │      name: SecretsManagerEndpointEncryptionConfiguration
│    │        └ properties
│    │           ├ EncryptionSecretType: string<AES_128_KEY|AES_192_KEY|AES_256_KEY|SRT_PASSPHRASE>
│    │           └ EncryptionSecret: EndpointEncryptionSecretConfiguration (required)
│    ├[~]  resource AWS::MediaConnect::RouterOutput
│    │  ├ properties
│    │  │  └ Tier: - string<OUTPUT_100|OUTPUT_50|OUTPUT_20> (required)
│    │  │          + string<OUTPUT_100|OUTPUT_50|OUTPUT_20|OUTPUT_500|OUTPUT_250> (required)
│    │  ├ attributes
│    │  │  ├[+] AssociatedSourceEndpointArns: Array<string>
│    │  │  └ OutputType: - string<STANDARD|MEDIACONNECT_FLOW|MEDIALIVE_INPUT>
│    │  │                + string<STANDARD|MEDIACONNECT_FLOW|MEDIALIVE_INPUT|SOURCE_ENDPOINT>
│    │  └ types
│    │     ├[+]  type EndpointEncryptionConfiguration
│    │     │  ├      name: EndpointEncryptionConfiguration
│    │     │  └ properties
│    │     │     ├ SecretsManager: SecretsManagerEndpointEncryptionConfiguration
│    │     │     └ Automatic: json
│    │     ├[+]  type EndpointEncryptionSecretConfiguration
│    │     │  ├      documentation: The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.
│    │     │  │      name: EndpointEncryptionSecretConfiguration
│    │     │  └ properties
│    │     │     └ SecretArn: string (required)
│    │     ├[~] type MediaConnectFlowRouterOutputConfiguration
│    │     │ └      - documentation: Configuration settings for connecting a router output to a MediaConnect flow source.
│    │     │        + documentation: Configuration settings for connecting a router output to a MediaConnect flow source. To connect the router output to the flow source, provide both flowArn and flowSourceArn. To disconnect it, call the update operation and omit both fields while keeping this configuration object. You can't change destinationTransitEncryption while the router output is connected to a flow source. To change it, first disconnect the router output, then update the encryption.
│    │     ├[~] type MediaLiveInputRouterOutputConfiguration
│    │     │ └      - documentation: Configuration settings for connecting a router output to a MediaLive input.
│    │     │        + documentation: Configuration settings for connecting a router output to a MediaLive input. To connect the router output to the MediaLive input, provide both mediaLiveInputArn and mediaLivePipelineId. To disconnect it, call the update operation and omit both fields while keeping this configuration object. You can't change destinationTransitEncryption while the router output is connected to a MediaLive input. To change it, first disconnect the router output, then update the encryption.
│    │     ├[~] type RouterOutputConfiguration
│    │     │ └ properties
│    │     │    ├ MediaConnectFlow: (documentation changed)
│    │     │    ├ MediaLiveInput: (documentation changed)
│    │     │    └[+] SourceEndpoint: SourceEndpointRouterOutputConfiguration
│    │     ├[+]  type SecretsManagerEndpointEncryptionConfiguration
│    │     │  ├      documentation: The endpoint encryption configuration for connections that use a key or passphrase that you store in Secrets Manager.
│    │     │  │      name: SecretsManagerEndpointEncryptionConfiguration
│    │     │  └ properties
│    │     │     ├ EncryptionSecretType: string<AES_128_KEY|AES_192_KEY|AES_256_KEY|SRT_PASSPHRASE>
│    │     │     └ EncryptionSecret: EndpointEncryptionSecretConfiguration (required)
│    │     └[+]  type SourceEndpointRouterOutputConfiguration
│    │        ├      documentation: Configuration settings for a router output that is represented by a source endpoint.
│    │        │      name: SourceEndpointRouterOutputConfiguration
│    │        └ properties
│    │           ├ EndpointLifecycleManagement: string<MANAGED|UNMANAGED> (required)
│    │           ├ DestinationTransitEncryptionType: string<SECRETS_MANAGER|AUTOMATIC>
│    │           └ DestinationTransitEncryption: EndpointEncryptionConfiguration (required)
│    └[+]  resource AWS::MediaConnect::SourceEndpoint
│       ├      name: SourceEndpoint
│       │      cloudFormationType: AWS::MediaConnect::SourceEndpoint
│       │      documentation: Represents a source endpoint in AWS Elemental MediaConnect that can be connected to an input
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ Configuration: SourceEndpointConfiguration (required)
│       │  ├ Description: string
│       │  ├ RegionName: string (immutable)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ AssociatedResourceDetails: SourceEndpointAssociatedResourceDetails
│       │  ├ AvailabilityZone: string
│       │  ├ AvailabilityZoneId: string
│       │  ├ ConnectionState: string<CONNECTED|DISCONNECTED|CONNECTING|DISCONNECTING>
│       │  ├ CreatedAt: string
│       │  ├ Id: string
│       │  ├ LifecycleManagement: string<MANAGED|UNMANAGED>
│       │  ├ Name: string
│       │  ├ RegistrationState: string<REGISTERED|REGISTERING|DEREGISTERING|REGISTRATION_FAILED>
│       │  ├ SourceType: string<STANDARD|ROUTER_OUTPUT>
│       │  └ UpdatedAt: string
│       └ types
│          ├ type EndpointEncryptionSecretConfiguration
│          │ ├      documentation: The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.
│          │ │      name: EndpointEncryptionSecretConfiguration
│          │ └ properties
│          │    └ SecretArn: string (required)
│          ├ type PublicSourceEndpointNetworkingConfiguration
│          │ ├      documentation: The networking configuration for a publicly accessible source endpoint, including the CIDR blocks that are allowed to connect.
│          │ │      name: PublicSourceEndpointNetworkingConfiguration
│          │ └ properties
│          │    └ SourceAllowRules: Array<PublicSourceEndpointNetworkingConfigurationAllowRule> (required)
│          ├ type PublicSourceEndpointNetworkingConfigurationAllowRule
│          │ ├      documentation: A rule that allows a specific CIDR block to connect to the public source endpoint.
│          │ │      name: PublicSourceEndpointNetworkingConfigurationAllowRule
│          │ └ properties
│          │    └ Cidr: string (required)
│          ├ type RistStandardSourceEndpointConfiguration
│          │ ├      documentation: The configuration settings for a source endpoint that uses the RIST protocol.
│          │ │      name: RistStandardSourceEndpointConfiguration
│          │ └ properties
│          │    ├ DestinationIngestPort: integer (required)
│          │    └ RecoveryLatencyMilliseconds: integer (required)
│          ├ type RouterOutputSourceEndpointAssociatedResourceDetails
│          │ ├      documentation: The details of the router output that is associated with a source endpoint.
│          │ │      name: RouterOutputSourceEndpointAssociatedResourceDetails
│          │ └ properties
│          │    ├ Name: string (required)
│          │    ├ MaximumBitrate: integer (required)
│          │    └ State: string<CREATING|STANDBY|STARTING|ACTIVE|STOPPING|DELETING|UPDATING|ERROR|RECOVERING|MIGRATING> (required)
│          ├ type RouterOutputSourceEndpointConfiguration
│          │ ├      documentation: The configuration settings for a source endpoint that represents a router output.
│          │ │      name: RouterOutputSourceEndpointConfiguration
│          │ └ properties
│          │    └ RouterOutputArn: string (required)
│          ├ type RtpStandardSourceEndpointConfiguration
│          │ ├      documentation: The configuration settings for a source endpoint that uses the RTP protocol.
│          │ │      name: RtpStandardSourceEndpointConfiguration
│          │ └ properties
│          │    ├ DestinationIngestPort: integer (required)
│          │    └ ForwardErrorCorrectionState: string<ENABLED|DISABLED> (required)
│          ├ type SourceEndpointAssociatedResourceDetails
│          │ ├      name: SourceEndpointAssociatedResourceDetails
│          │ └ properties
│          │    ├ Standard: json
│          │    └ RouterOutput: RouterOutputSourceEndpointAssociatedResourceDetails
│          ├ type SourceEndpointConfiguration
│          │ ├      name: SourceEndpointConfiguration
│          │ └ properties
│          │    ├ Standard: StandardSourceEndpointConfiguration
│          │    └ RouterOutput: RouterOutputSourceEndpointConfiguration (immutable)
│          ├ type SrtCallerStandardSourceEndpointConfiguration
│          │ ├      documentation: The configuration settings for a source endpoint that uses SRT in caller mode.
│          │ │      name: SrtCallerStandardSourceEndpointConfiguration
│          │ └ properties
│          │    ├ DestinationIngestPort: integer (required)
│          │    ├ MinimumLatencyMilliseconds: integer (required)
│          │    └ EncryptionPassphrase: EndpointEncryptionSecretConfiguration
│          ├ type SrtListenerStandardSourceEndpointConfiguration
│          │ ├      documentation: The configuration settings for a source endpoint that uses SRT in listener mode.
│          │ │      name: SrtListenerStandardSourceEndpointConfiguration
│          │ └ properties
│          │    ├ SourceListenerPort: integer (required)
│          │    ├ SourceAddress: string (required)
│          │    ├ MinimumLatencyMilliseconds: integer (required)
│          │    ├ StreamId: string
│          │    └ EncryptionPassphrase: EndpointEncryptionSecretConfiguration
│          ├ type StandardSourceEndpointConfiguration
│          │ ├      documentation: The configuration settings for a standard source endpoint.
│          │ │      name: StandardSourceEndpointConfiguration
│          │ └ properties
│          │    ├ Name: string (required)
│          │    ├ SourceNetworkingConfiguration: StandardSourceEndpointNetworkingConfiguration (required)
│          │    ├ ProtocolConfiguration: StandardSourceEndpointProtocolConfiguration (required)
│          │    ├ SourceNetworkingType: string<PUBLIC|VPC>
│          │    └ Protocol: string<RTP|RIST|SRT_CALLER|SRT_LISTENER>
│          ├ type StandardSourceEndpointNetworkingConfiguration
│          │ ├      name: StandardSourceEndpointNetworkingConfiguration
│          │ └ properties
│          │    ├ Public: PublicSourceEndpointNetworkingConfiguration
│          │    └ Vpc: VpcSourceEndpointNetworkingConfiguration (immutable)
│          ├ type StandardSourceEndpointProtocolConfiguration
│          │ ├      name: StandardSourceEndpointProtocolConfiguration
│          │ └ properties
│          │    ├ Rist: RistStandardSourceEndpointConfiguration
│          │    ├ SrtListener: SrtListenerStandardSourceEndpointConfiguration
│          │    ├ SrtCaller: SrtCallerStandardSourceEndpointConfiguration
│          │    └ Rtp: RtpStandardSourceEndpointConfiguration
│          └ type VpcSourceEndpointNetworkingConfiguration
│            ├      documentation: The networking configuration for a source endpoint in a virtual private cloud (VPC).
│            │      name: VpcSourceEndpointNetworkingConfiguration
│            └ properties
│               ├ SecurityGroupIds: Array<string> (required)
│               └ SubnetId: string (required)
├[~] service aws-mediaconvert
│ └ resources
│    └[~]  resource AWS::MediaConvert::CertificateAssociation
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:mediaconvert:${Region}:${Account}:certificates/${CertificateArn}
├[~] service aws-mediatailor
│ └ resources
│    └[~]  resource AWS::MediaTailor::Function
│       └ types
│          ├[~] type AwsServiceRequestConfiguration
│          │ └ properties
│          │    └[+] Cache: HttpRequestCacheConfiguration
│          ├[+]  type HttpRequestCacheConfiguration
│          │  ├      documentation: The optional response-caching configuration shared by the HTTP-based function types (HTTP_REQUEST, AWS_SERVICE_REQUEST, and VAST_REQUEST). When you provide this configuration, MediaTailor caches function responses with HTTP status codes 200, 203, 204, 404, 405, 410, 414, or 501. For a cacheable response, MediaTailor uses the Cache-Control max-age directive limited to the range between TtlMinimumSeconds and TtlMaximumSeconds. If no max-age directive is present, MediaTailor uses TtlMinimumSeconds. Cached HTTP responses are scoped per playback configuration, not per function.
│          │  │      name: HttpRequestCacheConfiguration
│          │  └ properties
│          │     ├ TtlMinimumSeconds: integer (required)
│          │     ├ TtlMaximumSeconds: integer (required)
│          │     └ Key: string
│          ├[~] type HttpRequestConfiguration
│          │ └ properties
│          │    └[+] Cache: HttpRequestCacheConfiguration
│          └[~] type VastRequestConfiguration
│            └ properties
│               └[+] Cache: HttpRequestCacheConfiguration
├[~] service aws-mgn
│ └ resources
│    ├[+]  resource AWS::MGN::Application
│    │  ├      name: Application
│    │  │      cloudFormationType: AWS::MGN::Application
│    │  │      documentation: An MGN Application is a logical grouping of source servers being migrated together using AWS Application Migration Service.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ Name: string (required)
│    │  │  ├ Description: string
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ ApplicationID: string
│    │     ├ Arn: string
│    │     ├ IsArchived: boolean
│    │     ├ CreationDateTime: string
│    │     └ LastModifiedDateTime: string
│    ├[+]  resource AWS::MGN::ReplicationConfigurationTemplate
│    │  ├      name: ReplicationConfigurationTemplate
│    │  │      cloudFormationType: AWS::MGN::ReplicationConfigurationTemplate
│    │  │      documentation: Account level Replication Configuration Template for AWS Application Migration Service.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ StagingAreaSubnetId: string (required)
│    │  │  ├ AssociateDefaultSecurityGroup: boolean (required)
│    │  │  ├ ReplicationServersSecurityGroupsIDs: Array<string> (required)
│    │  │  ├ ReplicationServerInstanceType: string (required)
│    │  │  ├ UseDedicatedReplicationServer: boolean (required)
│    │  │  ├ DefaultLargeStagingDiskType: string<GP2|ST1|GP3> (required)
│    │  │  ├ EbsEncryption: string<DEFAULT|CUSTOM> (required)
│    │  │  ├ EbsEncryptionKeyArn: string
│    │  │  ├ BandwidthThrottling: integer (required)
│    │  │  ├ DataPlaneRouting: string<PRIVATE_IP|PUBLIC_IP> (required)
│    │  │  ├ CreatePublicIP: boolean (required)
│    │  │  ├ StagingAreaTags: Map<string, string> (required)
│    │  │  ├ UseFipsEndpoint: boolean
│    │  │  ├ InternetProtocol: string<IPV4|IPV6>
│    │  │  ├ StoreSnapshotOnLocalZone: boolean
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ Arn: string
│    │     └ ReplicationConfigurationTemplateID: string
│    └[+]  resource AWS::MGN::Wave
│       ├      name: Wave
│       │      cloudFormationType: AWS::MGN::Wave
│       │      documentation: Resource schema for AWS::MGN::Wave. A Wave is a logical grouping used in Application Migration Service to organize and manage the migration of applications.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:mgn:${Region}:${Account}:wave/${WaveID}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ Name: string (required)
│       │  ├ Description: string
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ WaveID: string
│       │  ├ Arn: string
│       │  ├ IsArchived: boolean
│       │  ├ WaveAggregatedStatus: WaveAggregatedStatus
│       │  ├ CreationDateTime: string
│       │  └ LastModifiedDateTime: string
│       └ types
│          └ type WaveAggregatedStatus
│            ├      documentation: The aggregated migration status of the wave.
│            │      name: WaveAggregatedStatus
│            └ properties
│               ├ HealthStatus: string<HEALTHY|LAGGING|ERROR>
│               ├ ProgressStatus: string<NOT_STARTED|IN_PROGRESS|COMPLETED>
│               └ TotalApplications: integer
├[~] service aws-neptune
│ └ resources
│    └[~]  resource AWS::Neptune::DBClusterParameterGroup
│       └      - arnTemplate: arn:aws:rds:${Region}:${Account}:cluster-pg:${ClusterPGName}
│              + arnTemplate: arn:${Partition}:rds:${Region}:${Account}:cluster-pg:${ClusterParameterGroupName}
├[~] service aws-neptunegraph
│ └ resources
│    └[~]  resource AWS::NeptuneGraph::Graph
│       └ attributes
│          ├[+] CreateTime: string
│          └[+] Status: string
├[~] service aws-networkfirewall
│ └ resources
│    ├[~]  resource AWS::NetworkFirewall::FirewallPolicy
│    │  └ types
│    │     ├[+]  type Address
│    │     │  ├      name: Address
│    │     │  └ properties
│    │     │     └ AddressDefinition: string (required)
│    │     ├[~] type FirewallPolicy
│    │     │ └ properties
│    │     │    └[+] Route53ResolvedIPValidation: Route53ResolvedIPValidation
│    │     └[+]  type Route53ResolvedIPValidation
│    │        ├      name: Route53ResolvedIPValidation
│    │        └ properties
│    │           ├ Action: string<REJECT|DROP|ALERT> (required)
│    │           ├ DNSFirewallRuleGroupId: string (required)
│    │           ├ DNSExpiryExceptionPolicy: string<REJECT|DROP|CONTINUE> (required)
│    │           ├ BypassDestinationValidationIPRanges: Array<Address>
│    │           └ SourceIPRanges: Array<Address>
│    └[~]  resource AWS::NetworkFirewall::RuleGroup
│       └      - arnTemplate: arn:${Partition}:network-firewall:${Region}:${Account}:stateless-rulegroup/${Name}
│              + arnTemplate: arn:${Partition}:network-firewall:${Region}:${Account}:stateful-rulegroup/${Name}
├[~] service aws-networkmanager
│ └ resources
│    └[~]  resource AWS::NetworkManager::GlobalNetwork
│       └      - arnTemplate: arn:${Partition}:networkmanager::${Account}:global-network/${ResourceId}
│              + arnTemplate: arn:${Partition}:networkmanager::${Account}:global-network/${GlobalNetworkId}
├[~] service aws-networkmonitor
│ └ resources
│    └[+]  resource AWS::NetworkMonitor::Probe
│       ├      name: Probe
│       │      cloudFormationType: AWS::NetworkMonitor::Probe
│       │      documentation: An Amazon CloudWatch Network Monitor probe that measures network traffic between a source subnet and a destination.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:networkmonitor:${Region}:${Account}:probe/${ProbeId}
│       │      primaryIdentifier: ["MonitorName","ProbeId"]
│       ├ properties
│       │  ├ MonitorName: string (required, immutable)
│       │  ├ SourceArn: string (required, immutable)
│       │  ├ Destination: string (required)
│       │  ├ DestinationPort: integer
│       │  ├ Protocol: string<TCP|ICMP> (required)
│       │  ├ PacketSize: integer
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ ProbeId: string
│          ├ ProbeArn: string
│          ├ AddressFamily: string<IPV4|IPV6>
│          ├ VpcId: string
│          ├ State: string<PENDING|ACTIVE|INACTIVE|ERROR|DELETING|DELETED>
│          ├ CreatedAt: string
│          └ ModifiedAt: string
├[~] service aws-omics
│ └ resources
│    └[~]  resource AWS::Omics::Configuration
│       └ types
│          └[~] type VpcConfig
│            └ properties
│               └[+] VpcOwnerAccountId: string
├[~] service aws-opensearchservice
│ └ resources
│    └[~]  resource AWS::OpenSearchService::Domain
│       ├ properties
│       │  └[+] AcceptedWarnings: Array<string>
│       └ types
│          └[~] type EncryptionAtRestOptions
│            └ properties
│               └[+] EncryptionMode: string<DISK|NATIVE>
├[~] service aws-organizations
│ └ resources
│    └[~]  resource AWS::Organizations::Policy
│       └ properties
│          └ Type: - string<AISERVICES_OPT_OUT_POLICY|BACKUP_POLICY|BEDROCK_POLICY|CHATBOT_POLICY|DECLARATIVE_POLICY_EC2|INSPECTOR_POLICY|NETWORK_SECURITY_DIRECTOR_POLICY|RESOURCE_CONTROL_POLICY|S3_POLICY|SECURITYHUB_POLICY|SERVICE_CONTROL_POLICY|TAG_POLICY|UPGRADE_ROLLOUT_POLICY> (required, immutable)
│                  + string<AISERVICES_OPT_OUT_POLICY|BACKUP_POLICY|BEDROCK_POLICY|CHATBOT_POLICY|DECLARATIVE_POLICY_EC2|GUARDDUTY_POLICY|INSPECTOR_POLICY|NETWORK_SECURITY_DIRECTOR_POLICY|RESOURCE_CONTROL_POLICY|S3_POLICY|SECURITYHUB_POLICY|SERVICE_CONTROL_POLICY|TAG_POLICY|UPGRADE_ROLLOUT_POLICY> (required, immutable)
├[~] service aws-osis
│ └ resources
│    └[+]  resource AWS::OSIS::PipelineEndpoint
│       ├      name: PipelineEndpoint
│       │      cloudFormationType: AWS::OSIS::PipelineEndpoint
│       │      documentation: Creates a VPC endpoint for an OpenSearch Ingestion pipeline, enabling private connectivity between your VPC and the pipeline.
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ PipelineArn: string (required, immutable)
│       │  └ VpcOptions: VpcOptions (required, immutable)
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ EndpointId: string
│       │  ├ Status: string<CREATING|ACTIVE|CREATE_FAILED|DELETING|REVOKING|REVOKED>
│       │  ├ VpcId: string
│       │  └ IngestEndpointUrl: string
│       └ types
│          └ type VpcOptions
│            ├      documentation: Configuration settings for the VPC endpoint.
│            │      name: VpcOptions
│            └ properties
│               ├ SubnetIds: Array<string>
│               └ SecurityGroupIds: Array<string>
├[~] service aws-pcs
│ └ resources
│    └[~]  resource AWS::PCS::ComputeNodeGroup
│       └ types
│          └[~] type CustomLaunchTemplate
│            └ properties
│               └ Version: - string (required)
│                          + string
├[~] service aws-personalize
│ └ resources
│    └[+]  resource AWS::Personalize::Recommender
│       ├      name: Recommender
│       │      cloudFormationType: AWS::Personalize::Recommender
│       │      documentation: A recommender for a Domain dataset group that generates recommendations using a domain use case recipe.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:personalize:${Region}:${Account}:recommender/${ResourceId}
│       │      primaryIdentifier: ["RecommenderArn"]
│       ├ properties
│       │  ├ Name: string (required, immutable)
│       │  ├ DatasetGroupArn: string (required, immutable)
│       │  ├ RecipeArn: string (required, immutable)
│       │  ├ RecommenderConfig: RecommenderConfig
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ RecommenderArn: string
│       │  ├ Status: string
│       │  ├ CreationDateTime: string
│       │  └ LastUpdatedDateTime: string
│       └ types
│          ├ type RecommenderConfig
│          │ ├      documentation: The configuration details of the recommender.
│          │ │      name: RecommenderConfig
│          │ └ properties
│          │    ├ ItemExplorationConfig: Map<string, string>
│          │    ├ MinRecommendationRequestsPerSecond: integer
│          │    ├ TrainingDataConfig: TrainingDataConfig
│          │    └ EnableMetadataWithRecommendations: boolean
│          └ type TrainingDataConfig
│            ├      documentation: The training data configuration to use when creating a domain recommender.
│            │      name: TrainingDataConfig
│            └ properties
│               └ ExcludedDatasetColumns: Map<string, Array<string>>
├[~] service aws-quicksight
│ └ resources
│    ├[~]  resource AWS::QuickSight::ApprovalPolicy
│    │  ├ properties
│    │  │  ├ Actions: - Array<json> (required)
│    │  │  │          + Array<string<SHARE>> (required)
│    │  │  ├ ApplicableTo: (documentation changed)
│    │  │  ├ ApprovalGroups: (documentation changed)
│    │  │  └ AssetTypes: - Array<json> (required)
│    │  │                + Array<string<AGENT|SPACE|KNOWLEDGE_BASE|FLOW>> (required)
│    │  └ types
│    │     └[~] type ApplicableTo
│    │       ├      - documentation: Scoping: who the policy applies to.
│    │       │      GROUP: `groupArns` required (one or more group ARNs).
│    │       │      + documentation: Scoping: who the policy applies to.
│    │       └ properties
│    │          └ Type: - json (required)
│    │                  + string<GROUP> (required)
│    ├[~]  resource AWS::QuickSight::CustomPermissions
│    │  └ types
│    │     └[~] type Capabilities
│    │       └ properties
│    │          ├ AccessAppsNativeDataStore: - string<DENY>
│    │          │                            + string<DENY|ALLOW>
│    │          ├ Action: - string<DENY>
│    │          │         + string<DENY|ALLOW>
│    │          ├ AddOrRunAnomalyDetectionForAnalyses: - string<DENY>
│    │          │                                      + string<DENY|ALLOW>
│    │          ├[+] AdobeAnalyticsDataSource: string<DENY|ALLOW>
│    │          ├ AmazonBedrockARSAction: - string<DENY>
│    │          │                         + string<DENY|ALLOW>
│    │          ├ AmazonBedrockFSAction: - string<DENY>
│    │          │                        + string<DENY|ALLOW>
│    │          ├ AmazonBedrockKRSAction: - string<DENY>
│    │          │                         + string<DENY|ALLOW>
│    │          ├ AmazonSThreeAction: - string<DENY>
│    │          │                     + string<DENY|ALLOW>
│    │          ├ Analysis: - string<DENY>
│    │          │           + string<DENY|ALLOW>
│    │          ├ ApproveFlowShareRequests: - string<DENY>
│    │          │                           + string<DENY|ALLOW>
│    │          ├ Apps: - string<DENY>
│    │          │       + string<DENY|ALLOW>
│    │          ├ AsanaAction: - string<DENY>
│    │          │              + string<DENY|ALLOW>
│    │          ├[+] AthenaDataSource: string<DENY|ALLOW>
│    │          ├[+] AuroraDataSource: string<DENY|ALLOW>
│    │          ├ Automate: - string<DENY>
│    │          │           + string<DENY|ALLOW>
│    │          ├ BambooHRAction: - string<DENY>
│    │          │                 + string<DENY|ALLOW>
│    │          ├[+] BedrockManagedKnowledgeBase: string<DENY|ALLOW>
│    │          ├ BoxAgentAction: - string<DENY>
│    │          │                 + string<DENY|ALLOW>
│    │          ├[+] BoxKnowledgeBase: string<DENY|ALLOW>
│    │          ├ BuildCalculatedFieldWithQ: - string<DENY>
│    │          │                            + string<DENY|ALLOW>
│    │          ├ CanvaAgentAction: - string<DENY>
│    │          │                   + string<DENY|ALLOW>
│    │          ├ ChatAgent: - string<DENY>
│    │          │            + string<DENY|ALLOW>
│    │          ├ ComprehendAction: - string<DENY>
│    │          │                   + string<DENY|ALLOW>
│    │          ├ ComprehendMedicalAction: - string<DENY>
│    │          │                          + string<DENY|ALLOW>
│    │          ├ ConfluenceAction: - string<DENY>
│    │          │                   + string<DENY|ALLOW>
│    │          ├[+] ConfluenceKnowledgeBase: string<DENY|ALLOW>
│    │          ├[+] CreateAdobeAnalyticsDataSource: string<DENY|ALLOW>
│    │          ├ CreateAndUpdateAmazonBedrockARSAction: - string<DENY>
│    │          │                                        + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateAmazonBedrockFSAction: - string<DENY>
│    │          │                                       + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateAmazonBedrockKRSAction: - string<DENY>
│    │          │                                        + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateAmazonSThreeAction: - string<DENY>
│    │          │                                    + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateApps: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateAsanaAction: - string<DENY>
│    │          │                             + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateBambooHRAction: - string<DENY>
│    │          │                                + string<DENY|ALLOW>
│    │          ├[+] CreateAndUpdateBedrockManagedKnowledgeBase: string<DENY|ALLOW>
│    │          ├ CreateAndUpdateBoxAgentAction: - string<DENY>
│    │          │                                + string<DENY|ALLOW>
│    │          ├[+] CreateAndUpdateBoxKnowledgeBase: string<DENY|ALLOW>
│    │          ├ CreateAndUpdateCanvaAgentAction: - string<DENY>
│    │          │                                  + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateComprehendAction: - string<DENY>
│    │          │                                  + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateComprehendMedicalAction: - string<DENY>
│    │          │                                         + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateConfluenceAction: - string<DENY>
│    │          │                                  + string<DENY|ALLOW>
│    │          ├[+] CreateAndUpdateConfluenceKnowledgeBase: string<DENY|ALLOW>
│    │          ├ CreateAndUpdateDashboardEmailReports: - string<DENY>
│    │          │                                       + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateDatasets: - string<DENY>
│    │          │                          + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateDataSources: - string<DENY>
│    │          │                             + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateFactSetAction: - string<DENY>
│    │          │                               + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateGenericHTTPAction: - string<DENY>
│    │          │                                   + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateGithubAction: - string<DENY>
│    │          │                              + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateGoogleCalendarAction: - string<DENY>
│    │          │                                      + string<DENY|ALLOW>
│    │          ├[+] CreateAndUpdateGoogleDriveKnowledgeBase: string<DENY|ALLOW>
│    │          ├ CreateAndUpdateHubspotAction: - string<DENY>
│    │          │                               + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateHuggingFaceAction: - string<DENY>
│    │          │                                   + string<DENY|ALLOW>
│    │          ├[+] CreateAndUpdateIDCKnowledgeBase: string<DENY|ALLOW>
│    │          ├ CreateAndUpdateIntercomAction: - string<DENY>
│    │          │                                + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateJiraAction: - string<DENY>
│    │          │                            + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateKnowledgeBases: - string<DENY>
│    │          │                                + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateLinearAction: - string<DENY>
│    │          │                              + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateMCPAction: - string<DENY>
│    │          │                           + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateMondayAction: - string<DENY>
│    │          │                              + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateMSExchangeAction: - string<DENY>
│    │          │                                  + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateMSTeamsAction: - string<DENY>
│    │          │                               + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateNewRelicAction: - string<DENY>
│    │          │                                + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateNotionAction: - string<DENY>
│    │          │                              + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateOneDriveAction: - string<DENY>
│    │          │                                + string<DENY|ALLOW>
│    │          ├[+] CreateAndUpdateOneDriveKnowledgeBase: string<DENY|ALLOW>
│    │          ├ CreateAndUpdateOpenAPIAction: - string<DENY>
│    │          │                               + string<DENY|ALLOW>
│    │          ├ CreateAndUpdatePagerDutyAction: - string<DENY>
│    │          │                                 + string<DENY|ALLOW>
│    │          ├[+] CreateAndUpdateQBusinessKnowledgeBase: string<DENY|ALLOW>
│    │          ├[+] CreateAndUpdateS3KnowledgeBase: string<DENY|ALLOW>
│    │          ├ CreateAndUpdateSalesforceAction: - string<DENY>
│    │          │                                  + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateSandPGlobalEnergyAction: - string<DENY>
│    │          │                                         + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateSandPGMIAction: - string<DENY>
│    │          │                                + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateSAPBillOfMaterialAction: - string<DENY>
│    │          │                                         + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateSAPBusinessPartnerAction: - string<DENY>
│    │          │                                          + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateSAPMaterialStockAction: - string<DENY>
│    │          │                                        + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateSAPPhysicalInventoryAction: - string<DENY>
│    │          │                                            + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateSAPProductMasterDataAction: - string<DENY>
│    │          │                                            + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateServiceNowAction: - string<DENY>
│    │          │                                  + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateSharePointAction: - string<DENY>
│    │          │                                  + string<DENY|ALLOW>
│    │          ├[+] CreateAndUpdateSharePointKnowledgeBase: string<DENY|ALLOW>
│    │          ├ CreateAndUpdateSlackAction: - string<DENY>
│    │          │                             + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateSmartsheetAction: - string<DENY>
│    │          │                                  + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateTextractAction: - string<DENY>
│    │          │                                + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateThemes: - string<DENY>
│    │          │                        + string<DENY|ALLOW>
│    │          ├ CreateAndUpdateThresholdAlerts: - string<DENY>
│    │          │                                 + string<DENY|ALLOW>
│    │          ├[+] CreateAndUpdateWebCrawlerKnowledgeBase: string<DENY|ALLOW>
│    │          ├ CreateAndUpdateZendeskAction: - string<DENY>
│    │          │                               + string<DENY|ALLOW>
│    │          ├[+] CreateAthenaDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateAuroraDataSource: string<DENY|ALLOW>
│    │          ├ CreateChatAgents: - string<DENY>
│    │          │                   + string<DENY|ALLOW>
│    │          ├ CreateDashboardExecutiveSummaryWithQ: - string<DENY>
│    │          │                                       + string<DENY|ALLOW>
│    │          ├[+] CreateDatabricksDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateDb2DataSource: string<DENY|ALLOW>
│    │          ├[+] CreateDenodoDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateDocumentDbDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateDremioDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateDynamoDbDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateExasolDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateFileDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateGitHubDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateGoogleAnalyticsDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateGoogleBigQueryDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateGoogleSheetsDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateImpalaDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateJiraDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateMariaDbDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateMongoAtlasDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateMongoDbDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateMySqlDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateOpenSearchDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateOracleDataSource: string<DENY|ALLOW>
│    │          ├[+] CreatePayPalDataSource: string<DENY|ALLOW>
│    │          ├[+] CreatePostgreSqlDataSource: string<DENY|ALLOW>
│    │          ├[+] CreatePrestoDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateRadiantDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateRdsDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateRedshiftAutoDiscoveredDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateRedshiftManualDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateS3AnalyticsDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateS3DataSource: string<DENY|ALLOW>
│    │          ├[+] CreateS3TablesDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateSalesforceDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateSapHanaDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateServiceNowDataSource: string<DENY|ALLOW>
│    │          ├ CreateSharedFolders: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├[+] CreateSnowflakeDataSource: string<DENY|ALLOW>
│    │          ├ CreateSpaces: - string<DENY>
│    │          │               + string<DENY|ALLOW>
│    │          ├[+] CreateSparkDataSource: string<DENY|ALLOW>
│    │          ├ CreateSPICEDataset: - string<DENY>
│    │          │                     + string<DENY|ALLOW>
│    │          ├[+] CreateSqlServerDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateSquareDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateStarburstDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateTeradataDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateTimestreamDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateTrinoDataSource: string<DENY|ALLOW>
│    │          ├[+] CreateTwitterDataSource: string<DENY|ALLOW>
│    │          ├ Dashboard: - string<DENY>
│    │          │            + string<DENY|ALLOW>
│    │          ├[+] DatabricksDataSource: string<DENY|ALLOW>
│    │          ├[+] Db2DataSource: string<DENY|ALLOW>
│    │          ├[+] DenodoDataSource: string<DENY|ALLOW>
│    │          ├[+] DocumentDbDataSource: string<DENY|ALLOW>
│    │          ├[+] DremioDataSource: string<DENY|ALLOW>
│    │          ├[+] DynamoDbDataSource: string<DENY|ALLOW>
│    │          ├ EditVisualWithQ: - string<DENY>
│    │          │                  + string<DENY|ALLOW>
│    │          ├[+] ExasolDataSource: string<DENY|ALLOW>
│    │          ├ ExportToCsv: - string<DENY>
│    │          │              + string<DENY|ALLOW>
│    │          ├ ExportToCsvInScheduledReports: - string<DENY>
│    │          │                                + string<DENY|ALLOW>
│    │          ├ ExportToExcel: - string<DENY>
│    │          │                + string<DENY|ALLOW>
│    │          ├ ExportToExcelInScheduledReports: - string<DENY>
│    │          │                                  + string<DENY|ALLOW>
│    │          ├ ExportToPdf: - string<DENY>
│    │          │              + string<DENY|ALLOW>
│    │          ├ ExportToPdfInScheduledReports: - string<DENY>
│    │          │                                + string<DENY|ALLOW>
│    │          ├ Extension: - string<DENY>
│    │          │            + string<DENY|ALLOW>
│    │          ├ FactSetAction: - string<DENY>
│    │          │                + string<DENY|ALLOW>
│    │          ├[+] FileDataSource: string<DENY|ALLOW>
│    │          ├ Flow: - string<DENY>
│    │          │       + string<DENY|ALLOW>
│    │          ├ GenericHTTPAction: - string<DENY>
│    │          │                    + string<DENY|ALLOW>
│    │          ├ GithubAction: - string<DENY>
│    │          │               + string<DENY|ALLOW>
│    │          ├[+] GitHubDataSource: string<DENY|ALLOW>
│    │          ├[+] GoogleAnalyticsDataSource: string<DENY|ALLOW>
│    │          ├[+] GoogleBigQueryDataSource: string<DENY|ALLOW>
│    │          ├ GoogleCalendarAction: - string<DENY>
│    │          │                       + string<DENY|ALLOW>
│    │          ├[+] GoogleDriveKnowledgeBase: string<DENY|ALLOW>
│    │          ├[+] GoogleSheetsDataSource: string<DENY|ALLOW>
│    │          ├ HubspotAction: - string<DENY>
│    │          │                + string<DENY|ALLOW>
│    │          ├ HuggingFaceAction: - string<DENY>
│    │          │                    + string<DENY|ALLOW>
│    │          ├[+] IDCKnowledgeBase: string<DENY|ALLOW>
│    │          ├[+] ImpalaDataSource: string<DENY|ALLOW>
│    │          ├[+] InboundEmailTrigger: string<DENY|ALLOW>
│    │          ├ IncludeContentInScheduledReportsEmail: - string<DENY>
│    │          │                                        + string<DENY|ALLOW>
│    │          ├ IntercomAction: - string<DENY>
│    │          │                 + string<DENY|ALLOW>
│    │          ├ InvokeAppsAIInference: - string<DENY>
│    │          │                        + string<DENY|ALLOW>
│    │          ├ JiraAction: - string<DENY>
│    │          │             + string<DENY|ALLOW>
│    │          ├[+] JiraDataSource: string<DENY|ALLOW>
│    │          ├ KnowledgeBase: - string<DENY>
│    │          │                + string<DENY|ALLOW>
│    │          ├ LinearAction: - string<DENY>
│    │          │               + string<DENY|ALLOW>
│    │          ├ ManageSharedFolders: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├[+] MariaDbDataSource: string<DENY|ALLOW>
│    │          ├ MCPAction: - string<DENY>
│    │          │            + string<DENY|ALLOW>
│    │          ├ MondayAction: - string<DENY>
│    │          │               + string<DENY|ALLOW>
│    │          ├[+] MongoAtlasDataSource: string<DENY|ALLOW>
│    │          ├[+] MongoDbDataSource: string<DENY|ALLOW>
│    │          ├ MSExchangeAction: - string<DENY>
│    │          │                   + string<DENY|ALLOW>
│    │          ├ MSTeamsAction: - string<DENY>
│    │          │                + string<DENY|ALLOW>
│    │          ├[+] MySqlDataSource: string<DENY|ALLOW>
│    │          ├ NewRelicAction: - string<DENY>
│    │          │                 + string<DENY|ALLOW>
│    │          ├ NotionAction: - string<DENY>
│    │          │               + string<DENY|ALLOW>
│    │          ├ OneDriveAction: - string<DENY>
│    │          │                 + string<DENY|ALLOW>
│    │          ├[+] OneDriveKnowledgeBase: string<DENY|ALLOW>
│    │          ├ OpenAPIAction: - string<DENY>
│    │          │                + string<DENY|ALLOW>
│    │          ├[+] OpenSearchDataSource: string<DENY|ALLOW>
│    │          ├[+] OracleDataSource: string<DENY|ALLOW>
│    │          ├ PagerDutyAction: - string<DENY>
│    │          │                  + string<DENY|ALLOW>
│    │          ├[+] PayPalDataSource: string<DENY|ALLOW>
│    │          ├ PerformFlowUiTask: - string<DENY>
│    │          │                    + string<DENY|ALLOW>
│    │          ├[+] PostgreSqlDataSource: string<DENY|ALLOW>
│    │          ├[+] PrestoDataSource: string<DENY|ALLOW>
│    │          ├ PrintReports: - string<DENY>
│    │          │               + string<DENY|ALLOW>
│    │          ├ PublishWithoutApproval: - string<DENY>
│    │          │                         + string<DENY|ALLOW>
│    │          ├[+] QBusinessKnowledgeBase: string<DENY|ALLOW>
│    │          ├[+] QuickEventTrigger: string<DENY|ALLOW>
│    │          ├[+] RadiantDataSource: string<DENY|ALLOW>
│    │          ├[+] RdsDataSource: string<DENY|ALLOW>
│    │          ├[+] RedshiftAutoDiscoveredDataSource: string<DENY|ALLOW>
│    │          ├[+] RedshiftManualDataSource: string<DENY|ALLOW>
│    │          ├ RenameSharedFolders: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├ Research: - string<DENY>
│    │          │           + string<DENY|ALLOW>
│    │          ├[+] S3AnalyticsDataSource: string<DENY|ALLOW>
│    │          ├[+] S3DataSource: string<DENY|ALLOW>
│    │          ├[+] S3KnowledgeBase: string<DENY|ALLOW>
│    │          ├[+] S3TablesDataSource: string<DENY|ALLOW>
│    │          ├ SalesforceAction: - string<DENY>
│    │          │                   + string<DENY|ALLOW>
│    │          ├[+] SalesforceDataSource: string<DENY|ALLOW>
│    │          ├ SandPGlobalEnergyAction: - string<DENY>
│    │          │                          + string<DENY|ALLOW>
│    │          ├ SandPGMIAction: - string<DENY>
│    │          │                 + string<DENY|ALLOW>
│    │          ├ SAPBillOfMaterialAction: - string<DENY>
│    │          │                          + string<DENY|ALLOW>
│    │          ├ SAPBusinessPartnerAction: - string<DENY>
│    │          │                           + string<DENY|ALLOW>
│    │          ├[+] SapHanaDataSource: string<DENY|ALLOW>
│    │          ├ SAPMaterialStockAction: - string<DENY>
│    │          │                         + string<DENY|ALLOW>
│    │          ├ SAPPhysicalInventoryAction: - string<DENY>
│    │          │                             + string<DENY|ALLOW>
│    │          ├ SAPProductMasterDataAction: - string<DENY>
│    │          │                             + string<DENY|ALLOW>
│    │          ├[+] ScheduleTrigger: string<DENY|ALLOW>
│    │          ├ ServiceNowAction: - string<DENY>
│    │          │                   + string<DENY|ALLOW>
│    │          ├[+] ServiceNowDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareAdobeAnalyticsDataSource: string<DENY|ALLOW>
│    │          ├ ShareAmazonBedrockARSAction: - string<DENY>
│    │          │                              + string<DENY|ALLOW>
│    │          ├ ShareAmazonBedrockFSAction: - string<DENY>
│    │          │                             + string<DENY|ALLOW>
│    │          ├ ShareAmazonBedrockKRSAction: - string<DENY>
│    │          │                              + string<DENY|ALLOW>
│    │          ├ ShareAmazonSThreeAction: - string<DENY>
│    │          │                          + string<DENY|ALLOW>
│    │          ├ ShareAnalyses: - string<DENY>
│    │          │                + string<DENY|ALLOW>
│    │          ├ ShareApps: - string<DENY>
│    │          │            + string<DENY|ALLOW>
│    │          ├ ShareAsanaAction: - string<DENY>
│    │          │                   + string<DENY|ALLOW>
│    │          ├[+] ShareAthenaDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareAuroraDataSource: string<DENY|ALLOW>
│    │          ├ ShareBambooHRAction: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├[+] ShareBedrockManagedKnowledgeBase: string<DENY|ALLOW>
│    │          ├ ShareBoxAgentAction: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├[+] ShareBoxKnowledgeBase: string<DENY|ALLOW>
│    │          ├ ShareCanvaAgentAction: - string<DENY>
│    │          │                        + string<DENY|ALLOW>
│    │          ├ ShareChatAgents: - string<DENY>
│    │          │                  + string<DENY|ALLOW>
│    │          ├ ShareComprehendAction: - string<DENY>
│    │          │                        + string<DENY|ALLOW>
│    │          ├ ShareComprehendMedicalAction: - string<DENY>
│    │          │                               + string<DENY|ALLOW>
│    │          ├ ShareConfluenceAction: - string<DENY>
│    │          │                        + string<DENY|ALLOW>
│    │          ├[+] ShareConfluenceKnowledgeBase: string<DENY|ALLOW>
│    │          ├ ShareDashboards: - string<DENY>
│    │          │                  + string<DENY|ALLOW>
│    │          ├[+] ShareDatabricksDataSource: string<DENY|ALLOW>
│    │          ├ ShareDatasets: - string<DENY>
│    │          │                + string<DENY|ALLOW>
│    │          ├ ShareDataSources: - string<DENY>
│    │          │                   + string<DENY|ALLOW>
│    │          ├[+] ShareDb2DataSource: string<DENY|ALLOW>
│    │          ├[+] ShareDenodoDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareDocumentDbDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareDremioDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareDynamoDbDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareExasolDataSource: string<DENY|ALLOW>
│    │          ├ ShareFactSetAction: - string<DENY>
│    │          │                     + string<DENY|ALLOW>
│    │          ├[+] ShareFileDataSource: string<DENY|ALLOW>
│    │          ├ ShareGenericHTTPAction: - string<DENY>
│    │          │                         + string<DENY|ALLOW>
│    │          ├ ShareGithubAction: - string<DENY>
│    │          │                    + string<DENY|ALLOW>
│    │          ├[+] ShareGitHubDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareGoogleAnalyticsDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareGoogleBigQueryDataSource: string<DENY|ALLOW>
│    │          ├ ShareGoogleCalendarAction: - string<DENY>
│    │          │                            + string<DENY|ALLOW>
│    │          ├[+] ShareGoogleDriveKnowledgeBase: string<DENY|ALLOW>
│    │          ├[+] ShareGoogleSheetsDataSource: string<DENY|ALLOW>
│    │          ├ ShareHubspotAction: - string<DENY>
│    │          │                     + string<DENY|ALLOW>
│    │          ├ ShareHuggingFaceAction: - string<DENY>
│    │          │                         + string<DENY|ALLOW>
│    │          ├[+] ShareIDCKnowledgeBase: string<DENY|ALLOW>
│    │          ├[+] ShareImpalaDataSource: string<DENY|ALLOW>
│    │          ├ ShareIntercomAction: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├ ShareJiraAction: - string<DENY>
│    │          │                  + string<DENY|ALLOW>
│    │          ├[+] ShareJiraDataSource: string<DENY|ALLOW>
│    │          ├ ShareKnowledgeBases: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├ ShareLinearAction: - string<DENY>
│    │          │                    + string<DENY|ALLOW>
│    │          ├[+] ShareMariaDbDataSource: string<DENY|ALLOW>
│    │          ├ ShareMCPAction: - string<DENY>
│    │          │                 + string<DENY|ALLOW>
│    │          ├ ShareMondayAction: - string<DENY>
│    │          │                    + string<DENY|ALLOW>
│    │          ├[+] ShareMongoAtlasDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareMongoDbDataSource: string<DENY|ALLOW>
│    │          ├ ShareMSExchangeAction: - string<DENY>
│    │          │                        + string<DENY|ALLOW>
│    │          ├ ShareMSTeamsAction: - string<DENY>
│    │          │                     + string<DENY|ALLOW>
│    │          ├[+] ShareMySqlDataSource: string<DENY|ALLOW>
│    │          ├ ShareNewRelicAction: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├ ShareNotionAction: - string<DENY>
│    │          │                    + string<DENY|ALLOW>
│    │          ├ ShareOneDriveAction: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├[+] ShareOneDriveKnowledgeBase: string<DENY|ALLOW>
│    │          ├ ShareOpenAPIAction: - string<DENY>
│    │          │                     + string<DENY|ALLOW>
│    │          ├[+] ShareOpenSearchDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareOracleDataSource: string<DENY|ALLOW>
│    │          ├ SharePagerDutyAction: - string<DENY>
│    │          │                       + string<DENY|ALLOW>
│    │          ├[+] SharePayPalDataSource: string<DENY|ALLOW>
│    │          ├ SharePointAction: - string<DENY>
│    │          │                   + string<DENY|ALLOW>
│    │          ├[+] SharePointKnowledgeBase: string<DENY|ALLOW>
│    │          ├[+] SharePostgreSqlDataSource: string<DENY|ALLOW>
│    │          ├[+] SharePrestoDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareQBusinessKnowledgeBase: string<DENY|ALLOW>
│    │          ├[+] ShareRadiantDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareRdsDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareRedshiftAutoDiscoveredDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareRedshiftManualDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareS3AnalyticsDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareS3DataSource: string<DENY|ALLOW>
│    │          ├[+] ShareS3KnowledgeBase: string<DENY|ALLOW>
│    │          ├[+] ShareS3TablesDataSource: string<DENY|ALLOW>
│    │          ├ ShareSalesforceAction: - string<DENY>
│    │          │                        + string<DENY|ALLOW>
│    │          ├[+] ShareSalesforceDataSource: string<DENY|ALLOW>
│    │          ├ ShareSandPGlobalEnergyAction: - string<DENY>
│    │          │                               + string<DENY|ALLOW>
│    │          ├ ShareSandPGMIAction: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├ ShareSAPBillOfMaterialAction: - string<DENY>
│    │          │                               + string<DENY|ALLOW>
│    │          ├ ShareSAPBusinessPartnerAction: - string<DENY>
│    │          │                                + string<DENY|ALLOW>
│    │          ├[+] ShareSapHanaDataSource: string<DENY|ALLOW>
│    │          ├ ShareSAPMaterialStockAction: - string<DENY>
│    │          │                              + string<DENY|ALLOW>
│    │          ├ ShareSAPPhysicalInventoryAction: - string<DENY>
│    │          │                                  + string<DENY|ALLOW>
│    │          ├ ShareSAPProductMasterDataAction: - string<DENY>
│    │          │                                  + string<DENY|ALLOW>
│    │          ├ ShareServiceNowAction: - string<DENY>
│    │          │                        + string<DENY|ALLOW>
│    │          ├[+] ShareServiceNowDataSource: string<DENY|ALLOW>
│    │          ├ ShareSharePointAction: - string<DENY>
│    │          │                        + string<DENY|ALLOW>
│    │          ├[+] ShareSharePointKnowledgeBase: string<DENY|ALLOW>
│    │          ├ ShareSlackAction: - string<DENY>
│    │          │                   + string<DENY|ALLOW>
│    │          ├ ShareSmartsheetAction: - string<DENY>
│    │          │                        + string<DENY|ALLOW>
│    │          ├[+] ShareSnowflakeDataSource: string<DENY|ALLOW>
│    │          ├ ShareSpaces: - string<DENY>
│    │          │              + string<DENY|ALLOW>
│    │          ├[+] ShareSparkDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareSqlServerDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareSquareDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareStarburstDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareTeradataDataSource: string<DENY|ALLOW>
│    │          ├ ShareTextractAction: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├[+] ShareTimestreamDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareTrinoDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareTwitterDataSource: string<DENY|ALLOW>
│    │          ├[+] ShareWebCrawlerKnowledgeBase: string<DENY|ALLOW>
│    │          ├ ShareZendeskAction: - string<DENY>
│    │          │                     + string<DENY|ALLOW>
│    │          ├ SlackAction: - string<DENY>
│    │          │              + string<DENY|ALLOW>
│    │          ├ SmartsheetAction: - string<DENY>
│    │          │                   + string<DENY|ALLOW>
│    │          ├[+] SnowflakeDataSource: string<DENY|ALLOW>
│    │          ├ Space: - string<DENY>
│    │          │        + string<DENY|ALLOW>
│    │          ├[+] SparkDataSource: string<DENY|ALLOW>
│    │          ├[+] SqlServerDataSource: string<DENY|ALLOW>
│    │          ├[+] SquareDataSource: string<DENY|ALLOW>
│    │          ├[+] StarburstDataSource: string<DENY|ALLOW>
│    │          ├ SubscribeDashboardEmailReports: - string<DENY>
│    │          │                                 + string<DENY|ALLOW>
│    │          ├[+] TeradataDataSource: string<DENY|ALLOW>
│    │          ├ TextractAction: - string<DENY>
│    │          │                 + string<DENY|ALLOW>
│    │          ├[+] TimestreamDataSource: string<DENY|ALLOW>
│    │          ├ Topic: - string<DENY>
│    │          │        + string<DENY|ALLOW>
│    │          ├[+] Trigger: string<DENY|ALLOW>
│    │          ├[+] TrinoDataSource: string<DENY|ALLOW>
│    │          ├[+] TwitterDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateAdobeAnalyticsDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateAthenaDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateAuroraDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateDatabricksDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateDb2DataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateDenodoDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateDocumentDbDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateDremioDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateDynamoDbDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateExasolDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateFileDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateGitHubDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateGoogleAnalyticsDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateGoogleBigQueryDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateGoogleSheetsDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateImpalaDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateJiraDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateMariaDbDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateMongoAtlasDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateMongoDbDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateMySqlDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateOpenSearchDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateOracleDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdatePayPalDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdatePostgreSqlDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdatePrestoDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateRadiantDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateRdsDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateRedshiftAutoDiscoveredDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateRedshiftManualDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateS3AnalyticsDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateS3DataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateS3TablesDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateSalesforceDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateSapHanaDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateServiceNowDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateSnowflakeDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateSparkDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateSqlServerDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateSquareDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateStarburstDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateTeradataDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateTimestreamDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateTrinoDataSource: string<DENY|ALLOW>
│    │          ├[+] UpdateTwitterDataSource: string<DENY|ALLOW>
│    │          ├ UseAgentWebSearch: - string<DENY>
│    │          │                    + string<DENY|ALLOW>
│    │          ├ UseAmazonBedrockARSAction: - string<DENY>
│    │          │                            + string<DENY|ALLOW>
│    │          ├ UseAmazonBedrockFSAction: - string<DENY>
│    │          │                           + string<DENY|ALLOW>
│    │          ├ UseAmazonBedrockKRSAction: - string<DENY>
│    │          │                            + string<DENY|ALLOW>
│    │          ├ UseAmazonSThreeAction: - string<DENY>
│    │          │                        + string<DENY|ALLOW>
│    │          ├ UseAsanaAction: - string<DENY>
│    │          │                 + string<DENY|ALLOW>
│    │          ├ UseBambooHRAction: - string<DENY>
│    │          │                    + string<DENY|ALLOW>
│    │          ├[+] UseBedrockManagedKnowledgeBase: string<DENY|ALLOW>
│    │          ├ UseBedrockModels: - string<DENY>
│    │          │                   + string<DENY|ALLOW>
│    │          ├ UseBoxAgentAction: - string<DENY>
│    │          │                    + string<DENY|ALLOW>
│    │          ├[+] UseBoxKnowledgeBase: string<DENY|ALLOW>
│    │          ├[+] UseBrowserExtension: string<DENY|ALLOW>
│    │          ├ UseCanvaAgentAction: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├ UseComprehendAction: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├ UseComprehendMedicalAction: - string<DENY>
│    │          │                             + string<DENY|ALLOW>
│    │          ├ UseConfluenceAction: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├[+] UseConfluenceKnowledgeBase: string<DENY|ALLOW>
│    │          ├[+] UseExcelAddInExtension: string<DENY|ALLOW>
│    │          ├ UseFactSetAction: - string<DENY>
│    │          │                   + string<DENY|ALLOW>
│    │          ├ UseGenericHTTPAction: - string<DENY>
│    │          │                       + string<DENY|ALLOW>
│    │          ├ UseGithubAction: - string<DENY>
│    │          │                  + string<DENY|ALLOW>
│    │          ├ UseGoogleCalendarAction: - string<DENY>
│    │          │                          + string<DENY|ALLOW>
│    │          ├[+] UseGoogleDriveKnowledgeBase: string<DENY|ALLOW>
│    │          ├ UseHubspotAction: - string<DENY>
│    │          │                   + string<DENY|ALLOW>
│    │          ├ UseHuggingFaceAction: - string<DENY>
│    │          │                       + string<DENY|ALLOW>
│    │          ├[+] UseIDCKnowledgeBase: string<DENY|ALLOW>
│    │          ├ UseIntercomAction: - string<DENY>
│    │          │                    + string<DENY|ALLOW>
│    │          ├ UseJiraAction: - string<DENY>
│    │          │                + string<DENY|ALLOW>
│    │          ├ UseLinearAction: - string<DENY>
│    │          │                  + string<DENY|ALLOW>
│    │          ├ UseMCPAction: - string<DENY>
│    │          │               + string<DENY|ALLOW>
│    │          ├ UseMondayAction: - string<DENY>
│    │          │                  + string<DENY|ALLOW>
│    │          ├ UseMSExchangeAction: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├ UseMSTeamsAction: - string<DENY>
│    │          │                   + string<DENY|ALLOW>
│    │          ├ UseNewRelicAction: - string<DENY>
│    │          │                    + string<DENY|ALLOW>
│    │          ├ UseNotionAction: - string<DENY>
│    │          │                  + string<DENY|ALLOW>
│    │          ├ UseOneDriveAction: - string<DENY>
│    │          │                    + string<DENY|ALLOW>
│    │          ├[+] UseOneDriveKnowledgeBase: string<DENY|ALLOW>
│    │          ├ UseOpenAPIAction: - string<DENY>
│    │          │                   + string<DENY|ALLOW>
│    │          ├[+] UseOutlookAddInExtension: string<DENY|ALLOW>
│    │          ├ UsePagerDutyAction: - string<DENY>
│    │          │                     + string<DENY|ALLOW>
│    │          ├[+] UsePowerpointAddInExtension: string<DENY|ALLOW>
│    │          ├[+] UseQBusinessKnowledgeBase: string<DENY|ALLOW>
│    │          ├[+] UseS3KnowledgeBase: string<DENY|ALLOW>
│    │          ├ UseSalesforceAction: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├ UseSandPGlobalEnergyAction: - string<DENY>
│    │          │                             + string<DENY|ALLOW>
│    │          ├ UseSandPGMIAction: - string<DENY>
│    │          │                    + string<DENY|ALLOW>
│    │          ├ UseSAPBillOfMaterialAction: - string<DENY>
│    │          │                             + string<DENY|ALLOW>
│    │          ├ UseSAPBusinessPartnerAction: - string<DENY>
│    │          │                              + string<DENY|ALLOW>
│    │          ├ UseSAPMaterialStockAction: - string<DENY>
│    │          │                            + string<DENY|ALLOW>
│    │          ├ UseSAPPhysicalInventoryAction: - string<DENY>
│    │          │                                + string<DENY|ALLOW>
│    │          ├ UseSAPProductMasterDataAction: - string<DENY>
│    │          │                                + string<DENY|ALLOW>
│    │          ├ UseServiceNowAction: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├ UseSharePointAction: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├[+] UseSharePointKnowledgeBase: string<DENY|ALLOW>
│    │          ├ UseSlackAction: - string<DENY>
│    │          │                 + string<DENY|ALLOW>
│    │          ├ UseSmartsheetAction: - string<DENY>
│    │          │                      + string<DENY|ALLOW>
│    │          ├ UseTextractAction: - string<DENY>
│    │          │                    + string<DENY|ALLOW>
│    │          ├[+] UseWebCrawlerKnowledgeBase: string<DENY|ALLOW>
│    │          ├[+] UseWordAddInExtension: string<DENY|ALLOW>
│    │          ├ UseZendeskAction: - string<DENY>
│    │          │                   + string<DENY|ALLOW>
│    │          ├ ViewAccountSPICECapacity: - string<DENY>
│    │          │                           + string<DENY|ALLOW>
│    │          ├[+] WebCrawlerKnowledgeBase: string<DENY|ALLOW>
│    │          └ ZendeskAction: - string<DENY>
│    │                           + string<DENY|ALLOW>
│    └[~]  resource AWS::QuickSight::Dashboard
│       └      - arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:dashboard/${DashboardId}
│              + arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:dashboard/${ResourceId}
├[~] service aws-rds
│ └ resources
│    └[~]  resource AWS::RDS::DBCluster
│       └ properties
│          └[+] WithExpressConfiguration: boolean (immutable)
├[~] service aws-route53resolver
│ └ resources
│    └[+]  resource AWS::Route53Resolver::FirewallConfig
│       ├      name: FirewallConfig
│       │      cloudFormationType: AWS::Route53Resolver::FirewallConfig
│       │      documentation: Resource Type definition for AWS::Route53Resolver::FirewallConfig. Configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC).
│       │      arnTemplate: arn:${Partition}:route53resolver:${Region}:${Account}:firewall-config/${ResourceId}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ ResourceId: string (required, immutable)
│       │  └ FirewallFailOpen: string<ENABLED|DISABLED|USE_LOCAL_RESOURCE_SETTING> (required)
│       └ attributes
│          ├ Arn: string
│          ├ Id: string
│          └ OwnerId: string
├[~] service aws-sagemaker
│ └ resources
│    └[+]  resource AWS::SageMaker::ComputeQuota
│       ├      name: ComputeQuota
│       │      cloudFormationType: AWS::SageMaker::ComputeQuota
│       │      documentation: Resource Type definition for AWS::SageMaker::ComputeQuota. Defines a compute allocation rule for an EKS-orchestrated SageMaker HyperPod cluster's task governance. Available in 15 regions (us-east-1, us-east-2, us-west-1, us-west-2, ap-south-1, ap-southeast-1, ap-southeast-2, ap-southeast-3, ap-northeast-1, eu-central-1, eu-west-1, eu-west-2, eu-north-1, eu-south-2, sa-east-1).
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:sagemaker:${Region}:${Account}:compute-quota/${ComputeQuotaId}
│       │      primaryIdentifier: ["ComputeQuotaArn"]
│       ├ properties
│       │  ├ Name: string (required, immutable)
│       │  ├ Description: string
│       │  ├ ClusterArn: string (required, immutable)
│       │  ├ ComputeQuotaConfig: ComputeQuotaConfig (required)
│       │  ├ ComputeQuotaTarget: ComputeQuotaTarget (required)
│       │  ├ ActivationState: string<Enabled|Disabled>
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ ComputeQuotaArn: string
│       │  ├ ComputeQuotaId: string
│       │  ├ ComputeQuotaVersion: integer
│       │  ├ Status: string<Creating|Created|CreateFailed|CreateRollbackFailed|Updating|Updated|UpdateFailed|UpdateRollbackFailed|Deleting|Deleted|DeleteFailed|DeleteRollbackFailed>
│       │  ├ CreationTime: string
│       │  └ LastModifiedTime: string
│       └ types
│          ├ type AcceleratorPartitionConfig
│          │ ├      documentation: Multi-instance GPU (MIG) partition profile and count for fractional accelerator allocation.
│          │ │      name: AcceleratorPartitionConfig
│          │ └ properties
│          │    ├ Type: string<mig-1g.5gb|mig-1g.10gb|mig-1g.18gb|mig-1g.20gb|mig-1g.23gb|mig-1g.35gb|mig-1g.45gb|mig-1g.47gb|mig-2g.10gb|mig-2g.20gb|mig-2g.35gb|mig-2g.45gb|mig-2g.47gb|mig-3g.20gb|mig-3g.40gb|mig-3g.71gb|mig-3g.90gb|mig-3g.93gb|mig-4g.20gb|mig-4g.40gb|mig-4g.71gb|mig-4g.90gb|mig-4g.93gb|mig-7g.40gb|mig-7g.80gb|mig-7g.141gb|mig-7g.180gb|mig-7g.186gb> (required)
│          │    └ Count: integer (required)
│          ├ type ComputeQuotaConfig
│          │ ├      documentation: Compute allocation rules: per-resource quotas, idle-borrowing strategy, and team-task preemption policy.
│          │ │      name: ComputeQuotaConfig
│          │ └ properties
│          │    ├ ComputeQuotaResources: Array<ComputeQuotaResourceConfig>
│          │    ├ ResourceSharingConfig: ResourceSharingConfig
│          │    └ PreemptTeamTasks: string<Never|LowerPriority>
│          ├ type ComputeQuotaResourceConfig
│          │ ├      documentation: Per-instance-type compute quota element. Reused under ComputeQuotaConfig.ComputeQuotaResources and ResourceSharingConfig.AbsoluteBorrowLimits.
│          │ │      name: ComputeQuotaResourceConfig
│          │ └ properties
│          │    ├ InstanceType: string (required)
│          │    ├ Count: integer
│          │    ├ Accelerators: integer
│          │    ├ VCpu: number
│          │    ├ MemoryInGiB: number
│          │    └ AcceleratorPartition: AcceleratorPartitionConfig
│          ├ type ComputeQuotaTarget
│          │ ├      documentation: The team this compute allocation rule applies to.
│          │ │      name: ComputeQuotaTarget
│          │ └ properties
│          │    ├ TeamName: string (required, immutable)
│          │    └ FairShareWeight: integer
│          └ type ResourceSharingConfig
│            ├      documentation: Idle-resource-sharing strategy for this team's quota.
│            │      name: ResourceSharingConfig
│            └ properties
│               ├ Strategy: string<Lend|DontLend|LendAndBorrow> (required)
│               ├ BorrowLimit: integer
│               └ AbsoluteBorrowLimits: Array<ComputeQuotaResourceConfig>
├[~] service aws-securityagent
│ └ resources
│    ├[~]  resource AWS::SecurityAgent::Pentest
│    │  ├ properties
│    │  │  ├[+] CiCdConfiguration: CiCdConfiguration
│    │  │  ├[+] ReportDestination: ReportDestination
│    │  │  ├[+] ReportFilters: ReportFilters
│    │  │  └[+] TestScope: TestScope
│    │  └ types
│    │     ├[+]  type CiCdConfiguration
│    │     │  ├      documentation: Configuration for running pentests automatically from a CI/CD pipeline
│    │     │  │      name: CiCdConfiguration
│    │     │  └ properties
│    │     │     └ Enabled: boolean (required)
│    │     ├[+]  type ReportDestination
│    │     │  ├      documentation: Destination for publishing a scan report to Confluence
│    │     │  │      name: ReportDestination
│    │     │  └ properties
│    │     │     ├ IntegrationId: string (required)
│    │     │     ├ ContainerId: string (required)
│    │     │     ├ ParentId: string
│    │     │     └ DocumentId: string
│    │     ├[+]  type ReportFilters
│    │     │  ├      documentation: Filters applied when a scan report is published to Confluence
│    │     │  │      name: ReportFilters
│    │     │  └ properties
│    │     │     ├ RiskLevels: Array<string<UNKNOWN|INFORMATIONAL|LOW|MEDIUM|HIGH|CRITICAL>>
│    │     │     ├ ConfidenceLevels: Array<string<FALSE_POSITIVE|UNCONFIRMED|LOW|MEDIUM|HIGH>>
│    │     │     ├ Statuses: Array<string<ACTIVE|RESOLVED|ACCEPTED|FALSE_POSITIVE>>
│    │     │     ├ RiskTypes: Array<string<CROSS_SITE_SCRIPTING|DEFAULT_CREDENTIALS|INSECURE_DIRECT_OBJECT_REFERENCE|PRIVILEGE_ESCALATION|SERVER_SIDE_TEMPLATE_INJECTION|COMMAND_INJECTION|CODE_INJECTION|SQL_INJECTION|ARBITRARY_FILE_UPLOAD|INSECURE_DESERIALIZATION|LOCAL_FILE_INCLUSION|INFORMATION_DISCLOSURE|PATH_TRAVERSAL|SERVER_SIDE_REQUEST_FORGERY|JSON_WEB_TOKEN_VULNERABILITIES|XML_EXTERNAL_ENTITY|FILE_DELETION|OTHER|GRAPHQL_VULNERABILITIES|BUSINESS_LOGIC_VULNERABILITIES|CRYPTOGRAPHIC_VULNERABILITIES|DENIAL_OF_SERVICE|FILE_ACCESS|FILE_CREATION|DATABASE_MODIFICATION|DATABASE_ACCESS|OUTBOUND_SERVICE_REQUEST|UNKNOWN>>
│    │     │     ├ FindingTypes: Array<string>
│    │     │     ├ TaskStatuses: Array<string<IN_PROGRESS|ABORTED|COMPLETED|INTERNAL_ERROR|FAILED>>
│    │     │     ├ AnnotationNotes: boolean
│    │     │     └ ComplianceReport: boolean
│    │     └[+]  type TestScope
│    │        ├      documentation: Scope of the target under test, determining which classes of risk are assessed
│    │        │      name: TestScope
│    │        └ properties
│    │           └ Type: string<WEB_APP|GENERATIVE_AI_APP> (required)
│    └[+]  resource AWS::SecurityAgent::PrivateConnection
│       ├      name: PrivateConnection
│       │      cloudFormationType: AWS::SecurityAgent::PrivateConnection
│       │      documentation: Resource Type definition for AWS::SecurityAgent::PrivateConnection. A private connection allows Security Agent to reach a target resource privately via a VPC Lattice resource gateway.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:securityagent:${Region}:${Account}:private-connection/${PrivateConnectionName}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ PrivateConnectionName: string (required, immutable)
│       │  ├ Mode: Mode (immutable)
│       │  ├ Certificate: string
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ Type: string<SERVICE_MANAGED|SELF_MANAGED>
│       │  ├ Status: string<ACTIVE|CREATE_IN_PROGRESS|CREATE_FAILED|DELETE_IN_PROGRESS|DELETE_FAILED>
│       │  ├ ResourceGatewayId: string
│       │  ├ HostAddress: string
│       │  ├ VpcId: string
│       │  ├ ResourceConfigurationId: string
│       │  ├ CertificateExpiryTime: string
│       │  └ DnsResolution: string<PUBLIC|IN_VPC>
│       └ types
│          ├ type Mode
│          │ ├      documentation: The configuration for the private connection. Specify either a service-managed or a self-managed mode.
│          │ │      name: Mode
│          │ └ properties
│          │    ├ ServiceManaged: ServiceManaged
│          │    └ SelfManaged: SelfManaged
│          ├ type SelfManaged
│          │ ├      documentation: The configuration for a self-managed private connection, where you manage your own resource configuration.
│          │ │      name: SelfManaged
│          │ └ properties
│          │    └ ResourceConfigurationId: string (required)
│          └ type ServiceManaged
│            ├      documentation: The configuration for a service-managed private connection, where the service manages the resource gateway lifecycle.
│            │      name: ServiceManaged
│            └ properties
│               ├ HostAddress: string (required)
│               ├ VpcId: string (required)
│               ├ SubnetIds: Array<string> (required)
│               ├ SecurityGroupIds: Array<string>
│               ├ IpAddressType: string<IPV4|IPV6|DUAL_STACK>
│               ├ Ipv4AddressesPerEni: integer
│               ├ PortRanges: Array<string>
│               └ DnsResolution: string<PUBLIC|IN_VPC>
├[~] service aws-securityhub
│ └ resources
│    └[+]  resource AWS::SecurityHub::ActionTarget
│       ├      name: ActionTarget
│       │      cloudFormationType: AWS::SecurityHub::ActionTarget
│       │      documentation: Creates a custom action target in Security Hub.
│       │      arnTemplate: arn:${Partition}:securityhub:${Region}:${Account}:action/custom/${Id}
│       │      primaryIdentifier: ["ActionTargetArn"]
│       ├ properties
│       │  ├ Id: string (required, immutable)
│       │  ├ Name: string (required)
│       │  └ Description: string (required)
│       └ attributes
│          └ ActionTargetArn: string
├[~] service aws-sns
│ └ resources
│    └[~]  resource AWS::SNS::Topic
│       └ properties
│          └ MaximumMessageSize: (documentation changed)
├[~] service aws-storagegateway
│ └ resources
│    ├[~]  resource AWS::StorageGateway::NFSFileShare
│    │  └      - arnTemplate: undefined
│    │         + arnTemplate: arn:${Partition}:storagegateway:${Region}:${Account}:share/${ShareId}
│    └[~]  resource AWS::StorageGateway::SMBFileShare
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:storagegateway:${Region}:${Account}:share/${ShareId}
├[~] service aws-transfer
│ └ resources
│    ├[~]  resource AWS::Transfer::HostKey
│    │  ├ properties
│    │  │  ├[+] KmsKey: string
│    │  │  └[+] StorageType: string<SERVICE_MANAGED|SECRETS_MANAGER>
│    │  └ attributes
│    │     └[+] SecretId: string
│    ├[~]  resource AWS::Transfer::Server
│    │  └ types
│    │     ├[~] type ProtocolDetails
│    │     │ └ properties
│    │     │    └[+] SftpPorts: Array<SftpPortWithOptions>
│    │     └[+]  type SftpPortWithOptions
│    │        ├      name: SftpPortWithOptions
│    │        └ properties
│    │           ├ SftpPort: integer (required)
│    │           └ CommunicationMode: string<CLIENT_TALK_FIRST|SERVER_TALK_FIRST>
│    └[~]  resource AWS::Transfer::Workflow
│       └ properties
│          └[+] StructuredLogDestinations: Array<string> (immutable)
├[~] service aws-wisdom
│ └ resources
│    └[~]  resource AWS::Wisdom::AIAgent
│       └ types
│          ├[+]  type AgentTarget
│          │  ├      name: AgentTarget
│          │  └ properties
│          │     ├ AIAgentId: string
│          │     └ ApplicationId: string
│          ├[+]  type DelegateAgentConfiguration
│          │  ├      name: DelegateAgentConfiguration
│          │  └ properties
│          │     ├ AgentTarget: AgentTarget (required)
│          │     └ Instruction: MultiAgentInstruction
│          ├[+]  type HandoffAgentConfiguration
│          │  ├      name: HandoffAgentConfiguration
│          │  └ properties
│          │     ├ AgentTarget: AgentTarget (required)
│          │     ├ Instruction: MultiAgentInstruction
│          │     ├ AudioStreamingEnabled: boolean
│          │     └ ImmediateHandoff: boolean
│          ├[+]  type MultiAgentConfiguration
│          │  ├      name: MultiAgentConfiguration
│          │  └ properties
│          │     ├ DelegateAgentConfiguration: DelegateAgentConfiguration
│          │     └ HandoffAgentConfiguration: HandoffAgentConfiguration
│          ├[+]  type MultiAgentInstruction
│          │  ├      name: MultiAgentInstruction
│          │  └ properties
│          │     ├ Instruction: string
│          │     └ Examples: Array<string>
│          └[~] type OrchestrationAIAgentConfiguration
│            └ properties
│               ├[+] InputSchemas: Array<json>
│               ├[+] MultiAgentConfigurations: Array<MultiAgentConfiguration>
│               ├ OrchestrationAIPromptId: - string (required)
│               │                          + string
│               └[+] OutputSchemas: Array<json>
└[~] service aws-xray
  └ resources
     └[~]  resource AWS::XRay::TransactionSearchConfig
        ├ properties
        │  └[+] CloudWatchLogsConfiguration: CloudWatchLogsConfiguration (immutable)
        └ types
           └[+]  type CloudWatchLogsConfiguration
              ├      documentation: Configuration for the CloudWatch Logs log group that X-Ray creates when this resource enables Transaction Search. It is used only at that time and is never returned
              │      name: CloudWatchLogsConfiguration
              └ properties
                 └ SpansLogGroupKmsKeyId: string
```

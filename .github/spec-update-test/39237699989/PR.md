Updates the L1 CloudFormation resource definitions with the latest changes from `@aws-cdk/aws-service-spec`

**L1 CloudFormation resource definition changes:**
```
├[~] service aws-agentregistry
│ └ resources
│    ├[~]  resource AWS::AgentRegistry::Registry
│    │  ├ properties
│    │  │  └[+] CustomMetadataSchemaConfiguration: CustomMetadataSchemaConfiguration
│    │  └ types
│    │     ├[+]  type CustomMetadataSchemaConfiguration
│    │     │  ├      documentation: Configuration that defines a typed metadata schema for a registry. A default schema and per-record-type schema overrides are both optional. Schema evolution is additive only: you can add fields and enum values, but you cannot remove fields, change types, or remove enum values.
│    │     │  │      name: CustomMetadataSchemaConfiguration
│    │     │  └ properties
│    │     │     ├ RecordTypeSchemaOverrides: Array<RecordTypeSchemaOverride>
│    │     │     └ DefaultSchema: string
│    │     └[+]  type RecordTypeSchemaOverride
│    │        ├      documentation: A schema override for a specific record type within a custom metadata schema configuration.
│    │        │      name: RecordTypeSchemaOverride
│    │        └ properties
│    │           ├ RecordType: string<MCP|AGENT|SKILL|GATEWAY|CUSTOM> (required)
│    │           └ Schema: string (required)
│    └[~]  resource AWS::AgentRegistry::RegistryRecord
│       └ properties
│          └[+] CustomMetadata: json
├[~] service aws-apigateway
│ └ resources
│    └[~]  resource AWS::ApiGateway::DomainNameV2
│       └      - arnTemplate: arn:${Partition}:apigateway:${Region}::/domainnames/${DomainName}
│              + arnTemplate: undefined
├[~] service aws-arcregionswitch
│ └ resources
│    └[~]  resource AWS::ARCRegionSwitch::Plan
│       ├      - arnTemplate: arn:${Partition}:arc-region-switch:${Region}:${Account}:plan/${ResourceId}
│       │      + arnTemplate: arn:${Partition}:arc-region-switch::${Account}:plan/${ResourceId}
│       └ types
│          ├[~] type ExecutionBlockConfiguration
│          │ └ properties
│          │    └[+] SsmSendCommandConfig: SsmSendCommandConfiguration
│          ├[+]  type SsmDocumentConfig
│          │  ├      name: SsmDocumentConfig
│          │  └ properties
│          │     ├ CrossAccountRole: string
│          │     ├ ExternalId: string
│          │     ├ DocumentArn: string (required)
│          │     ├ Targets: Array<SsmTarget> (required)
│          │     ├ Parameters: Map<string, Array<string>>
│          │     └ DocumentVersion: string
│          ├[+]  type SsmSendCommandConfiguration
│          │  ├      name: SsmSendCommandConfiguration
│          │  └ properties
│          │     ├ TimeoutMinutes: number (default=60)
│          │     ├ RetryIntervalMinutes: number (required)
│          │     ├ Ungraceful: SsmSendCommandUngraceful
│          │     └ RegionDocuments: Map<string, SsmDocumentConfig> (required)
│          ├[+]  type SsmSendCommandUngraceful
│          │  ├      name: SsmSendCommandUngraceful
│          │  └ properties
│          │     └ Behavior: string<skip>
│          ├[+]  type SsmTarget
│          │  ├      name: SsmTarget
│          │  └ properties
│          │     ├ Key: string (required)
│          │     └ Values: Array<string> (required)
│          └[~] type Step
│            └ properties
│               └ ExecutionBlockType: - string<ARCRegionSwitchPlan|ARCRoutingControl|AuroraGlobalDatabase|AuroraProvisionedScaling|AuroraServerlessScaling|CustomActionLambda|DocumentDb|EC2AutoScaling|ECSServiceScaling|EKSResourceScaling|LambdaEventSourceMapping|ManualApproval|NeptuneGlobalDatabase|Parallel|RdsCreateCrossRegionReplica|RdsPromoteReadReplica|RdsSwitchoverReadReplica|Route53HealthCheck> (required)
│                                     + string<ARCRegionSwitchPlan|ARCRoutingControl|AuroraGlobalDatabase|AuroraProvisionedScaling|AuroraServerlessScaling|CustomActionLambda|DocumentDb|EC2AutoScaling|ECSServiceScaling|EKSResourceScaling|LambdaEventSourceMapping|ManualApproval|NeptuneGlobalDatabase|Parallel|RdsCreateCrossRegionReplica|RdsPromoteReadReplica|RdsSwitchoverReadReplica|Route53HealthCheck|SSMSendCommand> (required)
├[~] service aws-autoscalingplans
│ └ resources
│    └[~]  resource AWS::AutoScalingPlans::ScalingPlan
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["ScalingPlanVersion","ScalingPlanName"]
│       └ attributes
│          ├[+] ScalingPlanArn: string
│          ├ ScalingPlanName: (documentation changed)
│          └ ScalingPlanVersion: (documentation changed)
├[~] service aws-bedrockagentcore
│ └ resources
│    ├[+]  resource AWS::BedrockAgentCore::ConsentPortal
│    │  ├      name: ConsentPortal
│    │  │      cloudFormationType: AWS::BedrockAgentCore::ConsentPortal
│    │  │      documentation: Resource Type definition for AWS::BedrockAgentCore::ConsentPortal
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:bedrock-agentcore:${Region}:${Account}:consent-portal/${ConsentPortalId}
│    │  │      primaryIdentifier: ["ConsentPortalArn"]
│    │  ├ properties
│    │  │  ├ ExecutionRoleArn: string (required)
│    │  │  ├ IdpConfig: IdpConfig (required)
│    │  │  ├ Name: string (required, immutable)
│    │  │  ├ Sources: Array<ConsentPortalSource> (required, immutable)
│    │  │  ├ Description: string
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ ConsentPortalId: string
│    │  │  ├ CreatedAt: string
│    │  │  ├ PortalUrl: string
│    │  │  ├ Status: string<CREATING|ACTIVE|UPDATING|UPDATE_FAILED|DELETING|FAILED>
│    │  │  ├ UpdatedAt: string
│    │  │  └ ConsentPortalArn: string
│    │  └ types
│    │     ├ type ConsentPortalSource
│    │     │ ├      name: ConsentPortalSource
│    │     │ └ properties
│    │     │    ├ Identifier: string (required)
│    │     │    └ Type: string<agentcore-gateway> (required)
│    │     └ type IdpConfig
│    │       ├      name: IdpConfig
│    │       └ properties
│    │          ├ CredentialProviderArn: string (required)
│    │          ├ Scopes: Array<string> (required)
│    │          └ Audience: string
│    ├[~]  resource AWS::BedrockAgentCore::Dataset
│    │  └ properties
│    │     └ SchemaType: - string<AGENTCORE_EVALUATION_PREDEFINED_V1|AGENTCORE_EVALUATION_SIMULATED_V1> (required, immutable)
│    │                   + string<AGENTCORE_EVALUATION_PREDEFINED_V1|AGENTCORE_EVALUATION_SIMULATED_V1|GENERIC_EVALUATION_PREDEFINED_V1> (required, immutable)
│    ├[~]  resource AWS::BedrockAgentCore::Evaluator
│    │  └ types
│    │     ├[+]  type DimensionRatingScale
│    │     │  ├      documentation: The rating scale for one dimension of an LLM-as-a-Judge evaluator.
│    │     │  │      name: DimensionRatingScale
│    │     │  └ properties
│    │     │     ├ Numerical: Array<NumericalScaleDefinition>
│    │     │     └ Categorical: Array<CategoricalScaleDefinition>
│    │     ├[+]  type EvaluationDimension
│    │     │  ├      documentation: One dimension of an LLM-as-a-Judge evaluator.
│    │     │  │      name: EvaluationDimension
│    │     │  └ properties
│    │     │     ├ DimensionName: string (required)
│    │     │     ├ DimensionInstruction: string (required)
│    │     │     └ DimensionRatingScale: DimensionRatingScale (required)
│    │     ├[~] type InferenceConfiguration
│    │     │ └ properties
│    │     │    └[+] StopSequences: Array<string>
│    │     └[~] type RatingScale
│    │       └ properties
│    │          └[+] MultiDimensional: Array<EvaluationDimension>
│    ├[~]  resource AWS::BedrockAgentCore::Harness
│    │  └ types
│    │     ├[~] type CustomJWTAuthorizerConfiguration
│    │     │ └ properties
│    │     │    └[+] AdvertisedScopeMapping: Map<string, string>
│    │     ├[~] type HarnessAgentCoreMemoryRetrievalConfig
│    │     │ └ properties
│    │     │    ├ RelevanceScore: - number | string ⇐ number
│    │     │    │                 + number
│    │     │    └ TopK: - integer | string ⇐ integer
│    │     │            + integer
│    │     ├[~] type HarnessGeminiModelConfig
│    │     │ └ properties
│    │     │    └[+] AdditionalParams: json
│    │     └[~] type HarnessOpenAiModelConfig
│    │       └ properties
│    │          └[+] ApiBase: string
│    └[~]  resource AWS::BedrockAgentCore::OnlineEvaluationConfig
│       ├ attributes
│       │  └ Status: - string<ACTIVE|CREATING|CREATE_FAILED|UPDATING|UPDATE_FAILED|DELETING>
│       │            + string<ACTIVE|CREATING|CREATE_FAILED|UPDATING|UPDATE_FAILED|DELETING|ERROR>
│       └ types
│          └[~] type EvaluatorReference
│            └ properties
│               └ EvaluatorId: (documentation changed)
├[~] service aws-budgets
│ └ resources
│    └[~]  resource AWS::Budgets::Budget
│       └      - tagInformation: undefined
│              + tagInformation: {"tagPropertyName":"ResourceTags","variant":"standard"}
├[~] service aws-certificatemanager
│ └ resources
│    └[~]  resource AWS::CertificateManager::AcmeEndpoint
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:acm:${Region}:${Account}:acme-endpoint/${AcmeEndpointId}
├[~] service aws-cloudfront
│ └ resources
│    └[+]  resource AWS::CloudFront::FieldLevelEncryptionConfig
│       ├      name: FieldLevelEncryptionConfig
│       │      cloudFormationType: AWS::CloudFront::FieldLevelEncryptionConfig
│       │      documentation: Resource Type definition for AWS::CloudFront::FieldLevelEncryptionConfig. A field-level encryption configuration, which specifies the query arg profiles and content type profiles CloudFront uses to encrypt sensitive fields in viewer requests.
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ CallerReference: string (required, immutable)
│       │  ├ Comment: string
│       │  ├ QueryArgProfileConfig: QueryArgProfileConfig (required)
│       │  └ ContentTypeProfileConfig: ContentTypeProfileConfig (required)
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ Id: string
│       │  └ LastModifiedTime: string
│       └ types
│          ├ type ContentTypeProfile
│          │ ├      documentation: A content type paired with the field-level encryption profile that encrypts it.
│          │ │      name: ContentTypeProfile
│          │ └ properties
│          │    ├ Format: string<URLEncoded> (required)
│          │    ├ ProfileId: string (required)
│          │    └ ContentType: string (required)
│          ├ type ContentTypeProfileConfig
│          │ ├      documentation: How CloudFront handles content types, including the profile paired with each one.
│          │ │      name: ContentTypeProfileConfig
│          │ └ properties
│          │    ├ ForwardWhenContentTypeIsUnknown: boolean (required)
│          │    └ ContentTypeProfiles: Array<ContentTypeProfile> (required)
│          ├ type QueryArgProfile
│          │ ├      documentation: A query argument paired with the field-level encryption profile that encrypts it.
│          │ │      name: QueryArgProfile
│          │ └ properties
│          │    ├ QueryArg: string (required)
│          │    └ ProfileId: string (required)
│          └ type QueryArgProfileConfig
│            ├      documentation: How CloudFront handles query arguments, including the profile paired with each one.
│            │      name: QueryArgProfileConfig
│            └ properties
│               ├ ForwardWhenQueryArgProfileIsUnknown: boolean (required)
│               └ QueryArgProfiles: Array<QueryArgProfile> (required)
├[~] service aws-cloudwatch
│ └ resources
│    ├[~]  resource AWS::CloudWatch::Alarm
│    │  ├ properties
│    │  │  └[+] ActionConfiguration: ActionConfiguration
│    │  └ types
│    │     ├[+]  type ActionConfiguration
│    │     │  ├      name: ActionConfiguration
│    │     │  └ properties
│    │     │     └ AlarmTagsPropagation: AlarmTagsPropagation
│    │     └[+]  type AlarmTagsPropagation
│    │        ├      name: AlarmTagsPropagation
│    │        └ properties
│    │           ├ IncludedTagKeys: Array<string>
│    │           ├ ExcludedTagKeys: Array<string>
│    │           └ Enabled: boolean (required)
│    ├[~]  resource AWS::CloudWatch::CompositeAlarm
│    │  ├ properties
│    │  │  └[+] ActionConfiguration: ActionConfiguration
│    │  └ types
│    │     ├[+]  type ActionConfiguration
│    │     │  ├      documentation: Configuration that applies to the notifications this alarm sends when it performs its actions.
│    │     │  │      name: ActionConfiguration
│    │     │  └ properties
│    │     │     └ AlarmTagsPropagation: AlarmTagsPropagation
│    │     └[+]  type AlarmTagsPropagation
│    │        ├      documentation: Controls whether the alarm's tags are included in its action notifications and state-change events, and which tag keys are included. Specify IncludedTagKeys or ExcludedTagKeys, but not both. Omit both to include every tag.
│    │        │      name: AlarmTagsPropagation
│    │        └ properties
│    │           ├ Enabled: boolean (required)
│    │           ├ IncludedTagKeys: Array<string>
│    │           └ ExcludedTagKeys: Array<string>
│    ├[+]  resource AWS::CloudWatch::Integration
│    │  ├      name: Integration
│    │  │      cloudFormationType: AWS::CloudWatch::Integration
│    │  │      documentation: Resource Type definition for AWS::CloudWatch::Integration. Manages a CloudWatch (Amazon CloudWatch Observability / Omni) account-scoped integration. V1 supports AWS_CONFIG_SLREC, AWS_INTEGRATION, and EXTERNAL_AGENT.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:cloudwatch:${Region}:${Account}:integration/${IntegrationId}
│    │  │      primaryIdentifier: ["IntegrationArn"]
│    │  ├ properties
│    │  │  ├ IntegrationType: string<AWS_CONFIG_SLREC|AWS_INTEGRATION|EXTERNAL_AGENT> (required, immutable)
│    │  │  ├ Name: string (required, immutable)
│    │  │  ├ RoleArn: string
│    │  │  ├ IntegrationAttributes: Map<string, string>
│    │  │  ├ Credential: IntegrationCredential
│    │  │  └ Tags: Array<TagsItems>
│    │  ├ attributes
│    │  │  ├ IntegrationArn: string
│    │  │  ├ IntegrationId: string
│    │  │  ├ Status: string<PENDING|PENDING_OAUTH|ACTIVE|ERROR|FAILED|DELETED>
│    │  │  ├ CreatedAt: string
│    │  │  └ UpdatedAt: string
│    │  └ types
│    │     ├ type ApiKeyCredential
│    │     │ ├      documentation: API-key credential material that can be rotated in place on update.
│    │     │ │      name: ApiKeyCredential
│    │     │ └ properties
│    │     │    └ ApiKeyValue: string (required)
│    │     ├ type IntegrationCredential
│    │     │ ├      documentation: Write-only API-key credential material for the integration. Stored encrypted and never returned on read.
│    │     │ │      name: IntegrationCredential
│    │     │ └ properties
│    │     │    └ ApiKeyCredential: ApiKeyCredential (required)
│    │     └ type TagsItems
│    │       ├      name: TagsItems
│    │       └ properties
│    │          ├ Key: string (required)
│    │          └ Value: string (required)
│    └[~]  resource AWS::CloudWatch::LogAlarm
│       ├ properties
│       │  └[+] ActionConfiguration: ActionConfiguration
│       └ types
│          ├[+]  type ActionConfiguration
│          │  ├      documentation: Configuration that applies to the notifications this alarm sends when it performs its actions.
│          │  │      name: ActionConfiguration
│          │  └ properties
│          │     └ AlarmTagsPropagation: AlarmTagsPropagation
│          └[+]  type AlarmTagsPropagation
│             ├      documentation: Controls whether the alarm's tags are included in its action notifications and state-change events, and which tag keys are included. Specify IncludedTagKeys or ExcludedTagKeys, but not both. Omit both to include every tag.
│             │      name: AlarmTagsPropagation
│             └ properties
│                ├ Enabled: boolean (required)
│                ├ IncludedTagKeys: Array<string>
│                └ ExcludedTagKeys: Array<string>
├[~] service aws-codebuild
│ └ resources
│    └[~]  resource AWS::CodeBuild::ReportGroup
│       └ attributes
│          └[-] Id: string
├[~] service aws-connect
│ └ resources
│    └[~]  resource AWS::Connect::Rule
│       └ types
│          ├[~] type Actions
│          │ └ properties
│          │    └[+] SendInAppNotificationActions: Array<SendInAppNotificationAction>
│          ├[+]  type InAppNotificationRecipientType
│          │  ├      name: InAppNotificationRecipientType
│          │  └ properties
│          │     ├ UserTags: Map<string, string>
│          │     └ UserArns: Array<string>
│          ├[+]  type NotificationContent
│          │  ├      name: NotificationContent
│          │  └ properties
│          │     ├ EnUS: string
│          │     ├ DeDE: string
│          │     ├ EsES: string
│          │     ├ FrFR: string
│          │     ├ IdID: string
│          │     ├ ItIT: string
│          │     ├ JaJP: string
│          │     ├ KoKR: string
│          │     ├ PtBR: string
│          │     ├ ZhCN: string
│          │     └ ZhTW: string
│          └[+]  type SendInAppNotificationAction
│             ├      name: SendInAppNotificationAction
│             └ properties
│                ├ Content: NotificationContent (required)
│                ├ Recipient: InAppNotificationRecipientType (required)
│                ├ Exclusion: InAppNotificationRecipientType
│                └ Priority: string<HIGH|LOW>
├[~] service aws-customerprofiles
│ └ resources
│    └[+]  resource AWS::CustomerProfiles::RecommenderFilter
│       ├      name: RecommenderFilter
│       │      cloudFormationType: AWS::CustomerProfiles::RecommenderFilter
│       │      documentation: A recommender filter that specifies which items to include or exclude from recommendations under an Amazon Connect Customer Profiles domain.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["RecommenderFilterArn"]
│       ├ properties
│       │  ├ DomainName: string (required, immutable)
│       │  ├ RecommenderFilterName: string (required, immutable)
│       │  ├ RecommenderFilterExpression: string (required, immutable)
│       │  ├ RecommenderSchemaName: string (immutable)
│       │  ├ Description: string (immutable)
│       │  └ Tags: Array<TagsItems>
│       ├ attributes
│       │  ├ RecommenderFilterArn: string
│       │  ├ Status: string
│       │  └ CreatedAt: string
│       └ types
│          └ type TagsItems
│            ├      name: TagsItems
│            └ properties
│               ├ Key: string (required)
│               └ Value: string (required)
├[~] service aws-datapipeline
│ └ resources
│    └[~]  resource AWS::DataPipeline::Pipeline
│       └      - arnTemplate: arn:${Partition}:datapipeline:${Region}:${Account}:pipeline/${PipelineId}
│              + arnTemplate: arn:${Partition}:datapipeline:${Region}:${Account}:pipeline/${PipelineID}
├[~] service aws-dax
│ └ resources
│    └[~]  resource AWS::DAX::SubnetGroup
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["SubnetGroupName"]
│       └ attributes
│          └[-] Id: string
├[~] service aws-deadline
│ └ resources
│    └[~]  resource AWS::Deadline::Fleet
│       └ types
│          ├[+]  type FleetSoftwareAddOn
│          │  ├      name: FleetSoftwareAddOn
│          │  └ properties
│          │     └ Name: string<docker> (required)
│          └[~] type ServiceManagedEc2InstanceCapabilities
│            └ properties
│               └[+] SoftwareAddOns: Array<FleetSoftwareAddOn>
├[~] service aws-devicefarm
│ └ resources
│    ├[~]  resource AWS::DeviceFarm::InstanceProfile
│    │  └      - arnTemplate: arn:${Partition}:devicefarm:${Region}:${Account}:instanceprofile:${ResourceId}
│    │         + arnTemplate: arn:${Partition}:devicefarm:${Region}:${Account}:instanceprofile:${InstanceProfileId}
│    └[~]  resource AWS::DeviceFarm::Project
│       └      - arnTemplate: arn:${Partition}:devicefarm:${Region}:${Account}:project:${ProjectId}
│              + arnTemplate: arn:${Partition}:devicefarm:${Region}:${Account}:project:${ResourceId}
├[~] service aws-devopsagent
│ └ resources
│    └[~]  resource AWS::DevOpsAgent::Service
│       └ properties
│          ├ ServiceDetails: (documentation changed)
│          └ ServiceType: - string<dynatrace|mcpserver|mcpserversplunk|mcpservernewrelic|gitlab|servicenow|pagerduty|azureidentity|mcpserversigv4|mcpservergrafana> (required, immutable)
│                         + string<dynatrace|mcpserver|mcpserversplunk|mcpservernewrelic|gitlab|github|servicenow|pagerduty|azureidentity|mcpserversigv4|mcpservergrafana> (required, immutable)
├[~] service aws-directoryservice
│ └ resources
│    └[~]  resource AWS::DirectoryService::MicrosoftAD
│       └      - arnTemplate: arn:${Partition}:ds:${Region}:${Account}:directory/${DirectoryId}
│              + arnTemplate: arn:${Partition}:ds:${Region}:${Account}:${DirectoryId}
├[~] service aws-dms
│ └ resources
│    ├[~]  resource AWS::DMS::DataMigration
│    │  └ properties
│    │     └ DataMigrationIdentifier: - string
│    │                                + string (deprecated=WARN)
│    │                                (documentation changed)
│    ├[~]  resource AWS::DMS::DataProvider
│    │  └ properties
│    │     └ DataProviderIdentifier: - string
│    │                               + string (deprecated=WARN)
│    ├[~]  resource AWS::DMS::InstanceProfile
│    │  └ properties
│    │     └ InstanceProfileIdentifier: - string
│    │                                  + string (deprecated=WARN)
│    └[~]  resource AWS::DMS::MigrationProject
│       ├ properties
│       │  ├[-] InstanceProfileArn: string
│       │  ├[-] InstanceProfileName: string
│       │  ├[-] MigrationProjectCreationTime: string (deprecated=WARN)
│       │  └ MigrationProjectIdentifier: - string
│       │                                + string (deprecated=WARN)
│       └ attributes
│          ├[+] InstanceProfileArn: string
│          ├[+] InstanceProfileName: string
│          └[+] MigrationProjectCreationTime: string (deprecated=WARN)
├[~] service aws-dynamodb
│ └ resources
│    └[~]  resource AWS::DynamoDB::Table
│       └ types
│          └[~] type StreamSpecification
│            └ properties
│               └ Tags: (documentation changed)
├[~] service aws-ec2
│ └ resources
│    ├[~]  resource AWS::EC2::ClientVpnEndpoint
│    │  ├ properties
│    │  │  ├[+] AuthorizationPolicy: AuthorizationPolicy
│    │  │  └[+] DevicePostureOptions: DevicePostureOptions
│    │  └ types
│    │     ├[+]  type AuthorizationPolicy
│    │     │  ├      name: AuthorizationPolicy
│    │     │  └ properties
│    │     │     ├ PolicyDocument: string (required)
│    │     │     ├ ShadowMode: string
│    │     │     └ Description: string
│    │     ├[~] type ConnectionLogOptions
│    │     │ └ properties
│    │     │    └[+] IncludeAuthorizationPolicyContext: boolean
│    │     ├[+]  type DevicePostureOptions
│    │     │  ├      name: DevicePostureOptions
│    │     │  └ properties
│    │     │     ├ TrustProviders: Array<DevicePostureTrustProvider> (required)
│    │     │     └ Enabled: boolean (required)
│    │     └[+]  type DevicePostureTrustProvider
│    │        ├      name: DevicePostureTrustProvider
│    │        └ properties
│    │           ├ TrustProviderType: string (required)
│    │           ├ TenantId: string (required)
│    │           └ PublicSigningKeyUrl: string
│    ├[+]  resource AWS::EC2::IpamInternetRegistryAssociation
│    │  ├      name: IpamInternetRegistryAssociation
│    │  │      cloudFormationType: AWS::EC2::IpamInternetRegistryAssociation
│    │  │      documentation: An association between an IPAM and a Regional Internet Registry (RIR) for delegated Resource Public Key Infrastructure (RPKI) management. Use it to have IPAM create Route Origin Authorizations (ROAs) for IP address prefixes registered with the internet registry. The IPAM must be in the Advanced tier.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["IpamInternetRegistryAssociationArn"]
│    │  ├ properties
│    │  │  ├ IpamId: string (required, immutable)
│    │  │  ├ Rir: string<RIPE|APNIC|ARIN|LACNIC> (required, immutable)
│    │  │  ├ OrganizationHandle: string (required, immutable)
│    │  │  ├ Description: string (immutable)
│    │  │  └ Tags: Array<tag>
│    │  └ attributes
│    │     ├ IpamInternetRegistryAssociationArn: string
│    │     ├ IpamInternetRegistryAssociationId: string
│    │     ├ OwnerId: string
│    │     ├ IpamRegion: string
│    │     ├ State: string<pending-enable|create-in-progress|create-failed|enable-in-progress|enable-complete|enable-failed|delete-in-progress|delete-complete|delete-failed>
│    │     └ ChildRequestXml: string
│    ├[~]  resource AWS::EC2::NetworkInsightsAnalysis
│    │  └ types
│    │     ├[+]  type AnalysisTransitGatewayPolicyTableEntry
│    │     │  ├      name: AnalysisTransitGatewayPolicyTableEntry
│    │     │  └ properties
│    │     │     ├ DestinationPortRange: PortRange
│    │     │     ├ SourcePortRange: PortRange
│    │     │     ├ SourceCidr: string
│    │     │     ├ RuleNumber: integer
│    │     │     ├ TargetRouteTableId: string
│    │     │     ├ Protocol: string
│    │     │     └ DestinationCidr: string
│    │     ├[~] type Explanation
│    │     │ └ properties
│    │     │    ├[+] TransitGatewayPolicyTable: AnalysisComponent
│    │     │    └[+] TransitGatewayPolicyTableEntry: AnalysisTransitGatewayPolicyTableEntry
│    │     └[~] type PathComponent
│    │       └ properties
│    │          └[+] TransitGatewayPolicyTableEntry: AnalysisTransitGatewayPolicyTableEntry
│    └[~]  resource AWS::EC2::VPCPeeringConnection
│       └ properties
│          └ AssumeRoleRegion: - string (immutable)
│                              + string
│                              (documentation changed)
├[~] service aws-ecs
│ └ resources
│    └[~]  resource AWS::ECS::Service
│       └ types
│          ├[~] type DeploymentConfiguration
│          │ └ properties
│          │    └ EarlySuccessCriteria: (documentation changed)
│          └[~] type DeploymentEarlySuccessCriteria
│            ├      - documentation: undefined
│            │      + documentation: You can use early success criteria only with rolling deployment strategy.
│            │        The configuration that determines when a rolling update deployment is considered successful. Early success criteria defines the percentage of tasks that must be healthy before a deployment completes. It also controls whether Amazon ECS must remove the previous tasks before a deployment completes.
│            └ properties
│               ├ Enable: (documentation changed)
│               ├ HealthyPercent: (documentation changed)
│               └ SourceServiceRevisionCleanup: (documentation changed)
├[~] service aws-eks
│ └ resources
│    └[~]  resource AWS::EKS::Capability
│       ├      - vendedLogs: [{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_COMMITSERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","version","component","duration"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ACK_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","err","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","kind","name","namespace","aws.service","version","type","generation","is_adopted","iam_role_selector","role"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_SERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","name","namespace","reason","application","user","grpc.code","grpc.method","grpc.service","grpc.time_ms","grpc.method_type","grpc.error","type","duration","dest-namespace","dest-server","project"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","application","app-namespace","project","dest-server","dest-namespace","dest-name","comparison-level","time_ms","patch_ms","setop_ms","compare_app_state_ms","refresh_app_conditions_ms","process_refresh_app_conditions_errors_ms","comparison_with_nothing_ms","name","namespace","app_status_update_ms","auto_sync_ms","diff_ms","git_ms","health_ms","live_ms","manifests_ms","repo_ms","sync_ms","cluster","syncId","duration","eventType","kind"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_APPLICATIONSET_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","name","namespace","application","app-namespace","project","applicationset","action","count","requeueAfter","type","version","err","repoURL","revision"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_REPOSERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","grpc.code","grpc.method","grpc.service","grpc.time_ms","grpc.method_type","grpc.component","grpc.error","version","component","duration","execID"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_KRO_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","err","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","gvr","crd","name","namespace","type","breakingChanges","summary","existingRGDID","newRGDID"],"mandatoryFields":["resource_arn","event_timestamp"]}]
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_COMMITSERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","version","component","duration"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_NOTIFICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","level","message","notification_event","service","destination","success","duration_ms","status_code","error","app","namespace","reason","resource","trigger_count","template_count","service_count","enabled"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ACK_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","err","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","kind","name","namespace","aws.service","version","type","generation","is_adopted","iam_role_selector","role"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_SERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","name","namespace","reason","application","user","grpc.code","grpc.method","grpc.service","grpc.time_ms","grpc.method_type","grpc.error","type","duration","dest-namespace","dest-server","project"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_APPLICATION_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","application","app-namespace","project","dest-server","dest-namespace","dest-name","comparison-level","time_ms","patch_ms","setop_ms","compare_app_state_ms","refresh_app_conditions_ms","process_refresh_app_conditions_errors_ms","comparison_with_nothing_ms","name","namespace","app_status_update_ms","auto_sync_ms","diff_ms","git_ms","health_ms","live_ms","manifests_ms","repo_ms","sync_ms","cluster","syncId","duration","eventType","kind"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_APPLICATIONSET_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","name","namespace","application","app-namespace","project","applicationset","action","count","requeueAfter","type","version","err","repoURL","revision"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_ARGOCD_REPOSERVER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","error","grpc.code","grpc.method","grpc.service","grpc.time_ms","grpc.method_type","grpc.component","grpc.error","version","component","duration","execID"],"mandatoryFields":["resource_arn","event_timestamp"]},{"permissionsVersion":"V2","logType":"EKS_CAPABILITY_KRO_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","stream","level","message","err","error","controller","controllerGroup","controllerKind","reconcileID","worker-count","gvr","crd","name","namespace","type","breakingChanges","summary","existingRGDID","newRGDID"],"mandatoryFields":["resource_arn","event_timestamp"]}]
│       └ vendedLogs
│          └[+] logType: EKS_CAPABILITY_ARGOCD_NOTIFICATION_LOGS
│            ├permissionsVersion: V2
│            ├destinations: [S3, CWL, FH]
│            ├mandatoryFields: [resource_arn, event_timestamp]
│            └optionalFields: [timestamp, resource_id, level, message, notification_event, service, destination, success, duration_ms, status_code, error, app, namespace, reason, resource, trigger_count, template_count, service_count, enabled]
├[~] service aws-emr
│ └ resources
│    └[~]  resource AWS::EMR::InstanceFleetConfig
│       └ attributes
│          └[-] Id: string
├[~] service aws-eventsv2
│ └ resources
│    └[~]  resource AWS::EventsV2::Subscriber
│       ├ properties
│       │  └[+] InvokeConfiguration: InvokeConfiguration (required)
│       └ types
│          ├[+]  type DeduplicationConfiguration
│          │  ├      documentation: Deduplication settings applied to the forwarded events on the downstream bus.
│          │  │      name: DeduplicationConfiguration
│          │  └ properties
│          │     └ DeduplicationType: string<CONTENT_BASED> (required)
│          ├[+]  type EventBusV2Parameters
│          │  ├      documentation: Parameters for forwarding events to another EventBridge event bus, used when TargetArn is an event bus ARN of the form arn:{partition}:events:{region}:{account}:event-busv2/{name}/{id}.
│          │  │      name: EventBusV2Parameters
│          │  └ properties
│          │     ├ Metadata: Map<string, string>
│          │     ├ SystemMetadata: EventBusV2SystemMetadata
│          │     └ DeduplicationConfiguration: DeduplicationConfiguration
│          ├[+]  type EventBusV2SystemMetadata
│          │  ├      documentation: Customer-controllable system metadata attached to each forwarded event.
│          │  │      name: EventBusV2SystemMetadata
│          │  └ properties
│          │     ├ EventGroupId: string
│          │     └ DeduplicationId: string
│          ├[+]  type HttpParameters
│          │  ├      documentation: Parameters for invoking an HTTP endpoint target, such as an Amazon API Gateway endpoint or an EventBridge API destination.
│          │  │      name: HttpParameters
│          │  └ properties
│          │     ├ PathParameterValues: Array<string>
│          │     ├ HeaderParameters: Map<string, string>
│          │     ├ QueryStringParameters: Map<string, string>
│          │     └ InvocationTimeoutSeconds: string
│          ├[+]  type InvokeConfiguration
│          │  ├      documentation: Configuration for how the subscriber invokes its target. Specify the target ARN, the IAM role, and, optionally, the target-specific parameters object that matches the target type.
│          │  │      name: InvokeConfiguration
│          │  └ properties
│          │     ├ TargetArn: string (required, immutable)
│          │     ├ RoleArn: string (required)
│          │     ├ LambdaParameters: LambdaParameters
│          │     ├ SqsParameters: SqsParameters
│          │     ├ SnsParameters: SnsParameters
│          │     ├ KinesisParameters: KinesisParameters
│          │     ├ StepFunctionsParameters: StepFunctionsParameters
│          │     ├ HttpParameters: HttpParameters
│          │     ├ UniversalTargetParameters: UniversalTargetParameters
│          │     └ EventBusV2Parameters: EventBusV2Parameters
│          ├[+]  type KinesisParameters
│          │  ├      documentation: Parameters for writing events to an Amazon Kinesis Data Streams target.
│          │  │      name: KinesisParameters
│          │  └ properties
│          │     ├ PartitionKey: string
│          │     └ ExplicitHashKey: string
│          ├[+]  type LambdaParameters
│          │  ├      documentation: Parameters for invoking an AWS Lambda function target.
│          │  │      name: LambdaParameters
│          │  └ properties
│          │     ├ InvocationType: string
│          │     ├ Qualifier: string
│          │     ├ DurableExecutionName: string
│          │     ├ TenantId: string
│          │     └ InvocationTimeoutSeconds: string
│          ├[+]  type MessageAttributeValue
│          │  ├      documentation: A message attribute value and its data type, for Amazon SQS and Amazon SNS targets.
│          │  │      name: MessageAttributeValue
│          │  └ properties
│          │     ├ DataType: string (required)
│          │     ├ StringValue: string
│          │     └ BinaryValue: string
│          ├[+]  type SnsParameters
│          │  ├      documentation: Parameters for publishing events to an Amazon SNS topic target.
│          │  │      name: SnsParameters
│          │  └ properties
│          │     ├ MessageGroupId: string
│          │     ├ MessageDeduplicationId: string
│          │     ├ Subject: string
│          │     ├ MessageStructure: string
│          │     └ MessageAttributes: Map<string, MessageAttributeValue>
│          ├[+]  type SqsParameters
│          │  ├      documentation: Parameters for sending events to an Amazon SQS queue target.
│          │  │      name: SqsParameters
│          │  └ properties
│          │     ├ MessageGroupId: string
│          │     ├ MessageDeduplicationId: string
│          │     ├ DelaySeconds: string
│          │     ├ MessageAttributes: Map<string, MessageAttributeValue>
│          │     └ MessageSystemAttributes: Map<string, MessageAttributeValue>
│          ├[+]  type StepFunctionsParameters
│          │  ├      documentation: Parameters for starting an AWS Step Functions state machine execution target.
│          │  │      name: StepFunctionsParameters
│          │  └ properties
│          │     ├ InvocationType: string
│          │     ├ Name: string
│          │     ├ TraceHeader: string
│          │     └ InvocationTimeoutSeconds: string
│          └[+]  type UniversalTargetParameters
│             ├      documentation: Parameters for invoking an AWS service API as a universal service integration target, used when TargetArn has the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}.
│             │      name: UniversalTargetParameters
│             └ properties
│                ├ Input: string (required)
│                └ InvocationTimeoutSeconds: string
├[~] service aws-fsx
│ └ resources
│    ├[~]  resource AWS::FSx::Snapshot
│    │  └ attributes
│    │     └ Id: (documentation changed)
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
├[~] service aws-gamelift
│ └ resources
│    └[~]  resource AWS::GameLift::GameSessionQueue
│       ├      - vendedLogs: undefined
│       │      + vendedLogs: [{"permissionsVersion":"V2","logType":"QUEUE_PLACEMENT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","placement_id","event_type","summary","data"],"mandatoryFields":["resource_arn","event_timestamp"]}]
│       └ vendedLogs
│          └[+] logType: QUEUE_PLACEMENT_LOGS
│            ├permissionsVersion: V2
│            ├destinations: [S3, CWL, FH]
│            ├mandatoryFields: [resource_arn, event_timestamp]
│            └optionalFields: [timestamp, placement_id, event_type, summary, data]
├[~] service aws-healthlake
│ └ resources
│    └[~]  resource AWS::HealthLake::FHIRDatastore
│       ├ properties
│       │  ├[+] AnalyticsConfiguration: AnalyticsConfiguration
│       │  ├[+] NlpConfiguration: NlpConfiguration
│       │  └[+] ProfileConfiguration: ProfileConfiguration
│       ├ attributes
│       │  └ DatastoreStatus: - string<CREATING|ACTIVE|DELETING|DELETED>
│       │                     + string<CREATING|ACTIVE|UPDATING|UPDATE_FAILED|DELETING|DELETED>
│       └ types
│          ├[+]  type AnalyticsConfiguration
│          │  ├      documentation: The analytics configuration for the Data Store. Omitted when the Data Store can't carry analytics.
│          │  │      name: AnalyticsConfiguration
│          │  └ properties
│          │     └ Status: string<ENABLED|PAUSED> (required)
│          ├[+]  type NlpConfiguration
│          │  ├      documentation: The natural language processing (NLP) configuration for the Data Store.
│          │  │      name: NlpConfiguration
│          │  └ properties
│          │     └ Status: string<ENABLED|DISABLED> (required)
│          └[+]  type ProfileConfiguration
│             ├      documentation: The profile configuration for the Data Store.
│             │      name: ProfileConfiguration
│             └ properties
│                └ DefaultProfiles: Array<string> (required)
├[~] service aws-inspectorv2
│ └ resources
│    └[~]  resource AWS::InspectorV2::Filter
│       └ types
│          └[~] type FilterCriteria
│            └ properties
│               └[+] EcrImageInUseCount: Array<NumberFilter>
├[~] service aws-iotevents
│ └ resources
│    └[~]  resource AWS::IoTEvents::AlarmModel
│       ├      - primaryIdentifier: ["AlarmModelName"]
│       │      + primaryIdentifier: ["Id"]
│       ├ attributes
│       │  └[+] Id: string
│       └ types
│          └[~] type SimpleRule
│            └ properties
│               └ ComparisonOperator: - string<GREATER|GREATER_OR_EQUAL|LESS|LESS_OR_EQUAL|EQUAL|NOT_EQUAL> (required)
│                                     + string (required)
├[~] service aws-iotwireless
│ └ resources
│    ├[~]  resource AWS::IoTWireless::PartnerAccount
│    │  └      - arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:SidewalkAccount/${SidewalkAccountId}
│    │         + arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:SidewalkAccount/${AmazonId}
│    └[~]  resource AWS::IoTWireless::WirelessDeviceImportTask
│       └      - arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:ImportTask/${ImportTaskId}
│              + arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:WirelessDeviceImportTask/${WirelessDeviceImportTaskId}
├[~] service aws-ivs
│ └ resources
│    └[~]  resource AWS::IVS::AdConfiguration
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:ivs:${Region}:${Account}:ad-configuration/${ResourceId}
├[~] service aws-lambda
│ └ resources
│    └[~]  resource AWS::Lambda::NetworkConnector
│       └ types
│          └[~] type VpcEgressConfiguration
│            └ properties
│               ├ AssociatedComputeResourceTypes: - Array<string<MicroVm>> (required)
│               │                                 + Array<string<MicroVm|WebFunction>> (required)
│               └ SecurityGroupIds: (documentation changed)
├[~] service aws-licensemanager
│ └ resources
│    ├[~]  resource AWS::LicenseManager::LicenseConfiguration
│    │  └      - arnTemplate: undefined
│    │         + arnTemplate: arn:${Partition}:license-manager:${Region}:${Account}:license-configuration:${LicenseConfigurationId}
│    └[~]  resource AWS::LicenseManager::ReportGenerator
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:license-manager:${Region}:${Account}:report-generator:${ReportGeneratorId}
├[~] service aws-licensemanagerlinuxsubscriptions
│ └ resources
│    └[~]  resource AWS::LicenseManagerLinuxSubscriptions::SubscriptionProvider
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:license-manager-linux-subscriptions:${Region}:${Account}:subscription-provider/${SubscriptionProviderId}
├[+] service aws-licensemanagerusersubscriptions
│ ├      capitalized: LicenseManagerUserSubscriptions
│ │      cloudFormationNamespace: AWS::LicenseManagerUserSubscriptions
│ │      name: aws-licensemanagerusersubscriptions
│ │      shortName: licensemanagerusersubscriptions
│ └ resources
│    └ resource AWS::LicenseManagerUserSubscriptions::LicenseServerEndpoint
│      ├      name: LicenseServerEndpoint
│      │      cloudFormationType: AWS::LicenseManagerUserSubscriptions::LicenseServerEndpoint
│      │      documentation: Resource Type definition for AWS::LicenseManagerUserSubscriptions::LicenseServerEndpoint. A license server endpoint that provides access to Remote Desktop Services Subscriber Access License servers for a registered identity provider.
│      │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│      │      arnTemplate: arn:${Partition}:license-manager-user-subscriptions:${Region}:${Account}:license-server-endpoint/${LicenseServerEndpointId}
│      │      primaryIdentifier: ["IdentityProviderArn","LicenseServerEndpointArn"]
│      ├ properties
│      │  ├ IdentityProviderArn: string (required, immutable)
│      │  ├ LicenseServerSettings: LicenseServerSettings (immutable)
│      │  └ Tags: Array<tag>
│      ├ attributes
│      │  ├ LicenseServerEndpointArn: string
│      │  ├ LicenseServerEndpointId: string
│      │  ├ LicenseServerEndpointProvisioningStatus: string<PROVISIONING|PROVISIONING_FAILED|PROVISIONED|DELETING|DELETION_FAILED|DELETED>
│      │  ├ ServerType: string<RDS_SAL>
│      │  ├ ServerEndpoint: ServerEndpoint
│      │  ├ LicenseServers: Array<LicenseServer>
│      │  └ CreationTime: string
│      └ types
│         ├ type CredentialsProvider
│         │ ├      documentation: The source of the credentials that License Manager uses to reach the license server.
│         │ │      name: CredentialsProvider
│         │ └ properties
│         │    └ SecretsManagerCredentialsProvider: SecretsManagerCredentialsProvider (required)
│         ├ type LicenseServer
│         │ ├      documentation: A Remote Desktop Services license server that is accessed through the endpoint.
│         │ │      name: LicenseServer
│         │ └ properties
│         │    ├ ProvisioningStatus: string<PROVISIONING|PROVISIONING_FAILED|PROVISIONED|DELETING|DELETION_FAILED|DELETED>
│         │    ├ HealthStatus: string<HEALTHY|UNHEALTHY|NOT_APPLICABLE>
│         │    ├ Ipv4Address: string
│         │    └ Ipv6Address: string
│         ├ type LicenseServerSettings
│         │ ├      documentation: The settings of the RDS license server to create the endpoint for.
│         │ │      name: LicenseServerSettings
│         │ └ properties
│         │    ├ ServerType: string<RDS_SAL> (required)
│         │    └ ServerSettings: ServerSettings (required)
│         ├ type RdsSalSettings
│         │ ├      documentation: The settings of a Remote Desktop Services Subscriber Access License server.
│         │ │      name: RdsSalSettings
│         │ └ properties
│         │    └ RdsSalCredentialsProvider: CredentialsProvider (required)
│         ├ type SecretsManagerCredentialsProvider
│         │ ├      documentation: Credentials held in AWS Secrets Manager.
│         │ │      name: SecretsManagerCredentialsProvider
│         │ └ properties
│         │    └ SecretId: string (required)
│         ├ type ServerEndpoint
│         │ ├      documentation: The network address of a license server endpoint.
│         │ │      name: ServerEndpoint
│         │ └ properties
│         │    └ Endpoint: string
│         └ type ServerSettings
│           ├      documentation: The settings of a license server, by server type.
│           │      name: ServerSettings
│           └ properties
│              └ RdsSalSettings: RdsSalSettings (required)
├[~] service aws-location
│ └ resources
│    └[~]  resource AWS::Location::GeofenceCollection
│       └      - arnTemplate: arn:${Partition}:geo:${Region}:${Account}:geofence-collection/${CollectionName}
│              + arnTemplate: arn:${Partition}:geo:${Region}:${Account}:geofence-collection/${GeofenceCollectionName}
├[~] service aws-mediaconnect
│ └ resources
│    ├[~]  resource AWS::MediaConnect::Flow
│    │  └ types
│    │     └[~] type NdiSourceSettings
│    │       └ properties
│    │          └[+] AudioReferenceLevel: integer
│    └[~]  resource AWS::MediaConnect::FlowOutput
│       └ properties
│          └[+] NdiAudioReferenceLevel: integer
├[~] service aws-mediaconvert
│ └ resources
│    └[+]  resource AWS::MediaConvert::CertificateAssociation
│       ├      name: CertificateAssociation
│       │      cloudFormationType: AWS::MediaConvert::CertificateAssociation
│       │      documentation: Associates an AWS Certificate Manager (ACM) certificate with AWS Elemental MediaConvert to enable encryption for content delivery.
│       │      primaryIdentifier: ["Arn"]
│       └ properties
│          └ Arn: string (required, immutable)
├[~] service aws-medialive
│ └ resources
│    ├[~]  resource AWS::MediaLive::Input
│    │  ├ properties
│    │  │  ├ Destinations: - Array<InputDestinationRequest>
│    │  │  │               + Array<InputDestination> ⇐ Array<InputDestinationRequest>
│    │  │  ├ InputNetworkLocation: - string (immutable)
│    │  │  │                       + string<AWS|ON_PREMISES> (immutable)
│    │  │  │                       (documentation changed)
│    │  │  ├ MediaConnectFlows: - Array<MediaConnectFlowRequest>
│    │  │  │                    + Array<MediaConnectFlow> ⇐ Array<MediaConnectFlowRequest>
│    │  │  ├ MulticastSettings: - MulticastSettingsCreateRequest
│    │  │  │                    + MulticastSettings ⇐ MulticastSettingsCreateRequest
│    │  │  │                    (documentation changed)
│    │  │  ├ RouterSettings: (documentation changed)
│    │  │  ├ SdiSources: (documentation changed)
│    │  │  ├ Smpte2110ReceiverGroupSettings: (documentation changed)
│    │  │  ├ Sources: - Array<InputSourceRequest>
│    │  │  │          + Array<InputSource> ⇐ Array<InputSourceRequest>
│    │  │  ├ SrtSettings: - SrtSettingsRequest
│    │  │  │              + SrtSettings ⇐ SrtSettingsRequest
│    │  │  │              (documentation changed)
│    │  │  ├ Tags: - json
│    │  │  │       + Map<string, string> ⇐ json
│    │  │  └ Type: - string (immutable)
│    │  │          + string<UDP_PUSH|RTP_PUSH|RTMP_PUSH|RTMP_PULL|URL_PULL|MP4_FILE|MEDIACONNECT|INPUT_DEVICE|AWS_CDI|TS_FILE|SRT_CALLER|MULTICAST|SMPTE_2110_RECEIVER_GROUP|SDI|MEDIACONNECT_ROUTER|SRT_LISTENER> (immutable)
│    │  ├ attributes
│    │  │  ├[+] AttachedChannels: Array<string>
│    │  │  ├[+] DestinationUrls: Array<string>
│    │  │  ├[+] InputClass: string<STANDARD|SINGLE_PIPELINE>
│    │  │  ├[+] InputPartnerIds: Array<string>
│    │  │  ├[+] InputSourceType: string<STATIC|DYNAMIC>
│    │  │  ├[+] SecurityGroups: Array<string>
│    │  │  ├[+] SourceUrls: Array<string>
│    │  │  └[+] State: string<CREATING|DETACHED|ATTACHED|DELETING|DELETED>
│    │  └ types
│    │     ├[+]  type InputDestination
│    │     │  ├      documentation: The settings for a PUSH type input.
│    │     │  │      name: InputDestination
│    │     │  └ properties
│    │     │     ├ Ip: string
│    │     │     ├ Port: string
│    │     │     ├ Url: string
│    │     │     ├ Vpc: InputDestinationVpc
│    │     │     ├ Network: string
│    │     │     ├ NetworkRoutes: Array<InputDestinationRoute>
│    │     │     ├ StreamName: string
│    │     │     └ StaticIpAddress: string
│    │     ├[+]  type InputDestinationRoute
│    │     │  ├      documentation: A network route configuration.
│    │     │  │      name: InputDestinationRoute
│    │     │  └ properties
│    │     │     ├ Cidr: string
│    │     │     └ Gateway: string
│    │     ├[+]  type InputDestinationVpc
│    │     │  ├      documentation: The properties for a VPC type input destination.
│    │     │  │      name: InputDestinationVpc
│    │     │  └ properties
│    │     │     ├ AvailabilityZone: string
│    │     │     └ NetworkInterfaceId: string
│    │     ├[~] type InputSdpLocation
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: The location of the SDP file for one of the SMPTE 2110 streams in a receiver group.
│    │     │ └ properties
│    │     │    ├ MediaIndex: (documentation changed)
│    │     │    └ SdpUrl: (documentation changed)
│    │     ├[+]  type InputSource
│    │     │  ├      documentation: The settings for a PULL type input.
│    │     │  │      name: InputSource
│    │     │  └ properties
│    │     │     ├ PasswordParam: string
│    │     │     ├ Url: string
│    │     │     └ Username: string
│    │     ├[+]  type MediaConnectFlow
│    │     │  ├      documentation: The settings for a MediaConnect Flow.
│    │     │  │      name: MediaConnectFlow
│    │     │  └ properties
│    │     │     └ FlowArn: string
│    │     ├[+]  type MulticastSettings
│    │     │  ├      documentation: Settings for a Multicast input. Contains a list of multicast Urls and optional source ip addresses.
│    │     │  │      name: MulticastSettings
│    │     │  └ properties
│    │     │     └ Sources: Array<MulticastSource>
│    │     ├[+]  type MulticastSource
│    │     │  ├      documentation: Pair of multicast url and source ip address (optional) that make up a multicast source.
│    │     │  │      name: MulticastSource
│    │     │  └ properties
│    │     │     ├ SourceIp: string
│    │     │     └ Url: string (required)
│    │     ├[~] type RouterDestinationSettings
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: A MediaConnect Router destination associated with a MediaLive Input. RouterOutputArn is server-assigned.
│    │     │ └ properties
│    │     │    ├ AvailabilityZoneName: - string
│    │     │    │                       + string (required)
│    │     │    │                       (documentation changed)
│    │     │    └[+] RouterOutputArn: string
│    │     ├[~] type RouterSettings
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: Information about the MediaConnect Router association for this input.
│    │     │ └ properties
│    │     │    ├ Destinations: (documentation changed)
│    │     │    ├ EncryptionType: - string
│    │     │    │                 + string<AUTOMATIC|SECRETS_MANAGER>
│    │     │    │                 (documentation changed)
│    │     │    └ SecretArn: (documentation changed)
│    │     ├[~] type Smpte2110ReceiverGroup
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: A receiver group is a collection of video, audio, and ancillary streams that you want to group together and attach to one input.
│    │     │ └ properties
│    │     │    └ SdpSettings: (documentation changed)
│    │     ├[~] type Smpte2110ReceiverGroupSdpSettings
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: Information about the SDP files that describe the SMPTE 2110 streams that go into one SMPTE 2110 receiver group.
│    │     │ └ properties
│    │     │    ├ AncillarySdps: (documentation changed)
│    │     │    ├ AudioSdps: (documentation changed)
│    │     │    └ VideoSdp: (documentation changed)
│    │     ├[~] type Smpte2110ReceiverGroupSettings
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: Configures the sources for the SMPTE 2110 Receiver Group input.
│    │     │ └ properties
│    │     │    └ Smpte2110ReceiverGroups: (documentation changed)
│    │     ├[+]  type SrtCallerDecryption
│    │     │  ├      documentation: The decryption settings for the SRT caller source. Present only if the source has decryption enabled.
│    │     │  │      name: SrtCallerDecryption
│    │     │  └ properties
│    │     │     ├ Algorithm: string<AES128|AES192|AES256>
│    │     │     └ PassphraseSecretArn: string
│    │     ├[+]  type SrtCallerSource
│    │     │  ├      documentation: The configuration for a source that uses SRT as the connection protocol. In terms of establishing the connection, MediaLive is always caller and the upstream system is always the listener. In terms of transmission of the source content, MediaLive is always the receiver and the upstream system is always the sender.
│    │     │  │      name: SrtCallerSource
│    │     │  └ properties
│    │     │     ├ Decryption: SrtCallerDecryption
│    │     │     ├ MinimumLatency: integer
│    │     │     ├ SrtListenerAddress: string
│    │     │     ├ SrtListenerPort: string
│    │     │     └ StreamId: string
│    │     ├[+]  type SrtListenerDecryption
│    │     │  ├      documentation: The decryption settings for the SRT listener source. Present only if the source has decryption enabled.
│    │     │  │      name: SrtListenerDecryption
│    │     │  └ properties
│    │     │     ├ Algorithm: string<AES128|AES192|AES256>
│    │     │     └ PassphraseSecretArn: string
│    │     ├[+]  type SrtListenerSettings
│    │     │  ├      documentation: The configuration for a source that uses SRT as the connection protocol. In terms of establishing the connection, MediaLive is the listener and the upstream system is the caller.
│    │     │  │      name: SrtListenerSettings
│    │     │  └ properties
│    │     │     ├ Decryption: SrtListenerDecryption
│    │     │     ├ MinimumLatency: integer
│    │     │     └ StreamId: string
│    │     └[+]  type SrtSettings
│    │        ├      documentation: The configured sources for this SRT input.
│    │        │      name: SrtSettings
│    │        └ properties
│    │           ├ SrtCallerSources: Array<SrtCallerSource>
│    │           └ SrtListenerSettings: SrtListenerSettings
│    └[~]  resource AWS::MediaLive::InputSecurityGroup
│       ├ properties
│       │  ├ Tags: - json (immutable)
│       │  │       + Map<string, string> ⇐ json
│       │  └ WhitelistRules: - Array<InputWhitelistRuleCidr>
│       │                    + Array<InputWhitelistRule> ⇐ Array<InputWhitelistRuleCidr>
│       ├ attributes
│       │  └[+] Inputs: Array<string>
│       └ types
│          └[+]  type InputWhitelistRule
│             ├      documentation: Whitelist rule
│             │      name: InputWhitelistRule
│             └ properties
│                └ Cidr: string
├[~] service aws-mediapackagev2
│ └ resources
│    └[~]  resource AWS::MediaPackageV2::OriginEndpoint
│       └ types
│          ├[+]  type ContentKeyPeriodConfiguration
│          │  ├      documentation: <p>The configuration that controls the content key period timing information that MediaPackage signals to your DRM key provider.</p>
│          │  │      name: ContentKeyPeriodConfiguration
│          │  └ properties
│          │     └ ContentKeyPeriodTiming: string<INDEX_ONLY|START_END_ONLY|INDEX_WITH_START_END>
│          ├[~] type FilterConfiguration
│          │ └ properties
│          │    └[+] Multiview: MultiviewFilterConfiguration
│          ├[+]  type LowLatencyHlsFilterConfiguration
│          │  ├      documentation: <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
│          │  │      name: LowLatencyHlsFilterConfiguration
│          │  └ properties
│          │     ├ ManifestFilter: string
│          │     ├ DrmSettings: string
│          │     ├ Start: string
│          │     ├ End: string
│          │     ├ TimeDelaySeconds: integer
│          │     └ ClipStartTime: string
│          ├[~] type LowLatencyHlsManifestConfiguration
│          │ └ properties
│          │    └ FilterConfiguration: - FilterConfiguration
│          │                           + LowLatencyHlsFilterConfiguration
│          ├[+]  type MssFilterConfiguration
│          │  ├      documentation: <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
│          │  │      name: MssFilterConfiguration
│          │  └ properties
│          │     ├ ManifestFilter: string
│          │     ├ DrmSettings: string
│          │     ├ Start: string
│          │     ├ End: string
│          │     ├ TimeDelaySeconds: integer
│          │     └ ClipStartTime: string
│          ├[~] type MssManifestConfiguration
│          │ └ properties
│          │    └ FilterConfiguration: - FilterConfiguration
│          │                           + MssFilterConfiguration
│          ├[+]  type MultiviewFilterConfiguration
│          │  ├      documentation: <p>The multiview combination for a pinned manifest. MediaPackage serves the manifest with this layout and these sources, so players request it without an <code>aws.multiview</code> query parameter.</p> <p>If a request for a pinned manifest also includes an <code>aws.multiview</code> query parameter, MediaPackage rejects the request, even when that parameter requests the same combination.</p>
│          │  │      name: MultiviewFilterConfiguration
│          │  └ properties
│          │     ├ Layout: string<LAYOUT_2EH|LAYOUT_2PL|LAYOUT_3EL|LAYOUT_3PL|LAYOUT_4E|LAYOUT_4PL> (required)
│          │     └ Sources: Array<string> (required)
│          └[~] type SpekeKeyProvider
│            └ properties
│               ├[+] ContentKeyPeriodConfiguration: ContentKeyPeriodConfiguration
│               └[+] SpekeVersion: string<V2_0|V2_1>
├[~] service aws-mediatailor
│ └ resources
│    └[~]  resource AWS::MediaTailor::SourceLocation
│       └      - arnTemplate: arn:${Partition}:mediatailor:${Region}:${Account}:sourceLocation/${SourceLocationName}
│              + arnTemplate: arn:${Partition}:mediatailor:${Region}:${Account}:sourceLocation/${ResourceId}
├[~] service aws-networkfirewall
│ └ resources
│    └[~]  resource AWS::NetworkFirewall::Firewall
│       ├ properties
│       │  ├[+] NatGatewayMappings: Array<NatGatewayMapping> (immutable)
│       │  ├[+] NoSourcePreservation: boolean (immutable)
│       │  ├[+] ProxySettings: ProxySettings
│       │  └[+] VpcEndpoint: VpcEndpoint (immutable)
│       ├ attributes
│       │  └[+] NumberOfAssociations: integer
│       └ types
│          ├[+]  type ListenerProperty
│          │  ├      documentation: A port and protocol that a proxy-mode firewall's proxy listener accepts traffic on.
│          │  │      name: ListenerProperty
│          │  └ properties
│          │     ├ Port: integer
│          │     └ Type: string<HTTP|HTTPS>
│          ├[+]  type NatGatewayMapping
│          │  ├      documentation: A mapping to a NAT gateway that a proxy-mode firewall proxies egress traffic through.
│          │  │      name: NatGatewayMapping
│          │  └ properties
│          │     └ NatGatewayId: string (required)
│          ├[+]  type ProxySettings
│          │  ├      documentation: The proxy listener configuration for a proxy-mode (no source preservation) firewall.
│          │  │      name: ProxySettings
│          │  └ properties
│          │     └ ListenerProperties: Array<ListenerProperty>
│          └[+]  type VpcEndpoint
│             ├      documentation: The VPC and subnets for a proxy-mode firewall's endpoint. Provide this instead of the top-level VpcId and SubnetMappings when NoSourcePreservation is true.
│             │      name: VpcEndpoint
│             └ properties
│                ├ VpcId: string
│                └ SubnetMappings: Array<SubnetMapping>
├[~] service aws-networkmanager
│ └ resources
│    ├[~]  resource AWS::NetworkManager::ConnectAttachment
│    │  └      - arnTemplate: arn:${Partition}:networkmanager::${Account}:attachment/${ResourceId}
│    │         + arnTemplate: arn:${Partition}:networkmanager::${Account}:attachment/${AttachmentId}
│    └[~]  resource AWS::NetworkManager::VpcAttachment
│       └      - arnTemplate: arn:${Partition}:networkmanager::${Account}:attachment/${ResourceId}
│              + arnTemplate: arn:${Partition}:networkmanager::${Account}:attachment/${AttachmentId}
├[~] service aws-opensearchservice
│ └ resources
│    └[~]  resource AWS::OpenSearchService::Application
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:opensearch:${Region}:${Account}:application/${AppId}
├[~] service aws-paymentcryptography
│ └ resources
│    └[~]  resource AWS::PaymentCryptography::Key
│       └ types
│          └[~] type ReplicationStatusType
│            └ properties
│               ├[+] KmsKeyArn: string
│               └[+] KmsKeyId: string
├[~] service aws-pcs
│ └ resources
│    └[~]  resource AWS::PCS::Cluster
│       └      - vendedLogs: [{"permissionsVersion":"V2","logType":"PCS_SCHEDULER_AUDIT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp"],"mandatoryFields":["resource_id","resource_type","event_timestamp","log_level","log_name","scheduler_type","scheduler_major_version","scheduler_patch_version","node_type","log_type","message"]},{"permissionsVersion":"V2","logType":"PCS_JOBCOMP_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp"],"mandatoryFields":["resource_id","resource_type","event_timestamp","scheduler_type","scheduler_major_version","fields"]},{"permissionsVersion":"V2","logType":"PCS_SCALING_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","event_timestamp","id","resource_type","compute_node_group_id","scheduler_node_id","status_code","reason_code","description","details"]},{"permissionsVersion":"V2","logType":"PCS_SCHEDULER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp"],"mandatoryFields":["resource_id","resource_type","event_timestamp","log_level","log_name","scheduler_type","scheduler_major_version","scheduler_patch_version","node_type","message"]}]
│              + vendedLogs: [{"permissionsVersion":"V2","logType":"PCS_SCALING_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp","resource_id","event_timestamp","id","resource_type","compute_node_group_id","scheduler_node_id","status_code","reason_code","description","details"]},{"permissionsVersion":"V2","logType":"PCS_SCHEDULER_AUDIT_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp"],"mandatoryFields":["resource_id","resource_type","event_timestamp","log_level","log_name","scheduler_type","scheduler_major_version","scheduler_patch_version","node_type","log_type","message"]},{"permissionsVersion":"V2","logType":"PCS_JOBCOMP_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp"],"mandatoryFields":["resource_id","resource_type","event_timestamp","scheduler_type","scheduler_major_version","fields"]},{"permissionsVersion":"V2","logType":"PCS_SCHEDULER_LOGS","destinations":[{"destinationType":"S3","outputFormats":["plain","json","w3c","parquet"]},{"destinationType":"CWL","outputFormats":["plain","json"]},{"destinationType":"FH","outputFormats":["plain","json","raw"]}],"optionalFields":["timestamp"],"mandatoryFields":["resource_id","resource_type","event_timestamp","log_level","log_name","scheduler_type","scheduler_major_version","scheduler_patch_version","node_type","message"]}]
├[~] service aws-pinpoint
│ └ resources
│    ├[~]  resource AWS::Pinpoint::EmailTemplate
│    │  └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/PUSH
│    │         + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/EMAIL
│    ├[~]  resource AWS::Pinpoint::InAppTemplate
│    │  └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/PUSH
│    │         + arnTemplate: undefined
│    └[~]  resource AWS::Pinpoint::SmsTemplate
│       └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/PUSH
│              + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/SMS
├[+] service aws-polly
│ ├      capitalized: Polly
│ │      cloudFormationNamespace: AWS::Polly
│ │      name: aws-polly
│ │      shortName: polly
│ └ resources
│    └ resource AWS::Polly::Lexicon
│      ├      name: Lexicon
│      │      cloudFormationType: AWS::Polly::Lexicon
│      │      documentation: Resource Type definition for AWS::Polly::Lexicon. A pronunciation lexicon that stores custom pronunciations for speech synthesis.
│      │      arnTemplate: arn:${Partition}:polly:${Region}:${Account}:lexicon/${LexiconName}
│      │      primaryIdentifier: ["Arn"]
│      ├ properties
│      │  ├ Name: string (required, immutable)
│      │  └ Content: string (required)
│      └ attributes
│         ├ Arn: string
│         ├ Alphabet: string
│         ├ LanguageCode: string
│         ├ LastModified: string
│         ├ LexemesCount: integer
│         └ Size: integer
├[~] service aws-quicksight
│ └ resources
│    ├[+]  resource AWS::QuickSight::Assignment
│    │  ├      name: Assignment
│    │  │      cloudFormationType: AWS::QuickSight::Assignment
│    │  │      documentation: Resource Type definition for AWS::QuickSight::Assignment, which manages an Amazon QuickSight IAM policy assignment that attaches an IAM policy to specified QuickSight users or groups within a namespace.
│    │  │      arnTemplate: arn:${Partition}:quicksight::${Account}:assignment/${ResourceId}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ AssignmentName: string (required, immutable)
│    │  │  ├ AssignmentStatus: string<ENABLED|DRAFT|DISABLED> (required)
│    │  │  ├ Namespace: string (required, immutable)
│    │  │  ├ Identities: Map<string, Array<string>>
│    │  │  └ PolicyArn: string
│    │  └ attributes
│    │     ├ Arn: string
│    │     └ AssignmentId: string
│    ├[+]  resource AWS::QuickSight::Brand
│    │  ├      name: Brand
│    │  │      cloudFormationType: AWS::QuickSight::Brand
│    │  │      documentation: Definition of the AWS::QuickSight::Brand Resource Type.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:brand/${ResourceId}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ BrandId: string (required, immutable)
│    │  │  ├ BrandDefinition: BrandDefinition
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  ├ BrandStatus: string<CREATE_IN_PROGRESS|CREATE_SUCCEEDED|CREATE_FAILED|DELETE_IN_PROGRESS|DELETE_FAILED>
│    │  │  ├ CreatedTime: string
│    │  │  ├ LastUpdatedTime: string
│    │  │  ├ VersionId: string
│    │  │  ├ VersionStatus: string<CREATE_IN_PROGRESS|CREATE_SUCCEEDED|CREATE_FAILED>
│    │  │  └ AwsAccountId: string
│    │  └ types
│    │     ├ type ApplicationTheme
│    │     │ ├      documentation: The application theme.
│    │     │ │      name: ApplicationTheme
│    │     │ └ properties
│    │     │    ├ BrandColorPalette: BrandColorPalette
│    │     │    └ BrandElementStyle: BrandElementStyle
│    │     ├ type BrandColorPalette
│    │     │ ├      documentation: The color palette.
│    │     │ │      name: BrandColorPalette
│    │     │ └ properties
│    │     │    ├ Primary: Palette
│    │     │    ├ Secondary: Palette
│    │     │    ├ Accent: Palette
│    │     │    ├ Measure: Palette
│    │     │    ├ Dimension: Palette
│    │     │    ├ Success: Palette
│    │     │    ├ Info: Palette
│    │     │    ├ Warning: Palette
│    │     │    └ Danger: Palette
│    │     ├ type BrandDefinition
│    │     │ ├      name: BrandDefinition
│    │     │ └ properties
│    │     │    ├ BrandName: string
│    │     │    ├ Description: string
│    │     │    └ ApplicationTheme: ApplicationTheme
│    │     ├ type BrandElementStyle
│    │     │ ├      documentation: The element style.
│    │     │ │      name: BrandElementStyle
│    │     │ └ properties
│    │     │    └ NavbarStyle: NavbarStyle
│    │     ├ type NavbarStyle
│    │     │ ├      documentation: The navigation bar style.
│    │     │ │      name: NavbarStyle
│    │     │ └ properties
│    │     │    ├ GlobalNavbar: Palette
│    │     │    └ ContextualNavbar: Palette
│    │     └ type Palette
│    │       ├      documentation: The palette colors.
│    │       │      name: Palette
│    │       └ properties
│    │          ├ Foreground: string
│    │          └ Background: string
│    └[+]  resource AWS::QuickSight::Group
│       ├      name: Group
│       │      cloudFormationType: AWS::QuickSight::Group
│       │      documentation: Definition of the AWS::QuickSight::Group Resource Type.
│       │      arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:group/${ResourceId}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ GroupName: string (required, immutable)
│       │  ├ Description: string
│       │  └ Namespace: string (required, immutable)
│       └ attributes
│          ├ Arn: string
│          └ PrincipalId: string
├[~] service aws-rds
│ └ resources
│    ├[~]  resource AWS::RDS::DBClusterEndpoint
│    │  └      - arnTemplate: undefined
│    │         + arnTemplate: arn:${Partition}:rds:${Region}:${Account}:cluster-endpoint:${DbClusterEndpoint}
│    └[+]  resource AWS::RDS::Deployment
│       ├      name: Deployment
│       │      cloudFormationType: AWS::RDS::Deployment
│       │      documentation: Resource Type definition for AWS::RDS::Deployment. Creates and manages an Amazon RDS Blue/Green Deployment.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:rds:${Region}:${Account}:deployment:${BlueGreenDeploymentIdentifier}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ BlueGreenDeploymentName: string (required, immutable)
│       │  ├ Source: string (required, immutable)
│       │  ├ TargetEngineVersion: string (immutable)
│       │  ├ TargetDBParameterGroupName: string (immutable)
│       │  ├ TargetDBClusterParameterGroupName: string (immutable)
│       │  ├ TargetDBInstanceClass: string (immutable)
│       │  ├ UpgradeTargetStorageConfig: boolean (immutable)
│       │  ├ TargetIops: integer (immutable)
│       │  ├ TargetStorageType: string (immutable)
│       │  ├ TargetAllocatedStorage: integer (immutable)
│       │  ├ TargetStorageThroughput: integer (immutable)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ BlueGreenDeploymentIdentifier: string
│       │  ├ Target: string
│       │  ├ SwitchoverDetails: Array<SwitchoverDetail>
│       │  ├ Tasks: Array<DeploymentTask>
│       │  ├ Status: string
│       │  └ CreateTime: string
│       └ types
│          ├ type DeploymentTask
│          │ ├      name: DeploymentTask
│          │ └ properties
│          │    ├ TaskName: string
│          │    └ TaskStatus: string
│          └ type SwitchoverDetail
│            ├      name: SwitchoverDetail
│            └ properties
│               ├ SourceMember: string
│               ├ TargetMember: string
│               └ SwitchoverDetailStatus: string
├[~] service aws-resiliencehub
│ └ resources
│    └[~]  resource AWS::ResilienceHub::ResiliencyPolicy
│       └      - arnTemplate: arn:${Partition}:resiliencehub:${Region}:${Account}:resiliency-policy/${ResiliencyPolicyId}
│              + arnTemplate: arn:${Partition}:resiliencehub:${Region}:${Account}:resiliency-policy/${PolicyId}
├[~] service aws-resiliencehubv2
│ └ resources
│    └[~]  resource AWS::ResilienceHubV2::Service
│       ├ properties
│       │  └[+] DevOpsAgentConfiguration: DevOpsAgentConfiguration
│       └ types
│          └[+]  type DevOpsAgentConfiguration
│             ├      documentation: Links the service to an AWS DevOps Agent Agent Space. Provide AgentSpaceArn to connect the service; omit this property to leave an existing link unchanged. The DevOps Agent integration is governed by the service's resilience policy and operates in analysis-only mode.
│             │      name: DevOpsAgentConfiguration
│             └ properties
│                └ AgentSpaceArn: string (required)
├[~] service aws-route53
│ └ resources
│    └[~]  resource AWS::Route53::HostedZone
│       └ properties
│          └[+] DelegationSetId: string (immutable)
├[~] service aws-s3
│ └ resources
│    └[~]  resource AWS::S3::Bucket
│       └ types
│          ├[~] type DefaultEventHold
│          │ ├      - documentation: undefined
│          │ │      + documentation: The default Object Lock event hold duration that you want to apply to new objects placed in the specified bucket, unless an object's upload request specifies its own Object Lock settings. New object versions are placed under an event hold and remain protected while the hold is active. When the event hold is released, Amazon S3 retains the object version for this duration, measured from the time the hold is released.
│          │ │        The ``DefaultEventHold`` duration can be specified in either ``Days`` or ``Years``, but you must select one. You can't specify ``Days`` and ``Years`` at the same time.
│          │ └ properties
│          │    ├ Days: (documentation changed)
│          │    └ Years: (documentation changed)
│          └[~] type DefaultRetention
│            └ properties
│               └ DefaultEventHold: (documentation changed)
├[~] service aws-securityagent
│ └ resources
│    └[~]  resource AWS::SecurityAgent::Integration
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:securityagent:${Region}:${Account}:integration/${IntegrationId}
├[~] service aws-ses
│ └ resources
│    └[~]  resource AWS::SES::Tenant
│       ├ properties
│       │  ├[+] ReputationEntity: ReputationEntity
│       │  └[+] SuppressionAttributes: TenantSuppressionAttributes
│       └ types
│          ├[+]  type ReputationEntity
│          │  ├      documentation: The reputation configuration for the tenant.
│          │  │      name: ReputationEntity
│          │  └ properties
│          │     └ Policy: ReputationPolicy (required)
│          ├[+]  type ReputationPolicy
│          │  ├      documentation: The reputation policy for the tenant.
│          │  │      name: ReputationPolicy
│          │  └ properties
│          │     └ ReputationEntityPolicy: string (required)
│          └[+]  type TenantSuppressionAttributes
│             ├      documentation: The suppression attributes for the tenant.
│             │      name: TenantSuppressionAttributes
│             └ properties
│                ├ SuppressionScope: string<ACCOUNT|TENANT> (required)
│                └ SuppressedReasons: Array<string<BOUNCE|COMPLAINT>> (required)
├[~] service aws-smsvoice
│ └ resources
│    ├[~]  resource AWS::SMSVOICE::NotifyConfiguration
│    │  └      - arnTemplate: undefined
│    │         + arnTemplate: arn:${Partition}:sms-voice:${Region}:${Account}:notify-configuration/${NotifyConfigurationId}
│    └[~]  resource AWS::SMSVOICE::RcsAgent
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:sms-voice:${Region}:${Account}:rcs-agent/${RcsAgentId}
├[~] service aws-storagegateway
│ └ resources
│    ├[+]  resource AWS::StorageGateway::NFSFileShare
│    │  ├      name: NFSFileShare
│    │  │      cloudFormationType: AWS::StorageGateway::NFSFileShare
│    │  │      documentation: Resource Type definition for AWS::StorageGateway::NFSFileShare. An NFS file share exposes an Amazon S3 bucket through a Storage Gateway file gateway, so clients read and write objects as files over NFS. The share's variant is fixed by its resource type rather than by a property: the service constructs the two variants with different APIs, and a property carrying the choice would belong to neither API's input.
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      primaryIdentifier: ["FileShareARN"]
│    │  ├ properties
│    │  │  ├ GatewayARN: string (required, immutable)
│    │  │  ├ Role: string (required, immutable)
│    │  │  ├ LocationARN: string (required, immutable)
│    │  │  ├ BucketRegion: string (immutable)
│    │  │  ├ VPCEndpointDNSName: string (immutable)
│    │  │  ├ EncryptionType: string<SseS3|SseKms|DsseKms>
│    │  │  ├ KMSEncrypted: boolean
│    │  │  ├ KMSKey: string
│    │  │  ├ DefaultStorageClass: string
│    │  │  ├ ObjectACL: string<private|public-read|public-read-write|authenticated-read|bucket-owner-read|bucket-owner-full-control|aws-exec-read>
│    │  │  ├ ReadOnly: boolean
│    │  │  ├ GuessMIMETypeEnabled: boolean
│    │  │  ├ RequesterPays: boolean
│    │  │  ├ FileShareName: string
│    │  │  ├ CacheAttributes: CacheAttributes
│    │  │  ├ NotificationPolicy: string
│    │  │  ├ AuditDestinationARN: string
│    │  │  ├ Tags: Array<tag>
│    │  │  ├ NFSFileShareDefaults: NFSFileShareDefaults
│    │  │  ├ ClientList: Array<string>
│    │  │  └ Squash: string
│    │  ├ attributes
│    │  │  ├ FileShareARN: string
│    │  │  ├ FileShareId: string
│    │  │  ├ FileShareStatus: string
│    │  │  └ Path: string
│    │  └ types
│    │     ├ type CacheAttributes
│    │     │ ├      documentation: Refresh cache information for the file share. Removing this property from a template leaves the share's current value: the service documents no value that resets it.
│    │     │ │      name: CacheAttributes
│    │     │ └ properties
│    │     │    └ CacheStaleTimeoutInSeconds: integer
│    │     └ type NFSFileShareDefaults
│    │       ├      documentation: Default values for the file and directory permissions of an NFS share. Removing this property from a template leaves the live values unchanged rather than clearing them, because the service has no reset for it: a create that omits the object leaves it absent, but the update path merges member by member keyed on the same internal sentinel that reports absence, so no request can restore that state. Set the members you want rather than relying on removal.
│    │       │      name: NFSFileShareDefaults
│    │       └ properties
│    │          ├ FileMode: string
│    │          ├ DirectoryMode: string
│    │          ├ GroupId: integer
│    │          └ OwnerId: integer
│    └[+]  resource AWS::StorageGateway::SMBFileShare
│       ├      name: SMBFileShare
│       │      cloudFormationType: AWS::StorageGateway::SMBFileShare
│       │      documentation: Resource Type definition for AWS::StorageGateway::SMBFileShare. An SMB file share exposes an Amazon S3 bucket through a Storage Gateway file gateway, so clients read and write objects as files over SMB. The share's variant is fixed by its resource type rather than by a property: the service constructs the two variants with different APIs, and a property carrying the choice would belong to neither API's input.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["FileShareARN"]
│       ├ properties
│       │  ├ GatewayARN: string (required, immutable)
│       │  ├ Role: string (required, immutable)
│       │  ├ LocationARN: string (required, immutable)
│       │  ├ BucketRegion: string (immutable)
│       │  ├ VPCEndpointDNSName: string (immutable)
│       │  ├ EncryptionType: string<SseS3|SseKms|DsseKms>
│       │  ├ KMSEncrypted: boolean
│       │  ├ KMSKey: string
│       │  ├ DefaultStorageClass: string
│       │  ├ ObjectACL: string<private|public-read|public-read-write|authenticated-read|bucket-owner-read|bucket-owner-full-control|aws-exec-read>
│       │  ├ ReadOnly: boolean
│       │  ├ GuessMIMETypeEnabled: boolean
│       │  ├ RequesterPays: boolean
│       │  ├ FileShareName: string
│       │  ├ CacheAttributes: CacheAttributes
│       │  ├ NotificationPolicy: string
│       │  ├ AuditDestinationARN: string
│       │  ├ Tags: Array<tag>
│       │  ├ SMBACLEnabled: boolean
│       │  ├ AccessBasedEnumeration: boolean
│       │  ├ AdminUserList: Array<string>
│       │  ├ ValidUserList: Array<string>
│       │  ├ InvalidUserList: Array<string>
│       │  ├ Authentication: string (immutable)
│       │  ├ CaseSensitivity: string<ClientSpecified|CaseSensitive>
│       │  └ OplocksEnabled: boolean
│       ├ attributes
│       │  ├ FileShareARN: string
│       │  ├ FileShareId: string
│       │  ├ FileShareStatus: string
│       │  └ Path: string
│       └ types
│          └ type CacheAttributes
│            ├      documentation: Refresh cache information for the file share. Removing this property from a template leaves the share's current value: the service documents no value that resets it.
│            │      name: CacheAttributes
│            └ properties
│               └ CacheStaleTimeoutInSeconds: integer
├[~] service aws-timestream
│ └ resources
│    └[+]  resource AWS::Timestream::InfluxDBBackup
│       ├      name: InfluxDBBackup
│       │      cloudFormationType: AWS::Timestream::InfluxDBBackup
│       │      documentation: Resource type definition for AWS::Timestream::InfluxDBBackup. An on-demand backup of an Amazon Timestream for InfluxDB DB instance or DB cluster.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ Name: string (required, immutable)
│       │  ├ DbResourceId: string (required, immutable)
│       │  ├ RetentionDays: integer (immutable)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ Id: string
│       │  ├ Status: string<IN_PROGRESS|COMPLETED|FAILED|DELETING|DELETED>
│       │  ├ Type: string<HOURLY|DAILY|WEEKLY|MONTHLY|CUSTOM_SCHEDULE|ON_DEMAND|CONTINUOUS>
│       │  ├ CreatedAt: string
│       │  ├ ExpiresAfter: string
│       │  ├ EngineType: string<INFLUXDB_V2|INFLUXDB_V3_CORE|INFLUXDB_V3_ENTERPRISE>
│       │  ├ DeploymentType: string<SINGLE_AZ|WITH_MULTIAZ_STANDBY|MULTI_NODE_READ_REPLICAS>
│       │  ├ KmsKeyId: string
│       │  ├ ClusterConfiguration: ClusterConfiguration
│       │  ├ DbParameterGroupId: string
│       │  ├ DbInstanceType: string<db.influx.medium|db.influx.large|db.influx.xlarge|db.influx.2xlarge|db.influx.4xlarge|db.influx.8xlarge|db.influx.12xlarge|db.influx.16xlarge|db.influx.24xlarge>
│       │  ├ LogDeliveryConfiguration: LogDeliveryConfiguration
│       │  ├ FailoverMode: string<AUTOMATIC|NO_FAILOVER>
│       │  ├ DbStorageType: string<InfluxIOIncludedT1|InfluxIOIncludedT2|InfluxIOIncludedT3>
│       │  ├ AllocatedStorage: integer
│       │  ├ VpcSubnetIds: Array<string>
│       │  ├ VpcSecurityGroupIds: Array<string>
│       │  ├ PubliclyAccessible: boolean
│       │  ├ Port: integer
│       │  ├ NetworkType: string<IPV4|DUAL>
│       │  ├ InfluxAuthParametersSecretArn: string
│       │  └ MaintenanceSchedule: MaintenanceSchedule
│       └ types
│          ├ type ClusterConfiguration
│          │ ├      documentation: The cluster configuration of the resource at the time of backup.
│          │ │      name: ClusterConfiguration
│          │ └ properties
│          │    ├ IngestQueryInstances: integer
│          │    ├ QueryOnlyInstances: integer
│          │    └ DedicatedCompactor: boolean
│          ├ type LogDeliveryConfiguration
│          │ ├      documentation: The log delivery configuration of the resource at the time of backup.
│          │ │      name: LogDeliveryConfiguration
│          │ └ properties
│          │    └ S3Configuration: S3Configuration (required)
│          ├ type MaintenanceSchedule
│          │ ├      documentation: The maintenance schedule of the resource at the time of backup.
│          │ │      name: MaintenanceSchedule
│          │ └ properties
│          │    ├ Timezone: string (required)
│          │    └ PreferredMaintenanceWindow: string (required)
│          └ type S3Configuration
│            ├      documentation: Configuration for S3 bucket log delivery.
│            │      name: S3Configuration
│            └ properties
│               ├ BucketName: string (required)
│               └ Enabled: boolean (required)
├[~] service aws-transfer
│ └ resources
│    └[~]  resource AWS::Transfer::Server
│       └ properties
│          └[+] CreateWithHostKey: boolean
└[~] service aws-workspaces
  └ resources
     └[~]  resource AWS::WorkSpaces::Directory
        └      - arnTemplate: undefined
               + arnTemplate: arn:${Partition}:workspaces:${Region}:${Account}:directory/${DirectoryId}
```

Updates the L1 CloudFormation resource definitions with the latest changes from `@aws-cdk/aws-service-spec`

**L1 CloudFormation resource definition changes:**
```
├[~] service aws-arcregionswitch
│ └ resources
│    └[~]  resource AWS::ARCRegionSwitch::Plan
│       └      - arnTemplate: arn:${Partition}:arc-region-switch::${Account}:plan/${ResourceId}
│              + arnTemplate: arn:${Partition}:arc-region-switch:${Region}:${Account}:plan/${ResourceId}
├[~] service aws-bedrockagentcore
│ └ resources
│    ├[~]  resource AWS::BedrockAgentCore::CapacityProvider
│    │  └ types
│    │     └[~] type LaunchParameters
│    │       └ properties
│    │          └ OperatingSystem: - string<LINUX_X86_64|LINUX_ARM64|MAC_ARM64|WINDOWS_X86_64> (required)
│    │                             + string<LINUX_X86_64|LINUX_ARM64> (required)
│    └[~]  resource AWS::BedrockAgentCore::Gateway
│       ├ properties
│       │  └[+] WafConfiguration: WafConfiguration
│       ├ attributes
│       │  └[+] WebAclArn: string
│       └ types
│          └[+]  type WafConfiguration
│             ├      name: WafConfiguration
│             └ properties
│                └ FailureMode: string<FAIL_CLOSE|FAIL_OPEN>
├[~] service aws-codebuild
│ └ resources
│    └[~]  resource AWS::CodeBuild::ReportGroup
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["Arn"]
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
├[~] service aws-config
│ └ resources
│    └[~]  resource AWS::Config::DeliveryChannel
│       └ types
│          └[~] type ConfigSnapshotDeliveryProperties
│            └ properties
│               └ DeliveryFrequency: - string<One_Hour|Three_Hours|Six_Hours|Twelve_Hours|TwentyFour_Hours>
│                                    + string
├[~] service aws-devicefarm
│ └ resources
│    └[~]  resource AWS::DeviceFarm::Project
│       └      - arnTemplate: arn:${Partition}:devicefarm:${Region}:${Account}:project:${ProjectId}
│              + arnTemplate: arn:${Partition}:devicefarm:${Region}:${Account}:project:${ResourceId}
├[~] service aws-directoryservice
│ └ resources
│    └[~]  resource AWS::DirectoryService::MicrosoftAD
│       └      - arnTemplate: arn:${Partition}:ds:${Region}:${Account}:${DirectoryId}
│              + arnTemplate: arn:${Partition}:ds:${Region}:${Account}:directory/${DirectoryId}
├[~] service aws-dlm
│ └ resources
│    └[~]  resource AWS::DLM::LifecyclePolicy
│       └      - arnTemplate: arn:${Partition}:dlm:${Region}:${Account}:policy/${PolicyId}
│              + arnTemplate: arn:${Partition}:dlm:${Region}:${Account}:policy/${ResourceName}
├[~] service aws-dms
│ └ resources
│    └[~]  resource AWS::DMS::ReplicationTask
│       ├ properties
│       │  └ MigrationType: - string (required)
│       │                   + string<full-load|cdc|full-load-and-cdc> (required, immutable)
│       └ attributes
│          └[+] ReplicationTaskArn: string
├[~] service aws-ec2
│ └ resources
│    ├[~]  resource AWS::EC2::EC2Fleet
│    │  └ types
│    │     ├[+]  type CapacityReservationTargetRequest
│    │     │  ├      name: CapacityReservationTargetRequest
│    │     │  └ properties
│    │     │     ├ CapacityReservationIds: Array<string>
│    │     │     └ CapacityReservationResourceGroupArns: Array<string>
│    │     ├[+]  type ReservedCapacityFallbackOptionsRequest
│    │     │  ├      name: ReservedCapacityFallbackOptionsRequest
│    │     │  └ properties
│    │     │     └ MarketTypes: Array<string<on-demand>>
│    │     └[~] type ReservedCapacityOptionsRequest
│    │       └ properties
│    │          ├[+] AllocationStrategy: string<prioritized>
│    │          ├[+] CapacityReservationTarget: CapacityReservationTargetRequest
│    │          ├ ReservationTypes: - Array<string<interruptible-capacity-reservation>>
│    │          │                   + Array<string<on-demand-capacity-reservation|capacity-block|interruptible-capacity-reservation>>
│    │          └[+] ReservedCapacityFallbackOptions: ReservedCapacityFallbackOptionsRequest
│    ├[+]  resource AWS::EC2::FpgaImage
│    │  ├      name: FpgaImage
│    │  │      cloudFormationType: AWS::EC2::FpgaImage
│    │  │      documentation: Creates and manages an Amazon FPGA Image (AFI) from a design checkpoint (DCP).
│    │  │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│    │  │      arnTemplate: arn:${Partition}:ec2:${Region}:${Account}:fpga-image/${FpgaImageId}
│    │  │      primaryIdentifier: ["Arn"]
│    │  ├ properties
│    │  │  ├ Name: string
│    │  │  ├ Description: string
│    │  │  ├ InputStorageLocation: StorageLocation (immutable)
│    │  │  ├ LogsStorageLocation: StorageLocation (immutable)
│    │  │  └ Tags: Array<tag>
│    │  ├ attributes
│    │  │  ├ Arn: string
│    │  │  ├ FpgaImageId: string
│    │  │  ├ FpgaImageGlobalId: string
│    │  │  ├ State: string
│    │  │  ├ OwnerId: string
│    │  │  ├ CreateTime: string
│    │  │  ├ UpdateTime: string
│    │  │  ├ DataRetentionSupport: boolean
│    │  │  └ Public: boolean
│    │  └ types
│    │     └ type StorageLocation
│    │       ├      documentation: Describes a storage location in Amazon S3.
│    │       │      name: StorageLocation
│    │       └ properties
│    │          ├ Bucket: string
│    │          └ Key: string
│    └[+]  resource AWS::EC2::IpamExternalResourceVerificationToken
│       ├      name: IpamExternalResourceVerificationToken
│       │      cloudFormationType: AWS::EC2::IpamExternalResourceVerificationToken
│       │      documentation: A verification token is an AWS-generated random value that you can use to prove ownership of an external resource. For example, you can use a verification token to validate that you control a public IP address range when you bring an IP address range to AWS (BYOIP).
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:ec2::${Account}:ipam-external-resource-verification-token/${IpamExternalResourceVerificationTokenId}
│       │      primaryIdentifier: ["IpamExternalResourceVerificationTokenArn"]
│       ├ properties
│       │  ├ IpamId: string (required, immutable)
│       │  └ Tags: Array<tag>
│       └ attributes
│          ├ IpamExternalResourceVerificationTokenArn: string
│          ├ IpamExternalResourceVerificationTokenId: string
│          ├ IpamArn: string
│          ├ IpamRegion: string
│          ├ TokenValue: string
│          ├ TokenName: string
│          ├ NotAfter: string
│          ├ Status: string<valid|expired>
│          └ State: string<create-in-progress|create-complete|create-failed|delete-in-progress|delete-complete|delete-failed>
├[~] service aws-eks
│ └ resources
│    └[~]  resource AWS::EKS::Cluster
│       └ types
│          ├[~] type KubeControllerManagerConfig
│          │ └ properties
│          │    └[+] PodGcControllerConfig: PodGcControllerConfig
│          └[+]  type PodGcControllerConfig
│             ├      documentation: The pod garbage collector controller configuration.
│             │      name: PodGcControllerConfig
│             └ properties
│                └ TerminatedPodGcThreshold: integer
├[~] service aws-elementalinference
│ └ resources
│    └[~]  resource AWS::ElementalInference::Feed
│       ├ properties
│       │  └[+] AccessRoleArn: string
│       └ types
│          ├[+]  type CroppingConfig
│          │  ├      name: CroppingConfig
│          │  └ properties
│          │     └ TemplateGroups: Array<TemplateGroup>
│          ├[~] type OutputConfig
│          │ └ properties
│          │    └ Cropping: - json
│          │                + CroppingConfig
│          └[+]  type TemplateGroup
│             ├      name: TemplateGroup
│             └ properties
│                ├ Name: string (required)
│                └ TemplateUris: Array<string> (required)
├[~] service aws-events
│ └ resources
│    └[~]  resource AWS::Events::Rule
│       └ attributes
│          └[+] RuleName: string
├[~] service aws-gamelift
│ └ resources
│    └[~]  resource AWS::GameLift::Fleet
│       └ types
│          └[~] type ScalingPolicy
│            └ properties
│               ├ MetricName: - string<ActivatingGameSessions|ActiveGameSessions|ActiveInstances|AvailableGameSessions|AvailablePlayerSessions|CurrentPlayerSessions|IdleInstances|PercentAvailableGameSessions|PercentIdleInstances|QueueDepth|WaitTime|ConcurrentActivatableGameSessions> (required)
│               │             + string<ActivatingGameSessions|ActiveGameSessions|ActiveInstances|AvailableGameSessions|AvailablePlayerSessions|CurrentPlayerSessions|IdleInstances|PercentAvailableGameSessions|PercentIdleInstances|QueueDepth|WaitTime|ConcurrentActivatableGameSessions>
│               └ PolicyType: - string<RuleBased|TargetBased>
│                             + string<RuleBased|TargetBased|ManagedScaling>
├[~] service aws-glue
│ └ resources
│    └[~]  resource AWS::Glue::Connection
│       ├      - tagInformation: undefined
│       │      + tagInformation: {"tagPropertyName":"Tags","variant":"map"}
│       │      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["CatalogId","Name"]
│       ├ properties
│       │  └[+] Tags: json
│       ├ attributes
│       │  ├[-] Id: string
│       │  └[+] Name: string
│       └ types
│          ├[+]  type AuthenticationConfiguration
│          │  ├      name: AuthenticationConfiguration
│          │  └ properties
│          │     ├ AuthenticationType: string (required)
│          │     ├ BasicAuthenticationCredentials: BasicAuthenticationCredentials
│          │     ├ CustomAuthenticationCredentials: json
│          │     ├ KmsKeyArn: string
│          │     ├ OAuth2Properties: OAuth2Properties
│          │     └ SecretArn: string
│          ├[-]  type AuthenticationConfigurationInput
│          │  ├      documentation: A structure containing the authentication configuration in the CreateConnection request.
│          │  │      name: AuthenticationConfigurationInput
│          │  └ properties
│          │     ├ SecretArn: string
│          │     ├ KmsKeyArn: string
│          │     ├ OAuth2Properties: OAuth2PropertiesInput
│          │     ├ CustomAuthenticationCredentials: json
│          │     ├ BasicAuthenticationCredentials: BasicAuthenticationCredentials
│          │     └ AuthenticationType: string (required)
│          ├[~] type ConnectionInput
│          │ └ properties
│          │    └ AuthenticationConfiguration: - AuthenticationConfigurationInput
│          │                                   + AuthenticationConfiguration
│          ├[+]  type OAuth2Properties
│          │  ├      documentation: A structure containing the authentication credentials in the CreateConnection request.
│          │  │      name: OAuth2Properties
│          │  └ properties
│          │     ├ AuthorizationCodeProperties: AuthorizationCodeProperties
│          │     ├ OAuth2ClientApplication: OAuth2ClientApplication
│          │     ├ OAuth2Credentials: OAuth2Credentials
│          │     ├ OAuth2GrantType: string
│          │     ├ TokenUrl: string
│          │     └ TokenUrlParametersMap: json
│          └[-]  type OAuth2PropertiesInput
│             ├      documentation: A structure containing properties for OAuth2 in the CreateConnection request.
│             │      name: OAuth2PropertiesInput
│             └ properties
│                ├ AuthorizationCodeProperties: AuthorizationCodeProperties
│                ├ OAuth2ClientApplication: OAuth2ClientApplication
│                ├ TokenUrl: string
│                ├ OAuth2Credentials: OAuth2Credentials
│                ├ OAuth2GrantType: string
│                └ TokenUrlParametersMap: json
├[~] service aws-guardduty
│ └ resources
│    └[~]  resource AWS::GuardDuty::Filter
│       └ types
│          └[~] type Condition
│            └ properties
│               ├[+] Matches: Array<string>
│               └[+] NotMatches: Array<string>
├[~] service aws-identitystore
│ └ resources
│    └[+]  resource AWS::IdentityStore::User
│       ├      name: User
│       │      cloudFormationType: AWS::IdentityStore::User
│       │      documentation: Creates a user within the specified identity store.
│       │      arnTemplate: arn:${Partition}:identitystore:::user/${UserId}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ IdentityStoreId: string (required, immutable)
│       │  ├ UserName: string (immutable)
│       │  ├ Name: Name
│       │  ├ DisplayName: string
│       │  ├ NickName: string
│       │  ├ ProfileUrl: string
│       │  ├ Emails: Array<EmailsItems> (immutable)
│       │  ├ Addresses: Array<AddressesItems> (immutable)
│       │  ├ PhoneNumbers: Array<PhoneNumbersItems> (immutable)
│       │  ├ UserType: string
│       │  ├ Title: string
│       │  ├ PreferredLanguage: string
│       │  ├ Locale: string
│       │  ├ Timezone: string
│       │  ├ Photos: Array<PhotosItems> (immutable)
│       │  ├ Website: string
│       │  ├ Birthdate: string
│       │  └ Roles: Array<RolesItems> (immutable)
│       ├ attributes
│       │  ├ Arn: string
│       │  ├ UserId: string
│       │  ├ UserStatus: string<ENABLED|DISABLED>
│       │  ├ CreatedAt: string
│       │  ├ CreatedBy: string
│       │  ├ UpdatedAt: string
│       │  └ UpdatedBy: string
│       └ types
│          ├ type AddressesItems
│          │ ├      name: AddressesItems
│          │ └ properties
│          │    ├ StreetAddress: string
│          │    ├ Locality: string
│          │    ├ Region: string
│          │    ├ PostalCode: string
│          │    ├ Country: string
│          │    ├ Formatted: string
│          │    ├ Type: string
│          │    └ Primary: boolean
│          ├ type EmailsItems
│          │ ├      name: EmailsItems
│          │ └ properties
│          │    ├ Value: string
│          │    ├ Type: string
│          │    └ Primary: boolean
│          ├ type Name
│          │ ├      documentation: The name of the user.
│          │ │      name: Name
│          │ └ properties
│          │    ├ Formatted: string
│          │    ├ FamilyName: string
│          │    ├ GivenName: string
│          │    ├ MiddleName: string
│          │    ├ HonorificPrefix: string
│          │    └ HonorificSuffix: string
│          ├ type PhoneNumbersItems
│          │ ├      name: PhoneNumbersItems
│          │ └ properties
│          │    ├ Value: string
│          │    ├ Type: string
│          │    └ Primary: boolean
│          ├ type PhotosItems
│          │ ├      name: PhotosItems
│          │ └ properties
│          │    ├ Value: string (required)
│          │    ├ Type: string
│          │    ├ Display: string
│          │    └ Primary: boolean
│          └ type RolesItems
│            ├      name: RolesItems
│            └ properties
│               ├ Value: string
│               ├ Type: string
│               └ Primary: boolean
├[~] service aws-invoicing
│ └ resources
│    └[+]  resource AWS::Invoicing::ProcurementPortalPreference
│       ├      name: ProcurementPortalPreference
│       │      cloudFormationType: AWS::Invoicing::ProcurementPortalPreference
│       │      documentation: Creates and manages a procurement portal preference configuration for e-invoice delivery and purchase order retrieval.
│       │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│       │      arnTemplate: arn:${Partition}:invoicing::${Account}:procurement-portal-preference/${Identifier}
│       │      primaryIdentifier: ["ProcurementPortalPreferenceArn"]
│       ├ properties
│       │  ├ ProcurementPortalName: string<SAP_BUSINESS_NETWORK|COUPA> (required, immutable)
│       │  ├ BuyerDomain: string<NetworkID> (required, immutable)
│       │  ├ BuyerIdentifier: string (required, immutable)
│       │  ├ SupplierDomain: string<NetworkID> (required, immutable)
│       │  ├ SupplierIdentifier: string (required, immutable)
│       │  ├ Selector: ProcurementPortalPreferenceSelector
│       │  ├ ProcurementPortalSharedSecret: string
│       │  ├ ProcurementPortalInstanceEndpoint: string
│       │  ├ TestEnvPreference: TestEnvPreference
│       │  ├ EinvoiceDeliveryEnabled: boolean (required)
│       │  ├ EinvoiceDeliveryPreference: EinvoiceDeliveryPreference
│       │  ├ PurchaseOrderRetrievalEnabled: boolean (required)
│       │  ├ Contacts: Array<Contact> (required)
│       │  └ Tags: Array<tag>
│       ├ attributes
│       │  ├ ProcurementPortalPreferenceArn: string
│       │  ├ AwsAccountId: string
│       │  ├ CreateDate: string
│       │  ├ LastUpdateDate: string
│       │  ├ Version: integer
│       │  ├ EinvoiceDeliveryPreferenceStatus: string<PENDING_VERIFICATION|TEST_INITIALIZED|TEST_INITIALIZATION_FAILED|TEST_FAILED|ACTIVE|SUSPENDED>
│       │  ├ PurchaseOrderRetrievalPreferenceStatus: string<PENDING_VERIFICATION|TEST_INITIALIZED|TEST_INITIALIZATION_FAILED|TEST_FAILED|ACTIVE|SUSPENDED>
│       │  └ PurchaseOrderRetrievalEndpoint: string
│       └ types
│          ├ type Contact
│          │ ├      documentation: Contact information for a person or role associated with the procurement portal preference.
│          │ │      name: Contact
│          │ └ properties
│          │    ├ Name: string
│          │    └ Email: string
│          ├ type EinvoiceDeliveryPreference
│          │ ├      documentation: Specifies the preferences for e-invoice delivery.
│          │ │      name: EinvoiceDeliveryPreference
│          │ └ properties
│          │    ├ EinvoiceDeliveryDocumentTypes: Array<string<AWS_CLOUD_INVOICE|AWS_CLOUD_CREDIT_MEMO|AWS_MARKETPLACE_INVOICE|AWS_MARKETPLACE_CREDIT_MEMO|AWS_REQUEST_FOR_PAYMENT>>
│          │    ├ EinvoiceDeliveryAttachmentTypes: Array<string<INVOICE_PDF|RFP_PDF>>
│          │    ├ Protocol: string<CXML>
│          │    ├ PurchaseOrderDataSources: Array<PurchaseOrderDataSource>
│          │    ├ ConnectionTestingMethod: string<PROD_ENV_DOLLAR_TEST|TEST_ENV_REPLAY_TEST>
│          │    └ EinvoiceDeliveryActivationDate: string
│          ├ type ProcurementPortalPreferenceSelector
│          │ ├      documentation: Specifies criteria for selecting which invoices should be processed.
│          │ │      name: ProcurementPortalPreferenceSelector
│          │ └ properties
│          │    └ InvoiceUnitArns: Array<string>
│          ├ type PurchaseOrderDataSource
│          │ ├      documentation: Specifies the source configuration for retrieving purchase order data.
│          │ │      name: PurchaseOrderDataSource
│          │ └ properties
│          │    ├ EinvoiceDeliveryDocumentType: string<AWS_CLOUD_INVOICE|AWS_CLOUD_CREDIT_MEMO|AWS_MARKETPLACE_INVOICE|AWS_MARKETPLACE_CREDIT_MEMO|AWS_REQUEST_FOR_PAYMENT>
│          │    └ PurchaseOrderDataSourceType: string<ASSOCIATED_PURCHASE_ORDER_REQUIRED|PURCHASE_ORDER_NOT_REQUIRED>
│          └ type TestEnvPreference
│            ├      documentation: Configuration settings for the test environment of the procurement portal.
│            │      name: TestEnvPreference
│            └ properties
│               ├ BuyerDomain: string<NetworkID>
│               ├ BuyerIdentifier: string
│               ├ SupplierDomain: string<NetworkID>
│               ├ SupplierIdentifier: string
│               ├ ProcurementPortalSharedSecret: string
│               └ ProcurementPortalInstanceEndpoint: string
├[~] service aws-iotwireless
│ └ resources
│    └[~]  resource AWS::IoTWireless::PartnerAccount
│       └      - arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:SidewalkAccount/${SidewalkAccountId}
│              + arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:SidewalkAccount/${AmazonId}
├[~] service aws-lambda
│ └ resources
│    ├[~]  resource AWS::Lambda::Function
│    │  └ types
│    │     ├[~] type FileSystemConfig
│    │     │ └ properties
│    │     │    └[+] S3FilesConfig: S3FilesConfig
│    │     └[+]  type S3FilesConfig
│    │        ├      name: S3FilesConfig
│    │        └ properties
│    │           └ DirectS3Read: string<ENABLED|DISABLED|AUTO>
│    └[~]  resource AWS::Lambda::ResourcePolicy
│       ├      - documentation: Resource Type definition for AWS::Lambda::ResourcePolicy
│       │      + documentation: Use the ``AWS::Lambda::ResourcePolicy`` resource to attach a resource-based policy to a LAM resource. A resource-based policy applies to a single LAM resource, for example, a function, function version, or function alias. To learn more about using resource-based policies with LAM, see [Working with resource-based policies in](https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html) in the *Developer Guide*.
│       │       You can use resource-based policies to grant permissions to other AWS services, AWS accounts and organizations, and IAM users and roles to access your LAM resource. You can also deny access to specific entities, and use the full range of IAM global condition keys to further restrict who has access to your LAM resource. For example, you can limit access to calls originating from a specified IP address or VPC.
│       │       A resource-based policy is a JSON document containing a number of statements. Each statement defines the entities you want to grant permission to, the API actions you want to allow or deny, and the LAM resource you want the statement to apply to. A statement can also optionally include an array of logical conditions using the IAM global condition keys.
│       │       To use the ``AWS::Lambda::ResourcePolicy`` resource, make sure that you have the [resource-based policy permissions for Lambda](https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#access-control-resource-based-permissions).
│       │       To learn more about creating resource-based policies, see [Policies and permissions in](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html) in the *User Guide*. For more information about example policies for providing permissions to AWS services, other AWS accounts, and IAM users and roles, see [Example resource-based policies for functions](https://docs.aws.amazon.com/lambda/latest/dg/permissions-function-examples.html) in the *Developer Guide*.
│       │        **Avoid mixing permission resource types**
│       │       To grant permissions to access your function, we recommend using the ``AWS::Lambda::ResourcePolicy`` resource to set access permissions. With this resource, you have more flexibility and fine-grained control than ``AWS::Lambda::Permission``. This resource grants an AWS service or another account permission to call a particular API action on a function.
│       │       You can also use the ``AWS::Lambda::Permission`` resource, however using both ``AWS::Lambda::Permission`` and ``AWS::Lambda::ResourcePolicy`` to set permissions on a function can result in errors. Permissions defined in ``AWS::Lambda::Permission`` can be unintentionally overwritten, whether in a single CFN stack or across multiple stacks. Don't use both resource types to set permissions on a function.
│       │       To migrate existing permissions for a function from ``AWS::Lambda::Permission`` to ``AWS::Lambda::ResourcePolicy``, do the following:
│       │        1.  Set a ``Retain``[deletion policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html) on the ``AWS::Lambda::Permission`` resources you want to migrate. This is necessary so that Lambda does not delete statements with the same statement ID when you delete these resources.
│       │        1.  Use the [GetResourcePolicy](https://docs.aws.amazon.com/lambda/latest/api/API_GetResourcePolicy.html)LAM API to retrieve the resource-based policy currently attached to the function.
│       │        1.  Use this policy to create a new ``AWS::Lambda::ResourcePolicy`` resource.
│       │        1.  Delete all the existing ``AWS::Lambda::Permission`` resources for the function.
│       └ properties
│          ├ PolicyDocument: (documentation changed)
│          └ ResourceArn: (documentation changed)
├[~] service aws-lightsail
│ └ resources
│    └[+]  resource AWS::Lightsail::ContactMethod
│       ├      name: ContactMethod
│       │      cloudFormationType: AWS::Lightsail::ContactMethod
│       │      documentation: Resource Type definition for AWS::Lightsail::ContactMethod
│       │      arnTemplate: arn:${Partition}:lightsail:${Region}:${Account}:ContactMethod/${Id}
│       │      primaryIdentifier: ["Arn"]
│       ├ properties
│       │  ├ Protocol: string<Email|SMS> (required, immutable)
│       │  └ ContactEndpoint: string (required, immutable)
│       └ attributes
│          ├ Arn: string
│          ├ Status: string<PendingVerification|Valid|Invalid>
│          ├ Name: string
│          ├ CreatedAt: string
│          ├ SupportCode: string
│          └ ResourceType: string
├[~] service aws-location
│ └ resources
│    └[~]  resource AWS::Location::GeofenceCollection
│       └      - arnTemplate: arn:${Partition}:geo:${Region}:${Account}:geofence-collection/${CollectionName}
│              + arnTemplate: arn:${Partition}:geo:${Region}:${Account}:geofence-collection/${GeofenceCollectionName}
├[~] service aws-medialive
│ └ resources
│    └[~]  resource AWS::MediaLive::Channel
│       └ types
│          ├[+]  type NielsenNwOnly
│          │  ├      name: NielsenNwOnly
│          │  └ properties
│          │     ├ Timezone: string
│          │     ├ CheckDigitString: string
│          │     └ Sid: number
│          ├[~] type NielsenWatermarksSettings
│          │ └ properties
│          │    └[+] NielsenNwOnlySettings: NielsenNwOnly
│          └[~] type OutputDestinationSettings
│            └ properties
│               └[+] VirtualSourceAddress: string
├[~] service aws-mediatailor
│ └ resources
│    └[~]  resource AWS::MediaTailor::SourceLocation
│       └      - arnTemplate: arn:${Partition}:mediatailor:${Region}:${Account}:sourceLocation/${SourceLocationName}
│              + arnTemplate: arn:${Partition}:mediatailor:${Region}:${Account}:sourceLocation/${ResourceId}
├[~] service aws-networkmanager
│ └ resources
│    ├[~]  resource AWS::NetworkManager::ConnectAttachment
│    │  └ attributes
│    │     ├[+] ProposedNetworkFunctionGroupChange: ProposedNetworkFunctionGroupChange
│    │     └[+] ProposedSegmentChange: ProposedSegmentChange
│    ├[~]  resource AWS::NetworkManager::DirectConnectGatewayAttachment
│    │  └ attributes
│    │     ├[+] ProposedNetworkFunctionGroupChange: ProposedNetworkFunctionGroupChange
│    │     └[+] ProposedSegmentChange: ProposedSegmentChange
│    ├[~]  resource AWS::NetworkManager::SiteToSiteVpnAttachment
│    │  └ attributes
│    │     ├[+] ProposedNetworkFunctionGroupChange: ProposedNetworkFunctionGroupChange
│    │     └[+] ProposedSegmentChange: ProposedSegmentChange
│    ├[~]  resource AWS::NetworkManager::TransitGatewayRouteTableAttachment
│    │  └ attributes
│    │     ├[+] ProposedNetworkFunctionGroupChange: ProposedNetworkFunctionGroupChange
│    │     └[+] ProposedSegmentChange: ProposedSegmentChange
│    └[~]  resource AWS::NetworkManager::VpcAttachment
│       └ attributes
│          ├[+] ProposedNetworkFunctionGroupChange: ProposedNetworkFunctionGroupChange
│          └[+] ProposedSegmentChange: ProposedSegmentChange
├[~] service aws-pinpoint
│ └ resources
│    ├[~]  resource AWS::Pinpoint::EmailTemplate
│    │  └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/EMAIL
│    │         + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/SMS
│    ├[~]  resource AWS::Pinpoint::InAppTemplate
│    │  └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/EMAIL
│    │         + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/SMS
│    └[~]  resource AWS::Pinpoint::PushTemplate
│       └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/PUSH
│              + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/SMS
├[~] service aws-ram
│ └ resources
│    └[~]  resource AWS::RAM::Permission
│       └      - arnTemplate: arn:${Partition}:ram:${Region}:${Account}:permission/${ResourcePath}
│              + arnTemplate: arn:${Partition}:ram::${Account}:permission/${ResourcePath}
├[~] service aws-rds
│ └ resources
│    ├[~]  resource AWS::RDS::DBInstance
│    │  └      - arnTemplate: arn:${Partition}:rds:${Region}:${Account}:db:${DbInstanceName}
│    │         + arnTemplate: arn:${Partition}:rds:${Region}:${Account}:db:${DBInstanceId}
│    └[~]  resource AWS::RDS::DBParameterGroup
│       └      - arnTemplate: arn:${Partition}:rds:${Region}:${Account}:pg:${ParameterGroupName}
│              + arnTemplate: arn:${Partition}:rds:${Region}:${Account}:pg:${DBParameterGroupName}
├[~] service aws-route53
│ └ resources
│    └[~]  resource AWS::Route53::RecordSet
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["Name","HostedZoneId","Type","SetIdentifier"]
│       ├ properties
│       │  └[-] GeoProximityLocation: GeoProximityLocation
│       ├ attributes
│       │  └[-] Id: string
│       └ types
│          ├[-]  type Coordinates
│          │  ├      documentation: A complex type that lists the coordinates for a geoproximity resource record.
│          │  │      name: Coordinates
│          │  └ properties
│          │     ├ Longitude: string (required)
│          │     └ Latitude: string (required)
│          └[-]  type GeoProximityLocation
│             ├      documentation: (Resource record sets only): A complex type that lets you specify where your resources are located. Only one of `LocalZoneGroup` , `Coordinates` , or `AWS Region` is allowed per request at a time.
│             │      For more information about geoproximity routing, see [Geoproximity routing](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geoproximity.html) in the *Amazon Route 53 Developer Guide* .
│             │      name: GeoProximityLocation
│             └ properties
│                ├ AWSRegion: string
│                ├ LocalZoneGroup: string
│                ├ Bias: integer
│                └ Coordinates: Coordinates
├[~] service aws-sagemaker
│ └ resources
│    ├[~]  resource AWS::SageMaker::EndpointConfig
│    │  ├      - primaryIdentifier: ["Id"]
│    │  │      + primaryIdentifier: ["EndpointConfigArn"]
│    │  ├ properties
│    │  │  ├ EnableNetworkIsolation: (documentation changed)
│    │  │  ├ ExecutionRoleArn: (documentation changed)
│    │  │  ├ MetricsConfig: (documentation changed)
│    │  │  └ VpcConfig: (documentation changed)
│    │  ├ attributes
│    │  │  └[+] EndpointConfigArn: string
│    │  └ types
│    │     ├[~] type CapacityReservationConfig
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: Settings for the capacity reservation for the compute instances that SageMaker AI reserves for an endpoint.
│    │     │ └ properties
│    │     │    ├ CapacityReservationPreference: (documentation changed)
│    │     │    └ MlReservationArn: (documentation changed)
│    │     ├[~] type CoreDumpConfig
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: Specifies where SageMaker writes core dumps from the model container when the process crashes, and how it encrypts them.
│    │     │ └ properties
│    │     │    ├ DestinationS3Uri: (documentation changed)
│    │     │    └ KmsKeyId: (documentation changed)
│    │     ├[+]  type InstancePool
│    │     │  ├      documentation: Specifies an instance type and its priority for a heterogeneous endpoint. Use instance pools to configure a production variant with multiple instance types, enabling the endpoint to provision instances across different types based on priority.
│    │     │  │      name: InstancePool
│    │     │  └ properties
│    │     │     ├ ModelNameOverride: string
│    │     │     ├ Priority: integer (required)
│    │     │     └ InstanceType: string (required)
│    │     ├[~] type ManagedInstanceScaling
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: Settings that control the range in the number of instances that the endpoint provisions as it scales up or down to accommodate traffic.
│    │     │ └ properties
│    │     │    ├ MaxInstanceCount: (documentation changed)
│    │     │    ├ MinInstanceCount: (documentation changed)
│    │     │    ├ ScaleInPolicy: (documentation changed)
│    │     │    └ Status: (documentation changed)
│    │     ├[~] type MetricsConfig
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: Specifies the metrics that the endpoint publishes to Amazon CloudWatch, the frequency of publication, and whether to enable enhanced or detailed observability metrics.
│    │     │ └ properties
│    │     │    ├ EnableDetailedObservability: (documentation changed)
│    │     │    ├ EnableEnhancedMetrics: (documentation changed)
│    │     │    └ MetricPublishFrequencyInSeconds: - integer
│    │     │                                       + integer<10|30|60|120|180|240|300>
│    │     │                                       (documentation changed)
│    │     ├[~] type PrefixAwareRoutingConfig
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: The configuration for prefix-aware routing on a SageMaker real-time inference endpoint. Specify PrefixLength and ConcurrencyThreshold to control routing behavior.
│    │     │ └ properties
│    │     │    ├ ConcurrencyThreshold: (documentation changed)
│    │     │    └ PrefixLength: (documentation changed)
│    │     ├[~] type ProductionVariant
│    │     │ └ properties
│    │     │    ├ CapacityReservationConfig: (documentation changed)
│    │     │    ├ CoreDumpConfig: (documentation changed)
│    │     │    ├ InferenceAmiVersion: (documentation changed)
│    │     │    ├ InstancePools: - Array<InstancePools>
│    │     │    │                + Array<InstancePools> ⇐ Array<InstancePool>
│    │     │    │                (documentation changed)
│    │     │    ├ ManagedInstanceScaling: (documentation changed)
│    │     │    ├ RoutingConfig: (documentation changed)
│    │     │    └ VariantInstanceProvisionTimeoutInSeconds: (documentation changed)
│    │     ├[~] type RoutingConfig
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: Settings that control how the endpoint routes incoming traffic to the instances that the endpoint hosts.
│    │     │ └ properties
│    │     │    ├ PrefixAwareRoutingConfig: (documentation changed)
│    │     │    └ RoutingStrategy: (documentation changed)
│    │     ├[~] type ScaleInPolicy
│    │     │ ├      - documentation: undefined
│    │     │ │      + documentation: Specifies how the endpoint releases instances when managed instance scaling scales in.
│    │     │ └ properties
│    │     │    ├ CooldownInMinutes: (documentation changed)
│    │     │    ├ MaximumStepSize: (documentation changed)
│    │     │    └ Strategy: (documentation changed)
│    │     └[~] type VpcConfig
│    │       ├      - documentation: undefined
│    │       │      + documentation: Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC.
│    │       └ properties
│    │          ├ SecurityGroupIds: (documentation changed)
│    │          └ Subnets: (documentation changed)
│    └[~]  resource AWS::SageMaker::InferenceComponent
│       ├ properties
│       │  ├ Specification: - InferenceComponentSpecification (required)
│       │  │                + InferenceComponentSpecification
│       │  │                (documentation changed)
│       │  └[+] Specifications: Array<InferenceComponentSpecificationForInstanceType>
│       ├ attributes
│       │  ├[+] RuntimeConfig.PlacementStatus: Array<InferenceComponentPlacementStatus>
│       │  └[+] Specification.CurrentDataCacheConfig: InferenceComponentDataCacheConfig
│       └ types
│          ├[+]  type ContainerMetricsConfig
│          │  ├      documentation: The configuration for container metrics scraping
│          │  │      name: ContainerMetricsConfig
│          │  └ properties
│          │     └ MetricsEndpoints: Array<MetricsEndpoint> (required)
│          ├[+]  type InferenceComponentAvailabilityZoneBalance
│          │  ├      documentation: Configuration for balancing inference component copies across Availability Zones
│          │  │      name: InferenceComponentAvailabilityZoneBalance
│          │  └ properties
│          │     ├ EnforcementMode: string<PERMISSIVE> (required)
│          │     └ MaxImbalance: integer
│          ├[~] type InferenceComponentContainerSpecification
│          │ └ properties
│          │    └[+] ContainerMetricsConfig: ContainerMetricsConfig
│          ├[+]  type InferenceComponentContainerSpecificationForInstanceType
│          │  ├      documentation: Container specification for one Specifications entry. Distinct from InferenceComponentContainerSpecification: DescribeInferenceComponent returns no per-entry DeployedImage (VERIFIED in us-west-2), so DeployedImage is intentionally omitted here and this definition can never be aggregated into a plural READ response. The singular InferenceComponentContainerSpecification keeps DeployedImage - the service DOES return it there.
│          │  │      name: InferenceComponentContainerSpecificationForInstanceType
│          │  └ properties
│          │     ├ Image: string
│          │     ├ ArtifactUrl: string
│          │     ├ Environment: Map<string, string>
│          │     └ ContainerMetricsConfig: ContainerMetricsConfig
│          ├[+]  type InferenceComponentDataCacheConfig
│          │  ├      documentation: Settings that affect how the inference component caches data
│          │  │      name: InferenceComponentDataCacheConfig
│          │  └ properties
│          │     └ EnableCaching: boolean (required)
│          ├[+]  type InferenceComponentPlacementStatus
│          │  ├      documentation: The number of inference component copies currently placed on instances of a given type
│          │  │      name: InferenceComponentPlacementStatus
│          │  └ properties
│          │     ├ InstanceType: string (required)
│          │     └ CurrentCopyCount: integer (required)
│          ├[~] type InferenceComponentRuntimeConfig
│          │ └ properties
│          │    └[+] PlacementStatus: Array<InferenceComponentPlacementStatus>
│          ├[+]  type InferenceComponentSchedulingConfig
│          │  ├      documentation: The scheduling configuration that determines how inference component copies are placed across available instances
│          │  │      name: InferenceComponentSchedulingConfig
│          │  └ properties
│          │     ├ PlacementStrategy: string<SPREAD|BINPACK> (required)
│          │     └ AvailabilityZoneBalance: InferenceComponentAvailabilityZoneBalance (required)
│          ├[~] type InferenceComponentSpecification
│          │ └ properties
│          │    ├[+] CurrentDataCacheConfig: InferenceComponentDataCacheConfig
│          │    ├[+] DataCacheConfig: InferenceComponentDataCacheConfig
│          │    └[+] SchedulingConfig: InferenceComponentSchedulingConfig
│          ├[+]  type InferenceComponentSpecificationForInstanceType
│          │  ├      documentation: A specification for one instance type, for use in Specifications. InstanceType is required here, and is not accepted on the singular Specification. BaseInferenceComponentName is not accepted here either: adapter inference components are supported only on the singular Specification.
│          │  │      name: InferenceComponentSpecificationForInstanceType
│          │  └ properties
│          │     ├ InstanceType: string (required)
│          │     ├ ModelName: string
│          │     ├ Container: InferenceComponentContainerSpecificationForInstanceType
│          │     ├ StartupParameters: InferenceComponentStartupParameters
│          │     ├ ComputeResourceRequirements: InferenceComponentComputeResourceRequirements
│          │     ├ DataCacheConfig: InferenceComponentDataCacheConfig
│          │     ├ CurrentDataCacheConfig: InferenceComponentDataCacheConfig
│          │     └ SchedulingConfig: InferenceComponentSchedulingConfig
│          └[+]  type MetricsEndpoint
│             ├      documentation: A metrics endpoint exposed by the container
│             │      name: MetricsEndpoint
│             └ properties
│                ├ MetricsEndpointPath: string (required)
│                └ MetricPublishFrequencyInSeconds: integer
├[~] service aws-securityagent
│ └ resources
│    └[~]  resource AWS::SecurityAgent::Pentest
│       └ types
│          ├[~] type Assets
│          │ └ properties
│          │    └[+] TrustedCaCertificates: Array<TrustedCaCertificate>
│          ├[+]  type CaCertificateSource
│          │  ├      documentation: Source of a trusted CA certificate. Exactly one member must be set.
│          │  │      name: CaCertificateSource
│          │  └ properties
│          │     ├ InlinePem: string
│          │     ├ ArtifactId: string
│          │     └ S3Location: string
│          └[+]  type TrustedCaCertificate
│             ├      documentation: Trust anchor used when validating a target endpoint's TLS certificate
│             │      name: TrustedCaCertificate
│             └ properties
│                └ Source: CaCertificateSource (required)
├[~] service aws-ssm
│ └ resources
│    └[~]  resource AWS::SSM::Association
│       └ properties
│          └ InstanceId: - string
│                        + string (immutable)
├[+] service aws-supportauthz
│ ├      capitalized: SupportAuthZ
│ │      cloudFormationNamespace: AWS::SupportAuthZ
│ │      name: aws-supportauthz
│ │      shortName: supportauthz
│ └ resources
│    └ resource AWS::SupportAuthZ::SupportPermit
│      ├      name: SupportPermit
│      │      cloudFormationType: AWS::SupportAuthZ::SupportPermit
│      │      documentation: Resource Type definition for AWS::SupportAuthZ::SupportPermit. Represents a support permit that grants AWS support time-bounded access to one or more resources for a set of actions.
│      │      tagInformation: {"tagPropertyName":"Tags","variant":"standard"}
│      │      arnTemplate: arn:${Partition}:supportauthz:${Region}:${Account}:supportpermit/${ResourceId}
│      │      primaryIdentifier: ["Arn"]
│      ├ properties
│      │  ├ Name: string (required, immutable)
│      │  ├ Description: string (immutable)
│      │  ├ Permit: Permit (required, immutable)
│      │  ├ SigningKeyInfo: SigningKeyInfo (required, immutable)
│      │  ├ SupportCaseDisplayId: string (immutable)
│      │  └ Tags: Array<tag>
│      ├ attributes
│      │  ├ Arn: string
│      │  ├ PermitId: string
│      │  ├ Status: string<ACTIVE|INACTIVE|DELETING>
│      │  └ CreatedAt: string
│      └ types
│         ├ type ActionSet
│         │ ├      documentation: The set of actions a support permit grants. Exactly one of AllActions or Actions must be provided.
│         │ │      name: ActionSet
│         │ └ properties
│         │    ├ AllActions: json
│         │    └ Actions: Array<string>
│         ├ type Condition
│         │ ├      documentation: A time-bound condition controlling when the permit is active. Exactly one of AllowAfter or AllowBefore must be provided.
│         │ │      name: Condition
│         │ └ properties
│         │    ├ AllowAfter: string
│         │    └ AllowBefore: string
│         ├ type Permit
│         │ ├      documentation: The grant definition: which actions on which resources, optionally constrained by time conditions.
│         │ │      name: Permit
│         │ └ properties
│         │    ├ Actions: ActionSet (required)
│         │    ├ Resources: ResourceSet (required)
│         │    └ Conditions: Array<Condition>
│         ├ type ResourceSet
│         │ ├      documentation: The set of resources a support permit applies to. Exactly one of AllResourcesInRegion or Resources must be provided.
│         │ │      name: ResourceSet
│         │ └ properties
│         │    ├ AllResourcesInRegion: json
│         │    └ Resources: Array<string>
│         └ type SigningKeyInfo
│           ├      documentation: The signing key used by the permit. Exactly one key type must be provided.
│           │      name: SigningKeyInfo
│           └ properties
│              └ KmsKey: string (required)
└[~] service aws-vpclattice
  └ resources
     └[~]  resource AWS::VpcLattice::ServiceNetworkVpcAssociation
        ├ properties
        │  ├ DnsOptions: - DnsOptions (immutable)
        │  │             + DnsOptions
        │  └ PrivateDnsEnabled: - boolean (immutable)
        │                       + boolean
        └ types
           └[~] type DnsOptions
             └ properties
                ├ PrivateDnsPreference: - string<VERIFIED_DOMAINS_ONLY|ALL_DOMAINS|VERIFIED_DOMAINS_AND_SPECIFIED_DOMAINS|SPECIFIED_DOMAINS_ONLY> (immutable)
                │                       + string<VERIFIED_DOMAINS_ONLY|ALL_DOMAINS|VERIFIED_DOMAINS_AND_SPECIFIED_DOMAINS|SPECIFIED_DOMAINS_ONLY>
                └ PrivateDnsSpecifiedDomains: - Array<string> (immutable)
                                              + Array<string>
```

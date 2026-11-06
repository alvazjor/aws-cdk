Updates the L1 CloudFormation resource definitions with the latest changes from `@aws-cdk/aws-service-spec`

**L1 CloudFormation resource definition changes:**
```
├[~] service aws-agentregistry
│ └ resources
│    └[~]  resource AWS::AgentRegistry::RegistryRecord
│       ├ properties
│       │  └ RecordType: - string<MCP|AGENT|SKILL|CUSTOM> (required, immutable)
│       │                + string<MCP|AGENT|SKILL|CUSTOM|GATEWAY> (required, immutable)
│       ├ attributes
│       │  └[+] CreatedBy: string
│       └ types
│          ├[+]  type AgUiDescriptor
│          │  ├      documentation: The AG-UI (Agent-User Interaction) descriptor, populated for records detected from an AG-UI protocol source. This descriptor is source-only: its content is synchronized from the configured source URL rather than supplied inline.
│          │  │      name: AgUiDescriptor
│          │  └ properties
│          │     └ Source: SourceOnlyDescriptorSource
│          ├[~] type Descriptors
│          │ └ properties
│          │    ├[+] Agui: AgUiDescriptor
│          │    └[+] Http: HttpDescriptor
│          ├[+]  type HttpDescriptor
│          │  ├      documentation: The HTTP descriptor, populated for records detected from an HTTP protocol source. This descriptor is source-only: its content is synchronized from the configured source URL rather than supplied inline.
│          │  │      name: HttpDescriptor
│          │  └ properties
│          │     └ Source: SourceOnlyDescriptorSource
│          ├[+]  type SourceOnlyDescriptorSource
│          │  ├      documentation: Source configuration for a source-only descriptor. Unlike mcpServer/a2aAgentCard sources, source-only descriptors do not support credential providers.
│          │  │      name: SourceOnlyDescriptorSource
│          │  └ properties
│          │     └ FromUrl: SourceOnlyDescriptorSourceFromUrl
│          └[+]  type SourceOnlyDescriptorSourceFromUrl
│             ├      documentation: URL-based source configuration for a source-only descriptor.
│             │      name: SourceOnlyDescriptorSourceFromUrl
│             └ properties
│                └ Url: string (required)
├[~] service aws-codecommit
│ └ resources
│    └[~]  resource AWS::CodeCommit::Repository
│       └ attributes
│          └[-] Id: string
├[~] service aws-config
│ └ resources
│    └[~]  resource AWS::Config::DeliveryChannel
│       └ types
│          └[~] type ConfigSnapshotDeliveryProperties
│            └ properties
│               └ DeliveryFrequency: - string
│                                    + string<One_Hour|Three_Hours|Six_Hours|Twelve_Hours|TwentyFour_Hours>
├[~] service aws-devicefarm
│ └ resources
│    └[~]  resource AWS::DeviceFarm::InstanceProfile
│       └      - arnTemplate: arn:${Partition}:devicefarm:${Region}:${Account}:instanceprofile:${InstanceProfileId}
│              + arnTemplate: arn:${Partition}:devicefarm:${Region}:${Account}:instanceprofile:${ResourceId}
├[~] service aws-directoryservice
│ └ resources
│    └[~]  resource AWS::DirectoryService::MicrosoftAD
│       └      - arnTemplate: arn:${Partition}:ds:${Region}:${Account}:directory/${DirectoryId}
│              + arnTemplate: arn:${Partition}:ds:${Region}:${Account}:${DirectoryId}
├[~] service aws-dlm
│ └ resources
│    └[~]  resource AWS::DLM::LifecyclePolicy
│       ├      - primaryIdentifier: ["Id"]
│       │      + primaryIdentifier: ["PolicyId"]
│       └ types
│          └[~] type Exclusions
│            └ properties
│               └ ExcludeVolumeTypes: - Array<string> ⇐ Array<json>
│                                     + Array<json> ⇐ Array<string>
├[~] service aws-dms
│ └ resources
│    └[~]  resource AWS::DMS::ReplicationTask
│       └ attributes
│          └[-] Id: string
├[~] service aws-ec2
│ └ resources
│    └[~]  resource AWS::EC2::ApplicationStatusCheck
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:ec2:${Region}:${Account}:application-status-check/${ApplicationStatusCheckId}
├[~] service aws-fsx
│ └ resources
│    └[~]  resource AWS::FSx::Volume
│       └ types
│          ├[~] type AggregateConfiguration
│          │ └ properties
│          │    ├ Aggregates: - Array<string> (immutable)
│          │    │             + Array<string>
│          │    └ ConstituentsPerAggregate: - integer (immutable)
│          │                                + integer
│          └[~] type OntapConfiguration
│            └ properties
│               ├ AggregateConfiguration: - AggregateConfiguration (immutable)
│               │                         + AggregateConfiguration
│               └ VolumeStyle: - string (immutable)
│                              + string
├[~] service aws-globalaccelerator
│ └ resources
│    └[~]  resource AWS::GlobalAccelerator::Accelerator
│       └      - arnTemplate: arn:${Partition}:globalaccelerator::${Account}:accelerator/${AcceleratorId}
│              + arnTemplate: arn:${Partition}:globalaccelerator::${Account}:accelerator/${ResourceId}
├[~] service aws-iotsitewise
│ └ resources
│    └[~]  resource AWS::IoTSiteWise::Workspace
│       └      - arnTemplate: undefined
│              + arnTemplate: arn:${Partition}:iotsitewise:${Region}:${Account}:workspace/${WorkspaceName}
├[~] service aws-iotwireless
│ └ resources
│    └[~]  resource AWS::IoTWireless::WirelessDeviceImportTask
│       └      - arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:WirelessDeviceImportTask/${WirelessDeviceImportTaskId}
│              + arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:ImportTask/${ImportTaskId}
├[~] service aws-networkfirewall
│ └ resources
│    └[~]  resource AWS::NetworkFirewall::RuleGroup
│       └      - arnTemplate: arn:${Partition}:network-firewall:${Region}:${Account}:stateless-rulegroup/${Name}
│              + arnTemplate: arn:${Partition}:network-firewall:${Region}:${Account}:stateful-rulegroup/${Name}
├[~] service aws-pinpoint
│ └ resources
│    └[~]  resource AWS::Pinpoint::InAppTemplate
│       └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/VOICE
│              + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/EMAIL
├[~] service aws-pricingplanmanager
│ └ resources
│    └[~]  resource AWS::PricingPlanManager::Subscription
│       └ properties
│          └ PlanTier: (documentation changed)
├[~] service aws-quicksight
│ └ resources
│    └[~]  resource AWS::QuickSight::Folder
│       └      - arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:folder/${ResourceId}
│              + arnTemplate: arn:${Partition}:quicksight:${Region}:${Account}:folder/${FolderId}
└[~] service aws-sagemaker
  └ resources
     └[~]  resource AWS::SageMaker::NotebookInstance
        ├ properties
        │  └ AcceleratorTypes: - Array<string>
        │                      + Array<string> (deprecated=WARN)
        └ attributes
           └[+] NotebookInstanceArn: string
```

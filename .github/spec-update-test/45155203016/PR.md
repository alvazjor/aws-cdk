Updates the L1 CloudFormation resource definitions with the latest changes from `@aws-cdk/aws-service-spec`

**L1 CloudFormation resource definition changes:**
```
├[~] service aws-datapipeline
│ └ resources
│    └[~]  resource AWS::DataPipeline::Pipeline
│       └      - arnTemplate: arn:${Partition}:datapipeline:${Region}:${Account}:pipeline/${PipelineID}
│              + arnTemplate: arn:${Partition}:datapipeline:${Region}:${Account}:pipeline/${PipelineId}
├[~] service aws-directoryservice
│ └ resources
│    └[~]  resource AWS::DirectoryService::MicrosoftAD
│       └      - arnTemplate: arn:${Partition}:ds:${Region}:${Account}:${DirectoryId}
│              + arnTemplate: arn:${Partition}:ds:${Region}:${Account}:directory/${DirectoryId}
├[~] service aws-iotwireless
│ └ resources
│    ├[~]  resource AWS::IoTWireless::PartnerAccount
│    │  └      - arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:SidewalkAccount/${SidewalkAccountId}
│    │         + arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:SidewalkAccount/${AmazonId}
│    └[~]  resource AWS::IoTWireless::WirelessDeviceImportTask
│       └      - arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:WirelessDeviceImportTask/${WirelessDeviceImportTaskId}
│              + arnTemplate: arn:${Partition}:iotwireless:${Region}:${Account}:ImportTask/${ImportTaskId}
├[~] service aws-networkmanager
│ └ resources
│    ├[~]  resource AWS::NetworkManager::ConnectPeer
│    │  └      - arnTemplate: arn:${Partition}:networkmanager::${Account}:connect-peer/${ResourceId}
│    │         + arnTemplate: arn:${Partition}:networkmanager::${Account}:connect-peer/${ConnectPeerId}
│    └[~]  resource AWS::NetworkManager::GlobalNetwork
│       └      - arnTemplate: arn:${Partition}:networkmanager::${Account}:global-network/${ResourceId}
│              + arnTemplate: arn:${Partition}:networkmanager::${Account}:global-network/${GlobalNetworkId}
├[~] service aws-ram
│ └ resources
│    └[~]  resource AWS::RAM::Permission
│       └      - arnTemplate: arn:${Partition}:ram::${Account}:permission/${ResourcePath}
│              + arnTemplate: arn:${Partition}:ram:${Region}:${Account}:permission/${ResourcePath}
├[~] service aws-rds
│ └ resources
│    └[~]  resource AWS::RDS::GlobalCluster
│       └      - arnTemplate: arn:${Partition}:rds::${Account}:global-cluster:${GlobalCluster}
│              + arnTemplate: arn:${Partition}:rds::${Account}:global-cluster:${ClusterName}
└[~] service aws-resiliencehub
  └ resources
     └[~]  resource AWS::ResilienceHub::ResiliencyPolicy
        └      - arnTemplate: arn:${Partition}:resiliencehub:${Region}:${Account}:resiliency-policy/${ResiliencyPolicyId}
               + arnTemplate: arn:${Partition}:resiliencehub:${Region}:${Account}:resiliency-policy/${PolicyId}
```

Updates the L1 CloudFormation resource definitions with the latest changes from `@aws-cdk/aws-service-spec`

**L1 CloudFormation resource definition changes:**
```
├[~] service aws-datapipeline
│ └ resources
│    └[~]  resource AWS::DataPipeline::Pipeline
│       └      - arnTemplate: arn:${Partition}:datapipeline:${Region}:${Account}:pipeline/${PipelineID}
│              + arnTemplate: arn:${Partition}:datapipeline:${Region}:${Account}:pipeline/${PipelineId}
├[~] service aws-devicefarm
│ └ resources
│    └[~]  resource AWS::DeviceFarm::Project
│       └      - arnTemplate: arn:${Partition}:devicefarm:${Region}:${Account}:project:${ResourceId}
│              + arnTemplate: arn:${Partition}:devicefarm:${Region}:${Account}:project:${ProjectId}
├[~] service aws-networkfirewall
│ └ resources
│    └[~]  resource AWS::NetworkFirewall::RuleGroup
│       └      - arnTemplate: arn:${Partition}:network-firewall:${Region}:${Account}:stateful-rulegroup/${Name}
│              + arnTemplate: arn:${Partition}:network-firewall:${Region}:${Account}:stateless-rulegroup/${Name}
├[~] service aws-networkmanager
│ └ resources
│    └[~]  resource AWS::NetworkManager::CoreNetwork
│       └      - arnTemplate: arn:${Partition}:networkmanager::${Account}:core-network/${ResourceId}
│              + arnTemplate: arn:${Partition}:networkmanager::${Account}:core-network/${CoreNetworkId}
├[~] service aws-pinpoint
│ └ resources
│    ├[~]  resource AWS::Pinpoint::InAppTemplate
│    │  └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/PUSH
│    │         + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/SMS
│    └[~]  resource AWS::Pinpoint::PushTemplate
│       └      - arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/PUSH
│              + arnTemplate: arn:${Partition}:mobiletargeting:${Region}:${Account}:templates/${TemplateName}/SMS
├[~] service aws-rekognition
│ └ resources
│    └[~]  resource AWS::Rekognition::StreamProcessor
│       └      - arnTemplate: arn:${Partition}:rekognition:${Region}:${Account}:streamprocessor/${StreamprocessorId}
│              + arnTemplate: arn:${Partition}:rekognition:${Region}:${Account}:streamprocessor/${Name}
└[~] service aws-resiliencehub
  └ resources
     └[~]  resource AWS::ResilienceHub::ResiliencyPolicy
        └      - arnTemplate: arn:${Partition}:resiliencehub:${Region}:${Account}:resiliency-policy/${ResiliencyPolicyId}
               + arnTemplate: arn:${Partition}:resiliencehub:${Region}:${Account}:resiliency-policy/${PolicyId}
```

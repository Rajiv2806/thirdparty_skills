---
title: "Topic Modelling"
date: "2018-02-02"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "topic-modelling"
    #weight: 4420
---
This algorithm takes a group of documents and returns a number of topics (which are made up of a number of words) most relevant to these documents using unsupervised machine learning technique.
## Use cases
- Gives the weighted words in a document or text.
- Map topics to the documents.

## Inputs

Below is a sample input to this skill:

```
"text": { "docsList":[
    "machine intelligence is the future",
    "computer science students are in demand and they know it",
    "I for one welcome our new machine overlords",
    "the machines are taking over, and they’ve even got human names",
    "superintelligent AI will takeover and rise"],
    "customSettings":{
    "numTopics":5}
 }"	
```

## Outputs
An example output is shown below:

```
{
    "payload": [
        "topic1:computer",
        "topic1:future",
        "topic1:machine",
        "topic1:overlords",
        "topic2:science",
        "topic3:intelligence",
        "topic3:rise",
        "topic3:superintelligent",
        "topic3:takeover",
        "topic4:human",
        "topic4:machines",
        "topic4:names",
        "topic4:taking",
        "topic5:demand",
        "topic5:students"
    ]
}

```

## Adding Topic Modelling insights to an agent
### Prerequisites
* Acquire an API key for the Topic Modelling API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Topic Modelling Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Topic Modelling API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **DocumentList and numTopics** as the **Input Type**.
1. Select **Topic Modelling Analysis** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Topic Modelling Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Topic Modelling API from the following Service providers.
* **Algorithmia**

## Skill development
This skill utilizes the Cortex function service to execute custom code.
The function should be developed and tested before the skill is published to Cortex.
  
Wrapper scripts are provided to assist in developing and deploying your skill.
* `build-function.sh` packages the function in build/function.zip
* `deploy-function.sh` builds and deploys the function via Cortex's function apis
* `test-function.sh` invokes the deployed function via Cortex's function api
* `deploy-skill.sh` deploys the skill definition to Cortex's skill catalog

For more information: https://docs.cortex.insights.ai

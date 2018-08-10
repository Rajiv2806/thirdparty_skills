---
title: "Image Caption"
date: "2018-03-21"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "image-caption"
    weight: 4420
---

Image Caption Api extracts a rich set of visual features based on the image content.

## Use cases
-  extracts visual features and gives a caption to an image .



## Inputs
This skill takes an image url as an input.
Below is a sample input to this skill:

```
{"text":"https://upload.wikimedia.org/wikipedia/commons/3/3c/Shaki_waterfall.jpg"}
```

## Outputs
The output of the Image Caption Skill is a series of key/value pairs that give caption and confidence score. An example output is shown below:

```
{
    "payload": {
        "response": [
            "caption: a large waterfall over a rocky cliff",
            "confidenceScore: 0.916458423253597"
        ]
    }
}


```

## Adding Image Caption insights to an agent
### Prerequisites
* Acquire an API key for the Image Caption API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Image Caption Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Image Caption API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Text** as the **Input Type**.Provide image link in text
1. Select **Image Caption Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Image Caption Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Image Caption API from the following Service providers.
* **Microsoft**

## Skill development
This skill utilizes the Cortex function service to execute custom code.
The function should be developed and tested before the skill is published to Cortex.
  
Wrapper scripts are provided to assist in developing and deploying your skill.
* `build-function.sh` packages the function in build/function.zip
* `deploy-function.sh` builds and deploys the function via Cortex's function apis
* `test-function.sh` invokes the deployed function via Cortex's function api
* `deploy-skill.sh` deploys the skill definition to Cortex's skill catalog

For more information: https://docs.cortex.insights.ai

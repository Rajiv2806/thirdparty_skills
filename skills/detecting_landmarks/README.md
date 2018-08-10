---
title: "Detecting Landmarks"
date: "2018-03-21"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "detecting-landmarks"
    weight: 4420
---

Detecting Landmarks Api detects well-known natural and human-made landmarks

## Use cases
- Detects the landmarks in an image.



## Inputs
This skill takes an image url as an input.
Below is a sample input to this skill:

```
"image_url" :"gs://my-randomtrees-image-bucket/New7Wonders.jpg"
```

## Outputs
The output of the Detecting Landmarks Skill is a series of key/value pairs that give landmark and their confidence scores. An example output is shown below:

```
{
    "payload": {
        "response": [
            "landmark:Taj Mahal",
            "confidence:0.79752964",
            "landmark:Petra",
            "confidence:0.78357923",
            "landmark:Chichen Itza",
            "confidence:0.6983833",
            "landmark:Christ The Redeemer",
            "confidence:0.2683294"
        ]
    }
}



```

## Adding Detecting Landmarks insights to an agent
### Prerequisites
* Acquire an API key for the Detecting Landmarks API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Detecting Landmarks Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Detecting Landmarks API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Text** as the **Input Type**.Provide image link in text
1. Select **Detecting Landmarks Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Detecting Landmarks Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Detecting Landmarks API from the following Service providers.
* **Google**

## Skill development
This skill utilizes the Cortex function service to execute custom code.
The function should be developed and tested before the skill is published to Cortex.
  
Wrapper scripts are provided to assist in developing and deploying your skill.
* `build-function.sh` packages the function in build/function.zip
* `deploy-function.sh` builds and deploys the function via Cortex's function apis
* `test-function.sh` invokes the deployed function via Cortex's function api
* `deploy-skill.sh` deploys the skill definition to Cortex's skill catalog

For more information: https://docs.cortex.insights.ai

---
title: "Detecting Logos"
date: "2018-03-21"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "detecting-logos"
    weight: 4420
---

Logo detection requests detect popular product and corporate logos within an image

## Use cases
- Detects the popular products .

## Inputs
This skill takes an image url as an input.
Below is a sample input to this skill:

```
{"image_url": "gs://my-randomtrees-image-bucket/Government-India.jpg"}
```


## Outputs
The output of the Detecting Logos Skill is a series of key/value pairs that give logo name and its confidence score. An example output is shown below:

```
{
    "payload": {
        "response": [
            "logo:Union Public Service Commission",
            "confidence:0.57229215"
        ]
    }
}


```

## Adding Detecting Logos insights to an agent
### Prerequisites
* Acquire an API key for the Detecting Logos API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Detecting Logos Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Detecting Logos API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Text** as the **Input Type**.Provide image link in text
1. Select **Detecting Logos Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Detecting Logos Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Detecting Logos API from the following Service providers.
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

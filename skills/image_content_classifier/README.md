---
title: "Image Content Classifier"
date: "2018-03-21"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "image-content-classifier"
    weight: 4420
---

Image Content Classifier Api Provides the information about an given image, if it contains any Adult Content, if the image is having any Racist characteristics, any signs of violence, it is a spoof content or any medical characteristics.

## Use cases
- Detects adult content, sign of violence in image.

## Inputs
This skill takes an image url as an input.
Below is a sample input to this skill:

```
"Value": "https://i1.wp.com/freeimagewallpapers.com/wp-content/uploads/2017/09/Boyfriend-Couple-Kiss-Love-photo.jpg?resize=820%2C513"
```

## Outputs
The output of the Image Content Classifier Skill is a series of key/value pairs of image classification and confidence scores of classification . An example output is shown below:

```
{
    "payload": {
        "response": [
            "adultClassification:false",
            "adultClassificationScore:0.06354743987321854",
            "racyClassification:true",
            "racyClassificationScore:0.9604500532150269",
            "spoofClassification:",
            "medicalClassification:",
            "violenceClassification:"
        ]
    }
}

```

## Adding Image Content Classifier insights to an agent
### Prerequisites
* Acquire an API key for the Image Content Classifier API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Image Content Classifier Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Image Content Classifier API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Text** as the **Input Type**.Provide image link in text
1. Select **Image Content Classifier Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Image Content Classifier Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Image Content Classifier API from the following Service providers.
 * **Microsoft**
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

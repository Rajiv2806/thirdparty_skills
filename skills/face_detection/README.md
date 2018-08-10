---
title: "Face Detection"
date: "2018-03-21"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "face-detection"
    weight: 4420
---

Face Detection Api identifies all the faces that are present in an image, with confidence score for each face and recognizes Facial attributes including age, gender, smile intensity.

## Use cases
- Detects the faces and facial attributes.



## Inputs
This skill takes an image url as an input.
Below is a sample input to this skill:

```
"text":"https://azurecomcdn.azureedge.net/cvt-886c3a7c14b96c6c1168adff36a3d18de17414abf22dcdd658e1796e561b4f8a/images/shared/cognitive-services-demos/face-detection/detection-6-thumbnail.jpg"
```

## Outputs
The output of the Face Detection Skill has Facial attributes including age, gender, smile intensity. An example output is shown below:

```
{
    "payload": {
        "response": [
            "boundingBox_top:79",
            "boundingBox_left:57",
            "boundingBox_width:43",
            "boundingBox_height:43",
            "faceConfidence:",
            "age:64.8",
            "gender:male",
            "smile:1",
            "faceLandmarks:",
            "boundingBox_top:50",
            "boundingBox_left:88",
            "boundingBox_width:39",
            "boundingBox_height:39",
            "faceConfidence:",
            "age:60",
            "gender:female",
            "smile:1",
            "faceLandmarks:"
        ]
    }
}
```

## Adding Face Detection insights to an agent
### Prerequisites
* Acquire an API key for the Face Detection API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Face Detection Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Face Detection API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Text** as the **Input Type**.Provide image link in text
1. Select **Face Detection Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Face Detection Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Face Detection API from the following Service providers.
* **AWS**
* **Microsoft**
* **Google**
* **IBM**


## Skill development
This skill utilizes the Cortex function service to execute custom code.
The function should be developed and tested before the skill is published to Cortex.
  
Wrapper scripts are provided to assist in developing and deploying your skill.
* `build-function.sh` packages the function in build/function.zip
* `deploy-function.sh` builds and deploys the function via Cortex's function apis
* `test-function.sh` invokes the deployed function via Cortex's function api
* `deploy-skill.sh` deploys the skill definition to Cortex's skill catalog

For more information: https://docs.cortex.insights.ai

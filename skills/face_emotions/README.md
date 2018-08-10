---
title: "Face Emotions"
date: "2018-03-21"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "face-emotions"
    weight: 4420
---

Face Emotions Api detects all the emotion in faces that are present in an image, with confidence score for each face and recognizes Facial attributes including age, gender, emotion like smile,anger etc.

## Use cases
- Detects the face emotions like smile,anger etc.



## Inputs
This skill takes an image url as an input.
Below is a sample input to this skill:

```
"text":"https://azurecomcdn.azureedge.net/cvt-886c3a7c14b96c6c1168adff36a3d18de17414abf22dcdd658e1796e561b4f8a/images/shared/cognitive-services-demos/face-detection/detection-6-thumbnail.jpg"
```


## Outputs
The output of the Face Emotions Skill is a series of key/value pairs that give smile,anger,disgust ..etc. An example output is shown below:

```
{
    "payload": {
        "response": [
            "response.boundingBox.top:79",
            "response.boundingBox.left:57",
            "response.boundingBox.width:43",
            "response.boundingBox.height:43",
            "response.age:64.8",
            "response.gender:male",
            "response.emotion.anger:0",
            "response.emotion.contempt:0",
            "response.emotion.disgust:0",
            "response.emotion.fear:0",
            "response.emotion.happiness:1",
            "response.emotion.neutral:0",
            "response.emotion.sadness:0",
            "response.emotion.surprise:0",
            "response.emotion.Smile:1",
            "response.boundingBox.top:50",
            "response.boundingBox.left:88",
            "response.boundingBox.width:39",
            "response.boundingBox.height:39",
            "response.age:60",
            "response.gender:female",
            "response.emotion.anger:0",
            "response.emotion.contempt:0",
            "response.emotion.disgust:0",
            "response.emotion.fear:0",
            "response.emotion.happiness:1",
            "response.emotion.neutral:0",
            "response.emotion.sadness:0",
            "response.emotion.surprise:0",
            "response.emotion.Smile:1"
        ]
    }
}


```

## Adding Face Emotions insights to an agent
### Prerequisites
* Acquire an API key for the Face Emotions API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Face Emotions Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Face Emotions API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Text** as the **Input Type**.Provide image link in text
1. Select **Face Emotions Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Face Emotions Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Face Emotions API from the following Service providers.
* **Google**
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

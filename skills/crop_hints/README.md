---
title: "Crop Hints"
date: "2018-03-21"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "crop-hints"
    weight: 4420
---

Crop hints requests return the coordinates of a bounding box that surrounds the dominant object or face in an image.

## Use cases
- Detects co-ordinates of face or object in an image .

## Inputs
This skill takes an image url as an input.
Below is a sample input to this skill:

```
"image_url" :gs://my-randomtrees-image-bucket/Government-India.jpg"}}
```

## Outputs
The output of the Crop Hints Skill is a coordinates of a bounding box that surrounds the dominant object . An example output is shown below:

```
{
    "payload": {
        "response": [
            "confidence:0.79999995"
            "importanceFraction:1",
            "boundingPoly_x:39",
            "boundingPoly_x:1023",
            "boundingPoly_y:767",
            "boundingPoly_x:1023",
            "boundingPoly_y:767",
            "boundingPoly_x:39"
        ]
    }
}

```

## Adding Crop Hints insights to an agent
### Prerequisites
* Acquire an API key for the Crop Hints API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Crop Hints Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Crop Hints API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Image** as the **Input Type**.Provide image link in text
1. Select **Crop Hints Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Crop Hints Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Crop Hints API from the following Service providers.
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

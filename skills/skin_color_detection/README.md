---
title: "Skin Color Detection"
date: "2018-02-04"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "skin-color-detection"
    #weight:4580
---
Gets possible values of skin color for the detected people in a picture.
Works Only with one face in an image. The return result is an array for different detected faces;
the values in the arrays are red_min, red_max, green_min, green_max, blue_min, blue_max; respectively.

## Use Cases
- Helpful in determining the race of an indiduals presenent in given image

## Inputs
The input to this skill is .

```
"input_url":"http://images.wisegeek.com/triangular-face.jpg"
```

## Outputs
```
{
    "payload": {
        "response": [
            "red_min: 210",
            "red_max: 255",
            "green_min: 171",
            "green_max: 232",
            "blue_min: 149",
            "blue_max: 218"
        ]
    }
}
```

## Adding Skin Color Detection to an agent
### Prerequisites
* Acquire an API key from Algorithmia for the Skin Color Detection API.

### Add the skill
1. Use **Add** > **Skill** to find and add the Skin Color Detection skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **Algorithmia**.
    * **API Key**: Enter your API Key for the Skin Color Detection API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Image** as the **Input Type**.
1. Select **SkinColorDetectionResponse** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Skin Color Detection  skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product Attribution
This service leverages the Compare Images API from the following Service providers.
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

---
title: "Color Identification"
date: "2018-03-21"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "color-identification"
    weight: 4420
---

Color Identification Api can be used to determine an image properties request returns the dominant colors in the image as RGB values and percent of the total pixel count.

## Use cases
- Detects the dominant colors in an image .

## Inputs
This skill takes an image url as an input.
Below is a sample input to this skill:

```
{"text":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/New7Wonders.jpg/276px-New7Wonders.jpg"}
```

  - Supported image formats: JPEG, PNG, GIF, BMP.
  - Image file size must be less than 4MB.
  - Image dimensions must be at least 50 x 50.

## Outputs
The output of the Color Identification Skill is a series of key/value pairs that give color,description,tags and their confidence scores. An example output is shown below:

```
{
    "payload": {
        "response": [
            "rbg_values: ",
            "fractionOfPixels: ",
            "score: ",
            "isBWImage: false",
            "dominantColorBackground: Blue",
            "dominantColorForeground: Blue",
            "dominantColors: Blue"
        ]
    }
}

```

## Adding Color Identification insights to an agent
### Prerequisites
* Acquire an API key for the Color Identification API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Color Identification Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Color Identification API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Text** as the **Input Type**.Provide image link in text
1. Select **Color Identification Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Color Identification Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Color Identification API from the following Service providers.
* **Google**
* **AWS**


## Skill development
This skill utilizes the Cortex function service to execute custom code.
The function should be developed and tested before the skill is published to Cortex.
  
Wrapper scripts are provided to assist in developing and deploying your skill.
* `build-function.sh` packages the function in build/function.zip
* `deploy-function.sh` builds and deploys the function via Cortex's function apis
* `test-function.sh` invokes the deployed function via Cortex's function api
* `deploy-skill.sh` deploys the skill definition to Cortex's skill catalog

For more information: https://docs.cortex.insights.ai
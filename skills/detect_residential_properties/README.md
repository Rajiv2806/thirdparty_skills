---
title: "Detect Residential Properties"
date: "2018-03-21"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "detect-residential-properties"
    weight: 4420
---

Detect Residential Properties is an image classifier specifically built for Real Estate applications.Currently it classifies 17 categories : bathroom,bedroom,brick_house,colonial_house,fireplace,garage,garden,house_front,house_gate,house_stairs,kitchen_full,living_room,modern_house,pool,victorian_house,walk_in_closet,beach_house.
## Use cases

- classifier that tags various places .

## Inputs
(Required) image: Image Data API Url, Web (http/https) Url, binary image or a base64 encoded image.

Below is a sample input to this skill:

```
"text":{
  "image": "http://www.3dpower.in/images/bungalow/full/3D%20Designing%20Architectural%20Bungalow.jpg",
  "numResults": 10}
```
## Outputs

An example output is shown below:
```
{
    "payload": {
        "response": [
            "class:victorian_house",
            "confidence:0.993444561958313",
            "class:beach_house",
            "confidence:0.004853500984609127",
            "class:house_front",
            "confidence:0.00170014682225883",
            "class:house_stairs",
            "confidence:0.0000013564638265961548",
            "class:modern_house",
            "confidence:1.6425856586010926e-7",
            "class:brick_house",
            "confidence:8.865286815762374e-8",
            "class:house_gate",
            "confidence:7.700732140847323e-8",
            "class:colonial_house",
            "confidence:5.591328999798862e-8",
            "class:garden",
            "confidence:3.9695379427939776e-8",
            "class:garage",
            "confidence:2.4595143699457367e-8"
        ]
    }
}

```

## Adding Detect Residential Properties insights to an agent
### Prerequisites
* Acquire an API key for the Detect Residential Properties API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Detect Residential Properties Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Detect Residential Properties API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Text** as the **Input Type**.Provide image link in text
1. Select **Detect Residential Properties Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Detect Residential Properties Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Detect Residential Properties API from the following Service providers.
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

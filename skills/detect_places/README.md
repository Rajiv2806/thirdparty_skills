---
title: "Detect Places"
date: "2018-03-21"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "detect-places"
    weight: 4420
---

Detect places is an image classifier specifically trained for classifying various places in an image.
ex:amusement_arcade,amusement_park,apartment_building/outdoor,aquarium

## Use cases
- classifier that tags various places .



## Inputs
(Required) image: Image Data API Url, Web (http/https) Url, binary image or a base64 encoded image.
(Optional) numResults: Number of results. (Default=5)

Below is a sample input to this skill:

```
{
    "image": "data://deeplearning/example_data/burj_khalifa.jpg"
}
```
## Outputs
Top N classifications.

*Note: The first call to this algorithm will take a bit longer than sequential calls to due algorithm initialization. All following calls will be significantly faster.

An example output is shown below:
```
{
    "payload": {
        "response": [
            "class: tower",
            "confidence: 0.6098035573959351",
            "class: skyscraper",
            "confidence: 0.14249815046787262",
            "class: office_building",
            "confidence: 0.04916093870997429",
            "class: downtown",
            "confidence: 0.029243653640151024",
            "class: church/outdoor",
            "confidence: 0.028504753485322"
        ]
    }
}

```

## Adding Detect Places insights to an agent
### Prerequisites
* Acquire an API key for the Detect Places API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Detect Places Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Detect Places API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Text** as the **Input Type**.Provide image link in text
1. Select **Detect Places Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Detect Places Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Detect Places API from the following Service providers.
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

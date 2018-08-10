---
title: "Number Plate Recognition"
date: "2018-02-05"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "number-plate-recognition"
    #weight:4580
---
Using neural networks to build an automatic number plate recognition system.

NOTE: support number plates with exactly 7 characters, as is the case with most UK number plates

## Use Cases
- Parking lots.
- Access Control.
- Motorway Road Tolling.
- Border Control.
- Law Enforcement.

## Inputs
A sample input to this skill is .
```
"input_url": "https://raw.githubusercontent.com/AnjieZheng/Tensorflow-Number-Plate-Recognition/master/in.jpg"
```

## Outputs  
```
{
  "payload": {
    "response": [
      "detected:AE02RYA"
    ]
  }
}
```

## Adding Number Plate Recognition to an agent
### Prerequisites
* Acquire an API key from Algorithmia for the Number Plate Recognition API.

### Add the skill
1. Use **Add** > **Skill** to find and add the Number Plate Recognition skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Number Plate Recognition API.

### Add input and output
1. Add a service input.
2. Give the service a name that is unique inside this agent.
3. Select **Image** as the **Input Type**.
4. Select **Number Plate Recognition Response** as the **Output Type**.
5. Click **Add Service**.

### Wiring
1. Select the Number Plate Recognition skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product Attribution
This service leverages the Number Plate Recognition API from the following Service providers.
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

---
title: "Suitable Match"
date: "2018-03-21"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "suitable-match"
    weight: 4420
---

Finds a stable matching in which there is no pair of elements where both members prefer their partner in a different matching over their partner in the stable matching.
This algorithm requires a list of preferred elements for each element.

## Use cases
- Assigning roommates in a  dormitory

## Inputs
Below is a sample input to this skill:

All the individuals provides the list of preferences in ordered form for other individuals.

```
    "preferences": {
        "Charlie": ["Peter", "Paul", "Sam", "Kelly", "Elise"],
        "Peter": ["Kelly", "Elise", "Sam", "Paul", "Charlie"],
        "Elise": ["Peter", "Sam", "Kelly", "Charlie", "Paul"],
        "Paul": ["Elise", "Charlie", "Sam", "Peter", "Kelly"],
        "Kelly": ["Peter", "Charlie", "Sam", "Elise", "Paul"],
        "Sam": ["Charlie", "Paul", "Kelly", "Elise", "Peter"]
    }
```


## Outputs
An sample output is shown below:

This response provides the best suitable match for each individual.

{
    "payload": {
        "response": [
            "matchPair:Charlie-Paul",
            "matchPair:Elise-Sam",
            "matchPair:Kelly-Peter",
            "matchPair:Paul-Charlie",
            "matchPair:Peter-Kelly",
            "matchPair:Sam-Elise"
        ]
    }
}
```


## Adding Suitable Match insights to an agent
### Prerequisites
* Acquire an API key for the Suitable Match API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Suitable Match Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Suitable Match API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Text** as the **Input Type**.Provide image link in text
1. Select **Suitable Match Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Suitable Match Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Suitable Match API from the following Service providers.
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

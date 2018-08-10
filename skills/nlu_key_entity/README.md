---
title: "Nlu Keyentity"
date: "2018-03-22"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "nlu-keyentity"
    weight: 4420
---

Identifies the important phrases and their types, present in the input text along with that phrase relevance score. The salience score or the importance score of that phrase in the input text is also provided along with the Wikipedia ID.

## Use cases
-  The illustration below shows an example of entity linking. Specifically, when using Wikipedia, the Entity Linking Intelligence Service detects all entities mentioned within the input text and links them to relevant reference points according to the page ID.


## Inputs

Below is a sample input to this skill:

```
"text": "For months, the four scientific instruments at the heart of the James Webb Space Telescope have been sealed in what looks like a huge pressure cooker. It's a test chamber that simulates the gruelling operating conditions they will face after Webb is launched into orbit in 2018. But in fact, 'pressure cooker' is an apt metaphor for the whole project. The infrared Webb observatory is the biggest, most complex, and most expensive science mission that NASA has ever attempted. Like that of its predecessor, the Hubble Space Telescope, Webb's construction has been plagued by redesigns, schedule slips, and cost overruns that have strained relationships with contractors, international partners, and supporters in the U.S. Congress. Lately the project has largely stuck to its schedule and its $8 billion budget. But plenty could still go wrong, and the stakes are high: Both the future of space-based astronomy and NASA's ability to build complex science missions depend on its success."

```


## Outputs
An example output is shown below:


```
{
    "payload": {
        "response": [
            "entity:James Webb Space Telescope",
            "type:",
            "score:0.761",
            "wikipediaid:James Webb Space Telescope",
            "saliance:",
            "entity:Information technology",
            "type:",
            "score:0.235",
            "wikipediaid:Information technology",
            "saliance:",
            "entity:NASA",
            "type:",
            "score:1",
            "wikipediaid:NASA",
            "saliance:",
            "entity:Hubble Space Telescope",
            "type:",
            "score:0.988",
            "wikipediaid:Hubble Space Telescope",
            "saliance:",
            "entity:Federal government of the United States",
            "type:",
            "score:0.007",
            "wikipediaid:Federal government of the United States",
            "saliance:",
            "entity:United States Congress",
            "type:",
            "score:0.998",
            "wikipediaid:United States Congress",
            "saliance:"
        ]
    }
}


```

## Adding Nlu Keyentity insights to an agent
### Prerequisites
* Acquire an API key for the Nlu Keyentity API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Nlu Keyentity Skill.
2. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Nlu Keyentity API.

### Add input and output
1. Add a service input.
2. Give the service a name that is unique inside this agent.
3. Select **Text** as the **Input Type**.
4. Select **Nlu Keyentity Response** as the **Output Type**.
5. Click **Add Service**.

### Wiring
1. Select the Nlu Keyentity Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Nlu Keyentity API from the following Service providers.
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

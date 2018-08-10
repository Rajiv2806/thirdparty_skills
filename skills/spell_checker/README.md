---
title: "Spell Checker"
date: "2018-03-22"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "spell-checker"
    weight: 4420
---

This API lets you perform contextual grammar and spell checking in a given text.

## Use cases
- Recognizes slang and informal language.
- Recognizes common name errors in context.
- Corrects word breaking issues with a single flag.
- Is able to correct homophones in context, and other difficult to spot errors.
- Supports new brands, digital entertainment, and popular expressions as they emerge.
- Words that sound the same but differ in meaning and spelling, for example “see” and “sea.”


## Inputs
Below is a sample input to this skill:

```
"text":"How are yo doin?"

```


## Outputs
Below is a sample input to this skill:


```
{
    "payload": {
        "response": [
            "suggestion:you",
            "score:0.904548193221975",
            "wrongspell:yo",
            "suggestion:doing",
            "score:0.904548193221975",
            "wrongspell:doin"
        ]
    }
}


```

## Adding Spell Checker insights to an agent
### Prerequisites
* Acquire an API key for the Spell Checker API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Spell Checker Skill.
2. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Spell Checker API.

### Add input and output
1. Add a service input.
2. Give the service a name that is unique inside this agent.
3. Select **Text** as the **Input Type**.
4. Select **Spell Checker Response** as the **Output Type**.
5. Click **Add Service**.

### Wiring
1. Select the Spell Checker Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Spell Checker API from the following Service providers.

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

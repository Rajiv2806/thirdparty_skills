---
title: "Language Understand"
date: "2018-03-22"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "language-understand"
    weight: 4420
---

Identify the important Entities in the given input text and summarizes the content.

## Use cases
- Summarizing News Articles
- Summarizing Books

## Inputs
Below is a sample input to this skill:

```
"language":"en",
"text": "We love this trail and make the trip every year. The views are breath taking and well worth the hike!"
```


## Outputs
Below is a sample input to this skill:


```
{
    "payload": {
        "response": [
            "year",
            "trail",
            "trip",
            "views"
        ]
    }
}


```

## Adding Language Understand insights to an agent
### Prerequisites
* Acquire an API key for the Language Understand API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Language Understand Skill.
2. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Language Understand API.
    * **Region**: Enter your Region for the Language Understand API if exists.

### Add input and output
1. Add a service input.
2. Give the service a name that is unique inside this agent.
3. Select **language** as the **Input Type**.
3. Select **Text** as the **Input Type**.
4. Select **Response** as the **Output Type**.
5. Click **Add Service**.

### Wiring
1. Select the Language Understand Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Language Understand API from the following Service providers.
* **AWS**
* **Microsoft**
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

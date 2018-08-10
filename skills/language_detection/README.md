---
title: "Language Detection"
date: "2018-03-22"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "language-detection"
    weight: 4420
---

Text Analytics API is a cloud-based service that provides advanced natural language processing over raw text and language detection is a main functionality.

## Use cases
-  This capability is useful for content stores that collect arbitrary text, where language is unknown. You can parse the results of this analysis to determine which language is used in the input document.

## Inputs
Below is a sample input to this skill:

```
"input_text": "这是一个用中文写的文件"
```


## Outputs
Below is a sample input to this skill:


```
{
    "payload": [
        "response.language-detected:Chinese_Simplified",
        "response.iso-name:zh_chs",
        "response.confidence-score:1"
    ]
}


```

## Adding Language Detection insights to an agent
### Prerequisites
* Acquire an API key for the Language Detection API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Language Detection Skill.
2. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Language Detection API.

### Add input and output
1. Add a service input.
2. Give the service a name that is unique inside this agent.
3. Select **Text** as the **Input Type**.
4. Select **Language Detection Response** as the **Output Type**.
5. Click **Add Service**.

### Wiring
1. Select the Language Detection Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Language Detection API from the following Service providers.
* **AWS**
* **Microsoft**
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

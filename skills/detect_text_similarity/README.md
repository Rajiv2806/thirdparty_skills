---
title: "Detect Text Similarity"
date: "2018-03-21"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "detect-text-similarity"
    weight: 4420
---

This algorithm will compare documents (can be any kind of document) and report which documents are the most similar.

## Use cases
- Plagiarism detection (natural language, programming source, etc.)
- Removal of similar copies within some directory
- Analysis and clustering of documents



## Inputs

Below is a sample input to this skill:

```
 "sentence_1" : "this is an example input", "sentence_2": "this is another example input"
```
## Outputs

An example output is shown below:
```
{
    "payload": {
        "response": [
            "similarityScore: 0.6567537201621945"
        ]
    }
}
```

## Adding Detect Text Similarity insights to an agent
### Prerequisites
* Acquire an API key for the Detect Text Similarity API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Detect Text Similarity Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Detect Text Similarity API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Text** as the **Input Type**.
1. Select **Detect Text Similarity Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Detect Text Similarity Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Detect Text Similarity API from the following Service providers.
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

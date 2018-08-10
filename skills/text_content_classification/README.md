---
title: "Text Content Classification"
date: "2018-03-21"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "text-content-classification"
    weight: 4420
---

Content Classification Text Api analyses a document and returns a list of content categories that apply to the text found in the document.

## Use cases
-  Analyses a document and returns a list of content categories  .



## Inputs
This skill takes an text as an input.
Below is a sample input to this skill:

```
"content": "'Lawrence of Arabia' is a highly rated film biography about British Lieutenant T. E. Lawrence. Peter O'Toole plays Lawrence in the film."
```


## Outputs
The output of the Text Content Classification Skill has a name and confidence score. An example output is shown below:

```
{
    "payload": {
        "response": [
            "categories.name:/Arts & Entertainment/Movies",
            "categories.confidence:0.91"
        ]
     }
}


```

## AddingText Content Classification insights to an agent
### Prerequisites
* Acquire an API key for the Text Content Classification API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Text Content Classification Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Text Content Classification API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Text** as the **Input Type**.
1. Select **Text Content Classification Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Text Content Classification Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Text Content Classification API from the following Service providers.
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

---
title: "Object Identification"
date: "2018-03-21"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "object-identification"
    weight: 4420
---

Object Identification detects the objects in an image.

## Use cases
- Detects the objects in an image .



## Inputs
This skill takes an image url as an input.
Below is a sample input to this skill:

```
"image_url" : "https://watson-developer-cloud.github.io/doc-tutorial-downloads/visual-recognition/fruitbowl.jpg"
```

## Outputs
The output of the Object Identification Skill is a series of key/value pairs that has objects identified and their confidence scores. An example output is shown below:

```
{
    "payload": {
        "response": [
            "class:Apple",
            "score:90.36761474609375",
            "class:Flora",
            "score:90.36761474609375",
            "class:Food",
            "score:90.36761474609375",
            "class:Fruit",
            "score:90.36761474609375",
            "class:Plant",
            "score:90.36761474609375",
            "class:Produce",
            "score:90.36761474609375",
            "class:Bowl",
            "score:85.11527252197266",
            "class:Citrus Fruit",
            "score:83.3852767944336",
            "class:Grapefruit",
            "score:83.3852767944336",
            "class:Lime",
            "score:53.090423583984375"
        ]
    }
}


```

## Adding Object Identification insights to an agent
### Prerequisites
* Acquire an API key for the Object Identification API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Object Identification Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Object Identification API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **image url** as the **Input Type**.Provide image link in text
1. Select **Object Identification Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Object Identification Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Object Identification API from the following Service providers.
 * **AWS**
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

---
title: "Dress Recognition"
date: "2018-02-04"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "dress-recognition"
    #weight:4580
---
This algorithm detects clothing items in images; it returns a list of discovered clothing articles as well as
annotating the input image with bounding boxes for each found article.

## Use Cases
- Real-Time Object Detection with Region Proposal Networks.
- The company we worked with has a huge distribution network of supermarket chains across over fourteen countries.
- Custom Vision Service.

## Inputs
The input to this skill is .
```
{  
   "image": "http://i.imgur.com/GtvDM8X.jpg",
   "model":"small"
}
```

## Outputs  
```
{
    "payload": {
        "response": [
            "article_name:blazer",
            "confidence:0.5159526467323303",
            "article_name:button down shirt",
            "confidence:0.6670808792114258",
            "article_name:hat",
            "confidence:0.9868487119674684"
        ]
    }
}
```

## Adding Dress Recognition to an agent
### Prerequisites
* Acquire an API key from Algorithmia for the Dress Recognition API.

### Add the skill
1. Use **Add** > **Skill** to find and add the Dress Recognition skill.
2. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **Algorithmia**.
    * **API Key**: Enter your API Key for the Dress Recognition API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Image** as the **Input Type**.
1. Select **DressRecognitionResponse** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Dress Recognition  skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product Attribution
This service leverages the Language Translate API from the following Service providers.

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

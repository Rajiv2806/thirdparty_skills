---
title: "Video Object Identification Response"
date: "2018-03-26"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "video-object-identification-response"
    #weight: 4420
---

Returns list of all the objects  that are identified in the given input video.

## Use cases

- Detects the objects in video.

## Inputs
Below is a sample input to this skill

```
"jobId": "us-west1.3327424134633883473"
```

## Output
An example output is shown below:

```
{
    "payload": {
        "response": [
            "jobCompleted:true",
            "labelAnnotations.entity:machine",
            "labelAnnotations.category:",
            "labelAnnotations.entity:vehicle",
            "labelAnnotations.category:",
            "labelAnnotations.entity:family",
            "labelAnnotations.category:people",
            "labelAnnotations.entity:camera",
            "labelAnnotations.category:",
            "labelAnnotations.entity:sibling",
            "labelAnnotations.category:child",
            "labelAnnotations.entity:mobile device",
            "labelAnnotations.category:computer",
            "labelAnnotations.entity:text",
            "labelAnnotations.category:",
            "labelAnnotations.entity:portable communications device",
            "labelAnnotations.category:technology",
            "labelAnnotations.entity:android",
            "labelAnnotations.category:",
            "labelAnnotations.entity:model car",
            "labelAnnotations.category:toy",
            "labelAnnotations.entity:graphics",
            "labelAnnotations.category:artwork",
            "labelAnnotations.entity:illustration",
            "labelAnnotations.category:art",
            "labelAnnotations.entity:gadget",
            "labelAnnotations.category:technology",
            "labelAnnotations.entity:technology",
            "labelAnnotations.category:",
            "labelAnnotations.entity:smile",
            "labelAnnotations.category:person",
            "labelAnnotations.entity:electronic device",
            "labelAnnotations.category:technology",
            "labelAnnotations.entity:communication device",
            "labelAnnotations.category:technology",
            "labelAnnotations.entity:interaction",
            "labelAnnotations.category:person",
            "labelAnnotations.entity:electronic component",
            "labelAnnotations.category:technology",
            "labelAnnotations.entity:chassis",
            "labelAnnotations.category:",
            "labelAnnotations.entity:bridge",
            "labelAnnotations.category:",
            "labelAnnotations.entity:smartphone",
            "labelAnnotations.category:mobile phone",
            "labelAnnotations.entity:logo",
            "labelAnnotations.category:graphics",
            "labelAnnotations.entity:happiness",
            "labelAnnotations.category:person",
            "labelAnnotations.entity:people",
            "labelAnnotations.category:person",
            "labelAnnotations.entity:sitting",
            "labelAnnotations.category:person",
            "labelAnnotations.entity:kindergarten",
            "labelAnnotations.category:school",
            "labelAnnotations.entity:telephone",
            "labelAnnotations.category:",
            "labelAnnotations.entity:education",
            "labelAnnotations.category:",
            "labelAnnotations.entity:robot",
            "labelAnnotations.category:technology,machine",
            "labelAnnotations.entity:consumer electronics",
            "labelAnnotations.category:",
            "labelAnnotations.entity:song",
            "labelAnnotations.category:music",
            "labelAnnotations.entity:food",
            "labelAnnotations.category:",
            "labelAnnotations.entity:toy",
            "labelAnnotations.category:",
            "labelAnnotations.entity:facial expression",
            "labelAnnotations.category:person",
            "labelAnnotations.entity:headgear",
            "labelAnnotations.category:clothing",
            "labelAnnotations.entity:social group",
            "labelAnnotations.category:",
            "labelAnnotations.entity:student",
            "labelAnnotations.category:person",
            "labelAnnotations.entity:mobile phone",
            "labelAnnotations.category:telephone",
            "labelAnnotations.entity:camera lens",
            "labelAnnotations.category:lens,camera",
            "labelAnnotations.entity:school",
            "labelAnnotations.category:building",
            "labelAnnotations.entity:fun",
            "labelAnnotations.category:",
            "labelAnnotations.entity:classroom",
            "labelAnnotations.category:room",
            "labelAnnotations.entity:learning",
            "labelAnnotations.category:person"
        ]
    }
}

```

## Adding Video Object Identification Response insights to an agent
### Prerequisites
* Acquire an API key for the Video Object Identification Response API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Video Object Identification Response Skill.
2. Click the skill to select it, and set the following values in the **Properties** panel:

    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Video Object Identification Response API.

### Add input and output
1. Add a service input.
2. Give the service a name that is unique inside this agent.
3. Select **video** as the **Input Type**.
4. Select **Video Object Identification Response** as the **Output Type**.
5. Click **Add Service**.

### Wiring
1. Select the Video Video Object Identification Response Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Video Video Object Identification Response API from the following Service providers.
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

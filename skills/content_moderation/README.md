---
title: "Content Moderation"
date: "2018-03-23"
toc: true
menu:
  main:
    parent: "ML-skills"
    identifier: "content-moderation"
    weight: 4420
---

Content moderation is the process of monitoring user-generated content on online and social media websites,
chat and messaging platforms, enterprise environments, gaming platforms, and peer communication platforms

Image moderation works great for ensuring that profile pictures, social media posts and returns probabilities of 
the image containing racy or adult content.

## Use Cases

- Image moderation works great for ensuring that profile pictures, social media posts, 
  and business documents are appropriate. Using moderation on image-sharing sites saves 

## Inputs
The input to this skill is .
```
"text": "She answered me in a different way… which made me aroused like anything .. we started smooching and it was lasted for 20mins we both were crazy and from the living room to the bedroom while smooching and we both ripped off our clothes and became naked while smooching… she kneels down and started giving me a blowjob which is amazing I was in heaven the way she playing with my cock which is 7+ inches in erection… her tongue is mesmerizing my cock was moaning like anything which is experiencing the first time in my life… she is awesome after 15mins have told her am going to cum now… She wants me to shoot it completely in her mouth which I did and she ate and licked entire cum."
```

## Outputs  
```
{
    "payload": {
        "response": [
            "sexuallyExplicitContent: 0.9997860789299011",
            "sexuallySuggestiveContent: 0.9228923916816711",
            "offensiveContent: 0.9879999756813049",
            "language: eng",
            "Terms: blowjob",
            "Terms: cock",
            "Terms: cock",
            "Terms: cum",
            "Terms: cum"
        ]
    }
}
```
## Adding content moderation insights to an agent
### Prerequisites
* Acquire an API key for the content moderation API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the content moderation Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider.**.
    * **API Key**: Enter your API Key for the content moderation API.
    
### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Text** as the **Input Type**.
1. Select **Content Moderation  Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the content moderation skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product Attribution
This service leverages the Content Moderation API from the following Service providers.
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

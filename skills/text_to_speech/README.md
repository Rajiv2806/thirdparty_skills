---
title: "Text to Speech"
date: "2018-02-02"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "text-to-speech"
    #weight: 4420
---
It converts user input text to spoken audio.

## Use cases
-  creates a spoken text into audio files.

## Inputs
skill takes text as input.A sample example for the input is shown below:

```
"text":"Hurray!text to speech response is done."
```

## Outputs

An example output for the Text to Speech API is shown below:

```
{
  "payload": {
    "response": [
      "outputFileLocation: data://.algo/magicanded/algospeak/temp/algospeak-output1786543512744597160.mp3",
      "outputFileLocationUrl: https://algorithmia.com/v1/data/.algo%2Fmagicanded%2Falgospeak%2Ftemp%2Falgospeak-output1786543512744597160.mp3",
      "outputUrl: https://soundoftext.nyc3.digitaloceanspaces.com/7c206290-1116-11e8-9416-5382295fa6ae.mp3"
    ]
  }
}
```

## Adding Text to Speech insights to an agent
### Prerequisites
* Acquire an API key for the Text to Speech API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Text to Speech Skill.
2. Click the skill to select it, and set the following values in the **Properties** panel:

    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Text to Speech API.

### Add input and output
1. Add a service input.
2. Give the service a name that is unique inside this agent.
3. Select **text** as the **Input Type**.
4. Select **Text to Speech Response** as the **Output Type**.
5. Click **Add Service**.

### Wiring
1. Select the Text to Speech Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Text to Speech API from the following Service providers.
* **Microsoft**
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

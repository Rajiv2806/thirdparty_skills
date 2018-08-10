---
title: "Speech To Text"
date: "2018-03-26"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "speech-to-text"
    #weight: 4420
---

This skill converts audio file into text. The file which is less than 1 minute use synchronous speech recognition and for audio which is more then 1 minute this use asynchronous speech recognition. For asynchronous response a job id needs to be generated.

## Use cases

- The analysis model can be used to analyse text in a given audio.

## Inputs
Below is a sample input to this skill:

```
 audio: {"uri":"gs://my-randomtrees-image-bucket/synchronous-audio.wav"}
```

## Output
An example output is shown below:

```
{
    "payload": {
        "response": [
            "confidence:0.64876825",
            "transcript:Fill the ink jar with sticky glue. He smoked a big fight with strong contents.",
            "confidence:0.68224925",
            "transcript: We need green to keep our mules healthy packed the records in a neat thing case the crunch of feet in the snow was the only sound.",
            "confidence:0.7243954",
            "transcript: the copper bowl showing in the funds raised",
            "confidence:0.64398205",
            "transcript: boards warp unless test drive",
            "confidence:0.682497",
            "transcript: the plus chair leaned against the wall class poop link when struck by metal.",
            "confidence:0.6275289",
            "transcript: Dave and relax in the cool Greengrass"
        ]
    }
}
```

## Adding Speech To Text insights to an agent
### Prerequisites
* Acquire an API key for the Speech To Text API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Speech To Text Skill.
2. Click the skill to select it, and set the following values in the **Properties** panel:

    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Speech To Text API.

### Add input and output
1. Add a service input.
2. Give the service a name that is unique inside this agent.
3. Select **Audio** as the **Input Type**.
4. Select **SpeechToTextResponse** as the **Output Type**.
5. Click **Add Service**.

### Wiring
1. Select the Speech To Text Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Speech To Text API from the following Service providers.
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

---
title: "Video Analysis JobID Google"
date: "2018-03-26"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "video-analysis-jobid"
    #weight: 4420
---

Returns the JobID for the video Analysis.

## Use cases
- No Use Cases.

## Inputs
Below is a sample input to this skill

```
"input_video": "gs://cloudmleap/video/next/volleyball_court.mp4"
```

## Output
An example output is shown below:

```
{
    "payload": {
        "response": [ "jobid:undefined","feature:SHOT_CHANGE_DETECTION"]
    }
}
```

## Adding Video Analysis JobID Google insights to an agent
### Prerequisites
* Acquire an API key for the Video Analysis JobID Google API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Video Analysis JobID Google Skill.
2. Click the skill to select it, and set the following values in the **Properties** panel:

    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Video Analysis JobID Google API.

### Add input and output
1. Add a service input.
2. Give the service a name that is unique inside this agent.
3. Select **video** as the **Input Type**.
4. Select **Video Analysis JobID Google** as the **Output Type**.
5. Click **Add Service**.

### Wiring
1. Select the Video Analysis JobID GoogleSkill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Video Analysis JobID Google API from the following Service providers.

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

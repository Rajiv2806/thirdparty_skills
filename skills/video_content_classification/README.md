---
title: "Video Content Classification Response"
date: "2018-03-26"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "video-content-classification-response"
    #weight: 4420
---

Returns list of all the explicit content that are identified in the given input video.

## Use cases

- Detects the explicit content in video.

## Inputs
Below is a sample input to this skill

```
"jobName": "us-west1.3327424134633883473"

```

## Output
An example output is shown below:

```
{
    "payload": {
        "response": [
            "jobCompleted:true",
            "totalNoFrames:28",
            "explicitAnnotation.frameNo:0",
            "explicitAnnotation.timeOffset:0.627698s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:1",
            "explicitAnnotation.timeOffset:1.567746s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:2",
            "explicitAnnotation.timeOffset:2.523079s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:3",
            "explicitAnnotation.timeOffset:3.428507s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:4",
            "explicitAnnotation.timeOffset:4.393934s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:5",
            "explicitAnnotation.timeOffset:5.454795s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:6",
            "explicitAnnotation.timeOffset:6.578283s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:7",
            "explicitAnnotation.timeOffset:7.614871s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:8",
            "explicitAnnotation.timeOffset:8.668788s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:9",
            "explicitAnnotation.timeOffset:9.785500s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:10",
            "explicitAnnotation.timeOffset:10.886520s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:11",
            "explicitAnnotation.timeOffset:11.905398s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:12",
            "explicitAnnotation.timeOffset:12.887413s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:13",
            "explicitAnnotation.timeOffset:13.694689s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:14",
            "explicitAnnotation.timeOffset:14.785443s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:15",
            "explicitAnnotation.timeOffset:15.773584s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:16",
            "explicitAnnotation.timeOffset:16.616776s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:17",
            "explicitAnnotation.timeOffset:17.766330s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:18",
            "explicitAnnotation.timeOffset:18.590438s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:19",
            "explicitAnnotation.timeOffset:19.466699s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:20",
            "explicitAnnotation.timeOffset:20.490709s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:21",
            "explicitAnnotation.timeOffset:21.550156s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:22",
            "explicitAnnotation.timeOffset:22.688502s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:23",
            "explicitAnnotation.timeOffset:23.807263s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:24",
            "explicitAnnotation.timeOffset:24.811641s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:25",
            "explicitAnnotation.timeOffset:25.781392s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:26",
            "explicitAnnotation.timeOffset:26.727335s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY",
            "explicitAnnotation.frameNo:27",
            "explicitAnnotation.timeOffset:27.666899s",
            "explicitAnnotation.pornographyLikelihood:VERY_UNLIKELY"
        ]
    }
}

```

## Adding Video Content Classification Response insights to an agent
### Prerequisites
* Acquire an API key for the Video Content Classification Response API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Video Content Classification Response Skill.
2. Click the skill to select it, and set the following values in the **Properties** panel:

    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Video Content Classification Response API.

### Add input and output
1. Add a service input.
2. Give the service a name that is unique inside this agent.
3. Select **video** as the **Input Type**.
4. Select **Video Content Classification Response** as the **Output Type**.
5. Click **Add Service**.

### Wiring
1. Select the Video Content Classification Response Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Video Content Classification Response API from the following Service providers.

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

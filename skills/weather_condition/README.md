---
title: "Weather Condition"
date: "2018-02-02"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "weather-condition"
    #weight: 4420
---
The Weather RSS feed enables you to get up-to-date weather information for your location. You can save this feed in My Yahoo! or your favorite feed aggregator, or incorporate the RSS data into your own web site or client application. The Weather RSS feed is a dynamically-generated feed based on WOEID.

## Use cases
-  Detects up-to-date weather information for your location.

## Inputs
skill takes text as input.A sample example for the input is shown below:

```
 "location":"Austin, TX"
```

## Outputs

An example output for the Weather Condition API is shown below:

```
  "response": {
        "result": {
            "payload": {
                "condition": "Cloudy",
                "location": "Austin, TX",
                "message": "It is 69 degrees in Austin, TX and Cloudy",
                "temperature": "69"
            }
        },
        "status": "success",
        "success": true
    },
```

## Adding Weather Condition insights to an agent
### Prerequisites
* Acquire an API key from Yahoo for the Weather Condition API.

### Add the skill
1. Use **Add** > **Skill** to find and add the Weather Condition Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **Yahoo**.
    * **API Key**: Enter your API Key for the Weather Condition API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **location** as the **Input Type**.
1. Select **Weather Condition Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Weather Condition Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Weather Condition API from **Yahoo** Services.



## Skill development
This skill utilizes the Cortex function service to execute custom code.
The function should be developed and tested before the skill is published to Cortex.
  
Wrapper scripts are provided to assist in developing and deploying your skill.
* `build-function.sh` packages the function in build/function.zip
* `deploy-function.sh` builds and deploys the function via Cortex's function apis
* `test-function.sh` invokes the deployed function via Cortex's function api
* `deploy-skill.sh` deploys the skill definition to Cortex's skill catalog

For more information: https://docs.cortex.insights.ai

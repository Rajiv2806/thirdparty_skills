---
title: "Weather Hourly Forecast"
date: "2018-02-02"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "weather-hourly-forecast"
    #weight: 4420
---
Genetares hourly weather forecast for the next 48 hours starting from the current time, for a specified geolocation.

## Use cases
-  Detects weather conditions of preffered location for the next 48 hours .

## Inputs
skill takes  zipcode value as input.A sample example for the input is shown below:

```
{"latitude":"45.42","longitude":"75.69","zipCode":"78613","hoursToForecast":10}
```

## Outputs

An example output for the Weather Hourly Forecast API is shown below:

```
 {
    "payload": {
        "response": {
            "forecast": [
                {
                    "forecastTimeDay": "2018-04-28T06:00:00-0500-Saturday",
                    "temperature": 14,
                    "uvDescriptionWarning": "Low-0",
                    "weatherPhrase": "M Clear-Mostly Clear-Mostly Clear",
                    "weatherSubPhrase": "Mostly-Clear-"
                },
                {
                    "forecastTimeDay": "2018-04-28T07:00:00-0500-Saturday",
                    "temperature": 14,
                    "uvDescriptionWarning": "Low-0",
                    "weatherPhrase": "M Sunny-Mostly Sunny-Mostly Sunny",
                    "weatherSubPhrase": "Mostly-Sunny-"
                },
                {
                    "forecastTimeDay": "2018-04-28T08:00:00-0500-Saturday",
                    "temperature": 16,
                    "uvDescriptionWarning": "Low-0",
                    "weatherPhrase": "Sunny-Sunny-Sunny",
                    "weatherSubPhrase": "Sunny--"
                },
                {
                    "forecastTimeDay": "2018-04-28T09:00:00-0500-Saturday",
                    "temperature": 19,
                    "uvDescriptionWarning": "Low-0",
                    "weatherPhrase": "Sunny-Sunny-Sunny",
                    "weatherSubPhrase": "Sunny--"
                },
                {
                    "forecastTimeDay": "2018-04-28T10:00:00-0500-Saturday",
                    "temperature": 23,
                    "uvDescriptionWarning": "Moderate-0",
                    "weatherPhrase": "Sunny-Sunny-Sunny",
                    "weatherSubPhrase": "Sunny--"
                },
                {
                    "forecastTimeDay": "2018-04-28T11:00:00-0500-Saturday",
                    "temperature": 25,
                    "uvDescriptionWarning": "High-0",
                    "weatherPhrase": "Sunny-Sunny-Sunny",
                    "weatherSubPhrase": "Sunny--"
                },
                {
                    "forecastTimeDay": "2018-04-28T12:00:00-0500-Saturday",
                    "temperature": 26,
                    "uvDescriptionWarning": "Very High-0",
                    "weatherPhrase": "Sunny-Sunny-Sunny",
                    "weatherSubPhrase": "Sunny--"
                },
                {
                    "forecastTimeDay": "2018-04-28T13:00:00-0500-Saturday",
                    "temperature": 27,
                    "uvDescriptionWarning": "Very High-0",
                    "weatherPhrase": "Sunny-Sunny-Sunny",
                    "weatherSubPhrase": "Sunny--"
                },
                {
                    "forecastTimeDay": "2018-04-28T14:00:00-0500-Saturday",
                    "temperature": 28,
                    "uvDescriptionWarning": "Very High-0",
                    "weatherPhrase": "Sunny-Sunny-Sunny",
                    "weatherSubPhrase": "Sunny--"
                },
                {
                    "forecastTimeDay": "2018-04-28T15:00:00-0500-Saturday",
                    "temperature": 28,
                    "uvDescriptionWarning": "Very High-0",
                    "weatherPhrase": "Sunny-Sunny-Sunny",
                    "weatherSubPhrase": "Sunny--"
                }
            ],
            "metadata": {
                "locationId": "78613:4:US",
                "unitsOfMeasurement": "m"
            }
        }
    }
}
```

## Adding Weather Hourly Forecast insights to an agent
### Prerequisites
* Acquire an API key from IBM Watson for the Weather Hourly Forecast API.

### Add the skill
1. Use **Add** > **Skill** to find and add the Weather Hourly Forecast Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:

    * **Model**: Select **IBM Watson**.
    * **API Key**: Enter your API Key for the Weather Hourly Forecast API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **latitude and longitude**  or **zipCode** or **hoursToForecast** as the **Input Type**.
1. Select **Weather Hourly Forecast Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Weather Hourly Forecast Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Weather Hourly Forecast API from IBM Watson Services.

## Skill development
This skill utilizes the Cortex function service to execute custom code.
The function should be developed and tested before the skill is published to Cortex.
  
Wrapper scripts are provided to assist in developing and deploying your skill.
* `build-function.sh` packages the function in build/function.zip
* `deploy-function.sh` builds and deploys the function via Cortex's function apis
* `test-function.sh` invokes the deployed function via Cortex's function api
* `deploy-skill.sh` deploys the skill definition to Cortex's skill catalog

For more information: https://docs.cortex.insights.ai

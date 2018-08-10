---
title: "Time Series Anomaly detection"
date: "2018-02-06"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "time-series-anomaly-detection"
    #weight:4580
---
This algorithm helps find anomalies in a given time series.

**Input Format**
**Time**: represents datetime key in the format 'YYYY-MM-DD HH:MM:SS'.
The time field should be continuous as no imputation is performed through the code.
This field must be unique. In case of discontinuous time key, the algorithm takes the series as if it were continuous.
**KPI_1**: The metric for which anomalies need to be found.
Testing has been done for various types of metrics like AWS metrics, tweet volumes, traffic distributions etc.
A few of the parameters used in the algorithm can be tuned to get better results. These parameters will be exposed for the users to tweak and visualize results at a later date.

```
..

..

{
    "Time": "2014-02-14 14:37:00",
    "KPI_1": 41.244
  },
  {
    "Time": "2014-02-14 14:42:00",
    "KPI_1": 48.56800000000001
  },
  {
    "Time": "2014-02-14 14:47:00",
    "KPI_1": 46.714
  },
  {
    "Time": "2014-02-14 14:52:00",
    "KPI_1": 44.986000000000004
  },

..

..

..
```

**Expected Output**:
This algorithm returns the list of time stamps where anomalies were detected. Severity of anomalies are not returned as of now, but will be added in future.


## Sample Inputs
```
"data://Wolverine/UpWork/TS.txt"
```

## Sample Outputs
```
{
    "payload": {
        "response": [
            "[Timestamp('2018-02-21 02:00:00'), Timestamp('2018-02-21 04:00:00'), Timestamp('2018-02-21 06:00:00')]"
        ]
    }
}
```

## Use Cases
- IoT.
- Fraud detection.
- IT Ops.


## **Checklist for useful results:**
- 1. The time series data needs to be continuous, that is no imputation or roll up is performed by this code
- 2. It is advisable to not go below 5 minute granularity for each point in the series. So any pre-processing consisting of rolling window computations to denoise the time series needs to be done before calling this function.Time series index continuity still has to be maintained after any such preprocessing.
- 3. Not many configurable parameters are exposed at this point, but will be added later.
- 4. Length of time series is important and hence at least 500 - 1000 data points are needed to make sense of results
- 5. Handles univariate detection in a single call only. Support for multi variate time series detection to be added in the future.
- 6. Please check the input format as given in the below sample run
- 7. Outputs -  List of Timestamps where anomalies were found

***(The input json must have two keys named "Time" and "KPI_1")***

## Adding Fast Anomaly detection to an agent
### Prerequisites
* Acquire an API key from Algorithmia for the Fast Anomaly detection API.

### Add the skill
1. Use **Add** > **Skill** to find and add the Fast Anomaly detection skill.
2. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **Algorithmia**.
    * **API Key**: Enter your API Key for the Fast Anomaly detection API.

### Add input and output
- Add a service input.
- Give the service a name that is unique inside this agent.
- Select **Series** as the **Input Type**.
- Select **FastAnomalydetectionResponse** as the **Output Type**.
- Click **Add Service**.

### Wiring
1. Select the Fast Anomaly detection skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product Attribution
This service leverages the Compare text API from the following Service providers.
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

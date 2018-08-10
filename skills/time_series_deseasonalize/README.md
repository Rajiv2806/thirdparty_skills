---
title: "Time Series Deseasonalize"
date: "2018-01-25"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "time-series-deseasonalize"
    #weight:4580
---

This Removes seasonal components from a time series.

It uses autocorrelation to identify the periods of dominant seasonal components, then subtracts the seasonal average from each point to yield a series of the seasonal residuals.
Because of the autocorrelation step it is recommended that the series be de-trended first as a linear trend may result in undesirable autocorrelation artifacts.

For instance, it has been observed in test cases that removing seasonality from series with a noticeable linear trend and non-zero mean yields a series in which almost all entries are zero, except for points at the beginning and end.

## Use Cases
- This can be used as pre-processing step before feeding the time series to any model to generate forecast.

## Inputs
There are two options, "givenPeriod" and "topNPeriods".

Calling "[[series],k,"givenPeriod"]" subtracts from each point it's period length k seasonal average, removing a seasonal trend with period k.
```
[[1,2,3,2,1,2,1,2,1,2],2,"givenPeriod"]
```

Calling [[series],k,"topNPeriods"] removes the top k strongest seasonal trends as identified by autocorrelation.
```
[[1,2,3,2,1,2,1,2,1,2],2,"topNPeriods"]
```
Calling the algorithm with just the series means the default option, e.g. removing only the strongest seasonal pattern, will be used.


## Outputs
The sample response output is shown below:

```
{"payload": {"response": {"result": [0,0,1,0,0,0,-1,0,0,0]}}}
```

Note that removing a period of length 1 is a linear detrending that subtracts out the mean value, resulting in a series with slope and mean 0.
When removing the top N trends, we ignore periods of length 1, as doing so can cause unwanted artifacts.


## Adding Time Series Deseasonalize to an agent
### Prerequisites
* Acquire an API key from Algorithmia for the Time Series Deseasonalize API.

### Add the skill
1. Use **Add** > **Skill** to find and add the Time Series Deseasonalize skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:

    * **Model**: Select **Algorithmia**.
    * **API Key**: Enter your API Key for the Time Series Deseasonalize API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Series,Seasonality Value and Optional Value** as the **Input Type**.
1. Select **Time Series Deseasonalize Analysis** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Time Series Deseasonalize skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product Attribution
This service leverages the Time Series Deseasonalize API from the following Service providers.
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

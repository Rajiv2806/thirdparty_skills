---
title: "Time Series Moving Average"
date: "2018-02-02"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "time-series-moving-average"
    #weight: 4420
---

Returns the Simple, Exponential, Cumulative Moving Average of a time series.

# Simple Moving Average

This algorithm creates a **Simple Moving Average** for a time series.

### Inputs Simple Moving Average
This algorithm has two input formats; JSON Formatting and Array Formatting.
**JSON Formatting**
- data - _(required)_ - The timeseries input data you wish to create a simple moving average for, this algorithm assumes the values are evenly spaced. (dx(1) == dx(n))
- lagTime - _(optional)_ - The lagtime for the average, if there is a lag of n, each point is replaced by the average of itself and the n points that proceeded it, or, if the point is within the lag factor of the the start of the series, with the average of it and all earlier points.
```
{"data": [0,1,2,3,4,5,6,20,8,9,10,11,12],"lagTime": 5}
```
**Array Formatting**
- data - _(required)_ - The timeseries input data you wish to create a simple moving average for, this algorithm assumes the values are evenly spaced. (dx(1) == dx(n))
- lagTime - _(optional)_ - The lagtime for the average, if there is a lag of n, each point is replaced by the average of itself and the n points that proceeded it, or, if the point is within the lag factor of the the start of the series, with the average of it and all earlier points.
```
[[0,1,2,3,4,5,6,20,8,9,10,11,12],5]
```

### Outputs Simple Moving Average
This algorithm has json output for json input, and array output for array input.
```
{"payload": {"response": {"output": [0, 0.5, 1, 1.5, 2, 3, 4, 7.6, 8.6, 9.6, 10.6, 11.6, 10]}}}
```

# Exponential Moving Average
This algorithm creates a **Exponential Moving Average** for a time series.
This can be used to smooth or denoise a time series.

### Inputs Exponential Moving Average

- data - _(required)_ - The timeseries input data you wish to create a Exponential moving average for, this algorithm assumes the values are evenly spaced. (dx(1) == dx(n))
- lagTime - _(optional)_ - The user can optionally supply an alpha parameter (specifying how heavily the past is weighted) as second argument. If not supplied a default of 0.5 is used.
```
[[0,1,2,3,4,5,6,20,8,9,10,11,12],0.5]
```

### Outputs Exponential Moving Average
The uniformly spaced Y coordinate datapoints that create the Exponential Moving Average.
```
{"payload": {"response": {"output": [0.1,0.5,1.3,4.15,4.07,4.54,5.470000000000001]}}}
```

# Cumulative Moving Average
Returns the Cumulative Moving Average of a time series.
That is, each point is replaced by the average of itself and all the points proceeding it.
This can be used to smooth a time series.

### Inputs Cumulative Moving Average
- data - _(required)_ - The timeseries input data you wish to create a Cumulative moving average for, this algorithm assumes the values are evenly spaced. (dx(1) == dx(n))
```
[1,2,3,4,3,4,6,7,5,4,2,1,1]
```

### Outputs Cumulative Moving Average
The uniformly spaced Y coordinate datapoints that create the Cumulative Moving Average.

```
{"payload": {"response": {"output":[1,1.5,2,2.5,2.6,2.8333333333333335,3.2857142857142856,3.75,3.888888888888889,3.9,3.727272727272727,3.5,3.3076923076923075]}}}
```

## Use cases
- Stock Price Forecast.
- Weather Forecast.

## Adding Time Series Moving Average insights to an agent
### Prerequisites
* Acquire an API key from Algorithmia for the Time Series Moving Average API.

### Add the skill
1. Use **Add** > **Skill** to find and add the Time Series Moving Average Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **Algorithmia**.
    * **API Key**: Enter your API Key for the Time Series Moving Average API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **series** as the **Input Type**.
1. Select **TimeSeriesMovingAverageResponse** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Time Series Moving Average Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Time Series Moving Average API from the following Service providers.
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

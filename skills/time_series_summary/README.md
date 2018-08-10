---
title: "Time Series Summary"
date: "2018-03-21"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "time-series-summary"
    weight: 4420
---

Time series summary takes time series data as an input and gives the summary statistics of the time series like: Mean, Variance, Standard Deviation, min value, max value, slope, intercept value etc.., . These will be helpful in basic understanding of the time series that data that has been provided.

## Use cases
- Stock market analysis.

## Inputs
The algorithm has 2 input formats, JSON and Array Format.

#### JSON Format

**uniformly spaced input**
Input is a 1D array filled with uniformly spaced y coordinates
```
{"uniformData": [0,1,2,3,4,5]}
```

**Variably Spaced Input**
Input is a 2D array where with the first axis X and second Y
```
{"dynamicData": [[1,2,3,4,5],[1,2,3,4,5]]}
```


#### Array Format

**uniformly spaced input**
Input is a 1D array filled with uniformly spaced y coordinates.
```
[1.0,2.0,3.0,4.0,5.0,6.0,6.5]
```

**Variably Spaced Input**
x – X axis of the resultant 2D dataset. y - Y axis of the resultant 2D dataset.
```
[[1,2,3,4,5,6,7,8,9,10],[2,4,6,8,10,12,14,12,11]]
```

## Outputs
An sample output is shown below:

```
{
    "payload": {
        "response": [
            "correlation:0.9973406565808504",
            "geometricMean:3.344420186790205",
            "intercept:1.0892857142857142",
            "kurtosis:-1.3943599579484625",
            "max:6.5",
            "mean:3.928571428571429",
            "min:1",
            "populationVariance:3.602040816326531",
            "rmse:0.13832083379312216",
            "skewness:-0.1616826604187925",
            "slope:0.9464285714285714",
            "standardDeviation:2.0499709637897197",
            "var:4.2023809523809526"
        ]
    }
}
```

- max – The maximum value of the dataset.
- min – The minimum value of the dataset.
- geometricMean – The Geometric Mean of the dataset.
- populationVariance – The Population Variance of the dataset
- slope – The slope (y2-y1)/(x2-x1) of the dataset.
- kurtosis – The Kurtosis of the dataset.
- correlation – the Correlation between X & Y for the dataset.
- intercept – The y intercept for the dataset.
- mean – The average Y value for the dataset.
- rmse – The Root Mean Square Deviation of the dataset.
- skewness – The Skewness of the dataset.
- standardDeviation - The Standard Deviation of the dataset.

## Adding Time Series Summary insights to an agent
### Prerequisites
* Acquire an API key for the Time Series Summary API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Time Series Summary Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Time Series Summary API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Series** as the **Input Type**.
1. Select **Time Series Summary Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Time Series Summary Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Time Series Summary API from the following Service providers.
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

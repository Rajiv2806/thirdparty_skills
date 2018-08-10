---
title: "Time Series Detrend"
date: "2018-01-25"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "time-series-detrend"
    #weight:4580
---

Takes a time series dataset, fits a linear trend to the data, and returns the dataset with the linear trend subtracted out.

## Use Cases
- This can be used as pre-processing step before feeding the time series to any model to generate forecast.

## Inputs
You can pass the inputs to this in two different different formats: JSON amd Array Format.

#### > JSON Format
You must set either uniformlySpaced or variablySpaced json values,
**uniformly spaced**
- uniformlySpaced - (pick one) - dataset is a 1D array filled with uniformly spaced y coordinates, assumes all datapoints are uniformly spaced in the X axis
```
{"uniformlySpaced": [1,2,3,4,3,4,6,7,5,4,2,1,1]}
```
**variably spaced**
- variablySpaced - (pick one) - Dataset is a 2D array where with the first axis X and second Y (IE: input[X][Y]). both arrays must be the same size.
```
{"variablySpaced": [[1,2,3,4,5,6,6.5,7,8.5,9,10,11,12],[1,2,3,4,3,4,6,7,5,4,2,1,1]]}
```

#### > Array Format
**uniformly spaced**
```
[[1,2,3,4,3,4,6,7,5,4,2,1,1]]
```
**variably spaced**
- first - (required) - if second is not defined, this field defines the dataset's Y axis, and assumes that all datapoints are uniformly spaced in the X axis.
- second - (optional) - if defined, first becomes the X axis coordinates for each datapoint, and second becomes the Y axis for each datapoint.
```
[[1,2,4,8,16,32,64,128,256,512],[1,2,3,4,3,4,6,7,5,4]]
```


## Outputs

- This algorithm output's in the same format it recieved input:

#### JSON Format

```
{
    "payload": {
        "response": {"output": [
                                  -2.373626373626374,
                                  -1.3626373626373631,
                                  -0.3516483516483522,
                                  0.6593406593406588,
                                  -0.3296703296703303,
                                  0.6813186813186807,
                                  2.6923076923076916,
                                  3.7032967032967026,
                                  1.7142857142857135,
                                  0.7252747252747245,
                                  -1.2637362637362641,
                                  -2.252747252747253,
                                  -2.241758241758242
                    ]}
    }
}
```

#### Array Format
```
{
    "payload": {
        "response": [
                      -2.373626373626374,
                      -1.3626373626373631,
                      -0.3516483516483522,
                      0.6593406593406588,
                      -0.3296703296703303,
                      0.6813186813186807,
                      2.6923076923076916,
                      3.7032967032967026,
                      1.7142857142857135,
                      0.7252747252747245,
                      -1.2637362637362641,
                      -2.252747252747253,
                      -2.241758241758242
            ]}
}
```



## Adding Time Series Detrend to an agent
### Prerequisites
* Acquire an API key from Algorithmia for the Time Series Detrend API.

### Add the skill
1. Use **Add** > **Skill** to find and add the Time Series Detrend skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:

    * **Model**: Select **Algorithmia**.
    * **API Key**: Enter your API Key for the Time Series Detrend API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **series** as the **Input Type**.
1. Select **Time Series Detrend Analysis** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Time Series Detrend skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product Attribution
This service leverages the Time Series Detrend API from the following Service providers.
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

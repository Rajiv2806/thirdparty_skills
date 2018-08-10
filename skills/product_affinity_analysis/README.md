---
title: "Product Affinity Analysis"
date: "2018-03-21"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "product-affinity-analysis"
    weight: 4420
---

This API finds the frequent patterns within large datasets. For example, it could be used to find Association Rules and develop collaborative-filtering  systems, such as "Other people also bought".

## Use Case
- This is used in technique called Market Basket Analysis for bundling different products and to find the hidden patterns in the data.



## Inputs
This algorithm takes three arguments:

Dataset: path to a local (data://...) dataset, where each line represents a single transaction and each item is separated by whitespace. (See Example file).
Support: represents the minimum frequency for a pattern to be recognized. In most cases you'll want to increase this number to reduce the size of the output.
MinItems: represents the minimum number of items (per association rule). Having the value of this argument as 1 will return each unique item in the dataset and the number of times they appeared. Most applications would require a number higher than 1.

Below is a sample input to this skill:

```
"text": ["data://Rajesh182954/test/test.txt",2,1]
```

## Outputs
Output: optionally specify a local (data://...) location to which the output JSON should be written. This is required for result sets exceeding 10Mb in size..

An example output is shown below:
```
{
    "payload": {
        "response": [
            "items:coffee,cock,biscuit,cornflakes",
            "support:2",
            "items:bread,tea,bournvita",
            "support:2",
            "items:bread,coffee,suger",
            "support:2"
        ]
    }
}

```

## Adding Product Affinity Analysis insights to an agent
### Prerequisites
* Acquire an API key for the Product Affinity Analysis API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Product Affinity Analysis Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Product Affinity Analysis API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Text** as the **Input Type**.Provide image link in text
1. Select **Product Affinity Analysis Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Product Affinity Analysis Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Product Affinity Analysis API from the following Service providers.
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

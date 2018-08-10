---
title: "Sentiment Analysis"
date: "2018-03-22"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "sentiment-analysis"
    #weight: 4420
---

Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE).

## Use cases

- Can be used by companies to know about the product performance.

## Inputs
Below is a sample input to this skill:

```
 "input_text": "I had a wonderful experience! The rooms were wonderful and the staff was helpful."
```

## Output
An example output is shown below:

```
{
    "payload": {
        "response": [
            "label:Positive"
            "score:0.9911914467811584"
        ]
    }
}

```

## Adding Sentiment Analysis insights to an agent
### Prerequisites
* Acquire an API key for the Sentiment Analysis API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Sentiment Analysis Skill.
2. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Sentiment Analysis API.

### Add input and output
1. Add a service input.
2. Give the service a name that is unique inside this agent.
3. Select **Text** as the **Input Type**.
4. Select **Sentiment Analysis Response** as the **Output Type**.
5. Click **Add Service**.

### Wiring
1. Select the Sentiment Analysis Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Sentiment Analysis API from the following Service providers.
* **AWS**
* **Microsoft**
* **Google**
* **IBM**
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

---
title: "Sentiment By List"
date: "2018-02-02"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "sentiment-by-list"
    #weight: 4420
---

This API will Identify and extract sentiment in given English string using  natural language processing, text analysis and computational linguistics to identify and extract subjective information in source materials.
## Use cases
- Gives the positive, negative and neutral sentiment of an English sentence.

## Inputs
(Required):  String sentence* or A list of strings**
Below is a sample input to this skill:

```
"text": {"sentenceList": ["After modi get elected as PM, Forces diving Hindus are very Successful.but the most saddening part is that modi is doing nothing. nothing.","Akhilesh guns for Adityanath as father of alleged rape victim dies in police custody","US wants visa applicants to submit phone, email, social media details"]}
```

## Outputs
Sentiment* of given sentence(s).

*Note: 4 sentiment types are returned: Positive, negative, neutral & compound. The first three sentiments scale from 0 to 1. Compound sentiment is the overall sentiment, where it scales between -1 to 1, negative to positive respectively.
An example output is shown below:

```
{
    "payload": {
        "response": [
            "sentence-1.positive:0.05",
            "sentence-1.compound:-0.4927",
            "sentence-1.negative:0.135",
            "sentence-1.neutral:0.814",
            "sentence-2.positive:0",
            "sentence-2.compound:-0.7783",
            "sentence-2.negative:0.362",
            "sentence-2.neutral:0.638",
            "sentence-3.positive:0",
            "sentence-3.compound:0",
            "sentence-3.negative:0",
            "sentence-3.neutral:1"
        ]
    }
}
```

## Adding Sentiment By List insights to an agent
### Prerequisites
* Acquire an API key for the Sentiment By List API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Sentiment By List Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Sentiment By List API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Text** as the **Input Type**.
1. Select **Sentiment By List Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Sentiment By List Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Sentiment By List API from the following Service providers.
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

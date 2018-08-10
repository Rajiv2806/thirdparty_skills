---
title: "Sentiment By Term"
date: "2018-03-21"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "sentiment-by-term"
    weight: 4420
---

Sentiment By Term algorithm analyses a document to find the approximate sentiment associated with each of a given set of terms. It does this by splitting the document into sentences and computing, for each provided term the average sentiment of all sentences containing that term. Sentiments are scored between 0-4. (Very Negative, Negative, Neutral, Positive, Very Positive)


## Use cases

- Detects the sentiment of the given words in a text document.


## Inputs

Below is a sample input to this skill:

```
"text": [
  "After days of controversy over whether he would blur the lines between American foreign policy and his family’s real estate business during a trip to India to sell condos, Donald Trump Jr. on Friday abandoned plans to give a policy speech and instead gave an interview with an Indian journalist, sticking to safe topics.His remarks in the interview — about his father’s successful 2016 presidential campaign, how little the family sees him now, and India’s great entrepreneurial spirit — were so anodyne that when the Bollywood star Shah Rukh Khan entered the room near the end of the interview, people lifted their phones to take photos of the actor and stopped paying attention to the oldest child of America’s president.“I’m here as a businessman,” Mr. Trump told a crowd of about 2,000 business and political leaders, who were gathered for the annual business conference hosted by India’s most powerful media company, The Times Group. “I’m not representing anyone.”But his efforts to distance himself from administration policy were met with some skepticism.“Though he claims that it’s not an official speech, we take it as an official statement,” said P. V. Sunil, a managing director of a company that builds malls and cinema complexes in India and Singapore. “He speaks to his father more than anyone here.”Mr. Trump has spent the last week in India promoting new luxury housing projects in the country, the biggest foreign market for Trump real estate interests outside of North America.",
  ["Trump","Shah Rukh Khan"]]"
```
## Outputs

An example output is shown below:
```
{
    "payload": {
        "response": [
            "sentimentScore.shah rukh khan:1",
            "sentimentScore.trump:1.6666666666666667"
        ]
    }
}

```

## Adding Sentiment By Term insights to an agent
### Prerequisites
* Acquire an API key for the Sentiment By Term API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Sentiment By Term Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Sentiment By Term API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Text** as the **Input Type**.
1. Select **Sentiment By Term Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Sentiment By Term Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Sentiment By Term API from the following Service providers.
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

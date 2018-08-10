---
title: "Content Summarizer Text"
date: "2018-03-22"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "text-content-summarizer"
    weight: 4420
---

Identify the important parts in the given input text and summarizes the content.

## Use cases
- When a short description of the input text is reqd.

## Inputs
Below is a sample input to this skill:

```
"text": "A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution. Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending. We propose a solution to the double-spending problem using a peer-to-peer network. The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work. The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from the largest pool of CPU power. As long as a majority of CPU power is controlled by nodes that are not cooperating to attack the network, they'll generate the longest chain and outpace attackers. The network itself requires minimal structure. Messages are broadcast on a best effort basis, and nodes can leave and rejoin the network at will, accepting the longest proof-of-work chain as proof of what happened while they were gone."
```


## Outputs
Below is a sample input to this skill:


```
{
    "payload": {
        "response": {
            "textSummary": "As long as a majority of CPU power is controlled by nodes that are not cooperating to attac
k the network, they'll generate the longest chain and outpace attackers...Messages are broadcast on a best effort basis,
 and nodes can leave and rejoin the network at will, accepting the longest proof-of-work chain as proof of what happened
 while they were gone...",
            "wordSummary": [
                "network",
                "chain",
                "proof-of-work",
                "proof",
                "double-spending",
                "peer-to-peer",
                "node",
                "cpu",
                "party",
                "power",
                "hash-based",
                "propose",
                "outpace",
                "purely",
                "pool",
                "institution",
                "generate",
                "cooperating",
                "prevent",
                "happened",
                "leave",
                "financial",
                "main",
                "transaction",
                "digital",
                "attacker",
                "record",
                "attack",
                "redoing",
                "electronic",
                "structure"
            ]
        }
    }
}
```

## Adding Content Summarizer Text insights to an agent
### Prerequisites
* Acquire an API key for the Content Summarizer Text API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Content Summarizer Text Skill.
2. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Content Summarizer Text API.

### Add input and output
1. Add a service input.
2. Give the service a name that is unique inside this agent.
3. Select **Text** as the **Input Type**.
4. Select **Content Summarizer Text Response** as the **Output Type**.
5. Click **Add Service**.

### Wiring
1. Select the Content Summarizer Text Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Content Summarizer Text API from the following Service providers.
* **Algorithmia - NLP**
* **Algorithmia - SummarAI**

## Skill development
This skill utilizes the Cortex function service to execute custom code.
The function should be developed and tested before the skill is published to Cortex.
  
Wrapper scripts are provided to assist in developing and deploying your skill.
* `build-function.sh` packages the function in build/function.zip
* `deploy-function.sh` builds and deploys the function via Cortex's function apis
* `test-function.sh` invokes the deployed function via Cortex's function api
* `deploy-skill.sh` deploys the skill definition to Cortex's skill catalog

For more information: https://docs.cortex.insights.ai

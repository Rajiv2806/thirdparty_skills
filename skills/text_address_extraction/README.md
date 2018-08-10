---
title: "Text Address Extraction "
date: "2018-02-06"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "text_address-extraction"
    weight: 4420
---

Identifies the contact information form the given text input like the: company name, city, country, phone number, street name.

**NOTE**: This Alogrithm is currently trained only on: Germany, Austria and Switzerland.

## Use cases
- Can ube used by courier services and logistics teams for faster and automatic processing of addresses.

## Inputs
This skill takes an text as an input.
Below is a sample input to this skill:

```
"netEstate GmbH, Geisenhausener Straße 11a, 81379 München, T +49 89 32197780, F +49 89 32197789, Amtsgericht München HRB Nr.142452, USt-IdNr. DE221033342, Geschäftsführer: Michael Brunnbauer"
```

## Outputs

'results' contains the extracted data (may be empty if no relevant addresses are found). 
country, zip, city, street, company, phone number.

An example output of the Address Extraction From Text Skill is shown below:

```

    {
    "payload": {
        "response": [
            {
                "city": "Surry Hills",
                "company": "",
                "country": "AU",
                "phone": "",
                "street": "",
                "zip": "2010"
            },
            {
                "city": "München",
                "company": "",
                "country": "DE",
                "phone": "",
                "street": "Geisenhausener Straße 11a",
                "zip": "81379"
            }
        ]
    }
}
```

## Adding Text Address Extraction insights to an agent
### Prerequisites
* Acquire an API key for the Text Address Extraction API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Text Address Extraction Skill.
2. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Text Address Extraction API.

### Add input and output
1. Add a service input.
2. Give the service a name that is unique inside this agent.
3. Select **Text** as the **Input Type**.
4. Select **Text Address Extraction Response** as the **Output Type**.
5. Click **Add Service**.

### Wiring
1. Select the Text Address Extraction Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Text Address Extraction API from the following Service providers.

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

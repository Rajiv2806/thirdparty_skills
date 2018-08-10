---
title: "Optical Charecter Recognition(OCR)"
date: "2018-03-21"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "ocr"
    weight: 4420
---

OCR Api detects text in an image and extract recognized characters into a machine-usable character stream.

## Use cases
- Detects the text in an image .

## Inputs
This skill takes an image url as an input.
Below is a sample input to this skill:

```
"text":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Atomist_quote_from_Democritus.png/338px-Atomist_quote_from_Democritus.png"
```


## Outputs
The output of the OCR Skill is a series of key/value pairs that detected words and attributes . An example output is shown below:

```
{
    "payload": {
        "response": [
            "word:NOTHING",
            "boundingBox.height:28",
            "boundingBox.left:16",
            "boundingBox.top:288",
            "boundingBox.width:41",
            "word:EXISTS",
            "boundingBox.height:27",
            "boundingBox.left:66",
            "boundingBox.top:283",
            "boundingBox.width:52",
            "word:EXCEPT",
            "boundingBox.height:27",
            "boundingBox.left:128",
            "boundingBox.top:292",
            "boundingBox.width:49",
            "word:ATOMS",
            "boundingBox.height:24",
            "boundingBox.left:188",
            "boundingBox.top:292",
            "boundingBox.width:54",
            "word:AND",
            "boundingBox.height:22",
            "boundingBox.left:253",
            "boundingBox.top:105",
            "boundingBox.width:32",
            "word:EMPTY",
            "boundingBox.height:144",
            "boundingBox.left:253",
            "boundingBox.top:175",
            "boundingBox.width:32",
            "word:SPACE.",
            "boundingBox.height:21",
            "boundingBox.left:298",
            "boundingBox.top:304",
            "boundingBox.width:60",
            "word:Everything",
            "boundingBox.height:26",
            "boundingBox.left:387",
            "boundingBox.top:210",
            "boundingBox.width:37",
            "word:else",
            "boundingBox.height:249",
            "boundingBox.left:389",
            "boundingBox.top:71",
            "boundingBox.width:27",
            "word:is",
            "boundingBox.height:127",
            "boundingBox.left:431",
            "boundingBox.top:31",
            "boundingBox.width:29",
            "word:opinion.",
            "boundingBox.height:172",
            "boundingBox.left:431",
            "boundingBox.top:153",
            "boundingBox.width:36"
        ]
    }
}


```

## Adding OCR insights to an agent
### Prerequisites
* Acquire an API key for the OCR API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the OCR Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the OCR API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Text** as the **Input Type**.Provide image link in text
1. Select **OCR Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the OCR Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the OCR API from the following Service providers.
* **AWS**
* **Google**
* **Microsoft**

## Skill development
This skill utilizes the Cortex function service to execute custom code.
The function should be developed and tested before the skill is published to Cortex.
  
Wrapper scripts are provided to assist in developing and deploying your skill.
* `build-function.sh` packages the function in build/function.zip
* `deploy-function.sh` builds and deploys the function via Cortex's function apis
* `test-function.sh` invokes the deployed function via Cortex's function api
* `deploy-skill.sh` deploys the skill definition to Cortex's skill catalog

For more information: https://docs.cortex.insights.ai

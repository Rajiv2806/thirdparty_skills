---
title: "Car Make And Model Recognition"
date: "2018-02-02"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "car-make-and-model-recognition"
    #weight: 4420
---

This algorithm provides a solution to classify cars by their make, model, body style and model year from images. The capabilities provided so far are as follows:

Recognizing over 2400 car models
Detection from multiple angles
Coverage of a great portion of Western brands and models, from 2000 (and older) to present
Providing top 3 most accurate results

## Use cases
- to classify cars by their make, model, body style and model year from images.

## Inputs
(Required): Image URL. The image should be in JPEG or PNG format. 

Below is a sample input to this skill:

```
{"image_url": "http://pngimg.com/uploads/suzuki/suzuki_PNG12303.png"}

```

## Outputs
The algorithm will return a top 3 of car models, ordered by confidence in the prediction.

*Note: All images will be resized to 256x256 pixels. Images are downloaded with Algorithmia's SmartImageDownloader utility ( https://algorithmia.com/algorithms/util/SmartImageDownloader ).

An example output is shown below:

```
{
    "payload": {
        "response": [
            "prediction-1.confidenceScore: 0.98",
            "prediction-1.bodyStyle: Hatchback",
            "prediction-1.model: Swift",
            "prediction-1.year: 2010",
            "prediction-1.make: Suzuki",
            "prediction-2.confidenceScore: 0.02",
            "prediction-2.bodyStyle: Hatchback",
            "prediction-2.model: Swift",
            "prediction-2.year: 2004",
            "prediction-2.make: Suzuki",
            "prediction-3.confidenceScore: 0.00",
            "prediction-3.bodyStyle: Hatchback",
            "prediction-3.model: Yaris",
            "prediction-3.year: 2011",
            "prediction-3.make: Toyota"
        ]
    }
}
```

## Adding Car make and model recognition insights to an agent
### Prerequisites
* Acquire an API key for the Car make and model recognition API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Car make and model recognition Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Car make and model recognition API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Image Url** as the **Input Type** and pass image url.
1. Select **Car make and model recognition Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Car make and model recognition Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Car make and model recognition API from the following Service providers.
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

---
title: "Video Shot Change Analysis Response"
date: "2018-03-26"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "video-shot-change-analysis-response"
    #weight: 4420
---

Returns list of all the shot changes that are identified in the given input video.

## Use cases

- Detects the shot changes in video.

## Inputs
Below is a sample input to this skill

```
"jobName": "us-west1.3327424134633883473"

```

## Output
An example output is shown below:

```
{
    "payload": {
        "response": [
            "jobCompleted:true",
            "totalNoShotsDetected:84",
            "shotAnnotations:starttimeEndtime-0: 0s - 2.433333s",
            "shotAnnotations:starttimeEndtime-1: 2.466666s - 4.700s",
            "shotAnnotations:starttimeEndtime-2: 4.733333s - 6.333333s",
            "shotAnnotations:starttimeEndtime-3: 6.366666s - 12.433333s",
            "shotAnnotations:starttimeEndtime-4: 12.466666s - 16.100s",
            "shotAnnotations:starttimeEndtime-5: 16.133333s - 18.833333s",
            "shotAnnotations:starttimeEndtime-6: 18.866666s - 22.733333s",
            "shotAnnotations:starttimeEndtime-7: 22.766666s - 24.366666s",
            "shotAnnotations:starttimeEndtime-8: 24.400s - 26.366666s",
            "shotAnnotations:starttimeEndtime-9: 26.400s - 28.200s",
            "shotAnnotations:starttimeEndtime-10: 28.233333s - 29.733333s",
            "shotAnnotations:starttimeEndtime-11: 29.766666s - 31.433333s",
            "shotAnnotations:starttimeEndtime-12: 31.466666s - 37.833333s",
            "shotAnnotations:starttimeEndtime-13: 37.866666s - 39.733333s",
            "shotAnnotations:starttimeEndtime-14: 39.766666s - 41.633333s",
            "shotAnnotations:starttimeEndtime-15: 41.666666s - 43.533333s",
            "shotAnnotations:starttimeEndtime-16: 43.566666s - 45.366666s",
            "shotAnnotations:starttimeEndtime-17: 45.400s - 51.733333s",
            "shotAnnotations:starttimeEndtime-18: 51.766666s - 54.566666s",
            "shotAnnotations:starttimeEndtime-19: 54.600s - 57.166666s",
            "shotAnnotations:starttimeEndtime-20: 57.200s - 61.200s",
            "shotAnnotations:starttimeEndtime-21: 61.233333s - 69.533333s",
            "shotAnnotations:starttimeEndtime-22: 69.566666s - 71.700s",
            "shotAnnotations:starttimeEndtime-23: 71.733333s - 74.400s",
            "shotAnnotations:starttimeEndtime-24: 74.433333s - 78.500s",
            "shotAnnotations:starttimeEndtime-25: 78.533333s - 80.900s",
            "shotAnnotations:starttimeEndtime-26: 80.933333s - 82.733333s",
            "shotAnnotations:starttimeEndtime-27: 82.766666s - 90.300s",
            "shotAnnotations:starttimeEndtime-28: 90.333333s - 92.200s",
            "shotAnnotations:starttimeEndtime-29: 92.233333s - 94.200s",
            "shotAnnotations:starttimeEndtime-30: 94.233333s - 97s",
            "shotAnnotations:starttimeEndtime-31: 97.033333s - 99.900s",
            "shotAnnotations:starttimeEndtime-32: 99.933333s - 104s",
            "shotAnnotations:starttimeEndtime-33: 104.033333s - 105.366666s",
            "shotAnnotations:starttimeEndtime-34: 105.400s - 106.600s",
            "shotAnnotations:starttimeEndtime-35: 106.633333s - 110.966666s",
            "shotAnnotations:starttimeEndtime-36: 111s - 113.333333s",
            "shotAnnotations:starttimeEndtime-37: 113.366666s - 115.433333s",
            "shotAnnotations:starttimeEndtime-38: 115.466666s - 116.966666s",
            "shotAnnotations:starttimeEndtime-39: 117s - 118.800s",
            "shotAnnotations:starttimeEndtime-40: 118.833333s - 120.366666s",
            "shotAnnotations:starttimeEndtime-41: 120.400s - 121.700s",
            "shotAnnotations:starttimeEndtime-42: 121.733333s - 123.700s",
            "shotAnnotations:starttimeEndtime-43: 123.733333s - 125.366666s",
            "shotAnnotations:starttimeEndtime-44: 125.400s - 126.900s",
            "shotAnnotations:starttimeEndtime-45: 126.933333s - 128.666666s",
            "shotAnnotations:starttimeEndtime-46: 128.700s - 129.966666s",
            "shotAnnotations:starttimeEndtime-47: 130s - 131.233333s",
            "shotAnnotations:starttimeEndtime-48: 131.266666s - 133.566666s",
            "shotAnnotations:starttimeEndtime-49: 133.600s - 135.600s",
            "shotAnnotations:starttimeEndtime-50: 135.633333s - 137.300s",
            "shotAnnotations:starttimeEndtime-51: 137.333333s - 138.700s",
            "shotAnnotations:starttimeEndtime-52: 138.733333s - 140.033333s",
            "shotAnnotations:starttimeEndtime-53: 140.066666s - 141.266666s",
            "shotAnnotations:starttimeEndtime-54: 141.300s - 143.200s",
            "shotAnnotations:starttimeEndtime-55: 143.233333s - 146.600s",
            "shotAnnotations:starttimeEndtime-56: 146.633333s - 148.166666s",
            "shotAnnotations:starttimeEndtime-57: 148.200s - 149.833333s",
            "shotAnnotations:starttimeEndtime-58: 149.866666s - 152.500s",
            "shotAnnotations:starttimeEndtime-59: 152.533333s - 154.833333s",
            "shotAnnotations:starttimeEndtime-60: 154.866666s - 157.833333s",
            "shotAnnotations:starttimeEndtime-61: 157.866666s - 160.066666s",
            "shotAnnotations:starttimeEndtime-62: 160.100s - 162.266666s",
            "shotAnnotations:starttimeEndtime-63: 162.300s - 163.500s",
            "shotAnnotations:starttimeEndtime-64: 163.533333s - 165.900s",
            "shotAnnotations:starttimeEndtime-65: 165.933333s - 168.400s",
            "shotAnnotations:starttimeEndtime-66: 168.433333s - 170.733333s",
            "shotAnnotations:starttimeEndtime-67: 170.766666s - 172.133333s",
            "shotAnnotations:starttimeEndtime-68: 172.166666s - 174.633333s",
            "shotAnnotations:starttimeEndtime-69: 174.666666s - 177.066666s",
            "shotAnnotations:starttimeEndtime-70: 177.100s - 178.200s",
            "shotAnnotations:starttimeEndtime-71: 178.233333s - 179.333333s",
            "shotAnnotations:starttimeEndtime-72: 179.366666s - 181.433333s",
            "shotAnnotations:starttimeEndtime-73: 181.466666s - 183.266666s",
            "shotAnnotations:starttimeEndtime-74: 183.300s - 185.700s",
            "shotAnnotations:starttimeEndtime-75: 185.733333s - 188.133333s",
            "shotAnnotations:starttimeEndtime-76: 188.166666s - 189.933333s",
            "shotAnnotations:starttimeEndtime-77: 189.966666s - 191.966666s",
            "shotAnnotations:starttimeEndtime-78: 192s - 193.533333s",
            "shotAnnotations:starttimeEndtime-79: 193.566666s - 194.933333s",
            "shotAnnotations:starttimeEndtime-80: 194.966666s - 196.533333s",
            "shotAnnotations:starttimeEndtime-81: 196.566666s - 198.233333s",
            "shotAnnotations:starttimeEndtime-82: 198.266666s - 203.466666s",
            "shotAnnotations:starttimeEndtime-83: 203.500s - 215.966666s"
        ]
    }
}

```

## Adding Video Shot Change Analysis Response insights to an agent
### Prerequisites
* Acquire an API key for the Video Shot Change Analysis Response API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Video Shot Change Analysis Response Skill.
2. Click the skill to select it, and set the following values in the **Properties** panel:

    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Video Shot Change Analysis Response API.

### Add input and output
1. Add a service input.
2. Give the service a name that is unique inside this agent.
3. Select **video** as the **Input Type**.
4. Select **Video Shot Change Analysis Response** as the **Output Type**.
5. Click **Add Service**.

### Wiring
1. Select the Video Shot Change Analysis Response Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Video Shot Change Analysis Response API from the following Service providers.
* **Google**

## Skill development
This skill utilizes the Cortex function service to execute custom code.
The function should be developed and tested before the skill is published to Cortex.
  
Wrapper scripts are provided to assist in developing and deploying your skill.
* `build-function.sh` packages the function in build/function.zip
* `deploy-function.sh` builds and deploys the function via Cortex's function apis
* `test-function.sh` invokes the deployed function via Cortex's function api
* `deploy-skill.sh` deploys the skill definition to Cortex's skill catalog

For more information: https://docs.cortex.insights.ai

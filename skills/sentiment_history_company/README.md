---
title: "Sentiment History Company"
date: "2018-02-02"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "sentiment-history-company"
    #weight: 4420
---
Equity news sentiment for smarter investment decisions. News Sentiment is derived from millions of web sources.
Sentiment Score: A measure of the bullishness / bearishness of the language used in media for a given stock on a given day. Ranges from -5 (extremely negative coverage) to +5 (extremely positive coverage); a score of 0 indicates an absence of articles for that day.
Sentiment High: The occurring in the course of a single day. Maximum value of the sentiment score, polled at 5 minutes intervals.
Sentiment Low: The occurring in the course of a single day. Minimum value of the sentiment score, polled at 5 minutes intervals.
News Volume: Volume of news provides a good indicator of a trend breakout. The number of news articles about this stock, published and parsed on a given day.
News Buzz: The buzz score measures the change in the standard deviation of periodic news volume. A measure of the rate of change in news coverage of a given stock on a given day, normalized on a scale of 1 to 10.

## Use cases
- News Sentiment is derived from millions of web sources.

## Inputs
The input to this skill is.

```
{"companyId":"c_94","ndays":"28"}
```

## Outputs

```
{
    "payload": {
        "response": {
            "metadata": {
                "content_type": "json",
                "duration": 51.054726503
            },
            "result": {
                "Debug": null,
                "Message": "Request OK. Request OK. {0}",
                "Result": {
                    "data": [
                        {
                            "end_date": "2018-03-19",
                            "name": "APPLE INC",
                            "sector_id": "s_45",
                            "sector_name": "IT",
                            "sentiment": [
                                {
                                    "buzz": 2,
                                    "date": "17-04-2018",
                                    "high": 8.155,
                                    "low": 5.845,
                                    "sentiment": 7,
                                    "timestamp": 1523947665,
                                    "volume": 6
                                },
                                {
                                    "buzz": 10,
                                    "date": "16-04-2018",
                                    "high": 7.655,
                                    "low": 3.202,
                                    "sentiment": 5.429,
                                    "timestamp": 1523915999,
                                    "volume": 28
                                },
                                {
                                    "buzz": 7,
                                    "date": "15-04-2018",
                                    "high": 6.942,
                                    "low": 4.308,
                                    "sentiment": 5.625,
                                    "timestamp": 1523829599,
                                    "volume": 8
                                },
                                {
                                    "buzz": 7,
                                    "date": "14-04-2018",
                                    "high": 8.414,
                                    "low": 2.336,
                                    "sentiment": 5.375,
                                    "timestamp": 1523743199,
                                    "volume": 8
                                },
                                {
                                    "buzz": 10,
                                    "date": "13-04-2018",
                                    "high": 8.874,
                                    "low": 5.126,
                                    "sentiment": 7,
                                    "timestamp": 1523656799,
                                    "volume": 37
                                },
                                {
                                    "buzz": 7,
                                    "date": "12-04-2018",
                                    "high": 8.337,
                                    "low": 4.552,
                                    "sentiment": 6.444,
                                    "timestamp": 1523570399,
                                    "volume": 27
                                },
                                {
                                    "buzz": 4,
                                    "date": "11-04-2018",
                                    "high": 8.394,
                                    "low": 3.829,
                                    "sentiment": 6.111,
                                    "timestamp": 1523483999,
                                    "volume": 18
                                },
                                {
                                    "buzz": 7,
                                    "date": "10-04-2018",
                                    "high": 8.505,
                                    "low": 3.495,
                                    "sentiment": 6,
                                    "timestamp": 1523397599,
                                    "volume": 29
                                },
                                {
                                    "buzz": 8,
                                    "date": "09-04-2018",
                                    "high": 8.724,
                                    "low": 5.171,
                                    "sentiment": 6.947,
                                    "timestamp": 1523311199,
                                    "volume": 38
                                },
                                {
                                    "buzz": 4,
                                    "date": "08-04-2018",
                                    "high": 9.12,
                                    "low": 4.594,
                                    "sentiment": 6.857,
                                    "timestamp": 1523224799,
                                    "volume": 14
                                },
                                {
                                    "buzz": 4,
                                    "date": "07-04-2018",
                                    "high": 8.246,
                                    "low": 4.754,
                                    "sentiment": 6.5,
                                    "timestamp": 1523138399,
                                    "volume": 10
                                },
                                {
                                    "buzz": 6,
                                    "date": "06-04-2018",
                                    "high": 8.764,
                                    "low": 3.855,
                                    "sentiment": 6.31,
                                    "timestamp": 1523051999,
                                    "volume": 42
                                },
                                {
                                    "buzz": 6,
                                    "date": "05-04-2018",
                                    "high": 8.237,
                                    "low": 4.863,
                                    "sentiment": 6.55,
                                    "timestamp": 1522965599,
                                    "volume": 40
                                },
                                {
                                    "buzz": 7,
                                    "date": "04-04-2018",
                                    "high": 8.835,
                                    "low": 4.441,
                                    "sentiment": 6.638,
                                    "timestamp": 1522879199,
                                    "volume": 47
                                },
                                {
                                    "buzz": 5,
                                    "date": "03-04-2018",
                                    "high": 8.794,
                                    "low": 4.396,
                                    "sentiment": 6.595,
                                    "timestamp": 1522792799,
                                    "volume": 37
                                },
                                {
                                    "buzz": 10,
                                    "date": "02-04-2018",
                                    "high": 8.016,
                                    "low": 3.498,
                                    "sentiment": 5.757,
                                    "timestamp": 1522706399,
                                    "volume": 74
                                },
                                {
                                    "buzz": 8,
                                    "date": "01-04-2018",
                                    "high": 8.111,
                                    "low": 4.07,
                                    "sentiment": 6.091,
                                    "timestamp": 1522619999,
                                    "volume": 11
                                },
                                {
                                    "buzz": 6,
                                    "date": "31-03-2018",
                                    "high": 8.461,
                                    "low": 4.039,
                                    "sentiment": 6.25,
                                    "timestamp": 1522533599,
                                    "volume": 20
                                },
                                {
                                    "buzz": 3,
                                    "date": "30-03-2018",
                                    "high": 7.633,
                                    "low": 5.034,
                                    "sentiment": 6.333,
                                    "timestamp": 1522447199,
                                    "volume": 15
                                },
                                {
                                    "buzz": 10,
                                    "date": "29-03-2018",
                                    "high": 8.289,
                                    "low": 4.181,
                                    "sentiment": 6.235,
                                    "timestamp": 1522360799,
                                    "volume": 51
                                },
                                {
                                    "buzz": 10,
                                    "date": "28-03-2018",
                                    "high": 7.295,
                                    "low": 3.568,
                                    "sentiment": 5.432,
                                    "timestamp": 1522274399,
                                    "volume": 44
                                },
                                {
                                    "buzz": 3,
                                    "date": "27-03-2018",
                                    "high": 8.8,
                                    "low": 3.815,
                                    "sentiment": 6.308,
                                    "timestamp": 1522187999,
                                    "volume": 13
                                },
                                {
                                    "buzz": 10,
                                    "date": "26-03-2018",
                                    "high": 8.571,
                                    "low": 4.194,
                                    "sentiment": 6.383,
                                    "timestamp": 1522101599,
                                    "volume": 47
                                },
                                {
                                    "buzz": 10,
                                    "date": "25-03-2018",
                                    "high": 8.33,
                                    "low": 4.67,
                                    "sentiment": 6.5,
                                    "timestamp": 1522015199,
                                    "volume": 20
                                },
                                {
                                    "buzz": 9,
                                    "date": "24-03-2018",
                                    "high": 7.508,
                                    "low": 4.815,
                                    "sentiment": 6.161,
                                    "timestamp": 1521932399,
                                    "volume": 31
                                },
                                {
                                    "buzz": 8,
                                    "date": "23-03-2018",
                                    "high": 7.871,
                                    "low": 3.199,
                                    "sentiment": 5.535,
                                    "timestamp": 1521845999,
                                    "volume": 43
                                },
                                {
                                    "buzz": 7,
                                    "date": "22-03-2018",
                                    "high": 8.162,
                                    "low": 3.531,
                                    "sentiment": 5.846,
                                    "timestamp": 1521759599,
                                    "volume": 39
                                },
                                {
                                    "buzz": 4,
                                    "date": "21-03-2018",
                                    "high": 7.472,
                                    "low": 3.261,
                                    "sentiment": 5.367,
                                    "timestamp": 1521673199,
                                    "volume": 30
                                },
                                {
                                    "buzz": 3,
                                    "date": "20-03-2018",
                                    "high": 8.571,
                                    "low": 4.821,
                                    "sentiment": 6.696,
                                    "timestamp": 1521586799,
                                    "volume": 23
                                },
                                {
                                    "buzz": 10,
                                    "date": "19-03-2018",
                                    "high": 7.536,
                                    "low": 2.61,
                                    "sentiment": 5.073,
                                    "timestamp": 1521500399,
                                    "volume": 55
                                }
                            ],
                            "start_date": "2018-04-17"
                        }
                    ],
                    "last_update": 0,
                    "timezone": "Europe/Berlin"
                },
                "Status": "ESUCC",
                "StatusCode": 200
            }
        }
    }
}
```

## Adding Sentiment History Company insights to an agent
### Prerequisites
* Acquire an API key for the Sentiment History Company API as per service provider.

### Add the skill
1. Use **Add** > **Skill** to find and add the Sentiment History Company Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:
 
    * **Model**: Select **service provider**.
    * **API Key**: Enter your API Key for the Sentiment History Company API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **Text** as the **Input Type**.
1. Select **Sentiment By List Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Sentiment History Company Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Sentiment History Company API from the following Service providers.
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

var AWS = require('aws-sdk');

function main(config) {
    AWS.config.region = config.properties.region_aws;
    AWS.config.secretAccessKey = config.properties.secret_access_key_aws;
    AWS.config.accessKeyId = config.properties.access_key_id_aws;

    var comprehend = new AWS.Comprehend({apiVersion: '2017-11-27'});;
    var s3 = new AWS.S3({apiVersion: '2006-03-01'});
    var params ={"LanguageCode": "en","Text": config.payload.input_text};

    return new Promise(function (resolve, reject) {
        comprehend.detectSentiment(params, function (error, data) {
            if (error) {
                reject({payload: {error}});
            }
            else {
                try{
                var response = data;

                function senti_google(data){
                    temp = [];
                    result = {};
                    result['intent'] = data.Sentiment;
                    result['score'] = Math.max(response.SentimentScore.Mixed,response.SentimentScore.Negative,response.SentimentScore.Neutral,response.SentimentScore.Positive)
                    temp.push(result)
                    }
                senti_google(response);

                response = temp;
                var result = {};
                function recurse(cur, prop) {
                    if (Object(cur) !== cur) {
                        result[prop] = cur;
                    } else if (Array.isArray(cur)) {
                        for (var i = 0, l = cur.length; i < l; i++)
                            recurse(cur[i], prop + "[" + i + "]");
                        if (l == 0)
                            result[prop] = [];
                    } else {
                        var isEmpty = true;
                        for (var p in cur) {
                            isEmpty = false;
                            recurse(cur[p], prop ? prop + "." + p : p);
                        }
                        if (isEmpty && prop)
                            result[prop] = {};
                    }
                }
                recurse(response, "");
                var response = [];
                for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '').replace(/^\./,'') +':'+ result[i]);}
                resolve({payload:{response:response}});
                }
                catch(e) {resolve({payload:{response:["Exception occurred."]}});}
            }
        });
    });
}

exports.main = main;

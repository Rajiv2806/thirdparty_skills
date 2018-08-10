
var request = require('request');

/*
This model is to gives the positive, negative and neutral sentiment of an English sentence.
*/

function main(params) {

    var options = {
        url: 'https://api.algorithmia.com/v1/algo/nlp/SocialSentimentAnalysis/0.1.4',
        headers:
            {
                'content-type': 'application/json',
                authorization: params.properties.api_key_algorithmia
            },
        body: params.payload.text,
        json: true };

    return new Promise(function(resolve, reject) {
        request.post(options, function (error, response, body) {
            if (error) {
                reject({payload:{error}});
            }
            else {
                var response = body;
				
				function algo_detect(data){
					
                    temp = []
                    
					rec = data['result']
					for(i = 0; i< rec.length;i++){
						result1 = {}
						
						result = {};
						//result['sentence'] = {};
                        result["positive"] = rec[i]["positive"];
						result["compound"] = rec[i]["compound"];
						result["negative"] = rec[i]["negative"];
						result["neutral"] = rec[i]["neutral"];
						
						a = i+1
						sentence = "sentence-"+a
						result1[sentence] = result
						temp.push(result1);
					}
				}try{
					algo_detect(response)
					response = temp
				} catch (e){
					resolve({payload:{response:["Exception occurred."]}});
				}
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
                for (var i in result) {response.push(i.replace(/[\[\//\]]/g, '').replace(/^\d/, '').replace(/^\./,"") +':'+ result[i]);}
                resolve({payload:{response:response}});

            }


        });
    });

}

exports.main = main;

var request = require('request');

/*This algorithm analyzes a document to find the approximate sentiment associated 
with each of a given set of terms. It does this by splitting the document into sentences 
and computing, for each provided term, the average sentiment of all sentences containing that term.

*/

function main(params) {

    var options = {
        url: 'https://api.algorithmia.com/v1/algo/nlp/SentimentByTerm/0.1.3',
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
                    result = {}
					result['sentimentScore'] = data['result']
					temp.push(result);
                
            }
                    try{
						    algo_detect(response)
						    response = temp;
								
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
                for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '').replace(/^\./,'') +':'+ result[i]);}

                resolve({payload:{response:response}});
				
                
            }


        });
    });

}


exports.main = main;

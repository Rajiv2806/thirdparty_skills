var request = require('request');

function main(params) {
    var options = {url: 'https://api.algorithmia.com/v1/algo/nlp/Summarizer/0.1.6',
        headers:
            {
                'content-type': 'application/json',
                authorization: params.properties.api_key_algorithmiaNLP
            },
        body: params.payload.text,
        json: true };

    return new Promise(function(resolve, reject) {
        request.post(options, function (error, response, body) {
            if (error) {reject({payload:{error}});}
				else {try{
						var response = body;
						response = {}
						response['text-summary'] = body['result']
						response['word-summary'] = ''
					} catch (e){
					resolve({payload:{response:["Exception occurred."]}});
				}
                    var result = {};
                    function recurse(cur, prop) {
                        if (Object(cur) !== cur) {result[prop] = cur;}
                         else if (Array.isArray(cur)) {
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
                    var response = []
                    for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '') +':'+ result[i]);}

                    resolve({payload:{response:response}});
               }
        });
    });
}

exports.main = main;

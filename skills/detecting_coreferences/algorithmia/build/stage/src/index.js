var request = require('request');

/*It takes text (as a String) as input and outputs a list of maps, in which each map contains the name of an entity (specifically, its most representative mention) as key and a list of other mentions of that entity as values. 
*/

function main(params) {

    var options = {
        url: 'https://api.algorithmia.com/v1/algo/StanfordNLP/DeterministicCoreferenceResolution/0.1.1',
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
				response = body['result']
				result = {}
				result['entities'] = response
                response = result

                       try{
						       // algo_detect(response)
						        //response = temp;
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
                for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '').replace(/^\./,"") +':'+ result[i]);}

                resolve({payload:{response:response}});
            }


        });
    });

}

exports.main = main;
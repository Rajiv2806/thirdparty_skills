var request = require('request');

function main(params) {
    var subscriptionKey = params.properties.api_key_algorithmia;

    var options = {
        url: 'https://api.algorithmia.com/v1/algo/zskurultay/ImageSimilarity/0.1.4',
        body: [params.payload.image_1,params.payload.image_2],
        headers: {
            'content-type': 'application/json',
            authorization: subscriptionKey
        }
        ,json: true
    };

    return new Promise(function(resolve, reject) {
        request.post(options, function(error, response, body) {
            if (error) {
                reject({payload:{error}});
            }
            else {
                var response = body;
		function algo_detect(data){
                    temp = []
                    result = {}
		    result['similarityScore'] = data['result']
		    temp.push(result);
                
            }try{
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
                            // recurse(cur[p], prop ? prop + "." + p : p);
                            recurse(cur[p], prop ? prop + p : p);
                        }
                        if (isEmpty && prop)
                            result[prop] = {};
                    }
                }
                recurse(response, "");
                var response = []
                for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '') +': '+ result[i]);}
                resolve({payload:{response:response}});
            }
        });
    });
}

exports.main = main;


var request = require('request');

function main(params) {

    var options = {
        url: "https://api.algorithmia.com/v1/algo/nlp/RetrieveStopWords/0.1.1",
        headers:
            {
                'content-type': 'application/json',
                authorization: params.properties.api_key_algorithmia
            },
        body: params.payload.empty_String,
        json: true };

    return new Promise(function(resolve, reject) {
        request.post(options, function (error, response, body) {
            if (error) {
                reject({payload:{error}});
            }
            else {
                var response = body['result'];

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
                            recurse(cur[p], prop ? prop + p : p);
                        }
                        if (isEmpty && prop)
                            result[prop] = {};
                    }
                }
                        try{
						       // algo_detect(response)
						        recurse(response, "");
					   } catch (e){

						        resolve({payload:{response:["Exception occurred."]}});
					   }


                var response = []
                for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '') +'stopWord: '+ result[i]);}
                resolve({payload:{response:response}});
            }
        });
    });
}


exports.main = main;

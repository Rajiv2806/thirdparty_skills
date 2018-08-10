var request = require('request');

function main(params) {
    var url = 'https://' + params.properties.region_microsoft + '.api.cognitive.microsoft.com/linguistics/v1.0/analyze?';
    var key = params.properties.api_key_microsoft;
    var text = params.payload.text;
    var language = "en";
    var analyzerIds = ["4fa79af1-f22c-408d-98bb-b7d7aeef7f04", "22a6b758-420f-4745-8a3c-46835a67c0d2"];

    var options = {
        url : url + text,
        body : '{"language":"'+language+'", "analyzerIds":["'+analyzerIds[0]+'","'+analyzerIds[1]+'"], "text":"'+text+'"}',
        headers : {
            'Content-Type' : 'application/json',
            'Ocp-Apim-Subscription-Key' : key
        }
    };


    return new Promise(function(resolve, reject) {
        request.post(options, function(error, response, body) {
            if (error) {
                reject({payload:{error}});
            }
            else {
                var response = JSON.parse(body);
                function azure_text_parsing(data){
                    temp = [];
                    for(var i = 0 , l= data.length;i<l;i++){
                        result = {};
                        result['result'] = data[i]['result'];
                    }
                    temp.push(result);
                }
				try{
					azure_text_parsing(response);
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
                for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '').replace(/^\./,"") +':'+ result[i]);}
                resolve({payload:{response:response}});
            }
        });
    });
}

exports.main = main;

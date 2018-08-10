var request = require('request');

function main(params) {
    var url = 'https://' + params.properties.region_microsoft + '.api.cognitive.microsoft.com/entitylinking/v1.0/link';
    var key = params.properties.api_key_microsoft;
    var options = {
        url : url,
        body : params.payload.text,
        headers : {
            'Content-Type' : 'text/plain',
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

                function azure_keyentity(data){
                    temp = [];
                    d = data ['entities'];
                    for (var i = 0, l = d.length; i < l; i++) {
                        result = {};
                        rec = d[i];
                        result['entity'] = rec['name'];
                        result['type'] = "";
                        // result['Subtype'] = "";
                        result['score'] = rec['score'];
                        result['wikipediaid'] = rec['wikipediaId'];
                        result['saliance'] = "";
                        temp.push(result);
                    }
                }try{
					azure_keyentity(response);
					response = temp;
				} catch(e){
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

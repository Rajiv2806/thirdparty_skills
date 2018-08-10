var watson = require('watson-developer-cloud/natural-language-understanding/v1.js');
function main(params) {
    var url = 'https://gateway.watsonplatform.net/natural-language-understanding/api';
    var input = params.payload.text;
    var nlu = new watson({'username': params.properties.username_ibm, 'password': params.properties.password_ibm, 'version_date': '2017-02-27', 'url': url});
    var parameters = {
        'text': input,
        'features': {
            'entities': {
                'emotion': false,
                'sentiment': false,
                //'limit': 2
            },
            // 'keywords': {
            //     'emotion': false,
            //     'sentiment': false,
            //     //'limit': 2
            // }
        }
    }

    var promise = new Promise(function(resolve, reject) {
        nlu.analyze(parameters, function(error, response) {
            if (error) {
                reject({payload: {error}});
            }
            else {
                function ibm_keyentity(data) {
                    temp = [];
                    d = data['entities'];
                    for (var i = 0, l = d.length; i < l; i++) {
                        result = {};
                        rec = d[i];
                        result['entity'] = rec['text'];
                        result['type'] = rec["type"];
                        result['score'] = rec['relevance'];
                        result['wikipediaid'] = "";
                        result['saliance'] = "";
                        // result['subtype'] = rec['disambiguation']['name'];
                        temp.push(result);
                    }
                }try{
					ibm_keyentity(response);
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
    return promise;
}

exports.main = main;

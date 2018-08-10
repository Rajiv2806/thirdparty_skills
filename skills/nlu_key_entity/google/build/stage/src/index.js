var request = require('request');

function main(params) {

    var options = {
        url: 'https://language.googleapis.com/v1/documents:analyzeEntities',
        headers: {
            'content-type': 'application/json',
            authorization: params.properties.api_key_google
        },
		body: {
			"document": {
			  "type": "PLAIN_TEXT",
			  "language": "EN",
			  "content": params.payload.text
			},
			"encodingType": "UTF8"
		  },
        json: true
    };

    return new Promise(function (resolve, reject) {
        request.post(options, function (error, response, body) {
            if (error) {reject({payload: {error}});}
            else {
                var response = body;
                function google_keyentity(data){
                    temp = [];
                    d = data['entities'];
                    for (var i = 0, l = d.length; i < l; i++) {
                        result = {};
                        rec = d[i];
                        result['entity'] = rec['name'];
                        result['type'] = rec["type"];
                        // result['Subtype'] = "";
                        result['score'] = "";
                        result['wikipediaid'] = rec['metadata']['wikipedia_url'];
                        result['saliance'] = rec["salience"];
                        temp.push(result);
                    }
                }try{
					google_keyentity(response);
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


var request = require('request');

/**
 * Content Classification analyzes a document and returns a list of content categories that apply to the text found in the document.
 */

function main(params) {

    var options = {
        url: 'https://language.googleapis.com/v1/documents:classifyText',
        headers: {
            'content-type': 'application/json',
            authorization: params.properties.api_key_google
        },
        body: {"document": {
			  "type": params.payload.type,
			  "language": params.payload.language,
			  "content": params.payload.content
			}
		},
        json: true
    };

    return new Promise(function (resolve, reject) {
        request.post(options, function (error, response, body) {
            if (error) {
                reject({
                    payload: {
                        error
                    }
                });
            } else {
				try{
					var response = body;
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
                var response = []
                for (var i in result) {
                    response.push(i.replace(/[\[\/\d/\]']/g, '') +':'+ result[i]);
                }

                resolve({
                    payload: {
                        response
                    }
                });

            }
        });
    });

}

exports.main = main;

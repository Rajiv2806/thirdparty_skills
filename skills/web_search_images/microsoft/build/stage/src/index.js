
var request = require('request');

/**
 *Bing Image Search API provides an experience similar to Bing.com/images by returning images 
 *that Bing determines are relevant to a user's query.
 *
 * @return The result parameter with all values analyzed, or error
 */


function main(params) {
    var subscriptionKey = params.properties.api_key_microsoft;
    var searchImage = params.payload.text;

    var options = {
        url: 'https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=' + searchImage,
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key' : subscriptionKey
        }
    }

    return new Promise(function(resolve, reject) {
        request.get(options, function(error, response, body) {
            if (error) {
                reject({payload:{error}});
            }
            else {
                var response = JSON.parse(body);

                function web_search_image_azure(data){
                    temp = []
                    rec = data['value']
                    for (var i = 0, l = rec.length;i<l;i++){
                        result = {}
                        d = rec[i]
                        result['contentUrl'] = d['contentUrl']
                        result['contentSize'] = d['contentSize']
                        result['datePublished'] = d['datePublished']
                        result['encodingFormat'] = d['encodingFormat']
                        temp.push(result)
                    }
                }
                       try{
						        web_search_image_azure(response)
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
                            recurse(cur[p], prop ? prop + p : p);
                        }
                        if (isEmpty && prop)
                            result[prop] = {};
                    }
                }
                recurse(response, "");
                var response = []
                for (var i in result) {response.push(i.replace(/[\[\/\d/\]']/g, '') +': '+ result[i]);}
                resolve({payload:{response:response}});
            }
        });
    });

}

exports.main = main;

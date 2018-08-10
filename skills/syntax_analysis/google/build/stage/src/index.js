
var request = require('request');

/**
 * Syntactic Analysis extracts linguistic information, breaking up the given text into a series of sentences and tokens
 * (generally, word boundaries) and providing further analysis on those tokens
 */

function main(params) {

    var options = {
        url: 'https://language.googleapis.com/v1/documents:analyzeSyntax',
        headers: {
            'content-type': 'application/json',
            authorization: params.properties.api_key_google
        },
        body: params.payload,
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
                var response = body;
                function google_syntax_analysis(data){
                    temp = [];
                    suggest = data['tokens'];
                    for(var j = 0 , k= suggest.length;j<k;j++){
                        result = {};
                        result['content'] = suggest[j]['text']['content']
                        result['lemma'] = suggest[j]['lemma']
                        result['dependencyEdge'] = suggest[j]['dependencyEdge']['label']
                        result['partOfSpeech'] = suggest[j]['partOfSpeech']
                        temp.push(result);

                    }
                }try{
				   google_syntax_analysis(response);
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
               for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '').replace(/^\./,'') +':'+ result[i]);}
               resolve({payload:{response:response}});
                //resolve({payload:{response:temp}});

            }
        });
    });

}

exports.main = main;

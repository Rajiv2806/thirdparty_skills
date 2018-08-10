var request = require('request');

function main(params) {

    var bearer_key_google = "Bearer " + params.properties.bearer_key_google;
    var options = {
        url: 'https://translation.googleapis.com/language/translate/v2/detect',
        headers: {'content-type': 'application/json',authorization: bearer_key_google},
        body: {"q": params.payload.text},
        json: true
    };

    return new Promise(function (resolve, reject) {
        request.post(options, function (error, response, body) {
            if (error) {reject({payload: {error}});}
            else {
                    var response = body;

                    function google_lang_detection(resp) {
                        temp = [];
                        d = resp['data']['detections'];
                        for(var i = 0 , l= d.length;i<l;i++) {
                            result = {};
                            rec = d[i];
                            for (var j = 0, m = rec.length; j < m; j++) {
                                rec1 = rec[j];
                                result['languageDetected'] = '';
                                result['confidenceScore'] = rec1['confidence'];
                                //result['isReliable'] = rec1['isReliable'];
                                result['isoCode'] = rec1['language'];
                            }
                            temp.push(result)
                        }
                    }
                    try{
                        google_lang_detection(response);
                        response = temp;
                    } catch (e){
					resolve({payload:{response:["Exception occurred."]}});
				    }
                    var result = {};
                    function recurse(cur, prop) {
                        if (Object(cur) !== cur) {result[prop] = cur;}
                        else if (Array.isArray(cur)) {
                            for (var i = 0, l = cur.length; i < l; i++)
                                recurse(cur[i], prop + "[" + i + "]");
                            if (l == 0) result[prop] = [];
                        } else {
                            var isEmpty = true;
                            for (var p in cur) {isEmpty = false;recurse(cur[p], prop ? prop + "." + p : p);}
                            if (isEmpty && prop) result[prop] = {};
                        }
                    }
                    recurse(response, "");

                    var response = [];
                    for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '').replace(/^\./, "") +':'+ result[i]);}
                    resolve({payload:{response:response}});
            }
        });
    });
}

exports.main = main;

/**
 * Detects the language. "text" can be a string for detecting the language of
 * a single piece of text, or an array of strings for detecting the languages
 * of multiple texts.
 */

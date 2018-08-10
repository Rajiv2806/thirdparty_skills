var request = require('request');

function main(params) {

    var payload_req = {"id": "1","input_text": params.payload.text,"numberOfLanguagesToDetect":"1"}
    var url = 'https://' + params.properties.region_microsoft + '.api.cognitive.microsoft.com/text/analytics/v2.0/languages';
    var value = payload_req.numberOfLanguagesToDetect;
    var query_string = "?numberOfLanguagesToDetect="+value;

    var options = {
        url : url + query_string,
        body : '{"documents": [{"id": "' + payload_req.id + '","text":"' + payload_req.input_text + '"}]}',
        headers : {
                  'Content-Type' : 'application/json',
                  'Ocp-Apim-Subscription-Key' : params.properties.api_key_microsoft
                 }
    };


    return new Promise(function(resolve, reject) {
        request.post(options, function(error, response, body) {
            if (error) {reject({payload:{error}});}
            else {
                var response = JSON.parse(body);

                function azure_lang_detection(data){
                    temp = [];
                    d = data['documents'];
                    for(var i = 0 , l= d.length;i<l;i++){
                        result = {};
                        rec = d[i]['detectedLanguages'];
                        for (var j = 0,m=rec.length;j<m;j++){
                            rec1 = rec[j];
                            result['languageDetected'] = rec1['name'];
                            result['isoCode'] = rec1['iso6391Name'];
                            result['confidenceScore'] = rec1['score'];
                        }
                        temp.push(result);
                    }
                }
                try{
                    azure_lang_detection(response);
                    response = temp;
                }catch (e){
					resolve({payload:{response:["Exception occurred."]}});
				}
                var result = {};
                function recurse(cur, prop) {
                        if (Object(cur) !== cur) {
                        result[prop] = cur;
                    } else if (Array.isArray(cur)) {
                        for (var i = 0, l = cur.length; i < l; i++)
                            recurse(cur[i], prop + "[" + i + "]");
                        if (l == 0) result[prop] = [];
                    } else {
                        var isEmpty = true;
                        for (var p in cur) {isEmpty = false; recurse(cur[p], prop ? prop + "." + p : p);}
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

/* It will detect the language of text. @return The result parameter with all values analyzed, or error */

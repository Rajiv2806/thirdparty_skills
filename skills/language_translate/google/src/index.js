var request = require('request');

function main(params) {

	payload_req= {"q": params.payload.input_text,"source": params.payload.translate_from,"target": params.payload.translate_to,"format": "text"}
    bearer_key_google = "Bearer " + params.properties.bearer_key_google

    var options = {url: 'https://translation.googleapis.com/language/translate/v2'
                   ,headers: {'content-type': 'application/json',authorization: bearer_key_google}
                   ,body: payload_req,json: true
                  };

    return new Promise(function (resolve, reject) {
        request.post(options, function (error, response, body) {
            if (error) {reject({payload: {error}});}
            else {
                try{
                var response = body;
                function google_lang_translate(data){
                    temp = [];
                    d = data['data']['translations'];
                    for(var i = 0 , l= d.length;i<l;i++){
                        result = {};
                        result['translated_text'] = d[i]['translatedText'];
                        temp.push(result);
                        }
                }
                google_lang_translate(response);
                response = temp;
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
                catch(e){resolve({payload:{response:["Exception Occurred"]}});}
            }
        });
    });

}
exports.main = main;

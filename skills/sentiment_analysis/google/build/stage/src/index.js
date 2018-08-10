var request = require('request');

function main(params) {

    var options = {
                    url: 'https://language.googleapis.com/v1/documents:analyzeSentiment',
                    headers: {'content-type': 'application/json',authorization: "Bearer " + params.properties.bearer_key_google},
                    body: {"document": {"type": "PLAIN_TEXT","language":"EN","content": params.payload.input_text},"encodingType": "UTF8"},
                    json: true
                  };

    return new Promise(function (resolve, reject) {

        request.post(options, function (error, response, body) {

            if(error){reject({payload: {error}});}
            else {
                try{
                var response = body;

                function senti_google(data){
                    temp = [];
                    result = {};
                    result['score'] = data['documentSentiment']['score'];
                    a = data['documentSentiment']['score']
                    if(a < 0.5) {result['label'] = "Negative"}
                    if(a === 0.5){result['label'] = "Neutral"}
                    if(a > 0.5) {result['label'] = "Positive"};
                    temp.push(result)
                  }

                senti_google(response);

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
                for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '').replace(/^\./,'') +':'+ result[i]);}

                resolve({payload:{response:response}});
             }
             catch(e){resolve({payload:{response:["Exception occurred."]}});}
            }
        });
    });
}

exports.main = main;

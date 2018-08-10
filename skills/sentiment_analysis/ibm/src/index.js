var request = require('request');

function main(params) {

    var auth = "Basic " + new Buffer(params.properties.username_ibm + ":" + params.properties.password_ibm).toString("base64");
    var version = "2017-09-21"
    var options = {
        url: 'https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=' + version,
        headers: {
            'content-type': 'application/json',
            authorization: auth
        },
		body: {"text": params.payload.input_text},
        json: true
    };

    return new Promise(function (resolve, reject) {
        request.post(options, function (error, response, body) {
            if (error) {
                reject({ payload: { error } });
            }
            else {
                try{
                var response = body;

                function senti_ibm(data){
                    temp = [];
                      rec = data.document_tone.tones
                      for (var i = 0, l = rec.length;i<l;i++){
                          result = {}
                          result['score'] = rec[i].score;
                          a = rec[i].score
                          if(a < 0.5) {result['label'] = "Negative"}
                          if(a === 0.5){result['label'] = "Neutral"}
                          if(a > 0.5) {result['label'] = "Positive"};
                          //result['intent'] = rec[i].tone_name;
                          temp.push(result)
                      }
                 }

                senti_ibm(response);
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
                catch(e) {resolve({payload:{response:["Exception occurred."]}});}
            }
        });
    });
}

exports.main = main;

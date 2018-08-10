var request = require('request');

function main(params) {
    var url = 'https://' + params.properties.region_microsoft + '.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment';
    var key = params.properties.api_key_microsoft;

    var options = {
        url : url ,
        body :'{"documents": [{"id": "1","language": "'+"en"+'","text":"' + params.payload.input_text + '"}]}',
        headers : {
            'Content-Type' : 'application/json',
            'Ocp-Apim-Subscription-Key' : key
        }
    };
    return new Promise(function(resolve, reject) {
        request.post(options, function(error, response, body) {
            if (error) {
                reject({payload:{error}});
            }
            else {
                var response = JSON.parse(body);

                function senti_azure(data){
                    temp = [];
                    result = {};
                    result['score'] = data.documents[0].score
                    a = data.documents[0].score
                    if(a < 0.5) {result['label'] = "Negative"}
                    if(a === 0.5){result['label'] = "Neutral"}
                    if(a > 0.5) {result['label'] = "Positive"};
                    temp.push(result)
                    }
                senti_azure(response);

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
        });
    });
}

exports.main = main;

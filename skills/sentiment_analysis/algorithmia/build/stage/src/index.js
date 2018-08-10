var request = require('request');

function main(params) {

    var options = {
                    url: 'https://api.algorithmia.com/v1/algo/nlp/SentimentAnalysis/1.0.4',
                    headers:{'content-type': 'application/json',authorization: params.properties.api_key_algorithmia},
                    body: {"document":params.payload.input_text},
                    json: true
		         };

    return new Promise(function(resolve, reject) {
        request.post(options, function (error, response, body) {
            if (error) {
                reject({payload:{error}});
            }
            else {
                try{
                var response = body;

                function senti_algorithmia(data){
                    temp = [];
                    result = {};
                    result['sentiment'] = data.result[0].sentiment;

                    a = Number(data.result[0].sentiment);
                    if(a < 0.5) {result['label'] = "Negative"}
                    if(a === 0.5){result['label'] = "Neutral"}
                    if(a > 0.5) {result['label'] = "Positive"};

                    temp.push(result)
                  }

                senti_algorithmia(response);
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

/*Sentiment analysis (also known as opinion mining) refers to the use of natural
language processing, text analysis and computational linguistics to identify and
extract subjective information in source materials. This algorithm takes an input
string and assigns a sentiment rating in the range [0-4].
*/
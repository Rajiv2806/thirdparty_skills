
var request = require('request');


function main(params) {
    var url = 'https://api.cognitive.microsoft.com/bing/v7.0/spellcheck';
    var key = params.properties.api_key_microsoft;
    var txt = params.payload.text;

    var query_string = "?mkt=en-US" +
        "&mode=proof" +
        "&text="+txt;

    var options = {
        url : url + query_string,
        body : url,
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
                function azure_spell_checker(data){
                    temp = [];
                    rec = data['flaggedTokens'];
                    //type = data['_type'];
                    for(var i = 0 , l= rec.length;i<l;i++){
                        suggest = rec[i]['suggestions'];
                        for(var j = 0 , k= suggest.length;j<k;j++){
                            result = {};
                            result['suggestion'] = suggest[j]['suggestion'];
                            result['score'] = suggest[j]['score'];
                            result['wrongSpell'] = rec[i]['token'];
                            temp.push(result);
                        }
                    }
                }
                        try{
						        azure_spell_checker(response);
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
                for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '').replace(/^\./,"") +':'+ result[i]);}
                resolve({payload:{response:response}});
             }
        });
    });
}

exports.main = main;

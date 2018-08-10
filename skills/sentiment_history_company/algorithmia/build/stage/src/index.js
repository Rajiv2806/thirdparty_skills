var request = require('request');

function main(params) {
    var options = {
        url: "https://api.algorithmia.com/v1/algo/infotrie/Sentiment_history/0.4.0",
        headers:
            {
                'content-type': 'application/json',
                authorization: params.properties.api_key_algorithmia
            },
        body: {"companyId":params.payload.company_Id,"ndays":params.payload.ndays},
        json: true };

    return new Promise(function(resolve, reject) {
        request.post(options, function (error, response, body) {
            if (error) {
                reject({payload:{error}});
            }
            else {
                                           try{
						       
					   } catch (e){

						        resolve({payload:{response:["Exception occurred."]}});
					   }
                var response = body;

    			function algo_detect(data){result = data['result']['Result']['data'][0]['sentiment']}
                algo_detect(response)
                response = result;

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
                            // recurse(cur[p], prop ? prop + "." + p : p);
                            recurse(cur[p], prop ? prop + p : p);
                        }
                        if (isEmpty && prop)
                            result[prop] = {};
                    }
                }
                recurse(response, "");
                var response = []
                for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '') +': '+ result[i]);}

                resolve({payload:{response:response}});
            }
        });
    });

}


exports.main = main;

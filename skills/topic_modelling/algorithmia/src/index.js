var request = require('request');

/*
This model is to gives the positive, negative and neutral sentiment of an English sentence.
*/

function main(params) {

    var options = {
        url: 'https://api.algorithmia.com/v1/algo/nlp/LDA/1.0.0',
        headers:
            {
                'content-type': 'application/json',
                authorization: params.properties.api_key_algorithmia
            },
        body: { "docsList": params.payload.document_List,"customSettings": {"numTopics": params.payload.num_Topics }},
        json: true };

    return new Promise(function(resolve, reject) {
        request.post(options, function (error, response, body) {
            if (error) {
                reject({payload:{error}});
            }
            else {
                var response = body;
				
				function algo_detect(data){
					
                    temp = []
                    
					rec = data['result']
					for(i = 0; i< rec.length;i++){
						var keys = []
						for(var key in rec[i]) keys.push( key );
							result = {}
							a = i+1
							result['topic'+a] = keys
							temp.push(result);
						
					}
				        }

				           try{
						        algo_detect(response)
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
                for (var i in result) {response.push(i.replace(/[\[\/\]]/g, '').replace(/^\d/, '').replace(/^\./,"").slice(0, -1) +':'+ result[i]);}
                //resolve({payload:response});
                resolve({payload:{response:response}});

            }


        });
    });

}
exports.main = main;

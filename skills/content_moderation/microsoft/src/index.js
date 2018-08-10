var request = require('request');

function main(params) {
    var url = 'https://' + params.properties.region_microsoft + '.api.cognitive.microsoft.com/contentmoderator/moderate/v1.0/ProcessText/Screen?classify=True';
    var key = params.properties.api_key_microsoft;
    
	var options = {
        url : url,
        body : params.payload.text,
        headers : {
            'Content-Type': 'text/plain',
            'Ocp-Apim-Subscription-Key' : key
        }
    };
    return new Promise(function(resolve, reject) {
        request.post(options, function(error, response, body) {
            if (error) {reject({payload:{error}});}
            else {
                var response = JSON.parse(body);

                function contentmoderation_azure(my_data){
                    temp = [];
                    result = {};
                    result['sexuallyExplicitContent'] = my_data['Classification']['Category1']['Score'];
                    result['sexuallySuggestiveContent'] = my_data['Classification']['Category2']['Score'];
                    result['offensiveContent'] = my_data['Classification']['Category3']['Score'];
                    result['language'] = my_data['Language'];

                    word = my_data['Terms'];
                    temp2 = [];
                    for(var k = 0;k<word.length;k++){
                        result1 = word[k]['Term']
                        temp2.push(result1)
                    }
                    result['Terms'] = temp2
                    temp.push(result)
                }try{
			contentmoderation_azure(response)
			response = temp;
		} catch (e){
			resolve({payload:{response:["Exception occurred."]}});
			}
                var result = {}
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
                for (var i in result) {
					response.push(i.replace(/[\[\/\d/\]]/g, '') +': '+ result[i]);
				}
                resolve({payload:{response:response}});
				// resolve({payload:{response:temp}});
            }
        });
    });
}

exports.main = main;

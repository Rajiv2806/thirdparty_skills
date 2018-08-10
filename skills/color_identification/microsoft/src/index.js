var request = require('request');

function main(params) {
    var url = 'https://' + params.properties.region_microsoft + '.api.cognitive.microsoft.com/vision/v1.0/analyze';
    var key = params.properties.api_key_microsoft;
    var query_string = "?visualFeatures=Categories,Description,Color&details=" + "&language=en" + "&model=landmarks";

    var options = {
        url : url + query_string,
        body : '{"url" : "' + params.payload.image_url + '"}',
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

                function color_identification_azure(data){
                    temp = []
                    result = {}
                    result['rbg_values'] = ""
                    result['fractionOfPixels'] = ""
                    result['score'] = ""
                    result['isBWImage'] = data['color']['isBwImg']
                    result['dominantColorBackground'] = data['color']['dominantColorBackground']
                    result['dominantColorForeground'] = data['color']['dominantColorForeground']
                    result['dominantColors'] = data['color']['dominantColors']
                    temp.push(result);
                }
                try{
                    color_identification_azure(response)
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
                resolve({payload:{response:response}});  // resolve({payload:{response:temp}});
            }
        });
    });
}


exports.main = main;

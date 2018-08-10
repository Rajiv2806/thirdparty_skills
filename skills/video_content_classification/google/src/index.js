var request = require('request');

function main(params) {
    var options = {
        url: 'https://videointelligence.googleapis.com/v1/operations/' + params.payload.jobID + '?key='+ params.properties.api_key_google,
        json: true
    };

    return new Promise(function (resolve, reject) {
        request.get(options, function (error, response, body) {
            if (error) {reject({payload: {error}});}
            else {
                var response = body;

                function video_parental_control_google(data){
                    temp = [];
                    temp1 = [];
                    result = {};

                    result["jobCompletionStatus"] = data["done"];
                    rec = data['response']['annotationResults'][0]['explicitAnnotation']['frames']
                    result["totalNoFrames"] = rec.length;

                    for (var i = 0; i<rec.length;i++){
                          result1 = {};
                          result1['frameNo'] = i
                          result1['timeOffset'] = rec[i]['timeOffset']
                          result1['pornographyLikelihood'] = rec[i]['pornographyLikelihood']
                          temp1.push(result1)
                    }
                    result['explicitAnnotation'] = temp1
                    temp.push(result)
                }
				try{
					video_parental_control_google(response);
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
var request = require('request');

function main(params) {
    var options = {
        url: 'https://videointelligence.googleapis.com/v1/operations/' + params.payload.jobId + '?key='+ params.properties.api_key_google,
        json: true
    };

    return new Promise(function (resolve, reject) {
        request.get(options, function (error, response, body) {
            if (error) {reject({payload: {error}});}
            else {
                var response = body;

                function video_shot_change_google(data){
                    temp = [];temp1 = [];result = {};
                    result["jobCompletionStatus"] = data["done"];
                    rec = data['response']['annotationResults'][0]['shotAnnotations']
                    result["totalNoShotsDetected"] = rec.length;

                    for (var i = 0; i<rec.length;i++){temp1.push("starttimeEndtime-"+i+": "+rec[i]['startTimeOffset']+" - "+rec[i]['endTimeOffset'])}
                    result['shotAnnotations'] = temp1
                    temp.push(result)
                }
				try {
					video_shot_change_google(response);
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

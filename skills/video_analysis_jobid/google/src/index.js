var request = require('request');

function main(params) {

    var options = {
        url: 'https://videointelligence.googleapis.com/v1/videos:annotate?key=' + params.properties.api_key_google,
        headers: {'content-type': 'application/json'},
        body: {"inputUri": params.payload.inputVideo,"features": [params.properties.video_features]},
        json: true
    };

// LABEL_DETECTION,EXPLICIT_CONTENT_DETECTION,SHOT_CHANGE_DETECTION

    return new Promise(function (resolve, reject) {
        request.post(options, function (error, response, body) {
            if (error) {reject({payload: {error}});}
            else {
                    var response = body;

                    function video_jobid_google(arg){
                        result = {}
                        result['jobid'] = arg['name'];
                        result['feature'] = params.properties.video_features
                        return result
                    }
					try{
						response = video_jobid_google(response)
					} catch (e){
						resolve({payload:{response:["Exception occurred."]}});
					}
                    var result = {};
                    function recurse(cur, prop) {
                        if (Object(cur) !== cur) {result[prop] = cur;}
                        else if (Array.isArray(cur)) {
                                for (var i = 0, l = cur.length; i < l; i++)
                                        recurse(cur[i], prop + "[" + i + "]");
                                if (l == 0) result[prop] = [];
                        }
                        else {
                                var isEmpty = true;
                                for (var p in cur) {isEmpty = false;recurse(cur[p], prop ? prop + "." + p : p);}
                                if (isEmpty && prop) result[prop] = {};
                             }
                    }

                    recurse(response, "");
                    var response = []
                    for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '') +':'+ result[i]);}

                    resolve({payload:{response}});
                }
            });
        });
}

exports.main = main;

var request = require('request');

function main(params) {
    var url = 'https://' + params.properties.region_microsoft + '.api.cognitive.microsoft.com/face/v1.0/detect';
    var key = params.properties.api_key_microsoft;

    var query_string = "?returnFaceId=true&returnFaceLandmarks=false" +
        "&returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise";

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

                function azure_emotions(data){
                    temp = [];
                    for(var i = 0 , l= data.length;i<l;i++){
                        result = {};
                        rec = data[i];
                        result['boundingBox'] = rec['faceRectangle'];
                        result['age'] = rec['faceAttributes']['age'];
                        result['gender'] = rec['faceAttributes']['gender'];
                        result['emotion'] = [];
                        result1 ={};
                        result1['anger'] = rec['faceAttributes']['emotion']['anger'];
                        result1['contempt'] = rec['faceAttributes']['emotion']['contempt'];
                        result1['disgust'] = rec['faceAttributes']['emotion']['disgust'];
                        result1['fear'] = rec['faceAttributes']['emotion']['fear'];
                        result1['happiness'] = rec['faceAttributes']['emotion']['happiness'];
                        result1['neutral'] = rec['faceAttributes']['emotion']['neutral'];
                        result1['sadness'] = rec['faceAttributes']['emotion']['sadness'];
                        result1['surprise'] = rec['faceAttributes']['emotion']['surprise'];
                        result1['smile'] = rec['faceAttributes']['smile'];
                        result['emotion'].push(result1);
                        temp.push(result);
                    }
                }
                azure_emotions(response);
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
                            recurse(cur[p], prop ? prop + "_" + p : p);
                        }
                        if (isEmpty && prop)
                            result[prop] = {};
                    }

                }
                recurse(response, "");
                var response = [];
                for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '').replace(/^\_/, "") +':'+ result[i]);}
                resolve({payload:{response:response}});
            }
        });
    });
}


exports.main = main;

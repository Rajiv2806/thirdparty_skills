var request = require('request');

function main(params) {
    var options = {url: 'https://gateway-a.watsonplatform.net/visual-recognition/api/v3/detect_faces',
        qs: {
            api_key: params.properties.api_key_ibm,
            url: params.payload.image_url,
            version: '2016-05-20'
        },
        json: true
    };

    return new Promise(function(resolve, reject) {
        request.get(options, function(error, response, body) {
            if (error) {
                reject({payload:{error}});
            }
            else {
                var response = body;
                function ibm_detectfaces(data){
                    temp = [];
                    d = data['images'];
                    for(var i = 0 , l= d.length;i<l;i++){
                        result = {};
                        d1 = d[i]['faces'];
                        for(var j = 0 , m= d1.length;j<m;j++){
                            rec1 = d1[j];
                            result['boundingBox'] = rec1['face_location'];
                            result['faceConfidence'] = "";
                            result['age'] = rec1['age']['min'];
                            result['gender'] = rec1['gender']['gender'];
                            result['smile'] = "";
                            result['faceLandmarks'] = [];
                            temp.push(result);
                        }
                    }
                }
                              try{
                                       ibm_detectfaces(response);
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

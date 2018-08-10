var request = require('request');

function main(params) {

    var options = {
        url: 'https://api.algorithmia.com/v1/algo/opencv/SkinColorDetection/0.1.19',
        headers:
            {
                'content-type': 'application/json',
                authorization: params.properties.api_Key_algorithmia
            },
        body: params.payload.input_url,
        json: true };

    return new Promise(function(resolve, reject) {
        request.post(options, function (error, response, body) {
            if (error) {
                reject({payload:{error}});
            }
            else {
                var response = body;
                function skin_color_detection(data){
                    temp = []

					rec = data['result']
					for(i = 0; i< rec.length;i++){
						result = {}
                        result['red_min'] = rec[i][0];
                        result['red_max'] = rec[i][1];
                        result['green_min'] = rec[i][2];
                        result['green_max'] = rec[i][3];
                        result['blue_min'] = rec[i][4];
                        result['blue_max'] = rec[i][5];

						temp.push(result);
                }
                    }

                           try{
						        skin_color_detection(response)
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

/*
Gets possible values of skin color for the detected people in a picture using nose detection and face detection.
It is used by Nudity Detection to supply more accurate results. The return result is an array of arrays.
Different arrays are for different detected faces; the values in the arrays are red_min, red_max, green_min, green_max,
blue_min, blue_max; respectively.
*/

var request = require('request');



function main(params) {
    var url = 'https://' + params.properties.region + '.api.cognitive.microsoft.com/vision/v1.0/analyze';
    var key = params.properties.api_key_microsoft;
    var query_string = "?visualFeatures=Categories,Description,Color&details=" +"&language=en" + "&model=landmarks";

    var options = {
                    url : url + query_string,
                    body : '{"url" : "' + params.payload.image_url + '"}',
                    headers : {'Content-Type' : 'application/json','Ocp-Apim-Subscription-Key' : key}
                  };


    return new Promise(function(resolve, reject) {
        request.post(options, function(error, response, body) {
            if (error) {reject({payload:{error}});}
            else {
                var response = JSON.parse(body);

                function image_desc_azure(data){
                    temp = []
                    rec = data['description']['captions']
                    for(var i = 0 , l= rec.length;i<l;i++){
                        result = {};
                        rec1 = rec[i];
                        result['caption'] = rec1['text'];
                        result['confidenceScore'] = rec1['confidence'];
                        temp.push(result);
                    }
                }
                       try{
						        image_desc_azure(response)
						        response = temp;
					   } catch (e){

						        resolve({payload:{response:["Exception occurred."]}});
					   }


                var result = {};
                //response = temp;
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
//                            recurse(cur[p], prop ? prop + "." + p : p);
                            recurse(cur[p], prop ? prop + p : p);
                        }
                        if (isEmpty && prop)
                            result[prop] = {};
                    }
                }
                recurse(response, "");
                var response = []
                for (var i in result) {
                    response.push(i.replace(/[\[\/\d/\]']/g, '') +': '+ result[i]);
                }
//                resolve({payload:{response:temp}});
                resolve({payload:{response:response}});
            }
        });
    });
}


exports.main = main;

/**
With the Analyze Image method, you can extract visual features based on image content. You can upload an image or specify
an image URL and choose which features to return, including:

A detailed list of tags related to the image content.
A description of image content in a complete sentence.
The coordinates, gender, and age of any faces contained in the image.
The ImageType (clipart or a line drawing)
The dominant color, the accent color, or whether an image is black & white.

 */
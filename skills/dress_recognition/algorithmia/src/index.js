var request = require('request');

/*
This algorithm detects clothing items in images; it returns a list of discovered clothing articles as well as
annotating the input image with bounding boxes for each found article.
*/

function main(params) {
    var options = {
        url: 'https://api.algorithmia.com/v1/algo/algorithmiahq/DeepFashion/1.2.2',
        headers:
            {
                'content-type': 'application/json',
                authorization: params.properties.api_key_algorithmia
            },
        //body: params.payload.input,
		body: 
			{		
				"image": params.payload.image_url,
				"model":"small"
			},
        json: true };

    return new Promise(function(resolve, reject) {
        request.post(options, function (error, response, body) {
            if (error) {
                reject({payload:{error}});
            }
            else {
                var response = body;

                function senti_algorithmia(data){
                    temp = [];

                    d = data['result']['articles']
                    for(var i = 0 , l= d.length;i<l;i++){
                        result = {};
                        result['article_name'] = d[i]['article_name'];
                        result['confidence'] = d[i]['confidence'];
                        temp.push(result)
                        }

                  }
                       try{
						        senti_algorithmia(response)
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

               // resolve({payload:{response:temp}});
            }
        });
    });

}

exports.main = main;

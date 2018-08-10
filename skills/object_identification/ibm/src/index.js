var request = require('request');

function main(params) {
	var version1 = "2016-05-20";
	var options = {
        url: 'https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify',
        qs: {
            api_key: params.properties.api_key_ibm,
            url: params.payload.image_url,
            version: version1
        },
        json: true
    };
	return new Promise(function(resolve, reject) {
        request.get(options, function(error, response, body) {
            if (error) {
                reject({payload:{error}});
            }
            else {
                try{
                    var response = body;
                    function ibm_object_identification(data){
                        temp = [];
                        d = data['images'];
                        for(var i = 0 , l= d.length;i<l;i++){
                            d1 = d[i]['classifiers'];
                            for(var j = 0 , m= d1.length;j<m;j++){
                                rec1 = d1[j];
                                res = rec1['classes'];
                                for(var k=0,n= res.length;k<n;k++){
                                    result = {};
                                    res2 = res[k]
                                    result['class'] = res2['class'];
                                    result['score'] = res2['score'];
                                    temp.push(result);
                                }
                            }
                        }
                    }

                    ibm_object_identification(response);
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
                 catch(e) {resolve({payload:{response:["Exception Occurred"]}});}
            }
        });
    });
}

exports.main = main;
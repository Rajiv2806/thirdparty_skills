
var request = require('request');
function main(params) {
    var url = 'https://' + params.properties.region_microsoft + '.api.cognitive.microsoft.com/vision/v1.0/ocr';
    var key = params.properties.api_key_microsoft;
    var query_string = "?language=en" + "&detectOrientation=true";
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
            if (error) {reject({payload:{error}});}
            else {
            try{
                var response = JSON.parse(body);

                function ocr_azure(my_data){
                    data = my_data['regions'];
                    var i = 0;
                    var j = 0;
                    var k = 0;
                    temp = [];
                    for(i = 0; i< data.length;i++){
                        rec = data[i]['lines'];
                        for(j = 0; j<rec.length;j++){
                            word = rec[j]['words'];
                            function nthIndex(str, pat, n){
                                var L= str.length, i= -1;
                                while(n-- && i++<L){
                                    i= str.indexOf(pat, i);
                                    if (i < 0) break;
                                }
                                return i;
                            }
                            for(k = 0;k<word.length;k++){
                                result = {};
                                result['word'] = word[k]['text'];
                                result['boundingBox'] = {};
                                var str = word[k]['boundingBox'];
                                result['boundingBox']['height'] = str.substring(0,nthIndex(str,",",1));
                                result['boundingBox']["left"] = str.substring(nthIndex(str,",",1)+1,nthIndex(str,",",2));
                                result['boundingBox']["top"] = str.substring(nthIndex(str,",",2)+1,nthIndex(str,",",3));
                                result['boundingBox']["width"] = str.substring(nthIndex(str,",",3)+1,str.length);
                                temp.push(result)
                            }
                        }
                    }

                }
                ocr_azure(response)

                response = temp
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
                catch(e){resolve({payload:{response:["Exception Occurred"]}});}
            }
        });
    });
}

exports.main = main;

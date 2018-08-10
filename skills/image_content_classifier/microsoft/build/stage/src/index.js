var request = require('request');

function main(params) {
    var url = 'https://' + params.properties.region_microsoft + '.api.cognitive.microsoft.com/contentmoderator/moderate/v1.0/ProcessImage/Evaluate';
    var key = params.properties.api_key_microsoft;
	var Value = params.payload.image_link;

    var options = {
        url : url,
		body : '{"DataRepresentation":"URL","Value":"'+Value+'"}',
        headers : {
            'Content-Type' : 'application/json',
            'Ocp-Apim-Subscription-Key' : key
        }
    };
    return new Promise(function(resolve, reject) {
        request.post(options, function(error, response, body) {
            if (error) {reject({payload:{error}});}
            else {
                var response = JSON.parse(body);
                function azure_imageContent(data){
                    temp = [];
                    result = {};
                    result["adultClassification"] = data["IsImageAdultClassified"];
                    result["adultClassificationScore"] = data["AdultClassificationScore"];
                    result["racyClassification"] = data["IsImageRacyClassified"];
                    result["racyClassificationScore"] = data["RacyClassificationScore"];
                    result["spoofClassification"] = "";
                    result["medicalClassification"] = "";
                    result["violenceClassification"] = "";
                    temp.push(result)
                }
                azure_imageContent(response);

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
//                            recurse(cur[p], prop ? prop + "." + p : p);
                            recurse(cur[p], prop ? prop + p : p);
                        }
                        if (isEmpty && prop)
                            result[prop] = {};
                    }
                }
                recurse(response, "");
                var response = [];
//                for (var i in result) {response.push("response"+i.replace(/[\[\/\d/\]']/g, '') +':'+ result[i]);}
                for (var i in result) {response.push(i.replace(/[\[\/\d/\]']/g, '') +':'+ result[i]);}
                resolve({payload:{response:response}});
            }
        });
    });
}


exports.main = main;

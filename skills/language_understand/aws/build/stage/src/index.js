var AWS = require('aws-sdk');

function main(config) {
	
    AWS.config.region = config.properties.region_aws;
    AWS.config.secretAccessKey = config.properties.secret_access_key_aws;
    AWS.config.accessKeyId = config.properties.access_key_id_aws;
    var comprehend = new AWS.Comprehend({apiVersion: '2017-11-27'});;
    var s3 = new AWS.S3({apiVersion: '2006-03-01'});
    var params = {"LanguageCode": "en","Text": config.payload.input_text};

    return new Promise(function (resolve, reject) {
        comprehend.detectKeyPhrases(params, function (error, data) {
            if (error) {reject({payload: {error}});}
            else {
				try{
                var response = data;
                function aws_keyphrases(data) {
                    temp = [];
                    d = data['KeyPhrases'];
                    for (var i = 0, l = d.length; i < l; i++) {
                        temp.push(d[i]['Text'])
                    }
                }
                aws_keyphrases(response);
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
                            recurse(cur[p], prop ? prop + p : p);
                        }
                        if (isEmpty && prop)
                            result[prop] = {};
                    }
                }
                recurse(response, "");
                var response = [];
                for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '') +"keyPhrases: "+ result[i]);}
                resolve({payload:{response:response}});
			  }
			  catch(e){resolve({payload:{response:["Exception Occurred"]}});}
            }
        });
    });
}

exports.main = main;
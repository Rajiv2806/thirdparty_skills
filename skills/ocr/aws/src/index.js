var AWS = require('aws-sdk');
function main(config) {
    AWS.config.region = config.properties.region_aws;
    AWS.config.secretAccessKey = config.properties.secret_access_key_aws;
    AWS.config.accessKeyId = config.properties.api_key_AWS;

    var rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'});
    var s3 = new AWS.S3({apiVersion: '2006-03-01'});
    var params = {
        Image: {
            S3Object: {
                Bucket: config.properties.aws_bucket_name,
                Name: config.payload.image_url
            }
        }
    };

    return new Promise(function (resolve, reject) {
        rekognition.detectText(params, function (error, data) {
            if (error) {reject({payload: {error}});}
            else {
                try{
                var response = data;

                function ocr_aws(data){
                    temp = [];
                    Bounding_box = {};
                    d = data["TextDetections"];

                    for(var i = 0 , l= d.length;i<l;i++){
                        result = {};
                        rec = d[i];
                        if(rec['Type'] == 'LINE'){continue}
                        else (rec['Type'] == 'WORD')
                        {
                            result['word'] = rec['DetectedText'];
                            result['boundingBox'] = rec['Geometry']['BoundingBox'];
                            temp.push(result)
                        }
//                        result['detectedtext'] = rec['DetectedText'];
//                        result['boundingBox'] = rec['Geometry']['BoundingBox'];
//                        temp.push(result)
                    }
                }
                ocr_aws(response);
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

var AWS = require('aws-sdk');

function main(config) {
    AWS.config.region = config.properties.region_aws;
    AWS.config.secretAccessKey = config.properties.secret_access_key_aws;
    AWS.config.accessKeyId = config.properties.access_key_id_aws;

    var rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'});
    var s3 = new AWS.S3({apiVersion: '2006-03-01'});

    var params = {Image: {S3Object: {Bucket: config.properties.aws_bucket_name,Name: config.payload.image_url}}};

    return new Promise(function (resolve, reject) {
        rekognition.detectLabels(params, function (error, data) {
            if (error) {
                reject({payload: {error}});
            }
            else {
                try{
                var response = data;
                function aws_object_identification(data){
                    temp = [];
                    d = data['Labels'];
                    for(var i = 0 , l= d.length;i<l;i++){
                        result = {};
                        result['class'] = d[i]['Name'];
                        result['score'] = d[i]['Confidence'];

                        temp.push(result)
                }
            }
            aws_object_identification(response);
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
                catch(e){resolve({payload:{response:["Exception Occurred"]}});}
            }
        });
    });
}

exports.main = main;

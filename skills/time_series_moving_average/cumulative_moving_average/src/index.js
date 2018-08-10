var request = require('request');

function main(params) {

    var options = {
        url: "https://api.algorithmia.com/v1/algo/TimeSeries/CumulativeMovingAverage/0.1.0",
        headers:
            {
                'content-type': 'application/json',
                authorization: params.properties.api_key_algorithmia
            },
        body: params.payload.series,
        json: true };

    return new Promise(function(resolve, reject) {
        request.post(options, function (error, response, body) {
            if (error) {
                reject({payload:{error}});
            }
            else {
                var response = body['result'];
                temp = {}
                temp['movingAverage'] = response;
                response = temp;
                resolve({payload:{response:response}});
            }
        });
    });
}

exports.main = main;

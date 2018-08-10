var request = require('request');

function main(params) {

    var options = {
        url: ' https://api.algorithmia.com/v1/algo/TimeSeries/RemoveSeasonality/0.1.1',
        headers:
            {
                'content-type': 'application/json',
                authorization: params.properties.api_key_algorithmia
            },
        body: [params.payload.time_series,params.payload.seasonalityValue,"topNPeriods"],
        json: true };

    return new Promise(function(resolve, reject) {
        request.post(options, function (error, response, body) {
            if (error) {reject({payload:{error}});}
            else {
                try{
                    var response = body['result'];
                    resolve({payload:{response:{result:response}}});
                }
                catch(e){
                    resolve({payload:{response:["Exception occurred."]}});
                }
            }
        });
    });
}
exports.main = main;

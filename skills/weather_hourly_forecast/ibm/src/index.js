var request = require('request');

function main(params) {
    var key = params.properties.username_ibm+':'+params.properties.password_ibm;
    var lat = params.payload.latitude;
    var lon = params.payload.longitude;
    var zipcode = params.payload.zipCode;
    var hrs = params.payload.hoursToForecast;
    var url = 'https://' + key + '@twcservice.mybluemix.net/api/weather/v1';

    if (zipcode) {url+='/location/'+zipcode+':4:US';}
    else {url+='/geocode/'+lat+'/'+lon;}

    url += '/forecast/hourly/48hour.json\?units\=m\&language\=en-US';

    return new Promise(function(resolve, reject) {
        request.get(url, function(error, response, body) {
            if (error) {reject({payload:{error}});}
            else {
                var response = JSON.parse(body);

                function hourly_weather(arg,hrs){
                    res = {};
                    res1 = {};
                    res1['locationId'] = arg['metadata']['location_id'];
                    res1['latitude'] = arg['metadata']['latitude'];
                    res1['longitude'] = arg['metadata']['longitude'];
                    res1['unitsOfMeasurement'] = arg['metadata']['units'];

                    temp = [];
                    for (var i = 0;i<hrs;i++){
                        res2 = {};
                        res2['forecastTimeDay'] = arg['forecasts'][i]['fcst_valid_local']+"-"+arg['forecasts'][i]['dow'];
                        res2['weatherPhrase'] = arg['forecasts'][i]['phrase_12char']+"-"+arg['forecasts'][i]['phrase_22char']+"-"+arg['forecasts'][i]['phrase_32char'];
                        res2['weatherSubPhrase'] = arg['forecasts'][i]['subphrase_pt1']+"-"+arg['forecasts'][i]['subphrase_pt2']+"-"+arg['forecasts'][i]['subphrase_pt3'];
                        res2['uvDescriptionWarning'] = arg['forecasts'][i]['uv_desc']+"-"+arg['forecasts'][i]['uv_warning'];
                        res2['temperature'] = arg['forecasts'][i]['temp'];
                        temp.push(res2);
                    }
                    res['metadata'] = res1;
                    res['forecast'] = temp;
                }
				try{
					hourly_weather(response,hrs);
					response = res;
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
                var response = []
                for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '') +':'+ result[i]);}

                resolve({payload:{response:response}});
            }
        });
    });

}

exports.main = main;


/**
 * Fetch weather condition per hour for a given zipcode or lat/lon from weathercompany
 *
 * @param latitude Location to forecast weather.
 * @param longitude Location to forecast weather.
 * @param zipCode Location to forecast weather.
 * @param username The Watson service username.
 * @param password The Watson service password.
 * @return The result parameter with all values analyzed, or error if
 */
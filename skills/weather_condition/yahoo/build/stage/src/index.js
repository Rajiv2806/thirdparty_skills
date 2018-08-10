var request = require('request');

function main(params) {
    var location = params.payload.location || 'Austin, TX';
    var url = 'https://query.yahooapis.com/v1/public/yql?q=select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json';
    return new Promise(function(resolve, reject) {
		try{
			request.get(url, function(error, response, body) {
				if (error) {reject(error);}
				else {
					var condition = JSON.parse(body).query.results.channel.item.condition;
					var text = condition.text;
					var temperature = condition.temp;
					var output = 'At ' + condition.date + ',it is ' + temperature + ' degrees in ' + location + ' and ' + text;
					var response = {message: output, location: location, temperature : temperature, condition: text};
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
		}catch (e){
			resolve({payload:{response:["Exception occurred."]}});
		}
    });
}
exports.main = main;
/**
 * Fetch current weather condition  from yahoo
 *
 * @param location Location to forecast weather.
 * @return The result parameter with all values analyzed, or error if
 */
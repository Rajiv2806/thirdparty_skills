var request = require('request');

function main(params) {
	
	var language = "en";
    var url = 'https://' + params.properties.region_microsoft + '.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases';
    var key = params.properties.api_key_microsoft;


    var options = {
					url : url ,
					body :'{"documents": [{"id": "1","language": "' + language + '","text":"' + params.payload.input_text + '"}]}',
					headers : {'Content-Type' : 'application/json','Ocp-Apim-Subscription-Key' : key}
				 };


    return new Promise(function(resolve, reject) {
        request.post(options, function(error, response, body) {
            if (error) {reject({payload:{error}});}
            else {
				try{
					var response = JSON.parse(body);

					function azure_keyphrases(data){
						d = data['documents'];
						temp = [];
						for(var i = 0 , l = d.length;i<l;i++){
							result = {};
							result['keyPhrases'] = d[i]['keyPhrases'];
							temp.push(result);
						}
					}
					azure_keyphrases(response);
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
					for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '').replace(/^\./,"") +':'+ result[i]);}
					resolve({payload:{response:response}});
				  }
				  catch(e) {resolve({payload:{response:["Exception Occurred"]}});}
            }
        });
    });
}

exports.main = main;
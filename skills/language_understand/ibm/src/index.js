var watson = require('watson-developer-cloud/natural-language-understanding/v1.js');

function main(params) {
	
    var url = 'https://gateway.watsonplatform.net/natural-language-understanding/api';
    var input = params.payload.input_text;
    var nlu = new watson({'username': params.properties.username_ibm, 'password': params.properties.password_ibm, 'version_date': '2017-02-27', 'url': url});

    var parameters = {
        'text': input,
        'features': { //'entities': {'emotion': true,'sentiment': true,'limit': 2},
        'keywords': {
					'emotion': false,'sentiment': false //, //'limit': 2
					}
        }
    }

    return new Promise(function(resolve, reject) {
        nlu.analyze(parameters, function(error, response) {
            if (error) {reject({payload:{error}});}
            else {
				try{
				var response = response;
                var result = {};
				function ibm_keyphrases(data){
					temp = [];
					d = data['keywords'];
					for(var i = 0 , l = d.length;i<l;i++){
						result = {};
						result['keyPhrases'] = d[i]['text'];
						temp.push(result);
					}
				}
				ibm_keyphrases(response);
				response = temp;
            
				var result = {};
				function recurse(cur, prop) {
					if (Object(cur) !== cur) { result[prop] = cur;}
					else if (Array.isArray(cur)) {
						for (var i = 0, l = cur.length; i < l; i++)
							recurse(cur[i], prop + "[" + i + "]");
						if (l == 0) result[prop] = [];
						}
					else {
							var isEmpty = true;
							for (var p in cur) {isEmpty = false; recurse(cur[p], prop ? prop + p : p);}
							if (isEmpty && prop) result[prop] = {};
						 }
				}
				recurse(response, "");
				var response = [];
				for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '').replace(/^\./,"") +':'+ result[i]);}

				resolve({payload:{response:response}});
				} catch(e){resolve({payload:{response:["Exception Occurred"]}});}
			}
        });
    });
}

exports.main = main;

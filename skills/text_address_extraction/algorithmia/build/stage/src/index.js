
var request = require('request');

/*Extracts addresses, contact data, company names and other information from text.
*/

function main(params) {

    var options = {
        url: 'https://api.algorithmia.com/v1/algo/brunni/AddressExtractionFromText',
        headers:
            {
                'content-type': 'application/json',
                authorization: params.properties.api_key_algorithmia
            },
        body: params.payload.text,
        json: true };

    return new Promise(function(resolve, reject) {
        request.post(options, function (error, response, body) {
            if (error) {
                reject({payload:{error}});
            }
            else {
                var response = body;


                function algorithmia_addressextraction(data){
                    temp = [];
                    rec1 = data['result']['results']

                    for(var i = 0 , l= rec1.length;i<l;i++){
                        result = {};
                        rec = rec1[i];
                        result['city'] = rec['city'];
                        result['company'] = rec['company'];
                        result['country'] = rec['country'];
                        result['street'] = rec['street'];
                        result['phone'] = rec['phone'];
                        result['zip'] = rec['zip'];
                        temp.push(result);
                    }
                }try{
					algorithmia_addressextraction(response);
					response = temp;
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
                for (var i in result) {
                    response.push(i.replace(/[\[\/\d/\]]/g, '').replace(/^\./,'') +':'+ result[i]);
                }


                    resolve({payload: {response}});
}
        });
    });

}
exports.main = main;

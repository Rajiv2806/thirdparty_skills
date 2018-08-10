var watson = require('watson-developer-cloud/personality-insights/v3');

function main(params) {

    var url = 'https://gateway.watsonplatform.net/personality-insights/api';
    var input_text = params.payload.input_text;
    var PerChar = params.payload.require_PersonalityCharacteristics ;
    var NeedsPref = params.payload.require_NeedsPreferences;
    var ValuesInfo = params.payload.require_ValuesInfo;
    var ConsPref = params.payload.require_Consumptionpreferences;

    var personality = new watson({'username': params.properties.username_ibm
                                  ,'password': params.properties.password_ibm
                                  ,'version_date': '2017-10-13', 'url': url
                                 });
    var body = {
                'text': input_text
                ,consumption_preferences: true
                ,raw_scores: true
                ,json:true
                ,headers: {'accept-language': 'en','accept': 'application/json'}
              };

    return new Promise(function(resolve, reject) {
        personality.profile(body, function(error, response) {
            if (error) reject({payload : {error}});
            else{
                try{
                var response = response;

                function personality_insights_ibm(args){
                    result = {}
                    result['message'] = "Hi, Here are the Personality Insights for your text"

                    if(PerChar){
                                perChar_List = args['personality']
                                perChar_Doc = {}
                                perChar_SigList = []
                                perChar_InSigList = []
                                for (var i = 0; i< perChar_List.length;i++){
                                    if(perChar_List[i]['significant']) {perChar_SigList.push(perChar_List[i]['name'])}
                                    else{perChar_InSigList.push(perChar_List[i]['name'])}
                                }
                                perChar_Doc['significantTraits'] = perChar_SigList
                                perChar_Doc['insignificantTraits'] = perChar_InSigList
                                result['personalityInsights'] = perChar_Doc
                    }
                    if(NeedsPref){
                                needs_List = args['needs']
                                needs_Doc = {}
                                needs_SigList = []
                                needs_InSigList = []
                                for (var i = 0; i< needs_List.length;i++){
                                    if(needs_List[i]['significant']) {needs_SigList.push(needs_List[i]['name'])}
                                    else{needs_InSigList.push(needs_List[i]['name'])}
                                }
                                needs_Doc['significantNeeds'] = needs_SigList
                                needs_Doc['insignificantNeeds'] = needs_InSigList
                                result['needs'] = needs_Doc
                    }
                    if(ValuesInfo){
                                val_List = args['values']
                                val_Doc = {}
                                val_SigList = []
                                val_InSigList = []
                                for (var i = 0; i< val_List.length;i++){
                                    if(val_List[i]['significant']) {val_SigList.push(val_List[i]['name'])}
                                    else{val_InSigList.push(val_List[i]['name'])}
                                }
                                val_Doc['significantValues'] = val_SigList
                                val_Doc['insignificantValues'] = val_InSigList
                                result['values'] = val_Doc
                    }
                    if(ConsPref){
                                ConsPref_List = args['consumption_preferences']
                                ConsPref_Doc = {}
                                for (var i = 0; i< ConsPref_List.length;i++){
                                    internal_dict = {}
                                    ConsPref_keyValue = ConsPref_List[i]['consumption_preference_category_id'].replace("consumption_preferences_","")
                                    ConsPref_list1 = ConsPref_List[i]['consumption_preferences']

                                    ConsPref_Likely = [];ConsPref_Unlikely = [];ConsPref_Neutral = []

                                    for (var j = 0; j< ConsPref_list1.length;j++){
                                        if(ConsPref_list1[j]['score'] == 1) {ConsPref_Likely.push(ConsPref_list1[j]['name'].replace("Likely to ",""))}
                                        else if(ConsPref_list1[j]['score'] == 0){ConsPref_Unlikely.push(ConsPref_list1[j]['name'].replace("Likely to ",""))}
                                        else{ConsPref_Neutral.push(ConsPref_list1[j]['name'].replace("Likely to ",""))}
                                    }

                                    internal_dict['likelyToConsume'] = ConsPref_Likely
                                    internal_dict['unLikelyToConsume'] = ConsPref_Unlikely
                                    internal_dict['neutralToConsume'] = ConsPref_Neutral

                                    ConsPref_Doc[ConsPref_keyValue] = internal_dict
                                }
                                result['consumption_preferences'] = ConsPref_Doc
                    }
                }
                personality_insights_ibm(response)
                response = result

                var result = {};
                function recurse(cur, prop) {
                    if (Object(cur) !== cur) { result[prop] = cur;}
                    else if (Array.isArray(cur)) {
                        for (var i = 0, l = cur.length; i < l; i++) recurse(cur[i], prop + "[" + i + "]");
                        if (l == 0) result[prop] = [];
                        }
                    else {
                            var isEmpty = true;
                            for (var p in cur) { isEmpty = false; recurse(cur[p], prop ? prop + "." + p : p);}
                            if (isEmpty && prop) result[prop] = {};
                        }
                }

                recurse(response, "")
                var response = []
                for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '') +':'+ result[i]);}

                resolve({payload: {response:response}});
                } catch(e) {
                    resolve({payload: {response:["Exception occurred"]}});
                }

            }
        });
    });
}

exports.main = main;
var watson = require('watson-developer-cloud/discovery/v1');
 
function main(params) {

    var url = 'https://gateway.watsonplatform.net/discovery/api';
    var input_query = params.payload.input_query;
    var num_of_results = params.payload.num_of_results || 1;
    var display_crawl_date = params.payload.display_crawl_date || 1;
    var display_publication_date = params.payload.display_publication_date || 1;
    var display_url = params.payload.display_url || 1;
    var display_host = params.payload.display_host || 1;
    var display_text = params.payload.display_text || 1;
    var display_country = params.payload.display_country || 1;
    var display_enriched_title = params.payload.display_enriched_title || 1;
    var display_enriched_text = params.payload.display_enriched_text || 1;
    var display_entities = params.payload.display_entities || 1;
    var display_sentiment = params.payload.display_sentiment || 1;
    var display_semantic_roles = params.payload.display_semantic_roles || 1;
    var display_concepts = params.payload.display_concepts || 1;
    var display_categories = params.payload.display_categories || 1;
    var display_relations = params.payload.display_relations || 1;
    var display_keywords = params.payload.display_keywords || 1;

    var environment_id = "system";
    var collection_id = "news-en";
    var filter = "language:(english|en)";
    var aggregations = "";

    var company = new watson({'username': params.properties.username_watson, 'password': params.properties.password_watson, 'version_date': '2017-11-07', 'url': url});

    var parameters = {
        'environment_id': environment_id,
        'collection_id' : collection_id,
        "filter": filter,
        "count": num_of_results,
        "aggregations": aggregations,
        'query': input_query,
    };

    var promise = new Promise(function(resolve, reject) {
        company.query(parameters, function(error, response) {
            if (error){reject({payload:{error}});}
            else {
                try{
                var response = response;

                function news_insights_ibm(data){
                    result = {}; temp = [];
                    results_list = data['results']
                    result['message'] = "Showing "+num_of_results+" out of "+data['matching_results']+" for "+input_query

                    for (var i =0;i<results_list.length;i++){
                        temp_result = {};
                        if (display_crawl_date) {temp_result['crawl_date'] = results_list[i]['crawl_date']}
                        if (display_publication_date) {temp_result['publication_date'] = results_list[i]['publication_date']}
                        if (display_url) {temp_result['url'] = results_list[i]['url']}
                        if (display_host) {temp_result['host'] = results_list[i]['host']}
                        if (display_text) {temp_result['text'] = results_list[i]['text']}
                        if (display_country) {temp_result['country'] = results_list[i]['country']}
                        enriched_title = {}
                        if (display_enriched_title) {
                                    if(display_entities) enriched_title['entities'] = results_list[i]['enriched_title']['entities']
                                    if(display_sentiment) enriched_title['sentiment'] = results_list[i]['enriched_title']['sentiment']
                                    if(display_semantic_roles) enriched_title['semantic_roles'] = results_list[i]['enriched_title']['semantic_roles']
                                    if(display_concepts) enriched_title['concepts'] = results_list[i]['enriched_title']['concepts']
                                    if(display_categories) enriched_title['categories'] = results_list[i]['enriched_title']['categories']
                                    if(display_relations) enriched_title['relations'] = results_list[i]['enriched_title']['relations']
                                    if(display_keywords) enriched_title['keywords'] = results_list[i]['enriched_title']['keywords']
                                    }
                        temp_result['enriched_title'] = enriched_title
                        enriched_text = {}
                        if (display_enriched_text) {
                                    if(display_entities) enriched_text['entities'] = results_list[i]['enriched_text']['entities']
                                    if(display_sentiment) enriched_text['sentiment'] = results_list[i]['enriched_text']['sentiment']
                                    if(display_semantic_roles) enriched_text['semantic_roles'] = results_list[i]['enriched_text']['semantic_roles']
                                    if(display_concepts) enriched_text['concepts'] = results_list[i]['enriched_text']['concepts']
                                    if(display_categories) enriched_text['categories'] = results_list[i]['enriched_text']['categories']
                                    if(display_relations) enriched_text['relations'] = results_list[i]['enriched_text']['relations']
                                    if(display_keywords) enriched_text['keywords'] = results_list[i]['enriched_text']['keywords']
                                    }
                        temp_result['enriched_text'] = enriched_text
                        temp.push(temp_result)
                    }
                    result['results'] = temp
                    return result
                }
                response = news_insights_ibm(response)

                var result = {};
                function recurse(cur, prop) {
                    if (Object(cur) !== cur) {result[prop] = cur;}
                    else if (Array.isArray(cur)) {
                        for (var i = 0, l = cur.length; i < l; i++) {recurse(cur[i], prop + "[" + i + "]");}
                        if (l == 0) result[prop] = [];
                    } else {
                        var isEmpty = true;
                        for (var p in cur) {isEmpty = false;recurse(cur[p], prop ? prop + "." + p : p);}
                        if (isEmpty && prop) result[prop] = {};
                    }
                }
                recurse(response, "");
                var response = []
                for (var i in result) {response.push(i.replace(/[\[\/\d/\]]/g, '') +':'+ result[i]);}

                resolve({payload:{response:response}});
            }
            catch(e){
                resolve({payload:{response:["Exception occurred"]}});
            }
           }
        });
    });
    return promise;
}

exports.main = main;
import httplib
from urlparse import urlparse
import json

def main(args):
    payload_req = {
                    "config": {"languageCode": "en-US","enableWordTimeOffsets": "false"},
                    "audio": {"uri":args["payload"]["audio_url"]}
                  }
    payload = json.dumps(payload_req)
    apikey = "Bearer "+ args["properties"]["bearer_key_google"]
    url = "https://speech.googleapis.com/v1/speech:recognize"
    parsed_url = urlparse(url)
    uri = '{uri.path}?{uri.query}'.format(uri=parsed_url)
    domain = parsed_url.netloc
    conn = httplib.HTTPSConnection(domain)
    headers = {'content-type': "application/json",'Authorization': apikey}
    conn.request("POST", uri, payload, headers)
    res = conn.getresponse()
    data = res.read()
    data = json.loads(data.decode("utf-8"))
    try:
        data = sync_speech_text_google(data)
        data = flattenDict(data)
        return {'payload': {'response': data}}
    except:
        return {'payload': {'response': ['Exception occurred']}}

def sync_speech_text_google(data):
    rec = data['results']
    temp = []
    for i in rec:
        rec1 = i['alternatives']
        for j in rec1:
            response = {};
            response['confidence'] = j['confidence']
            response['transcript'] = j['transcript']
            temp.append(response)
    return temp

def flattenDict(d, result=None):
    output = d
    output_list = []
    for rec in output:
        if bool(rec):
            keys = rec.keys()
            for key in keys:
                if type(rec[key]) is list:
                    mylist = list_manipulation(key, rec[key])
                    if any(isinstance(el, list) for el in mylist):
                        mylist = make_generic(mylist)
                        output_list += mylist
                elif type(rec[key]) is dict:
                    output_list += dict_manipulation(key, rec[key])
                else:
                    output_list.append(key + ':' + str(rec[key]))
        else:
            pass

    return output_list

def list_manipulation(parentkey, mylist):
    temp = []
    for rec in mylist:
        if type(rec) is list:
            temp.append(list_manipulation(parentkey, rec))
        elif type(rec) is dict:
            temp.append(dict_manipulation(parentkey, rec))
        else:
            temp.append(rec)
    return temp

def dict_manipulation(parentkey, rec):
    temp = []
    keys = rec.keys()
    for key in keys:
        if type(rec[key]) is dict:
            temp.append(dict_manipulation(parentkey+'.'+key, rec[key]))
        elif type(rec[key]) is list:
            temp.append(list_manipulation(parentkey+'.'+key, rec[key]))
        else:
            temp.append(parentkey+'.'+key+':'+str(rec[key]))
    return temp

def make_generic(mylist):
    op = []
    for rec in mylist:
        if any(isinstance(el, list) for el in rec):
            make_generic(rec)
        if type(rec) is list:
            for record in rec:
                op.append(record)
        else:
            op.append(rec)
    return op

if __name__ == "__main__":
    json_data = json.load(open('parameters.json'))
    print(main(json_data))
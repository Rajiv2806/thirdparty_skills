import httplib,urllib
from urlparse import urlparse
import json

def main(args):
    payload_req = {"requests": [{"image": {"source": {"imageUri": args["payload"]["image_url"]}},"features": [{"type": "FACE_DETECTION"}]}]}
    payload = json.dumps(payload_req)
    url = "https://vision.googleapis.com/v1/images:annotate?key=" + args["properties"]["api_key_google"]
    parsed_url = urlparse(url)
    uri = '{uri.path}?{uri.query}'.format(uri=parsed_url)
    domain = parsed_url.netloc

    conn = httplib.HTTPSConnection(domain)
    headers = {'content-type': "application/json"}
    conn.request("POST", uri, payload, headers)
    res = conn.getresponse()
    data = res.read()
    data = json.loads(data.decode("utf-8"))
    try:
        data = google_facedetection(data)
        data = flattenDict(data, result=None)
        return {'payload': {'response': data}}
    except:
        return {'payload': {'response': ['Exception occurred']}}


def google_facedetection(json_obj):
    temp = []
    rec = json_obj['responses']
    for a1 in rec:
        rec1 =  a1['faceAnnotations']
        for a2 in rec1:
            result = {}
            result['boundingBox'] = {"Height":"","Left":"","Top":"","Width":""}
            result['faceConfidence'] = a2['detectionConfidence'];
            result['age'] = "";
            result['gender'] = "";
            result['smile'] = "";
            result['faceLandmarks'] = [];
            rec2 = a2['landmarks'];
            for a3 in rec2:
                result2 = {}
                result2['type'] = a3['type']
                result2['x'] = a3['position']['x']
                result2['y'] = a3['position']['y']
                result2['z'] = a3['position']['z']
                result['faceLandmarks'].append(result2)
            temp.append(result)
    return temp

def flattenDict(d, result=None):
    output = d
    output_list = []
    # for rec in output['payload']['response']:
    for rec in output:
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
            temp.append(dict_manipulation(parentkey+'_'+key, rec[key]))
        elif type(rec[key]) is list:
            temp.append(list_manipulation(parentkey+'_'+key, rec[key]))
        else:
            temp.append(parentkey+'_'+key+':'+str(rec[key]))
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
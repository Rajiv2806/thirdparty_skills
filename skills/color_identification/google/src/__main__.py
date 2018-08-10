import httplib,urllib
from urlparse import urlparse
import json

def main(args):
	payload_req = {"requests": [
      {
      "image": {"source": {"imageUri": args["payload"]["image_url"]}},
      "features": [{"type": "IMAGE_PROPERTIES"}]
      }
    ]}
	
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
    data = google_detect_image_properties(data)
    data = flattenDict(data)
    return {'payload':{'response':data}}

def google_detect_image_properties(json_obj):
    temp = []
    rec = json_obj['responses']
    for a1 in rec:
        rec1 =  a1['imagePropertiesAnnotation']['dominantColors']['colors']
        for a2 in rec1:
            result = {}
            result['dominantColorBackground'] = ""
            result['dominantColorForeground'] = ""
            result['dominantColors'] = ""
            result['isBWImage'] = ""
            result['rbg_values'] = str(a2['color']['red'])+"_"+str(a2['color']['blue'])+"_"+str(a2['color']['green'])  #RGB components of the color.
            result['fractionOfPixels'] = a2['pixelFraction']  #The fraction of pixels the color occupies in the image. Value in range [0, 1].
            result['score'] = a2['score']  #Image-specific score for this color. Value in range [0, 1].
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
                output_list.append(key + ': ' + str(rec[key]))

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
            temp.append(parentkey+'.'+key+': '+str(rec[key]))
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

#https://cloud.google.com/vision/docs/reference/rest/v1/images/annotate#AnnotateImageRequest
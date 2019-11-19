import os
from flask import Flask, request, jsonify
import requests
import slate
import base64
from io import BytesIO
from PIL import Image
import re
import json
from gensim.models.doc2vec import Doc2Vec, TaggedDocument
from sklearn.cluster import KMeans

import json

app = Flask(__name__)

data = {}

@app.after_request
def add_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] =  "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    response.headers['Access-Control-Allow-Methods']=  "POST, GET, PUT, DELETE, OPTIONS"
    return response

@app.route("/save_pdf/", methods=["GET"])
def save_pdf():
    url = request.args.get('url')
    filename = request.args.get('filename')
    myfile = requests.get(url)
    open('papers/' + filename, 'wb').write(myfile.content)
    data['save_pdf_response'] = "paper saved!"
    return(data)

@app.route("/pdf_parse/", methods=["GET"])
def pdf_parse():
    filename = 'papers/' + request.args.get('paper_name')
    with open(filename, 'rb') as f:
        extracted_text = slate.PDF(f)
    data['parse_pdf_response'] = extracted_text
    return (data)

#@app.route("/save_my_papers/", methods=["GET"])
#def save_my_papers():

import re
import json
from gensim.models.doc2vec import Doc2Vec, TaggedDocument

@app.route("/doc2vec/", methods=["GET"])
def doc2vec():

    search_term = request.args.get('search_term')

    with open('papers/domain_1.json') as json_file:
        data = json.load(json_file)

    documents = [TaggedDocument(doc, [i]) for i, doc in enumerate(data)]

    model = Doc2Vec(documents, vector_size=5, window=2, min_count=1, workers=4)

    # appending all the vectors in a list for training
    X = []
    for i in model.docvecs:
        X.append(model.docvecs[i])

    # create the kmeans object withe vectors created previously
    kmeans = KMeans(n_clusters=4, random_state=0).fit(X)

    data['doc2vec_response'] = {}

    # print all the labels
    data['doc2vec_response']['kmeans.labels_'] = kmeans.labels_

    return(data)

@app.route("/list_papers/", methods=["GET"])
def list_papers():
    data['my_papers'] = os.listdir(request.args.get('directory'))
    return(data)

@app.route("/save_material/", methods=["GET"])
def save_material():
    file = request.args.get('data')
    starter = file.find(',')
    image_data = file[starter + 1:]
    image_data = bytes(image_data, encoding="ascii")
    im = Image.open(BytesIO(base64.b64decode(image_data)))
    im.save(request.args.get('filename'))
    return('done')

if __name__ == "__main__":
    app.run(debug=True, port=5000)


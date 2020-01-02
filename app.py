#!flask/bin/python
from flask import Flask, jsonify
from flask import make_response
from flask import request
import requests as rs
import urllib
from bs4 import BeautifulSoup
from urllib.request import urlopen
import json
from flask_cors import CORS, cross_origin

app = Flask(__name__)


# Where USD is the base currency you want to use
url = 'https://api.exchangerate-api.com/v4/latest/USD'
def DolarParse():
    k=0
    pasteURL = "http://tr.investing.com/currencies/usd-try"
    data = urlopen(urllib.request.Request(pasteURL, headers={'User-Agent': 'Mozilla'})).read()
    parse = BeautifulSoup(data)
    for dolar in parse.find_all('span', id="last_last"):
        liste = list(dolar)
        #print("Güncel Dolar Kuru: " + str(liste))
    for i in liste:
        k=i
    return k


def EuroParse():
    pasteURL = "http://tr.investing.com/currencies/eur-try"
    data = urlopen(urllib.request.Request(pasteURL, headers={'User-Agent': 'Mozilla'})).read()
    parse = BeautifulSoup(data)
    for dolar in parse.find_all('span', id="last_last"):
        liste = int(dolar)
        #print("Güncel Euro Kuru: " + str(liste))
    return liste

@app.route('/api/exchance', methods=['GET'])
@cross_origin() # allow all origins all methods.
def get_products():
    response = rs.get(url)
    data = response.json()
    return jsonify({'usd': data})

@app.route('/api/usd', methods=['GET'])
@cross_origin() # allow all origins all methods.
def get_products2():
    liste = DolarParse()
    #liste = json.dumps(liste)
    return jsonify({'usd': liste})

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'HTTP 404 Error': 'The content you looks for does not exist. Please check your request.'}), 404)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response

 
if __name__ == '__main__':
    cors = CORS(app,resources={r"*": {"origins": "*"}},allow_headers="*")
    # app.run(host='0.0.0.0',port=5000,ssl_context='adhoc')#app.run(debug=True)#!flask/bin/python

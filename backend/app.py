from flask import Flask,request
from flask_cors import CORS, cross_origin
import trie

from flask.json import jsonify

app = Flask(__name__)
CORS(app)
t = trie.Trie()
returnable = {"val":"Hello React, this is flask .."}

@app.route("/")
async def home():
    return jsonify(returnable)
    

@app.route("/word",methods=["POST"])
def frontend_data():
    req = request.json
    print(req)
    res = t.search(req)
    returnable = {"val":res}
    return jsonify(returnable)

if __name__ == "__main__":
    app.run(debug=True)

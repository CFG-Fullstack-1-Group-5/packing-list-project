from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from list_return import input_retrieved
from db_access import necessary_clothes


# Initializing flask app
app = Flask(__name__)
cors = CORS(app)
  
  
# Route for seeing a data
@app.route('/data')
@cross_origin()
def get_weather():
    return jsonify(input_retrieved)

@app.route('/clothes')
@cross_origin()
def get_clothes():
    # Returning an api for showing in  reactjs
    return jsonify(necessary_clothes)
    
# Running app
if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, jsonify
from list_return import input_retrieved
from db_access import necessary_clothes


# Initializing flask app
app = Flask(__name__)
  
# Route for seeing a data
@app.route('/data')
def get_weather():
    return jsonify(input_retrieved)

@app.route('/clothes')
def get_clothes():
    # Returning an api for showing in  reactjs
    return jsonify(necessary_clothes)
    
# Running app
if __name__ == '__main__':
    app.run(debug=True)
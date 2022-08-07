from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from list_return import *
from config import USER, PASSWORD, HOST
import pymysql

# Initializing flask app
app = Flask(__name__)
CORS(app)

temperature = ''
variants = []
num_days = ''
style_found = []
activity_found = []
dates = []
city = ''


@app.route('/user_input', methods=['POST'])
@cross_origin()
def get_user_input():
    global temperature, variants, num_days, style_found, activity_found, dates, city
    print(request.json)
    temperature = average_temp(request.json)
    variants = ','.join([find_rain(request.json)] +
                        [find_snow(request.json)] + [find_sun(request.json)])
    num_days = count_days(request.json)
    style_found = find_style(request.json)
    activity_found = find_activity(request.json)
    dates = find_dates(request.json)  
    city = request.json['weather']['city']
    return request.json

@app.route('/clothes')
@cross_origin()
def get_clothes():
    global temperature, variants, num_days, style_found, activity_found
    print(temperature)
    args = [num_days, temperature, style_found, activity_found, variants]
    print(args)
    try:
        database_connection = pymysql.connect(host=HOST, user=USER, password=PASSWORD, database="go_packing_1")
        cursor = database_connection.cursor()
        print(f"Connected to DB")
        # print(args)
        cursor.callproc('sp_packing_list', args)
        results = cursor.fetchall()
        print(results)
        clothes_list = {'clothes': [],
                       'extras': []}
        for item in results:
            if item[1] == 'extras':
                clothes_list['extras'].append(item[0])
            elif item[1] == 'essential':
                clothes_list['clothes'].append(item[0]+' x '+str(item[2]))
            elif item[1] == 'general':
                clothes_list['clothes'].append(item[0]+' x '+str(item[2]))
            else:
                clothes_list['clothes'].append(item[0]+' x '+str(item[2]))
        return jsonify(clothes_list)
    except Exception as e:
        return e
    finally:
        if database_connection:
            database_connection.close()
            print("Database connection is closed")

@app.route('/data')
@cross_origin()
def get_display_information():
    global dates, city
    data = {'city': city,
            'dates': dates
            }
    return jsonify(data)

# Running app
if __name__ == '__main__':
    app.run(debug=True)

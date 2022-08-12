from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from list_return import *
from config import USER, PASSWORD, HOST
import pymysql

# Initializing flask app
app = Flask(__name__)
CORS(app)

# set global variables to pass them between routes
temperature = ''
variants = []
num_days = ''
style_found = []
activity_found = []
dates = []
city = ''
activities = []
weather_details = {'temperature': '',
                    'description': '',
                    'icon': ''}


@app.route('/user_input', methods=['POST'])
@cross_origin()
def get_user_input():
    # set global variables based on incoming user input and weather API details
    global temperature, variants, num_days, style_found, activity_found, dates, city, activities, weather_details
    temperature = average_temp(request.json)
    variants = ','.join([find_rain(request.json)] +
                    [find_snow(request.json)] + [find_sun(request.json)])
    num_days = count_days(request.json)
    style_found = find_style(request.json)
    activity_found = find_activity(request.json)
    dates = find_dates(request.json)  
    city = request.json['weather']['city']
    activities = []
    for active in activity_found.split(','):
        if active == 'hiking':
            activities.append('Hiking')
        elif active == 'beach':
            activities.append('Beach Days')
        elif active == 'ski':
            activities.append('Skiing')
        elif active == 'formalwear':
            activities.append('Formal')
        elif active == 'activewear':
            activities.append('Active')
    weather_details = {'temperature': temperature,
                    'description': request.json['weather']['days'][0]['conditions'],
                    'icon': request.json['weather']['days'][0]['icon']}
    return jsonify(request.json)

@app.route('/clothes')
@cross_origin()
def get_clothes():
    # retrieve clothes data from database based on user input
    global temperature, variants, num_days, style_found, activity_found
    args = [num_days, temperature, style_found, activity_found, variants]
    try:
        database_connection = pymysql.connect(host=HOST, user=USER, password=PASSWORD, database="go_packing_1")
        cursor = database_connection.cursor()
        print(f"Connected to DB")
        cursor.callproc('sp_packing_list', args)
        results = cursor.fetchall()
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
    # display data for front_end
    global dates, city, activities, weather_details
    data = {'city': city,
            'dates': dates,
            'activities': activities,
            'weather': weather_details
            }
    return jsonify(data)


# Running app
if __name__ == '__main__':
    app.run(debug=True)
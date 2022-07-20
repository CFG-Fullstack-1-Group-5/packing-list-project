import requests
import json


                                    #Create dictionary with user vacation details
vacation = {}
first_name = vacation["name"] = input("First Name: ")
last_name = vacation["surname"] = input("Last Name: ")
country = vacation["country"] = input("Country: ")
city = vacation["city"] = input("City: ")

                                    #Link API using country and city from user input
request = requests.get(
        f"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{vacation['country']},{vacation['city']}/next21days?unitGroup=us&key=VXDNWKZL68J3PC69HBAU4WR9N")
response = request.json()

                                    # function to return current weather details
def weather_details():
    curr_temp = response['currentConditions']['temp']
    curr_conditions = response['currentConditions']['conditions']
    expected_conditions = response['description']

                                    # if else statement to return weather details if no error code
    if request.status_code == 200:
        print("\n----------------------------------------------------------- \n"
            f"The temperature in {vacation['city']} is currently {curr_temp}. \n"
              f"The conditions are {curr_conditions}. \n"
              f"Over the next 21 days expect {expected_conditions} \n \n"
              "----------------------------------------------------------- \n"
              "TEMP OVER NEXT 21 DAYS \n"
              "----------------------------------------------------------- \n")
        
        for item in range(1,22):
            description = response['days'][item]['description']
            predicted_temp = response['days'][item]['temp']
            min_temp = response['days'][item]['tempmin']
            max_temp = response['days'][item]['tempmax']
            print(f"DAY {item}: {description} \nPredicted Temp: {predicted_temp} | Min Temp: {min_temp} | Max Temp: {max_temp}  \n")
    else:
        print(f"Error: {request.status_code}")


weather_details()

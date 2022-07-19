import requests
import json

##TODO::::::: USE FOR LOOP TO NEATEN AND SHORTEN THE DAILY TEMPERATURE


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

                                    # if else statement to print weather details if no error code returned
    if request.status_code == 200:
        print("\n----------------------------------------------------------- \n"
            f"The temperature in {vacation['city']}, {vacation['country']} is "
              f"currently {curr_temp}. \n"
              f"The conditions are {curr_conditions}. \n"
              f"Over the next 21 days expect {expected_conditions} \n \n"
              "----------------------------------------------------------- \n"
              "TEMP OVER NEXT 21 DAYS \n"
              "----------------------------------------------------------- \n")
        print(f"DAY 1: {response['days'][1]['description']} \nPredicted Temp: {response['days'][1]['temp']} | Min Temp: {response['days'][1]['tempmin']} | Max Temp: {response['days'][1]['tempmax']}  \n")
        print(f"DAY 2: {response['days'][2]['description']} \nPredicted Temp: {response['days'][2]['temp']} | Min Temp: {response['days'][2]['tempmin']} | Max Temp: {response['days'][2]['tempmax']}  \n")
        print(f"DAY 3: {response['days'][3]['description']} \nPredicted Temp: {response['days'][3]['temp']} | Min Temp: {response['days'][3]['tempmin']} | Max Temp: {response['days'][3]['tempmax']}  \n")
        print(f"DAY 4: {response['days'][4]['description']} \nPredicted Temp: {response['days'][4]['temp']} | Min Temp: {response['days'][4]['tempmin']} | Max Temp: {response['days'][4]['tempmax']}  \n")
        print(f"DAY 5: {response['days'][5]['description']} \nPredicted Temp: {response['days'][5]['temp']} | Min Temp: {response['days'][5]['tempmin']} | Max Temp: {response['days'][5]['tempmax']}  \n")
        print(f"DAY 6: {response['days'][6]['description']} \nPredicted Temp: {response['days'][6]['temp']} | Min Temp: {response['days'][6]['tempmin']} | Max Temp: {response['days'][6]['tempmax']}  \n")
        print(f"DAY 7: {response['days'][7]['description']} \nPredicted Temp: {response['days'][7]['temp']} | Min Temp: {response['days'][7]['tempmin']} | Max Temp: {response['days'][7]['tempmax']}  \n")
        print(f"DAY 8: {response['days'][8]['description']} \nPredicted Temp: {response['days'][8]['temp']} | Min Temp: {response['days'][8]['tempmin']} | Max Temp: {response['days'][8]['tempmax']}  \n")
        print(f"DAY 9: {response['days'][9]['description']} \nPredicted Temp: {response['days'][9]['temp']} | Min Temp: {response['days'][9]['tempmin']} | Max Temp: {response['days'][9]['tempmax']}  \n")
        print(f"DAY 10: {response['days'][10]['description']} \nPredicted Temp: {response['days'][10]['temp']} | Min Temp: {response['days'][10]['tempmin']} | Max Temp: {response['days'][10]['tempmax']}  \n")
        print(f"DAY 11: {response['days'][11]['description']} \nPredicted Temp: {response['days'][11]['temp']} | Min Temp: {response['days'][11]['tempmin']} | Max Temp: {response['days'][11]['tempmax']}  \n")
        print(f"DAY 12: {response['days'][12]['description']} \nPredicted Temp: {response['days'][12]['temp']} | Min Temp: {response['days'][12]['tempmin']} | Max Temp: {response['days'][12]['tempmax']}  \n")
        print(f"DAY 13: {response['days'][13]['description']} \nPredicted Temp: {response['days'][13]['temp']} | Min Temp: {response['days'][13]['tempmin']} | Max Temp: {response['days'][13]['tempmax']}  \n")
        print(f"DAY 14: {response['days'][14]['description']} \nPredicted Temp: {response['days'][14]['temp']} | Min Temp: {response['days'][14]['tempmin']} | Max Temp: {response['days'][14]['tempmax']}  \n")
        print(f"DAY 15: {response['days'][15]['description']} \nPredicted Temp: {response['days'][15]['temp']} | Min Temp: {response['days'][15]['tempmin']} | Max Temp: {response['days'][15]['tempmax']}  \n")
        print(f"DAY 16: {response['days'][16]['description']} \nPredicted Temp: {response['days'][16]['temp']} | Min Temp: {response['days'][16]['tempmin']} | Max Temp: {response['days'][16]['tempmax']}  \n")
        print(f"DAY 17: {response['days'][17]['description']} \nPredicted Temp: {response['days'][17]['temp']} | Min Temp: {response['days'][17]['tempmin']} | Max Temp: {response['days'][17]['tempmax']}  \n")
        print(f"DAY 18: {response['days'][18]['description']} \nPredicted Temp: {response['days'][18]['temp']} | Min Temp: {response['days'][18]['tempmin']} | Max Temp: {response['days'][18]['tempmax']}  \n")
        print(f"DAY 19: {response['days'][19]['description']} \nPredicted Temp: {response['days'][19]['temp']} | Min Temp: {response['days'][19]['tempmin']} | Max Temp: {response['days'][19]['tempmax']}  \n")
        print(f"DAY 20: {response['days'][20]['description']} \nPredicted Temp: {response['days'][20]['temp']} | Min Temp: {response['days'][20]['tempmin']} | Max Temp: {response['days'][20]['tempmax']}  \n")
        print(f"DAY 21: {response['days'][21]['description']} \nPredicted Temp: {response['days'][21]['temp']} | Min Temp: {response['days'][21]['tempmin']} | Max Temp: {response['days'][21]['tempmax']}  \n")
    else:
        print(f"Error: {request.status_code}")


weather_details()



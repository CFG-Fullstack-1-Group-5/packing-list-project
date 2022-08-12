import json
from src.backend.list_return import *

with open('./Unit_tests/json_test_file.json', 'r') as f:
    data = json.load(f)

def test_average_temp():
    assert average_temp(data) == 21

def test_weather_condition():
    assert weather_condition(data) == ['rain', 'rain, partially cloudy', 'overcast']
    
def test_find_rain():
    assert find_rain(data) == 'rain'

def test_find_snow():
    assert find_snow(data) == 'other'

def test_find_sun():
    assert find_sun(data) == 'other'

def test_count_days():
    assert count_days(data) == 2

def test_find_style():
    assert find_style(data) == 'unisex,unisex'

def test_find_style():
    assert find_activity(data) == 'hiking,activewear,formalwear,essential,general'

def test_find_dates():
    assert find_dates(data) == {'startDate': '2022-08-21', 'endDate': '2022-08-23'}


if __name__ == "__main__":
    pass
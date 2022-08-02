import json

def read_json(fpath):
    with open(fpath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data

input_retrieved = read_json("input_data.json")

def average_temp(json_call):
    average_temp = []
    [average_temp.append(temperature['temp']) for temperature in json_call['data']['weather']['days']]
    return sum(average_temp)//len(average_temp)

def weather_condition(json_call):
    weather_conditions = []
    [weather_conditions.append(conditions['conditions'].lower()) for conditions in json_call['data']['weather']['days']]
    return weather_conditions

def find_rain(json_call):
    return next(('rain' for cond in weather_condition(json_call) if 'rain' in cond), 'other')

def find_snow(json_call):
    return next(('snow' for cond in weather_condition(json_call) if 'snow' in cond), 'other')

def find_sun(json_call):
    return next(('clear' for cond in weather_condition(json_call) if 'clear' in cond), 'other')

def count_days(json_call):
    first_day = int(json_call['data']['weather']['days'][0]['datetime'][-2:])
    last_day = int(json_call['data']['weather']['days'][-1]['datetime'][-2:])
    return last_day - first_day + 1

def find_style(json_call):
    style_selected = []
    for style in json_call['data']['style']:
        style_selected.append(style)
    return ','.join(style_selected)

def find_activity(json_call):
    activity_selected = []
    for activity in json_call['data']['activities']:
        activity_selected.append(activity)
    activity_selected.append("essential")
    return ','.join(activity_selected)

def assign_variables():
    style_found = find_style(input_retrieved)
    activity_found = find_activity(input_retrieved)
    temperature = average_temp(input_retrieved)
    num_days = count_days(input_retrieved)
    variants = ','.join([find_rain(input_retrieved)] +
                        [find_snow(input_retrieved)] + [find_sun(input_retrieved)])


if __name__ == '__main__':
    assign_variables()

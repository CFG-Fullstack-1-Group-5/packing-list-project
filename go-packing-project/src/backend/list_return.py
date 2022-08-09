def average_temp(json_call):
    average_temp = []
    [average_temp.append(temperature['temp']) for temperature in json_call['weather']['days']]
    return sum(average_temp)//len(average_temp)


def weather_condition(json_call):
    weather_conditions = []
    [weather_conditions.append(conditions['conditions'].lower()) for conditions in json_call['weather']['days']]
    return weather_conditions


def find_rain(json_call):
    return next(('rain' for cond in weather_condition(json_call) if 'rain' in cond), 'other')


def find_snow(json_call):
    return next(('snow' for cond in weather_condition(json_call) if 'snow' in cond), 'other')


def find_sun(json_call):
    return next(('clear' for cond in weather_condition(json_call) if 'clear' in cond), 'other')


def count_days(json_call):
    first_day = int(json_call['weather']['days'][0]['datetime'][-2:])
    last_day = int(json_call['weather']['days'][-1]['datetime'][-2:])
    return last_day - first_day


def find_style(json_call):
    style_selected = []
    for style in json_call['style']:
        style_selected.append(style)
    style_selected.append("unisex")
    return ','.join(style_selected)


def find_activity(json_call):
    activity_selected = []
    for activity in json_call['activities']:
        activity_selected.append(activity)
    activity_selected.append("essential")
    activity_selected.append("general")
    return ','.join(activity_selected)


def find_dates(json_call):
    dates = {'startDate': '',
             'endDate': ''}
    dates['startDate'] = json_call['weather']['days'][0]['datetime']
    dates['endDate'] = json_call['weather']['days'][-1]['datetime']
    return dates
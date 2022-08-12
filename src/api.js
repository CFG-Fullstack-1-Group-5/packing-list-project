// API details for GEOLOCATION
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '46c50a5d3dmsh9ab94cb6c333a2fp1c0669jsn5ce077c6107d',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// API details for WEATHER
export const WEATHER_API_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services"
export const WEATHER_API_KEY = "EKGWNKZ42D6UFTCEDJJVNLCGD"
export const WEATHER_API_PARAMS = "include=days,current&elements=datetime,temp,feelslike,windspeed,humidity,description,conditions,icon" 
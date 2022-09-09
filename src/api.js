// API details for GEOLOCATION
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'your-API-key',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// API details for WEATHER
export const WEATHER_API_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services"
export const WEATHER_API_KEY = "your-API-key"
export const WEATHER_API_PARAMS = "include=days,current&elements=datetime,temp,feelslike,windspeed,humidity,description,conditions,icon" 

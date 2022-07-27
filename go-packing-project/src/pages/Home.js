import "./Home.css";
import Search from "../components/search/search";
import CurrentWeather from "../components/current-weather/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../api"
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherForecast from "../components/forecast/forecast";
import DateRange from "../components/date-picker/date-picker";
import ActivitiesDropdown from "../components/activities/activities";
import StyleDropdown from "../components/style-choice/style-choice";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    //Split value of latitude and longitude  for later use
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/timeline/${lat},${lon}?unitGroup=metric&key=${WEATHER_API_KEY}`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/timeline/${searchData.label}/${(DateRange().setStartDate)}/${(DateRange().setEndtDate)}?unitGroup=metric&key=${WEATHER_API_KEY}`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  }

  console.log(currentWeather)
  console.log(forecast)
  return (

    <form className="container">
      <div className="row">

        {/* choose city */}
        <div className="col">
          <Search onSearchChange={handleOnSearchChange} />
          {currentWeather && <CurrentWeather data={currentWeather} />}

          {/*Weather Forecast */}
          {forecast && <WeatherForecast data={forecast} />}
        </div>
        
        {/* date range picker */}
        <div className="col">
        <DateRange/>
        </div>
 
  {/* activities dropdown */}
  <div className="col">
        <ActivitiesDropdown/>
        </div>

         {/* style dropdown */}
  <div className="col">
        <StyleDropdown/>
        </div>
 
      </div>
    </form>
  );
}

export default App;

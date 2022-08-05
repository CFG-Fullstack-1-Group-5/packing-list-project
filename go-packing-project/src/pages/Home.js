import "./Home.css";

import Location from "../components/location/location";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../api";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import DateRange from "../components/date-range/DateRange";
import Activities from "../components/activities/activities";
import StyleChoice from "../components/style-choice/StyleChoice";
import moment from "moment";
import CurrentWeather from "../components/current-weather/CurrentWeather";
import Header from "../components/header/Header";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [activitiyValue, setActivitiyValue] = useState(null);
  const [styleValue, setStyleValue] = useState(null);

  const [locationCoordinates, setLocationCoordinates] = useState("coords here");

  // Set the startDate and endDate
  const storeDates = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  // change date format for API endpont call
  const startDateFormated = moment(`${startDate}`).format("YYYY-MM-DD");
  const endDateFormated = moment(`${endDate}`).format("YYYY-MM-DD");

  // Set activities choice
  const storeActivities = (activitiyValue) => {
    setActivitiyValue(activitiyValue);
  };

   // Set styles choice
   const storeStyles = (styleValue) => {
    setStyleValue(styleValue);
  };

  // Set location coordinates
  const storeCoordinates = (coords) => {
    setLocationCoordinates(coords);
  };

  // stop page from reloading on button click
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit clicked");
    console.log(`Activities: ${activitiyValue}`);
    console.log(`Styles: ${styleValue}`);

    weatherApiCall();
    // console.log(forecast);
  };

  const weatherApiCall = () => {
    //Don't attempt to call API until dates are input in calendar
    if (startDate && endDate != null) {
      //Split value of latitude and longitude  for later use
      const [lat, lon] = locationCoordinates.value.split(" ");

      // Weather API endpoint
      const currentWeatherFetch = fetch(
        `${WEATHER_API_URL}/timeline/${lat},${lon}?unitGroup=metric&key=${WEATHER_API_KEY}`
      );
      const forecastFetch = fetch(
        `${WEATHER_API_URL}/timeline/${lat},${lon}/${startDateFormated}/${endDateFormated}?unitGroup=metric&key=${WEATHER_API_KEY}`
      );

      Promise.all([currentWeatherFetch, forecastFetch])
        .then(async (response) => {
          const weatherResponse = await response[0].json();
          const forecastResponse = await response[1].json();

          setCurrentWeather({
            city: locationCoordinates.label,
            ...weatherResponse,
          });
          setForecast({ city: locationCoordinates.label, ...forecastResponse });
        })
        .catch((err) => console.log(err));
    }
  };

  if (startDateFormated && endDateFormated != null) {
    console.log(currentWeather);
    console.log(forecast);
  }

  //displays API results in console but only if dates entered before location

  //home page form
  return (
    <>
      <Header />
      <div className="Welcome">
        <h1>Discover what to</h1>
        <h1>pack for your holiday</h1>
      </div>

      <Form onSubmit={handleSubmit} id='form'>
        {/* choose city */}
        <div className="location-border">
          <Location
            weatherApiCall={weatherApiCall}
            storeCoordinates={storeCoordinates}
          />
        </div>

        {/* date range picker */}
        <div className="date-border">
          <DateRange storeDates={storeDates} />
        </div>

        {/* activities dropdown */}
        <div className="activities-border">
          <Activities storeActivities={storeActivities} />
        </div>

        {/* style dropdown */}
        <div className="style-border">
          <StyleChoice storeStyles={storeStyles} />
        </div>
      </Form>
      <div className="submit-button-container">
          <button id="submit-button" onSubmit={handleSubmit}>
            Create my List
          </button>
        </div>
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </>
  );
}

export default App;

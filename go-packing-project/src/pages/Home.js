import "./Home.css";
import Location from "../components/location/Location";
import { WEATHER_API_URL, WEATHER_API_KEY, WEATHER_API_PARAMS } from "../api";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import DateRange from "../components/date-range/DateRange";
import Activities from "../components/activities/Activities";
import StyleChoice from "../components/style-choice/StyleChoice";
import moment from "moment";
import Header from "../components/header/Header";
import CurrentWeather from "../components/current-weather/CurrentWeather";

const App = () => {

  const [forecast, setForecast] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [activities, setActivities] = useState(null);
  const [style, setStyle] = useState(null);
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
  const storeActivities = (activities) => {
    setActivities(activities);
  };

  // Set style choice
  const storeStyle = (style) => {
    setStyle(style);
  };

  // Set location coordinates
  const storeCoordinates = (coords) => {
    setLocationCoordinates(coords);
  };

  // stop page from reloading on button click
 const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit clicked");
    // weatherApiCall();
    setForecast(forecast);
    setActivities(activities);
    setStyle(style);
    weatherApiCall()
  };

  const weatherApiCall = () => {
    if (locationCoordinates && startDate && endDate) {

    const [lat, lon] = locationCoordinates.value.split(" ");
    
    fetch(`${WEATHER_API_URL}/timeline/${lat},${lon}/${startDateFormated}/${endDateFormated}?unitGroup=metric&key=${WEATHER_API_KEY}&${WEATHER_API_PARAMS}`)
    .then(async (response) => {
      const forecastResponse = await response.json();
        // Setting a data from api
        setForecast({
          city: locationCoordinates.label,
          ...forecastResponse,
        })
        getList()
      })
        .catch((err) => {
          console.log(err);
        });
}};
    
   
  //displays API results in console but only if dates entered before location

  // if (startDateFormated && endDateFormated != null) {
  //   console.log(currentWeather);
  //   console.log(forecast);

  // }
  // send list to the backend
  const getList = () => {
    fetch('http://localhost:5000/user_input', {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
},
      body: JSON.stringify(
    {
          "weather": forecast,
          "activities": activities,
          "style": style })})
   .then(res => res.json())
   .then(res => console.log(res))};

  //home page form
  return (
    <>
      <Header />
      <div className="Welcome">
        <h1>Discover what to</h1>
        <h1>pack for your holiday</h1>
      </div>

      <Form onSubmit={handleSubmit} id="form" >
        {/* choose city */}
        <div className="location-border">
          <Location
            storeCoordinates={storeCoordinates} />
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
          <StyleChoice storeStyle={storeStyle}  />
        </div>
        <div className="submit-button-container">
          <button id="submit-button">
            Create my List
          </button>
        </div>
      </Form>
      {forecast && <CurrentWeather data={forecast} />}
    </>
  );
}

export default App;
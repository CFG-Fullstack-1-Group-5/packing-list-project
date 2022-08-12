import "./Home.css";
import Location from "../components/Location/Location";
import { WEATHER_API_URL, WEATHER_API_KEY, WEATHER_API_PARAMS } from "../api";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import DateRange from "../components/DateRange/DateRange";
import Activities from "../components/Activities/Activities";
import StyleChoice from "../components/StyleChoice/StyleChoice";
import moment from "moment";
import Header from "../components/Header/Header";
import { useNavigate } from 'react-router-dom'; 

const App = () => {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [activities, setActivities] = useState(null);
  const [style, setStyle] = useState(null);
  const [locationCoordinates, setLocationCoordinates] = useState("coords here");
  const navigate = useNavigate();


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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit clicked");
    weatherApiCall();
    setTimeout(() => { navigate('/Packing') }, 1000);
  };

  const weatherApiCall = () => {
    if ((locationCoordinates && startDate && endDate) != null) {

      const [lat, lon] = locationCoordinates.value.split(" ");

      fetch(`${WEATHER_API_URL}/timeline/${lat},${lon}/${startDateFormated}/${endDateFormated}?unitGroup=metric&key=${WEATHER_API_KEY}&${WEATHER_API_PARAMS}`)
        .then((response) => response.json())
        .then(forecastResponse => {
          // Setting a data from api

          const city = locationCoordinates.label;
          const weather = { city, ...forecastResponse };

          getList(weather);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // send list to the backend
  const getList = (forecast) => {
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
          "style": style
        })
    })
      .then(res => res.json())
      .then(res => console.log(res))
  };

  //home page form
  return (
    <>
      <Header />
      <div className="Welcome">
        <h1>Discover what to</h1>
        <h1>pack for your holiday</h1>
      </div>

      <Form id="form" onSubmit={handleSubmit}>

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
          <StyleChoice storeStyle={storeStyle} />
        </div>
      </Form>

      {/* submit button */}
      <div className="submit-button-container">
        <button id="submit-button" form="form">
          Create my List
        </button>
      </div>
    </>
  );
}

export default App;
import "./Home.css";
import Search from "../components/location/location";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../api";
import { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import DateRange from "../components/date-picker/date-picker";
import ActivitiesDropdown from "../components/activities/activities";
import StyleDropdown from "../components/style-choice/style-choice";
import Header from "../components/header/Header";
// import WhenButtonClicked from "../components/Button";
import Button from "../components/button/button";
import VerticalLine from "../components/verticalLine/verticalLine"
import "../components/search.css";

function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [ComboBox, setActivities] = useState(null);

    // Set the startDate and endDate
    const storeDates = (start, end) => {
        setStartDate(start);
        setEndDate(end);
        console.log(`Start ${startDate} and End ${endDate}`);
    };

      // Set activities choice
      const storeActivities = (activities) => {
        setActivities(activities);
       
        console.log(`Activities ${ComboBox} and End ${endDate}`);
    };


    /*
    NEXT STEP
    1. submit button
    2. onSubmit={handleSubmit}
    3. handleSubmit() function - setSubmitData state with all of the data they've put in an object {startdate: startDate}
    */

    const handleOnSearchChange = (searchData) => {
        //Split value of latitude and longitude  for later use
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(
            `${WEATHER_API_URL}/timeline/${lat},${lon}?unitGroup=metric&key=${WEATHER_API_KEY}`
        );
        const forecastFetch = fetch(
            `${WEATHER_API_URL}/timeline/${searchData.label}/${DateRange().setStartDate
            }/${DateRange().setEndtDate}?unitGroup=metric&key=${WEATHER_API_KEY}`
        );

        Promise.all([currentWeatherFetch, forecastFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();

                setCurrentWeather({ city: searchData.label, ...weatherResponse });
                setForecast({ city: searchData.label, ...forecastResponse });
            })
            .catch((err) => console.log(err));
    };

    console.log(currentWeather);
    console.log(forecast);
    return (
      <>
        <Header />
        <div className='Welcome'>
          <h1>Discover what to</h1>
          <h1>pack for your holiday</h1>
        </div>
        <Form className="search">
            <Search onSearchChange={handleOnSearchChange} />
            <VerticalLine/>
            <DateRange storeDates={storeDates} /> 
            <VerticalLine/>
            <ActivitiesDropdown className="activity" storeActivities= {storeActivities}/> 
            <VerticalLine/>
            <StyleDropdown />
        </Form>
        <div className="submit">
          <Button />
        </div>
      </>
    );
}

export default App;

import React, { useState, useEffect } from "react";
import { format } from 'date-fns';
import CheckList from '../components/checklist/Checklist';
import Header from '../components/header/Header';
import "./Packing.css";
import email from "../assets/icons/email.svg"
import { useNavigate } from "react-router-dom";
import ForecastWeather from "../components/forecast-weather/ForecastWeather"
import Form from 'react-bootstrap/Form';

function Packing() {
  // usestate for setting a javascript
  // object for storing and using data
  const [data, setData] = useState({});
  const [location, setLocation] = useState({});

  // Using useEffect for single rendering
  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("/clothes").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setData({
          clothes: data.clothes,
          extras: data.extras
        });
      })
    );
  }, []);

  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("http://localhost:5000/data").then((res) =>
      res.json().then((location) => {
        // Setting a data from api
        const startDate = new Date(location.dates.startDate)
        const endDate = new Date(location.dates.endDate)
        setLocation({
          address: location.city,
          // activities: location.activities,
          start: format(startDate, 'MMM dd'),
          end: format(endDate, 'MMM dd'),
          activities: location.activities,
          description: location.weather.description,
          icon: location.weather.icon,
          temperature: location.weather.temperature,
          feelslike: location.weather.feelslike,
          windspeed: location.weather.windspeed,
          humidity: location.weather.humidity
        });
        console.log(location)
      })
    );
  }, []);

  // Email validation
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
  if (!isValidEmail(event.target.value)) {
    setError('Please enter a valid email');
  } else {
    setError(null);
  }
  setMessage(event.target.value);
  };

  // using useState to display feature coming message upon button click
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
  setIsShown(current => !current);
  event.currentTarget.disabled = true;
  };

  function FeatureComing() {
    return <p className="feature-coming">Feature to come</p>
  }


  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="box0">
          <h3>{location.address}</h3>
          <p className="dates">{location.start} - {location.end}</p>
          {location.activities?.map((activity, index) => (
          <div className="packing" key={index}>
          <span className='dates' key={index}>{activity}</span>
          </div>
          ))}
        </div>
        <div className="box1">
          <ForecastWeather data={location}/>
        </div>
      </div>
      {/* Calling a data from setdata for showing */}
      <div className="yourList">
        <h4>Your packing list</h4>
      </div>
      <div className="box2">
        <p className="yellow">&emsp;Clothes:</p>
        <div className="twocolumns">
        <CheckList list={data.clothes} />
        </div>
        <p className="yellow">&emsp;Extras:</p>
        <div className="twocolumns">
        <CheckList list={data.extras} />
        </div>
      </div>
      <div className="email-section">
        <p className="email-subheader">Recieve a copy of your packing list</p>
      </div>
      <div className="email-form">
        <Form 
        id="email-form">
          <div className="email-icon">
            <img className="email-icon-position" src={email} alt="icon" />
          </div>
          <Form.Control 
          className="email-placeholder" 
          type="email" 
          placeholder="Enter email" 
          value={message}
          onChange={handleChange}
          />
          <div>
            <button 
            id="email-button" 
            type="button" 
            disabled={!message}
            onClick={handleClick}>
              Send
            </button>
          </div>
        </Form>
      </div>
      <div className="error-message">
        {error && <p>{error}</p>}
        </div>
      <div>
        {isShown && <FeatureComing/>}
      </div>
    </>
  );
}


export default Packing;
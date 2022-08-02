import React, { useState, useEffect } from "react";
import { format } from 'date-fns';
import CheckList from '../components/checklist/Checklist';
import Header from '../components/header/Header';
import "./Packing.css";

function Packing() {
  // usestate for setting a javascript
  // object for storing and using data
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

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
    fetch("/data").then((res) =>
      res.json().then((location) => {
        // Setting a data from api
        const startDate = new Date(location.data.dates.start_date)
        const endDate = new Date(location.data.dates.end_date)
        setLocation({
          address: location.data.weather.address,
          temperature: location.data.weather.days[0].temp,
          conditions: location.data.weather.days[0].description,
          activities: location.data.activities,
          start: format(startDate, 'dd MMMM'),
          end: format(endDate, 'MMMM dd')
        });
      })
    );
  }, []);

  return (
    <div className="Packing">
      <Header />
      <div className="wrapper">
        <div className="box0">
          <h2>{location.address}</h2>
          <p className="remove">{location.start} - {location.end}</p>
          {location.activities?.map((activity, index) => (
            <div className="packing" key={index}>
              <span className='remove' key={index}>{activity}</span>
            </div>
          ))}
        </div>
        <div className="box1">
          <p className="yellow">Weather forecast:</p>
          <p>{location.temperature}°C</p>
          <p>{location.conditions}</p>
        </div>
      </div>
      {/* Calling a data from setdata for showing */}
      <h4>Your packing list</h4>
      <div className="box2">
        <p className="yellow">Clothes:</p>
        <div className="twocolumns">
        <CheckList list={data.clothes} />
        </div>
        <p className="yellow">Extras:</p>
        <div className="twocolumns">
        <CheckList list={data.extras} />
        </div>
      </div>
    </div>
  );
}

export default Packing;

import React, { useState, useEffect } from "react";
import compass from "../../assets/icons/compass.svg";
import "./Activities.css";
import Select from 'react-select'

export default function ActivitiesList(props) {

  const activities = [
    { value: 'Hiking', label: 'Hiking' },
    { value: 'Beach Days', label: 'Beach Days' },
    { value: 'Out on the town', label: 'Out on the town' },
    { value: 'Skiing', label: 'Skiing' }
  ]

  // set value for actvities selection
  const [activitiyValue, setActivitiyValue] = useState(null);

    // On each re-render, pass the activities up to storeActivities() in Home.js via props
    useEffect(() => {
      props.storeActivities(activitiyValue);
    });

    
  // handle onChange event of the dropdown
  const handleChange = e => {
    setActivitiyValue(e.value);
  }

  return (
    <>
      <div>
        <img className="icon" src={compass} alt="icon" />
        <Select
          placeholder="Activities"
          options={activities} // set list of the data
          value={activities.find(obj => obj.value === activitiyValue)} // set selected value
          onChange={handleChange} // assign onChange function
        />
      </div>
    </>
  );
}

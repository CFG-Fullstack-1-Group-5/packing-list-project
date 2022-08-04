import React, { useState, useEffect } from "react";
import compass from "../../assets/icons/compass.svg";
import "./Activities.css";
import Select from 'react-select'

const styling = {
  container: base => ({
    ...base,
    flex: 1
  })
};

export default function ActivitiesComboBox(props) {

  const activities = [
    { value: 'Hiking', label: 'Hiking' },
    { value: 'Beach Days', label: 'Beach Days' },
    { value: 'Out on the town', label: 'Out on the town' },
    { value: 'Skiing', label: 'Skiing' }
  ];

  // set value for activities selection
  const [activititesValue, setActivitiesValue] = useState(null);

  // On each re-render, pass the activities data up to storeActivities() in Home.js via props
  useEffect(() => {
    props.storeActivities(activititesValue);
  }, [activititesValue]);

  //handle onchange event of the dropdown
  const handleChange = (e) => {
    setActivitiesValue(e.value);
  }

  return (
    <>
      <div>
        <img className="icon" src={compass} alt="icon" />
        <Select id="selectedActivity"
          options={activities}
          styles={styling}
          placeholder="Activties"
          
          value={activities.find(obj => obj.value === activititesValue)} // set activities value
          onChange={handleChange} // assign onChange function
        />
      </div>
    </>

  );

}

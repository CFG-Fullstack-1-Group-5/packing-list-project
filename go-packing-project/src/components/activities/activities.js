import React from "react";
import compass from "../../assets/icons/compass.svg";
import "./Activities.css";
import Select from 'react-select'

export default function ComboBox(props) {

  const activities = [
    { value: 'Hiking', label: 'Hiking' },
    { value: 'Beach Days', label: 'Beach Days' },
    { value: 'Out on the town', label: 'Out on the town' },
    { value: 'Skiing', label: 'Skiing' }
  ]

  return (
    <>
    <div>
      <img className="icon" src={compass} alt="icon"  />
      <Select 
      options={activities}
      placeholder="Activties"
      isMulti/>
      </div>
    </>
  );
}

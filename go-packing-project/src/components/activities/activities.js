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

export default function Activities(props) {

  const activities = [
    { value: 'hiking', label: 'Hiking' },
    { value: 'beach', label: 'Beach Days' },
    { value: 'ski', label: 'Skiing' },
    {value: 'formalwear', label: 'Formal'},
    {value: 'activewear', label: 'Active'}
  ]

  const [selectedValue, setSelectedValue] = useState('Activities');

  useEffect(() => {
    props.storeActivities(selectedValue);
  });

  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
  }

  return (
    <>
      <div>
        <img className="icon" src={compass} alt="icon" />
        <Select
          options={activities}
          value={activities.filter(obj => selectedValue.includes(obj.value))}
          onChange={handleChange}
          placeholder="Activities"
          styles={styling}
          components={{DropdownIndicator: () => null, IndicatorSeparator: () => null,}}
          isMulti />
      </div>
    </>
  );
}  
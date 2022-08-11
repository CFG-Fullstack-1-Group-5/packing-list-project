import React, { useState, useEffect } from "react";
import user from "../../assets/icons/user.svg";
import Select from 'react-select'

//Styling for style drop down list on homepage.js
const styling = {
  container: base => ({
    ...base,
    flex: 1 
  })
};

export default function Style(props) {

  //list of style options
  const styles = [
    { value: 'masculine', label: 'Masculine' },
    { value: 'feminine', label: 'Feminine' },
    { value: 'unisex', label: 'Unisex' }
  ];

  //store the selected value for future use
  const [selectedValue, setSelectedValue] = useState('Style');

  useEffect(() => {
    props.storeStyle(selectedValue);
  });

  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
  };

  //elements for style drop down list
  return (
    <>
      <div className="style">
        <img className="icon" src={user} alt="icon" />
        <Select
          options={styles}
          value={styles.filter(obj => selectedValue.includes(obj.value))}
          components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
          onChange={handleChange}
          placeholder="Style"
          styles={styling}
          isMulti
        />
      </div>
    </>
  );
}
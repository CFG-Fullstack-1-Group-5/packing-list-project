import React, { useState, useEffect } from "react";
import user from "../../assets/icons/user.svg";
import "./StyleChoice.css";
import Select from 'react-select'

export default function StyleChoiceComboBox(props) {

  const styles = [
    { value: 'Masculine', label: 'Masculine' },
    { value: 'Feminine', label: 'Feminine' },
    { value: 'Both', label: 'Both' }
  ]

  const styling = {
    container: base => ({
      ...base,
      flex: 1
    })
  };
  
  // set value for stylechoice selection
  const [styleChoiceValue, setStyleChoiceValue] = useState(null);

 // On each re-render, pass the stylechoice data up to storeSstyleChoice() in Home.js via props
 useEffect(() => {
  props.storeStyleChoice(styleChoiceValue);
}, [styleChoiceValue]);

  //handle onchange event of the dropdown
  const handleChange = (e) => {
    setStyleChoiceValue(e.value);
  }


  return (
    <>
     <div className="style">
      <img className="icon" src={user} alt="icon" />
      <Select  id="selectedStyleChoice"
      options={styles}
      styles={styling}
      placeholder="Style"
      components={{DropdownIndicator: () => null, IndicatorSeparator: () => null,}}
      onChange={handleChange} // assign onChange function
     />
      </div>
    </>
  );
}

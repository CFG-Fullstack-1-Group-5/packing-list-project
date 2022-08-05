import React, { useState, useEffect } from "react";
import user from "../../assets/icons/user.svg";
import "./StyleChoice.css";
import Select from 'react-select'
import { startOfWeek } from "date-fns";
// import { SettingsRemoteSharp } from "@material-ui/icons";

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



export default function StyleList(props) {

  // set value for style selection
  const [styleValue, setStyleValue] = useState(null);

    // On each re-render, pass the styles up to storeStyles() in Home.js via props
    useEffect(() => {
      props.storeStyles(styleValue);
    });

      // handle onChange event of the dropdown
  const handleChange = e => {
    setStyleValue(e.value);
  }

  return (
    <>
      <img className="icon" src={user} alt="icon" />
      <Select 
      placeholder="Style"
      options={styles} // set list of the data
      value={styles.find(obj => obj.value === styleValue)} // set selected value
      onChange={handleChange} // assign onChange function
      styles={styling}
      components={{DropdownIndicator: () => null, IndicatorSeparator: () => null,}}
    />
    </>
  );
}

import React, { useState, useEffect } from "react";
import user from "../../assets/icons/user.svg";
import "./StyleChoice.css";
import Select from 'react-select'
import { startOfWeek } from "date-fns";
// import { SettingsRemoteSharp } from "@material-ui/icons";

const styling = {
  container: base => ({
    ...base,
    flex: 1
  })
};

export default function Style(props) {

  const styles = [
    { value: 'masculine', label: 'Masculine' },
    { value: 'feminine', label: 'Feminine' },
    { value: 'unisex', label: 'Unisex' }
  ];

  const [selectedValue, setSelectedValue] = useState('Style');

  useEffect(() => {
    props.storeStyle(selectedValue);
  });

  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
  };

  return (
    <>
     <div className="style">
      <img className="icon" src={user} alt="icon" />
      <Select 
      
      options={styles}
      value={styles.filter(obj => selectedValue.includes(obj.value))}
      onChange={handleChange}
      placeholder="Style"
      styles={styling}
      isMulti
       />
      </div>
    </>
  );
}
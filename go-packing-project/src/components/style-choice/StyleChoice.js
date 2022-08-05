import * as React from "react";
import user from "../../assets/icons/user.svg";
import "./StyleChoice.css";
import Select from 'react-select';
import { useState} from 'react';
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



export default function ComboBox(props) {

  // const [styleChoice, setStyleChoice] = useState([])

  // const addItem = () => {
  //   setStyleChoice([styleChoice])
    
  // }

  // const handleStyleChange = styleChoice => {
  //   setStyleChoice(styleChoice);
  //   console.log(styleChoice, "style choice")
  // };

  return (
    <>
      <img className="icon" src={user} alt="icon" />
      <Select 
      isMulti
      options={styles}
      styles={styling}
      // value={styleChoice}
      placeholder="Style"
      components={{DropdownIndicator: () => null, IndicatorSeparator: () => null,}}
      // onChange={handleStyleChange}
     />
    </>
  );
}

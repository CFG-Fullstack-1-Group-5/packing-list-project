import * as React from "react";
import user from "../../assets/icons/user.svg";
import "./StyleChoice.css";
import Select from 'react-select'
export default function ComboBox(props) {

  const styles = [
    { value: 'Masculine', label: 'Masculine' },
    { value: 'Feminine', label: 'Feminine' },
    { value: 'Both', label: 'Both' }
  ]

  return (
    <>
     <div className="style">
      <img className="icon" src={user} alt="icon" />
      <Select 
      options={styles}
      placeholder="Style"
     />
      </div>
    </>
  );
}

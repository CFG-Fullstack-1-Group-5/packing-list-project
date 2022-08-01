import * as React from "react";
import user from "../../assets/icons/user.svg";
import "./StyleChoice.css";

export default function ComboBox(props) {
  return (
    <>
      <img className="icon" src={user} alt="icon" />
      <select className="style">
        <option defaultValue="Style">
          Style
        </option>
        <option value="Masculine">Masculine</option>
        <option value="Feminine">Feminine</option>
        <option value="Both">Both</option>
        theme={(theme) => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary: 'black',
      },
    })}
      </select>
    </>
  );
}

import React from "react";
import compass from "../../assets/icons/compass.svg";
import "./Activities.css";

export default function ComboBox(props) {
  return (
    <>
      <img className="icon" src={compass} alt="icon"  />
      <select className="activity">
        <option value="Activities" disabled>Activities</option>
        <option value="Hiking">Hiking</option>
        <option value="Beach Days">Beach Days</option>
        <option value="Out on the town">Out on the town</option>
        <option value="Skiing">Skiing</option>
      </select>
    </>
  );
}

import React, { useEffect, useState } from "react";
import calendar from "../../assets/icons/calendar.svg";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css"; 
import "./DateRange.css";

//Styling for date range calendar on homepage
const styling = {
  container: base => ({
    ...base,
    flex: 1
  })
};

//Set and store start, end and manually input dates for later use
function DateRange(props) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  //On each re-render, pass the start and end date up to storeDates() in Home.js via props
  useEffect(() => {
    props.storeDates(startDate, endDate);
  });

  //Elementss for DateRange Picker
  return (
    <>
      <div className="DateRange">
        <img
          className="icon calendar-icon"
          src={calendar}
          alt="calendar-icon"
        />

        <DateRangePicker
          startDate={startDate}
          startDateId="s_id"
          startDatePlaceholderText="Dates"
          endDatePlaceholderText=" "
          endDate={endDate}
          endDateId="e_id"
          onDatesChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }}
          focusedInput={focusedInput}
          onFocusChange={(e) => setFocusedInput(e)}
          displayFormat="DD/MM/YYYY"
          styles={styling}
        />
      </div>
    </>
  );
}

export default DateRange;

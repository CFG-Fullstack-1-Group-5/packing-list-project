import React, { useEffect, useState } from "react";
import calendar from "../../assets/icons/calendar.svg";

import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./DateRange.css";

const styling = {
  container: base => ({
    ...base,
    flex: 1
  })
};

function DateRange(props) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  // On each re-render, pass the start and end date up to storeDates() in Home.js via props
  useEffect(() => {
    props.storeDates(startDate, endDate);
  });

  // width: 25%;
  // margin: 0;
  // height: 40px;
  // padding: 0;
  // background-color: #ECECEC;
  // border: none;
  // color: #6D6D6D;
  // padding: 12px;
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

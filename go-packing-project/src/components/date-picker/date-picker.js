import React, { useEffect, useState } from "react";

// import "react-dates/initialize";
import { DateRangePicker } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.css";

function DateRange(props) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  // On each re-render, pass the start and end date up to storeDates() in Home.js via props
  useEffect(() => {
    props.storeDates(startDate, endDate);
  });

  return (
    <div className="DateRange">
      <DateRangePicker
        startDate={startDate}
        startDateId="s_id"
        startDatePlaceholderText="Dates"
        endDatePlaceholderText=" "
        endDate={endDate}
        endDateId="e_id"
        showDefaultInputIcon
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        focusedInput={focusedInput}
        onFocusChange={(e) => setFocusedInput(e)}
        displayFormat="DD/MM/YYYY"
      />
    </div>
  );
}

export default DateRange;

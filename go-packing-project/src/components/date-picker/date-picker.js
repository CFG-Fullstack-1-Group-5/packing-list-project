import React, { useState } from 'react';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './date-picker.css';



function DateRange(prop) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div className="DateRange">
      
      <DateRangePicker

        startDate={startDate}
        startDateId="s_id"
        startDatePlaceholderText = "Dates"
        endDatePlaceholderText = " "
        endDate={endDate}
        endDateId="e_id"
        showDefaultInputIcon
        onDatesChange={({ startDate, endDate }) => { setStartDate(startDate); setEndDate(endDate); }}
        focusedInput={focusedInput}
        onFocusChange={e => setFocusedInput(e)}
        displayFormat="DD/MM/YYYY"
      />
      <h1> how to call dates</h1>
      <div className="mt-3 mb-1">Start Date: {startDate && startDate.format('ll')}</div>
      <div>End Date: {endDate && endDate.format('ll')}</div>
    </div>
  );
}

export default DateRange;

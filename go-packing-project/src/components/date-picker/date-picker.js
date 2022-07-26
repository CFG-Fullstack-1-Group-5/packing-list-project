import * as React from 'react';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker';
import "./date-picker.css";


export default function ResponsiveDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (

    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDateRangePicker
        label="Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          
          <Box sx={{
            
            display: 'flex', boxShadow: 4, alignItems: 'center', width: "20vw",  height: 58, 
            "& .MuiOutlinedInput-notchedOutline": {
              border: "0 none",
            },
          }}>
            <input ref={inputRef} {...inputProps} />
            
            {InputProps?.endAdornment}

          </Box>
        )}
      />
    </LocalizationProvider>

  );
}
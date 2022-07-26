import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';





export default function ComboBox() {
  return (
    
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={style}
      sx={{ width: "20vw", boxShadow: 4, borderRadius: "0px 25px 25px 0px", height: 58,
      "& .MuiOutlinedInput-notchedOutline": {
        border: "0 none",
      },  }}
      renderInput={(params) => <TextField {...params} 
      label={<PersonOutlineIcon /> }
      
      />}
      
    />

  );
}


// Activities lists
const style = [
  { label: 'Masculine', value: 'Masculine' },
  { label: 'Feminine', value: 'Feminine' },
  { label: 'Both', value: 'Both' },

];

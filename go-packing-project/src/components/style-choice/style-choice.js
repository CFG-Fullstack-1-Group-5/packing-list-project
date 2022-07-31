import * as React from 'react';
import user from "../../assets/icons/user.svg"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

// export default function ComboBox() {
//   return (
    
//     <Autocomplete
//       disablePortal
//       id="combo-box-demo"
//       options={style}
//       sx={{ width: "20vw",  borderRadius: "0px 25px 25px 0px", height: 58, border: "solid", borderColor: "hsl(0, 0%, 80%)", borderWidth: "1px", 
//       "& .MuiOutlinedInput-notchedOutline": {
//         border: "0 none",
//       },  }}
//       renderInput={(params) => <TextField {...params} 
//       label={<PersonOutlineIcon /> }
      
//       />}
      
//     />

//   );
// }


// // Activities lists
// const style = [
//   { label: 'Masculine', value: 'Masculine' },
//   { label: 'Feminine', value: 'Feminine' },
//   { label: 'Both', value: 'Both' },

// ];

export default function ComboBox() {
  return (
    <>
    <img className="icon" src={user}/>
    <select className="style">
      <option value="" disabled selected>Style</option>
      <option value="Masculine">Masculine</option>
      <option value="Feminine">Feminine</option>
      <option value="Both">Both</option>
    </select>
    </>
  )
}
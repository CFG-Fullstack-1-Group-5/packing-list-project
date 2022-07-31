import * as React from 'react';
import compass from "../../assets/icons/compass.svg"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// export default function ComboBox() {
//   return (
//     <Autocomplete
//       disablePortal
//       id="combo-box-demo"
//       options={activities}
//       sx={{ backgroundColor: "#ECECEC", width: "15vw",  borderRadius: "0px 0px 0px 0px", height: 58, border: "solid", borderColor: "hsl(0, 0%, 80%)", borderWidth: "1px", borderRight: "none",
//       "& .MuiOutlinedInput-notchedOutline": {
//         border: "0 none",
//       },  }}
//       renderInput={(params) => <TextField {...params} label="Activities" />}
//     />
//   );
// }

// // Activities lists
// const activities = [
//   { label: 'Hiking', value: 'Hiking' },
//   { label: 'Beach Days', value: 'Beach Days' },
//   { label: 'Out on the town', value: 'Out on the town' },
//   { label: 'Skiing', value: 'Skiing' },
// ];

export default function ComboBox() {
  return (
    <>
    <img className="icon" src={compass}/>
    <select className="activity">
      <option value="" disabled selected>Activities</option>
      <option value="Hiking">Hiking</option>
      <option value="Beach Days">Beach Days</option>
      <option value="Out on the town">Out on the town</option>
      <option value="Skiing">Skiing</option>
    </select>
    </>
  )
}
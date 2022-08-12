import { useEffect, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";
import searchIcon from "../../assets/icons/search.svg";
import "./Location.css";

//Styling for Choose City input on homepage
const styling = {
  container: base => ({
    ...base, 
    flex: 1,
  })
};

//Store coordinates
const Location = (props) => {
  const [coordinates, setCoordinates] = useState(null);

  //Call storeCoordinates function from Home.js on every render
  useEffect(() => {
    props.storeCoordinates(coordinates);
  });

  //Set coordinates state on date change
  const handleOnChange = (location) => {
    setCoordinates(location);
  };

  //use GEOLOCATION API to fetch pre-filled city options
  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  // AsyncPaginate elements
  return (
    <>
      <div className="Location">

        <img
          className="icon search-icon"
          src={searchIcon}
          alt="calendar-icon"
        />

        <AsyncPaginate
          placeholder="City"
          theme={(theme) => ({
            ...theme,
            borderRadius: "25px 0px 0px 25px",
          })}
          components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
          debounceTimeout={600}
          value={coordinates}
          onChange={handleOnChange}
          loadOptions={loadOptions}
          styles={styling}
        />
      </div>
    </>
  );
};

export default Location;

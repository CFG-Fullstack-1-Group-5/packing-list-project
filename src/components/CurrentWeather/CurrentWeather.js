import "./CurrentWeather.css"; 

//Display weather details returned from API data
const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.days[0].conditions}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.days[0].icon}.png`}
        />
      </div>

      <div className="bottom">
        <p className="temperature">{data.days[0].temp}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label ">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{data.days[0].feelslike}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind speed</span>
            <span className="parameter-value">{data.days[0].windspeed}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.days[0].humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Precipitation</span>
            <span className="parameter-value">{data.days[0].precip}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

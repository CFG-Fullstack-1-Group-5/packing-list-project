import "./ForecastWeather.css";

const ForecastWeather = ({ data }) => {
  return ( 
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.address}</p>
          <p className="weather-description">{data.description}</p>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Average temperature for your stay:</span>
        </div>
      </div>

      <div className="bottom">
        <p className="temperature">{data.temperature}°C</p>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.icon}.png`}
        />
      </div>
    </div>
  );
};

export default ForecastWeather;

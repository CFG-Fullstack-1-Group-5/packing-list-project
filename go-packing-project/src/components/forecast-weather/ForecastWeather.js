import "./ForecastWeather.css";

const ForecastWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.address}</p>
          <p className="weather-description">{data.description}</p>
        </div>

      </div>
      <div className="parameter-row">
        <span className="parameter-label">Average temperature for your stay:</span>
      </div>
      <div className="bottom">
        <p className="temperature">{data.temperature}°C</p>
        {/* <div className="details"> */}
          {/* <div className="parameter-row">
            <span className="parameter-label ">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{data.feelslike}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind speed</span>
            <span className="parameter-value">{data.windspeed}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.humidity}%</span>
          </div> */}
        {/* </div> */}
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

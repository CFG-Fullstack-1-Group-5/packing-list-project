import "./current-weather.css"

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.currentConditions.conditions}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.currentConditions.icon}.png`}/>
            </div>
            <div className="bottom">
                <p className="temperature">{data.currentConditions.temp}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label ">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{data.currentConditions.feelslike}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind speed</span>
                        <span className="parameter-value">{data.currentConditions.windspeed}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.currentConditions.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Precipitation</span>
                        <span className="parameter-value">{data.currentConditions.precip}%</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;
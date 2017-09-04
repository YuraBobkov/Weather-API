import React from 'react';

export default class WeatherDetails extends React.Component {
  render() {
    const details = this.props.details;
    const info = this.props.info
    let weatherComponent;
    if (this.props.weatherLoad){
      weatherComponent = <div className="preloader"></div>
    } else{
      weatherComponent =
        <div>
          <span className="cloud">
            <img src={`http://openweathermap.org/img/w/${details[0].icon}.png`} alt="weather"/>
          {details[0].description}
          </span>
          <p>
            <span className="temp">{info.main.temp}°С</span>
            temperature from {info.main.temp_min} to {info.main.temp_max}°С, wind {info.wind.speed}m/s., clouds {info.clouds.all}%, {info.main.pressure}  hPa
          </p>
          <p>
            <a target="_blank" href={`https://www.google.ru/maps/place/${info.coord.lat},${info.coord.lon}`}>Geo coordinates: [{info.coord.lat}, {info.coord.lon}]</a>
          </p>
        </div>
    }
    return (
      <div className="weatherDetails">
        {weatherComponent}
      </div>
    );
  }
}

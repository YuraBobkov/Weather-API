import React, { Component } from 'react'
import { connect } from 'react-redux';

import Input from './Input';
import CityList from './CityList';
import WeatherDetails from './WeatherDetails';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Input getCities={this.props.getCities} />
        <div className="wrapper">
          {this.props.cities ? <CityList
            cities={this.props.cities}
            cityLoad={this.props.cityLoad}
            getWeather={this.props.getWeather}
          /> : null}
          {this.props.weatherDetails ? <WeatherDetails
            details={this.props.weatherDetails.weather}
            info={this.props.weatherInfo}
            weatherLoad={this.props.weatherLoad}
          /> : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities.data,
    cityLoad: state.cities.isLoading,
    weatherDetails: state.weather.data,
    weatherInfo: state.weather.data,
    weatherLoad: state.weather.isLoading
  };
}

function mapActionsToProps(dispatch) {
  return {
    getCities: text => dispatch({
      type: 'GET_CITIES',
      payload: text,
    }),
    getWeather: name => dispatch({
      type: 'GET_WEATHER_BY_ID',
      payload: name,
    }),
  };
}

export default connect(mapStateToProps, mapActionsToProps)(App);

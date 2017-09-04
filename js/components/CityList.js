import React from 'react';
import ListItem from './ListItem';


export default class CityList extends React.Component {
    render() {
    let CityComponent;
    if (this.props.cities.list.length == 0) {
      CityComponent = <div className="empty">Нет объектов</div>;
    } else {
      CityComponent = (
        <ListItem cities={this.props.cities.list}
                  weather={this.props.weather}
                  onCityClick={city => this.props.getWeather(city)} />
      );
    }
    if(this.props.cityLoad){
      CityComponent = <div className="preloader"></div>
    }
    return (
      <div className="cities">
        {CityComponent}
      </div>
    );
  }
}

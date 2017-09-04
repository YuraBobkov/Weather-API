import React from 'react';

export default class ListItem extends React.Component {
  render() {
    const cities = this.props.cities.map((elem, index) => {
      const country = elem.sys.country.toLowerCase();
      return (
        <li className="item" key={index}  onClick={() => this.props.onCityClick(elem.id)} >
          {elem.name}, {elem.sys.country}
          <img src={`http://openweathermap.org/images/flags/${country}.png`} alt="country" />

        </li>
      );
    });
    return (
      <ul>{cities}</ul>
    );
  }
}

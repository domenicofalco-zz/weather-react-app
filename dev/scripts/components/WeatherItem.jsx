import React from 'react';

export default class WeatherItem extends React.Component {

  render() {
    const { weather } = this.props;
    const { city, country, status } = weather;

    return (
      <li className="weather-item" ref="weatherItem">
        <ul>
          <li><strong>Location:</strong> {city}, {country}</li>
          <li><strong>Status:</strong> {status}</li>
        </ul>
      </li>
		);
  }

}

WeatherItem.defaultProps = { weather: {} };
WeatherItem.propTypes = { weather: React.PropTypes.object };

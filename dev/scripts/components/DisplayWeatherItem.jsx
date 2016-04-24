import React from 'react';

export default class DisplayWeatherItem extends React.Component {

  render() {
    const { weather } = this.props;
    const { city, country, status } = weather;

    return (
      <div className="weather-item" ref="weatherItem">
        <ul>
          <li><strong>Location:</strong> {city}, {country}</li>
          <li><strong>Status:</strong> {status}</li>
        </ul>
      </div>
		);
  }

}

DisplayWeatherItem.defaultProps = { weather: {} };
DisplayWeatherItem.propTypes = { weather: React.PropTypes.object };

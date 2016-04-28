import React from 'react';

export default class DisplayWeatherItem extends React.Component {

  render() {
    const { data } = this.props;
    const { name, sys, weather } = data;
    const { country } = sys;
    const status = weather[0].description;

    window.test = weather;

    return (
      <div className="weather-item" ref="weatherItem">
        <ul>
          <li><strong>Location:</strong> {name}, {country}</li>
          <li><strong>Status:</strong> {status}</li>
        </ul>
      </div>
		);
  }

}

DisplayWeatherItem.defaultProps = { data: {} };
DisplayWeatherItem.propTypes = { data: React.PropTypes.object };

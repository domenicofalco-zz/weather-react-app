import React from 'react';

export default class DisplayWeather extends React.Component {

  render() {
    const { data } = this.props;
    console.log(data.city, data.country);

    return (
      <div className="weather-item" ref="weatherItem">
        <ul>
          <li><strong>Location:</strong> {data.city}, {data.country}</li>
          <li><strong>Status:</strong> {data.status}</li>
        </ul>
      </div>
		);
  }

}

DisplayWeather.defaultProps = { data: {} };
DisplayWeather.propTypes = { data: React.PropTypes.object };

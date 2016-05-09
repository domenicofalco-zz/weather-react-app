// Import Components
import React from 'react';
import WeatherItem from './WeatherItem';

export default class WeatherResults extends React.Component {

  constructor() {
    super();

    this._renderWeatherItems = this._renderWeatherItems.bind(this);
  }

  _renderWeatherItems(key) {
    return (
      <WeatherItem
        key={key}
        index={key}
        weather={this.props.data[key]}
      />
    );
  }

  render() {
    const { data } = this.props;
    const results = Object.keys(data);

    if (results.length === 0) {
      return false;
    }

    return (
      <section>
        <h2>Your latest searches</h2>
        <ul className="weather-list" ref="weatherList">
          {results.map(this._renderWeatherItems)}
        </ul>
      </section>
    );
  }

}

// WeatherResults.defaultProps = { weather: {} };
WeatherResults.propTypes = { data: React.PropTypes.object };

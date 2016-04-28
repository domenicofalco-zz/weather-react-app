// generale CSS
require('../less/style.less');

// main modules
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import SearchForm from './components/SearchForm';
import DisplayWeatherItem from './components/DisplayWeatherItem';
// import Error from './components/Error.jsx';

import LocalStorage from './js/localStorage.js';
import API from './js/API';

// DOM selector
const appendSelector = document.getElementById('myApp');

// React Main Class
export default class Main extends React.Component {

  constructor() {
    super();

    this.availableCities = [];
    this._updateWeatherState = this._updateWeatherState.bind(this);

    this.state = {
      weatherData: null,
      hasLoaded: false,
    };
  }

  componentWillMount() {
    this.availableCities = LocalStorage.getItem('cities');

    if (this.availableCities) {
      const cities = this.availableCities.split(',');

      for (let i = 0; i < cities.length; i++) {
        API.getWeather(cities[i]).then((data) => {
          this._updateWeatherState(data);
        }).catch(() => {
          // in order to show the error message
          // this._updateWeatherState(null);
        });
      }
    }
  }

  _updateWeatherState(data) {
    this.setState({
      weatherData: data,
      hasLoaded: true,
    });
  }

  render() {
    // let { weatherData, hasLoaded } = this.state;
    /* {(hasLoaded && weatherData)
    && <DisplayWeatherItem weather={weatherData} />
    || <Error />
    }*/

    let { weatherData } = this.state;

    return (
      <div>
        <SearchForm
          updateWeatherState={this._updateWeatherState}
        />
        {weatherData &&
          <DisplayWeatherItem data={weatherData} />
        }
      </div>
    );
  }

}

appendSelector && ReactDOM.render(<Main />, appendSelector);

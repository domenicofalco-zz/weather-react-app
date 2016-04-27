// generale CSS
require('../less/style.less');

// main modules
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import SearchForm from './components/SearchForm';
import DisplayWeatherItem from './components/DisplayWeatherItem';
import Error from './components/Error.jsx';

import LocalStorage from './js/localStorage.js';
import GetWeather from './js/getWeather';

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
  }

  _updateWeatherState(data) {
    /*this.setState({
      weatherData: data,
      hasLoaded: true,
    });*/
  }

  render() {
    // let { weatherData, hasLoaded } = this.state;
    const cities = this.availableCities.split(',');
    const citiesList = [];

    for (let i = 0; i < cities.length; i++) {
      let data = GetWeather.getDataFromAPI(cities[i]);
      citiesList.push(<DisplayWeatherItem weather={data} />);
    }

    /* {(hasLoaded && weatherData)
        && <TemplateList />
        || <Error />
    }*/

    return (
      <div>
        <SearchForm
          updateWeatherState={this._updateWeatherState}
        />
      {citiesList}

      </div>
    );
  }

}

appendSelector && ReactDOM.render(<Main />, appendSelector);

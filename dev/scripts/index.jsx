// generale CSS
require('../less/style.less');

// main modules
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import SearchForm from './components/SearchForm';
import DisplayWeatherItem from './components/DisplayWeatherItem';

// DOM selector
const appendSelector = document.getElementById('myApp');

// React Main Class
export default class Main extends React.Component {

  constructor() {
    super();

    this.state = {
      weatherData: {},
      hasLoaded: false,
    };
    this._updateWeatherState = this._updateWeatherState.bind(this);
  }

  _updateWeatherState(data) {
    this.setState({
      weatherData: data,
      hasLoaded: true,
    });
  }

  render() {
    let { weatherData, hasLoaded } = this.state;

    return (
      <div>
        <SearchForm
          updateWeatherState={this._updateWeatherState}
        />
        {hasLoaded &&
          <DisplayWeatherItem
            weather={weatherData}
          />
        }
      </div>
    );
  }

}

appendSelector && ReactDOM.render(<Main />, appendSelector);

// generale CSS
require('../less/style.less');

// main modules
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import SearchForm from './components/SearchForm';
import WeatherResults from './components/WeatherResults';
import RaisedButton from 'material-ui/lib/raised-button';

// DOM selector
const appendSelector = document.getElementById('myApp');

// Sample data
import samples from '../data/samples.js';

// React Main Class
export default class Main extends React.Component {

  constructor() {
    super();

    this.state = {
      weatherData: {},
      hasLoaded: false,
    };
    this._addWeatherItem = this._addWeatherItem.bind(this);
    this._loadSamples = this._loadSamples.bind(this);
  }

  _addWeatherItem(item) {
    const timestamp = (new Date()).getTime();
    // add new weather object
    this.state.weatherData[`weather-${timestamp}`] = item;
    // update the state
    this.setState({ weatherData: this.state.weatherData });
  }

  _updateWeatherState(data) {
    this.setState({
      weatherData: data,
      hasLoaded: true,
    });
  }

  _loadSamples() {
    this.setState({
      hasLoaded: true,
      weatherData: samples,
    });
  }

  render() {
    const { weatherData } = this.state;

    return (
      <div>
        <SearchForm
          addWeatherItem={this._addWeatherItem}
          updateWeatherState={this._updateWeatherState}
        />

        <WeatherResults data={weatherData} />

        {/* NOTE this button is for testing purpose only */}
        <RaisedButton
          type="button"
          label="Load samples"
          onClick={this._loadSamples}
          secondary
        />
      </div>
    );
  }

}

appendSelector && ReactDOM.render(<Main />, appendSelector);

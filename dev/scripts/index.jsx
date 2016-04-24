// generale CSS
require('../less/style.less');

// main modules
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import SearchForm from './components/SearchForm';

// DOM selector
const appendSelector = document.getElementById('myApp');

// React Main Class
export default class Main extends React.Component {

  render() {
    // TODO (Danilo) - dinamically generate 'DisplayWeather' component
    // after submitting SearchForm
    // <DisplayWeather data={weatherData} />

    return (
      <SearchForm />
    );
  }

}

appendSelector && ReactDOM.render(<Main />, appendSelector);

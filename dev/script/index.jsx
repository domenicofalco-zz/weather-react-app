//generale CSS
require("../less/style.less")

//main modules
import React from 'react';
import ReactDOM from 'react-dom';

//API
import API from './js/API';

//React Main Class
export class Main extends React.Component {

	render() {

		API.getWeather("Napoli,it").then(function(weatherData) {
		  console.log(weatherData);
		});

		return (
			<div>test</div>
		);
	}
}

ReactDOM.render(<Main/>, document.querySelector("#myApp"));

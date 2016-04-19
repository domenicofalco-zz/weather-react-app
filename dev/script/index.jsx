//generale CSS
require("../less/style.less")

//DOM selector
let appendSelector = document.getElementById('myApp');

//main modules
import React from 'react';
import ReactDOM from 'react-dom';
import DisplayWeatherItem from './components/DisplayWeatherItem';

//API
import API from './js/API';

//React Main Class
export default class Main extends React.Component {

	constructor(){
		super();
		this.state = { weatherData: {} };
	}

	componentWillMount() {
		//ToDo (Mimmo): rendere lo "state: luogo" dinamico
		API.getWeather("Napoli,it").then((data) => {
			this.setState({ weatherData: data });
		});
	}

	render() {
		let { weatherData } = this.state;

		return (
			<DisplayWeatherItem data={weatherData} />
		);

	}
}

appendSelector && ReactDOM.render(<Main/>, appendSelector);

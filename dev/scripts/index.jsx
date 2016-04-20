//generale CSS
require("../less/style.less")

//DOM selector
let appendSelector = document.getElementById('myApp');

//main modules
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import DisplayWeather from './components/DisplayWeatherItem';
import SearchForm from './components/SearchForm';

//API
import API from './js/API';

//React Main Class
export default class Main extends React.Component {

	constructor(){
		super();
		this.state = { weatherData: {} }
	}

	componentWillMount() {
		//ToDo (Mimmo): rendere lo "state: luogo" dinamico
		API.getWeather("Napoli,it").then((data) => {
			this.setState({
				weatherData: {
					city: data.name,
					country: data.sys.country,
					status: data.weather[0].main
				}
			});
		});
	}

	render() {
		let { weatherData } = this.state;

		// TODO (Danilo) - dinamically generate 'DisplayWeather' component
		// after submitting SearchForm
		// <DisplayWeather data={weatherData} />

		return (
			<SearchForm />
		);

	}
}

appendSelector && ReactDOM.render(<Main/>, appendSelector);

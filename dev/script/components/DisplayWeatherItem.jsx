//main modules
import React from 'react';
import ReactDOM from 'react-dom';

//React Main Class
export default class DisplayWeather extends React.Component {

  constructor(props){
		super(props);
	}

	render() {

    var { data } = this.props;

    console.log('Object Weather ->', data);

		return (
			<div>Here: Item City-Weather</div>
		);

	}

}

DisplayWeather.defaultProps = { data: {} };
DisplayWeather.propTypes = { data: React.PropTypes.object }

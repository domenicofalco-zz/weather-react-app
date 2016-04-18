//generale CSS
require("../less/style.less")

//main modules
import React from 'react';
import ReactDOM from 'react-dom';

//Material UI components (example)
import RaisedButtonExampleSimple from './components/buttonsExampleUiMaterial';

//constants
import { BASE_URI, TOKEN } from './js/constants';

//React Main Class
export class Main extends React.Component {
	render() {

		//APIs -> ToDo with promise
		console.log(BASE_URI, TOKEN);
		//

		return (
			//render Material UI components (example)
			<div>
				<RaisedButtonExampleSimple label="Default" />
			</div>
		);
	}
}

ReactDOM.render(<Main/>, document.querySelector("#myApp"));

//main modules
import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
// import AutoComplete from 'material-ui/lib/auto-complete';

/**
 * SearchForm Component
 */
export default class SearchForm extends React.Component {

  constructor(props){
		super(props);
	}

  submit(event) {
    event.preventDefault();
    let locationField = this.refs.locationField;
    let location = locationField.getValue();

    // TODO (Danilo) - next time send the location to the API

    this.refs.searchForm.reset();
  }

	render() {

    // TODO (Danilo) - use Material-UI's AutoComplete Component
    // --- SEE BELOW ---
    // <AutoComplete
    //   hintText="ex. London"
    //   floatingLabelText="Type a location"
    //   filter={AutoComplete.fuzzyFilter}
    //   dataSource={LOCATION}
    // />

		return (
			<form className="search-form" ref="searchForm" onSubmit={this.submit.bind(this)}>
        <div>
          <TextField
            ref="locationField"
            id="location"
            hintText="ex. London"
            floatingLabelText="Type a location"
          />
        </div>
        <div className="buttons-set">
          <RaisedButton type="submit" label="Search" primary={true} />
        </div>
      </form>
		);

	}

}

SearchForm.defaultProps = { data: {} };
SearchForm.propTypes = { data: React.PropTypes.object }

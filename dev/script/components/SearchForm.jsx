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
    console.log('Location submitted.');

    // TODO (Danilo) - send the location to the API

    // this.refs.searchForm.clear();
  }

	render() {

    var { data } = this.props;

    // TODO (Danilo) - cleanup this mess

    // <AutoComplete
    //   hintText="ex. London"
    //   floatingLabelText="Type a location"
    //   filter={AutoComplete.fuzzyFilter}
    // />

		return (
			<form className="search-form" ref="searchForm" onSubmit={this.submit}>
        <div>
          <TextField
            id="location"
            floatingLabelText="Type a location"
          />
        </div>
        <div className="buttons-set">
          <RaisedButton label="Search" primary={true} />
        </div>
      </form>
		);

	}

}

SearchForm.defaultProps = { data: {} };
SearchForm.propTypes = { data: React.PropTypes.object }

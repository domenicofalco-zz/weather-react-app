// main modules
import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
// import AutoComplete from 'material-ui/lib/auto-complete';

/**
 * SearchForm Component
 */
export default class SearchForm extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const locationField = this.refs.locationField;
    const location = locationField.getValue();

    // TODO (Danilo) - next time send the location to the API
    console.log(location);

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
      <form className="search-form" ref="searchForm" onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <TextField
              ref="locationField"
              id="location"
              hintText="ex. London"
              floatingLabelText="Type a location"
            />
        </div>
        <div className="buttons-set">
          <RaisedButton type="submit" label="Search" primary />
        </div>
      </form>
    );
  }

}

SearchForm.defaultProps = { data: {} };
SearchForm.propTypes = { data: React.PropTypes.object };

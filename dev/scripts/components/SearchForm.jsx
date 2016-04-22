import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
// import AutoComplete from 'material-ui/lib/auto-complete';

export default class SearchForm extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
    const searchForm = document.querySelector('.search-form');
    const location = document.getElementById('location').value;

    // TODO (Danilo) - next time send the location to the API
    console.log(location);

    searchForm.reset();
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
      <form className="search-form" ref="searchForm" onSubmit={this.handleSubmit}>
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

import React from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';

// TODO: import API-Cities for Autocomplete
const cities = [];

export default class CityAutocomplete extends React.Component {

  render() {
    return (
      <AutoComplete
        hintText="ex. London"
        floatingLabelText="Type a location"
        filter={AutoComplete.fuzzyFilter}
        dataSource={cities}
        onUpdateInput={this.props.updateInputField}
      />
    );
  }

}

CityAutocomplete.propTypes = { updateInputField: React.PropTypes.func.isRequired };

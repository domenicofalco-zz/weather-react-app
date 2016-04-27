import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import CityAutocomplete from './Autocomplete';
import GetWeather from '../js/getWeather';

export default class SearchForm extends React.Component {

  constructor() {
    super();
    this.state = {
      inputFieldSearch: null,
      weatherData: {},
    };
    this._updateInputField = this._updateInputField.bind(this);
    this._submitForm = this._submitForm.bind(this);
  }

  _submitForm(e) {
    e.preventDefault();
    const { inputFieldSearch } = this.state;
    const { updateWeatherState } = this.props;

    if (inputFieldSearch) {
      this.setState({
        inputFieldSearch,
        weatherData: GetWeather.getDataFromAPI(inputFieldSearch, updateWeatherState),
      });
    }
  }

  _updateInputField(value) {
    // TODO: this state will update the
    // AutoComplete request to fullfill the dropdown-city
    // and this FN is already  called onInputChange
    this.setState({
      inputFieldSearch: value,
    });
  }

  render() {
    return (
      <div>
        <form className="search-form" ref="searchForm" onSubmit={this._submitForm}>
          <div>
            <CityAutocomplete
              updateInputField={this._updateInputField}
            />
          </div>
          <div className="buttons-set">
            <RaisedButton type="submit" label="Search" primary />
          </div>
        </form>
      </div>
    );
  }

}

// SearchForm.defaultProps = { data: {} };
SearchForm.propTypes = { updateWeatherState: React.PropTypes.func.isRequired };

import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import CityAutocomplete from './Autocomplete';

// API
import API from '../js/API';

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
    const { addWeatherItem } = this.props;

    if (inputFieldSearch) {
      // this.refs.searchForm.reset();

      // TODO: Try to move this FN in a dedicated js file
      API.getWeather(inputFieldSearch).then((data) => {
        const item = {
          city: data.name,
          country: data.sys.country,
          status: data.weather[0].main,
        };
        addWeatherItem(item);
      });
    }
  }

  _localStorage() {
    // TODO: save "this.state.inputFieldSearch" in localStorage
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

SearchForm.propTypes = {
  addWeatherItem: React.PropTypes.func.isRequired,
  updateWeatherState: React.PropTypes.func.isRequired
};

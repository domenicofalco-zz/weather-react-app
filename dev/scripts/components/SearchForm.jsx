import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import CityAutocomplete from './Autocomplete';
import DisplayWeatherItem from './DisplayWeatherItem';

// API
import API from '../js/API';

export default class SearchForm extends React.Component {

  constructor() {
    super();
    this.state = {
      inputFieldSearch: null,
      hasLoaded: false,
      weatherData: {},
    };
    this._updateInputField = this._updateInputField.bind(this);
    this._submitForm = this._submitForm.bind(this);
  }

  _submitForm(e) {
    e.preventDefault();

    if (this.state.inputFieldSearch) {
      // TODO: Try to move this FN in a dedicated js file
      API.getWeather(this.state.inputFieldSearch).then((data) => {
        this.setState({
          hasLoaded: false,
          weatherData: {
            city: data.name,
            country: data.sys.country,
            status: data.weather[0].main,
          },
        }, () => {
          this.setState({
            hasLoaded: true,
          });
        });
        //
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
        {this.state.hasLoaded &&
          <DisplayWeatherItem
            weather={this.state.weatherData}
          />
        }
      </div>
    );
  }

}

// SearchForm.defaultProps = { data: {} };
// SearchForm.propTypes = { data: React.PropTypes.object };

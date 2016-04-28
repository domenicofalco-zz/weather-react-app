import _ from 'underscore';

// HELPERS
function _isAlreadyStored(c, n) {
  return _.contains(c.split(','), n);
}
//

function removeItem(searchKey) {
  // TODO Remove item from local storage
}

function getItem(searchKey) {
  return localStorage.getItem(searchKey);
}

function setItem(searchKey, value) {
  const citiesStored = getItem(searchKey);
  const city = value.toUpperCase();

  if (localStorage.length === 0) {
    localStorage.setItem(searchKey, city);
  } else if (!_isAlreadyStored(citiesStored, city)) {
    localStorage.setItem(searchKey, `${city},${citiesStored}`);
  }
}

const LocalStorage = { setItem, getItem, removeItem };

export default LocalStorage;

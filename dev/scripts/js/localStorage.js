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

  if (localStorage.length === 0) {
    localStorage.setItem(searchKey, value);
  } else if (!_isAlreadyStored(citiesStored, value)) {
    localStorage.setItem(searchKey, `${value},${citiesStored}`);
  }
}

const LocalStorage = { setItem, getItem, removeItem };

export default LocalStorage;

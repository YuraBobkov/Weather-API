export default function citiesReducer(state = {}, action) {
  switch (action.type) {
    case 'GET_CITIES': {
      return state;
    }
    case 'ADD_CITY_LIST': {
      return state;
    }
    default:
      return state;
  }
}

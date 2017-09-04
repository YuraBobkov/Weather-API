export default function citiesReducer(state = {}, action) {
  switch (action.type) {
    case 'GET_CITIES': {
      return Object.assign({}, state, {
        isLoading: true,
      });
    }
    case 'ADD_CITY_LIST': {
      return Object.assign({}, state, {
        isLoading: false,
        data: action.payload
      });
    }
    default:
      return state;
  }
}

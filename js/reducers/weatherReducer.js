export default function weatherReducer(state = {}, action) {
  switch (action.type) {
    case 'GET_WEATHER_BY_ID': {
      return Object.assign({}, state, {
        isLoading: true,
      });
    }
    case 'ADD_WEATHER': {
      return Object.assign({}, state, {
        isLoading: false,
        data: action.payload
      });
    }
    default:
      return state;
  }
}

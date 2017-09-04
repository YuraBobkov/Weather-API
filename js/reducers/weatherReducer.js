export default function weatherReducer(state = {}, action) {
  switch (action.type) {
    case 'GET_WEATHER_BY_ID': {
      return state;
    }
    case 'ADD_WEATHER': {
      return state;
    }
    default:
      return state;
  }
}

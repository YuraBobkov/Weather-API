const API_URL = 'http://api.openweathermap.org/data/2.5/';
const API_ID = 'a8569412e67b04ce532fb1ea6721fb45';

export default function request(store) {
  return function (next) {
    return function (action) {
      console.log('[ACTION]', action.type);
      switch (action.type) {
        case 'GET_CITIES': {
          if (action.payload !== '') {
            let URL = `${API_URL}find?q=${action.payload}&type=like&cnt=30&appid=${API_ID}`;
            makeRequest(URL)
            .then((body) => {
              store.dispatch({
                type: 'ADD_CITY_LIST',
                payload: body,
              });
            })
            .catch((error) => {
              alert('Cannot find requested city');
              throw new Error('Error with fetch');
            });
          }
          break;
        }
        case 'GET_WEATHER_BY_ID': {
          let URL = `${API_URL}weather?id=${action.payload}&units=metric&appid=${API_ID}`;
          makeRequest(URL)
          .then((body) => {
            store.dispatch({
              type: 'ADD_WEATHER',
              payload: body,
            });
          });
          break;
        }
      }
      return next(action);
    };
  };
}

const makeRequest = function (URL) {
  let weather = fetch(URL)
  .then((res) => {
    return res.json();
  })
  .catch((error) => {
    throw new Error('Error with fetch');
  });
  console.log('12122', weather)
  return weather;
};

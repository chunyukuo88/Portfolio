import { FETCH_HUMIDITY } from '../actionCreators/actionCreators/types.js';

export default function globalHumidityReducer(state = 0, action){
  switch (action.type){
    case FETCH_HUMIDITY: return action.payload;
    default: return { globalHumidity: 50 };
  }
}

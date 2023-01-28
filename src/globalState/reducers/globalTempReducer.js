import { FETCH_TEMP } from '../actionCreators/actionCreators/types.js';

export default function globalTempReducer(state = 0, action){
  switch (action.type){
    case FETCH_TEMP: return action.payload;
    default: return { globalTemp: 45 };
  }
}

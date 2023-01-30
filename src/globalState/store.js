import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import humidityReducer from '../features/humidity/humiditySlice';
import languageReducer from '../features/language/languageSlice';
import navigationReducer from '../features/navigation/navigationSlice';
import tempReducer from '../features/temp/tempSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    humidity: humidityReducer,
    language: languageReducer,
    navigation: navigationReducer,
    temp: tempReducer,
    auth: authReducer,
  },
});

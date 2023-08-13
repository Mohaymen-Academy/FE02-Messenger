import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/profileSlice';

const store = configureStore({
  reducer: {
    profile: profileReducer
  }
});

export default store;

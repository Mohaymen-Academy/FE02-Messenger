import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import profileReducer from '../features/profileSlice';

const profilePersistConfig = {
  key: 'profile',
  storage
};

const persistedProfileReducer = persistReducer(profilePersistConfig, profileReducer);

export const store = configureStore({
  reducer: {
    profile: persistedProfileReducer
  },
  middleware: [thunk]
});

export default store;

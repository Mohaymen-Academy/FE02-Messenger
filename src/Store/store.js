import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import profileReducer from '../features/profileSlice';
import MessgeListReducer from '../features/messageListSlice';
import RightSideReducer from '../features/rightSideSlice';
const profilePersistConfig = {
  key: 'profile',
  storage
};

const persistedProfileReducer = persistReducer(profilePersistConfig, profileReducer);

export const store = configureStore({
  reducer: {
    profile: persistedProfileReducer,
    messageList: MessgeListReducer,
    rightsideMenues: RightSideReducer
  },
  middleware: [thunk]
});

export default store;

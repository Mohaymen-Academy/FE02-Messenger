import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import profileReducer from '../features/profileSlice';
import chatCardPreviewReduce from '../features/chatCardPreviewSlice';
import RightSideReducer from '../features/rightSideSlice';
import SelectedProf from '../features/SelectedInfo';

const profilePersistConfig = {
  key: 'profile',
  storage,
};

const persistedProfileReducer = persistReducer(profilePersistConfig, profileReducer);

export const store = configureStore({
  reducer: {
    profile: persistedProfileReducer,
    messageList: MessgeListReducer,
    rightsideMenues: RightSideReducer,
    selectedProf: SelectedProf,
  },
  middleware: [thunk],
});

export default store;

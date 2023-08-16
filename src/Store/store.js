import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import profileReducer from '../features/profileSlice';
import RightSideReducer from '../features/rightSideSlice';
import SelectedProf from '../features/SelectedInfo';
import chatCardPreviewReducer from '../features/chatCardPreviewSlice';
import composerSliceReducer from '../features/composerSlice';

const profilePersistConfig = {
  key: 'profile',
  storage
};

const persistedProfileReducer = persistReducer(profilePersistConfig, profileReducer);

export const store = configureStore({
  reducer: {
    profile: persistedProfileReducer,
    // messageList: MessgeListReducer,
    rightsideMenues: RightSideReducer,
    selectedProf: SelectedProf,
    messageList: chatCardPreviewReducer,
    composer: composerSliceReducer
  },
  middleware: [thunk]
});

export default store;
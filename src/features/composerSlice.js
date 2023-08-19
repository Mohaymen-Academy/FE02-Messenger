import { createSlice } from '@reduxjs/toolkit';
import Requests from '../API/Requests';

const initialState = {
  composerValue: '',
  isEditting: false,
  isReplying: false,
  isForwarding: false,
  forwardID: '',
  replyID: '',
  editID: ''
};

const composerSlice = createSlice({
  name: 'composer',
  initialState,
  reducers: {
    clear: (state, action) => {
      state.composerValue = '';
      state.isEditting = false;
      state.isReplying = false;
      state.isForwarding = false;
    },
    setaction: (state, action) => {
      switch (action.payload.type) {
        case 'reply':
          state.isReplying = true;
          break;
        case 'edit':
          state.isEditting = true;
          state.editID = action.payload.messageID;
          break;
        case 'delete':
          Requests().Deletemsg(action.payload.messageID);
          break;
      }
      state.composerValue = action.payload.text;
    },
    setIsEditting: (state, action) => {
      state.editID = action.payload;
    },
    forwardMessage: (state, action) => {
      state.isForwarding = true;
      state.forwardID = action.payload;
    },
    resetComposer: (state) => {
      state = initialState;
    }
  }
});
export const composerActions = composerSlice.actions;
export default composerSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import Requests from '../API/Requests';
import { deletemessage } from './SelectedInfo';
// import {  } from 'react-redux';

const initialState = {
  composerValue: '',
  isEditting: false,
  isReplying: false,
  isForwarding: false,
  forwardID: '',
  replyID: '',
  editID: '',
  editvalue: ''
};

const composerSlice = createSlice({
  name: 'composer',
  initialState,
  reducers: {
    clear: (state, action) => {
      state.composerValue = '';
      state.editvalue = '';
      state.isEditting = false;
      state.isReplying = false;
      state.isForwarding = false;
    },
    setaction: (state, action) => {
      switch (action.payload.type) {
        case 'reply':
          state.isReplying = true;
          state.composerValue = action.payload.text;
          break;
        case 'edit':
          state.isEditting = true;
          state.editID = action.payload.messageID;
          state.editvalue = action.payload.text;
          state.composerValue = action.payload.text;
          break;
        case 'delete':
          Requests().Deletemsg(action.payload.messageID);
          break;
      }
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

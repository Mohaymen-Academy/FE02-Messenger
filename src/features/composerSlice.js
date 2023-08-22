import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Requests from '../API/Requests';
// import {  } from 'react-redux';

const initialState = {
  composerValue: '',
  isEditting: false,
  isReplying: false,
  isForwarding: false,
  forwardID: '',
  forwardval: '',
  replyID: '',
  editID: '',
  editvalue: '',
  pinmessage: null
};
const GetPin = createAsyncThunk('composer/getpin', async (infos) => {
  const data = Requests().GetPin(infos.chatid);
  return data;
});

const composerSlice = createSlice({
  name: 'composer',
  initialState,
  reducers: {
    clear: (state, action) => {
      state.composerValue = '';
      state.editvalue = '';
      state.forwardval = '';
      state.isEditting = false;
      state.isReplying = false;
      state.isForwarding = false;
    },
    setaction: (state, action) => {
      switch (action.payload.type) {
        case 'reply':
          state.isReplying = true;
          state.replyID = action.payload.messageID;
          state.composerValue = action.payload.text;
          break;
        case 'edit':
          state.isEditting = true;
          state.editID = action.payload.messageID;
          state.editvalue = action.payload.text;
          state.composerValue = action.payload.text;
          break;
      }
    },
    forwardMessage: (state, action) => {
      state.isForwarding = true;
      state.forwardID = action.payload.id;
      state.composerValue = action.payload.text;
    },
    resetComposer: (state) => {
      state = initialState;
    },
    pinmsg: (state, action) => {
      state.pinmessage = {
        messageID: action.payload.msgid,
        text: action.payload.text
      };
    },
    clearpin: (state, action) => {
      state.pinmessage = null;
    }
  },
  extraReducers: (builder) =>
    builder.addCase(GetPin.fulfilled, (state, action) => {
      state.pinmessage = action.payload.data;
    })
});
export { GetPin };
export const composerActions = composerSlice.actions;
export default composerSlice.reducer;

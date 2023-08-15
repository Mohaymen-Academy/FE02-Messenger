import { createSlice } from '@reduxjs/toolkit';

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
    // setIsPinned: (state) => {
    //   state. = true;
    // },
    // setUnPin: (state) => {
    //   state.isPinned = false;
    // },
    setIsEditting: (state, action) => {
      state.isEditting = true;
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

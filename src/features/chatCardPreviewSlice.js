import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMessage: null,
  messages: []
};

const chatCardPreviewSlice = createSlice({
  name: 'messageList',
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload.chatDisplayList;
      // state.messages.push(action.payload.chatDisplayList);
    },
    setActiveMessage: (state, action) => {
      state.activeMessage = state.messages.at(action.payload);
      console.log('hell');
    },
    removeActiveMessage: (state) => {
      state.activeMessage = null;
    }
  }
});
export const { setMessages, setActiveMessage, removeActiveMessage } = chatCardPreviewSlice.actions;
export default chatCardPreviewSlice.reducer;

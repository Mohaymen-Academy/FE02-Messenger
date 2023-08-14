import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: []
};

const messageListSlice = createSlice({
  name: 'messageList',
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload.chatDisplayList;
    }
  }
});
export const { setMessages } = messageListSlice.actions;
export default messageListSlice.reducer;

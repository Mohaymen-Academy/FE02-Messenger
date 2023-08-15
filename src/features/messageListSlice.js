import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [
    {
      "profile": {
          "profileID": 1,
          "profileName": "Ali",
          "type": 0,
          "defaultProfileColor": "#121212"
      },
      "lastMessage": {
          "messageID": 1,
          "text": "سلام",
          "time": "2023-08-09T19:57:36.18063",
          "viewCount": 0
      },
      "unreadMessageCount": 1
  }
  ]
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

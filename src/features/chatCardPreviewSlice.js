import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMessage: null,
  messages: []
};

/**
[
    {
        "profile": {
            "profileID": 2,
            "profileName": "Sara",
            "type": "USER",
            "defaultProfileColor": "#e68873",
            "lastProfilePicture": null
        },
        "lastMessage": {
            "messageID": 2,
            "text": "سلام. خوبم ممنون تو چطوری ؟",
            "time": "2023-08-14T09:17:50.23945",
            "viewCount": 1
        },
        "unreadMessageCount": 1
    }
]
]
 * 
 * 
 * */ 

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

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Requests from '../API/Requests';

const initialState = {
  activeMessage: null,
  messages: [],
  finished: false,
  contacts: []
};

/**
[
    messages: [
        {
            "messageID": 1,
            "text": "سلام خوبی ؟",
            "time": "2023-08-14T13:57:37.447431",
            "media": null,
            "viewCount": 2,
            "sender": {
                "profileID": 1000,
                "profileName": "Ali",
                "defaultProfileColor": "#e6c773",
                "lastProfilePicture": null
            },
            "isPinned": false,
            "isEdited": false
        },
        {
            "messageID": 2,
            "text": "سلام. خوبم ممنون تو چطوری ؟",
            "time": "2023-08-14T13:57:41.209955",
            "media": null,
            "viewCount": 1,
            "sender": {
                "profileID": 1001,
                "profileName": "Sara",
                "defaultProfileColor": "#e68873",
                "lastProfilePicture": {
                    "preLoadingContent": "/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+b/4ofGDwJ4ns4vgafC2nwveeCfDEtv4m1vVr7WfEWgfGiTwjKuu2OnTpdabY6HpXibxz9li1q1uYNYktoFS3n8yCzs/7FKKKvh+lSweSZdSpwlP2lJYidTE4jFYqrKdZUnNe0r16klTTvKMI2jGU5uzcmfoGczeJzbGQnGnBYaoqMHRp06LdOFqcFNU4qMnGMFaXKpdG3FRUf//Z"
                }
            },
            "isPinned": false,
            "isEdited": false
        }
    ],
    "messageId": 1,
    "downFinished": true,
    "upFinished": true
]

 * 
 * 
 * */
const GetContacts = createAsyncThunk('messageList/getcontacts', async () => {
  try {
    const data = await Requests().GetContacts();
    return data;
  } catch (err) {
    console.log(err);
  }
});
const chatCardPreviewSlice = createSlice({
  name: 'messageList',
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload.chatDisplayList;
    },
    setActiveMessage: (state, action) => {
      state.activeMessage = state.messages.at(action.payload);
    },
    removeActiveMessage: (state) => {
      state.activeMessage = null;
    }
  },
  extraReducers: (builder) =>
    builder.addCase(GetContacts.fulfilled, (state, action) => {
      console.log(action.payload.data);
      state.contacts = action.payload.data;
    })
});
export { GetContacts };
export const { setMessages, setActiveMessage, removeActiveMessage } = chatCardPreviewSlice.actions;
export default chatCardPreviewSlice.reducer;

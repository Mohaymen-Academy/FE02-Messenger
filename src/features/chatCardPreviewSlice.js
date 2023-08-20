import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Requests from '../API/Requests';

const initialState = {
  activeMessage: null,
  messages: [],
  finished: false,
  contacts: []
};

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

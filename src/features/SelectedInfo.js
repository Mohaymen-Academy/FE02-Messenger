import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
  selectedChatID: null,
  chatType: null,
  selectedProfileView: null,
  Chatmessages: [],
  lastMessage: 0
};
const GetMessages = createAsyncThunk('selectedProf/getmessages', () => {});
const SelectedProf = createSlice({
  name: 'selectedProf',
  initialState,
  reducers: {
    setChat: (state, action) => {
      state.selectedChatID = action.payload.selected;
    },
    setChatType: (state, action) => {
      state.chatType = action.payload.type;
      state.selectedChatID = action.payload.ID;
    }
  },
  extraReducers: (builder) =>
    builder.addCase(GetMessages.fulfilled, (state, action) => {
      state.Chatmessages = action.payload.messages;
    })
});
export {GetMessages};
export const { setChat, setChatType } = SelectedProf.actions;
export default SelectedProf.reducer;

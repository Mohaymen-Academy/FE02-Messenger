import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Requests from '../API/Requests';
const initialState = {
  selectedChatID: null,
  chatType: null,
  selectedProfileView: null,
  Chatmessages: [],
  lastMessage: 0
};
const GetMessages = createAsyncThunk(
  'selectedProf/getmessages',
  async (requestinfo) => {
    try {
      console.log(requestinfo)
      const data = await Requests().GetChat(requestinfo.ID);
      return { data: data.data, ID: requestinfo.ID, type: requestinfo.type };
    } catch (err) {
      console.log(err);
    }
  }
);
const SelectedProf = createSlice({
  name: 'selectedProf',
  initialState,
  // reducers: {
  // },
  extraReducers: (builder) =>
    builder.addCase(GetMessages.fulfilled, (state, action) => {
      console.log(action.payload);
      state.Chatmessages = action.payload.data;
      state.chatType = action.payload.type;
      state.selectedChatID = action.payload.ID;
    })
});
export { GetMessages };
// export const { setChat, setChatType } = SelectedProf.actions;
export default SelectedProf.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Requests from '../API/Requests';
function CustomsortInc(a, b) {
  // console.log(a.messageID,b.messageID)
  return a.messageID - b.messageID;
  // else
  // return b.profile.profileID-a.profile.profileID;}
}

const initialState = {
  selectedChatID: 0,
  chatType: 0,
  selectedProfileView: null,
  Chatmessages: [],
  lastMessage: 0
};
const GetMessages = createAsyncThunk('selectedProf/getmessages', async (requestinfo) => {
  try {
    // console.log(requestinfo);
    const data = await Requests().GetChat(requestinfo.ID);
    // console.log(data);
    return data;
    return { data: data.data, ID: requestinfo.ID, type: requestinfo.type };
  } catch (err) {
    console.log(err);
  }
});
const UpdateMessages = createAsyncThunk('selectedProf/updatemessages', async (requestinfo) => {
  try {
    // console.log(requestinfo);
    const data = await Requests().GetChat(requestinfo.ID);
    // console.log(data);
    return { data: data.data };
  } catch (err) {
    console.log(err);
  }
});
const SelectedProf = createSlice({
  name: 'selectedProf',
  initialState,
  // reducers: {
  // },
  extraReducers: (builder) =>
    builder
      .addCase(GetMessages.fulfilled, (state, action) => {
        
        console.log(action.payload);
        console.log('zarp')
        // state.Chatmessages = action.payload.data?.messages;
        // state.chatType = action.payload.type;
        // state.selectedChatID = action.payload.ID;
      })
      .addCase(UpdateMessages.fulfilled, (state, action) => {
        const x = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

        // action.payload.data?.messages.forEach(newObj => {
        //   state.Chatmessages.find()
        // });

        // x.map(ent=>)

        // state.Chatmessages =
      })
});
export { GetMessages };
// export const { setChat, setChatType } = SelectedProf.actions;
export default SelectedProf.reducer;

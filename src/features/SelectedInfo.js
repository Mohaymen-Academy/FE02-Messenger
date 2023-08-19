import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit';
import Requests from '../API/Requests';

function CustomsortInc(a, b) {
  // console.log(a.messageID,b.messageID)
  return a.messageID - b.messageID;
  // else
  // return b.profile.profileID-a.profile.profileID;}
}

const initialState = {
  selectedChatID: null,
  chatType: null,
  selectedProfileView: null,
  Chatmessages: [],
  lastMessage: 0
};
const GetMessages = createAsyncThunk('selectedProf/getmessages', async (requestinfo, params) => {
  try {
    // console.log(requestinfo);
    const data = await Requests().GetChat(requestinfo.ID);
    // console.log(data);
    // return data;
    return {
      data: data.data,
      ID: requestinfo.ID,
      type: requestinfo.type
    };
  } catch (err) {
    console.log(err);
  }
});
// const UpdateMessages = createAsyncThunk(
//   'selectedProf/updatemessages',
//   async (requestinfo, params) => {
//     try {
//       const data = await Requests().GetChat(requestinfo.ID, params);
//       return { msgId: data.id, newtext: data.text };
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );
const SelectedProf = createSlice({
  name: 'selectedProf',
  initialState,
  // reducers: {
  // },
  reducers: {
    resetChatId: (state, action) => {
      // console.log('hello from reducer');
      state.selectedChatID = null;
    },
    editmsg: (state, action) => {
      console.log(action.payload.msgId);
      state.Chatmessages = state.Chatmessages.map((ele) => {
        if (ele.messageID == action.payload.msgId) {
          return {
            ...ele,
            text: action.payload.newtext
          };
        }
        return ele;
      });
    }
  },
  extraReducers: (builder) =>
    builder.addCase(GetMessages.fulfilled, (state, action) => {
      state.Chatmessages = action.payload.data?.messages;
      state.chatType = action.payload.type;
      state.selectedChatID = action.payload.ID;
    })
});
export {
  GetMessages
};
export const {
  resetChatId,
  editmsg
} = SelectedProf.actions;
// export const { setChat, setChatType } = SelectedProf.actions;
export default SelectedProf.reducer;
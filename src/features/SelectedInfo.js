import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
  lastMessage: 0,
  profileinfo: null,
  leftprof: null,
  profPics: [],
  isContact: false
};
const SetLeftProf = createAsyncThunk('selectedProf/setleftprof', async (infos) => {
  console.log(infos.profid);
  const data = await Requests().getleftProf(infos.profid);
  return data.data;
});
const GetMessages = createAsyncThunk('selectedProf/getmessages', async (requestinfo) => {
  try {
    const data = await Requests().GetChat(requestinfo.ID, requestinfo.message_id);
    return {
      data: data?.data,
      ID: requestinfo.ID,
      type: requestinfo.type,
      profileinfo: requestinfo?.profileinfo
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
    },
    addcontact: (state, action) => {
      state.isContact = true;
    },
    deletemessage: (state, action) => {
      state.Chatmessages = state.Chatmessages.filter(
        (msg) => msg.messageID != action.payload.msgid
      );
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(GetMessages.fulfilled, (state, action) => {
        console.log(action.payload);
        state.Chatmessages = action.payload?.data?.messages;
        if (action.payload.profileinfo?.profileID) {
          state.chatType = action.payload?.type;
          state.selectedChatID = action.payload?.ID;
          state.profileinfo = action.payload?.profileinfo;
        }
      })
      .addCase(SetLeftProf.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isContact = action.payload.isContact;
        state.leftprof = action.payload.profile;
        state.profPics = action.payload.profilePictures;
      })
});
export { GetMessages, SetLeftProf };
export const { resetChatId, editmsg, addcontact,deletemessage } = SelectedProf.actions;
// export const { setChat, setChatType } = SelectedProf.actions;
export default SelectedProf.reducer;

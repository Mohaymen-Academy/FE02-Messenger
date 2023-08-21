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
  upfinished: false,
  downfinished: false,
  profileinfo: null,
  leftprof: null,
  profPics: [],
  isContact: false,
  updatesList: [],
  downloaded: [],
  needupdate:false,
};
const GetMessagesUp = createAsyncThunk('selectedProf/getmessagesup', async (infos) => {
  console.log('iwoereuiwpr');
  const data = await Requests().GetMessagesUp(infos.chatid, infos.msgid);
  return data.data;
});
const GetMessagesDown = createAsyncThunk('selectedProf/getmessagesdown', async (infos) => {
  const data = await Requests().GetMessagesDown(infos.chatid, infos.msgid);
  return data.data;
});

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

const deletemsg = (messages, msgIdToDelete) => {
  return messages.filter((msg) => msg.messageID != msgIdToDelete);
};
const editmsgfunc = (messages, newmsg) => {
  messages.map((ele) => {
    if (ele.messageID == newmsg.messageID) {
      return newmsg;
    }
    return ele;
  });
};
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
            text: action.payload.newtext,
            isEdited: true
          };
        }
        return ele;
      });
      // state.Chatmessages = temp;
    },
    addcontact: (state, action) => {
      state.isContact = true;
    },
    deletemessage: (state, action) => {
      state.Chatmessages = deletemsg(state.Chatmessages, action.payload.msgid);
    },
    Updatecommands: (state, action) => {
      // state.updatesList = state.updatesList.concat();
      action.payload.updates.forEach((command) => {
        console.log(command)
        state.Chatmessages = deletemsg(state.Chatmessages, command.MessageId);
        // switch (command.updateType.toLowerCase()) {
        //   case 'delete':
        //   case 'edit':
        //     state.Chatmessages = editmsgfunc(state.Chatmessages, command.message);
        //   case 'pin':
        //     break;
        }
      );
    },

    ReplaceImage: (state, action) => {
      // state.messages; // Create a new array to avoid mutating the state directly
      state.Chatmessages = state.Chatmessages.map((message) => {
        console.log(message);
        if (message.messageID === action.payload.massageId) {
          state.downloaded = [...state.downloaded, action.payload.massageId];
          console.log(state.downloaded);
          return {
            ...message,
            media: {
              ...message.media,
              preLoadingContent: action.payload.image
            }
          };
        }
        return message;
      });
      console.log(state.Chatmessages);
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(GetMessages.fulfilled, (state, action) => {
        console.log(action.payload);
        state.Chatmessages = action.payload?.data?.messages;
        state.downfinished = action.payload?.data?.downFinished;
        state.upfinished = action.payload?.data?.upFinished;
        if (state.chatType != action.payload?.type) state.chatType = action.payload?.type;
        if (state.selectedChatID != action.payload?.ID) state.selectedChatID = action.payload?.ID;
        if (action.payload?.profileinfo) {
          state.profileinfo = action.payload?.profileinfo;
        }
      })
      .addCase(SetLeftProf.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isContact = action.payload.isContact;
        state.leftprof = action.payload.profile;
        state.profPics = action.payload.profilePictures;
      })
      .addCase(GetMessagesUp.fulfilled, (state, action) => {
        // console.log('up');
        state.Chatmessages = [].concat(action.payload.messages, state.Chatmessages);
        state.upfinished = action.payload?.upFinished;

        console.log();
      })
      .addCase(GetMessagesDown.fulfilled, (state, action) => {
        // console.log('down');
        state.Chatmessages = [].concat(state.Chatmessages, action.payload.messages);
        state.downfinished = action.payload?.downFinished;
      })
});
export { GetMessages, SetLeftProf, GetMessagesDown, GetMessagesUp };
export const { resetChatId, editmsg, addcontact, deletemessage, Updatecommands, ReplaceImage } =
  SelectedProf.actions;
// export const { resetChatId, editmsg, addcontact, deletemessage,ReplaceImage } = SelectedProf.actions;
// export const { setChat, setChatType } = SelectedProf.actions;
export default SelectedProf.reducer;

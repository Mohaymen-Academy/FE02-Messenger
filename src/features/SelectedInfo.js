import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Requests from '../API/Requests';
import { DOWN } from '../utility/Constants';

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
  lastmsgId: 0,
  upfinished: false,
  downfinished: false,
  minID: 0,
  maxID: 0,
  unreadcount: 0,
  needupdate: false,
  dir: DOWN,
  profileinfo: null,
  leftprof: null,
  profPics: [],
  isContact: false,
  updatesList: [],
  downloaded: []
};
const Savenewmsg = createAsyncThunk('selectedProf/Savenewmsg', async (msginfo) => {
  const data = await Requests().sendText(
    msginfo.id,
    msginfo.rawtext,
    msginfo.styles,
    msginfo.reply,
    msginfo.forward
  );
  return { msgdata: data.data, media: msginfo.media };
});

const savemsgMedia = createAsyncThunk('selectedProf/savemsgMedia', async (infos) => {
  const data = await Requests().sendFiles(infos.id, { ...infos.fileuploaded, text: infos.value });
  return {
    data: data.data,
    content: infos.fileuploaded
  };
});

const doupdates = createAsyncThunk('selectedProf/doupdates', async (updateinfos) => {
  const data = await Requests().UpdateResponse(updateinfos.upid, updateinfos.chatid);
  console.error(data);
  return {
    data: data,
    updates: updateinfos.updates
  };
});
const GetMessagesUp = createAsyncThunk('selectedProf/getmessagesup', async (infos) => {
  const data = await Requests().GetMessagesUp(infos.chatid, infos.msgid);
  return data.data;
});
const GetMessagesDown = createAsyncThunk('selectedProf/getmessagesdown', async (infos) => {
  const data = await Requests().GetMessagesDown(infos.chatid, infos.msgid);
  return data.data;
});

const SetLeftProf = createAsyncThunk('selectedProf/setleftprof', async (infos) => {
  const data = await Requests().getleftProf(infos.profid);
  console.error(data);
  return data;
});
const GetMessages = createAsyncThunk('selectedProf/getmessages', async (requestinfo) => {
  try {
    const data = await Requests().GetChat(requestinfo.profid, requestinfo.message_id);
    console.error(data);
    return {
      data: data.data,
      profid: requestinfo.profid,
      type: requestinfo.type,
      profileinfo: requestinfo.profileinfo
    };
  } catch (err) {
    console.log(err);
  }
});

const deletemsg = (messages, msgIdToDelete) => {
  return messages.filter((msg) => msg.messageID != msgIdToDelete);
};
const seenchange = (messages, msgidtoseen) => {
  console.error('in seen');
  return messages.map((ele) => {
    if (ele.messageID == msgidtoseen) {
      console.error(ele);
      return {
        ...ele,
        viewCount: ele.viewCount
      };
    }
    return ele;
  });
};
const editmsgfunc = (messages, newmsg) => {
  console.error(newmsg);
  return messages.map((ele) => {
    if (ele.messageID == newmsg.messageID) {
      // return newmsg;
      return { ...ele, text: newmsg.text, isEdited: true };
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
      console.error(action.payload);
      state.Chatmessages = state.Chatmessages.map((ele) => {
        if (ele.messageID == action.payload.msgId) {
          return {
            ...ele,
            text: action.payload.newtext,
            textStyle: action.payload.style,
            isEdited: true
          };
        }
        return ele;
      });
      // state.Chatmessages = temp;
    },
    setFinished: (state, action) => {
      state.upfinished = action.payload.up;
      state.downfinished = action.payload.down;
    },
    setLastmsgId: (state, action) => {
      state.lastmsgId = action.payload.msgid;
    },
    deleteChat: (state, action) => {
      if (action.payload.chatid == state.selectedChatID) {
        state.selectedChatID = null;
        state.chatType = null;
      }
    },
    addcontact: (state, action) => {
      state.isContact = true;
    },

    deletecontact: (state, action) => {
      state.isContact = false;
    },

    deletemessage: (state, action) => {
      state.Chatmessages = deletemsg(state.Chatmessages, action.payload.msgid);
    },
    setUpdate: (state, action) => {
      state.needupdate = true;
      state.dir = action.payload.dir;
    },
    SetIDs: (state, action) => {
      state.maxID = action.payload.max;
      state.minID = action.payload.min;
    },
    setUnreadCount: (state, action) => {
      state.unreadcount = action.payload.count;
      if (action.payload.count != 0) {
        state.downfinished = false;
        // console.error(state.downfinished);
      }
    },

    ReplaceImage: (state, action) => {
      // state.messages; // Create a new array to avoid mutating the state directly
      state.Chatmessages = state.Chatmessages.map((message) => {
        if (message.messageID === action.payload.massageId) {
          state.downloaded = [
            ...state.downloaded,
            { id: action.payload.massageId, image: action.payload.image }
          ];

          return {
            ...message,
            media: {
              ...message.media,
              goodquality: true,
              preLoadingContent: action.payload.image
            }
          };
        }
        return message;
      });
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(GetMessages.fulfilled, (state, action) => {
        console.error(action.payload);
        state.Chatmessages = action.payload?.data?.messages;
        state.downfinished = action.payload?.data?.downFinished;
        state.upfinished = action.payload?.data?.upFinished;
        state.lastmsgId = action.payload?.data?.messageId;
        state.chatType = action.payload.type;
        state.selectedChatID = action.payload.profid;
        if (action.payload?.profileinfo) state.profileinfo = action.payload?.profileinfo;
      })
      .addCase(SetLeftProf.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isContact = action.payload?.data.isContact;
        state.leftprof = action.payload?.data.profile;
        // state.profPics = action.payload?.data.profilePictures;
      })
      .addCase(GetMessagesUp.fulfilled, (state, action) => {
        console.error(action.payload);
        state.Chatmessages = action.payload.messages.concat(state.Chatmessages);
        // console.error(state.Chatmessages)
        state.upfinished = action.payload.upFinished;
        state.lastmsgId = action.payload.messageId;
        console.error(state.lastmsgId);
        state.needupdate = false;
      })
      .addCase(GetMessagesDown.fulfilled, (state, action) => {
        console.error(action.payload);
        state.Chatmessages = state.Chatmessages.concat(action.payload.messages);
        state.downfinished = action.payload.downFinished;
        state.lastmsgId = action.payload.messageId;
        console.error(state.lastmsgId);
        state.needupdate = false;
      })
      .addCase(Savenewmsg.fulfilled, (state, action) => {
        console.error(action.payload);
        // const message = state.Chatmessages.findIndex(
        //   (msg) => msg.messageID == action.payload.msgdata.messageID
        // );
        // console.error(message);
        // if (message !== -1) {
        //   state.Chatmessages.map((msg) => {
        //     if (msg.messageID == action.payload.msgdata.messageID) {
        //       return action.payload.msgdata;
        //     } else return msg;
        //   });
        // } else {
        // }
        state.Chatmessages = state.Chatmessages.concat(action.payload.msgdata);
      })
      .addCase(doupdates.fulfilled, (state, action) => {
        action.payload.updates.forEach((command) => {
          console.error(command.updateType.toLowerCase());
          switch (command.updateType.toLowerCase()) {
            case 'delete':
              console.error('in delete');
              state.Chatmessages = deletemsg(state.Chatmessages, command.messageId);
              break;
            case 'edit':
              console.error('in edit');
              state.Chatmessages = editmsgfunc(state.Chatmessages, command.message);
              break;
            case 'seen':
              console.error('in seen');
              state.Chatmessages = seenchange(state.Chatmessages, command.messageId);
              break;
          }
        });
      })
      .addCase(savemsgMedia.fulfilled, (state, action) => {
        const goodmedia = action.payload.data;
        let zarp = { 1: '2' };

        goodmedia.media.preLoadingContent = action.payload.content.content;
        goodmedia.media['goodquality'] = true;
        console.error(goodmedia);
        state.Chatmessages = state.Chatmessages.concat(goodmedia);
      })
});
export {
  GetMessages,
  SetLeftProf,
  GetMessagesDown,
  GetMessagesUp,
  Savenewmsg,
  doupdates,
  savemsgMedia
};
export const {
  resetChatId,
  editmsg,
  addcontact,
  deletemessage,
  Updatecommands,
  ReplaceImage,
  deleteChat,
  setUnreadCount,
  SetIDs,
  setFinished,
  setUpdate,
  deletecontact
} = SelectedProf.actions;
// export const { resetChatId, editmsg, addcontact, deletemessage,ReplaceImage } = SelectedProf.actions;
// export const { setChat, setChatType } = SelectedProf.actions;
export default SelectedProf.reducer;

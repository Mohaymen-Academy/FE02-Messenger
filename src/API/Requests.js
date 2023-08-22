import {
  DOWN,
  TYPE_GROUP,
  UP
} from '../utility/Constants';
import API from './API';
import {
  BASE_URL,
  HEADER
} from './consts';
// import { useSelector } from 'react-redux';

export default function Requests(body) {
  // const token = useSelector((state) => state.profile.jwt);
  // console.log(JSON.parse(localStorage.getItem('persist:profile')).jwt);
  console.log();
  const AutorizeHeader = {
    ...HEADER,
    Authorization: `${localStorage.getItem('token')}`
  };
  // Register
  // check Duplicate Email - GET

  async function checkDuplicateEmail(email) {
    try {
      console.log('Sending request to check duplicate email...');

      const requestData = {
        email // Use the email value from state
      };

      const res = await API().GET('access/signup', requestData, HEADER);
      if (res.data === 'fail') {
        return false;
      }
      return true;
    } catch (err) {
      console.log(err);
    }
  }

  // Sign Up - POST
  async function Register(body) {
    try {
      // console.log('Sending request to sign up...');
      const res = await API().POST('access/signup', body, HEADER);
      localStorage.setItem('token', res.data.jwt);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
  // Login - POST
  async function Login(body) {
    console.log(body);
    try {
      // console.log('Sending request to login...');
      const res = await API().POST('access/login', body, HEADER);
      localStorage.setItem('token', res.data.jwt);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
  // profileData

  async function GetChat(receiverID, params) {
    console.error(params,receiverID);
    const param = {
      message_id: params
    };
    try {
      const res = await API().GET(receiverID, param, AutorizeHeader);
      console.error(res)
      return res;
    } catch (err) {
      console.error(err);
    }
  }
  // async function editMessage(msgid) {
  //   API().POST()
  // }
  async function UpdateChat(receiveID) {
    try {
      const res = await API().GET(receiveID, {}, AutorizeHeader);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
  async function GetChatList(limit) {
    const body = {
      limit
    };
    try {
      const res = await API().GET('/', body, AutorizeHeader);
      return res;
    } catch (err) {
      console.error(err);
    }
  }
  async function SearchAll(text) {
    const body = {
      search_entry: text
    };

    try {
      const res = await API().GET('search/', body, AutorizeHeader);
      return res;
    } catch (err) {
      console.error(err);
    }
  }
  async function UpdateSeen(MsgID) {
    await API()
      .POST(`seen/${MsgID}`, {}, AutorizeHeader)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  async function sendText(endpoint, text, styles, replymsg, forward_message) {
    const body = {
      text,
      text_style: styles,
      reply_message: replymsg,
      forward_message
    };
    console.log(body);
    try {
      const res = await API().POST(`${endpoint}`, body, AutorizeHeader);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
  async function GetMessagesUp(endpoint, msgid) {
    const param = {
      direction: UP,
      message_id: msgid
    };
    try {
      const res = await API().GET(`${endpoint}`, param, AutorizeHeader);
      return res;
    } catch (err) {
      console.log(err);
    }
  }

  async function GetMessagesDown(endpoint, msgid) {
    const param = {
      direction: DOWN,
      message_id: msgid
    };
    try {
      const res = await API().GET(`${endpoint}`, param, AutorizeHeader);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
  // async function Replymsg()
  // async function UpdateSeen(MsgID) {
  //   try {
  //     await API()
  //       .POST(`seen/${MsgID}`, {}, AutorizeHeader)
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  async function GetProfileMedium(chatid) {
    console.log(chatid);
    await API()
      .GET(`profile/compressed-profile/${chatid}`, {}, AutorizeHeader)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  async function GetOriginalImage(mediaId) {
    const res = await API().GET(`original/${mediaId}`, {}, AutorizeHeader);
    return res.data;
  }
  async function EditMessage(messageId, text) {
    const body = {
      text
    };
    await API()
      .POST(`edit-message/${messageId}`, body, AutorizeHeader)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  async function GetContacts() {
    try {
      const res = await API().GET('contacts/', {}, AutorizeHeader);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
  async function UpdateProfileImage(body, id) {
    try {
      await API()
        .POST(`profile/picture/${id}`, body, AutorizeHeader)
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (err) {
      console.log(err);
    }
  }
  async function UpdateProfile(body, id) {
    console.log(body);
    try {
      await API()
        .PUT(`profile/edit-info/${id}`, body, AutorizeHeader)
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (err) {
      console.log(err);
    }
  }
  async function CreateChat(name, members, type) {
    const body = {
      type,
      members,
      name
    };
    await API()
      .POST('create-chat', body, AutorizeHeader)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
  async function getleftProf(profid) {
    console.log(profid);
    try {
      const res = await API().GET(`profile/info/${profid}`, {}, AutorizeHeader);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
  async function AddContact(contactId) {
    await API()
      .POST(`contacts/${contactId}`, {}, AutorizeHeader)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  async function Deletemsg(msgID) {
    await API()
      .DEL(msgID, {}, AutorizeHeader)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  async function UnpinChat(chatid) {
    API()
      .PUT(`unpin-chat/${chatid}`, {}, AutorizeHeader)
      .then((res) => res.data)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  async function pinChat(chatid) {
    // console.log('here pin chat zarp');
    await API()
      .PUT(`pin-chat/${chatid}`, {}, AutorizeHeader)
      .then((res) => res.data)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  async function deleteChat(chatid) {}
  async function sendFiles(endpoint, body) {
    try {
      const res = await API().POST(`${endpoint}`, body, AutorizeHeader);
      console.log(res);
      return res;
    } catch (error) {
      console.error(error);
    }
  }
  async function GetupdateVal(messageId) {
    return await API().GET(`update/${messageId}`, {}, AutorizeHeader);
    // return res;
  }
  async function GetPin(chatid) {
    try {
      const res = API().GET(`getPinnedMessages/${chatid}`, {}, AutorizeHeader);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
  async function GetSharedMedia(chatid) {
    try {
      const res = await API().GET(`media/${chatid}`, {}, AutorizeHeader);
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
  async function PinMSG(msgid) {
    console.error(msgid);
    const body = {
      messageId: msgid
    };
    API()
      .PUT('pinMessage', body, AutorizeHeader)
      .then((res) => res.data)
      .then((data) => console.error(data))
      .catch((err) => console.log(err));
  }
  async function UnpinMessage(msgid) {
    const body = {
      messageId: msgid
    };
    API()
      .PUT('unpinMessage', body, AutorizeHeader)
      .then((res) => res.data)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  async function Forward(msgid) {
    const body = {};
  }
  async function UpdateResponse(upid, chatid) {
    const body = {
      update_id: upid,
      chat_id: chatid
    };
    API()
      .PUT('update', body, AutorizeHeader)
      .then((res) => res.data)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  async function DeleteChat(chatid) {
    const body = {
      chatId: String(chatid)
    };
    API().DEL(`delete-chat`, body, AutorizeHeader);
  }
  return {
    DeleteChat,
    UnpinChat,
    UpdateResponse,
    UnpinMessage,
    PinMSG,
    GetPin,
    GetupdateVal,
    GetMessagesDown,
    GetMessagesUp,
    pinChat,
    Deletemsg,
    AddContact,
    CreateChat,
    getleftProf,
    GetContacts,
    EditMessage,
    GetProfileMedium,
    checkDuplicateEmail,
    Register,
    Login,
    GetChatList,
    GetChat,
    SearchAll,
    sendText,
    UpdateSeen,
    UpdateProfileImage,
    UpdateProfile,
    sendFiles,
    GetOriginalImage,
    GetSharedMedia
  };
}
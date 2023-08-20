import { DOWN, TYPE_GROUP, UP } from '../utility/Constants';
import API from './API';
import { BASE_URL, HEADER } from './consts';
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
  // eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJpZCI6MTAwMCwiZXhwIjoxNjkyMTY0NDM4fQ.wbxoM2ylQRZwFGNnh8-qI3XLya9z4bgDxlNkHQsSJHM\""
  // profileData

  async function GetChat(receiverID, params) {
    console.log();
    const param = {
      message_id: params
    };
    try {
      const res = await API().GET(receiverID, param, AutorizeHeader);
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
    const body = { limit };
    try {
      const res = await API().GET('/', body, AutorizeHeader);
      return res;
    } catch (err) {
      console.error(err);
    }
  }
  async function SearchAll(text) {
    const body = { search_entry: text };

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
  async function sendText(endpoint, text, styles, replymsg) {
    const body = { text, text_style: styles, reply_message: replymsg };
    console.log(body);
    try {
      const res = await API().POST(`${endpoint}`, body, AutorizeHeader);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
  async function GetMessagesUp(endpoint) {
    const params = { direction: UP };
    try {
      const res = await API().GET(`${endpoint}`, params, AutorizeHeader);
      return res;
    } catch (err) {
      console.log(err);
    }
  }

  async function GetMessagesDown(endpoint) {
    const params = { direction: DOWN };
    try {
      const res = await API().GET(`${endpoint}`, params, AutorizeHeader);
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
  async function EditMessage(messageId, text) {
    const body = {
      text: text
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
    console.log(body)
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
      type: type,
      members: members,
      name: name
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
  async function pinChat(chatid) {
    await API()
      .PUT(`pin-chat/${chatid}`, {}, AutorizeHeader)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return {
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
    UpdateProfile
  };
}

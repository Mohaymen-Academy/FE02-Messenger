import API from './API';
import { BASE_URL, HEADER } from './consts';
// import { useSelector } from 'react-redux';

export default function Requests(body) {
  console.log();
  const AutorizeHeader = { ...HEADER, Authorization: `${localStorage.getItem('token')}` };
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
      console.log('Sending request to sign up...');
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
      console.log('Sending request to login...');
      const res = await API().POST('access/login', body, HEADER);
      localStorage.setItem('token', res.data.jwt);
      // redirect('/');
      return res;
    } catch (err) {
      console.log(err);
    }
  }
  // eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJpZCI6MTAwMCwiZXhwIjoxNjkyMTY0NDM4fQ.wbxoM2ylQRZwFGNnh8-qI3XLya9z4bgDxlNkHQsSJHM\""
  // profileData

  async function GetChat(receiverID) {
    console.log('Get chat messeages');
    // const newHeader = { ...HEADER, Authorization: `${localStorage.getItem('token')}` };

    console.log(receiverID);
    try {
      const res = await API().GET(receiverID, {}, AutorizeHeader);
      // redirect('/');
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
    try {
      await API()
        .POST(`seen/${MsgID}`, {}, AutorizeHeader)
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (err) {
      console.log(err);
    }
  }
  async function sendText(endpoint, text) {
    const body = { text };
    console.log('hello');
    console.log(endpoint);
    console.log(text);
    try {
      const res = await API().POST(`/${endpoint}`, body, AutorizeHeader);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
  return {
    checkDuplicateEmail,
    Register,
    Login,
    GetChatList,
    GetChat,
    SearchAll,
    UpdateSeen,
    sendText
  };
}

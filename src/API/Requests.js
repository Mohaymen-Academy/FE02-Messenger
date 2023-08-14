import axios from 'axios';
import API from './API';
import { BASE_URL } from './consts';

export default function Requests(body) {
  // Register
  // check Duplicate Email - GET
  async function checkDuplicateEmail(email) {
    try {
      console.log('Sending request to check duplicate email...');

      const requestData = {
        email // Use the email value from state
      };

      const res = await API().GET('access/signup', requestData);
      console.log(res);
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
      const res = await API().POST('access/signup', body);
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
      const res = await API().POST('access/login', body);
      // redirect('/');
      return res;
    } catch (err) {
      console.log(err);
    }
  }
  async function GetChat(body, receiverID) {
    console.log('Get chat messeages');
    try {
      const res = await API().GET(receiverID, body);
      // .then((res) => res.json())
      // .then((data) => data)
      // .catch((err) => err);

      // redirect('/');
      return res;
    } catch (err) {
      console.log(err);
    }
  }
  async function GetChatList(body) {
    try {
      const res =
        // await API().GET('chats', body);
        axios.get('http://localhost:3000/pages');
    } catch (err) {
      console.error(err);
    }
  }
  return {
    checkDuplicateEmail,
    Register,
    Login,
    GetChatList,
    GetChat
  };
}

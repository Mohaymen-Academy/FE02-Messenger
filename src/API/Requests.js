import axios from 'axios';
import API from './API';
import { BASE_URL, HEADER } from './consts';
import { useDispatch, useSelector } from 'react-redux';


export default function Requests(body) {
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
  async function GetChat(body, receiverID) {
    console.log('Get chat messeages');
    try {
      const res = await API().GET(receiverID, body, AutorizeHeader);
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
    const body = { search_entry : text };
    const newHeader = {...HEADER , 'Authorization': `${localStorage.getItem('token')}` };
    try {
      const res = await API().GET('search/', body, newHeader);
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  return {
    checkDuplicateEmail,
    Register,
    Login,
    GetChatList,
    GetChat,
    SearchAll
  };
}

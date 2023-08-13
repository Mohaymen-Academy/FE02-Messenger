import axios from 'axios';
import API from './API';

export default function Requests(body) {
  // Register
  // check Duplicate Email - GET
  async function checkDuplicateEmail(email) {
    try {
      console.log('Sending request to check duplicate email...');

      const requestData = {
        email // Use the email value from state
      };

      const res = await API().GET('http://192.168.70.223:8080/access/signup', requestData);
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
      const res = await API().POST('http://192.168.70.223:8080/access/signup', body);
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
      const res = await API().POST('http://192.168.70.223:8080/access/login', body);
      return res;
    } catch (err) {
      console.log(err);
    }
  }

  return {
    checkDuplicateEmail,
    Register,
    Login
  };
}

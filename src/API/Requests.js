import API from './API';
import axios from 'axios';

export default function Requests(body) {
  // Register
  // check Duplicate Email - GET
  async function checkDuplicateEmail(email) {
    try {
      console.log('Sending request to check duplicate email...');

      const requestData = {
        email: email // Use the email value from state
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
  async function Register(name, email, password) {
    try {
      const body = {
        name: name,
        email: email,
        password: password
      };
      console.log('Sending request to sign up...');
      const res = await API().POST('http://192.168.70.223:8080/access/signup', body);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
  return {
    checkDuplicateEmail,
    Register
  };
}

import React, { useState, useEffect } from 'react';
import { getTheme } from '../utility/useLoclStorage';
import axios from 'axios';
import CheckBoxData from '../utility/CheckBoxData';

export default function Register() {
  useEffect(() => {
    console.log('skldjf');
    const div = document.getElementById('zarp');
    div.dataset.theme = getTheme() ? getTheme() : 'light';
    // console.log(div.dataset.theme)
  }, []);

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmailFormat = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  async function handleRegisterClick (event) {
    event.preventDefault();
    // Check for empty fields
    if (!values.username || !values.email || !values.password || !values.password_confirmation) {
      alert('لطفاً همه فیلدها را پر کنید.');
      return;
    }
    if (!validateEmailFormat(values.email)) {
      setEmailError('فرمت ایمیل وارد شده صحیح نیست.');
    } else if (values.password !== values.password_confirmation) {
      setPasswordError('رمز عبور و تایید رمز عبور باید یکسان باشند.');
    } else {
      try{
        const res = await axios.post(`http://192.168.70.223:8080/access/signup`,{
          name : values.username,
          email : values.email,
          password : values.password
        }
        ,
        {
          headers: {
            'Content-Type': 'application/json' ,// Set content type to JSON
            'Access-Control-Allow-Origin': '*',

          }
        });
        console.log(res);
      }
      catch(err){
        console.log(err);
      }
      
      
    }
  };
  async function CheckDuplicateEmail(email) {
    console.log("vhgvbv")
    if (!validateEmailFormat(values.email)) {
      setEmailError('فرمت ایمیل وارد شده صحیح نیست.');
    }
    else {
      try {
        console.log("Sending request to check duplicate email...");
  
        const requestData = {
          email: values.email // Use the email value from state
        };
        
        const res = await axios.get(
          `http://192.168.70.223:8080/access/signup`,
          
          {
            params: requestData,
            headers: {
              'Content-Type': 'application/json' ,// Set content type to JSON
              'Access-Control-Allow-Origin': '*',
            }
          }
        );
  
        console.log(res);
  
        if (res.data.status === 'fail') {
          setEmailError('ایمیل وارد شده تکراری است.');
        }
      } catch (err) {
        console.log(err);
      }
     
    }
  }
  const changeinput = (name, value) => {
    setValues({
      ...values,
      [name]: value
    });
  };
  return (
    <div dir="rtl" className="bg-complete">
      <div className="main-div">
        <div className="flex flex-col justify-center items-center">
          <a href="/">
            <img width={100} src="images/logo.png" />
          </a>
          <div className="mb-5 text-text1 text-[20px]">ثبت نام</div>
        </div>
        <div className="w-full px-6 py-4  overflow-hidden bg-color1 shadow-md  border rounded sm:max-w-lg sm:rounded-lg">
          <form>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text1 undefined mt-3">
                نام کاربری
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="useername"
                  className="input-div"
                  onChange={(e) => {
                    changeinput('username', e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-sm font-medium text-text1 undefined">
                ایمیل
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className="input-div"
                  onBlur={CheckDuplicateEmail}
                  onChange={(e) => {
                    changeinput('email', e.target.value);
                    setEmailError(''); // Clear the email error on input change
                  }}
                />
                {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="block text-sm font-medium text-text1 undefined">
                رمز عبور
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  className="input-div"
                  onChange={(e) => {
                    changeinput('password', e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-text1 undefined">
                تایید رمز عبور
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  className="input-div"
                  onChange={(e) => changeinput('password_confirmation', e.target.value)}
                />
                {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}
              </div>
            </div>
            <a href="#" className="text-xs text-[#1e7889] hover:underline">
              رمز عبور خود را فراموش کرده اید؟
            </a>
            <div className="flex items-center mt-4">
              <button
                onClick={handleRegisterClick}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#1e7889] rounded-md hover:bg-[#7fc2cf] focus:outline-none focus:bg-[#135461]">
                ثبت نام
              </button>
            </div>
          </form>
          <div className="mt-4 text-text1">
            قبلا اکانت داشته اید؟{' '}
            <span>
              <a className="text-[#1e7889] hover:underline" href="/Login">
                وارد شوید
              </a>
            </span>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 text-text1">یا</p>
            <hr className="w-full" />
          </div>
          <div className="my-6 space-y-2">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current mx-5 text-text1">
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p className="text-text1">ورود با حساب گوگل</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

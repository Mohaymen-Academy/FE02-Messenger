import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getTheme } from '../utility/useLoclStorage';
import CheckBoxData from '../utility/CheckBoxData';
import Requests from '../API/Requests';
import { registerUserProfile } from '../features/profileSlice';

export default function Register() {
  const dispatch = useDispatch();
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
  const requesHnalder = Requests();
  const validateEmailFormat = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  async function handleRegisterClick(event) {
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
      console.log(values);
      try {
        // const res = await requesHnalder.Register(values.username, values.email, values.password);
        dispatch(
          registerUserProfile({
            name: values.username,
            email: values.email,
            password: values.password
          })
        );
      } catch (err) {
        console.log(err);
      }
    }
  }
  async function CheckDuplicateEmail(email) {
    console.log('vhgvbv');
    if (!validateEmailFormat(values.email)) {
      setEmailError('فرمت ایمیل وارد شده صحیح نیست.');
    } else {
      console.log(Requests());
      const res = await Requests().checkDuplicateEmail(values.email);
      console.log(res);
      if (!res) {
        setEmailError('ایمیل وارد شده تکراری است.');
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
        <div className="flex flex-col items-center justify-center">
          <a href="/">
            <img width={100} src="images/logo.png" />
          </a>
          <div className="mb-5 text-[20px] text-text1">ثبت نام</div>
        </div>
        <div className="sm:max-w-lg sm:rounded-lg w-full  overflow-hidden rounded border  bg-color1 px-6 py-4 shadow-md">
          <form>
            <div>
              <label htmlFor="name" className="undefined mt-3 block text-sm font-medium text-text1">
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
              <label htmlFor="email" className="undefined block text-sm font-medium text-text1">
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
                {emailError && <p className="text-xs text-red-500">{emailError}</p>}
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="undefined block text-sm font-medium text-text1">
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
                className="undefined block text-sm font-medium text-text1">
                تایید رمز عبور
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  className="input-div"
                  onChange={(e) => changeinput('password_confirmation', e.target.value)}
                />
                {passwordError && <p className="text-xs text-red-500">{passwordError}</p>}
              </div>
            </div>
            <a href="#" className="text-xs text-[#1e7889] hover:underline">
              رمز عبور خود را فراموش کرده اید؟
            </a>
            <div className="mt-4 flex items-center">
              <button
                onClick={handleRegisterClick}
                className="w-full rounded-md bg-[#1e7889] px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-[#7fc2cf] focus:bg-[#135461] focus:outline-none">
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
          <div className="my-4 flex w-full items-center">
            <hr className="w-full" />
            <p className="px-3 text-text1">یا</p>
            <hr className="w-full" />
          </div>
          <div className="my-6 space-y-2">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex w-full items-center justify-center space-x-4 rounded-md border p-2 focus:ring-2 focus:ring-violet-400 focus:ring-offset-1 dark:border-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="mx-5 h-5 w-5 fill-current text-text1">
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

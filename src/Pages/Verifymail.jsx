import React, { useRef } from 'react';
import Requests from '../API/Requests';
import { useDispatch, useSelector } from 'react-redux';
import { verifyemail } from '../features/profileSlice';

export default function Verifymail() {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const signupInfo = useSelector((state) => state.profile.signupdata);
  console.error(signupInfo);
  async function handleRegister() {
    // console.error(ref.);
    console.error(signupInfo.signupdata);
    try {
      dispatch(verifyemail({ ...signupInfo, code: ref.current.value }));
      window.location.href = '/login';
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div
      dir="rtl"
      className="text-text1 bg-complete bg-background bg-opacity-90 bg-url[images/pattern.png] bg-cover bg-center"
      style={{
        backgroundImage: 'url(images/pattern.png)',
        backgroundBlendMode: 'soft-light',
        backgroundRepeat: 'repeat',
        backgroundSize: '600px'
      }}>
      <div
        className="main-div
      m-auto relative
      ">
        <div className="flex flex-col my-5 items-center justify-center">
          <a href="/">
            <img width={150} src="images/rasa.png" />
          </a>
        </div>
        <div className="">
          <div class="flex min-h-[100%] flex-col items-center overflow-hidden bg-color2">
            <div class="max-w-xl px-5 text-center">
              <h2 class="mb-2 py-12 text-[42px] text-text1 font-bold ">ایمیل خود را چک کنید</h2>
              <p class="text-text1 mb-2 text-lg ">
                برای اتمام ثبت نام نیاز است که ایمیل خود را تایید کنید کدی 4 رقمی به ایمیل شما
                فرستاده شده است آن را تایید کنید
              </p>
              <div className="flex flex-col gap-2 mb-5">
                <input
                  ref={ref}
                  type="text"
                  class=" text-sm rounded-lg bg-color1 block w-full p-2.5"
                  placeholder="کد تاییدیه"
                />
                <button
                  onClick={() => handleRegister()}
                  aria-label="Login with Google"
                  type="button"
                  className="flex w-[30%] m-auto hover:bg-green-600 
                  hover:border-none  
                  items-center 
                  justify-center 
                  space-x-4
                  rounded-md 
                  border p-2">
                  تایید
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

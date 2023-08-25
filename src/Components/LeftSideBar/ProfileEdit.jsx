import React, { useEffect, useRef } from 'react';
import { UilArrowRight, UilCameraPlus, UilTrashAlt } from '@iconscout/react-unicons';
// import {Check}
import CheckBoxParag from '../../ui/CheckBoxParag';
import Requests from '../../API/Requests';
import { Avatar } from '../ChatComps';
import { useDispatch } from 'react-redux';
import { GetContacts } from '../../features/chatCardPreviewSlice';

export default function ProfileEdit({ setlayout, selectedProfile, chatid }) {
  const name = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (name) {
      name.current.value = selectedProfile.profileName;
    }
  });
  async function handleEdit() {
    await Requests().EditContact(selectedProfile.profileID, name.current.value);
    dispatch(GetContacts());
  }
  return (
    <div
      className={
        'flex h-screen flex-col border-r  border-bghovor bg-color2  shadow-md transition-all duration-100 ease-in'
      }>
      <div className="flex h-[70px] w-fit flex-row place-items-center">
        <button
          onClick={(e) => {
            console.log(setlayout);
            setlayout(0);
          }}>
          <UilArrowRight className="h-8 w-8 cursor-pointer text-text1" />
        </button>
        <div className="cardP p-1">ویرایش</div>
      </div>
      <div className="flex w-[100%]  flex-col items-center justify-start gap-3 p-5">
        <Avatar
          size={200}
          image={selectedProfile.lastProfilePicture?.preLoadingContent}
          imagecolor={selectedProfile.defaultProfileColor}
          char={selectedProfile.profileName[0].toUpperCase()}
        />

        <div className="flex w-full flex-col gap-3 ">
          <div className="relative w-full">
            <input
              ref={name}
              type="text"
              id="floating_outlined"
              className="peer block w-full appearance-none rounded-lg border-2 border-blue-500  bg-color2 px-2.5  pb-2.5 pt-4  text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label className="absolute right-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-color2 text-sm text-gray-500 duration-300   peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
              نام (الزامی)
            </label>
          </div>
          {/* <div className="relative w-full">
            <input
              type="text"
              id="floating_outlined"
              className="peer block w-full appearance-none rounded-lg border-2 border-blue-500  bg-color2 px-2.5  pb-2.5 pt-4  text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute right-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-color2 text-sm text-gray-500 duration-300   peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
              نام خانوادگی (اختیاری)
            </label>
          </div> */}
          <button
            onClick={handleEdit}
            className="border-[1px] border-color1 p-3 rounded-lg hover:bg-blue-600 hover:border-none">
            تایید
          </button>

          <div className="flex h-0.5 w-full bg-bghovor"></div>
          <button
            onClick={() => {
              Requests().DeleteContact(selectedProfile.profileID);
              dispatch(deletecontact());
              setlayout(0);
            }}>
            <div className="flex flex-row place-items-center p-3 bg-color2 text-red-600 hover:opacity-75">
              <UilTrashAlt className="ml-2 h-8 w-8" />
              <p>حذف مخاطب</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

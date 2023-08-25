import React, { useEffect, useState } from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import Requests from '../../API/Requests';
import { useDispatch, useSelector } from 'react-redux';
import { GetPin, composerActions } from '../../features/composerSlice';
import GoHnalder from '../../utility/GoTomessage';
import ShowEmoji from '../../ui/ShowEmoji';
export default function Pin({ chatid, messages, bodyref, chattype }) {
  // console.log('zarewr')
  const dispatch = useDispatch();
  const pinmessage = useSelector((state) => state.composer.pinmessage);
  useEffect(() => {
    // console.log('hello')
    dispatch(GetPin({ chatid: chatid }));
  }, []);

  // useEffect(() => {

  // });

  // self.__WB_DISABLE_DEV_LOGS = true;
  console.error(pinmessage);
  return (
    <>
      {pinmessage ? (
        <div className=" absolute z-10 w-full pr-3 py-3 bg-color1 flex flex-row items-center">
          <div
            onClick={() => {
              GoHnalder().GoTo(messages, pinmessage.messageID, bodyref, dispatch, chatid, chattype);
            }}
            className=" w-[95%] rounded-lg h-fit cursor-pointer hover:bg-color2 ">
            <div className=" pr-2 border-r-2  border-color3">
              <p className="text-color3 font-iRANSans text-sm">پیام سنجاق شده</p>
              <div className="text-text1">
                <ShowEmoji text={pinmessage.text} textwithemoji={pinmessage.messagePreview} />
              </div>
            </div>
          </div>
          <div>
            <button
              className="rounded-full hover:bg-color2"
              onClick={() => {
                Requests().UnpinMessage(pinmessage.messageID);
                dispatch(composerActions.clearpin());
              }}>
              <UilTimes className="text-text1" />
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

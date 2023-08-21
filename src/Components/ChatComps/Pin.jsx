import React, { useEffect, useState } from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import Requests from '../../API/Requests';
import { useDispatch, useSelector } from 'react-redux';
import { GetPin, composerActions } from '../../features/composerSlice';
export default function Pin({ chatid }) {
  const dispatch = useDispatch();
  const pinmessage = useSelector((state) => state.composer.pinmessage);
  useEffect(() => {
    dispatch(GetPin({ chatid: chatid }));
  }, []);
  // self.__WB_DISABLE_DEV_LOGS = true;
  return (
    <>
      {pinmessage ? (
        <div className=" w-full pr-3 py-3 bg-color1 flex flex-row items-center">
          <div className=" w-[95%] rounded-lg h-fit cursor-pointer hover:bg-color2 ">
            <div className=" pr-2 border-r-2  border-color3">
              <p className="text-color3 font-iRANSans text-sm">پیام سنجاق شده</p>
              <div className="text-text1">
                {/* Message */}
                {pinmessage.text}
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
              <UilTimes />
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

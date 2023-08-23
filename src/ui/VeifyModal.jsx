import React from 'react';
import PopUp from './PopUp';

export default function VerifyModal({ title, describe, dispatch, setmodal }) {
  return (
    <div className=" fixed inset-0 z-20  text-text1 mx-auto my-4  w-[300px] flex items-center justify-center ">
      <div
        className="modal bg-color2 rounded-xl shadow-md p-4 w-[450px] h-fit relative "
        role="dialog">
        <div className="relative flex flex-col px-4 py-3 left-0 h-[94%]  w-[100%] ">
          <div>
            <h3>{title}</h3>
            <p>{describe}</p>
            <div className="flex flex-row justify-between">
              <button className="text-green-300" onClick={dispatch}>
                تایید
              </button>
              <button className="text-red-500" onClick={() => setmodal(false)}>
                لغو
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ChatFooter() {
  return (
    <div dir='rtl' className="flex flex-row justify-between  bg-color2  w-full  h-[6%] p-2">
        <div>hi</div>
        <div>hi</div>
        <input
                  type="text"
                  name="useername"
                  className="input-text-div"
                  placeholder='پیام خود را وارد کنید'
                //   onChange={(e) => {
                //     changeinput('username', e.target.value);
                //   }}
                />
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>     
      </div>
    </div>
  )
}

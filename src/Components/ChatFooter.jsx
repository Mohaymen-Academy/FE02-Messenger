import React from 'react'

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
            <img className='text-text1' src="images/call.png"/>
        </div>
    </div>
  )
}

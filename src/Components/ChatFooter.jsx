import React from 'react'

export default function ChatFooter() {
  return (
    <div dir='rtl' className="flex flex-row justify-between fixed bg-color2  bottom-0 w-full max-w-[calc(100%-356px)] h-[6%] p-2">
        <div>hi</div>
        <div>hi</div>
        <input
                  type="text"
                  name="useername"
                  className="input-text-div"
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

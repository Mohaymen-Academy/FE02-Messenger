import React, { useEffect } from 'react';
import { UilSmile, UilMessage, UilPaperclip } from '@iconscout/react-unicons';
import EmojiPicker from 'emoji-picker-react';

export default function ChatFooter() {
  const [text, setText] = React.useState('');
  const [openEmoji, setOpenEmoji] = React.useState(false);
  const [openAttach, setOpenAttach] = React.useState(false);

  return (
    <div
      dir="rtl"
      className="flex flex-row justify-between items-center bg-color2  w-[90%] p-2  m-auto rounded-xl">
      <button className="text-text1 w-8 h-8 mx-1 ">
        <UilMessage />
      </button>
      <button className="text-text1 w-8 h-8 mx-1 ">
        <UilPaperclip />
      </button>
      {/* <textarea
                  type="text"
                  name="useername"
                  className="input-text-div"
                  autocomplete="off"
                  placeholder='پیام خود را وارد کنید'
                  defaultValue={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                /> */}
      <span className=" w-[90%] max-h-[50px] outline-none h-auto overflow-hidden shadow-none border-none break-all focus:shadow-none active:shadow-none" role="textbox"  contentEditable></span>
      <div>
        <button onClick={() => setOpenEmoji(!openEmoji)} className="text-text1 w-8 h-8 mx-1 ">
          <UilSmile />
        </button>
        {openEmoji && (
          <div className="z-10 absolute bottom-[60px] left-[20px]">
            <EmojiPicker
              theme={localStorage.getItem('theme')}
              onEmojiClick={(e) => setText(text + e.emoji)}
            />
          </div>
        )}
        {/* {openAttach && 

        } */}
      </div>
    </div>
  );
}

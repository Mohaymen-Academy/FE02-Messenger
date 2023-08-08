import React, { useRef } from 'react';
import { UilSmile, UilMessage, UilPaperclip } from '@iconscout/react-unicons';
import EmojiPicker from 'emoji-picker-react';

export default function ChatFooter() {
  // const [text, setText] = React.useState('');
  const [openEmoji, setOpenEmoji] = React.useState(false);
  const [openAttach, setOpenAttach] = React.useState(false);
  const textref = useRef(null);
  return (
    <div
      dir="rtl"
      className="m-auto flex w-[90%] flex-row items-center  justify-between rounded-xl  bg-color2 p-2">
      <button className="mx-1 h-8 w-8 text-text1 ">
        <UilMessage />
      </button>
      <button className="mx-1 h-8 w-8 text-text1 ">
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
      <span
        className=" h-auto max-h-[50px] w-[90%] overflow-hidden break-all border-none shadow-none outline-none focus:shadow-none active:shadow-none"
        role="textbox"
        contentEditable
        onInput={(e) => console.log()}>
        {textref.current}
      </span>
      <div>
        <button onClick={() => setOpenEmoji(!openEmoji)} className="mx-1 h-8 w-8 text-text1 ">
          <UilSmile />
        </button>
        {openEmoji && (
          <div className="absolute bottom-[60px] left-[20px] z-10">
            <EmojiPicker
              theme={localStorage.getItem('theme')}
              // onEmojiClick={(e) => setText(text + e.emoji)}
            />
          </div>
        )}
        {/* {openAttach &&

        } */}
      </div>
    </div>
  );
}

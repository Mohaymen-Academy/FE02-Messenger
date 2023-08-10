import React, { useEffect, useRef, useState } from 'react';
import { UilSmile, UilMessage, UilPaperclip } from '@iconscout/react-unicons';
import EmojiPicker from 'emoji-picker-react';
import Text from '../../utility/Text';
import TextProcessorMenu from '../../utility/TextProcessorMenu';
import TextProcessor from '../../utility/TextProcessor';

export default function ChatFooter() {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [openAttach, setOpenAttach] = useState(false);
  const [openTextProcessor, serOpenTextProcessor] = useState(false);
  const emoji = useState('');
  const textref = useRef({
    textcontent: 0,
    containerslsit: []
  });
  const divref = useRef(null);
  function closeTextProcessor() {
    serOpenTextProcessor(false);
  }

  useEffect(() => {
    function handleDocumentClick(event) {
      const clickedElement = event.target;
      if (divref.current && !divref.current.contains(clickedElement)) {
        closeTextProcessor();
      }
    }
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const [mousepositoin, setmousepositoin] = useState({ x: 0, y: 0 });
  let y_mouse = useRef(0);
  let x_mouse = useRef(0);

  return (
    <div
      dir="rtl"
      className="flex flex-row justify-between items-center bg-color2 text-color4  w-[100%] p-2  m-auto rounded-xl">
      <button className="text-text1 w-8 h-8 mx-1 ">
        <UilMessage />
      </button>
      <button className="mx-1 h-8 w-8 text-text1 ">
        <UilPaperclip />
      </button>
      {/* <input type="text" dir='auto' /> */}
      <div
        dir="auto"
        onKeyDown={handleKeyDown}
        onSelectCapture={handleSelect}
        onClick={handleclick}
        // style={{ direction: 'auto' }}
        ref={divref}
        onInput={handleonInput}
        contentEditable
        // onChange={(e) => console.log()}
        className=" w-[90%] max-h-[50px] flex outline-none h-auto overflow-hidden shadow-none border-none break-all focus:shadow-none active:shadow-none">
        <Text lower={0} upper={2} content={'012'} />
        <Text lower={3} upper={8} content={'345678'} />
        <Text lower={9} upper={10} content={'91'} />
      </div>
      <div>
        <button onClick={() => setOpenEmoji(!openEmoji)} className="mx-1 h-8 w-8 text-text1 ">
          <UilSmile />
        </button>
        {openEmoji && (
          <div className="absolute bottom-[60px] left-[20px] z-10">
            <EmojiPicker theme={localStorage.getItem('theme')} onEmojiClick={handleEmojiPicker} />
          </div>
        )}
        {openTextProcessor && <TextProcessorMenu />}
        {/* {openAttach &&

        } */}
      </div>
    </div>
  );
}

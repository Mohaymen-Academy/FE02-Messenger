import React, { useEffect, useRef, useState } from 'react';
import { UilSmile, UilMessage, UilPaperclip } from '@iconscout/react-unicons';
// import EmojiPicker from 'emoji-picker-react';
import EmojiPicker from '../../utility/EmojiPicker';
import Text from '../../utility/Text';
import TextProcessorMenu from '../../utility/TextProcessorMenu';
import TextProcessor from '../../utility/TextProcessor';
import FileUploader from '../../utility/FileUploader';

export default function ChatFooter() {
  const [
    handleEmojiPicker,
    handleKeyDown,
    handleSelect,
    handleonInput,
    handleclick,
    openTextProcessor,
    divref,
    setOpenTextProcessor,
    entitycontainers,
    setentitycontainers,
    ChangeEntities
  ] = TextProcessor([
    // { id: 1, lower: 0, upper: 2, content: '012', style: ['bold', 'strike'] },
    // { id: 2, lower: 3, upper: 8, content: '345678', style: ['strike'] },
    // { id: 3, lower: 9, upper: 10, content: '91', style: ['italic ', 'spoiler'] }
  ]);
  const [openEmoji, setOpenEmoji] = useState(false);
  const [openAttach, setOpenAttach] = useState(false);
  const emoji = useState('');
  
  function closeTextProcessor() {
    setOpenTextProcessor(false);
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

  return (
    <div
      dir="rtl"
      className={`flex flex-col vsmmobile:relative transition-all duration-100 ease-in top-[50px] gap-3 ${
        openEmoji ? 'top-[-130px]' : ''
      }`}>
      <div className="flex flex-row  justify-between items-center bg-color2 text-color4  w-[100%] p-2  m-auto rounded-xl">
        <button className="text-text1 w-8 h-8 mx-1 ">
          <UilMessage />
        </button>
        {/* </UilPaperclip> */}
        <FileUploader />
        {/* <input type="text" dir='auto' /> */}
        <div
          ref={divref}
          dir="auto"
          contentEditable
          onClick={handleclick}
          onSelectCapture={handleSelect}
          onInput={handleonInput}
          suppressContentEditableWarning={true}
          className=" w-[90%] max-h-[50px] flex flex-row outline-none h-auto overflow-hidden shadow-none border-none break-all focus:shadow-none active:shadow-none">
        </div>
        <div>
          <button onClick={() => setOpenEmoji(!openEmoji)} className="mx-1 h-8 w-8 text-text1 ">
            <UilSmile />
          </button>
          {openTextProcessor && <TextProcessorMenu ChangeEntities={ChangeEntities} />}
          {/* {openAttach &&

} */}
        </div>
      </div>
      {openEmoji && (
        <>
          <EmojiPicker />
          {/* <EmojiPicker theme={localStorage.getItem('theme')} onEmojiClick={handleEmojiPicker} /> */}
        </>
      )}
    </div>
  );
}

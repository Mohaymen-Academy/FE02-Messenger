import React, { useEffect, useRef, useState } from 'react';
import { UilSmile, UilMessage, UilPaperclip } from '@iconscout/react-unicons';
// import EmojiPicker from 'emoji-picker-react';
import EmojiPicker from '../../utility/EmojiPicker';
import Text from '../../utility/Text';
import TextProcessorMenu from '../../utility/TextProcessorMenu';
import TextProcessor from '../../utility/TextProcessor';
import FileUploader from '../../utility/FileUploader';
import PopUp from '../../utility/PopUp';
import Poll from './Poll';
import Requests from '../../API/Requests';

export default function ChatFooter({ id }) {
  const [openPoll, setopenPoll] = useState(false);
  const {
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
    ChangeEntities,
    openemoji,
    setopenemoji
  } = TextProcessor([
    // { id: 1, lower: 0, upper: 2, content: '012', style: ['bold', 'strike'] },
    // { id: 2, lower: 3, upper: 8, content: '345678', style: ['strike'] },
    // { id: 3, lower: 9, upper: 10, content: '91', style: ['italic ', 'spoiler'] }
  ]);
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
      className={`top-[50px] flex flex-col gap-3 transition-all duration-100 ease-in vsmmobile:relative ${
        openemoji ? 'top-[-130px]' : ''
      }`}>
      <div className="m-auto flex  w-[100%] flex-row items-center justify-between  rounded-xl bg-color2  p-2 text-color4">
        <button
          className="mx-1 h-8 w-8 text-text1 "
          onClick={() => Requests().sendText(id, divref.current)}>
          <UilMessage />
        </button>
        {/* </UilPaperclip> */}
        <FileUploader setopenPoll={setopenPoll} />
        {/* <input type="text" dir='auto' /> */}
        <div
          ref={divref}
          dir="auto"
          contentEditable
          onClick={handleclick}
          onSelectCapture={handleSelect}
          onInput={handleonInput}
          suppressContentEditableWarning={true}
          className=" flex h-auto max-h-[50px] w-[90%] flex-row overflow-hidden break-all border-none shadow-none outline-none focus:shadow-none active:shadow-none"></div>
        <div>
          <button onClick={() => setopenemoji(!openemoji)} className="mx-1 h-8 w-8 text-text1 ">
            <UilSmile />
          </button>
          {openTextProcessor && <TextProcessorMenu ChangeEntities={ChangeEntities} />}
          {/* {openAttach &&

} */}
        </div>
      </div>
      {openemoji && (
        <>
          <EmojiPicker handler={handleEmojiPicker} openemoji={openemoji} />
          {/* <EmojiPicker theme={localStorage.getItem('theme')} onEmojiClick={handleEmojiPicker} /> */}
        </>
      )}
      {openPoll && (
        <PopUp title="ایجاد نظرسنجی" setIsModalOpen={setopenPoll}>
          <Poll />
        </PopUp>
      )}
    </div>
  );
}

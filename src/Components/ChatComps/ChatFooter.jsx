import React, { useEffect, useRef, useState } from 'react';
import { UilSmile, UilMessage, UilPaperclip, UilTimes } from '@iconscout/react-unicons';
// import EmojiPicker from 'emoji-picker-react';
import { useDispatch, useSelector } from 'react-redux';
import EmojiPicker from '../../utility/EmojiPicker';
import Text from '../../utility/Text';
import TextProcessorMenu from '../../utility/TextProcessorMenu';
import TextProcessor from '../../utility/TextProcessor';
import FileUploader from '../../utility/FileUploader';
import Requests from '../../API/Requests';
import { composerActions } from '../../features/composerSlice';
import { editmsg } from '../../features/SelectedInfo';
import PopUp from '../../utility/PopUp';
import Poll from './Poll';
import UploadFile from '../../utility/UploadFile';

export default function ChatFooter({ id, chattype }) {
  const {
    handleEmojiPicker,
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
    setopenemoji,
    handleKeyLeftRight,
    ProcessorValues
  } = TextProcessor([]);
  const Isactive = useSelector((state) => state.composer);
  const [openAttach, setOpenAttach] = useState(false);
  const [openPoll, setopenPoll] = useState(false);
  const [fileuploaded, setfileuploaded] = useState(false);

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
    // if (divref.current) {
    //   // console.log('wer');
    //   // divref.current.innerText = Isactive.composerValue;
    // }
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);
  const dispatch = useDispatch();
  const [mousepositoin, setmousepositoin] = useState({ x: 0, y: 0 });
  const needActoin = Isactive.isEditting || Isactive.isReplying || Isactive.isForwarding;

  async function SelectRequestType() {
    if (Isactive.isEditting) {
      console.log(Isactive.editID);
      // dispatch(editmsg({ msgId: Isactive.editID, newtext: divref.current.innerText }));
      // await Requests().EditMessage(Isactive.editID, divref.current.innerText);
    } else {
      if (Isactive.isReplying) {
      } else {
        console.log(divref.current.innerText);
        console.log(ProcessorValues.current.rawtext);
        console.log(ProcessorValues.current.sorted);
        Requests().sendText(id, ProcessorValues.current.rawtext, ProcessorValues.current.sorted);
      }
    }
    // ProcessorValues.current.rawtext = '';
    // divref.current.innerText = '';
    // setentitycontainers([]);
    dispatch(composerActions.clear());
  }
  return (
    <div className=" flex flex-col sticky bottom-0">
      {needActoin ? (
        <div className="flex h-[30px] w-[100%] flex-row= bg-color2 pr-2 pt-1">
          <button onClick={() => dispatch(composerActions.clear())}>
            <UilTimes className={'text-color3'} />
          </button>
          <div className=" line-clamp-1 w-[30%] border-r-2 border-color3 pr-2 text-text1">
            {Isactive.composerValue}
          </div>
        </div>
      ) : (
        <></>
      )}
      <div
        dir="rtl"
        className={`
          flex flex-col gap-3 transition-all duration-100 ease-in vsmmobile:relative ${
            openemoji ? 'top-[130px]' : ''
          }`}>
        <div
          className={` flex  w-[100%] flex-row items-center justify-between sticky bottom-0
          ${needActoin ? '' : ''} bg-color2  p-2 text-color4`}>
          <button className="mx-1 h-8 w-8 text-text1 " onClick={SelectRequestType}>
            <UilMessage />
          </button>
          {/* </UilPaperclip> */}
          <FileUploader  openpull={setopenPoll} openfile={setfileuploaded} chattype={chattype} />
          {/* <input type="text" dir='auto' /> */}
          <div
            ref={divref}
            dir="auto"
            contentEditable
            onKeyDown={handleKeyLeftRight}
            onClick={handleclick}
            onSelectCapture={handleSelect}
            onInput={handleonInput}
            suppressContentEditableWarning={true}
            className=" flex h-auto max-h-[50px] w-[90%] flex-row overflow-hidden 
            whitespace-pre-wrap
            break-all border-none shadow-none outline-none focus:shadow-none active:shadow-none">
            {Isactive.editvalue ? Isactive.editvalue : ''}
          </div>
          <div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setopenemoji(!openemoji);
              }}
              className="mx-1 h-8 w-8 text-text1 ">
              <UilSmile />
            </button>
            {openTextProcessor && <TextProcessorMenu ChangeEntities={ChangeEntities} />}
            {/* {openAttach &&

} */}

            {fileuploaded && (
              <PopUp title="انتخاب عکس" setIsModalOpen={setfileuploaded}>
                <UploadFile imagebase64={fileuploaded} />
              </PopUp>
            )}
            {openPoll && (
              <PopUp title="ایجاد نظرسنجی" setIsModalOpen={setopenPoll}>
                <Poll />
              </PopUp>
            )}
          </div>
        </div>
        {openemoji && (
          <>
            <EmojiPicker handler={handleEmojiPicker} openemoji={openemoji} />
            {/* <EmojiPicker theme={localStorage.getItem('theme')} onEmojiClick={handleEmojiPicker} /> */}
          </>
        )}
      </div>
    </div>
  );
}

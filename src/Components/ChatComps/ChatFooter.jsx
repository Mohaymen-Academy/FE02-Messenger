import React, { useEffect, useRef, useState } from 'react';
import {
  UilSmile,
  UilMessage,
  UilPaperclip,
  UilTimes,
  UilMicrophone,
  UilPause
} from '@iconscout/react-unicons';
// import EmojiPicker from 'emoji-picker-react';
import { useDispatch, useSelector } from 'react-redux';
import { json } from 'react-router-dom';
import EmojiPicker from '../../ui/EmojiPicker';
import Text from '../../ui/Text';
import TextProcessorMenu from '../../ui/TextProcessorMenu';
import TextProcessor from '../../utility/TextProcessor';
import FileUploader from '../../ui/FileUploader';
import Requests from '../../API/Requests';
import { composerActions } from '../../features/composerSlice';
import { Savenewmsg, editmsg } from '../../features/SelectedInfo';
import PopUp from '../../ui/PopUp';
import Poll from './Poll';
import UploadFile from '../../ui/UploadFile';
import useRecorder from '../../hooks/useRecorder';
import VoiceControl from '../voice/VoiceControl';

export default function ChatFooter({ id, chattype, isallowed }) {
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
    ProcessorValues,
    OutputEntity
  } = TextProcessor([]);
  const Isactive = useSelector((state) => state.composer);
  const [openPoll, setopenPoll] = useState(false);
  const [fileuploaded, setfileuploaded] = useState(null);
  const { recorderState, ...handlers } = useRecorder(id);
  const emoji = useState('');
  useEffect(() => {
    if (divref.current) {
      ProcessorValues.current.sorted = [];
      ProcessorValues.current.rawtext = '';
      divref.current.innerText = '';
      // setentitycontainers([]);
    }
  }, [id]);
  console.error(divref);
  useEffect(() => {
    console.error(Isactive);
    if (divref.current) {
      ProcessorValues.current.sorted = [];
      ProcessorValues.current.rawtext = '';
      if (Isactive.isEditting) {
        ProcessorValues.current.sorted = Isactive.styles;
        ProcessorValues.current.rawtext = Isactive.editvalue;
        let ents = OutputEntity(divref, Isactive.composerValue, ProcessorValues.current.sorted);
        setentitycontainers(ents);
      }
    }
  }, [Isactive]);

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
  function handleKeyDown(event) {
    handleKeyLeftRight(event);
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevents the default Enter behavior (usually adding a new line)
      SelectRequestType(); // Call the function
    }
  }
  async function SelectRequestType() {
    // IF IS EDITING
    console.error(Isactive, ProcessorValues.current.rawtext);
    if (ProcessorValues.current.rawtext != '' || Isactive.isForwarding) {
      if (Isactive.isEditting) {
        dispatch(
          editmsg({
            msgId: Isactive.editID,
            newtext: ProcessorValues.current.rawtext,
            styles: ProcessorValues.current.sorted
          })
        );
        Requests().EditMessage(
          Isactive.editID,
          ProcessorValues.current.rawtext,
          ProcessorValues.current.sorted
        );
        ProcessorValues.current.rawtext = '';
        ProcessorValues.current.sorted = [];
        divref.current.innerText = '';
        setentitycontainers([]);
        dispatch(composerActions.clear());
      } else {
        if (Isactive.isReplying) {
          dispatch(
            Savenewmsg({
              id: id,
              rawtext: ProcessorValues.current.rawtext,
              styles: JSON.stringify(ProcessorValues.current.sorted),
              reply: Isactive.replyID,
              forward: null
            })
          );
        }
        if (Isactive.isForwarding) {
          if (ProcessorValues.current.rawtext != '') {
            dispatch(
              Savenewmsg({
                id: id,
                rawtext: ProcessorValues.current.rawtext,
                styles: JSON.stringify(ProcessorValues.current.sorted),
                reply: null,
                forward: null
              })
            );
          }

          dispatch(
            Savenewmsg({
              id: id,
              rawtext: null,
              styles: null,
              reply: null,
              forward: Isactive.forwardID
            })
          );
        }
        // !ONLY SEND A MESSAGE
        else if (!needActoin) {
          console.error('zarperwerw');
          dispatch(
            Savenewmsg({
              id: id,
              rawtext: ProcessorValues.current.rawtext,
              styles: JSON.stringify(ProcessorValues.current.sorted),
              reply: null,
              forward: null
            })
          );
        }
      }

      ProcessorValues.current.rawtext = '';
      ProcessorValues.current.sorted = [];
      divref.current.innerText = '';
      setentitycontainers([]);
      dispatch(composerActions.clear());
    }
  }

  return (
    <div className="sticky bottom-0 left-0 flex flex-col w-full">
      {needActoin ? (
        <div className="flex-row items-center flex h-[40px] w-[100%] bg-color2 pr-2 pt-1">
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
          <FileUploader
            openpull={setopenPoll}
            openfile={setfileuploaded}
            chattype={chattype}
            id={id}
          />
          {/* <input type="text" dir='auto' /> */}
          {recorderState.mediaStream ? (
            <VoiceControl handlers={handlers} recorderState={recorderState} id={id} />
          ) : (
            <div
              ref={divref}
              dir="auto"
              contentEditable
              onKeyDown={handleKeyDown} // Attach the onKeyDown event handler
              onClick={handleclick}
              onSelectCapture={handleSelect}
              onInput={handleonInput}
              suppressContentEditableWarning={true}
              className=" flex h-auto max-h-[50px] w-[90%] flex-row overflow-auto 
            whitespace-pre-wrap
            break-all border-none shadow-none outline-none focus:shadow-none active:shadow-none">
              {Isactive.editvalue ? Isactive.editvalue : ''}
            </div>
          )}
          <div className="flex">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setopenemoji(!openemoji);
              }}
              className="mx-1 h-8 w-8 text-text1 ">
              <UilSmile />
            </button>
            {recorderState.mediaStream ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const { cancelRecording } = handlers;
                  cancelRecording();
                }}
                className="mx-1 h-8 w-8 text-text1 ">
                <UilPause />
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const { startRecording } = handlers;
                  console.error(startRecording);
                  startRecording();
                }}
                className="mx-1 h-8 w-8 text-text1 ">
                <UilMicrophone />
              </button>
            )}
            {openTextProcessor && <TextProcessorMenu ChangeEntities={ChangeEntities} />}

            {fileuploaded && (
              <PopUp title="انتخاب فایل" setIsModalOpen={setfileuploaded}>
                <UploadFile id={id} fileuploaded={fileuploaded} setIsModalOpen={setfileuploaded} />
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

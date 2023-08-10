import React, { useEffect, useRef, useState } from 'react';
import { UilSmile, UilMessage, UilPaperclip } from '@iconscout/react-unicons';
import EmojiPicker from 'emoji-picker-react';
import Text from '../../utility/Text';
import TextProcessorMenu from '../../utility/TextProcessorMenu';

export default function ChatFooter() {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [openAttach, setOpenAttach] = useState(false);
  const [openTextProcessor, serOpenTextProcessor] = useState(false);
  const emoji = useState('');
  const textref = useRef({
    textcontent: 0,

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

  function handleonInput(e) {
    e.stopPropagation();
    // console.log('zarp')
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const clonedRange = range.cloneRange();
    clonedRange.selectNodeContents(divref.current);
    clonedRange.setEnd(range.endContainer, range.endOffset); // this set the position of the cursor
    const caretPosition = clonedRange.toString().length;
    textref.current.textcontent = caretPosition;
    console.log(clonedRange.toString())
  }

  function handleclick(e) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const clonedRange = range.cloneRange();
    clonedRange.selectNodeContents(divref.current);
    clonedRange.setEnd(range.endContainer, range.endOffset); // this set the position of the cursor
    const caretPosition = clonedRange.toString().length;
    // console.log(caretPosition);
    textref.current.textcontent = caretPosition;
  }

  function handleEmojiPicker(e) {
    const emoji = e.emoji;
    const careposition = textref.current.textcontent;
    divref.current.innerText = insertCharAtIndex(divref.current.innerText, emoji, careposition);
    setOpenEmoji(false);
  }
  function insertCharAtIndex(originalString, charToAdd, index) {
    if (index < 0 || index > originalString.length) {
      throw new Error('Index out of bounds');
    }
    if (index == originalString.length) {
      return originalString + charToAdd;
    }
    console.log(index);

    const leftPart = originalString.substring(0, index);
    const rightPart = originalString.substring(index);

    return leftPart + charToAdd + rightPart;
  }
  const [mousepositoin, setmousepositoin] = useState({ x: 0, y: 0 });
  let y_mouse = useRef(0);
  let x_mouse = useRef(0);
  function handleSelect(e) {
    serOpenTextProcessor(true);
    const selection = window.getSelection();
    const selectedText = selection.toString();

    if (selectedText.toString() != '') {
      console.log(selection);
      console.log(selection.anchorNode.parentNode.dataset);
      console.log(selection.anchorOffset, ' anchor offset');
      console.log(selection.focusNode.parentNode.dataset);
      console.log(selection.focusOffset, ' focus offset');
      e.preventDefault();
      e.stopPropagation();
      x_mouse = e.clientX;
      y_mouse = e.clientY;
      setmousepositoin({ x_mouse, y_mouse });
      const range = selection.getRangeAt(0);
      const ref = divref.current;

      const rangerect = range.getBoundingClientRect();
      const startContainer = range.startContainer;
      const startOffset = range.startOffset;
      const endContainer = range.endContainer;
      const endOffset = range.endOffset;
    }
  }
  function handleKeyDown(e) {
    console.log(e.key);
    console.log(e);
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const clonedRange = range.cloneRange();
    console.log(clonedRange);
  }
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
        <div data-lower="0" data-upper="2">
          012
        </div>
        <div data-lower="3" data-upper="8">
          345678
        </div>
        <div data-lower="9" data-upper="10">
          91
        </div>
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

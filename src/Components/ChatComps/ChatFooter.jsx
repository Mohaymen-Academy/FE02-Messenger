import React, { useEffect, useRef, useState } from 'react';
import { UilSmile, UilMessage, UilPaperclip } from '@iconscout/react-unicons';
import EmojiPicker from 'emoji-picker-react';
import Text from '../../utility/Text';
export default function ChatFooter() {
  // const [text, setText] = React.useState('');
  const [openEmoji, setOpenEmoji] = useState(false);
  const [openAttach, setOpenAttach] = useState(false);
  const emoji = useState('');
  const textref = useRef({
    textcontent: 0
  });
  const divref = useRef(null);
  function handleonInput(e) {
    e.stopPropagation();
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const clonedRange = range.cloneRange();
    clonedRange.selectNodeContents(divref.current);
    clonedRange.setEnd(range.endContainer, range.endOffset); // this set the position of the cursor
    const caretPosition = clonedRange.toString().length;
    // console.log(caretPosition);
    textref.current.textcontent = caretPosition;
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
    // console.log(careposition);
    // console.log(Array.from(divref.current.innerText).splice(2, 0, emoji).join(''));
    divref.current.innerText = insertCharAtIndex(divref.current.innerText, emoji, careposition);
    // console.log(divref.current.innerText);
    setOpenEmoji(false);
  }
  function insertCharAtIndex(originalString, charToAdd, index) {
    if (index < 0 || index > originalString.length) {
      throw new Error('Index out of bounds');
    }
    if (index == originalString.length) {
      // console.log('sdfewr');
      return originalString + charToAdd;
    }
    console.log(index);

    const leftPart = originalString.substring(0, index);
    const rightPart = originalString.substring(index);

    return leftPart + charToAdd + rightPart;
  }
  function handleSelect(e) {
    const selection=window.getSelection()
    const selectedText=selection.toString();
    console.log(selection)
    // clonedRange.selectNodeContents(divref.current);
    // clonedRange.setEnd(range.endContainer, range.endOffset); // this set the position of the cursor

    console.log(selectedText);
    if (selectedText.toString()!='') {
      const range = selection.getRangeAt(0);
      // range.deleteContents();
      const startContainer = range.startContainer;
      const startOffset = range.startOffset;
      const endContainer = range.endContainer;
      const endOffset = range.endOffset;

      console.log('Selected Text:', selectedText);
      console.log('Start Container:', startContainer);
      console.log('Start Offset:', startOffset);
      console.log('End Container:', endContainer);
      console.log('End Offset:', endOffset);
    }
  }
  return (
    <div
      dir="rtl"
      className="flex flex-row justify-between items-center bg-color2 text-color4  w-[90%] p-2  m-auto rounded-xl">
      <button className="text-text1 w-8 h-8 mx-1 ">
        <UilMessage />
      </button>
      <button className="mx-1 h-8 w-8 text-text1 ">
        <UilPaperclip />
      </button>
      {/* <input type="text" dir='auto' /> */}
      <div
        onSelectCapture={handleSelect}
        onClick={handleclick}
        // style={{ direction: 'auto' }}
        ref={divref}
        onInput={handleonInput}
        contentEditable
        // onChange={(e) => console.log()}
        className=" w-[90%] max-h-[50px] outline-none h-auto overflow-hidden shadow-none border-none break-all focus:shadow-none active:shadow-none">
        {/* <span ref={textref} dir='auto' role="textbox" contentEditable>TEXT</span> */}
      <Text/>
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
        {/* {openAttach &&

        } */}
      </div>
    </div>
  );
}

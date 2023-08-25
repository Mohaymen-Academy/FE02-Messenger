import React, { useState, useEffect, useRef } from 'react';
import {
  UilLinkAdd,
  UilMediumM,
  UilTextStrikeThrough,
  UilUnderline,
  UilItalic,
  UilBold,
  UilEyeSlash,
  UilBookMedical,
  UilCropAlt,
  UilCopyAlt,
  UilPlusCircle
} from '@iconscout/react-unicons';

const TextProcessorMenu = ({ x_pos, y_pos, positions, setPosotion, ChangeEntities , h }) => {
  const [choice, setChoice] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
  });
  const linkref = useRef(null);
  const [link, setlink] = useState(false);
  function openlink(e) {
    e.stopPropagation();
    setlink(true);
  }
  const items = [
    {
      icon: <UilLinkAdd />,
      color: 'text-text1',
      action: 'openlink'
    },
    {
      icon: <UilMediumM />,
      color: 'text-text1'
    },
    {
      icon: <UilTextStrikeThrough />,
      color: 'text-text1'
    },
    {
      icon: <UilUnderline />,
      color: 'text-text1'
    },
    {
      icon: <UilItalic />,
      color: 'text-text1'
    },
    {
      icon: <UilBold />,
      color: 'text-text1'
    },
    {
      icon: <UilEyeSlash />,
      color: 'text-text1'
    },
    {
      icon: <UilBookMedical />,
      color: 'text-text1'
    },
    {
      icon: <UilCropAlt />,
      color: 'text-text1'
    },
    {
      icon: <UilCopyAlt />,
      color: 'text-text1'
    }
  ];
  const divref = useRef(null);
  function handleOutsideClick(event) {
    if (divref.current && !divref.current.contains(event.target)) {
      // setposition({ x: 0, y: 0 });
    }
  }
  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.addEventListener('mousedown', handleOutsideClick);
  }, [positions]);

  // // console.log(choice);
  return (
    <div
      dir="ltr"
      className="flex flex-row absolute z-10 shadow-2xl bg-color1 text-color4 rounded-lg opacity-90 p-1 w-fit"
      ref={divref}
      style={{
        bottom: `${h+30}px`,
        left: '10px'
      }}>
      {!link ? (
        items.map((item, index) => {
          return (
            <button
              key={index}
              className={`flex flex-col items-center px-2 m-0.5 w-full ${
                choice[index] === 1 && 'bg-blue-600'
              } hover:bg-blue-600 hover:text-white rounded-lg`}
              onClick={(e) => (item?.action == 'openlink' ? openlink(e) : ChangeEntities(index))}>
              <div className={`flex items-center gap-2 my-1 ${item.color}`}>{item.icon}</div>
              <p className={`text-xs px-2 ${item.color}`}>{item.title}</p>
            </button>
          );
        })
      ) : (
        <div className="flex flex-row items-center gap-2 ">
          <input
            onClick={(e) => e.stopPropagation()}
            ref={linkref}
            type="text"
            className="text-text1 bg-color1 border-2 border-color4 p-1 rounded-xl"
          />
          <button onClick={(e) => ChangeEntities(0, linkref.current.value)}>
            <UilPlusCircle className={'text-text1'} />
          </button>
        </div>
      )}
    </div>
  );
};

export default TextProcessorMenu;

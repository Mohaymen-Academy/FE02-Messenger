import {
  UilTrash,
  UilCornerUpLeftAlt,
  UilPen,
  UilCopy,
  UilCornerUpRightAlt,
  UilCheckCircle
} from '@iconscout/react-unicons';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { composerActions } from '../../features/composerSlice';
const MessageMenu = ({ positions, setposition, msgId, text }) => {
  const dispatch = useDispatch();
  const divref = useRef(null);
  function handleOutsideClick(event) {
    if (divref.current && !divref.current.contains(event.target)) {
      setposition({ x_mouse: 0, y_mouse: 0 });
    }
  }
  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.addEventListener('mousedown', handleOutsideClick);
  }, [positions]);

  const [items, setitem] = useState([
    {
      icon: <UilCornerUpLeftAlt />,
      title: 'پاسخ',
      color: 'text-text1',
      action: 'reply'
    },
    {
      icon: <UilPen />,
      title: 'ویرایش',
      color: 'text-text1',
      action: 'edit'
    },
    {
      icon: <UilCopy />,
      title: 'کپی ',
      color: 'text-text1'
    },
    {
      icon: <UilCornerUpRightAlt />,
      title: 'هدایت ',
      color: 'text-text1'
    },
    {
      icon: <UilCheckCircle />,
      title: 'انتخاب ',
      color: 'text-text1'
    },
    {
      icon: <UilTrash />,
      title: 'حذف ',
      color: 'text-red-500'
    }
  ]);
  // console.log(positions);
  console.log(positions);
  return (
    <ul
      ref={divref}
      style={{ top: `${positions.y_mouse/4}`, left: `${positions.x_mouse}` }}
      className="absolute z-10 shadow-2xl w-[150px] bg-color1 text-color4 rounded-lg opacity-90">
      {items.map((item, index) => {
        return (
          <button
            key={index}
            className="flex flex-row items-center gap-2 px-5 w-full hover:bg-bghovor rounded-lg"
            onClick={(e) =>
              item.action
                ? dispatch(
                    composerActions.setaction({ type: item.action, text: text, messageID: msgId })
                  )
                : null
            }>
            <div className={`flex items-center gap-2 my-1 ${item.color}`}>{item.icon}</div>
            <p className={`text-xs px-2 ${item.color}`}>{item.title}</p>
          </button>
        );
      })}
    </ul>
  );
};

export default MessageMenu;

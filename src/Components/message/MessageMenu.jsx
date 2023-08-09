import {
  UilTrash,
  UilCornerUpLeftAlt,
  UilPen,
  UilCopy,
  UilCornerUpRightAlt,
  UilCheckCircle
} from '@iconscout/react-unicons';
import React, { useState, useEffect, useRef } from 'react';

const MessageMenu = ({ message, x_pos, y_pos, positions, setposition }) => {
  const divref = useRef(null);
  function handleOutsideClick(event) {
    if (divref.current && !divref.current.contains(event.target)) {
      setposition({ x: 0, y: 0 });
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
      color: 'text-text1'
    },
    {
      icon: <UilPen />,
      title: 'ویرایش',
      color: 'text-text1'
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
  return (
    <ul
      ref={divref}
      style={{ top: `${positions.y_pos}px`, left: `${positions.x_pos}px` }}
      className="absolute z-10 shadow-2xl w-[150px] bg-color1 text-color4 rounded-lg opacity-90">
      {items.map((item, index) => {
        return (
          <button
          key={index}
            className="flex flex-row items-center gap-2 px-5 my-1 w-full hover:bg-gray-200 rounded-lg"
            // onClick={(e) => setsection(menuId)}
          >
            <div className={`flex items-center gap-2 my-1 ${item.color}`}>{item.icon}</div>
            <p className={`text-xs px-2 ${item.color}`}>{item.title}</p>
          </button>
        );
      })}
    </ul>
  );
};

export default MessageMenu;
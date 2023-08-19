import { useEffect, useState } from 'react';
import {
  UilTrash,
  UilCornerUpLeftAlt,
  UilPen,
  UilCopy,
  UilCornerUpRightAlt,
  UilCheckCircle
} from '@iconscout/react-unicons';

function ChatCardContext({ openContext, setOpenContext }) {
  useEffect(
    () => () => {
      document.addEventListener('click', () => {
        console.log('hello');
        setOpenContext(false);
      });
    },
    [openContext]
  );

  const items = [
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
  ];
  return (
    <ul className="absolute -left-2 top-1/2 z-50 w-[150px] rounded-lg bg-color1 text-color4 opacity-90 shadow-2xl">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex w-full flex-row items-center gap-2 rounded-lg px-5 hover:bg-bghovor">
          <div className={`my-1 flex items-center gap-2 ${item.color}`}>{item.icon}</div>
          <p className={`px-2 text-xs ${item.color}`}>{item.title}</p>
        </li>
      ))}
    </ul>
  );
}

export default ChatCardContext;

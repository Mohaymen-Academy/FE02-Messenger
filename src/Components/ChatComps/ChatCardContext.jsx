import { useEffect, useState } from 'react';
import { UilTrash, UilBellSlash, UilMapPinAlt } from '@iconscout/react-unicons';
import { TYPE_CHANNEL, TYPE_GROUP, TYPE_USER } from '../../utility/Constants';

function ChatCardContext({ openContext, setOpenContext, type }) {
  useEffect(
    () => () => {
      document.addEventListener('click', () => {
        console.log('hello');
        setOpenContext(false);
      });
    },
    [openContext]
  );

  const chatItems = [
    {
      icon: <UilMapPinAlt />,
      title: 'سنجاق به بالا',
      color: 'text-text1',
      action: 'reply'
    },
    {
      icon: <UilBellSlash />,
      title: 'بی صدا کردن',
      color: 'text-text1',
      action: 'edit'
    },
    {
      icon: <UilTrash />,
      title: 'حذف',
      color: 'text-red-500'
    }
  ];
  const channelItems = [
    {
      icon: <UilMapPinAlt />,
      title: 'سنجاق به بالا',
      color: 'text-text1',
      action: 'reply'
    },
    {
      icon: <UilBellSlash />,
      title: 'بی صدا کردن',
      color: 'text-text1',
      action: 'edit'
    },
    {
      icon: <UilTrash />,
      title: 'ترک کانال',
      color: 'text-red-500'
    }
  ];
  const groupItems = [
    {
      icon: <UilMapPinAlt />,
      title: 'سنجاق به بالا',
      color: 'text-text1',
      action: 'reply'
    },
    {
      icon: <UilBellSlash />,
      title: 'بی صدا کردن',
      color: 'text-text1',
      action: 'edit'
    },
    {
      icon: <UilTrash />,
      title: 'ترک گروه',
      color: 'text-red-500'
    }
  ];

  let contextMenuItems;
  function makeList(items) {
    return items.map((item, index) => (
      <li
        key={index}
        className="flex w-full flex-row items-center gap-2 rounded-lg px-5 hover:bg-bghovor">
        <div className={`my-1 flex items-center gap-2 ${item.color}`}>{item.icon}</div>
        <p className={`px-2 text-xs ${item.color}`}>{item.title}</p>
      </li>
    ));
  }
  if (type === TYPE_USER) {
    contextMenuItems = makeList(chatItems);
  } else if (type === TYPE_GROUP) {
    contextMenuItems = makeList(groupItems);
  } else {
    contextMenuItems = makeList(channelItems);
  }
  return (
    <ul className="absolute -left-2 top-1/2 z-50 w-[150px] rounded-lg bg-color1 text-color4 opacity-90 shadow-2xl">
      {contextMenuItems}
    </ul>
  );
}

export default ChatCardContext;

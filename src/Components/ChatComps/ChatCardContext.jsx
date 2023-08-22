import { memo, useEffect, useRef, useState } from 'react';
import { UilTrash, UilBellSlash, UilMapPinAlt, UilCommentAltSlash } from '@iconscout/react-unicons';
import { TYPE_CHANNEL, TYPE_GROUP, TYPE_USER } from '../../utility/Constants';
import Requests from '../../API/Requests';
import { useDispatch } from 'react-redux';
import { deleteChat } from '../../features/SelectedInfo';


const ChatCardContext = memo(({ setOpenContext, type, chatid, pinned }) => {
  console.log(chatid);
  const dispatch=useDispatch()
  const liref = useRef(null);
  useEffect(() => {
    // if (liref) {
    document.addEventListener('mousedown', (e) => {
      if (e.target != liref.current) setOpenContext(false);
    });

    // }
  }, []);

  function handlePin() {
    console.error(chatid);
    if (!pinned) Requests().pinChat(chatid);
    else Requests().UnpinChat(chatid);
  }
  function handlDelete() {
    console.log('delete');
    dispatch(deleteChat({chatid}))
    Requests().DeleteChat(chatid)
  
  }
  function handlMute() {}
  const chatItems = [
    {
      icon: pinned ? <UilCommentAltSlash /> : <UilMapPinAlt />,
      title: pinned ? 'برداشتن سنجاق' : 'سنجاق به بالا',
      color: 'text-text1',
      action: handlePin
    },
    {
      icon: <UilBellSlash />,
      title: 'بی صدا کردن',
      color: 'text-text1',
      action: handlMute
    },
    {
      icon: <UilTrash />,
      title: 'حذف',
      color: 'text-red-500',
      action: handlDelete
    }
  ];
  const channelItems = [
    {
      icon: pinned ? <UilCommentAltSlash /> : <UilMapPinAlt />,
      title: pinned ? 'برداشتن سنجاق' : 'سنجاق به بالا',
      color: 'text-text1',
      action: handlePin
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
      icon: pinned ? <UilCommentAltSlash /> : <UilMapPinAlt />,
      title: pinned ? 'برداشتن سنجاق' : 'سنجاق به بالا',
      color: 'text-text1',
      action: handlePin
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
    return items.map((item) => (
      <div key={item.title}>
        <button
          className="flex w-full flex-row items-center gap-2 rounded-lg px-5 hover:bg-bghovor"
          onMouseDown={item.action}>
          <div
            // onClick={() => console.log('zarp inwerwer')}
            className={`my-1 flex items-center gap-2 ${item.color}`}>
            {item.icon}
          </div>
          <p className={`px-2 text-xs ${item.color}`}>{item.title}</p>
        </button>
      </div>
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
    <ul className="absolute -left-2 top-1/2 z-50 w-[180px] rounded-lg bg-color1 text-color4 opacity-100 shadow-2xl">
      {contextMenuItems}
    </ul>
  );
});

export default ChatCardContext;

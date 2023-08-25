import {
  UilTrash,
  UilCornerUpLeftAlt,
  UilPen,
  UilCopy,
  UilCornerUpRightAlt,
  UilCheckCircle,
  UilLink
} from '@iconscout/react-unicons';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { composerActions } from '../../features/composerSlice';
import { deletemessage } from '../../features/SelectedInfo';
import Requests from '../../API/Requests';
import VerifyModal from '../../ui/VeifyModal';
import { isAction } from '@reduxjs/toolkit';

const MessageMenu = ({
  messagePreview,
  positions,
  setposition,
  msgId,
  text,
  setopenForward,
  chattype,
  isforme,
  styles
}) => {
  // console.error(messagePreview)
  const [opendeltemenu, setopendeltemenu] = useState(false);
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
      action: 'reply',
      allowed: true
    },
    {
      icon: <UilPen />,
      title: 'ویرایش',
      color: 'text-text1',
      action: 'edit',
      allowed: isforme
    },
    {
      icon: <UilLink />,
      title: 'سنجاق کردن',
      color: 'text-text1',
      action: 'pin',
      allowed: true
    },
    {
      icon: <UilCopy />,
      title: 'کپی ',
      color: 'text-text1',
      action: 'copy',
      allowed: true
    },
    {
      icon: <UilCornerUpRightAlt />,
      title: 'هدایت ',
      color: 'text-text1',
      action: 'forward',
      allowed: true
    },
    {
      icon: <UilCheckCircle />,
      title: 'انتخاب ',
      color: 'text-text1',
      allowed: true
    },
    {
      icon: <UilTrash />,
      title: 'حذف ',
      color: 'text-red-500',
      action: 'delete',
      allowed: isforme
    }
  ]);

  const handledelte = () => {
    Requests().Deletemsg(msgId);
  };
  return (
    <>
      {positions.x_mouse != 0 ? (
        <ul
          ref={divref}
          style={{ top: `${positions.y_mouse / 4}`, left: `${positions.x_mouse}`, bottom: 0 }}
          className="absolute z-10 shadow-2xl w-[150px] bg-color1 text-color4 rounded-lg opacity-90">
          {items.map((item, index) => {
            return item.allowed ? (
              <button
                key={index}
                className="flex flex-row items-center gap-2 px-5 w-full hover:bg-bghovor rounded-lg"
                onClick={(e) => {
                  if (item?.action == 'reply') {
                    console.error(messagePreview)
                    dispatch(
                      composerActions.setaction({
                        type: item.action,
                        text: text,
                        messageID: msgId,
                        messagePreview
                      })
                    );
                  } else if (item.action === 'delete') {
                    setopendeltemenu(true);
                    setposition({ x_mouse: 0, y_mouse: 0 });
                  } else if (item?.action == 'pin') {
                    Requests().PinMSG(msgId);
                    dispatch(composerActions.pinmsg({ msgid: msgId, text: text }));
                  } else if (item?.action == 'forward') {
                    console.error('forwardddd');
                    setopenForward(true);
                  } else if (item?.action === 'copy') {
                    console.error('copy');
                    navigator.clipboard.writeText(text);
                  } else if (item?.action == 'edit') {
                    console.error(styles);
                    dispatch(
                      composerActions.setaction({
                        type: item.action,
                        msgid: msgId,
                        text: text,
                        styles: styles
                      })
                    );
                  }

                  setposition({ x_mouse: 0, y_mouse: 0 });
                }}>
                <div className={`flex items-center gap-2 my-1 ${item.color}`}>{item.icon}</div>
                <p className={`text-xs px-2 ${item.color}`}>{item.title}</p>
              </button>
            ) : (
              <></>
            );
          })}
        </ul>
      ) : null}
      {opendeltemenu ? (
        <VerifyModal
          title={'حذف پیام'}
          describe={'در صورت تایید پیام انتخاب شده پاک میشود'}
          dispatch={handledelte}
          setmodal={setopendeltemenu}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default MessageMenu;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChatCardPreview } from '../Components/ChatComps';
import { composerActions } from '../features/composerSlice';
// import compose from '../features/composerSlice';
export default function ForwardComponent({ text, messageid }) {
  const dispatch = useDispatch();
  const lists = useSelector((store) => store.messageList.messages);
  return (
    <div className="flex flex-col justify-center">
      {lists?.map((chatprev, index) => (
        <div
          onClick={() =>
            dispatch(
              composerActions.forwardMessage({
                id: messageid,
                text: text
              })
            )
          }>
          <ChatCardPreview
            key={index}
            profile={chatprev.profile}
            //   pinned={chatprev.pinned}
            //   lastMessage={chatprev.lastMessage}
            //   unreadMessageCount={chatprev.unreadMessageCount}
            //   lastseen={chatprev.lastSeen}
          />
        </div>
      ))}
    </div>
  );
}

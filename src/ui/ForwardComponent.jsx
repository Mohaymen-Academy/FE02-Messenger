import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ChatCardPreview } from '../Components/ChatComps';
export default function ForwardComponent() {
    const dispatch = useDispatch();
    const lists = useSelector((store) => store.messageList.messages);
    return (
    <div className='flex flex-col justify-center'>
      {lists?.map((chatprev, index) => (
        <ChatCardPreview
          key={index}
        //   pinned={chatprev.pinned}
          profile={chatprev.profile}
        //   lastMessage={chatprev.lastMessage}
        //   unreadMessageCount={chatprev.unreadMessageCount}
        //   lastseen={chatprev.lastSeen}
        />
      ))}
    </div>
  )
}

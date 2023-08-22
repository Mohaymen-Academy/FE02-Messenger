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
            pinned={chatprev.pinned}
            profid={chatprev.profile.profileID}
            type={chatprev.profile.type}
            image={chatprev.profile.lastProfilePicture}
            size={50}
            profile={chatprev.profile}
            // profileName
            profileName={chatprev.profile.profileName}
            imagecolor={chatprev.profile.defaultProfileColor}
            char={chatprev.profile.profileName[0]}
            isOnline={chatprev.profile.status?.toLowerCase()}
            lastMessage={chatprev.lastMessage}
            unreadMessageCount={chatprev.unreadMessageCount}
            lastseen={chatprev.lastSeen}
          />
        </div>
      ))}
    </div>
  );
}

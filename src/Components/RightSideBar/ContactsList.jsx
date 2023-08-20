import React, { useEffect } from 'react';
import ContactCardPreview from './ContactCardPreview';
import { useDispatch, useSelector } from 'react-redux';
import { GetContacts } from '../../features/chatCardPreviewSlice';
export default function ContactsList() {
  const contacts = useSelector((state) => state.messageList.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetContacts());
  },[]);
  return (
    <div className="mt-4 w-full h-full overflow-y-auto bg-color1">
      {contacts.map((cont) => (
        <ContactCardPreview
          profile={cont}
          name={cont.profileName}
          image={cont.lastProfilePicture}
          color={cont.defaultProfileColor}
          chatid={cont.profileID}
          type={cont.type}
        />
      ))}
    </div>
  );
}

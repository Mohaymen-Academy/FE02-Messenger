import React from 'react';
import ContactCardPreview from './ContactCardPreview';
import { useSelector } from 'react-redux';
export default function ContactsList() {
  const contacts = useSelector((state) => state.messageList.contacts);

  return (
    <div className="mt-4 w-full h-full overflow-y-auto bg-color1">
      {contacts.map((cont) => (
        <ContactCardPreview
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

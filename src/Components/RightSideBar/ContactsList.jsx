import React, { useEffect } from 'react';
import ContactCardPreview from './ContactCardPreview';
import { useDispatch, useSelector } from 'react-redux';
import { GetContacts } from '../../features/chatCardPreviewSlice';
import { setParentDefault } from '../../features/rightSideSlice';
import { UilArrowLeft } from '@iconscout/react-unicons';
export default function ContactsList() {
  const contacts = useSelector((state) => state.messageList.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetContacts());
  }, []);
  return (
    <div className="mt-4 w-full h-full overflow-y-auto bg-color1">
      <div className="flex flex-row justify-between text-text1 px-5 py-3 w-[100%] border-b-2 ">
        مخاطبین
        <button
          onClick={() => {
            dispatch(setParentDefault());
          }}>
          <UilArrowLeft className={'text-xl text-text1'} />
        </button>
      </div>

      {contacts.map((cont) => (
        <ContactCardPreview
          key={cont.profileID}
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

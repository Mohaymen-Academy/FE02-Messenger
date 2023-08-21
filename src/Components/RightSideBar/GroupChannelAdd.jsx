import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ContactAddTo from './ContactAddTo';
import ContactSmall from './ContactSmall';
import PopUp from '../../ui/PopUp';
import GroupSettings from './GroupSettings';
import ChannelSettings from './ChannelSetting';

export default function GroupChannelAdd({ type }) {
  const [selected, setselected] = useState([]);
  const [openModel, setOpenModel] = useState(false);
  const contacts = useSelector((state) => state.messageList.contacts);

  return (
    <div className="h-full w-full overflow-y-auto bg-color1">
      <div className="flex max-h-[200px] flex-row flex-wrap overflow-y-scroll text-text1">
        {
          // for over selected and show contactsmall for each
          selected.map((cont) => (
            <ContactSmall
              chatid={cont.chatid}
              name={cont.name}
              image={cont.image}
              color={cont.color}
              setselected={setselected}
            />
          ))
        }
      </div>
      <div className="p-5 text-text1">
        {
          // if selected is empty show nothing
          selected.length == 0 ? null : (
            <div>
              <button
                className="h-12 w-[90%] rounded-xl bg-blue-400 text-xl font-semibold text-white"
                onClick={() => setOpenModel(true)}>
                {type == 'group' ? 'ایجاد گروه' : 'ایجاد کانال'}
              </button>
            </div>
          )
        }
      </div>

      <div className="">
        {contacts.map((cont) => (
          <ContactAddTo
            name={cont.profileName}
            image={cont.lastProfilePicture}
            color={cont.defaultProfileColor}
            chatid={cont.profileID}
            type={cont.type}
            selected={selected}
            setselected={setselected}
          />
        ))}
      </div>
      {openModel && (
        <PopUp title={type == 'group' ? 'ایجاد گروه' : 'ایجاد کانال'} setIsModalOpen={setOpenModel}>
          {type == 'group' ? (
            <GroupSettings selected={selected} setOpenModel={setOpenModel} />
          ) : (
            <ChannelSettings selected={selected} setOpenModel={setOpenModel} />
          )}
        </PopUp>
      )}
    </div>
  );
}

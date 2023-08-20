import React, { useState } from 'react';
import ContactAddTo from './ContactAddTo';
import ContactSmall from './ContactSmall';
import PopUp from '../../utility/PopUp';
import GroupSettings from './GroupSettings';
import ChannelSettings from './ChannelSetting';
import { useSelector } from 'react-redux';

export default function GroupChannelAdd({ type }) {
  const [selected, setselected] = useState([]);
  const [openModel, setOpenModel] = useState(false);
  const contacts = useSelector((state) => state.messageList.contacts);

  return (
    <div className="w-full h-full overflow-y-auto bg-color1">
      <div className="text-text1 flex flex-row flex-wrap max-h-[200px] overflow-y-scroll">
        {
          //for over selected and show contactsmall for each
          selected.map((cont) => (
            <ContactSmall chatid={cont.chatid} name={cont.name} image={cont.image} color={cont.color} setselected={setselected} />
          ))
        }
      </div>
      <div className="text-text1 p-5">
        {
          //if selected is empty show nothing
          selected.length == 0 ? null : (
            <div>
              <button
                className="w-[90%] h-12 rounded-xl bg-blue-400 text-white text-xl font-semibold"
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

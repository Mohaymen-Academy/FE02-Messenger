import Default from './Menues/Default.jsx';
import {
  NUM_SIDEBAR_CHANNEL,
  NUM_SIDEBAR_CONTACTS,
  NUM_SIDEBAR_DEFAULT,
  NUM_SIDEBAR_GROUP,
  NUM_SIDEBAR_SETTINGS
} from '../../utility/Constants.js';
import { useState } from 'react';
import Settings from './Menues/Settings.jsx';
import { UilArrowLeft } from '@iconscout/react-unicons';
import { useSelector } from 'react-redux';
import Avatar from '../ChatComps/Avatar.jsx';
export default function SidebarMenu({ profileImage, username, divref }) {
  // const [menu, setmenu] = useState(NUM_SIDEBAR_DEFAULT);
  const open = useSelector((state) => state.rightsideMenues.isOpen);
  const menu = useSelector((state) => state.rightsideMenues.ParentType);
  const profile = useSelector((state) => state.profile);

  const Menues = {
    [NUM_SIDEBAR_DEFAULT]: ['Defualt', <Default />],
    [NUM_SIDEBAR_SETTINGS]: ['تنظیمات', <Settings />]
    //  , [NUM_SIDEBAR_CONTACTS]:
    //  , [NUM_SIDEBAR_CHANNEL]:
    //  , [NUM_SIDEBAR_GROUP]:
    //  , [NUM_SIDEBAR_CALL]:
  };
  return (
    <div
      dir="rtl"
      ref={divref}
      className={`w-[360px] z-20 fixed top-0 flex h-screen flex-col bg-color2 transition-all duration-700 ease-in-out font-estedad ${
        open ? 'right-0' : 'right-[-550%]'
      }`}>
      <div className=" w-[100%] h-[200px] flex flex-col justify-end gap-6 pt-0 ">
        <div
          className="flex w-[100%] object-cover h-[100%] flex-col justify-end place-items-end px-5 bg-gradient-to-r from-bghovor  to-[#005C4B] b pb-6  bg-cover  bg-center "
          // style={{ backgroundImage: 'var(backgroundPattern)', backgroundBlendMode:'soft-light' }}
        >
          <Avatar
            image={profile.profileData.lastProfilePicture}
            size={90}
            imagecolor={profile.profileData.defaultProfileColor}
            char={profile.profileData.profileName[0]}
            // isOnline={true}
          />
          <p className="text-white text-end mt-4 m-6">{profile.profileData.profileName}</p>
        </div>
      </div>
      {menu == NUM_SIDEBAR_DEFAULT ? (
        <></>
      ) : (
        <div className="flex dlex-col justify-between px-5 py-2">
          <p className="text-text1 text-end mx-6">{Menues[menu][0]}</p>
          <button
          // onClick={(e) => setmenu(NUM_SIDEBAR_DEFAULT)}
          >
            <UilArrowLeft className="text-text1 w-8 h-8 mx-1 top-0  " />
          </button>
        </div>
      )}
      {Menues[menu][1]}
    </div>
  );
}

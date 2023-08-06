import Default from './Menues/Default.jsx';
import {
  NUM_SIDEBAR_CHANNEL,
  NUM_SIDEBAR_CONTACTS,
  NUM_SIDEBAR_DEFAULT,
  NUM_SIDEBAR_GROUP,
  NUM_SIDEBAR_SETTINGS
} from '../utility/Constants.js';
import { useState } from 'react';
import Settings from './Menues/Settings.jsx';
export default function SidebarMenu({ profileImage, username, open, divref }) {
  const [menu, setmenu] = useState(NUM_SIDEBAR_SETTINGS);
  const Menues = {
    [NUM_SIDEBAR_DEFAULT]: <Default menuSetter={setmenu} />,
    [NUM_SIDEBAR_SETTINGS]: <Settings />,
    //  , [NUM_SIDEBAR_CONTACTS]:
    //  , [NUM_SIDEBAR_CHANNEL]:
    //  , [NUM_SIDEBAR_GROUP]:
    //  , [NUM_SIDEBAR_CALL]:
  };
  return (
    <div className="h-screen w-[190px]">
      <div
        ref={divref}
        className={`w-[250px] fixed top-0 flex h-screen flex-col bg-[#1e7889] transition-all duration-1000 ease-in-out ${
          open ? 'right-0' : 'right-[-255px]'
        }`}>
        <div className="flex flex-col gap-3  pt-5 pb-3 pr-5 pl-[5.75rem] w-fit">
          <img src={profileImage} className="w-[70px] h-[70px] rounded-full" alt="" />
          {username}
        </div>
        {Menues[menu]}
      </div>
    </div>
  );
}

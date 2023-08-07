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
  const [menu, setmenu] = useState(NUM_SIDEBAR_DEFAULT);
  const Menues = {
    [NUM_SIDEBAR_DEFAULT]: <Default menuSetter={setmenu} />,
    [NUM_SIDEBAR_SETTINGS]: <Settings />
    //  , [NUM_SIDEBAR_CONTACTS]:
    //  , [NUM_SIDEBAR_CHANNEL]:
    //  , [NUM_SIDEBAR_GROUP]:
    //  , [NUM_SIDEBAR_CALL]:
  };
  return (
    <div className="h-screen w-[190px]">
      <div
        ref={divref}
        className={`w-[250px] fixed top-0 flex h-screen flex-col bg-color1 transition-all duration-1000 ease-in-out ${
          open ? 'right-0' : 'right-[-255px]'
        }`}>
        <div className=" w-[100%] h-[170px] flex flex-col gap-6 pt-0 items-center">
          <div
            className="flex justify-center m-0 w-[100%] object-cover
            h-[100%]"
            style={{ background: `url(${'images/wall.webp'})` }}>
            <img
              src={profileImage}
              className="w-[70px] h-[70px] rounded-full p-1  bg-color4 relative bottom-[-70px]"
              alt=""
            />
          </div>
          <p
          className={''}>{username}</p>
        </div>
        {Menues[menu]}
      </div>
    </div>
  );
}

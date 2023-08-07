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
    [NUM_SIDEBAR_SETTINGS]: <Settings menuSetter={setmenu} />
    //  , [NUM_SIDEBAR_CONTACTS]:
    //  , [NUM_SIDEBAR_CHANNEL]:
    //  , [NUM_SIDEBAR_GROUP]:
    //  , [NUM_SIDEBAR_CALL]:
  };
  return (
    <div className="h-screen w-[190px]">
      <div
        ref={divref}
        className={`w-[250px] fixed top-0 flex h-screen flex-col bg-color1 transition-all duration-1000 ease-in-out font-estedad ${
          open ? 'right-0' : 'right-[-255px]'
        }`}>
        <div className=" w-[100%] h-[170px] flex flex-col gap-6 pt-0 items-center">
          <div
            className="flex justify-center mb-[10%] w-[100%] object-cover h-[100%]"
            style={{ background: `url(${'images/wall.webp'})` }}>
            <img
              src={profileImage}
              className="w-[70px] h-[70px] rounded-full p-1  bg-color1 relative bottom-[-65%]"
              alt=""
            />
          </div>
          <p className={''}>{username}</p>
        </div>
        {Menues[menu]}
        {menu == NUM_SIDEBAR_DEFAULT ? (
          <></>
        ) : (
          <>
            <button onClick={(e) => setmenu(NUM_SIDEBAR_DEFAULT)}>
              <img src="images/back.png" alt="" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

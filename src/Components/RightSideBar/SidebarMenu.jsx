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
import { UilArrowLeft } from '@iconscout/react-unicons'
export default function SidebarMenu({ profileImage, username, open, setopen, divref,item, setItem}) {
  const [menu, setmenu] = useState(NUM_SIDEBAR_DEFAULT);
  const Menues = {
    [NUM_SIDEBAR_DEFAULT]: ["Defualt",<Default menuSetter={setItem} setopen={setopen} />],
    [NUM_SIDEBAR_SETTINGS]: ["تنظیمات",<Settings menuSetter={setItem} setopen={setopen} />],
    //  , [NUM_SIDEBAR_CONTACTS]:
    //  , [NUM_SIDEBAR_CHANNEL]:
    //  , [NUM_SIDEBAR_GROUP]:
    //  , [NUM_SIDEBAR_CALL]:
  };
  return (
    <div dir='rtl' className="h-screen w-[190px]">
      <div
        ref={divref}
        className={`w-[350px] fixed top-0 flex h-screen flex-col bg-color2 transition-all duration-500 ease-in-out font-estedad ${
          open ? 'right-0' : 'right-[-150%]'
        }`}>
        <div className=" w-[100%] h-[200px] flex flex-col justify-end gap-6 pt-0 ">
          <div
            className="flex w-[100%] object-cover h-[100%] flex-col justify-end place-items-end px-5 bg-chatbackground bg-cover bg-center bg-no-repeat"
            // style={{ background: `url(${'images/wall.webp'})` }}
            >
            <img
              src={profileImage}
              className="w-[90px] h-[90px] rounded-full p-1  bg-color1 my-0"
              alt=""
            />
            <p className="text-white text-end mt-4 m-6">{username}</p>
          </div>
        </div>
        {menu == NUM_SIDEBAR_DEFAULT ? (
          <></>
        ) : (
          <div className='flex dlex-col justify-between px-5 py-2'>
            <p className="text-text1 text-end mx-6">{Menues[menu][0]}</p>
            <button onClick={(e) => setmenu(NUM_SIDEBAR_DEFAULT)}>
              <UilArrowLeft className="text-text1 w-8 h-8 mx-1 top-0  " />
            </button>
          </div>
        )}
        {Menues[menu][1]}
      </div>
    </div>
  );
}

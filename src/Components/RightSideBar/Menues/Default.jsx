import {
  NUM_SIDEBAR_CHANNEL,
  NUM_SIDEBAR_CONTACTS,
  NUM_SIDEBAR_GROUP,
  NUM_SIDEBAR_SETTINGS,
  NUM_SIDEBAR_CALL
} from '../../../utility/Constants.js';
import { setTheme } from '../../../utility/useLoclStorage.jsx';
import SidebarCard from '../SidebarCard.jsx';
import { UilSetting ,UilUser ,UilUsersAlt,UilMegaphone ,UilPhone ,UilVuejs ,UilMoon     } from '@iconscout/react-unicons'

export default function Default({ menuSetter }) {
  function handleonchange() {
    const div = document.getElementById('zarp');
    div.dataset.theme === 'dark' ? (div.dataset.theme = 'light') : (div.dataset.theme = 'dark');
    setTheme(div.dataset.theme);
  }

  return (
    <div className="flex flex-col w-[100%] ">
      {
        <SidebarCard
          setsection={menuSetter}
          icon={<UilSetting className="text-text1 w-8 h-8 mx-1 "/>}
          title={'تنظیمات'}
          menuId={NUM_SIDEBAR_SETTINGS}
        />
      }
      {
        <SidebarCard
          setsection={menuSetter}
          icon={<UilUser className="text-text1 w-8 h-8 mx-1 "/>}
          title={'مخاطبین'}
          menuId={NUM_SIDEBAR_CONTACTS}
        />
      }
      {
        <SidebarCard
          setsection={menuSetter}
          icon={<UilUsersAlt className="text-text1 w-8 h-8 mx-1 " />}
          title={'ساخت گروه جدید'}
          menuId={NUM_SIDEBAR_GROUP}
        />
      }
      {
        <SidebarCard
          setsection={menuSetter}
          icon={<UilMegaphone className="text-text1 w-8 h-8 mx-1 " />}
          title={'ساخت کانال جدید'}
          menuId={NUM_SIDEBAR_CHANNEL}
        />
      }
      {
        <SidebarCard
          setsection={menuSetter}
          icon={<UilPhone className="text-text1 w-8 h-8 mx-1 " />}
          title={'تماس'}
          menuId={NUM_SIDEBAR_CALL}
        />
      }
      <button className="hover:bg-color1 ">
        <div className="flex items-center gap-2 my-1 p-2">
          {/* <img src={'images/v.png'} className="w-[40px] h-[40px]" alt="" /> */}
          <UilVuejs className="text-text1 w-8 h-8 mx-1 " />
          <p className="cardP">ویترین</p>
        </div>
      </button>
      <div className="flex items-center  gap-2 my-1 p-2">
        {/* <img src={'images/darktheme.png'} className="w-[40px] h-[40px]" alt="" /> */}
        <UilMoon className="text-text1 w-8 h-8 mx-1 " />
        <div className='flex flec-col justify-between w-full'>
          <p
            className="cardP
                          whitespace-nowrap">
            حالت شب
          </p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input id="1" className="sr-only peer" type="checkbox" onChange={handleonchange} />
            <div className="w-11 h-6 bg-gray-500  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
}

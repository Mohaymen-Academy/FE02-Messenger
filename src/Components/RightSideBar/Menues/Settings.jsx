import { useState } from 'react';
import { PersonalMenu, Notifs, Privacy, DataStorage, ChatSetting } from '../../../utility/Settings';
import { UilBell, UilLock, UilCloudCheck, UilComment, UilUser } from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import {
  SETTINGS_NOTIFS_MEN,
  SETTINGS_PRIVACY_MEN,
  SETTINGS_STORAGE_MEN,
  SETTINGS_CHAT_MEN,
  SETTINGS_PRIVATE_INFO
} from '../../../utility/Constants';
import { setChild } from '../../../features/rightSideSlice';

export default function Settings({ image }) {
  const [isShowing, setIsShowing] = useState(0);
  const dispatch = useDispatch();
  const child = useSelector((state) => state.rightsideMenues.ChildType);
  const items = {
    [SETTINGS_PRIVATE_INFO]: {
      title: 'اطلاعات شخصی',
      icon: <UilUser className="text-text1 w-8 h-8 mx-1 " />,
      component: <PersonalMenu />
    },
    [SETTINGS_NOTIFS_MEN]: {
      title: 'اعلان‌ها و صداها',
      icon: <UilBell className="text-text1 w-8 h-8 mx-1 " />,
      component: <Notifs />
    },
    [SETTINGS_PRIVACY_MEN]: {
      title: 'حریم خصوصی و امنیت',
      icon: <UilLock className="text-text1 w-8 h-8 mx-1 " />,
      component: <Privacy />
    },
    [SETTINGS_STORAGE_MEN]: {
      title: 'داده و ذخیره سازی',
      icon: <UilCloudCheck className="text-text1 w-8 h-8 mx-1 " />,
      component: <DataStorage />
    },
    [SETTINGS_CHAT_MEN]: {
      title: 'تنظیمات گفتگو',
      icon: <UilComment className="text-text1 w-8 h-8 mx-1 " />,
      component: <ChatSetting />
    }
  };
  console.log(items[1].component);
  console.log(child);
  return (
    <>
      {child == 0 ? (
        <div className="mt-4 w-[450px] h-full overflow-y-auto ">
          {/* edit profile */}
          <div
            className="flex flex-row w-[100%] p-3 hover:bg-bghovor border-b border-bghovor hover:cursor-pointer"
            onClick={() => dispatch(setChild({ child: SETTINGS_PRIVATE_INFO }))}>
            <div className="mx-5 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-blue-400 ">
              {image?.length == 1 ? (
                <p className=" h-[100%] flex place-items-center text-center text-2xl font-normal text-white">
                  {image}
                </p>
              ) : (
                <img src={image} alt="" />
              )}
            </div>
            <div className="flex flex-col text-text1 text-[17px] justify-center">
              <div>زهرا</div>
              <div>Zahra@gmail.com</div>
            </div>
            {/* items */}
          </div>
          {
            // map over item start from 1
            Object.entries(items).map((item, index) => {
              console.log(item[0])
              if (item[0] != SETTINGS_PRIVATE_INFO) {
                return (
                  <div
                    key={index}
                    onClick={() => dispatch(setChild({ child: item[0] }))}
                    className="flex flex-row w-[100%] border-b border-bghovor px-8 gap-5 hover:bg-bghovor text-text1 items-center hover:cursor-pointer ">
                    <div>{item[1].icon}</div>
                    <div className="text-[20px]  w-full py-6">{item[1].title}</div>
                  </div>
                );
              }
            })
          }
        </div>
      ) : (
        items[child].component
      )}
    </>
  );
}

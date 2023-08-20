import { useState } from 'react';
import {
  UilBell,
  UilLock,
  UilCloudCheck,
  UilComment,
  UilUser,
  UilSignout
} from '@iconscout/react-unicons';

import { useDispatch, useSelector } from 'react-redux';
import { PersonalMenu, Notifs, Privacy, DataStorage, ChatSetting } from '../Settings';
import {
  SETTINGS_NOTIFS_MEN,
  SETTINGS_PRIVACY_MEN,
  SETTINGS_STORAGE_MEN,
  SETTINGS_CHAT_MEN,
  SETTINGS_PRIVATE_INFO
} from '../../../utility/Constants';
import { setChild } from '../../../features/rightSideSlice';
import { Avatar } from '../../ChatComps';
import { clearLogin } from '../../../features/profileSlice';

export default function Settings() {
  const dispatch = useDispatch();
  const child = useSelector((state) => state.rightsideMenues.ChildType);
  const profile = useSelector((state) => state.profile);
  console.log(profile.profileData);

  const items = {
    [SETTINGS_PRIVATE_INFO]: {
      title: 'اطلاعات شخصی',
      icon: <UilUser className="mx-1 h-8 w-8 text-text1 " />,
      component: <PersonalMenu />
    },
    [SETTINGS_NOTIFS_MEN]: {
      title: 'اعلان‌ها و صداها',
      icon: <UilBell className="mx-1 h-8 w-8 text-text1 " />,
      component: <Notifs />
    },
    [SETTINGS_PRIVACY_MEN]: {
      title: 'حریم خصوصی و امنیت',
      icon: <UilLock className="mx-1 h-8 w-8 text-text1 " />,
      component: <Privacy />
    },
    [SETTINGS_STORAGE_MEN]: {
      title: 'داده و ذخیره سازی',
      icon: <UilCloudCheck className="mx-1 h-8 w-8 text-text1 " />,
      component: <DataStorage />
    },
    [SETTINGS_CHAT_MEN]: {
      title: 'تنظیمات گفتگو',
      icon: <UilComment className="mx-1 h-8 w-8 text-text1 " />,
      component: <ChatSetting />
    }
  };
  // console.log(items[1].component);
  // console.log(child);
  return (
    <div className="h-full w-[450px] overflow-y-scroll">
      {child == 0 ? (
        <div className="mt-4 h-full  w-full overflow-y-auto ">
          {/* edit profile */}
          <div
            className="flex w-[100%] flex-row border-b border-bghovor p-3 hover:cursor-pointer hover:bg-bghovor"
            onClick={() => dispatch(setChild({ child: SETTINGS_PRIVATE_INFO }))}>
            <div className="mx-5 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-blue-400 ">
              {profile.profileData.lastProfilePicture ? (
                <img
                  src={`data:image/jpeg;base64,${profile.profileData.lastProfilePicture.preLoadingContent}`}
                  className="h-full w-full rounded-full bg-cover aspect-[1/1] object-cover"
                />
              ) : (
                <Avatar
                  size={100}
                  imagecolor={profile.profileData.defaultProfileColor}
                  char={profile.profileData.profileName[0]}
                  // isOnline={true}
                />
              )}
            </div>
            <div className="flex flex-col justify-center text-[17px] text-text1">
              <div>{profile.profileData.profileName}</div>
              <div>{profile.profileData.handle}</div>
            </div>
            {/* items */}
          </div>
          {
            // map over item start from 1
            Object.entries(items).map((item, index) => {
              // console.log(item[0]);
              if (item[0] != SETTINGS_PRIVATE_INFO) {
                return (
                  <div
                    key={index}
                    onClick={() => dispatch(setChild({ child: item[0] }))}
                    className="flex w-[100%] flex-row items-center gap-5 border-b border-bghovor px-8 text-text1 hover:cursor-pointer hover:bg-bghovor ">
                    <div>{item[1].icon}</div>
                    <div className="w-full  py-6 text-[15px]">{item[1].title}</div>
                  </div>
                );
              }
            })
          }
          <div
            onClick={() => dispatch(clearLogin())}
            className="flex h-[70px] w-[100%] flex-row items-center gap-5 px-8 text-red-600 hover:cursor-pointer hover:bg-bghovor ">
            <UilSignout className="mx-1 h-8 w-8 text-red-600 " />
            <div>خروج از حساب کاربری</div>
          </div>
        </div>
      ) : (
        items[child].component
      )}
    </div>
  );
}

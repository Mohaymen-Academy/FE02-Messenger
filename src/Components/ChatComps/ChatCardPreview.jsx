import { useDispatch } from 'react-redux';
import { memo, useState } from 'react';
import { UilLink } from '@iconscout/react-unicons';
import Avatar from './Avatar';
import { GetMessages, SetLeftProf } from '../../features/SelectedInfo';
import Requests from '../../API/Requests';
import ChatCardContext from './ChatCardContext';
import { GetPin } from '../../features/composerSlice';
// import
function bytesToBase64(bytes) {
  const binString = Array.from(bytes, (x) => String.fromCodePoint(x)).join('');
  return btoa(binString);
}
function gregorianToJalali(gy, gm, gd) {
  const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  let jy = gy <= 1600 ? 0 : 979;
  gy -= gy <= 1600 ? 621 : 1600;
  const gy2 = gm > 2 ? gy + 1 : gy;
  let days =
    365 * gy +
    parseInt((gy2 + 3) / 4) -
    parseInt((gy2 + 99) / 100) +
    parseInt((gy2 + 399) / 400) -
    80 +
    gd +
    g_d_m[gm - 1];
  jy += 33 * parseInt(days / 12053);
  days %= 12053;
  jy += 4 * parseInt(days / 1461);
  days %= 1461;
  jy += parseInt((days - 1) / 365);
  if (days > 365) days = (days - 1) % 365;
  const jm = days < 186 ? 1 + parseInt(days / 31) : 7 + parseInt((days - 186) / 30);
  const jd = 1 + (days < 186 ? days % 31 : (days - 186) % 30);
  return [jy, jm, jd];
}
function getPersianMonthName(month) {
  const monthNames = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند'
  ];
  return monthNames[month - 1];
}

function getRelativeDate(inputDate) {
  const currentDate = new Date();
  const inputDateTime = new Date(inputDate);

  const [inputYear, inputMonth, inputDay] = gregorianToJalali(
    inputDateTime.getFullYear(),
    inputDateTime.getMonth() + 1,
    inputDateTime.getDate()
  );
  const [currentYear, currentMonth, currentDay] = gregorianToJalali(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    currentDate.getDate()
  );

  if (inputYear === currentYear && inputMonth === currentMonth && inputDay === currentDay) {
    return 'امروز';
  }
  if (inputYear === currentYear && inputMonth === currentMonth && inputDay === currentDay - 1) {
    return 'دیروز';
  }
  if (inputYear === currentYear && inputMonth === currentMonth) {
    const daysOfWeek = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];
    const inputDayOfWeek = new Date(inputDate).getDay();
    return daysOfWeek[inputDayOfWeek];
  }
  if (inputYear === currentYear && inputMonth === currentMonth && inputDay >= currentDay - 7) {
    return `${inputDay} ${getPersianMonthName(inputMonth)}`;
  }
  if (inputYear !== currentYear) {
    return `${inputYear}/${inputMonth}/${inputDay}`;
  }
  return `${inputDay} ${getPersianMonthName(inputMonth)}`;
}
// TODO
//  NEED TO ADD TIME TO IT
const ChatCardPreview = memo(
  ({
    profile,
    profileName,
    profid,
    type,
    image,
    size,
    imagecolor,
    char,
    isOnline,
    lastMessage,
    unreadMessageCount,
    pinned
  }) => {
    // console.log(profile?.lastProfilePicture?.preLoadingContent)
    const [openContext, setOpenContext] = useState(false);
    const dispatch = useDispatch();
    const handleRightClick = (e) => {
      e.preventDefault();
      setOpenContext(true);
    };

    return (
      <div
        onContextMenu={handleRightClick}
        onClick={async (e) => {
          // console.error(profile.type);
          // console.error(profile.profileID);
          dispatch(
            GetMessages({
              type,
              profid,
              message_id: 0,
              profileinfo: profile
            })
            // dispatch(GetPin())
          );
          dispatch(GetPin({ chatid: profid }));
          dispatch(SetLeftProf({ profid: profid }));
          // await Requests().GetProfileMedium(profile.profileID);
        }}
        className="h-18 relative mx-2 flex w-[97%] cursor-pointer flex-row items-center justify-start rounded-lg p-3  hover:bg-bghovor">
        <div className="flex w-[100%] justify-between px-2">
          <div className="flex flex-row gap-2">
            <Avatar
              image={image}
              size={50}
              imagecolor={imagecolor}
              char={char}
              isOnline={isOnline}
            />

            <div className="flex flex-col">
              <p className="font-semibold text-text1">{profileName}</p>
              <div className="line-clamp-1 pl-3 text-base text-text1 opacity-[50%]">
                {lastMessage?.text}
              </div>
            </div>
          </div>
          <div className="flex h-[50px] flex-col justify-between pl-3">
            <p className="text-xs text-text1 opacity-[50%]">{getRelativeDate(lastMessage?.time)}</p>
            <div className="flex flex-row justify-end">
              {unreadMessageCount ? (
                <div>
                  <div className="h-6 w-6 rounded-full bg-green-400  text-center text-white shadow-lg">
                    {unreadMessageCount}
                  </div>
                </div>
              ) : null}
              {pinned ? <UilLink className={'text-text1 text-opacity-25'} /> : <></>}
            </div>
          </div>
        </div>
        {openContext ? (
          <ChatCardContext
            chatid={profile.profileID}
            type={profile.type}
            setOpenContext={setOpenContext}
            pinned={pinned}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
);
export default ChatCardPreview;

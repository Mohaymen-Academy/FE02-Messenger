const NUM_SIDEBAR_DEFAULT = 1,
  NUM_SIDEBAR_SETTINGS = 2,
  NUM_SIDEBAR_CONTACTS = 3,
  NUM_SIDEBAR_CHANNEL = 4,
  NUM_SIDEBAR_GROUP = 5,
  NUM_SIDEBAR_CALL = 6,
  NUM_SIDEBAR_CHAT = 7,
  NUM_SIDEBAR_SHOWCONTACT = 8,
  NUM_SIDEBAR_MENU = 9;

export {
  NUM_SIDEBAR_CHANNEL,
  NUM_SIDEBAR_CONTACTS,
  NUM_SIDEBAR_DEFAULT,
  NUM_SIDEBAR_GROUP,
  NUM_SIDEBAR_SETTINGS,
  NUM_SIDEBAR_CALL,
  NUM_SIDEBAR_CHAT,
  NUM_SIDEBAR_SHOWCONTACT,
  NUM_SIDEBAR_MENU
};

const PERMISSION_TYPE_NOT_ALLOWED_ = 0,
  PERMISSION_TYPE_ALLOWED_ONYL_ITSELF = 1,
  PERMISSION_TYPE_ALLOWED_EVERYBODY = 2;
export {
  PERMISSION_TYPE_ALLOWED_EVERYBODY,
  PERMISSION_TYPE_ALLOWED_ONYL_ITSELF,
  PERMISSION_TYPE_NOT_ALLOWED_
};

const SETTINGS_NOTIFS_MEN = 1,
  SETTINGS_PRIVACY_MEN = 2,
  SETTINGS_STORAGE_MEN = 3,
  SETTINGS_CHAT_MEN = 4,
  SETTINGS_PRIVATE_INFO = 5;
export {
  SETTINGS_NOTIFS_MEN,
  SETTINGS_PRIVACY_MEN,
  SETTINGS_STORAGE_MEN,
  SETTINGS_CHAT_MEN,
  SETTINGS_PRIVATE_INFO
};

const TEXT_STYLES = {
  1: 'Monolotic',
  2: 'strike',
  3: 'underline',
  4: 'italic',
  5: 'bold',
  6: 'spoiler',
  0: 'link'
};
export { TEXT_STYLES };
const TYPE_USER = 0,
  TYPE_GROUP = 1,
  TYPE_CHANNEL = 2;
const UP = 1,
  DOWN = 2,
  NOTHING = 3;
export { UP, DOWN, NOTHING };
export { TYPE_CHANNEL, TYPE_GROUP, TYPE_USER };

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

export function getRelativeDate(inputDate) {
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
  return `${inputDay} ${getPersianMonthName(inputMonth)}`;
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

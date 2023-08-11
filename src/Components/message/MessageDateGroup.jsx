function MessageDateGroup({ date, children }) {
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
    return `${inputDay} ${getPersianMonthName(inputMonth)}`;
  }

  return (
    <div className="my-[1rem] w-full text-center">
      <span className="pointer-events-none sticky top-1 z-10  rounded-full bg-black bg-opacity-60 px-2 py-1 font-iRANSans text-white">
        {getRelativeDate(date)}
      </span>
      {children}
    </div>
  );
}

export default MessageDateGroup;

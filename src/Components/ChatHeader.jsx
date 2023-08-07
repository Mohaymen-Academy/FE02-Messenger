const ChatHeader = () => (
  <div className=" flex w-full justify-between bg-slate-500 px-1">
    <div id="header-account" className="flex h-full items-center gap-2">
      <div className="w-10 py-3">
        <div className="flex h-full w-full justify-center rounded-full bg-orange-500 text-center text-4xl font-normal text-white">
          ن
        </div>
      </div>
      <div className="">
        <p className="text-lg font-semibold text-color2">یوزر نیم </p>
        <p className="text-sm text-color1 "></p>
      </div>
    </div>
    <div>setting</div>
  </div>
);

export default ChatHeader;

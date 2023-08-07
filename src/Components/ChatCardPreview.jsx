const ChatCardPreview = ({ profilePicture, unreadmessage }) => (
  <div className=" flex h-16 w-full cursor-pointer flex-row py-1 hover:bg-slate-500">
    <div className="w-1/5 px-2">
      {profilePicture ? (
        <img src={profilePicture} className="h-full rounded-full" />
      ) : (
        <div className="flex h-full w-full justify-center rounded-full bg-orange-500 text-center text-4xl font-normal text-white">
          ن
        </div>
      )}
    </div>
    <div className="flex flex-1 flex-col">
      <div className="font-semibold text-slate-200">زهرا</div>
      <div className="line-clamp-1 text-base text-slate-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </div>
    </div>
    {unreadmessage ? (
      <div className="w-2/12 px-1 py-4">
        <div className="w-fit min-w-[30px] rounded-full bg-cyan-400 px-1 text-center text-white shadow-lg shadow-blue-400">
          {unreadmessage}
        </div>
      </div>
    ) : null}
  </div>
);

export default ChatCardPreview;

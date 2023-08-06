import SidebarCard from './SidebarCard.jsx';

export default function SidebarMenu({ profileImage, username, open, divref }) {
  return (
    <div className="h-screen w-[190px]">
      <div
        ref={divref}
        className={`fixed top-0 flex h-screen flex-col bg-blue-700 px-5 transition-all duration-1000 ease-in-out ${
          open ? 'right-0' : 'right-[-250px]'
        }`}>
        <div className="flex flex-col border-b-2 border-b-gray-400 px-3 pb-3 pt-5">
          <img src={profileImage} className="h-[50px] w-[50px] rounded-full" alt="" />
          {username}
        </div>
        {<SidebarCard icon={'images/setting.png'} title={'Settings'} />}
        {<SidebarCard icon={'images/contacts.png'} title={'Contacts'} />}
        {<SidebarCard icon={'images/profile.jpg'} title={'Profile'} />}
        {<SidebarCard icon={'images/setting.png'} title={'Settings'} />}
        {<SidebarCard icon={'images/setting.png'} title={'Settings'} />}
      </div>
    </div>
  );
}

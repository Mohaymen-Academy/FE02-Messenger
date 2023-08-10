import { PersonalMenu, Notifs, Privacy, DataStorage, ChatSetting } from '../../../utility/Settings';
export default function Settings() {
  return (
    <div className='mt-4 w-[450px] h-full overflow-y-auto '>
      <PersonalMenu />
      <DataStorage />
      <Notifs />
      <Privacy />
      <ChatSetting />
    </div>
  );
}

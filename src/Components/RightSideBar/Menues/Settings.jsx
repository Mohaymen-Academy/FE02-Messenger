import { PersonalMenu, Notifs, Privacy, DataStorage, ChatSetting } from '../../../utility/Settings';
export default function Settings() {
  return (
    <div className=''>
      <PersonalMenu />
      <DataStorage />
      <Notifs />
      <Privacy />
      <ChatSetting />
    </div>
  );
}

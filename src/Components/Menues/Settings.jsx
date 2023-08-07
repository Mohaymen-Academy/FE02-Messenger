import { PersonalMenu, Notifs, Privacy, DataStorage, ChatSetting } from '../../utility/Settings';
export default function Settings() {
  return (
    <div>
      <PersonalMenu />
      <DataStorage />
      <Notifs />
      <Privacy />
      <ChatSetting />
    </div>
  );
}

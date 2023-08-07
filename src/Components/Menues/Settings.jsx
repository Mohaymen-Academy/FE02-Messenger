import { PersonalMenu, Notifs, Privacy, DataStorage } from '../../utility/Settings';
export default function Settings() {
  return (
    <div>
      <PersonalMenu />
      <DataStorage/>
      <Notifs />
      <Privacy />
    </div>
  );
}

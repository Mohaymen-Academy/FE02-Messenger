import PersonalMenu from '../../utility/Settings/PersonalMenu.jsx';
import Notifs from '../../utility/Settings/Notifs.jsx';
import Privacy from '../../utility/Settings/Privacy.jsx';
export default function Settings() {
  return (
    <div>
      <PersonalMenu />
      <Notifs />
      <Privacy />
    </div>
  );
}

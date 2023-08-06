import LeftSide from './Components/LeftSide.jsx';
import SidebarMenu from './Components/SidebarMenu.jsx';

function App() {
  return (
    <>
      <LeftSide />
      <SidebarMenu profileImage={'images/profile.jpg'} username={'Zahra'} />
    </>
  );
}

export default App;

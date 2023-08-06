import LeftSide from './Components/LeftSide.jsx';
import SidebarMenu from './Components/SidebarMenu.jsx';

function App() {
  return (
    <div className="h-full w-full">
      <SidebarMenu profileImage={'images/profile.jpg'} username={'Zahra'} />
      <LeftSide />
    </div>
  );
}

export default App;

import { useState, createContext } from 'react';
// import LeftSide from './LeftSide.jsx';
import RightSide from './Rightside';
const LayoutContext = createContext(null);

const Layout = ({ children }) => {
  const [chatid, setChatId] = useState(null);
  return (
    <div className="flex h-screen w-screen overflow-hidden  " id="app-holder">
      <RightSide setChatId={setChatId} />
      <LayoutContext.Provider value={chatid}>
        <div className="h-full flex-1 flex-row bg-slate-800 pb-6">{children}</div>
      </LayoutContext.Provider>
    </div>
  );
};
export { LayoutContext };
export default Layout;

import { useState, createContext, useEffect } from 'react';
import { getTheme } from '../utility/useLoclStorage';
// import LeftSide from './LeftSide.jsx';
import RightSide from './RightSideBar/Rightside';
const LayoutContext = createContext(null);

const Layout = ({ children }) => {
  useEffect(() => {
    const div = document.getElementById('zarp');
    div.dataset.theme = getTheme() ? getTheme() : 'light';
    // console.log(div.dataset.theme)
  }, []);

  const [chatid, setChatId] = useState(null);
  return (
    <div className={`flex h-screen w-screen overflow-hidden vsmmobile:relative `} id="app-holder">
      <RightSide chatId={chatid} setChatId={setChatId} />
      <LayoutContext.Provider value={{ chatid, setChatId }}>
        <div className="h-full flex-1 flex-row bg-slate-800 pb-6 bg-chatbackground  bg-cover bg-center bg-no-repeat">
          {children}
        </div>
      </LayoutContext.Provider>
    </div>
  );
};
export { LayoutContext };
export default Layout;

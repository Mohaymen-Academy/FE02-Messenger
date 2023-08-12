import { useState, createContext, useEffect, useReducer } from 'react';
import { getTheme } from '../utility/useLoclStorage';
// import LeftSide from './LeftSide.jsx';
import RightSide from './RightSideBar/Rightside';
const LayoutContext = createContext(null);
function reducer(state, action) {
  switch (action.type) {
    case 'null':
      return { ...state, chatid: null };
    case 'change':
      // console.log(action)
      return { ...state, chatid: action.chatid, chattype: action.chattype };
  }
}
const Layout = ({ children }) => {
  useEffect(() => {
    const div = document.getElementById('zarp');
    div.dataset.theme = getTheme() ? getTheme() : 'light';
  }, []);

  // const [chatid, setChatId] = useState(null);
  const [chat, dispatch] = useReducer(reducer, { chatid: null, chattype: null });
  return (
    <div className={`flex h-screen w-screen overflow-hidden vsmmobile:relative `} id="app-holder">
      <RightSide chatId={chat.chatid} dispatch={dispatch} />
      <LayoutContext.Provider value={{ chat, dispatch }}>
      <div className="h-full flex-1 flex-row bg-background pb-6 bg-backgroundPattern bg-cover bg-opacity-70 bg-center " style={{ backgroundImage: 'var(backgroundPattern)', backgroundRepeat: 'repeat', backgroundBlendMode: "darken", backgroundSize: '600px', width: '600px' }}>
          {children}
        </div>
      </LayoutContext.Provider>
    </div>
  );
};
export { LayoutContext };
export default Layout;

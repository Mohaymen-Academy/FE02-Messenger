import { useState } from 'react';
import LeftSide from './LeftSide.jsx';
import Rightside from './Rightside.jsx';

const Layout = ({ children }) => {
  const [active, setActive] = useState(true);
  return (
    <div className="flex h-screen w-screen overflow-hidden ">
      <LeftSide />
      <div className="h-full flex-1 bg-slate-800 flex-row" onClick={() => setActive(!active)}>
        {children}
      </div>
      <Rightside isActive={active} />
    </div>
  );
};

export default Layout;

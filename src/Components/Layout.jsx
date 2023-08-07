import { useState } from 'react';
import LeftSide from './LeftSide.jsx';
import Rightside from './Rightside.jsx';

const Layout = ({ children }) => {
  const [active, setActive] = useState(true);
  return (
    <div className="flex h-screen w-full overflow-hidden ">
      <LeftSide />
      <div className={'h-full flex-1 bg-slate-800 '} onClick={() => setActive(!active)}>
        {children}
      </div>
      <Rightside isActive={active} />
    </div>
  );
};

export default Layout;

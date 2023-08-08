import { useState } from 'react';
// import LeftSide from './LeftSide.jsx';
import RightSide from './Rightside'
const Layout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden  ">
      <RightSide/>
      <div className="h-full flex-1 bg-slate-800 flex-row pb-6">{children}</div>
    </div>
  );
};

export default Layout;

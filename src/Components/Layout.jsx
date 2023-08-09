import { useState } from 'react';
// import LeftSide from './LeftSide.jsx';
import RightSide from './Rightside';

const Layout = ({ children }) => (
  <div className="flex h-screen w-screen overflow-hidden  " id="app-holder">
    <RightSide />
    <div className="h-full flex-1 flex-row bg-slate-800 pb-6">{children}</div>
  </div>
);

export default Layout;

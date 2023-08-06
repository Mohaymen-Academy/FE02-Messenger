import LeftSide from './LeftSide.jsx';

const Layout = ({ children }) => (
  <div className="flex h-screen w-full auto-cols-auto overflow-hidden ">
    <LeftSide />
    <div className="h-full w-full bg-slate-800">{children}</div>
  </div>
);

export default Layout;

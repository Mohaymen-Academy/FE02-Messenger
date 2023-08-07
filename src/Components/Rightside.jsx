const Rightside = ({ isActive }) => (
  <div
    className={`h-screen transition-all duration-200 ease-in ${
      isActive ? 'w-[300px]' : 'w-0'
    } bg-slate-600 shadow-md`}></div>
);

export default Rightside;

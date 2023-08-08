const LeftSide = ({ isActive }) =>{ 
  console.log('sdfer');
  return(
  <div
    className={`h-screen transition-all duration-200 ease-in ${
      isActive ? 'w-[500px]' : 'w-0'
    } bg-slate-600 shadow-md`}> 
    </div>
);}

export default LeftSide;

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UilUser , UilCameraPlus, UilArrowRight} from '@iconscout/react-unicons';
import { useRef } from 'react';
import { useEffect } from 'react';
export default function PersonalMenu() {
  const [open, setopen] = useState(false);
  const profile =  useSelector((state) => state.profile);
 
   const name = useRef(null);  
   const handle = useRef(null);  
   const biography = useRef(null);  
   const image = useRef(null);
    // handle : null,
    // biography : null,
    // profilePicture : null

useEffect(()=>{
  // console.log(editProfile.current)
  if(name.current){
    console.log('werwe')
    name.current.value = profile.profileData.profileName;
    handle.current.value = profile.profileData.handle;
    biography.current.value = profile.profileData.biography;
    // editProfile.current.profilePicture = profile.profileData.lastProfilePicture; 
  }
},[]);
  const handleclick = () =>{
    image.current.click();
  }
  console.log(profile)
  return (
    <div
      className={`flex flex-col bg-color1 h-screen transition-all  duration-100 ease-in   border-r border-bghovor shadow-md`}>
      <div className="flex flex-row w-full h-[70px] m-5 mt-2 mb-0 place-items-center justify-center">
        <div className="p-1 pt-0 cardP">ویرایش پروفایل</div>
      </div>
      <div className="flex flex-col  justify-start items-center gap-3 w-full p-5">
        <div className={`w-[250px] h-[250px] my-7 flex justify-center items-center rounded-full cursor-pointer `}
        onClick={handleclick}
          style={{ backgroundImage: `${profile.profileData.lastProfilePicture && `url('data:image/jpeg;base64,${profile.profileData.lastProfilePicture.preLoadingContent}')`}` , backgroundColor : `${profile.profileData.defaultProfileColor}` , backgroundRepeat:"no-repeat" , backgroundSize:"cover"  }}
        >
          <input ref={image} type="file" id="upload" className='hidden'/>
          <UilCameraPlus className={'w-[50%] h-[50%] hover:w-[55%] hover:h-[55%] text-white'} />
        </div>
        <div className='flex flex-col gap-3 w-full '>
        <div className="relative w-full">
          <input
          ref={name}
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-text1 rounded-lg border-2  border-bghovor appearance-none  bg-color1 focus:outline-none focus:ring-0 focus:border-color4 peer"
            // value={editProfile.current.name}
          />
          <label className="absolute text-sm text-text1 bg-color1 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   peer-focus:px-2 peer-focus:text-color4 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-3">
            نام  (الزامی)
          </label>
        </div>
        <div className="relative w-full">
          <input
  ref={handle}
type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-text1  rounded-lg border-2  border-bghovor appearance-none  bg-color1 focus:outline-none focus:ring-0 focus:border-color4 peer"
            placeholder=" "
            // value={editProfile.current.handle}
          />
          <label className="absolute text-sm text-text1 bg-color1 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   peer-focus:px-2 peer-focus:text-color4 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-3">
            نام کاربری 
          </label>
        </div>
        <div className="relative w-full">
          <input
            ref={biography}
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-text1  rounded-lg border-2  border-bghovor appearance-none  bg-color1 focus:outline-none focus:ring-0 focus:border-color4 peer"
            placeholder=" "
          />
          <label className="absolute text-sm text-text1 bg-color1 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   peer-focus:px-2 peer-focus:text-color4 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-3">
            بیوگرافی 
          </label>
        </div>
        </div>
        <button className="w-[100%] mt-10 h-12 rounded-xl bg-color4 text-white text-sm font-semibold">
              ذخیره تغییرات 
          </button>
      </div>
    </div>
  );
}


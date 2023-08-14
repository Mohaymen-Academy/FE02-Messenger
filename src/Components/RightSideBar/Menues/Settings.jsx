import { useState } from 'react';
import { PersonalMenu, Notifs, Privacy, DataStorage, ChatSetting } from '../../../utility/Settings';
import { UilBell , UilLock , UilCloudCheck , UilComment , UilUser} from '@iconscout/react-unicons'

export default function Settings({image}) {
  const [isShowing, setIsShowing] = useState(0);
  const items = [
    {
      title : "اطلاعات شخصی",
      icon : <UilUser className="text-text1 w-8 h-8 mx-1 " />,
      component : <PersonalMenu/>
    },
    {
      title : "اعلان‌ها و صداها",
      icon : <UilBell className="text-text1 w-8 h-8 mx-1 " />,
      component : <Notifs/>  
    },
    {
      title : "حریم خصوصی و امنیت",
      icon : <UilLock className="text-text1 w-8 h-8 mx-1 " />,
      component : <Privacy/>
    },
    {
      title : "داده و ذخیره سازی",
      icon :  <UilCloudCheck className="text-text1 w-8 h-8 mx-1 " />,
      component : <DataStorage/>
    },
    {
      title : "تنظیمات گفتگو",
      icon :  <UilComment className="text-text1 w-8 h-8 mx-1 " />,
      component : <ChatSetting/>
      }] ;
  return (
    <>
    {
      isShowing == 0 ? 
        <div className='mt-4 w-[450px] h-full overflow-y-auto '>
          {/* edit profile */}
          <div className="flex flex-row w-[100%] p-3 hover:bg-bghovor border-b border-bghovor hover:cursor-pointer"
            onClick={()=>setIsShowing(1)}
          >
            <div className="mx-5 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-blue-400 ">
              {image?.length == 1 ? (
                <p className=" h-[100%] flex place-items-center text-center text-2xl font-normal text-white">{image}</p>
              ) : (
                <img src={image} alt="" />
              )}
              
            </div>
            <div className='flex flex-col text-text1 text-[17px] justify-center'>
                <div>زهرا</div>
                <div>Zahra@gmail.com</div>
            </div>
          {/* items */}
          </div>
          {
            // map over item start from 1
            items.map((item,index) => {
              if (index != 0) {
                return (
                  <div 
                  onClick={()=>setIsShowing(index+1)}
                   className='flex flex-row w-[100%] border-b border-bghovor px-8 gap-5 hover:bg-bghovor text-text1 items-center hover:cursor-pointer '> 
                      <div>{item.icon}</div>
                      <div className='text-[20px]  w-full py-6'>{item.title}</div>
                  </div>
                )
                
                }})
            
          }
        </div>
      :
      items[isShowing-1].component
    }
    </>
  );
}

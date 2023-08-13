import React ,{useState} from 'react'
import ContactAddTo from './ContactAddTo'
import ContactSmall from './ContactSmall'
import PopUp from "../../utility/PopUp"
import GroupSettings from './GroupSettings'
import ChannelSettings from './ChannelSetting'
export default function GroupChannelAdd({type}) {
    const [selected, setselected] = useState([]);
    const [openModel , setOpenModel] = useState(false);
  return (
    <div className='w-full h-full overflow-y-auto bg-color1'>
        <div className='text-text1 flex flex-row flex-wrap max-h-[200px] overflow-y-scroll'>
        {
            //for over selected and show contactsmall for each
            selected.map((x,i)=>
                <ContactSmall chatid={x} setselected={setselected}/>
            )
        }
        </div>
        <div className='text-text1 p-5'>
        {
            //if selected is empty show nothing
            selected.length==0?null:
            <div>
                <button className='w-[90%] h-12 rounded-xl bg-blue-400 text-white text-xl font-semibold' onClick={()=> setOpenModel(true)}>{type == "group" ? "ایجاد گروه" : "ایجاد کانال"}</button>
            </div>

        }
        </div>

        <div className=''>
            {[...Array(15)].map((x, i) =>
                <ContactAddTo chatid={i} addicon={true} selected={selected} setselected={setselected}/>
            )}
        </div>
        {
            openModel&&
            <PopUp title={type == "group" ? "ایجاد گروه" : "ایجاد کانال"} setIsModalOpen={setOpenModel}
            >
                {
                    type == "group" ? <GroupSettings selected={selected}/>
                    : <ChannelSettings selected={selected}/>

                }
            </PopUp>
        }
    </div>
  )
}

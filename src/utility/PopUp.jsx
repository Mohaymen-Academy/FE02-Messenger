import React from 'react'

export default function PopUp({children , title , setIsModalOpen}) {
  return (
    <div className=" fixed inset-0 z-20 m-[5%] flex items-center justify-center " id="modalOverlay">
        <div className="modal bg-color2 rounded-lg shadow-md p-4 w-[450px] h-[100%] relative border border-text1" role="dialog">
            <div className="modal-header flex justify-between items-center border-b border-bghovor pb-2 mb-4">
                <h3 className="text-lg font-semibold text-text1">{title}</h3>
                <button onClick={() => setIsModalOpen(false)} className="modal-close text-text1 text-2xl" id="modalCloseBtn">&times;</button>
            </div>
            <div className="relative flex flex-col px-4 py-3 left-0 h-[94%]  w-[100%] ">
                {children}
            </div>
        </div>
    </div>
  )
}

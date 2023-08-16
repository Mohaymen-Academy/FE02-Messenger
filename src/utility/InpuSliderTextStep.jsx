import React, { useRef, useState } from 'react';

export default function InpuSliderTextStep() {
  const inputslider = useRef(null);
  const [value, setvalue] = useState(1);

  return (
    <div className="w-[100%]">
            <div className='flex flex-col justify-center items-center my-5'>

      <input
        ref={inputslider}
        className="w-[92%] mb-5 h-1 bg-bghovor rounded-lg cursor-pointer range-sm accent-color4 "
        type="range"
        min="1"
        max="3"
        step="1"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
      <div className="flex flex-row justify-between text-text1 w-[90%]">
        <div className="sliderwithtext" onClick={(e) => setvalue(1)}>
          <p>فعال</p>
        </div>
        <div className="sliderwithtext" onClick={(e) => setvalue(2)}>
          <p>حداقل</p>
        </div>
        <div className="sliderwithtext" onClick={(e) => setvalue(3)}>
          <p>غیرفعال</p>
        </div>
      </div>
      </div>
    </div>
  );
}

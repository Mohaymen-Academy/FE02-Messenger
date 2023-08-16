import React, { useRef, useState } from 'react';

export default function InputSlider({title}) {
  const inputslider = useRef(null);
  const [value, setvalue] = useState(5);
  return (
    <div>
      <div className="flex flex-row justify-between text-text1 mx-3">
        <h2>{title}</h2>
        <p>{value}</p>
      </div>
      <div className='flex flex-col justify-center items-center my-5'>

      <input
        ref={inputslider}
        className="w-[95%] h-1 bg-bghovor rounded-lg cursor-pointer range-sm accent-color4 "
        type="range"
        min="1"
        max="10"
        step="1"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />      
      </div>

    </div>
  );
}

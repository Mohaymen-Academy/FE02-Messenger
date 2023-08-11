import React, { useRef, useState } from 'react';

export default function InputSlider({title}) {
  const inputslider = useRef(null);
  const [value, setvalue] = useState(5);
  return (
    <div>
      <div className="flex flex-row justify-between text-text1">
        <h2>{title}</h2>
        <p>{value}</p>
      </div>
      <input
        ref={inputslider}
        className="rounded-lg overflow-hidden appearance-none bg-blue-600 h-3 w-128 cursor-default w-[99%]"
        type="range"
        min="1"
        max="10"
        step="1"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
    </div>
  );
}

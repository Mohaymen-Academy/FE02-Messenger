import { useState } from 'react';
import React from 'react';
export default function RadioinputTimeFormat({ headers, subtitles, setters }) {
  const [format, setformat] = useState(0);
  const onOptionChange = (number) => {
    console.log();
    setformat(number);
  };
  return (
    <div className="flex flex-col gap-1">
      {headers.map((header, index) => {
        return (
          <button key={index} className="cursor-pointer p-3 " onClick={() => onOptionChange(index)}>
            <div className="cursor-pointer flex items-center gap-4">
              <input
              onChange={(e)=>console.log(e)}
                checked={format === index}
                id="default-radio-2"
                type="radio"
                value={index}
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 before:ring-none focus:ring-blue-500 "
              />
              <label className="cursor-pointer flex flex-col  ml-2 text-sm text-right font-medium text-gray-900 ">
                <h3>{header}</h3>
                <p className="opacity-70" style={{ fontSize: '10px' }}>
                  {subtitles[index]}
                </p>
              </label>
            </div>
          </button>
        );
      })}
    </div>
  );
}

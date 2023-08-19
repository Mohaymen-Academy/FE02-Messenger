import React from 'react';

export default function UploadFile({ imagebase64 }) {
  return (
    <div>
      <img
        src={`data:image/jpeg;base64,${imagebase64}`}
        className="h-[250px] w-[250px] rounded-lg"
      />
    </div>
  );
}

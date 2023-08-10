import React, { useEffect, useRef, useState } from 'react';

export default function Text({ content ,lower,upper}) {
  const textref = useRef(null);
  useEffect(() => {
    console.log();
  }, []);
  return (
    <span ref={textref} data-lower={lower} data-upper={upper}>
      {content}
    </span>
  );
}

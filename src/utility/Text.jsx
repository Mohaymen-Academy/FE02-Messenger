import React, { useEffect, useRef, useState } from 'react';

export default function Text({ content, lower, upper, id, style }) {
  const textref = useRef(null);
  useEffect(() => {
    console.log();
  }, []);
  return (
    <p data-id={id} ref={textref} data-lower={lower} data-upper={upper} className={`${style.join('')}`}>
      {content}
    </p>
  );
}

import React, { useEffect, useRef, useState } from 'react';

export default function Text({ content, lower, upper, id, style }) {
  // console.log('zarp',style)
  return (
    <p data-id={id} data-lower={lower} data-upper={upper} className={`${style.join('')}`}>
      {content}
    </p>
  );
}

import React, { useEffect, useRef, useState } from 'react';

export default function Text() {
  const divref = useRef(null);
  useEffect(() => {
    console.log();
  }, []);
  return (
    <div ref={divref} dir="auto">
      {/* <b> */}
        <span className="blur-sm">Te</span>
        {/* <b> */}
            <b>
            Te
            <span>
                sdf
                </b>xt
            </span>

        {/* </b> */}
      {/* </b> */}
    </div>
  );
}

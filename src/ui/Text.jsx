import React, { useEffect, useRef, useState } from 'react';

export default function Text({ content, lower, upper, id, style }) {
  console.error('zarp', style);

  const [styles, setstyles] = useState(style);

  return (
    <p
      onMouseDown={() => {
        console.error(styles);
        setstyles((prev) =>
          prev.map((style) =>
            style == 'spoiler' ? '!' + style : style == '!spoiler' ? 'spoiler' : style
          )
        );
      }}
      data-id={id}
      data-lower={lower}
      data-upper={upper}
      className={`${styles.join('')}`}>
      {content}
    </p>
  );
}

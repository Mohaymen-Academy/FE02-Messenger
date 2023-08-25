import React from 'react';
import { useSelector } from 'react-redux';
import ImagePreviewer from '../media-previewer/ImagePreviewer';
import { createPortal } from 'react-dom';
export default function PreviewrContainer() {
  const preview = useSelector((state) => state.SharedMedia.preview);

  return (
    <>
      {preview.open
        ? createPortal(
            <ImagePreviewer
              // handleClose={() => dispatch(resetPreview)}
              imageshow={preview.media} // Pass media content to the component
              massageId={preview.messageID}
            />,
            document.getElementById('zarp')
          )
        : null}
    </>
  );
}

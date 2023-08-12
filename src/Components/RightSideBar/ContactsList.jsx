import React from 'react'
import ContactCardPreview from './ContactCardPreview'
export default function ContactsList() {
  return (
    <div className='mt-4 w-full h-full overflow-y-auto bg-color1'>
          {[...Array(15)].map((x, i) =>
              <ContactCardPreview chatid={i} />
          )}
    </div>
  )
}

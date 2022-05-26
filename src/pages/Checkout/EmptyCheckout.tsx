import React from 'react'
import common from '../../wordings/wording.json'

export default function EmptyCheckout() {
  return (
    <div className='w-full p-2 h-40 flex flex-col text-center justify-center items-center mt-3'>
        <p>{common.error.title}</p>
        <p className='text-lg font-bold mt-3'>{common.error.subtitle}</p>
    </div>
  )
}

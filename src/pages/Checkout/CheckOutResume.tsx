import React from 'react'
import common from '../../wordings/wording.json'


export default function CheckOutResume() {
  return (
    <div className='text-lg font-bold text-gray-500'>
        <p>{common.checkout.item_queantity} <span className='text-black'> 4 </span></p>
        <p>{common.checkout.shipping_cost}  <span className='text-black'> 300$ </span></p>
        <p className='text-3xl mt-3'>{common.checkout.total} <span className='text-black'> 200$ </span></p>
    </div>
  )
}

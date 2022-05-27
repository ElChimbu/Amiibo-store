import React from 'react'
import LoaderIco from '../../components/card/LoaderIco'
import IncrementItems from '../../components/cart/quantitySelector'
import common from '../../wordings/wording.json'

type TCheckoutItems = {
  name: string,
  img: string, 
  units: number 
}

export default function CheckoutItems({name, img, units}: TCheckoutItems) {  
  return (
    <div className='mt-10 w-full h-auto  hover:bg-gray-200 flex flex-col lg:flex-row justify-around p-2 items-center'>
      <picture>
        <img className=' w-16 h-22' src={img} alt={name} />
      </picture>
      <div className='text-lg flex items-center'>
        <p className=' whitespace-nowrap'>
          {name}  
        </p>
      </div>
      <div className='flex whitespace-nowrap w-40'>
        <IncrementItems/>
      </div>
        <p className=''> x{units} {common.cart.unit} <span>(254.50$)</span></p>
    </div>
  )
}

import React, { useState} from 'react'
import IncrementItems from './quantitySelector'

type ICartItems = {
  name: string,
  quantity: number,
  price: number,
  totalPrice: number | undefined,
  img: string,
  headTail: string
}

export default function CartItems({name, quantity, price, totalPrice, img, headTail}: ICartItems){

  return(
    <div className='w-full h-20 bg-gray-200 flex justify-around p-1'>
      <picture>
        <img className='w-10 h-18' src={img} alt={name} />
      </picture>
      <div className='text-sm'>
        <p>
          {name}  
        </p>
        <p>x{quantity} <span>({quantity && quantity * price}$)</span></p>
        <IncrementItems quantity={quantity} headTail={headTail} />
      </div>
    </div>
  )
}




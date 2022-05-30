import React, { useState} from 'react'
import IncrementItems from './quantitySelector'
import Trash from './Trash'
import common from '../../wordings/wording.json'
import removeAction from '../../redux/action/removeAction'
import { useDispatch } from 'react-redux'

type ICartItems = {
  name: string,
  quantity: number,
  price: number,
  totalPrice: number | undefined,
  img: string,
  headTail: string
}

export default function CartItems({name, quantity, price, totalPrice, img, headTail}: ICartItems){
  const dispatch = useDispatch()

  function handleRemove () {
    dispatch(removeAction.remove(headTail) as any)
  }

  return(
    <div className='w-full h-20 bg-gray-200 hover:bg-gray-300 flex justify-around items-center p-1 text-center'>
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
      <button onClick={() => handleRemove()}
      title={common.cart.remove} 
      className='w-10 h-12 cursor-pointer rounded-sm flex items-center justify-center hover:text-white hover:bg-slate-800'>
      <Trash/>
      </button>
    </div>
  )
}



function dispatch(arg0: unknown) {
  throw new Error('Function not implemented.')
}


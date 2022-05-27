import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import LoaderIco from '../card/LoaderIco'
import IncrementItems from './quantitySelector'



type ICartItems = {
  name: string,
  quantity: number,
  price: number,
  totalPrice: number
  img: string
}

export default function CartItems({name, quantity, price, totalPrice, img}: ICartItems){
  const quantityItems = quantity !== 0 ? quantity : 0

  const [NewQuantity, setNewQuantity] = useState(0)

  function updatedUnits(unit: number){
    setNewQuantity(unit)
  }

  return(
    <div className='w-full h-20 bg-gray-200 flex justify-around p-1'>
      <picture>
        <img className='w-10 h-18' src={img} alt={name} />
      </picture>
      <div className='text-sm'>
        <p>
          {name}  
        </p>
        <p>x{NewQuantity !== 0 ? NewQuantity : quantity} <span>({totalPrice}$)</span></p>
        <IncrementItems updateUnits={updatedUnits} fixedNumber={quantityItems}/>
      </div>
    </div>
  )
}




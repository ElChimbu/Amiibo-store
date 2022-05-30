import classNames from 'classnames'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IncreaseAction from '../../redux/action/IncreaseDescrease'

type TCartIco = {
    cartColor?: string
  } 
  
export function CartIco({cartColor}: TCartIco) {
    return (
      <svg className={classNames(`w-10 h-10 ${cartColor !== "white" ? 'text-black': "text-white"} select-none`)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
          </path>
      </svg>
    )
  }

type TQuantity = {
  numberOfItems: number
}
  
export function CartQuantityPin ({numberOfItems}: TQuantity){
    return (
      <div className='w-7 h-7 -top-3 flex justify-center items-center -right-1 rounded-full bg-red-900 absolute'>
        <p className='text-white'>{numberOfItems}</p>
      </div>
    )
  }
export type TIncrementItems = {
    headTail? : string,
    quantity : number
    }

export default function IncrementItems({headTail, quantity} : TIncrementItems){
  
  const dispatch = useDispatch()
  const [Unit, setUnit] = useState(1)

  function handleIncrease (operationType : string) {    
    operationType === "increase" ? setUnit(quantity + 1) : setUnit(quantity - 1)
    dispatch(IncreaseAction.increase({
      headTail: headTail,
      quantity: Unit
    }) as any)
  }
  
    
    return (
    <div className='flex w-24 h-7 justify-between items-center'>
    <div 
    onClick={() => (handleIncrease("decrease"))}
    className='w-7 h-6 hover:bg-slate-800 hover:text-white bg-slate-400 flex justify-center items-center cursor-pointer'>
      -
    </div>
    <div>
      <p>
      {quantity}
      </p>
    </div>
    <div
     onClick={() => (setUnit(quantity ? quantity + 1 : 0 ), handleIncrease("increase"))}
     className='w-7 h-6 hover:bg-slate-800 hover:text-white bg-slate-400 flex justify-center items-center cursor-pointer'>
      +
    </div>
    </div>
  )
  }

import classNames from 'classnames'
import React, {useState} from 'react'

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
  
  type TIncrementItems = {
  fixedNumber? : number,
  updateUnits?: (unit: number) => void
  }
  
  export default function IncrementItems({fixedNumber, updateUnits}: TIncrementItems ){
    const [Unit, setUnit] = useState(0)
  
    return (
    <div className='flex w-full h-7 justify-between items-center'>
    <div 
    onClick={() => Unit >= 1 && setUnit(fixedNumber && Unit === 0 ? fixedNumber - 1 : Unit - 1)}
    className='w-7 h-6 hover:bg-slate-800 hover:text-white bg-slate-400 flex justify-center items-center cursor-pointer'>
      -
    </div>
    <div>
      <p>
      {fixedNumber && Unit === 0 ? fixedNumber : Unit }
      </p>
    </div>
    <div
     onClick={() => setUnit(fixedNumber && Unit === 0 ? fixedNumber + 1 : Unit + 1)}
     className='w-7 h-6 hover:bg-slate-800 hover:text-white bg-slate-400 flex justify-center items-center cursor-pointer'>
      +
    </div>
    </div>
  )
  }

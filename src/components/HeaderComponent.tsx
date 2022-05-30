import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import common from '../wordings/wording.json'
import { CartIco } from './cart/quantitySelector'

export default function Header() {

  const cartData = useSelector((state: any) => {
    return state.cartRoot.cart
   })
   
  return (
    <header className="sticky w-full shadow-md flex justify-between items-center bg-red-700 sm:px-10 select-none">
        <Link to={'/'}>
        <h1 className="font-extrabold text-white h-full w-full p-5">
          {common.title}
        </h1>
        </Link>
        <div title={common.product_resume.go_to_cart}>
          <Link to="/Checkout">
          <div className='relative'>
            {cartData.length > 0 && (
            <div className='w-3 h-3 -right-0 rounded-full animate-ping absolute bg-blue-900'/>
            )}
            <CartIco cartColor='white'/>
            </div>
          </Link>
        </div>
    </header>
  )
}

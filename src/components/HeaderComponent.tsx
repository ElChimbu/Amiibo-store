import React from 'react'
import { Link } from 'react-router-dom'
import common from '../wordings/wording.json'
import { CartIco } from './cart/quantitySelector'

export default function Header() {
  return (
    <header className="sticky w-full shadow-md flex justify-between items-center bg-white p-3 sm:px-10 select-none">
        <Link to={'/'}>
        <h1 className="font-extrabold">
          {common.title}
        </h1>
        </Link>
        <div title={common.product_resume.go_to_cart}>
          <Link to="/Checkout">
          <CartIco/>
          </Link>
        </div>
    </header>
  )
}

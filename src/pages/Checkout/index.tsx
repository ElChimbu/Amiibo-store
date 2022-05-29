import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../../components/HeaderComponent'
import common from '../../wordings/wording.json'
import CheckoutContent from './CheckoutContent'
import EmptyCheckout from './EmptyCheckout'

export default function CheckoutView() {
  const cartData = useSelector((state: any) => {
    return state.cartRoot.cart
   })  
   
  return (
    <div>
    <Header/>
    <div className='w-full p-5 lg:p-10 h-auto flex justify-center items-center select-none'>
        <div className='w-full lg:w-3/4 bg-white'>
            <p className='text-3xl font-bold text-center p-4 shadow-lg'>
            {common.checkout.title}
            </p>
            {
              cartData.length > 0 ? <>
            <CheckoutContent/> 
            <div className='w-full flex flex-col items-center lg:flex-row-reverse justify-around p-4 '>
             <Link to={'/End'}>
               <button className="w-auto h-auto p-4 mb-3 lg:mb-0 bg-green-700 hover:bg-green-900 text-white">
                {common.checkout.continue_with_payment_method}
                </button>
              </Link>
            </div>
              </> :
              <>
                <EmptyCheckout/>
              </>
            }
            <div className='w-full flex flex-col items-center lg:flex-row-reverse justify-around p-4'>
                <Link to={'/'}>
                <button className="w-auto h-auto p-4 bg-cyan-600 hover:bg-cyan-900 text-white">
                   {common.checkout.continue_shopping}
                </button>
                </Link>
                </div>
        </div>
    </div>
    </div>
  )
}

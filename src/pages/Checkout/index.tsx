import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/HeaderComponent'
import CheckoutItems from './CheckoutItems'
import CheckOutResume from './CheckOutResume'
import common from '../../wordings/wording.json'

export default function CheckoutView() {
  return (
    <div>
    <Header/>
    <div className='w-full p-10 h-auto flex justify-center items-center select-none'>
        <div className='w-3/4 bg-white'>
            <p className='text-3xl font-bold text-center p-4 shadow-lg'>
             Checkout
            </p>
            <div className='flex items-center justify-center mt-5 flex-col overflow-scroll overflow-x-hidden p-4 max-h-96'>
                <CheckoutItems/>
                <CheckoutItems/>
                <CheckoutItems/>
                <CheckoutItems/>
                <CheckoutItems/>
                <CheckoutItems/>
                <CheckoutItems/>
                <CheckoutItems/>
            </div>
            <div className='flex justify-end py-10 w-4/5'>
            <CheckOutResume/>
            </div>
            <div className='w-full flex justify-around p-4 '>
            <Link to={'/'}>
                <button className="w-auto h-auto p-4 bg-cyan-600 hover:bg-cyan-900 text-white">
                   {common.checkout.continue_shopping}
                </button>
                </Link>
                <Link to={'/End'}>
                <button className="w-auto h-auto p-4 bg-green-700 hover:bg-green-900 text-white">
                {common.checkout.continue_with_payment_method}
                </button>
                </Link>
            </div>
        </div>
    </div>
    </div>
  )
}

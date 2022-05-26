import React from 'react'
import CheckoutItems from './CheckoutItems'
import CheckOutResume from './CheckOutResume'

export default function CheckoutContent() {
  return (
    <>
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
            <div className='flex justify-center py-5 w-full'>
            <CheckOutResume/>
            </div>
    </>
  )
}

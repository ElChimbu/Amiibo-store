import React from 'react'
import LoaderIco from '../../components/card/LoaderIco'
import { CartItems, IncrementItems } from '../../components/CartComponent'

export default function CheckoutItems() {
  return (
    <div className='mt-10 w-full h-auto  hover:bg-gray-200 flex flex-col lg:flex-row justify-around p-2 items-center'>
      <picture>
        <LoaderIco/>
      </picture>
      <div className='text-lg flex items-center'>
        <p className=' whitespace-nowrap'>
          Falco Lombardi  
        </p>
      </div>
      <div className='flex whitespace-nowrap w-40'>
        <IncrementItems/>
      </div>
        <p className=''> x2 Units <span>(254.50$)</span></p>
    </div>
  )
}

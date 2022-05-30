import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartItems  from './CartItems'
import common from '../../wordings/wording.json'
import { IDescriptcion } from '../../pages/ItemResume/ItemDescription'

type TShowModal = {
items : any[]
}

export function ShowModal({items} : TShowModal){
    return (
      <div className='max-h-96 overflow-scroll overflow-x-hidden w-60 bg-gray-200 shadow-xl'>
        <p className='font-bold w-full flex justify-center py-2'>{common.cart.title}</p>
        {items.map((data : IDescriptcion) => {
          return  <div key={data.headTail}>
          <CartItems name={data.name} 
                            price={data.price} 
                            totalPrice={data.quantity && data.price * data.quantity} 
                            img={data.image} 
                            quantity={data.quantity ? data.quantity : 0}
                            headTail={data.headTail}
                            />
          </div>
        })}
        <p className=' text-center bg-black text-lg my-3'>{common.cart.total} <span className='text-black'> {"example"} </span></p>
        <Link to={'/Checkout'}>
        <button className='bg-green-700 whitespace-nowrap hover:bg-green-800 text-white text-lg w-full h-auto px-4 py-2'>
          {common.cart.continue}
        </button>
        </Link>
      </div>
    )
  }

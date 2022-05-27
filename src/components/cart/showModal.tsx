import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartItems  from './CartItems'
import common from '../../wordings/wording.json'
import { useSelector } from 'react-redux'
import { IDescriptcion } from '../../pages/ItemResume/ItemDescription'

type TShowModal = {
items : any[]
}

export function ShowModal({items} : TShowModal){
    const Unitprice = 200
    const quantity = 2
    return (
      <div className='max-h-96 overflow-scroll overflow-x-hidden w-60 bg-gray-200 shadow-xl'>
        <p className='font-bold w-full flex justify-center'>{common.cart.title}</p>
        {items.map((data : IDescriptcion) => {
          return <CartItems name={data.name} quantity={quantity} price={Unitprice} totalPrice={Unitprice * quantity} img={data.image}/>
        })}
        <p className=' text-center text-lg my-3'>{common.cart.total} <span className='text-black'> {Unitprice * quantity} </span></p>
        <Link to={'/Checkout'}>
        <button className='bg-green-700 whitespace-nowrap hover:bg-green-800 text-white text-lg w-full h-auto px-4 py-2'>
          {common.cart.continue}
        </button>
        </Link>
      </div>
    )
  }

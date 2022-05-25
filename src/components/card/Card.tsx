import React from 'react'
import { IncrementItems } from '../CartComponent'

type CardProps = {
img?: string
amiiboName?: string
price?: number
}

export default function Card({
  img,
  amiiboName,
  price,
}: CardProps) {
  return (
    <div className="w-64 shadow-lg h-full rounded-sm flex flex-col justify-center items-center bg-slate-50">
      <div className='h-auto w-auto hover:bg-gray-700 ease-in-out transition-opacity duration-75 z-0'>  
      <div className="cursor-pointer h-64 w-64 flex justify-center items-center p-7">
        <img className="w-64 h-64" src={img} alt={amiiboName} />
      </div>
      </div>
      <div className="text-center flex flex-col items-center">
        <h1 className="text-xl font-bold">{amiiboName}</h1>
        <p>{price} USD</p>
      </div>
      <div className="flex flex-col text-center pb-3 select-none">
          <IncrementItems/>
          <button className='h-auto w-auto bg-green-600 text-white p-3 mt-3'>View product</button>
          <button className='h-auto w-auto bg-sky-500 text-white p-3 mt-3'>Add to Cart</button>
      </div>
    </div>
  )
}
import React from 'react'
import { Link } from 'react-router-dom'
import LoaderIco from '../../components/card/LoaderIco'
import common from '../../wordings/wording.json'


type IDescriptcion = {
  name: string,
  type: string,
  price: number,
  image: string
} 

export default function ItemDescription({name, type, price, image} : IDescriptcion) {
  return (
    <div className='w-full p-10 h-auto flex justify-center items-center select-none'>
        <div className='w-3/4 bg-white'>
            <p className='text-3xl font-bold text-center p-4 shadow-lg'>
             {common.product_resume.title}
            </p>
            <div className='w-full flex sm:flex-col items-center justify-center'>
            <div className='flex items-center justify-around w-2/4 mt-5 overflow-x-hidden p-4 h-full'>
              <div>
                <div className='w-40 h-40 bg-gray-300 flex justify-center items-center mb-10'>
                  <img src={image} alt={name}/>
                </div>
              </div>
              <div className='font-bold h-40 flex flex-col justify-between'>
                <p>{common.product_resume.name} {name}</p>
                <p>{common.product_resume.type} {type}</p>
                <p>{common.product_resume.price} {price}$ </p>
              </div>
            </div>
            </div>
            <div className='flex justify-end py-10 w-4/5'>
            </div>
            <div className='w-full flex justify-around p-4 '>
            <Link to={'/'}>
                <button className="w-auto h-auto p-4 bg-cyan-600 hover:bg-cyan-900 text-white">
                   {common.checkout.continue_shopping}
                </button>
                </Link>
                <Link to={'/Checkout'}>
                <button className="w-auto h-auto p-4 bg-green-700 hover:bg-green-900 text-white">
                {common.product.add_to_cart}
                </button>
              </Link>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import LoaderIco from '../../components/card/LoaderIco'
import common from '../../wordings/wording.json'


type IDescriptcion = {
  name: string,
  type: string,
  gameSeries: string,
  price: number,
  image: string
} 

export default function ItemDescription({name, type, price, image, gameSeries} : IDescriptcion) {
  return (
    <div className='xl:w-full xl:p-10 h-auto flex sm:flex-col justify-center items-center select-none'>
        <div className='w-3/4 bg-white'>
            <p className='text-3xl font-bold text-center p-4 shadow-lg'>
             {common.product_resume.title}
            </p>
            <div className='w-full  flex flex-col lg:flex-row items-center justify-center'>
            <div className='flex flex-col lg:flex-row  items-center justify-around lg:w-2/4 mt-5 '>
              <div>
                <div className='w-auto lg:w-60 lg:h-60 h-auto p-2 bg-gray-300 flex justify-center mb-10'>
                  <img src={image} alt={name}/>
                </div>
              </div>
              <div className='font-bold h-20 lg:h-40 mb-7 lg:mb-0 flex flex-col justify-between'>
                <p>{common.product_resume.name} {name}</p>
                <p>{common.product_resume.game_series} {gameSeries}</p>
                <p>{common.product_resume.type} {type}</p>
              </div>
              <div className='flex flex-col items-center justify-center mb-2 lg:ml-10'>
                <p className='text-3xl mb-3 lg:mb-10'>{common.product_resume.price} {price}$ </p>
                <button className="w-auto h-auto p-4 bg-green-700 hover:bg-green-900 text-white">
                {common.product.add_to_cart}
                </button>
              </div>
            </div>
            </div>
            <div className='w-full flex flex-col lg:flex-row items-center justify-around p-4 '>
            <Link to={'/'}>
                <button className="w-auto h-auto mb-3 lg:mb-0 p-4 bg-cyan-600 hover:bg-cyan-900 text-white">
                   {common.checkout.continue_shopping}
                </button>
            </Link>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import LoaderIco from '../../components/card/LoaderIco'
import addToCartAction from '../../redux/action/addToCartAction'
import common from '../../wordings/wording.json'
import uniqBy from 'lodash/uniqBy'
import classNames from 'classnames'


export type IDescriptcion = {
  name: string,
  type: string,
  gameSeries: string,
  price: number,
  image: string,
  headTail: string,
  quantity?: number,
  added?: boolean
} 

export default function ItemDescription({name, type, price, image, gameSeries, headTail, added} : IDescriptcion) {
  const dispatch = useDispatch()

  function handleAdd () {
    dispatch(addToCartAction.addToCart(
      {
      name,
      type,
      price,
      image,
      gameSeries,
      headTail,
      quantity: 1,
    }
    ) as any)
  }

  return (
    <div className='lg:w-full lg:p-10 h-auto flex sm:flex-col justify-center items-center select-none'>
        <div className='w-3/4 bg-white p-4'>
            <p className='text-3xl font-bold text-center p-4 shadow-lg'>
             {common.product_resume.title}
            </p>
            <div className='w-full  flex flex-col lg:flex-row items-center justify-center'>
            <div className='flex flex-col lg:flex-row  items-center justify-around lg:w-2/4 mt-5 '>
              <div>
                <div className='w-full h-full p-4 rounded-sm bg-gray-300 flex justify-center mb-10'>
                  <img src={image} alt={name}/>
                </div>
              </div>
              <div className='font-bold h-auto mb-7 lg:mb-0 border-2 border-neutral-200 rounded-lg p-4'>
                <p>{common.product_resume.name} {name}</p>
                <p className='mt-3'>{common.product_resume.game_series} {gameSeries}</p>
                <p className='mt-3'>{common.product_resume.type} {type}</p>
                <p className='text-3xl my-3'>{common.product_resume.price} {price}$ </p>
                <button onClick={() => handleAdd()} className={classNames(`w-full h-auto p-4 mt-3 text-white ${added ? "bg-gray-700 pointer-events-none" : "bg-green-700 hover:bg-green-900"}`)}>
                {added ? common.product_resume.added_to_cart : common.product_resume.add_to_cart}
                </button>
                <div className='w-full flex flex-col lg:flex-row items-center justify-around p-4 '>
                <Link to={'/'}>
                  <button className="w-full h-auto mb-3 lg:mb-0 p-4 bg-cyan-600 hover:bg-cyan-900 text-white">
                    {common.checkout.continue_shopping}
                  </button>
                </Link>
            </div>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

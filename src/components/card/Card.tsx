import React, { useEffect, useState } from 'react'
import common from '../../wordings/wording.json'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IDescriptcion } from '../../pages/ItemResume/ItemDescription'


type CardProps = {
img: string
headtail: string
amiiboName: string,
amiiboSerie: string,
}



export default function Card({
  img,
  headtail,
  amiiboName,
  amiiboSerie
}: CardProps) { 
  
  const [added, setAdded] = useState(false)
  
  const cartData = useSelector((state: any) => {
    return state.cartRoot.cart
   })  

  useEffect(() => {
    if(cartData){
      cartData.filter((data: IDescriptcion) => {
        data.headTail === headtail && setAdded(true)
      })
    }}, [added, cartData])
    
  return (
    <div className="w-64 relative p-2 shadow-lg h-full rounded-sm flex flex-col justify-center items-center bg-slate-50 select-none">
      { added &&
      <div className='bg-red-700 left-0 absolute top-0 px-5 font-bold w-auto h-auto text-lg text-white text-center'>
        {common.product.in_cart}
      </div>
      }
      <div className='h-auto w-auto hover:bg-gray-700'>
      <Link to={`/description/${headtail}`}>
      <div className="cursor-pointer h-64 w-64 flex justify-center items-center p-7">
        <img className="w-64 h-64" src={img} alt={amiiboName} />
      </div>
      </Link>
      </div>
      <Link to={`/description/${headtail}`}>
      <div className="text-center flex flex-col items-center">
        <a className="text-xl font-bold cursor-pointer">{amiiboName}</a>
        <p className='text-sm font-bold text-gray-500'>{common.product.from} <span className='text-black'>{amiiboSerie}</span></p>
        <p></p>
      </div>
      </Link>
      <div className="flex flex-col text-center pb-3 select-none">
          <Link to={`/description/${headtail}`}>
          <button className='h-auto w-auto bg-green-600 hover:bg-green-700 text-white p-3 mt-3'>{common.product.view_product}</button>
          </Link>
      </div>
    </div>
  )
}
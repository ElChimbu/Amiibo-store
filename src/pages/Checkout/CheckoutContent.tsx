import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutItems from './CheckoutItems'
import CheckOutResume from './CheckOutResume'
import {IDescriptcion} from '../ItemResume/ItemDescription' 

export default function CheckoutContent() {
 const cartData = useSelector((state: any) => {
  return state.cartRoot.cart
 })
 
  return (
    <>
        <div className='flex items-center justify-center mt-5 flex-col overflow-scroll overflow-x-hidden p-4'>
               {
               cartData.map((data: IDescriptcion) => {
                return <CheckoutItems name={data.name} img={data.image} units={2} />
              })}
          </div>
            <div className='flex justify-center py-5 w-full'>
            <CheckOutResume/>
            </div>
    </>
  )
}

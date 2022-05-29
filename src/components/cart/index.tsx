import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { CartIco, CartQuantityPin } from './quantitySelector'
import { ShowModal } from './showModal'

export default function CartComponent() {
  
    const [showModal, setShowModal] = useState(false)
    const cartData = useSelector((state: any) => {
      return state.cartRoot.cart
     })
    
    return (
      <div className='flex flex-col flex-start select-none'>
      {showModal && 
      <div className='mb-5'>
      <ShowModal items={cartData}/>
      </div>
      }
      { cartData.length > 0 &&
      <div className='w-auto h-16 relative' onClick={() => setShowModal(!showModal)}>
      <div className='absolute right-0'>
        <div className='w-16 h-16 bg-gray-900 hover:bg-gray-800 rounded-full flex justify-center items-center cursor-pointer select-none'>
          <CartIco cartColor="white" />
        </div>
       <CartQuantityPin numberOfItems={cartData.length}/>
      </div>
      </div>
       }
      </div>
    )
  }
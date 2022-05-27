import React from 'react'
import { useSelector } from 'react-redux'
import CartComponent from '../../components/cart/index'
import Header from '../../components/HeaderComponent'
import Home from './Home'

export default function HomeIndex() {
  return (
    <div className="App">
      <Header/>
      <div className='flex flex-wrap justify-center p-4'>
      <Home />
      </div>
      <div className='fixed bottom-3 xl:right-5 right-0 z-50'>
      <CartComponent/>
      </div>
    </div>
  )
}

import React, {useState} from 'react'
import LoaderIco from './LoaderIco'


function CartIco() {
  return (
    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
		</path>
	</svg>
  )
}

function CartQuantityPin (){
  return (
    <div className='w-7 h-7 -top-3 -right-1 rounded-full bg-red-900 absolute'>
      <p className='text-white'>2</p>
    </div>
  )
}

export function IncrementItems(){
  const [Unit, setUnit] = useState(0)
return(
  <div className='flex w-full h-7 justify-between items-center'>
  <div 
  onClick={() => Unit >= 1 && setUnit(Unit - 1)}
  className='w-7 h-6 hover:bg-slate-800 hover:text-white bg-slate-400 flex justify-center items-center cursor-pointer'>
    -
  </div>
  <div>
    {Unit}
  </div>
  <div
   onClick={() => setUnit(Unit + 1)}
   className='w-7 h-6 hover:bg-slate-800 hover:text-white bg-slate-400 flex justify-center items-center cursor-pointer'>
    +
  </div>
  </div>
)

}

function CartItems(){
  return(
    <div className='w-full h-20 bg-gray-200 flex justify-around p-1'>
      <picture>
        <LoaderIco/>
      </picture>
      <div className='text-sm'>
        <p>
          Falco Lombardi  
        </p>
        <p>x2 Units <span>(254.50$)</span></p>
        <IncrementItems/>
      </div>
    </div>
  )
}

function ShowModal(){
  return (
    <div className='max-h-96 overflow-scroll overflow-x-hidden w-96 xl:w-60 bg-gray-200 shadow-xl'>
      <p className='font-bold'>Cart Preview</p>
      <CartItems/>
      
      <button className='bg-green-700 hover:bg-green-800 text-white text-lg w-full h-auto px-4 py-2'>
        Continue
      </button>
    </div>
  )
}


export default function CartComponent() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className='flex flex-col flex-start select-none'>
    {showModal && 
    <div className='mb-5'>
    <ShowModal/>
    </div>
    }
    <div className='w-auto h-16 relative' onClick={() => setShowModal(!showModal)}>
      <div className='absolute right-0'>
    <div className='w-16 h-16 bg-gray-900 hover:bg-gray-800 rounded-full flex justify-center items-center cursor-pointer'>
      <CartIco />
    </div>
      <CartQuantityPin/>
      </div>
    </div>
    </div>
  )
}

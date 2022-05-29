import React from 'react'

export default function ItemSkeletonLoading() {
  return (
    <div className='lg:w-full lg:p-10 h-auto flex sm:flex-col justify-center items-center select-none mt-10 lg:mt-0'>
        <div className='w-3/4 bg-white'>
            <div className='h-14 w-full animate-pulse bg-slate-300 shadow-lg'>
            </div>
            <div className='w-full flex flex-col lg:flex-row items-center justify-center'>
            <div className='flex flex-col lg:flex-row  items-center justify-around lg:w-2/4 mt-5 '>
              <div className='flex flex-col lg:flex-row w-full justify-between p-10'>
                <div className='w-72 h-72 p-4 animate-pulse bg-gray-300 flex justify-center '/>
            <div className='w-72 h-72 p-4 animate-pulse bg-gray-300 flex justify-center flex-col'>
                <div className='w-full h-8 animate-pulse bg-gray-500 mb-4 flex justify-center '/>
                <div className='w-3/4 h-8 animate-pulse bg-gray-500 mb-4 flex justify-center '/>
                <div className='w-2/4 h-8 animate-pulse bg-gray-500 mb-4 flex justify-center '/>
                 <div className='w-full h-12 animate-pulse bg-gray-500 mb-4 flex justify-center '/>
                <div className='w-full h-12 animate-pulse bg-gray-500 mb-4 flex justify-center '/>
              </div>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

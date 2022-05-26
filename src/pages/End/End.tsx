import React from 'react'
import Header from '../../components/HeaderComponent'
import common from '../../wordings/wording.json'


export default function End() {
  return (
    <div>
    <Header/>
    <div className='w-full p-5 lg:p-10 h-auto flex justify-center items-center select-none'>
        <div className='w-full lg:w-3/4 bg-white'>
            <p className='text-3xl font-bold text-center p-4 '>
             {common.end.title}
            </p>
            <p className='font-bold text-center p-4'>
            {common.end.subtitle}
            </p>
            <div className='w-full text-center bg-white mb-3'>
            <a href='https://github.com/ElChimbu/Amiibo-store' className='text-sm font-bold text-center whitespace-nowrap shadow-lg'>
            {common.end.link}
            </a>
            </div>
        </div>
    </div>
    </div>
  )
}

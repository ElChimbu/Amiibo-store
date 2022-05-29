import React from 'react'
import LoaderIco from './LoaderIco'


export default function SkeletonLoading() {
  return (
    <div className="m-4 animate-pulse w-64 shadow-lg h-full rounded-sm">
      <div className="p-5">
        <div className="pb-4">
          <div className="flex justify-center items-center animate-pulse h-56 w-full bg-gray-400">
            <LoaderIco />
          </div>
        </div>
        <div className="h-12 flex flex-col justify-between">
          <div className="animate-pulse w-full h-5 bg-gray-400" />
          <div className="animate-pulse w-full h-5 bg-gray-400" />
        </div>        
      </div>
    </div>
  )
}

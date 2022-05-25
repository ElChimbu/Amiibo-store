import React from 'react'
import CartComponent from './CartComponent'
import { Link, useParams } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky w-full shadow-md flex flex-col sm:flex-row justify-between items-center bg-white p-3 sm:px-10">
        <h1 className="font-extrabold">
          AMIIBO STORE
        </h1>
      <nav className="flex flex-row list-none select-none">
        
      </nav>
    </header>
  )
}

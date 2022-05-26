import React, { ReactElement } from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPlaceholder from './pages/Error/index'
import HomeIndex from './pages/Home'
import CheckoutView from './pages/Checkout'
import ItemResume from './pages/ItemResume'


function App(): ReactElement {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/Checkout" element={<CheckoutView/>} />
        <Route path="/Description/:id" element={<ItemResume/>} />
        <Route path="/" element={<HomeIndex/>} />
        <Route element={<ErrorPlaceholder/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/HeaderComponent';
import SkeletonLoading from './components/card/SkeletonLoading';
import CartComponent from './components/CartComponent';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='flex flex-wrap justify-center'>
      <Home />
      </div>
      <div className='fixed bottom-3 xl:right-5 right-0 z-50'>
      <CartComponent/>
      </div>
    </div>
  );
}

export default App;

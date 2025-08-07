import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage'
import MainPage2 from './Component 2/MainPage2/MainPage2';
import Cart from './Cart/Cart';
import { CartProvider } from './Context/CartContext';



export default function App() {
  return (
    <div>


    <CartProvider>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path='/FoodDelivery' element={<MainPage2/>}/>
          <Route path='/cart' element={<Cart/>}/>

        </Routes>
      </CartProvider>
     
      
    </div>
  )
}

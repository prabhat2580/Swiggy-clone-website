import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/hero/Hero'
import FoodCategory from './Components/Food Category/FoodCategory'
import Restaurents from './Components/Restaurents/Restaurents'
import Footer from './Components/Footer/Footer'
import FooterLast from './Components/FooterLast/FooterLast'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FoodCategory/>
      <Restaurents/>
      <Footer/>
      <FooterLast/>
    </div>
  )
}

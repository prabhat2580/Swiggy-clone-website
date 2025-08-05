import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage'
import MainPage2 from './Component 2/MainPage2/MainPage2';



export default function App() {
  return (
    <div>
    
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path='/Component2' element={<MainPage2/>}/>

        </Routes>
     
      
    </div>
  )
}

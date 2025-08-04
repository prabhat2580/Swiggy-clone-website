import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/hero/Hero'
import FoodCategory from './Components/Food Category/FoodCategory'
import Restaurents from './Components/Restaurents/Restaurents'
import Footer from './Components/Footer/Footer'
import FooterLast from './Components/FooterLast/FooterLast'
import SignInSidebar from './Components/SignInSidebar/SignInSidebar'

export default function App() {
  const [showLogin, setShowLogin]= useState(false);
  const [user, setUser] = useState(null);


  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setShowLogin(true);
    }
  }, []);

   // Handle login
  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setShowLogin(false);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setShowLogin(true);
  };

  return (
    <div>
      <Navbar setShowLogin={setShowLogin} onLogout={handleLogout} user={user}/>
      <Hero/>
      <FoodCategory/>
      <Restaurents/>
      <Footer/>
      <FooterLast/>
       {showLogin && <SignInSidebar onLogin={handleLogin} />}
    </div>
  )
}

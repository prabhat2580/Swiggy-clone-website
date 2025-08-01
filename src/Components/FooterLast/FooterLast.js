import React from 'react'
import './FooterLast.css'
import footerLinks from '../../Assets/Footer_data'

export default function FooterLast() {
  return (
    <div className='FooterLast-container'>

        <div className="image-box">  <img 
          src="https://cdn.pnggallery.com/wp-content/uploads/swiggy-logo-01.png" 
          alt="Swiggy Logo" 
        />
        <p>© 2025 Swiggy Limited</p></div>
        


        {footerLinks.map((section,index)=>(
            <div key={index} className='FooterLast-section'>
                <h4>{section.category}</h4>
                <ul>{section.links.map((link, i) => (
              <li key={i}>{link}</li>
            ))} </ul>

            

            </div>
            
              ))}
         <hr className="baseline" />

<div className="base-content">
  <h3>For better experience, download the Swiggy app now</h3>
  <div className="store-buttons">
    <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
      alt="App Store"
    />
    <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
      alt="Google Play"
    />
  </div>
</div>

    </div>
    
    
  )
}

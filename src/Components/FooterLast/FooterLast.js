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
  <a
    href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
      alt="App Store"
    />
  </a>

  <a
    href="https://play.google.com/store/apps/details?id=in.swiggy.android&pli=1"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
      alt="Google Play"
    />
  </a>
</div>

</div>

    </div>
    
    
  )
}

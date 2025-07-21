import React from 'react'
import "../footer/footer.css"
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosArrowRoundUp } from "react-icons/io";
import { Link } from 'react-router';
const Footer = () => {
   function ScrollToTop() {
     window.scrollTo({top:0, behavior:"smooth"})
   }

  return (
    <div className='footer-container'>
        <div className='footer-wrapper'>
            <div className='footer-wrapper-one'>
                <div className='footer-wrapper-one-first'>
                    <div className='footer-logo-wrapper'>
                       <h3 style={{color:"rgb(124,59,237)"}}>Mighty Ndubuizu</h3>
                    </div>
                    <div className='footer-logo-text-wrapper'>
                       <p className='footer-logo-text'>Frontend Developer crafting elegant and intuitive web experiences.</p> 
                    </div>
                </div>
                 <div className='footer-wrapper-one-second'>
                    <div className='footer-logo-wrapper'>
                       <h3>Quick Links</h3>
                    </div>
                    <div className='footer-logo-text-wrapper'>
                       
                        <ul className='footer-logo-text'>
                            
                     <li><a href="#about">About</a> </li>
                        <li><a href='#skill'>Skills</a></li>
                        <li><a href='#projectz'>Projects</a></li>
                        <li> <a href='#contact'>Contact</a></li>
                        </ul>
                        
                    </div>
                 </div>
                  <div className='footer-wrapper-one-third'>
                    <div className='footer-logo-wrapper'>
                       <h3>Connect</h3>
                    </div>
                    <div className='footer-logo-text-wrapper'>
                       <p className='footer-logo-text'>Mghtsolomon@gmail.com</p>
                       <p className='footer-logo-text'>Remote/Lagos NGR</p> 
                    </div>
                  </div>

            </div>
            <div className='footer-wrapper-two'>
              <div className='holder-two'>
                  <p>Crafted with <j className='love-icon'><MdFavoriteBorder /> </j> by Mighty Ndubuizu &copy;{new Date().getFullYear()}</p>
              </div>
              <div className='back-to-top'>
                 <p><IoIosArrowRoundUp /></p>
                 <p onClick={()=>ScrollToTop()}>Back to Top</p>
              </div>
            </div>

        </div>
      
    </div>
  )
}

export default Footer

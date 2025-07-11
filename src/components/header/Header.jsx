import React, {useState} from 'react'
import "../header/header.css"
import { IoMoonOutline, IoSunnyOutline, IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";




const Header = () => {
 
    const [toggle, setToggle] = useState(true)
      const [toggleburger, setToggleburger] = useState(true)
    
  return (
    <div className='header-container' >
      <div className='header-wrapper'>
        <div className='logo'>
            <a href=""> LOGO </a>
            <h3>Mighty's Portfolio</h3>
        </div>
        <div className='Nav'>
            <ul className='nav-bar'>
                <li> <a href="#home">Home</a></li>
                 <li><a href='#about'>About</a> </li>
                  <li><a href='#skill'>Skills</a></li>
                   <li><a href='#project' >Projects</a></li>
                    <li> <a href='#contact'>Contact</a></li>
            </ul>
            <div className='hire-me'>
                <h3 className='hire-me-text'>Hire me</h3>
                </div>
                <div className='toggleswitch'onClick={()=>setToggle(!toggle)}>
                    {
                        toggle ? <p><IoMoonOutline /></p> : <p><IoSunnyOutline size={22} /></p>
                    }
                  
                  
                </div>
                <div className='burger'onClick={()=>setToggleburger(!toggleburger)}>
                    {
                        toggleburger ?<p><RxHamburgerMenu /></p> : <p><IoClose size={28} /></p> 
                    }
                  
                 
                    
                </div>

        </div>
       

      </div>
    </div>
  )
}

export default Header

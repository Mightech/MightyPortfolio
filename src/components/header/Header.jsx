import React, {useState} from 'react'
import "../header/header.css"
import { IoMoonOutline, IoSunnyOutline, IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Drawer } from 'antd';
import { useTheme } from '../context/ThemeContext'; // Import the theme hook




const Header = () => {
      
    const [burger, setBurger] = useState(true)
       const [opendrawer, setOpenDrawer] = useState(false)
         const { theme, toggleTheme } = useTheme(); // Get theme and toggle function from context
    
    // Remove local toggle state - we'll use the theme context instead
    const isDarkMode = theme === 'dark';
    
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
                   <li><a href='#projectz' >Project</a></li>
                    <li> <a href='#contact'>Contact</a></li>
            </ul>
            <div className='hire-me'>
                <h3 className='hire-me-text' >Hire me</h3>
                </div>
                <div className='toggleswitch' onClick={toggleTheme}>
                        {isDarkMode ? 
                            <p><IoSunnyOutline size={22} /></p> : 
                            <p><IoMoonOutline /></p>
                        }
                  
                  
                </div>
                <div className='burger'onClick={()=>setBurger(!burger)}>
                 {
                  burger ? <p><RxHamburgerMenu onClick={()=>{
                    setBurger(true)
                    setOpenDrawer(true)
                  }} /></p> : <p><IoClose onClick={()=>{
                    setBurger(false)
                    setOpenDrawer(false)
                  }}/></p>

                 }   
                    
                    
                  
                 
                    
                </div>
                
                {
                  opendrawer ?
                
            
                  <div className='drawer-wrapper' >
                     <ul className='nav-bar-mobile' onClick={()=>{
                      setOpenDrawer(false)
                      setBurger(true)
                      }}>
                <li> <a href="#home">Home</a></li>
                 <li><a href='#about'>About</a> </li>
                  <li><a href='#skill'>Skills</a></li>
                   <li><a href='#projectz'>Project</a></li>
                    <li> <a href='#contact'>Contact</a></li>
            </ul>
                        <div className='hire-me-mobile'id='contact'>
                <a href='#contact'><h3 className='hire-me-text-mobile' onClick={()=>{
                      setOpenDrawer(false)
                      setBurger(true)
                      }}>Hire me</h3></a>
                </div>
                  </div> : "" }

                

            

        </div>
       

      </div>
    </div>
  )
}

export default Header

  import React from 'react'
import Header from './header/Header'

import Footer from './footer/Footer'
import { Outlet } from 'react-router'
import { useThemeEffect } from './context/useThemeEffect'
// import Landingpage from '../pages/landingpage/Landingpage'
  
  const Homeroute = () => {
          useThemeEffect();
    return (
  
      <div>
        <Header/>
        <Outlet/> 
        <Footer/>
        
      </div>
    )
  }
  
  export default Homeroute
  
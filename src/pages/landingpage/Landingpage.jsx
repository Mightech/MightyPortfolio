import React from 'react'
import "../landingpage/landingpage.css"
import { SlSocialLinkedin, SlSocialGithub, SlSocialTwitter } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { VscArrowDown } from "react-icons/vsc";
import { TbArrowDownToArc } from "react-icons/tb";
import 'animate.css';
import About from '../landingpage/About.jsx';
import AnimatedContent from '../AnimatedContent.jsx';
import Myskill from './Myskill.jsx';
import Myproject from './Myproject.jsx';
import Getintouch from './Getintouch.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Header from '../../components/header/Header.jsx';




const Landingpage = () => {
  return (
  
    <div className='landing-container'id='home'>
       <AnimatedContent
  distance={50}
  direction="vertical"
  reverse={false}
  duration={1.3}
  ease="power3.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1}
  threshold={0.1}
  delay={0}
>
      <div className='landing-wrapper'>
           <Header/>
      
        <div className='landing-wrapper-wrapper'>
       
              
          <div className='landing-title'>
            <h1 style={{fontFamily:"Poppins"}}>Hi, I'm Mighty Ndubuizu</h1>
          </div>
          <div  className='landing-sub-title'>
            <h4 className='text-sub-title'>A passionate <j style={{color:"rgb(124,59,237)"}}>Frontend Developer</j> specializing in creating beautiful, responsive, and user-friendly web experiences with modern technologies.</h4>
          </div>
          <div  className='landing-buttons'>
            <div className='view-work-btn'id='project'><h4>View My Work</h4></div>
            <div className='download-cv-btn'>
              <p className='download-icon'><TbArrowDownToArc /></p>
              <h4>Download CV</h4>
            </div>
          </div>
          <div  className='landing-social-icons'>
            <p className='github-icon'><SlSocialGithub /></p>
             <p className='github-icon'><SlSocialLinkedin /></p>
              <p className='github-icon'><SlSocialTwitter /></p>
                <p className='github-icon'><TfiEmail /></p>
          </div>
          <div  className='landing-down-arrow '>
            <p className='github-icon  '><VscArrowDown/></p>
          </div>

        </div>

      </div>
      </AnimatedContent>
      < ><About /> </>
      <> <Myskill/></>
      <><Myproject/></>
      <><Getintouch/></>
      <> <Footer/></>
      
    </div>
    
  )
}

export default Landingpage

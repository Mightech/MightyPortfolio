import React from 'react'
import "../landingpage/landingpage.css"
import { FiAward, FiUsers, FiSearch, FiCode } from "react-icons/fi";
import AnimatedContent from '../AnimatedContent.jsx';

const About = () => {
  return (
          <AnimatedContent
  distance={50}
  direction="vertical"
  reverse={false}
  duration={1.9}
  ease="power3.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1}
  threshold={0.1}
  delay={0}
>
    <div className='about-wrapper'id='about'>
    
     <div className='about-page-title-wrapper'>
        <div className='about-me'><h1 style={{fontFamily:"Poppins"}}> About <j style={{color:"rgb(124,59,237)"}}>Me</j></h1></div>
        <div className='about-me-subtext'><h4>I'm a dedicated Frontend Developer with a knack for creating elegant and efficient user interfaces. I transform ideas into interactive digital realities.</h4></div>
      
    </div>
    <div className='about-page-content-wrapper'>
        <div className='passion'>
                 <AnimatedContent
  distance={50}
  direction="horizontal"
  reverse={false}
  duration={1.9}
  ease="power3.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1}
  threshold={0.2}
  delay={0}
  
>
            <div className='passion-box'>
                <div className='passion-title'><h3>My Passion</h3></div>
                <div className='passion-subtext'>
                    <p>From the moment I wrote my first line of HTML, I was captivated by the power of code to bring ideas to life on the web. My journey has been one of continuous learning and a drive to build beautiful, performant, and accessible websites.</p>

                   <p> Outside of coding, I enjoy staying updated with the latest design trends, contributing to open-source, and exploring creative ways to enhance user interactions.</p>
                </div>

            </div>
            </AnimatedContent>
        </div>
        <div className='four-card'>
            <div className='box'>
                <div className='first-box'>
                    <div className='iconss-icons'><FiCode /></div>
                    <div className='iconss'><h3>Pixel Perfect</h3></div>
                    <div className='iconss-text'> Crafting precise, responsive UIs that match designs flawlessly across all devices.</div>
                </div>
                <div className='first-box'>
                    <div className='iconss-icons'><FiUsers /></div>
                    <div className='iconss'><h3>User-Centric</h3></div>
                    <div className='iconss-text'> Focusing on intuitive and engaging user experiences to meet user needs.</div>
                </div>
            </div>
            <div className='box'>
                <div className='first-box'>
                    <div className='iconss-icons'><FiSearch /></div>
                    <div className='iconss'><h3>Problem Solver</h3></div>
                    <div className='iconss-text'> Debugging and finding efficient solutions to complex frontend challenges

                    </div>
                </div>
                <div className='first-box'>
                    <div className='iconss-icons'><FiAward /></div>
                    <div className='iconss'><h3>Best Practices</h3></div>
                    <div className='iconss-text'> Writing clean, maintainable code following modern web standards and accessibility guidelines.</div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </AnimatedContent>
   
  )
}

export default About

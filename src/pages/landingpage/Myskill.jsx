import React from 'react'
import "../landingpage/landingpage.css"
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandJavascript, TbBrandCss3, TbBrandReact, TbBrandGithub   } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { IoFlashOutline } from "react-icons/io5";
import AnimatedContent from '../AnimatedContent.jsx';

const Myskill = () => {
     const cardData =[
        {
            Icons:<AiOutlineHtml5 />,
            title:'HTML5',
            level:'Advanced'
        },
          {
            Icons:<TbBrandCss3 />,
            title:'CSS3',
            level:'Advanced'
        },
         {
            Icons:<TbBrandJavascript />,
            title:'JavaScript (ES6+)',
            level:'Advanced'
        },
         {
            Icons:<TbBrandReact />,
            title:'React',
            level:'Advanced'
        },
          {
            Icons:<MdDesignServices />,
            title:'Responsive Design',
            level:'Expert'
        },
        {
            Icons:<TbBrandGithub />,
            title:'Git & GitHub',
            level:'Proficient'
        },
        {
            Icons:<IoFlashOutline />,
            title:'Performance Optimization',
            level:'Intermediate'
        },
    ] 
  return (
     <AnimatedContent
      distance={50}
      direction="vertical"
      reverse={false}
      duration={2.0}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={0.5}
    >
   
    <div className='myskill-wrapper'id='skill'>
        <div className='myskill-title-wrapper'>
            <div className='myskill-title-holder'style={{fontFamily:"Poppins"}}><h1>My <j style={{color:"rgb(124,59,237)"}}>Skills</j></h1></div>
            <div className='myskill-sub-title-holder'><h3>The technologies and tools I use to build responsive, high-performance web applications.</h3></div>
        </div>
        <div className='myskill-box-wrapper'>
            <div className='myskill-box-holder'>
                     {cardData.map((card,index)=>(
                <div className='myskill-box'key={index}>
                    <div className='myskill-icon'>{card.Icons}</div>
                    <div className='myskill-text'><h3>{card.title}</h3></div>
                    <div className='myskill-level'style={{color:"rgb(124,59,237)"}}><p>{card.level}</p></div>
                </div>
                     ))}  
            </div>
        </div>
        
        <div className='continous-learning-container'>
          <div className="continous-learning-wrapper">
            <div className='continous-learning-title'><h2 style={{color:"rgb(124,59,237)", fontFamily:"Poppins"}}>Continuous Learning</h2></div>
            <div className='continous-learning-subtitle'><p>The web development landscape is ever-evolving, and I'm committed to staying current. I actively explore new libraries, frameworks, and best practices to refine my skills and deliver cutting-edge solutions.</p></div>
          </div>
        </div>
      
    </div>
    </AnimatedContent>
  )
}

export default Myskill

import React from 'react'
import "../landingpage/landingpage.css"
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { LuGithub,LuLinkedin, LuTwitter, LuSend } from "react-icons/lu";
import AnimatedContent from '../AnimatedContent.jsx';
const Getintouch = () => {
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
          delay={0.15}
        >
    <div className='getintouch-wrapper'id='contact'>
        <div className='getintouch-wrapper-holder'>
            <div className='getintouch-wrapper-holder-one'>
                 <div className='getin-wrapper-text-holder-title'style={{fontFamily:"Poppins"}}><h1>Get in <j style={{color:"rgb(124,59,237)"}}>Touch</j></h1></div>
            <div className='getin-wrapper-text-holder-subtitle'><h4>Have a project idea or just want to connect? Feel free to reach out. I'm always open to discussing new opportunities and collaborations.</h4></div>
               
            </div>
            <div className='getintouch-wrapper-holder-two'>
                 <div className='getintouch-wrapper-holder-two-box'>
                    <div className='contact-us-box'>
                        <div className='contact-details-title'><h3 style={{color:"rgb(124,59,237)"}}>Contact Details</h3></div>
                        <div className='email-location-box'>
                            <div className='email-location-email-box'>
                                <div className='email-icon-box-holder'><p className='pp'><MdOutlineEmail style={{color:"rgb(124,59,237)"}}/></p></div>
                                 <div className='email-text-box-holder'>
                                    <h4>Email</h4>
                                    <p style={{color:"rgb(124,59,237)"}}>mghtsolomon@gmail.com</p>

                                      <div><p style={{color:"rgb(149,151,189)"}}>Reach out for collaborations or inquiries.</p></div>
                                     </div>
                               
                            </div>
                            <div className='email-location-location-box'>
                                <div className='email-icon-box-holder'><p className='pp'><GrLocation style={{color:"rgb(124,59,237)"}}/></p></div>
                                 <div className='email-text-box-holder'>
                                    <h4>Location</h4>
                                    <p style={{color:"rgb(124,59,237)"}}>Remote / Lagos, NGR</p>

                                      <div><p style={{color:"rgb(149,151,189)"}}>Available for remote opportunities globally.</p></div>
                                     </div>
                            </div>
                        </div>
                    </div>
                     <div className='online-connect-box'>

                              <div className='contact-details-title'><h3 style={{color:"rgb(124,59,237)"}}>Connect Online</h3></div>
                        <div className='email-location-box'>
                            <div className='email-location-email-box'>
                                <div className='email-icon-box-holder'><p className='ppp'><LuGithub style={{color:"rgb(124,59,237)"}}/></p></div>
                                 <div className='email-text-box-holder'>
                                    <h4>GitHub</h4>
                                    <p style={{color:"rgb(124,59,237)"}}>@Mightech</p>

                                     </div>
                               
                            </div>
                            <div className='email-location-email-box'>
                                <div className='email-icon-box-holder'><p className='ppp'><LuLinkedin  style={{color:"rgb(124,59,237)"}}/></p></div>
                                 <div className='email-text-box-holder'>
                                    <h4>LinkedIn</h4>
                                    <p style={{color:"rgb(124,59,237)"}}>@MightyNdubuizu</p>

                                     </div>
                               
                            </div>
                            <div className='email-location-location-box'>
                                <div className='email-icon-box-holder'><p className='ppp'><LuTwitter style={{color:"rgb(124,59,237)"}}/></p></div>
                                 <div className='email-text-box-holder'>
                                    <h4>Twitter</h4>
                                    <p style={{color:"rgb(124,59,237)"}}>@MightyNdubuizu</p>

                                    
                                     </div>
                            </div>
                        </div>

                     </div>
                 </div>
                <div className='getintouch-wrapper-holder-two-one-box'>
                    <div className='send-a-message-box'>
                        <div className='send-a-message-title'><h3>Send a Message</h3></div>
                        <div className='send-a-message-inputs'>
                            <div className='inputs-holders'>
                               <label> Your Name</label>
                            <input type="text"  placeholder='mighty ndubuizu' className='in'/>
                            </div>
                             <div className='inputs-holders'>
                               <label>Email Address</label>
                            <input type="email"  placeholder='Enter your email' className='in'/>
                            </div>
                            
                        <div className='inputs-holders'>
                               <label>Subject</label>
                            <input type="text"  placeholder='Project Inquiry'className='in'/>
                            </div>
                            
                            <div className='inputs-holderss'>
                               <label>Message</label>
                            <textarea type="text"  placeholder='Tell me about your project'className='inp'/>
                            </div>

                             <div className='send-a-message-btn-holder'>
                            <button className='send-a-message-btn'>
                                <p><LuSend /></p>
                                <p>Send Message</p>
                            </button>
                        </div>
                            
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
      
    </div>
    </AnimatedContent>
  )
}

export default Getintouch

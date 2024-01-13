import React from 'react'
import {motion} from 'framer-motion';

export default function Contact() {
  return (
    <motion.div>
      <section className="contact" id="contactMe">
            <h1 className="head">Contact Me</h1>
            <div className="contac">
            <motion.div className="sect "
            initial={{opacity:0, x: 0,y: 100}} 
            whileInView={{opacity:1, x: 0,y:0}} 
            transition={{duration:0.5}}
            >
              <div class="direct-contact-container ">

                <ul class="contact-list ">
                  <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="place">Thane, Maharashtra</span></i></li>
                  
                  
                  
                  <li class="list-item" ><i class="fa fa-envelope fa-2x"><span class="gmail"><a href="mailto:#" title="Send me an email" style={{color:"white"}}>ydubey7979@gmail.com</a></span></i></li>
                  
                </ul>

                <hr/>
                <ul class="social-media-list">
                  <a href='https://github.com/YashAPro1' target="_blank" class="contact-icon"><li>
                    <i class="fa fa-github" aria-hidden="true"></i></li></a>
                  
                
                  <a href="https://instagram.com/dubeyyash758" target="_blank" class="contact-icon"><li>
                    <i class="fa fa-instagram" aria-hidden="true"></i></li> </a>
                      

                  <a href="https://www.linkedin.com/in/yashkumar-dubey-716933222" target="_blank" class="contact-icon">
                    <li><i class="fa fa-linkedin" aria-hidden="true"></i>
                  </li>  </a>     
                </ul>
                <hr/>

       
              </div>

            </motion.div>
            </div>
        </section>
        <div className="footer">
          <h2>Made by Yashkumar Dubey.</h2>
        </div>
    </motion.div>
  )
}

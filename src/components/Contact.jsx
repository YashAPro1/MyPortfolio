import React from 'react'
import {motion} from 'framer-motion';

export default function Contact() {
  return (
    <motion.div>
      <section className="contact" id="contactMe">
            <h1 className="head">Contact Me</h1>
            <div className="contac">
            <motion.div className="sect "
            initial={{opacity:0, x: 50,y: 100}} 
            whileInView={{opacity:1, x: 0,y:0}} 
            transition={{duration:0.5}}
            >
              <div class="direct-contact-container ">

                <ul class="contact-list ">
                  <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Thane, Maharashtra</span></i></li>
                  
                  
                  
                  <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">sanyashd2654@gmail.com</a></span></i></li>
                  
                </ul>

                <hr/>
                <ul class="social-media-list">
                  <li><a href='/' target="_blank" class="contact-icon">
                    <i class="fa fa-github" aria-hidden="true"></i></a>
                  </li>
                
                  <li><a href="/" target="_blank" class="contact-icon">
                    <i class="fa fa-instagram" aria-hidden="true"></i></a>
                  </li>      

                  {/* <li><a href="#" target="_blank" class="contact-icon">
                    <i class="fa fa-linkidln" aria-hidden="true"></i></a>
                  </li>        */}
                </ul>
                <hr/>

       
              </div>

            </motion.div>
            </div>
        </section>
    </motion.div>
  )
}

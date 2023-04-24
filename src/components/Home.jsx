import React from 'react'
import {motion} from 'framer-motion';

import image from "../assets/pimg.jpg";
export default function Home({setInHome}) {
 
  return (
    <motion.div 
      initial={{opacity:0, x: 200,y: 100}} 
      whileInView={{opacity:1, x: 0,y:0}} 
      transition={{duration:0.5}}
    >
      <section className="home" id="home">
            
            <div className="homeImg" style={{display:"none"}}>
                <img src={image} alt="" style={{margin:"5px"}}/>
                <h2 className="name">Yashkumar Dubey</h2>
                
            </div>
            <h1 className="headertag">Welcome Here!</h1>
            <p>I'm a web developer, android developer and machine learning enthusiast, who is really passionate about data and obtaining 
              insights from it and developing things in technological world. A cup of coffee, listening to melody songs and coding late at night 
              is what drives me in it.
               </p>
               <motion.div
                initial={{opacity:0,y: 100}} 
                whileInView={{opacity:1, x: 0,y:0}} 
                transition={{duration:1}}
               >

            <a href="#about" className=" Btn ">About me</a>
               </motion.div>
            {/* <Link to="#about" class=" Btn aboutBtn">About me</Link> */}
        </section>
    </motion.div>
  )
}

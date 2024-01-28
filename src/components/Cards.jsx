import React from 'react'
import {motion } from 'framer-motion';
export default function Cards(props) {
  
  return (
    <motion.div 
    initial={{opacity:0, x: 0,y:100}} 
    whileInView={{opacity:1, x: 0,y:0}} 
    transition={{duration:0.5}}
    
    >
    <a href={props.ssrc} target='_blank'>
      <motion.div  className="box" style={{borderRadius:"1rem"}} >

        <img src={props.imgsrc} className="img1" alt="" style={{width:'100%'}}/>
        <h3 className= "boxh">{props.name}</h3>

      </motion.div >
    </a>
    </motion.div>
  )
}


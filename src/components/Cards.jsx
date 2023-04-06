import React from 'react'
import {motion } from 'framer-motion';
export default function Cards(props) {
  
  return (
    <motion.div 
    initial={{opacity:0, x: -100,y:-100}} 
    whileInView={{opacity:1, x: 0,y:0}} 
    transition={{duration:1}} 
    >
      <motion.div  className="box">
                    <h3 style={{color: '#1F51FF'}}>{props.name}</h3>
                    <a href={props.ssrc}><img src={props.imgsrc} className="img1" alt="" style={{width:'100%',height:'400px'}}/></a>
                </motion.div >
    </motion.div>
  )
}


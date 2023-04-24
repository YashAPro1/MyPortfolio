import React from 'react'
import {motion} from 'framer-motion'
export default function Skillbar(props) {
  return (
    <motion.div
    initial={{opacity:0, x: 0,y:-100}} 
    whileInView={{opacity:1, x: 0,y:0}} 
    transition={{duration:1}} 
    >
      <div className="skill">
                  <div className="skill-name">{props.name}</div>
                  <div className="skill-bar">
                    <div className="skill-per" per={props.per} style={{maxWidth:`${props.maxwidth}`}}></div>
                  </div>
                </div>
    </motion.div>
  )
}

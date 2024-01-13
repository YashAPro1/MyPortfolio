import React from 'react'
// import { a } from 'react-router-dom';
import {motion} from 'framer-motion';
export default function Education() {
  return (
    <motion.div>
      <section className="education" id="Education">
            <h1 className="head">My Education</h1>
            <motion.div className="sect"
                
            >
                
            <a className="fulldiv" href="https://kjsieit.somaiya.edu.in/en" target='blank'>
            <motion.div className="UnderCollege"
            initial={{opacity:0, x: 0,y: 100}} 
            whileInView={{opacity:1, x: 0,y:0}} 
            transition={{duration:1}} >
                    
                <h2>K J SOMAIYA INSTITUTE OF TECHNOLOGY.</h2>
                <h4>Bachelor's in Computer Science</h4>
                <h5>Avg GPA: 10 CGPA</h5>
                      
                    
                    
                
                </motion.div>
                </a>
                <a className="fulldiv" href="http://pacejuniorsciencecollege.com/pace-jr-science-college-thane.php" target='blank'>
                <motion.div className="College"
                initial={{opacity:0, x: 0,y: 100}} 
                whileInView={{opacity:1, x: 0,y:0}} 
                transition={{duration:1.5}} 
                >
                    
                    <h2>PACE JUNIOR SCIENCE COLLEGE.</h2>
                    <h4>12th Grade.</h4>
                    <h5>Pecentage: 89.5%</h5>
                    
                </motion.div>
                </a>
                <a className="fulldiv" href="https://padmavativenkatesh.in/" target='blank'>
                <motion.div className="School"
                initial={{opacity:0, x: 0,y: 100}} 
                whileInView={{opacity:1, x: 0,y:0}} 
                transition={{duration:1.5}} 
                >
                    
                        <h2>PADMAVATI VENKATESH HIGH SCHOOL AND JUNIOR COLLEGE.</h2>
                        <h4>PADMAVATI VENKATESH HIGH SCHOOL AND JUNIOR COLLEGE.</h4>
                        <h5>Pecentage: 77%</h5>
                    
                </motion.div>
                </a>
            </motion.div>
        </section>
    </motion.div>
  )
}

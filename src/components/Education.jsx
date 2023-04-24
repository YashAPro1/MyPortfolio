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
                

                <motion.div className="UnderCollege s"
                initial={{opacity:0, x: 0,y: -100}} 
                whileInView={{opacity:1, x: 0,y:0}} 
                transition={{duration:1}} 
                >
                    <a href="https://kjsieit.somaiya.edu.in/en">
                        <h2><span>BTech: </span>K J SOMAIYA INSTITUTE OF TECHNOLOGY.</h2>
                    </a>  
                    <div className="underedu">

                    <motion.table className='table'>
                                    <tbody>
                                        <tr>
                                            <th>Semester</th>
                                            <th>CGPA</th>
                                            
                                        </tr>
                                        <tr>
                                        <th>1st</th>
                                        <th>10</th>
                                        </tr>
                                        <tr>
                                        <th>2nd</th>
                                        <th>10</th>
                                        </tr>
                                        <tr>
                                        <th>3rd</th>
                                        <th>10</th>
                                        </tr>
                                    </tbody>
                                </motion.table>    
                    </div>
                    
                
                </motion.div>
                <motion.div className="College s"
                initial={{opacity:0, x: -200,y: 100}} 
                whileInView={{opacity:1, x: 0,y:0}} 
                transition={{duration:1.5}} 
                >
                    <a href="http://pacejuniorsciencecollege.com/pace-jr-science-college-thane.php">
                        <h2><span>College: </span>PACE JUNIOR SCIENCE COLLEGE.</h2>
                    </a>
                    <div className="underedu">
                    <motion.table className='table'>
                                    <tbody>
                                        <tr>
                                            <th>Hsc</th>
                                            <th>Percentage</th>
                                            
                                        </tr>
                                        <tr>
                                        <th>12th</th>
                                        <th>89.50%</th>
                                        </tr>
                                        
                                    </tbody>
                                </motion.table>    
                                </div>
                </motion.div>
                <motion.div className="School s"
                initial={{opacity:0, x: -200,y: 100}} 
                whileInView={{opacity:1, x: 0,y:0}} 
                transition={{duration:1.5}} 
                >
                    <a href="https://padmavativenkatesh.in/">
                        <h2><span>School: </span>PADMAVATI VENKATESH HIGH SCHOOL AND JUNIOR COLLEGE.</h2>
                    </a>
                </motion.div>

            </motion.div>
        </section>
    </motion.div>
  )
}

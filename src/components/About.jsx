import React from 'react'
// import { Link } from 'react-router-dom';
// import FileSaver from 'file-saver';
import {motion} from 'framer-motion';
import Resume from './resume.pdf';

export default function About() {

  

  // const saveFile = () => {
  //   FileSaver.saveAs(
  //     process.env.REACT_APP_CLIENT_URL + "./resume.pdf",
  //     "resume.pdf");}
  return (
    <motion.div>
      <section className="about" id="about">
            <h1 className="head">About me</h1>
            <motion.div className="sect"
            
            >
                <div className="aboutme">
                    <h2><span>Name: </span>Yashkumar Sanjaykumar Dubey</h2>
                    <h2><span>Qualification: </span>Current Pursing Btech</h2>
                    <h2><span>College: </span>K J Somaiya Institute Of Technology</h2>
                    <h2><span>Age: </span>20yrs</h2>
                    <div>
                      <h2><span>Experience</span></h2>
                    </div>
                    <h2><span class="material-symbols-outlined">
                      subdirectory_arrow_right
                      </span><a className="anchor" href='https://nss.gov.in/'>National Service Scheme(NSS) volunteer</a></h2>
                    <h2><span class="material-symbols-outlined">
                      subdirectory_arrow_right
                      </span><a className="anchor" href='https://csikjsce.org/'>CSI Technical team member</a></h2>
                    <h2><span class="material-symbols-outlined">
                      subdirectory_arrow_right
                      </span>New Leap Initiative(NLI) club member</h2>
                    <motion.div
                       initial={{opacity:0,x:320}} 
                       whileInView={{opacity:1, x: 0,y:0}} 
                       transition={{duration:0.5}}
                    >

                    <form action={Resume} method="get">
                    <button  href={Resume} className="Btn " style={{display:"flex",textAlign:"center"}} >MyResume
                    <span className="material-symbols-outlined" >
                    download
                      </span></button></form>
                    </motion.div>
                    
                    
                    {/* <button className="Btn" onClick={saveFile}>Download!</button> */}

                    
                </div>
            </motion.div>
        </section>
    </motion.div>
  )
}

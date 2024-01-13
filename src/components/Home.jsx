  import React from 'react'
  import {motion} from 'framer-motion';
  import Resume from './resume.pdf';
  import image from "../assets/favicon.png";
  import About from './About';
  import Education from './Education';
  import Project from './Project';
  import Blogs from './Blogs';
  import Contact from './Contact';
  import Skill from './Skill';
  export default function Home({setInHome}) {
  
    return (
      <>
      <motion.div 
        initial={{opacity:0, x: 200,y: 100}} 
        whileInView={{opacity:1, x: 0,y:0}} 
        transition={{duration:0.5}}
      >
        <section className="home" id="home">
              
              <div className="homeImg" style={{display:"flex"}}>
                  <img src={image} alt="" style={{margin:"5px"}}/>
                  <div className="namediv">
                    <div>

                    <h2 className="name">Hi, I'm </h2>
                    <h2 className="name">Yashkumar Dubey</h2>
                    <h5 className="name">A Software Developer | Machine Learning Engineer | Artificial Intelligence | Data Science | Full Stack  </h5>
                    </div>
                  </div>
                  
              </div>
              <h1 className="headertag">Welcome To My Universe!</h1>
              <div className="infocard" style={{width:"100%"}}>
                <div className="quot" style={{width:"100%"}}>
                <p>
                  I'm passionate about continuous learning and driven to embrace emerging technologies, I am dedicated to cultivating a growth mindset as a developer. Committed to expanding my skill set, I thrive on challenges that push me beyond my comfort zone.
                </p>
                </div>
                <div className="cardss">
                  <div className="crdd">
                    <h3>Data Science/AIML</h3>
                  </div>
                  <div className="crdd">
                    <h3>Web Development</h3>
                  </div>
                  <div className="crdd">
                    <h3>Android </h3>
                  </div>
                  <div className="crdd">
                    <h3>BlockChain</h3>
                  </div>
                </div>
              </div>
              
              
                <motion.div
                  initial={{opacity:0,y: 100}} 
                  whileInView={{opacity:1, x: 0,y:0}} 
                  transition={{duration:1}}
                >
                  <form action={Resume} method="get" target= "blank" className="Btn">
                      <button  href={Resume}  style={{display:"flex",textAlign:"center",background:"transparent", color:"white"}} >MyResume
                      <span className="material-symbols-outlined" >
                      download
                        </span></button></form>
              {/* <a href="#about" className=" Btn">About me</a> */}
                </motion.div>
              {/* <Link to="#about" class=" Btn aboutBtn">About me</Link> */}
          </section>

      </motion.div>
      <About/>
      {/* <Education/> */}
      <Project/>
      <Blogs/>
      <Skill/>
      <Contact/>
      </>
    )
  }

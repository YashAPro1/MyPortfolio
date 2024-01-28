import React from 'react'

// import fc from '../assets/fc.mp4';
import datasciimg from "../assets/DSprojects.jpeg"
import webimg from "../assets/allwebdev.jpeg"
import andimg from "../assets/allandroidimg.jpeg"
import pythonimg from "../assets/allpythonProjects.jpeg"
import {Link} from "react-router-dom"
import Card from './Cards';

import {motion} from 'framer-motion';


export default function Project() {
  return (
    <motion.div>
      <section className="Projects" id="Projects">
            <h1 className="head">My Projects</h1>
            <Link to="/MyPortfolio/datascience">
                <div className="alltopics" style={{margin:"3rem",border:"1px solid #333",padding:"1rem",width:"90%"}}>
                    <div className="strcard" style={{display:"flex",flexDirection:"row",}}>
                        <img src={datasciimg} alt="" style={{width:"15%",borderRadius:"1rem"}}/>
                        <div>
                            <h3 style={{marginLeft:"2rem"}}>Data Science | AI | ML Projects </h3>
                            <p style={{width:"100%",marginTop:"1rem",marginLeft:"2rem"}}>Here I have made all the Data Science and Ml related projects</p>

                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/MyPortfolio/web">
                <div className="alltopics" style={{margin:"3rem",border:"1px solid #333",padding:"1rem",width:"90%"}}>
                    <div className="strcard" style={{display:"flex",flexDirection:"row"}}>
                        <img src={webimg} alt="" style={{width:"15%",borderRadius:"1rem"}}/>
                        <div>
                            <h3 style={{marginTop:"1rem",marginLeft:"2rem"}}>Web Development Projects </h3>
                            <p style={{width:"100%",marginTop:"1rem",marginLeft:"2rem"}}>All my Websites that I have made you can see here..</p>
                        </div>
                        
                    </div>
                </div>
            </Link>
            <Link to="https://github.com/YashAPro1/Python-Projects" target='_blank'>
            <div className="alltopics" style={{margin:"3rem",border:"1px solid #333",padding:"1rem",width:"90%"}}>
                <div className="strcard" style={{display:"flex",flexDirection:"row",}}>
                    <img src={pythonimg} alt="" style={{width:"15%",borderRadius:"1rem"}}/>
                    <div>
                            <h3 style={{marginTop:"1rem",marginLeft:"2rem"}}>Python Projects </h3>
                            <p style={{width:"100%",marginTop:"1rem",marginLeft:"2rem"}}>All my Python Projects you can see here..</p>
                        </div>
                </div>
            </div>
            </Link>
            <Link to="">
            <div className="alltopics" style={{margin:"3rem",border:"1px solid #333",padding:"1rem",width:"90%"}}>
                <div className="strcard" style={{display:"flex",flexDirection:"row",}}>
                    <img src={andimg} alt="" style={{width:"15%",borderRadius:"1rem"}}/>
                    <div>
                            <h3 style={{marginTop:"1rem",marginLeft:"2rem"}}>Android Development Projects </h3>
                            <p style={{width:"100%",marginTop:"1rem",marginLeft:"2rem"}}>All my App Projects you can see here..</p>
                        </div>
                </div>
            </div>
            </Link>
            
            {/* <div className="sect">
                <Card
                    name='ToDo Cards'
                    imgsrc={Todo}
                    ssrc='https://yashapro1.github.io/Todo-Cards/'
                />
            </div> */}
        </section>
    </motion.div>
  )
}

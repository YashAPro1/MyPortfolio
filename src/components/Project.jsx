import React from 'react'
import Jigyaasa from '../assets/jigyassa.jpg';
import Auto from '../assets/automated_mail.jpg';
// import fc from '../assets/fc.mp4';
import ml from '../assets/mlprojimg.webp';
import Tic from '../assets/tictactoe.jpeg';
import ponggame from '../assets/ponggame.png';
import Snake from '../assets/snakegameproj.png';
import Todo from '../assets/Todocards.png';
import datasciimg from "../assets/dataimg.png"
import webimg from "../assets/webdev.jpg"
import andimg from "../assets/androidimg.jpg"
import pythonimg from "../assets/pythonimg.png"
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
                        <img src={datasciimg} alt="" style={{width:"15%",height:"100px"}}/>
                        <h3 style={{width:"50%",height:"100%",marginTop:"1rem",marginLeft:"1rem"}}>Data Science | AI | ML Projects </h3>
                    </div>
                </div>
            </Link>
            <Link to="/MyPortfolio/web">
                <div className="alltopics" style={{margin:"3rem",border:"1px solid #333",padding:"1rem",width:"90%"}}>
                    <div className="strcard" style={{display:"flex",flexDirection:"row",}}>
                        <img src={webimg} alt="" style={{width:"15%",height:"100px"}}/>
                        <h3 style={{width:"50%",height:"100%",marginTop:"1rem",marginLeft:"1rem"}}>Web Development Projects </h3>
                    </div>
                </div>
            </Link>
            <Link to="">
            <div className="alltopics" style={{margin:"3rem",border:"1px solid #333",padding:"1rem",width:"90%"}}>
                <div className="strcard" style={{display:"flex",flexDirection:"row",}}>
                    <img src={andimg} alt="" style={{width:"15%",height:"100px"}}/>
                    <h3 style={{width:"50%",height:"100%",marginTop:"1rem",marginLeft:"1rem"}}>App Development Projects </h3>
                </div>
            </div>
            </Link>
            <Link to="https://github.com/YashAPro1/Python-Projects" target='_blank'>
            <div className="alltopics" style={{margin:"3rem",border:"1px solid #333",padding:"1rem",width:"90%"}}>
                <div className="strcard" style={{display:"flex",flexDirection:"row",}}>
                    <img src={pythonimg} alt="" style={{width:"15%",height:"100px"}}/>
                    <h3 style={{width:"50%",height:"100%",marginTop:"1rem",marginLeft:"1rem"}}>Python Projects </h3>
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

import React from 'react'
import Jigyaasa from '../assets/jigyassa.jpg';
import Auto from '../assets/automated_mail.jpg';
// import fc from '../assets/fc.mp4';
import Card from './Cards';
import mlimg from "../assets/ml.jpeg"
import cicd from "../assets/cicd.jpeg"
import { Link } from 'react-router-dom';
import tocards from "../assets/tocards.png"
import algo from "../assets/algo.png"
import feed from "../assets/feedback.png"
import award from "../assets/awards.png"
import {motion} from 'framer-motion';


export default function WebProject() {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth',
      });
  return (
    <motion.div>
      <section className="Blogs" id="Blogs">
            <h1 className="head">Web Development Projects</h1>
            
            <div className="sect">
                <Card
                    name='Somaiya Awards'
                    imgsrc={award}
                    ssrc='https://algo-vlab.kjsieit.com/'
                />
                <Card
                    name='Algorithm Virtual Lab'
                    imgsrc={algo}
                    ssrc='https://algo-vlab.kjsieit.com/'
                />
                <Card
                    name='FeedBack Management System'
                    imgsrc={feed}
                    ssrc='https://github.com/Faculty-FeedbackPortal'
                />
                <Card
                    name='Todo Cards'
                    imgsrc={tocards}
                    ssrc='https://todocards.onrender.com/'
                />
                <Card
                    name='Jigyaasa'
                    imgsrc={Jigyaasa}
                    ssrc='https://github.com/YashAPro1/Jigyaasa'
                />
            </div>
        </section>
        <Link to="/MyPortfolio#Projects">   
        <span className="material-symbols-outlined" id="backbtn">
        arrow_back
        </span>
        </Link>
    </motion.div>
  )
}

import React from 'react'
import Jigyaasa from '../assets/jigyassa.jpg';
import Auto from '../assets/automated_mail.jpg';
// import fc from '../assets/fc.mp4';
import Card from './Cards';
import mlimg from "../assets/ml.jpeg"
import cicd from "../assets/cicd.jpeg"
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';


export default function Android() {
  return (
    <motion.div>
      <section className="Blogs" id="Blogs">
            <h1 className="head">Android Projects</h1>
            
            <div className="sect">
                <Card
                    name='Unravelling Wonders of Machine Learning'
                    imgsrc={mlimg}
                    ssrc='https://blogwithdubey.hashnode.dev/unraveling-the-wonders-of-machine-learning?source=more_articles_bottom_blogs'
                />
                <Card
                    name='Automating With CI/CD Pipeline'
                    imgsrc={cicd}
                    ssrc='https://blogwithdubey.hashnode.dev/automating-with-cicd-pipeline'
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

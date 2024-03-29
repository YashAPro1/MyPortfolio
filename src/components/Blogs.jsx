import React from 'react'
// import fc from '../assets/fc.mp4';
import Card from './Cards';
import mlimg from "../assets/ml.jpeg"
import cicd from "../assets/cicd.jpeg"
import rlhf from "../assets/rlhf.jpeg"
import {motion} from 'framer-motion';


export default function Blogs() {
  return (
    <motion.div>
      <section className="Blogs" id="Blogs">
            <h1 className="head">Blogs</h1>
            
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
                <Card
                    name='Reinforcement Learning with Human Feedback'
                    imgsrc={rlhf}
                    ssrc='https://blogwithdubey.hashnode.dev/reinforcement-learning-with-human-feedback-rlhf'
                />
            </div>
        </section>
    </motion.div>
  )
}

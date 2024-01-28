import React from 'react'

// import fc from '../assets/fc.mp4';
import Card from './Cards';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import tomato from "../assets/tomatoimage.jpeg"
import laptop from "../assets/Laptoppricepred.jpeg"
import fake from "../assets/fakenews.jpeg"
import face from "../assets/face.jpeg"
import stock from "../assets/stock.jpeg"

export default function DataScience() {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth',
      });
  return (
    <motion.div>
      <section className="Blogs" id="Blogs">
            <h1 className="head">Data Science Projects</h1>
            
            <div className="sect">
                <Card
                    name='Tomato Disease Classification'
                    imgsrc={tomato}
                    ssrc='https://github.com/YashAPro1/TomatoDiseaseClassification'
                />
                <Card
                    name='Laptop Price Prediction'
                    imgsrc={laptop}
                    ssrc='https://github.com/YashAPro1/ML-CICD-Pipeline'
                />
                <Card
                    name='Fake News Prediction'
                    imgsrc={fake}
                    ssrc='https://github.com/YashAPro1/MLprojects/tree/main/Projects/FakeNews%20Prediction'
                />
                <Card
                    name='Face Recognition Attendence Management System'
                    imgsrc={face}
                    ssrc='https://github.com/YashAPro1/FRAS/tree/main/face'
                />
                <Card
                    name='Stock Price Analysis'
                    imgsrc={stock}
                    ssrc='https://github.com/YashAPro1/MLprojects/tree/main/Deep%20Learning/Project/StockPriceLSTM'
                />
                
            </div>
        </section>
        <a href="/MyPortfolio#Projects">
        <span className="material-symbols-outlined" id="backbtn">
        arrow_back
        </span>
        </a>
    </motion.div>
  )
}

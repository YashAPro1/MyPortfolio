import React from 'react'
import Jigyaasa from '../assets/jigyassa.jpg';
import Auto from '../assets/automated_mail.jpg';
// import fc from '../assets/fc.mp4';
import ml from '../assets/mlprojimg.webp';
import Tic from '../assets/tictactoe.jpeg';
import ponggame from '../assets/ponggame.png';
import Snake from '../assets/snakegameproj.png';
import Todo from '../assets/Todocards.png';

import Card from './Cards';

import {motion} from 'framer-motion';


export default function Project() {
  return (
    <motion.div>
      <section className="Projects" id="Projects">
            <h1 className="head">My Projects</h1>
            <div className="sect">
                <Card
                    name='JigyAasa'
                    imgsrc={Jigyaasa}
                />

                <Card
                    name='ML Projects'
                    imgsrc={ml}
                    ssrc="https://github.com/YashAPro1/MLprojects"
                />
               
                <Card
                    name='Automated Mail'
                    imgsrc={Auto}
                />
                
                {/* <div className="box">
                    <h3 style={{color: "rgb(198, 190, 24)"}}>Learn FrenchWords</h3>
                    <video width="320px" height="240px" autoplay style={{width: "400px",height: "400px"}}>
                        <source src={fc} type="video/mp4"/>
                    </video>
                </div> */}
                
                <Card
                    name='SnakeGame'
                    imgsrc={Snake}
                />
                <Card
                    name='PongGame'
                    imgsrc={ponggame}
                />
                <Card
                    name='TicTacToe'
                    imgsrc={Tic}
                    ssrc='https://yashapro1.github.io/TicTacToe_website/'
                />
                <Card
                    name='ToDo Cards'
                    imgsrc={Todo}
                    ssrc='https://yashapro1.github.io/Todo-Cards/'
                />
                
                
                
                
                

            </div>
        </section>
    </motion.div>
  )
}

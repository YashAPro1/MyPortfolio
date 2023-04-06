import { useState, useEffect } from "react"
import React from 'react'
// import { a } from 'react-router-dom';
import image from "../assets/pimg.jpg";
import {motion} from 'framer-motion'
export default function Navbar() {

  const [isToogle,setIsToggle] = useState(false); 
  const [theme, setTheme] = useState("dark-theme");

  function tgle() {
    if(isToogle===false)
    {
      const head = document.querySelector("header");
      
      head.style.left = '0px';
      
      setIsToggle(true)
    }
    else{
      const head = document.querySelector("header");
      
      head.style.left = '-120%';
      setIsToggle(false)
    }
  }
  function changeTheme() {
    if (theme === "dark-theme"){
      setTheme("light-theme")
    }
    else{
      setTheme("dark-theme")
    }
  }

  // using useeffect to getting my theme button change 
  useEffect(() => {
  document.body.className = theme;
  }, [theme])

  return (
    <motion.div>
      <header id='#head'>
            <div className="userinfo">
                <img src={image} alt="" style={{margin:"5px"}}/>
                <h2 className="name">Yashkumar Dubey</h2>
                <p className="userdeal">Python Devloper</p>
            </div>
            
            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#Education">Education</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Skill">Skill</a></li>
                    <li><a href="#contactMe">contactMe</a></li>
                </ul>
            </nav>
            
        </header>

        <span className="material-symbols-outlined tooglebtn" id="tbtn" onClick={tgle}>
            menu
        </span>

        <span className="material-symbols-outlined" id="themebtb" onClick={changeTheme}>
        dark_mode
        </span>
    </motion.div>
  )
}
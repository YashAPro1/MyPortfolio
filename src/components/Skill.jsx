import React from 'react'
import {motion} from 'framer-motion';
import Skillbar from './Skillbar';
export default function Skill() {
  return (
    <motion.div>
      <section className="Skill" id="Skill">
            <h1 className="head">Skills</h1>
            <div className="sect">
              <div className="rowskill">
                <section className="colskill">
                  <div className="contents">
                    <div className="box">
                      <h5>Python.</h5>
                    </div>
                    <div className="box">
                      <h5>Machine Learning</h5>
                    </div>
                    <div className="box">
                      <h5>Deep Learning</h5>
                    </div>
                    <div className="box">
                      <h5>tkinter </h5>
                    </div>
                    <div className="box">
                      <h5>Pandas </h5>
                    </div>
                    <div className="box">
                      <h5>Natural Language Processing(NLP) </h5>
                    </div>
                    <div className="box">
                      <h5></h5>
                    </div>
                  </div>
                </section>
                <section className="colskill">
                  <div className="contents">
                    <div className="box">
                      <h5>C</h5>
                    </div>
                    <div className="box">
                      <h5>Java</h5>
                    </div>
                    <div className="box">
                      <h5>Data Structure</h5>
                    </div>
                    <div className="box">
                      <h5>Algorithms</h5>
                    </div>
                    <div className="box">
                      <h5>Generative AI</h5>
                    </div>
                    <div className="box">
                      <h5>Data Visualization </h5>
                    </div>
                    <div className="box">
                      <h5></h5>
                    </div>
                  </div>
                </section>
                <section className="colskill">
                  <div className="contents">
                    <div className="box">
                      <h5>Reactjs</h5>
                    </div>
                    <div className="box">
                      <h5>NodeJs</h5>
                    </div>
                    <div className="box">
                      <h5>ExpressJs</h5>
                    </div>
                    <div className="box">
                      <h5>Django</h5>
                    </div>
                    <div className="box">
                      <h5>Djano Rest Framework</h5>
                    </div>
                    <div className="box">
                      <h5></h5>
                    </div>
                  </div>
                </section>
                <section className="colskill">
                  <div className="contents">
                    <div className="box">
                      <h5>MySQL</h5>
                    </div>
                    <div className="box">
                      <h5>MongoDB</h5>
                    </div>
                    <div className="box">
                      <h5>PosgressSQL</h5>
                    </div>
                    <div className="box">
                      <h5>Html | css</h5>
                    </div>
                    <div className="box">
                      <h5>NextJs</h5>
                    </div>
                    <div className="box">
                      <h5></h5>
                    </div>
                  </div>
                </section>
               
              </div>

            </div>
        </section>
    </motion.div>
  )
}

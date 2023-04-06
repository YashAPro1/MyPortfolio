import React from 'react'
import {motion} from 'framer-motion';
import Skillbar from './Skillbar';
export default function Skill() {
  return (
    <motion.div>
      <section className="Skill" id="Skill">
            <h1 className="head">Skills</h1>
            <div className="sect">
              <div className="skills">
                
                <motion.div>
                <Skillbar
                  name = 'Python'
                  per = "95%"
                  maxwidth = "95%"
                />
                </motion.div>


                <Skillbar
                  name = 'Javascript'
                  per = "85%"
                  maxwidth = "85%"
                />

                <Skillbar
                  name = 'Java'
                  per = "60%"
                  maxwidth = "60%"
                />

                <Skillbar
                  name = 'C'
                  per = "90%"
                  maxwidth = "90%"
                />

                <Skillbar
                  name = 'Django'
                  per = "80%"
                  maxwidth = "80%"
                />

                <Skillbar
                  name = 'NodeJS'
                  per = "55%"
                  maxwidth = "55%"
                />



                
              </div>

            </div>
        </section>
    </motion.div>
  )
}

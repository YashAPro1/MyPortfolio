import React from 'react'
// import { Link } from 'react-router-dom';
// import FileSaver from 'file-saver';
import {motion} from 'framer-motion';
import Resume from './resume.pdf';

export default function About() {

  

  // const saveFile = () => {
  //   FileSaver.saveAs(
  //     process.env.REACT_APP_CLIENT_URL + "./resume.pdf",
  //     "resume.pdf");}
  return (
    <motion.div>
      <section className="about" id="about">
            <h1 className="head">Experience</h1>
            <motion.div className="sect"
            
            >
                <div className="aboutme">
                <div className="row">
                      {/* Educational Volunteering Starts */}
                      <section className="col">
                        <h2 className="title">
                          Academic
                        </h2>
                        <div className="contents">
                          <div className="box">
                            <h4>2021-Ongoing</h4>
                            <h3>K J SOMAIYA INSTITUTE OF TECHNOLOGY.</h3>
                            <p>Bachelor's in Computer Science</p>
                            <p>Avg GPA: 10 CGPA</p>
                          </div>
                          <div className="box">
                            <h4>2019-2021</h4>
                            <h3>PACE JUNIOR SCIENCE COLLEGE.</h3>
                            <p>12th Grade.</p>
                            <p>Pecentage: 89.5%</p>  
                          </div>
                          <div className="box">
                            <h4>2018-2019</h4>
                            <h3>PADMAVATI VENKATESH HIGH SCHOOL AND JUNIOR COLLEGE.</h3>
                            <p>10th Grade.</p>
                            <p>Pecentage: 77%</p>  
                          </div>
                        </div>

                      </section>

                      {/* Educational Section Ends */}

                      {/* Experience SEction start here */}
                      <section className="col">
                        <h2 className="title">
                          Professional Experience
                        </h2>
                        <div className="contents">
                          <div className="box">
                            <h4>2023 May-2023 October</h4>
                            <h3>Somaiya Trust</h3>
                            <p>Web Development</p>
                            <p>Somaiya Awards</p>
                          </div>
                          <div className="box">
                            <h4>2023 Apr-2023 Aug</h4>
                            <h3>Software Development Cell, KJSIT</h3>
                            <p>Web Development</p>
                            <p>Algorithm Virtual Lab</p>
                          </div>
                          <div className="box">
                            <h4>2023 Apr-2023 May</h4>
                            <h3>Godavari BioRefinary Limited</h3>
                            <p>Android Development</p>
                            <p>Geofencing App</p>
                          </div>
                          <div className="box">
                            <h4>2022 Dec</h4>
                            <h3>Cladroid Technologies</h3>
                            <p>Java Development</p>
                            </div>
                        </div>

                      </section>
                      {/* Experience Section ends here */}
                    </div>
                    
                    
                    {/* <button className="Btn" onClick={saveFile}>Download!</button> */}

                    
                </div>
            </motion.div>
        </section>
    </motion.div>
  )
}

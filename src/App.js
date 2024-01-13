
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skill from './components/Skill';
// import Project from './components/Project';
// import video from './assets/video.mp4';
import Project from './components/Project';
import Contact from './components/Contact';
// import Start from './components/Start';
import React,{useState} from 'react'
import Blogs from './components/Blogs';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import DataScience from './components/DataScience';
import WebProject from './components/WebProject';
import PythonProj from './components/PythonProj';
import Android from './components/Android';
function App() {
  const [inHome, setInHome] = useState(false);

  return (
    <BrowserRouter>
    <div>
    <Navbar/>
      <div className='fullbg'>
        <Routes>
          <Route path='/MyPortfolio' element={<Home/>}/>
          <Route path='/MyPortfolio/datascience' element={<DataScience/>}/>
          <Route path='/MyPortfolio/web' element={<WebProject/>}/>
          <Route path='/MyPortfolio/androiddev' element={<Android/>}/>
          <Route path='/MyPortfolio/python' element={<PythonProj/>}/>
        </Routes>
         
      </div>
      
      {/* <Footer /> */}
    </div>
    </BrowserRouter>
    // <div className="App">
    //   {/* <div className='st'>
    //   <Start/>
    //   </div> */}
      
    //   <div className='other'> 
    //   <Home inHome={inHome} setInHome={setInHome}/>
      
    //   </div>
      
    // </div>
  );
}

export default App;

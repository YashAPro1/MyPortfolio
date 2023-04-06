
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
function App() {
  const [inHome, setInHome] = useState(false);

  return (
    <div className="App">
      {/* <div className='st'>
      <Start/>
      </div> */}
      <div className='other'>
      <Navbar/>
      <Home inHome={inHome} setInHome={setInHome}/>
      <About/>
      <Education/>
      <Project/>
      <Skill/>
      <Contact/>
      </div>
      
    </div>
  );
}

export default App;

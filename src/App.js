import React,{Component} from 'react';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Education from './Components/Education.js';
import Experience from './Components/Experience';
import SpecialSkills from './Components/SpecialSkills.js';
import Projects from './Components/Project.js';
import Hobbies from './Components/Hobbies.js';
import './App.css';


class App extends Component{
render(){
  return(
    <div className='main'>
      <div >
        <div className="top">
          <div>
          <div className = "header"> 
          {/* <video autoPlay loop muted>
            <source src='./background.mp4' type='video/mp4'/>
          </video>
           */}
          <div className="text">
          <h4 className="name">I'M JEEVITHA VENKATESAN</h4>
            <h2 className="role">PRODUCT DEVELOPER</h2>
          </div>
        </div>
        </div>
        <nav className="menushow">
          <ul>
            <li><a href="/#" ><div className='d-flex logo-panel'><img src="logo_background.gif" alt=""/><img src='./logo.png'  alt=""/></div></a></li>
            <li><a href="/#About"><img src='./about.gif' alt=""/></a></li>
            <li><a href="/#Project"><img src='./projects.gif' alt=""/></a></li>
            <li><a href="/#Hobbies"><img src='./hobbies.gif' alt=""/></a></li>
            <li><a href="/#Contact"><img src='./contact.gif' alt=""/></a></li>
          </ul>
        </nav>
      </div>
      </div>
      <About/>
      <div id="Experience"><Experience/></div>
      <div id="Education"><Education/></div>
      <SpecialSkills/>
      <div id="Project"><Projects/></div>
      <div id="Hobbies"><Hobbies/></div>
      <div id="Contact"><Contact/></div>
    </div>
  );
}
}

export default App;
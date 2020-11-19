import Name from './Components/Name.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Education from './Components/Education.js';
import SpecialSkills from './Components/SpecialSkills.js';
import Projects from './Components/Project.js';
import Hobbies from './Components/Hobbies.js';
import React,{Component} from 'react';
import Logo from './Logo';
import MenuIcon from './menu.png';
import './Components/Navbar.css';
import './App.css';


class App extends Component{

  state = {showNav:false,headerbackground:false}

  changebackground = () => {
    if(window.scrollY>20)
    {
        this.setState({
          headerbackground:true
      });
    }
    else
    {
        this.setState({
          headerbackground:false
      });
    }
  }

  navToggle = () => {
    this.setState({
        showNav:!this.state.showNav
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.changebackground, true);
  }

render(){
  return(
    <body>
      <div >
        <div className="top">
        <div className = {(this.state.headerbackground ? "header active" : "header")}> 
          <img src={Logo}  alt="" className="logo"/>
          <img src={MenuIcon}  alt="" className = "menubar" onClick={this.navToggle}/>
        </div>
        <nav className={(this.state.showNav ? "menushow" : "menuhide")}>
          <ul>
            <li data-text = "Home"><span><a href="/#" onClick={this.navToggle}>Home</a></span></li>
            <li data-text = "Education"><span><a href="/#Education" onClick={this.navToggle}>Education</a></span></li>
            <li data-text = "Project"><span><a href="/#Project" onClick={this.navToggle}>Project</a></span></li>
            <li data-text = "Hobbies"><span><a href="/#Hobbies" onClick={this.navToggle}>Hobbies</a></span></li>
            <li data-text = "Contact"><span><a href="/#Contact" onClick={this.navToggle}>Contact</a></span></li>
          </ul>
        </nav>
      </div>
        <Name />
      </div>
      <About/>
      <div id="Education"><Education/></div>
      <SpecialSkills/>
      <div id="Project"><Projects/></div>
      <div id="Hobbies"><Hobbies/></div>
      <div id="Contact"><Contact/></div>
    </body>
  );
}
}

export default App;
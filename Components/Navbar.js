import React,{Component} from 'react';
import Logo from '../Logo';
import MenuIcon from '../menu.png';
import CloseIcon from '../cancel.png';
import './Navbar.css';

class Navbar extends Component{

  state = {showNav:false}

  navToggle = () => {
    this.setState({
        showNav:!this.state.showNav
    });
  }

render(){
  return(
    <div className ="top">
      <div className = "header"> 
      <img src={Logo}  alt="" className="logo" />
      <img src={MenuIcon}  alt="" className = "menubar" onClick={this.navToggle}/>
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap" rel="stylesheet"></link>
      </div>
       <nav className={(this.state.showNav ? "menushow" : "menuhide")}>
         <img src={CloseIcon}  alt="" className = "closebar" onClick={this.navToggle}/>
         <ul>
           <li data-text = "Home"><span><a href="/#">Home</a></span></li>
           <li data-text = "About"><span><a href="/#">About</a></span></li>
           <li data-text = "Certificates"><span><a href="/#">Certificates</a></span></li>
           <li data-text = "Hobbies"><span><a href="/#">Hobbies</a></span></li>
           <li data-text = "Contact"><span><a href="/#">Contact</a></span></li>
         </ul>
       </nav>
    </div>
  );
}
}

export default Navbar;
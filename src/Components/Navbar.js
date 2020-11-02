import React,{Component} from 'react';
import * as FaIcons from "react-icons/fa";
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
      <FaIcons.FaBars className = "menubar" onClick={this.navToggle}/>
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
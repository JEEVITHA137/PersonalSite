import React,{Component} from 'react';
import Logo from '../Logo';
import MenuIcon from '../menu.png';
import './Navbar.css';

class Navbar extends Component{

  state = {showNav:false,headerbackground:false}


  navToggle = () => {
    this.setState({
        showNav:!this.state.showNav
    });
  }

render(){
  return(
    <div className="top">
      <div className = "header active"> 
        <img src={Logo}  alt="" className="logo" />
        <img src={MenuIcon}  alt="" className = "menubar" onClick={this.navToggle}/>
      </div>
       <nav className={(this.state.showNav ? "menushow" : "menuhide")}>
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
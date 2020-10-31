import React,{Component} from 'react';
import * as FaIcons from "react-icons/fa";
import './Header.css';

class Header extends Component{

  state = {showNav:false}

  navToggle = () => {
    this.setState({
        showNav:!this.state.showNav
    });
  }

render(){
  return(
    <div>
      <FaIcons.FaBars className = "bars" onClick={this.navToggle}/>
       <header className={(this.state.showNav ? "menushow" : "menuhide")} onClick={this.navToggle}>
         <ul>
           <li data-text = "Home"><a href="/#">Home</a></li>
           <li data-text = "About"><a href="/#">About</a></li>
           <li data-text = "Certificates"><a href="/#">Certificates</a></li>
           <li data-text = "Hobbies"><a href="/#">Hobbies</a></li>
           <li data-text = "Contact"><a href="/#">Contact</a></li>
         </ul>
       </header>
    </div>
  );
}
}

export default Header;
import React,{Component} from 'react';
import Logo from '../Logo';
import MenuIcon from '../menu.png';
import './Navbar.css';

class Navbar extends Component{

  state = {showNav:false,headerbackground:false}

  changebackground = () => {
    if(window.scrollY>30)
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
    <div className="top">
      <div className = {(this.state.headerbackground ? "header active" : "header")}> 
        <img src={Logo}  alt="" className="logo" />
        <img src={MenuIcon}  alt="" className = "menubar" onClick={this.navToggle}/>
      </div>
       <nav className={(this.state.showNav ? "menushow" : "menuhide")}>
         <ul>
           <li data-text = "Home"><span><a href="/#">Home</a></span></li>
           <li data-text = "Education"><span><a href="/#">Education</a></span></li>
           <li data-text = "Project"><span><a href="/#">Project</a></span></li>
           <li data-text = "Hobbies"><span><a href="/#">Hobbies</a></span></li>
           <li data-text = "Contact"><span><a href="/#">Contact</a></span></li>
         </ul>
       </nav>
    </div>
  );
}
}

export default Navbar;
import React,{Component} from 'react';

import Call from '../call.png'
import Email from '../email.png'
import './component.css';

class Contact extends Component{

render(){
  return(
      <div>
      <div className="container">
          <h1>Contact</h1>
          <div className="row justify-content-center"><hr className="headingline"></hr> </div>
          <div className="row contact">
              <div className = "col-sm-5 pb-4 pt-3">
                  <img src = {Call} alt=" "></img>
                  <h4>Call</h4> 
                  <h5>9080979609</h5>
               </div>
               <div className="col-sm-7 pb-4 pt-3">
                  <img src = {Email} alt=" "></img>
                  <h4>Email</h4>  
                  <h5 className="text-break" >jeevithasakthi137@gmail.com</h5>
              </div>
          </div>
          </div>
          <div className="footer d-flex justify-content-center">
             
              <div className="col-sm-6">
              <h3 className="pt-1">About the site</h3>
              <h6>This site is build on React with the help of Bootstrap 4</h6>
              <a href="https://github.com/JEEVITHA137/PersonalSite" target="_blank" rel="noopener noreferrer">Repository Link</a>
              </div>
              <div className="col-sm-5">
              <h4 className="pt-3">Designed by <br/><a href="https://www.linkedin.com/in/jeevithavenkatesan137" target="_blank" rel="noopener noreferrer">Jeevitha Venkatesan</a></h4>
              </div>
        
          </div>
      </div>
    );
}
}

export default Contact;
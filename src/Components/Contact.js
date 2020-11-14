import React,{Component} from 'react';

import Call from '../call.png'
import Email from '../email.png'
import './component.css';

class Contact extends Component{

render(){
  return(
      <div>
          <h1>Contact</h1>
          <div className="row contact">
              <div className = "col-sm-5">
                  <img src = {Call} alt=" "></img>
                  <h4>Call</h4> 
                  <h5>9080979609</h5>
               </div>
               <div className="col-sm-7">
                  <img src = {Email} alt=" "></img>
                  <h4>Email</h4>  
                  <h5>jeevithasakthi137@gmail.com</h5>
              </div>
          </div>
          <div className="footer">
              <h4>Designed by Jeevitha Venkatesan</h4>
          </div>
      </div>
    );
}
}

export default Contact;
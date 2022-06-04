import React, { Component } from 'react';
import './component.css';

class Contact extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="title">Contact</div>
                    <div className="row justify-content-center"><hr className="headingline"></hr> </div>
                    <div className="row contact">
                        <div className="col-sm-5 pt-3">
                            <img src='./call.gif' alt=" "></img>
                            <p>Call</p>
                            <p>9080979609</p>
                        </div>
                        <div className="col-sm-7 pt-3">
                            <img src='./mail.gif' alt=" "></img>
                            <p>Email</p>
                            <p className="text-break" >jeevithasakthi137@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className='container'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className="col-sm-6 p-2">
                                <h5 className="pt-1">About the site</h5>
                                <h6>This site is build on React with the help of Bootstrap 4</h6>
                                <a href="https://github.com/JEEVITHA137/PersonalSite" target="_blank" rel="noopener noreferrer">Repository Link</a>
                            </div>
                            <div className="col-sm-5">
                                <h4>Designed by <br /><a href="https://www.linkedin.com/in/jeevithavenkatesan137" target="_blank" rel="noopener noreferrer">Jeevitha Venkatesan</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
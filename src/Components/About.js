import * as FaIcons from "react-icons/fa";
import './component.css';

function About() {
  function changeBackground(e) {
    e.target.src = './2.png';
  }

  function changeOriginal (e) {
    e.target.src = './1.png';
  }
  return(
    <div className="about">
      <h1>About Me</h1>
      <div className="row justify-content-center"><hr className="headingline"></hr> </div>
      <div class="row d-flex justify-content-center mb-1">
      <div class="col-md-8">
      <h4>A Passionate Learner who wants to explore the joy of innovation with programming in all possible ways and tries to shine in every aspect of it.</h4>
      </div>
      </div>
      <div className="socialicons">
        <a className="iconsize" href="https://www.linkedin.com/in/jeevithavenkatesan137" target="_blank"><FaIcons.FaLinkedin className="icons"/></a>
        <a className="iconsize" href="https://github.com/JEEVITHA137" target="_blank"><FaIcons.FaGithub className="icons" /></a>
        <a className="iconsize" href="https://www.hackerrank.com/jeevithasakthi11" target="_blank"><FaIcons.FaHackerrank className="icons"/></a>
        <a className="iconsize" href="https://auth.geeksforgeeks.org/user/jeevithasakthi137/practice/" target="_blank"><img className="icons" onMouseOver={changeBackground} onMouseOut={changeOriginal} src='./1.png'/></a>
      </div>
      <hr className="line"></hr>
    </div>
 );
}

export default About;
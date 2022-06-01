import * as FaIcons from "react-icons/fa";
import './component.css';

function About() {
  function changeBackground(e) {
    e.target.src = './2.png';
  }

  function changeOriginal(e) {
    e.target.src = './1.png';
  }
  return (
    <div id="About" className="about container">
      <div className="row">
        <div className="section col-md-8">
          <div className="title">About Me</div>
          <div class="ow d-flex justify-content-center align-items-center mb-1">
            <div class="col-md-10 pb-4 ml-4">
              <p>A Passionate Learner who wants to explore the joy of innovation with programming in all possible ways and tries to shine in every aspect of it.</p>
            </div>
          </div>
          <div className="socialicons">
            <a className="iconsize" href="https://www.linkedin.com/in/jeevithavenkatesan137" target="_blank" rel="noopener noreferrer"><FaIcons.FaLinkedin className="icons" /></a>
            <a className="iconsize" href="https://github.com/JEEVITHA137" target="_blank" rel="noopener noreferrer"><FaIcons.FaGithub className="icons" /></a>
            <a className="iconsize" href="https://www.hackerrank.com/jeevithasakthi11" target="_blank" rel="noopener noreferrer"><FaIcons.FaHackerrank className="icons" /></a>
            <a className="iconsize" href="https://auth.geeksforgeeks.org/user/jeevithasakthi137/practice/" target="_blank" rel="noopener noreferrer"><img className="icons" onMouseOver={changeBackground} onMouseOut={changeOriginal} src='./1.png' alt="" /></a>
          </div>
        </div>
        <div className="section col-md-4 float-md-end ">
          <img src='./header.gif' alt=""/>
        </div>
      </div>
    </div>
  );
}

export default About;
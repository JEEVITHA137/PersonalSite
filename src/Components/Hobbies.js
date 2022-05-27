import * as CgIcon  from "react-icons/cg";
import './component.css';

function Hobbies() {
    return(
        <div class="hobbies container">
        <div className="title">Hobbies</div>
        <div className="row justify-content-center"><hr className="headingline"></hr> </div>
        <p className="row justify-content-center">"When life brings you down<br/>Your hobbies brings you up"</p>
        
        <div className="row justify-content-center pt-3">
        <div className="title p-3 col-sm-9">Promotions</div>
        <img className="w-100 h-50 col-sm-9 " src="./technovate.jpg" alt=""></img>
        <h5 className="col-sm-8 pt-3">This poster is created for the Event of innovative poster for symposium conducted by our department seniors.</h5>
        </div>

        <div className="title pt-5">Sports</div>
        <div>
        <ul>
            <div className="d-flex justify-content-center iconsize"><CgIcon.CgCheck className="icons"/><li>BasketBall</li></div>
            <div className="d-flex justify-content-center iconsize"><CgIcon.CgCheck className="icons"/><li>ThrowBall</li></div>
            <div className="d-flex justify-content-center iconsize"><CgIcon.CgCheck className="icons"/><li>ShuttleCock</li></div>
        </ul>
        </div>
        <div className="title">Achievments</div>
        <div>
            <h5 className="pt-2">Won the First place in InterCollege Competition on ThrowBall(2018-2019)</h5>
            <h5 className="pt-2">Won the second place in Zonnel BasketBall(2018-2019)</h5>
            <h5 className="pt-2">Won the Second place in InterCollege Competition on ThrowBall(2019-2020)</h5>
        </div>

        <div className="row justify-content-center pt-3">
        <div className="title p-3 col-sm-9">Silambam</div>
        <p className="row justify-content-center">"An integral part of Tamil Culture"</p>
        </div>

        <h5>It is a good form of cardio workout that improves blood circulation and heart function.</h5>
        <h5 className="pt-2">The <span>Team Coordinator</span> of College Silambam Team.</h5>

        <hr className="line"></hr>
        </div>
    );
}

export default Hobbies;
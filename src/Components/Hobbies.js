import './component.css';

function Hobbies() {
    return(
        <div class="hobbies container">
        <div className="title">Hobbies</div>
        <p className="row justify-content-center quote">"When life brings you down<br/>Your hobbies brings you up"</p>
        
        {/* <div className="row justify-content-center pt-3">
        <div className="title p-3 col-sm-9">Promotions</div>
        <img className="w-100 h-50 col-sm-9 " src="./technovate.jpg" alt=""></img>
        <h5 className="col-sm-8 pt-3">This poster is created for the Event of innovative poster for symposium conducted by our department seniors.</h5>
        </div> */}

        <div className="topic pb-1 pl-2">Sports</div>
        <div className="row justify-content-center align-items-center">
        <ul >
            <div className="d-flex iconsize"><img src='./basketball.gif' alt="" className="icons"/><li>BasketBall</li></div>
            <div className="d-flex iconsize"><img src='./throwball.gif' alt="" className="icons"/><li>ThrowBall</li></div>
            <div className="d-flex iconsize"><img src='./cork.gif' alt="" className="icons"/><li>ShuttleCock</li></div>
        </ul>
        </div>
        <div className="topic pb-1">Achievments</div>
        <div className="achievments row justify-content-center ">
            <p className="d-flex"><img src='/acheivements.gif' alt=""/>Won the First place in InterCollege Competition on ThrowBall(2018-2019)</p>
            <p className="d-flex"><img src='/acheivements.gif' alt=""/>Won the second place in Zonnel BasketBall(2018-2019)</p>
            <p className="d-flex"><img src='/acheivements.gif' alt=""/>Won the Second place in InterCollege Competition on ThrowBall(2019-2020)</p>
        </div>

        <div className="row justify-content-center pt-1">
        <div className="topic p-1 col-sm-9">Silambam</div>
        <p className="row justify-content-center quote">"An integral part of Tamil Culture"</p>
        </div>

        <p>It is a good form of cardio workout that improves blood circulation and heart function.</p>
        <p className="pt-1">The <span>Team Coordinator</span> of College Silambam Team.</p>

        </div>
    );
}

export default Hobbies;
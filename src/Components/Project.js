import './component.css';

function Projects() {
    return(
        <div class="projects container">
        <h1>Projects</h1>
        <div className="row justify-content-center"><hr className="headingline"></hr> </div>
        <div className="row d-flex  pt-5">
        <p className="col-sm-5"><h3>Intern Project</h3>A Full stack Website like Khan Academy. Learners Can watch the tutorials and attend the quiz and their activities are recorded in dashboard, the teachers can upload the new course  and their quiz, after the admin approval the courses are added into the site, and everything are completely monitored by Admin.</p>
        <img className="col-sm-7" src="./intern.jpg" alt=""></img>
        </div>
        
        <div className="row d-flex pt-5">
        <img className="w-100 col-sm-7 " src="./ConferenceSite.png" alt=""></img>
        <p className="col-sm-5"><h3>Mini Project</h3>To Retrieve the IOT data from the IOT Device,Stored it in the cloud and access it through the Website.It is created to analyze the IOT lab experiments data.
        <br/><a className="btn" href="https://github.com/JEEVITHA137/Mini_Project_" target="_blank" rel="noopener noreferrer">Repository Link </a></p>
        </div>
        
        <div className="row d-flex pt-5">
        <p className="col-sm-5"><h3>Conference Site</h3>Created a Website for ICRESD. This conference is aimed to provide an opportunity for knowledge sharing among the academicians and researchers to discuss about the existing issues related to Renewable Energy Systems and Environmental Systems for knowledge sharing and team building.
        <br/><a className="btn" href="https://gct-teqip.in" target="_blank" rel="noopener noreferrer">Live Link </a></p>
        <img className="w-100 col-sm-7" src="./ConferenceSite.png" alt=""></img>
        </div>
        
        <div className="hobbyprojects">
        <h1>Hobby Projects</h1>
        <div className="row justify-content-center"><hr className="headingline"></hr> </div>

        <div className="row d-flex justify-content-center ">
        <div className ="col-sm-5 shadow-lg p-3 m-4 bg-white rounded">
        <h3 className="text-align-center">SimpleShooter</h3>
        <video width="320" height="240" controls>
        <source src="./SimpleShooter.mp4" type="video/mp4"/>
        </video>
        <p>A <span>Simple Shooter Game</span> created using Unreal Engine 4. This game is focused on the third person movement, movement animation, particle effects, Enemy AI and level restart after Win or Loss. The Aim of the game is to <span>shoot all the enemy</span>.</p>
        </div>

        <div className ="col-sm-5 shadow-lg p-3 m-4 bg-white rounded">
        <h3 className="text-align-center">Building Escape</h3>
        <video width="320" height="240" controls>
        <source src="./SimpleShooter.mp4" type="video/mp4"/>
        </video>
        <p>A <span>Building Escape Game</span> created using Unreal Engine 4. This game is focused on the environment creation and some physics. The aim of the game is to <span>find the statue, stolen it and thrown away</span>.</p>
        </div>
        </div>

        <div className="row d-flex justify-content-center">
        <div className ="col-sm-5 shadow-lg p-3 m-4 bg-white rounded">
        <h3 className="text-align-center">Toon Tanks</h3>
        <video width="320" height="240" controls>
        <source src="./SimpleShooter.mp4" type="video/mp4"/>
        </video>
        <p>A <span>Toon Tank Game</span> created using Unreal Engine 4. This game is focused on the physics based movements and particle effect. The Aim of the game is to <span>shoot all the enemy tanks</span>.</p>
        </div>

        <div className ="col-sm-5 shadow-lg p-3 m-4 bg-white rounded">
        <h3 className="text-align-center">BullCow Game</h3>
        <video width="320" height="240" controls>
        <source src="./SimpleShooter.mp4" type="video/mp4"/>
        </video>
        <p>A <span>BullCow Game</span> created using Unreal Engine 4. This game is focued on some basics(Unreal c++) like constructors, BeginPlay, Inputs from player, conditions and loops. The aim of the game is to find the <span>Isogram word</span>(A Word with non repeating letters) by <span>using Bull and Cow count</span>.</p>
        </div>
        </div>
        </div>
        <hr className="line"></hr>
        </div>

);
}

export default Projects;
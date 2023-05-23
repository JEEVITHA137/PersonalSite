import './component.css';

function Projects() {
    return (
        <div class="projects container ">
            <div className="title pb-4">Projects</div>

            <div className="row d-flex align-items-center pt-5">
                <img className=" col-md-7 site-image mt-2" src="./ScreenshotApp.png" alt=""></img>
                <p className="col-md-5"><div className='d-flex title align-items-center justify-content-center'><img src='./screenshot.gif' alt=""/><h3>Screenshot Url</h3></div>A Screenshot App, it will give the full screenshot of the url you given. You can able to set the image quality, type of format you want either png or jpg and also you can able to download the image.
                   <br/> <a className="btn" href="https://github.com/JEEVITHA137/ScreenShotURL" target="_blank" rel="noopener noreferrer">Repository Link </a></p>
            </div>

            <div className="row d-flex align-items-center pt-5">
                <p className="col-md-6"><div className='d-flex title align-items-center justify-content-center'><img src='./project-intern.gif' alt=""/><h3>Intern Project</h3></div>A Full stack Website like Khan Academy. Learners Can watch the tutorials and attend the quiz and their activities are recorded in dashboard, the teachers can upload the new course  and their quiz, after the admin approval the courses are added into the site, and everything are completely monitored by Admin.</p>
                <img className="col-md-6 site-image" src="./intern.jpg" alt=""></img>
            </div> 

            <div className="row d-flex align-items-center pt-5">
                <img className=" col-md-7 site-image site-image mt-2" src="./MiniProject.png" alt=""></img>
                <p className="col-md-5"><div className='d-flex title align-items-center justify-content-center'><img src='./mini-project.gif' alt=""/><h3>Mini Project</h3></div>To Retrieve the IOT data from the IOT Device,Stored it in the cloud and access it through the Website.It is created to analyze the IOT lab experiments data.
                    <br /><a className="btn" href="https://github.com/JEEVITHA137/Mini_Project_" target="_blank" rel="noopener noreferrer">Repository Link </a></p>
            </div>

            <div className="row d-flex align-items-center pt-5">
                <p className="col-md-5"><div className='d-flex title align-items-center justify-content-center'><img src='./project-conference.gif' alt=""/><h3>Conference Site</h3></div>Created a Website for ICRESD. This conference is aimed to provide an opportunity for knowledge sharing among the academicians and researchers to discuss about the existing issues related to Renewable Energy Systems and Environmental Systems for knowledge sharing and team building.
                    {/* <br /><a className="btn" href="https://gct-teqip.in" target="_blank" rel="noopener noreferrer">Live Link </a> */}</p>
                <img className=" col-md-7 site-image" src="./ConferenceSite.png" alt=""></img>
            </div>

            <div className="row d-flex align-items-center pt-5">
                <img className=" col-md-6 site-image mt-3 mr-3" src="./2048.png" alt=""></img>
                <p className="col-md-5"><div className='d-flex title align-items-center justify-content-center'><img src='./project-2048.gif' alt=""/><h3>2048</h3></div>It is a type of Sliding Block Puzzle.The rules are also simple. You just need to move the tiles and every time you move one, another tile pops up in a random manner anywhere in the box. When two tiles with the same number on them collide with one another as you move them, they will merge into one tile with the sum of the numbers.
                    <br /><a className="btn" href="https://gv-2048.netlify.app/" target="_blank" rel="noopener noreferrer">Live Link </a></p>
            </div>

            <div className="row d-flex align-items-center pt-5">
                <p className="col-md-5"><div className='d-flex title align-items-center justify-content-center'><img src='./choclate-site.gif' className='p-1' alt=""/><h3>Choclate Site</h3></div>It is a FullStack Website. User can able to search the products using filters, add the products to cart, update the address and buy the products. Admin can able to see the products, change the quantity of the products, add the new products and update the status of ordered product.
                <br/> <a className="btn" href="https://github.com/JEEVITHA137/ChoclateFullStackSite" target="_blank" rel="noopener noreferrer">Repository Link </a></p>
                <img className=" col-md-7 site-image rounded" src="./choclatesite.png" alt=""></img>
            </div>

            <div className="hobbyprojects">
                <div className="title align-items-center justify-content-center mt-3"><img src='./hobby.gif' className='p-1' alt=""/>Hobby Projects</div>
                <div className="row justify-content-center"><hr className="headingline"></hr> </div>

                <div className="row d-flex justify-content-center ">
                    <div className="hobbycard col-sm-5">
                        <h3 className="p-3 text-align-center">Simple Shooter</h3>
                        <video width="320" height="240" controls>
                            <source src="./SimpleShooter.mp4" type="video/mp4" />
                        </video>
                        <p>A <span>Simple Shooter Game</span> created using Unreal Engine 4. This game is focused on the third person movement, movement animation, particle effects, Enemy AI and level restart after Win or Loss. The Aim of the game is to <span>shoot all the enemy</span></p>
                    </div>

                    <div className="hobbycard col-sm-5">
                        <h3 className="p-3 text-align-center">Building Escape</h3>
                        <video width="320" height="240" controls>
                            <source src="./BuildingEscape.mp4" type="video/mp4" />
                        </video>
                        <p>A <span>Building Escape Game</span> created using Unreal Engine 4. This game is focused on the environment creation and some physics. The aim of the game is to <span>find the statue, stolen it and thrown away</span></p>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="hobbycard col-sm-5">
                        <h3 className="p-3 text-align-center">Toon Tanks</h3>
                        <video width="320" height="240" controls>
                            <source src="./ToonTank.mp4" type="video/mp4" />
                        </video>
                        <p>A <span>Toon Tank Game</span> created using Unreal Engine 4. This game is focused on the physics based movements and particle effect. The Aim of the game is to <span>shoot all the enemy tanks</span></p>
                    </div>

                    <div className="hobbycard col-sm-5">
                        <h3 className="p-3 text-align-center">BullCow Game</h3>
                        <video width="320" height="240" controls>
                            <source src="./BullCowGame.mp4" type="video/mp4" />
                        </video>
                        <p>A <span>BullCow Game</span> created using Unreal Engine 4. This game is focued on some basics(Unreal c++) like constructors, BeginPlay, Inputs from player, conditions and loops. The aim of the game is to find the <span>Isogram word</span>(A Word with non repeating letters) by <span>using Bull and Cow count</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
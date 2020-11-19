import * as CgIcon  from "react-icons/cg";
import './component.css';

function Specailskills() {
    return(
        <div class="specailskills container">
        <h1>Special Skills</h1>
        <div className="row justify-content-center"><hr className="headingline"></hr> </div>
        <div className="row d-flex justify-content-center mb-1 ">
        <ul>
            <div className="d-flex iconsize"><CgIcon.CgCheck className="icons"/><li>C, C++</li></div>
            <div className="d-flex iconsize"><CgIcon.CgCheck className="icons"/><li>HTML5, CSS3</li></div>
            <div className="d-flex iconsize"><CgIcon.CgCheck className="icons"/><li>ReactJS</li></div>
            <div className="d-flex iconsize"><CgIcon.CgCheck className="icons"/><li>Mysql</li></div>
            <div className="d-flex iconsize"><CgIcon.CgCheck className="icons"/><li>Unreal Engine 4</li></div>
        </ul>
        </div>
        <hr className="line"></hr>
        </div>

);
}

export default Specailskills;
import './component.css';
import * as CgIcon  from "react-icons/cg";

function Specailskills() {
    return (
        <div class="specailskills container">
            <div className="row d-flex justify-content-center align-items-center mb-1">
                <div className='col-md-4'>
                    <img src='./skills.gif' alt="" />
                </div>
                <div className='col-md-7'>
                    <div className="title">Special Skills</div>
                    <div className='row justify-content-center'>
                        <ul>
                        <div className="d-flex bulletin"><CgIcon.CgCheck className="icons"/><li>Html, Css</li></div>
                        <div className="d-flex bulletin"><CgIcon.CgCheck className="icons"/> <li>Javascript, Typescript</li></div>
                        <div className="d-flex bulletin"><CgIcon.CgCheck className="icons"/> <li>React, Node</li></div>
                        <div className="d-flex bulletin"><CgIcon.CgCheck className="icons"/> <li>Mongodb</li></div>
                        <div className="d-flex bulletin"><CgIcon.CgCheck className="icons"/> <li>Mysql, PostgreSql</li></div>
                        <div className="d-flex bulletin"><CgIcon.CgCheck className="icons"/>  <li>Sequelize</li></div>
                        <div className="d-flex bulletin"><CgIcon.CgCheck className="icons"/> <li>C, C++</li></div>
                        <div className="d-flex bulletin"><CgIcon.CgCheck className="icons"/>  <li>Unreal Engine 4</li></div>
                        </ul>
                    </div>

                </div>
            </div>
            <hr className="line"></hr>
        </div>

    );
}

export default Specailskills;
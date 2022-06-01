
import './component.css';

function Experience() {
  return (
    <div className="experience container justify-content-center">
      <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-md-3">
      <img src='./experience.gif' alt=""/>
      </div>
      <div className="col-md-9">
      <div className="title">Experience</div>
      <p className="ml-4">1 year 2 months as a Product Developer at SurveySparrow, currently debugging and fixing real time customer issues in the Survey Platform powered with React, Node, Postgres and Sequelize.</p>
      </div>
      </div>
    </div>
  );
}

export default Experience;
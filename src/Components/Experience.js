import './component.css';

function Experience() {

  const klentyStartedDate = new Date('2022-08-31')
  const todayDate = new Date();

  const monthDiff = todayDate.getMonth() - klentyStartedDate.getMonth();
  const yearDiff = todayDate.getYear() - klentyStartedDate.getYear();
  console.log('-->', todayDate.getMonth(), klentyStartedDate.getMonth(), todayDate.getMonth() - klentyStartedDate.getMonth())

  return (
    <div className="experience container justify-content-center">
      <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-md-3">
      <img src='./Klenty-logo.png' style={{width:"30%"}} alt=""/>
      </div>
      <div className="col-md-9">
      <div className="title">Software Development Engineer</div>
      <p className="ml-4">{monthDiff + yearDiff * 12} months as a SDE at Klenty, building new features and optimizing existing code flows in the Sales Engagement Platform powered with React, Typescript, Node and Mongodb.</p>
      </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-md-9">
      <div className="title">Product Developer</div>
      <p className="ml-4">1 year 6 months as a Product Developer at SurveySparrow, active debugging and fixing real time customer issues in the Survey Platform powered with React, Node, Postgres and Sequelize.</p>
      </div>
      <div className="col-md-3">
      <img src='./experience.gif' alt=""/>
      </div>
      </div>
    </div>
  );
}

export default Experience;
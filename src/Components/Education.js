
import './component.css';

function Education() {
  return(
    <div className="educational">
      <h1>Educational Qualification</h1>
            <div>
              <div className = "row">  
                  <h4 className="col-sm-2">2017 - 2021</h4>
                  <h4 className="col-sm-5">Government College of Technology,Coimbatore</h4>
                  <h4 className="col-sm-3">B.Tech - IT</h4> 
                  <h4 className="col-sm-2">CGPA - 7.89*</h4> 
               </div>
               <div className = "segments row ">  
                  <h4 className="col-sm-2">2016 - 2017</h4>
                  <h4 className="col-sm-5">Vetri Vikaas Girls Higher Sec School,Mallur</h4>
                  <h4 className="col-sm-3">HSC</h4> 
                  <h4 className="col-sm-2">96%</h4> 
               </div>
               <div className = "segments row">  
                  <h4 className="col-sm-2">2014 - 2015</h4>
                  <h4 className="col-sm-5">Government Girls Higher Sec School,Odugathur</h4>
                  <h4 className="col-sm-3">SSLC</h4> 
                  <h4 className="col-sm-2">94%</h4> 
               </div>
          </div>
          <hr className="line"></hr>
    </div>
 );
}

export default Education;

import './component.css';

function Education() {
  return(
    <div className="educational container">
      <h1>Educational Qualification</h1>
      <div className="row d-flex justify-content-center"><hr className="headingline"></hr> </div>
      <div class="card-deck pt-4">
      <div class="card shadow-lg p-3 mb-5 bg-white rounded">
         <div class="card-body">
            <h5 class="card-title"> <img class="card-img-top w-25 pr-3" src="./Graduate.png" alt="Card image cap"/>2017 - 2021</h5>
            <p class="card-text text-align-center">Government College of Technology,Coimbatore.</p>
            <p class="card-text">B.Tech - IT</p>
            <p class="card-text">CGPA - 7.89*</p>
         </div>
      </div>
      <div class="card shadow-lg p-3 mb-5 bg-white rounded">
         <div class="card-body">
            <h5 class="card-title"><img class="card-img-top w-25 pr-3" src="./Graduate.png" alt="Card image cap"/>2016 - 2017</h5>
            <p class="card-text">Vetri Vikaas Girls Higher Sec School,Mallur.</p>
            <p class="card-text">HSC</p>
            <p class="card-text">Percentage - 96%</p>
         </div>
      </div>
      <div class="card shadow-lg p-3 mb-5 bg-white rounded">
         <div class="card-body jusyify-content-center">
            <h5 class="card-title"><img class="card-img-top w-25 pr-3" src="./Graduate.png" alt="Card image cap"/>2014 - 2015</h5>
            <p class="card-text">Government Girls Higher Sec School,Odugathur.</p>
            <p class="card-text">SSLC</p>
            <p class="card-text">Percentage - 94%</p>
         </div>
      </div>
      </div>
      <hr></hr>
    </div>
 );
}

export default Education;
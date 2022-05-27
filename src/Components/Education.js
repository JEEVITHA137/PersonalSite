
import './component.css';

function Education() {
  return(
    <div className="educational container justify-content-center">
      <div className="title">Educational Qualification</div>
      <div className="row d-flex justify-content-center"><hr className="headingline"></hr> </div>
      <div class="card-deck pt-4 justify-content-center">
      <div class="card shadow-lg p-3 mb-5 bg-white rounded">
         <div class="card-body">
            <h5 class="card-title"> <img class="card-img-top w-25 pr-3" src="./Graduate.png" alt="Cardcap"/>2017-2021</h5>
            <p class="card-text text-align-center">Government College of Technology, Coimbatore</p>
            <p class="card-text">B.Tech - IT</p>
            <p class="card-text percentage">CGPA - 7.78*</p>
         </div>
      </div>
      <div class="card shadow-lg p-3 mb-5 bg-white rounded">
         <div class="card-body">
            <h5 class="card-title"><img class="card-img-top w-25 pr-3" src="./Graduate.png" alt="Cardcap"/>2016-2017</h5>
            <p class="card-text">Vetri Vikaas Girls Higher Sec School, Mallur</p>
            <p class="card-text">HSC</p>
            <p class="card-text percentage">Percentage - 96%</p>
         </div>
      </div>
      <div class="card shadow-lg p-3 mb-5 bg-white rounded">
         <div class="card-body jusyify-content-center">
            <h5 class="card-title"><img class="card-img-top w-25 pr-3" src="./Graduate.png" alt="Cardcap"/>2014-2015</h5>
            <p class="card-text ">Government Girls Higher Sec School, Odugathur</p>
            <p class="card-text">SSLC</p>
            <p class="card-text percentage">Percentage - 94%</p>
         </div>
      </div>
      </div>
      <hr  className="line"></hr>
    </div>
 );
}

export default Education;
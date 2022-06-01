
import './component.css';

function Education() {
  return (
    <div className="educational container justify-content-center">
      <div className="ow d-flex justify-content-center align-items-center ">
        <div className="col-md-8">
          <div class="rb-container">
            <div className="title pb-3">Educational Qualification</div>
            <ul class="rb">
              <li class="rb-item" ng-repeat="itembx">
                <div className='content pt-n3'>
                  <h5>2017-2021</h5>
                  <div className='row'>
                    <div className='course pb-1 col-sm-4'>B.Tech - IT</div>
                    <span className='course pb-1 col-sm-8'>CGPA - 7.89</span>
                  </div>

                  <p className='institute'>Government College of Technology, Coimbatore</p>
                </div>
              </li>
              <li class="rb-item" ng-repeat="itembx">
                <div className='content'>
                  <h5>2016-2017</h5>
                  <div className='row'>
                    <div className='course pb-1 col-sm-4'>HSC</div>
                    <span className='course pb-1 col-sm-8'>Percentage - 96%</span>
                  </div>
                  <p className='institute' >Vetri Vikaas Girls Higher Sec School, Mallur</p>
                </div>
              </li>

              <li class="rb-item" ng-repeat="itembx">
                <div className='content'>
                  <h5>2014-2015</h5>
                  <div className='row'>
                    <div className='course pb-1 col-sm-4'>SSLC</div>
                    <span className='course pb-1 col-sm-8'>Percentage - 94%</span>
                  </div>
                  <p className='institute'>Government Girls Higher Sec School, Odugathur</p>
                </div>
              </li>

            </ul>

          </div>
        </div>
        <div className="col-md-4">
          <img src='./education.png' alt="" />
        </div>
      </div>

    </div>
  );
}

export default Education;
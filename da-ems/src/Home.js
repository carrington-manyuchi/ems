import React from "react";

const Home = () => {
  return (
    <>
      <div className="col-md-12 m-t-30">
        <div className="overview-wrap">
          <h2 className="title-1">Digital Academy Employees Overview</h2>
          <button className="au-btn au-btn-icon au-btn--blue">
            <i className="zmdi zmdi-plus"></i>add item
          </button>
        </div>
      </div>
      {/** Overview */}
      <div className="row m-t-25">
        <div className="col-sm-6 col-lg-3 ">
          <div className="overview-item overview-item--c1">
            <div className="overview__inner">
              <div className="overview-box clearfix">
                <div className="icon">
                  <i className="zmdi zmdi-account-o"></i>
                </div>
                <div className="text">
                  <h2>6</h2>
                  <span>Employees on leave</span>
                </div>
              </div>
              <div className="overview-chart">
                <canvas id="widgetChart1"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="overview-item overview-item--c2">
            <div className="overview__inner">
              <div className="overview-box clearfix">
                <div className="icon">
                  <i class="zmdi zmdi-settings zmdi-hc-spin"></i>
                </div>
                <div className="text">
                  <h2>28</h2>
                  <span>Employees online</span>
                </div>
              </div>
              <div className="overview-chart">
                <canvas id="widgetChart2"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="overview-item overview-item--c3">
            <div className="overview__inner">
              <div className="overview-box clearfix">
                <div className="icon">
                  <i class="zmdi zmdi-alert-polygon"></i>
                </div>
                <div className="text">
                  <h2>1</h2>
                  <span>Didn't report on time</span>
                </div>
              </div>
              <div className="overview-chart">
                <canvas id="widgetChart3"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="overview-item overview-item--c4">
            <div className="overview__inner">
              <div className="overview-box clearfix">
                <div className="icon">
                  <i class="zmdi zmdi-developer-board"></i>
                </div>
                <div className="text">
                  <h2>96%</h2>
                  <span>Attendance last week</span>
                </div>
              </div>
              <div className="overview-chart">
                <canvas id="widgetChart4"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** <!-- PAGE CONTAINER--> */}

      {/** <!-- MAIN CONTENT--> */}
      <div className="main-content">
        <div className="section__content section__content--p30">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="overview-wrap mb-5 ">
                  <h2 className="title-1"></h2>
                  <button className="au-btn au-btn-icon au-btn--blue">
                    <i className="zmdi zmdi-plus"></i> Add Staff Appointments
                  </button>
                </div>
                <div className="au-card">
                  <div id="calendar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import Home from "./Home";
import Employees from "./Employees";
import Login from "./Login";
import Register from "./Register";

const Dashboard = () => {
  return (
    <div class="page-wrapper">
      {/** <!-- HEADER MOBILE--> */}
      <header class="header-mobile d-block d-lg-none">
        <div class="header-mobile__bar">
          <div class="container-fluid">
            <div class="header-mobile-inner">
              <a class="logo" href="index.html">
                <img src="images/icon/logo.png" alt="CoolAdmin" />
              </a>
              <button class="hamburger hamburger--slider" type="button">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <nav class="navbar-mobile">
          <div class="container-fluid">
            <ul class="navbar-mobile__list list-unstyled">
              <li class="has-sub">
                <a class="js-arrow" href="#">
                  <i class="fas fa-tachometer-alt"></i>Dashboard
                </a>
              </li>
              <li>
                <a href="chart.html">
                  <i class="fas fa-chart-bar"></i>All Employees
                </a>
              </li>
              <li>
                <a href="table.html">
                  <i class="fas fa-table"></i>Add Employee
                </a>
              </li>
              <li>
                <a href="form.html">
                  <i class="far fa-check-square"></i>All Departments
                </a>
              </li>
              <li>
                <a href="calendar.html">
                  <i class="fas fa-calendar-alt"></i>Add Department
                </a>
              </li>
              <li>
                <a href="map.html">
                  <i class="fas fa-map-marker-alt"></i>Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/** <!-- END HEADER MOBILE--> */}

      {/** <!-- MENU SIDEBAR--> */}
      <aside class="menu-sidebar d-none d-lg-block">
        <div class="logo">
          <a href="#">
            <img src="images/icon/logo-s.png" alt="Cool Admin" />
          </a>
        </div>
        <div class="menu-sidebar__content js-scrollbar1">
          <nav class="navbar-sidebar">
            <ul class="list-unstyled navbar__list">
              <li class="active has-sub">
                <a class="js-arrow" href="#">
                  <i class="fas fa-tachometer-alt"></i>Dashboard
                </a>
              </li>
              <li>
                <a href="chart.html">
                  <i class="fas fa-chart-bar"></i>All Employees
                </a>
              </li>
              <li>
                <a href="table.html">
                  <i class="fas fa-table"></i>Add Employee
                </a>
              </li>
              <li>
                <a href="form.html">
                  <i class="far fa-check-square"></i>All Departments
                </a>
              </li>
              <li>
                <a href="calendar.html">
                  <i class="fas fa-calendar-alt"></i>Add Department
                </a>
              </li>
              <li class="has-sub">
                <a class="js-arrow" href="#">
                  <i class="fas fa-copy"></i>Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      {/** <!-- END MENU SIDEBAR--> */}

      {/** <!-- PAGE CONTAINER--> */}
      <div class="page-container">
        {/** <!-- HEADER DESKTOP--> */}
        <header class="header-desktop">
          <div class="section__content section__content--p30">
            <div class="container-fluid">
              <div class="header-wrap">
                <form class="form-header" action="" method="POST">
                  <input
                    class="au-input au-input--xl"
                    type="text"
                    name="search"
                    placeholder="Search for employees &amp; departments..."
                  />
                  <button class="au-btn--submit" type="submit">
                    <i class="zmdi zmdi-search"></i>
                  </button>
                </form>
                <div class="header-button">
                  <div class="noti-wrap"></div>
                  <div class="account-wrap">
                    <div class="account-item clearfix js-item-menu">
                      <div class="image">
                        <img
                          src="/images/icon/carrington2.jpeg"
                          alt="Carrington Manyuchi"
                        />
                      </div>
                      <div class="content">
                        <a class="js-acc-btn" href="#">
                          Carrington Manyuchi
                        </a>
                      </div>
                      <div class="account-dropdown js-dropdown">
                        <div class="info clearfix">
                          <div class="image">
                            <a href="#">
                              <img
                                src="images/icon/avatar-01.jpg"
                                alt="John Doe"
                              />
                            </a>
                          </div>
                          <div class="content">
                            <h5 class="name">
                              <a href="#">john doe</a>
                            </h5>
                            <span class="email">johndoe@example.com</span>
                          </div>
                        </div>
                        <div class="account-dropdown__body">
                          <div class="account-dropdown__item">
                            <a href="#">
                              <i class="zmdi zmdi-account"></i>Account
                            </a>
                          </div>
                          <div class="account-dropdown__item">
                            <a href="#">
                              <i class="zmdi zmdi-settings"></i>Setting
                            </a>
                          </div>
                          <div class="account-dropdown__item">
                            <a href="#">
                              <i class="zmdi zmdi-money-box"></i>Billing
                            </a>
                          </div>
                        </div>
                        <div class="account-dropdown__footer">
                          <a href="#">
                            <i class="zmdi zmdi-power"></i>Logout
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/** <!-- HEADER DESKTOP--> */}

        {/** <!-- MAIN CONTENT--> */}
        <div class="main-content">
          <div class="section__content section__content--p30">
            <div class="container-fluid">
              <div class="row">
                {/** Pages will get in here */}
                <Register />
              </div>
            </div>
          </div>
        </div>
        {/** <!-- END MAIN CONTENT--> */}

        {/** <!-- END PAGE CONTAINER--> */}
      </div>
    </div>
  );
};

export default Dashboard;

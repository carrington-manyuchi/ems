import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div class="page-wrapper">
      <div class="page-content--bge5">
        <div class="container">
          <div class="login-wrap">
            <div class="login-content">
              <div class="login-logo">
                <a href="#">
                  <img src="/images/icon/logo-s.png" alt="CoolAdmin" />
                </a>
              </div>
              <div class="login-form">
                <form action="" method="post">
                  <div class="form-group">
                    <label>Username</label>
                    <input
                      class="au-input au-input--full"
                      type="text"
                      name="username"
                      placeholder="Username"
                    />
                  </div>
                  <div class="form-group">
                    <label>Email Address</label>
                    <input
                      class="au-input au-input--full"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      class="au-input au-input--full"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <div class="login-checkbox">
                    <label>
                      <input type="checkbox" name="aggree" />
                      Agree the terms and policy
                    </label>
                  </div>
                  <button
                    class="au-btn au-btn--block au-btn--green m-b-20"
                    type="submit"
                  >
                    register
                  </button>
                </form>
                <div class="register-link">
                  <p>
                    Already have account?
                    <Link to="/" element={<Login />}>
                      <a>Sign In</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

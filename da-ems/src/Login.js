import React, { useState } from "react";
import { Link } from "react-router-dom";
import Register from "./Register";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div class="page-wrapper">
      <div class="page-content--bge5 mt-2">
        <div class="container">
          <div class="login-wrap">
            <div class="login-content">
              <div class="login-logo">
                <a href="#">
                  <img src="/images/icon/logo-s.png" alt="CoolAdmin" />
                </a>
              </div>
              <div class="login-form">
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label>Email Address</label>
                    <input
                      class="au-input au-input--full"
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={(e) =>
                        setValues({ ...values, email: e.target.value })
                      }
                    />
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      class="au-input au-input--full"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={(e) => ({
                        ...values,
                        password: e.target.value,
                      })}
                    />
                  </div>
                  <div class="login-checkbox">
                    <label>
                      <input type="checkbox" name="remember" />
                      Remember Me
                    </label>
                    <label>
                      <a href="#">Forgotten Password?</a>
                    </label>
                  </div>
                  <button
                    class="au-btn au-btn--block au-btn--green m-b-20"
                    type="submit"
                  >
                    sign in
                  </button>
                </form>
                <div class="register-link">
                  <p>
                    Don't you have account?
                    <Link to="/register" element={<Register />}>
                      <a>Sign Up Here</a>
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

export default Login;

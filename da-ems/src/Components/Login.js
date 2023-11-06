import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Register from "./Register";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // for storing cookies
  axios.defaults.withCredentials = true;
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5173/auth/adminlogin", values)
      .then((result) => {
        if (result.data.loginStatus) {
          navigate("/dashboard");
        } else {
          setError(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
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
              <div className="text-danger">{error && error}</div>
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
                      onChange={(e) =>
                        setValues({
                          ...values,
                          password: e.target.value,
                        })
                      }
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

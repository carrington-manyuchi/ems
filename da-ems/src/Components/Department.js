import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Department = () => {
  const [department, setDepartment] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5173/auth/department", { department })
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/departments");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div class="page-wrapper">
      <div class="page-content--bge5 mt-2">
        <h2 className="title-1 m-b-30">Add A Department</h2>
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
                    <label>Department:</label>
                    <input
                      class="au-input au-input--full"
                      type="text"
                      name="departments"
                      placeholder="Enter new department"
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                  </div>
                  <button
                    class="au-btn au-btn--block au-btn--green m-b-20"
                    type="submit"
                  >
                    Add New department
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department_id: "",
    status: "",
    image: "",
    password: "",
  });

  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5173/auth/departments")
      .then((result) => {
        if (result.data.Status) {
          setDepartments(result.data.Result);
        } else {
          alert(result.data.error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5173/auth/addEmployee", employee)
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-content">
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h3 className="title-5 m-b-35">Create A New Employee </h3>
              <form onSubmit={handleSubmit}>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="firstName"> Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder="First Name"
                      name="firstName"
                      onChange={(e) => {
                        setEmployee({
                          ...employee,
                          firstName: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="lastName">Surname</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      onChange={(e) => {
                        setEmployee({ ...employee, lastName: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      onChange={(e) => {
                        setEmployee({ ...employee, email: e.target.value });
                      }}
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="department">Department</label>
                    <select
                      id="department"
                      name="department"
                      class="form-control"
                      onChange={(e) => {
                        setEmployee({
                          ...employee,
                          department_id: e.target.value,
                        });
                      }}
                    >
                      {departments.map((dpt) => (
                        <option value={dpt.id}>{dpt.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <fieldset class="form-group">
                    <div class="row">
                      <legend class="col-form-label col-sm-2 pt-0">
                        Status
                      </legend>
                      <div class="col-sm-10">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios1"
                            value="active"
                            onChange={(e) => {
                              setEmployee({
                                ...employee,
                                status: e.target.value,
                              });
                            }}
                          />
                          <label class="form-check-label" for="gridRadios1">
                            Active
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="inactive"
                            onChange={(e) => {
                              setEmployee({
                                ...employee,
                                status: e.target.value,
                              });
                            }}
                          />
                          <label class="form-check-label" for="gridRadios2">
                            Inactive / Resigned
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div class="form-group">
                  <label for="image">Select Image</label>
                  <input
                    type="file"
                    class="form-control-file"
                    id="image"
                    name="image"
                    onChange={(e) => {
                      setEmployee({ ...employee, image: e.target.files[0] });
                    }}
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="password">Password</label>
                    <input
                      type="text"
                      class="form-control"
                      id="password"
                      name="password"
                      placeholder="First Name"
                      onChange={(e) => {
                        setEmployee({ ...employee, password: e.target.value });
                      }}
                    />
                  </div>
                  <div class="form-group col-md-6"></div>
                </div>
                <button type="submit" class="btn btn-primary">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;

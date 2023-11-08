import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditEmployee = () => {
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department_id: "",
    status: "",
  });
  const [departments, setDepartments] = useState([]);
  const [worker, setWorker] = useState([]);
  const navigate = useNavigate();
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

    axios
      .get(`http://localhost:5173/auth/employee/` + id)
      .then((result) => {
        setEmployee({
          ...employee,
          firstName: result.data.Result[0].firstName,
          lastName: result.data.Result[0].lastName,
          email: result.data.Result[0].email,
          status: result.data.Result[0].status,
          department_id: result.data.Result[0].department_id,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5173/auth/edit_employee/" + id, employee)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/employees");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-content">
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h3 className="title-5 m-b-35">Edit Employee </h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="firstName"> Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First Name"
                      name="firstName"
                      value={employee.firstName}
                      onChange={(e) => {
                        setEmployee({
                          ...employee,
                          firstName: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="lastName">Surname</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={employee.lastName}
                      onChange={(e) => {
                        setEmployee({ ...employee, lastName: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={employee.email}
                      onChange={(e) => {
                        setEmployee({ ...employee, email: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="department">Department</label>
                    <select
                      id="department"
                      name="department"
                      className="form-control"
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
                <div className="form-group">
                  <fieldset className="form-group">
                    <div className="row">
                      <legend className="col-form-label col-sm-2 pt-0">
                        Status
                      </legend>
                      <div className="col-sm-10">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios1"
                            value={employee.status}
                            onChange={(e) => {
                              setEmployee({
                                ...employee,
                                status: e.target.value,
                              });
                            }}
                          />
                          <label className="form-check-label" for="gridRadios1">
                            Active
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value={employee.status}
                            onChange={(e) => {
                              setEmployee({
                                ...employee,
                                status: e.target.value,
                              });
                            }}
                          />
                          <label className="form-check-label" for="gridRadios2">
                            Inactive / Resigned
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <button type="submit" className="btn btn-primary">
                  Update employee
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;

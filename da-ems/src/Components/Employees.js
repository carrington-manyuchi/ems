import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Employees = () => {
  const [worker, setWorker] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5173/auth/employees")
      .then((result) => {
        if (result.data.Status) {
          setWorker(result.data.Result);
        } else {
          alert(result.data.error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5173/auth/delete_employee/" + id)
      .then((result) => {
        if (result.data.Status) {
          window.location.reload();
        } else {
          alert(result.data.Error);
        }
      });
  };

  return (
    <div className="main-content">
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-1 m-b-35">All Employees List</h2>
              <div className="table-data__tool">
                <div className="table-data__tool-left">
                  <div className="rs-select2--light rs-select2--md">
                    <select className="js-select2" name="property">
                      <option selected="selected">All Department</option>
                      <option value="">Ayoba</option>
                      <option value="">Data Science</option>
                      <option value="">Everyday banking</option>
                      <option value="">Fullstack</option>
                      <option value="">PWD</option>
                      <option value="">Sales Force</option>
                    </select>
                    <div className="dropDownSelect2"></div>
                  </div>
                  <div className="rs-select2--light rs-select2--sm">
                    <select className="js-select2" name="time">
                      <option selected="selected">Today</option>
                      <option value="">3 Days</option>
                      <option value="">1 Week</option>
                    </select>
                    <div className="dropDownSelect2"></div>
                  </div>
                  <button className="au-btn-filter">
                    <i className="zmdi zmdi-filter-list"></i>filters
                  </button>
                </div>
                <div className="table-data__tool-right">
                  <button className="au-btn au-btn-icon au-btn--green au-btn--small">
                    <Link to="/dashboard/addEmployee">
                      <a className="text-white">
                        <i className="zmdi zmdi-plus"></i>add employee
                      </a>
                    </Link>
                  </button>

                  <div className="rs-select2--dark rs-select2--sm rs-select2--dark2">
                    <select className="js-select2" name="type">
                      <option selected="selected">Export</option>
                      <option value="">Export as pdf</option>
                      <option value="">Export as word</option>
                    </select>
                    <div className="dropDownSelect2"></div>
                  </div>
                </div>
              </div>
              <div className="table-responsive table-responsive-data2">
                <table className="table table-data2">
                  <thead>
                    <tr className="text-center">
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Department</th>
                    </tr>
                  </thead>
                  <tbody>
                    {worker.map((emp) => (
                      <tr className="tr-shadow text-center">
                        <td className=""> {emp.firstName} </td>

                        <td className="">{emp.lastName}</td>
                        <td>
                          <span className="block-email">{emp.email}</span>
                        </td>
                        <td> {emp.status} </td>
                        <td>{emp.department}</td>
                        <td>
                          <div className="table-data-feature">
                            <button
                              className="item"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="View"
                            >
                              <Link to={`/dashboard/employee_detail/` + emp.id}>
                                <a href="">
                                  <i className="zmdi zmdi-eye"></i>
                                </a>
                              </Link>
                            </button>
                            <button
                              className="item"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                            >
                              <Link to={`/dashboard/edit_employee/` + emp.id}>
                                <a>
                                  <i className="zmdi zmdi-edit"></i>
                                </a>
                              </Link>
                            </button>
                            <button
                              className="item"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Delete"
                              onClick={() => handleDelete(emp.id)}
                            >
                              <i className="zmdi zmdi-delete"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                <p>
                  Copyright © 2018 Colorlib. All rights reserved. Template by{" "}
                  <a href="https://colorlib.com">Colorlib</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;

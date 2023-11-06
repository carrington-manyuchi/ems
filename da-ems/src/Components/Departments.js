import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Departments = () => {
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

  return (
    <div className="main-content">
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="table-data__tool ">
            <div className="table-data__tool-left">
              <div className="rs-select2--light rs-select2--md">
                <div className="dropDownSelect2"></div>
              </div>
              <div className="rs-select2--light rs-select2--sm">
                <div className="dropDownSelect2"></div>
              </div>
            </div>
            <div className="table-data__tool-right">
              <button className="au-btn au-btn-icon au-btn--green au-btn--small mb-3">
                <Link to="/dashboard/department">
                  <a className="text-white">
                    <i className="zmdi zmdi-plus"></i>Add a department
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

          <h3 className="title-3 m-b-30">Digital Academy Departments</h3>
          <div className="row">
            <div className="table-responsive table--no-card m-b-30">
              <table className="table table-borderless table-striped table-earning">
                <thead>
                  <tr>
                    <th className="text-center">Departments</th>
                  </tr>
                </thead>
                <tbody>
                  {departments.map((dpt) => (
                    <tr>
                      <td> {dpt.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;

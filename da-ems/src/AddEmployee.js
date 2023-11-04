import React, { useState } from "react";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [department, setDepartment] = useState();
  const [status, setStatus] = useState();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/dashboard/addEmployee", {
        firstName,
        lastName,
        status,
        department,
        email,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-content">
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h3 className="title-5 m-b-35">Create A New Employees </h3>
              <form onSubmit={Submit}>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputState">Department</label>
                    <select
                      id="inputState"
                      class="form-control"
                      onChange={(e) => setDepartment(e.target.value)}
                    >
                      <option selected>Select Department</option>
                      <option>Ayoba</option>
                      <option>Data Science</option>
                      <option>Everyday Banking</option>
                      <option>Fullstack</option>
                      <option>PWD</option>
                      <option>Sales Force</option>
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
                            value="option1"
                            onChange={(e) => setStatus(e.target.value)}
                            checked
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
                            value="option2"
                            onChange={(e) => setStatus(e.target.value)}
                          />
                          <label class="form-check-label" for="gridRadios2">
                            Inactive / Resigned
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
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

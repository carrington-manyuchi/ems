import React from "react";

const Departments = () => {
  return (
    <div className="main-content">
      <div className="section__content section__content--p30">
        <div className="container-fluid">
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
                  <tr>
                    <td>Ayoba</td>
                  </tr>
                  <tr>
                    <td>Full Stack</td>
                  </tr>
                  <tr>
                    <td>Every Day Banking</td>
                  </tr>
                  <tr>
                    <td>Data Science</td>
                  </tr>
                  <tr>
                    <td>PWD</td>
                  </tr>
                  <tr>
                    <td>Sales Force</td>
                  </tr>
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

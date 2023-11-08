import "./App.css";
import Dashboard from "./Components/Dashboard";
import Employees from "./Components/Employees";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Departments from "./Components/Departments";
import Department from "./Components/Department";
import AddEmployee from "./Components/AddEmployee";
import EditEmployee from "./Components/EditEmployee";
import EmployeeDetail from "./Components/EmployeeDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<Home />}></Route>
          <Route path="/dashboard/employees" element={<Employees />}></Route>
          <Route
            path="/dashboard/departments"
            element={<Departments />}
          ></Route>
          <Route path="/dashboard/department" element={<Department />}></Route>
          <Route
            path="/dashboard/addEmployee"
            element={<AddEmployee />}
          ></Route>
          <Route
            path="/dashboard/edit_employee/:id"
            element={<EditEmployee />}
          ></Route>
          <Route
            path="/dashboard/employee_detail/:id"
            element={<EmployeeDetail />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

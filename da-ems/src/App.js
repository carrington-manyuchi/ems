import "./App.css";
import Dashboard from "./Dashboard";
import Employees from "./Employees";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Departments from "./Departments";
import Department from "./Department";
import AddEmployee from "./AddEmployee";


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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

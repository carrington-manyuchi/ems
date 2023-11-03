import "./App.css";
import Dashboard from "./Dashboard";
import Employees from "./Employees";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<Home />}></Route>
          <Route path="/dashboard/employees" element={<Employees />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

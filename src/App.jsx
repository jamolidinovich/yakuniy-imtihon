import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Plp from "./pages/Plp";
import Pdp from "./pages/Pdp";
import Signin from "./pages/Signin";
import Error from "./pages/Error";
import "./App.css";
import Signup from "./pages/Signup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/plp" element={<Plp></Plp>}></Route>
      <Route path="/pdp/:id" element={<Pdp></Pdp>}></Route>
      <Route path="signin" element={<Signin></Signin>}></Route>
      <Route path="signup" element={<Signup></Signup>}></Route>
      <Route path="*" element={<Error></Error>}></Route>
    </Routes>
  );
}

export default App;

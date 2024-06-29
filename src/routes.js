import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Framer from "./pages/Framer";
import ReactSpring from "./pages/ReactSpring";
import Framer3D from "./pages/Framer3D";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Framer3D />} exact />
        <Route path="/Framer" element={<Framer />} />
        <Route path="/Framer3d" element={<Framer3D />} />
        <Route path="/ReactSpring" element={<ReactSpring />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

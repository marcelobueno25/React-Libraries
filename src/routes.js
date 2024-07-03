import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Exemplo01 from "./pages/Exemplo01";
import Exemplo02 from "./pages/Exemplo02";
import Exemplo03 from "./pages/Exemplo03";
import Exemplo04 from "./pages/Exemplo04";
import Exemplo05 from "./pages/Exemplo05";
import Mapa from "./pages/Mapa";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/exemplo01" element={<Exemplo01 />} />
        <Route path="/exemplo02" element={<Exemplo02 />} />
        <Route path="/exemplo03" element={<Exemplo03 />} />
        <Route path="/exemplo04" element={<Exemplo04 />} />
        <Route path="/exemplo05" element={<Exemplo05 />} />
        <Route path="/mapa" element={<Mapa />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

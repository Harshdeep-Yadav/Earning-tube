import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Earning from "./pages/Earning";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/earning" element={<Earning />} />
    </Routes>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Swap from "./pages/Swap";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Swap />} />
    </Routes>
  </BrowserRouter>
);

export default App;

import React from "react";
import "./index.css";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={<Home />} />
        <Route
          path="/calculator"
          element={<Calculator />} />
        <Route
          path="/"
          element={<Home />} />
        <Route
          path="*"
          element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

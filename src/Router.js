import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestRouter from "./pages/TestRouter/TestRouter";

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<TestRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
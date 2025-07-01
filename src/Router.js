import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import TestRouter from "./pages/TestRouter/TestRouter";
import TestCity from "./pages/TestCity/TestCity";

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gpt" element={<TestRouter />} />
        <Route path="/city" element={<TestCity />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
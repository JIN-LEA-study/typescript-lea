import React from "react";
import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

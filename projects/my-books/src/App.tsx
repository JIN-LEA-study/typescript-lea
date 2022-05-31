import React from "react";
import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";

// ErrorBoundary
import { ErrorBoundary } from "react-error-boundary";

// router page
import Home from "./pages/Home";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/book/:id" element={<Detail />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;

import "./styles.css";
import React from "react";
import Home from "./Home";
import About from "./About";
import User from "./User";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from "./Page404";
import Filter from "./Filter";

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

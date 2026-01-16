import React from "react";
import { Routes, Route } from "react-router";
import Home from "./home/Home";
import Services from "./services/Services";
import About from "./about/About";
import Resume from "./resume/Resume";
import Portfolio from "./portfolio/Portfolio";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/resume" element={<Resume></Resume>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<div>404 page not found</div>}></Route>
      </Routes>
    </div>
  );  
};

export default Routing;

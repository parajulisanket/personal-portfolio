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
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404 page not found</div>} />
      </Routes>
    </div>
  );
};

export default Routing;

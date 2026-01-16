import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import Testimonial from "./components/testimonial/Testimonial";
// import Routing from "./components/Routing";

const App = () => {
  return (
    <div>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonial />
        <Blog />
        <Contact />
      </main>
        {/* <Routing></Routing> */}
    </div>
  );
};

export default App;

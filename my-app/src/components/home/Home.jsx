import React from "react";
import "./home.css";
import Me from "../../assests/Me.jpg";
import HeaderSocial from "./HeaderSocial";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img
          src={Me}
          alt=""
          className="home_img"
          style={{ height: "225px", width: "225px", borderRadius: "50%" }}
        />
        <h1 className="home__name">Sanket Parajuli</h1>
        <span className="home__education">
          I'm a front-End developer
          <HeaderSocial />
        </span>. 

        <a href="#contact" className="btn">
          Hire me
        </a>
        <ScrollDown />
      </div>
      <Shapes/>
    </section>
  );
};

export default Home;

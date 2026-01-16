import React from "react";
import "./about.css";
import about_img from "../../assests/about_img.JPG";
import CV from "../../assests/Sanket-Parajuli-CV.pdf";
import Aboutbox from "./Aboutbox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img
          src={about_img}
          alt=""
          className="about__img"
          style={{ height: "225px", width: "225px", borderRadius: "50%" }}
        />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I'm Sanket Parajuli, web developer from Baneshower, Kathmandu,
              Nepal. I have rich experience in web site design and building a
              customization, also I am good at WordPress.
            </p>
            <a href={CV} className="btn" download>
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage Design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Video editing</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage editing"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Aboutbox />
    </section>
  );
};

export default About;

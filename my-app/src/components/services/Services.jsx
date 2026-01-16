import React from "react";
import "./services.css";
import service1 from "../../assests/service1.png";
import service2 from "../../assests/service2.png";
import service3 from "../../assests/service3.png";

const data = [
  {
    id: 1,
    image: service1,
    title: "UI/UX design",
    description:
      "Hi! I'm a UX/UI Designer with a background in Psychology, which gives me a unique edge in empathizing with users and improving their experience through design. My research experience has refined my problem-solving skills and user insights.",
  },
  {
    id: 2,
    image: service2,
    title: "Web Development",
    description:
      "I want to introduce myself and my skills in a way that is clear, concise, and catches the reader's attention. I am a web developer with years of experience in creating and managing websites. My skills include coding in HTML, CSS, and JavaScript, as well as working with CMSs like WordPress and Drupal.",
  },
  {
    id: 3,
    image: service3,
    title: "Video Editing",
    description:
      "I have extensive experience using video editing software. I have been working as a video editor for the past five years, during which time I have learned how to use a variety of different programs.",
  },
];


const Services = () => {
  return <section className="service container section" id="services">
    <h2 className="section__title">Services</h2>
    <div className="services__container grid">
      {data.map(({id,image, title, description})=>{
        return(
          <div className="service__card" key={id}>
            <img src={image} alt="" className="services__img" />

            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        );
      })}
    </div>
  </section>;
};

export default Services;

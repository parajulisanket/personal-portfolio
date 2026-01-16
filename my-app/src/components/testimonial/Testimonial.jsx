import React from "react";
import "./testimonial.css";
import img1 from "../../assests/img1.png";
import img2 from "../../assests/img2.png";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: img1,
    title: "John Cena",
    subtitle: "Product designer at dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good Luck! 👍",
  },
  {
    id: 2,
    image: img2,
    title: "Randy Orton",
    subtitle: "Product designer at dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good Luck! 👍",
  },
];
const Testimonial = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__titile">Clients & Reviews</h2>

      <Swiper
        className="testimonials__container grid"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop = {true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="images" />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;

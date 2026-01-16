import React from "react";

const HeaderSocial = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://x.com/home"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-twitter"></i>
      </a>
      <a
        href="https://behance.com/home"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-behance"></i>
      </a>
      <a
        href="https://dribbble.com/home"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-dribbble"></i>
      </a>
      <a
        href="https://www.pinterest.com"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-pinterest "></i>
      </a>
    </div>
  );
};

export default HeaderSocial;

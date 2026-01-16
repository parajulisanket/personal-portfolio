import React from "react";
import "./blog.css";
import review from "../../assests/review.png";
import tutorial from "../../assests/tutorial.png";
import business from "../../assests/business.png";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="https://www.geeksforgeeks.org/android/android-development-tools/">
              <span className="blog__category">Reviews</span>
            </a>
            <a href="https://www.geeksforgeeks.org/android/android-development-tools/">
              <img src={review} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              5 Best App Developments Tools for Your Projects
            </h3>
            <div className="blog__meta">
              <span>09 February, 2023</span>
              <spna className="blog__dot"></spna>
              <span>Bolby</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="https://in.nttdatapay.com/blog/common-misconceptions-about-payment-gateways/">
              <span className="blog__category">Tutorial</span>
            </a>
            <a href="https://in.nttdatapay.com/blog/common-misconceptions-about-payment-gateways/">
              <img src={tutorial} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Common Misconceptions About Payment</h3>
            <div className="blog__meta">
              <span>20 August, 2023</span>
              <spna className="blog__dot"></spna>
              <span>John</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="https://www.forbes.com/sites/robynshulman/2018/08/24/5-things-you-should-know-before-joining-a-startup/">
              <span className="blog__category">Business</span>
            </a>
            <a href="https://www.forbes.com/sites/robynshulman/2018/08/24/5-things-you-should-know-before-joining-a-startup/">
              <img src={business} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              5 Things to know about startup Business
            </h3>
            <div className="blog__meta">
              <span>30 February, 2024</span>
              <spna className="blog__dot"></spna>
              <span>Rock</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

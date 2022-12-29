import React from "react";
import "./Styles.css";

import { FaRegCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-white text-black py-10">
      <section className="lg:w-[85%] mx-auto flex lg:flex-row flex-col p-5 items-center">
        <div className="w-full order-2 lg:order-1" data-aos="zoom-in-up">
          <h3 className="font-bold text-2xl pb-3">About HUBNEX</h3>
          <p>
            Hubnex has been serving more than hundreds of clients from different
            industries in several countries. Being a complete business solutions
            and digital marketing company, we take pride in creating success
            stories. Every business is unique so we do not believe in the
            'one-size-fits-all' approach. Our list of services are diverse and
            you will get one stop for all your digital requirements.
          </p>
          <ul className="py-5">
            <li className="py-3">
            <FaRegCheckCircle className="inline-block text-blue-600 mr-2"/>
              <strong>Mission-</strong> At Hubnex our Mission is to provide
              innovative and effective integrated brand marketing and public
              relations solutions which help our clients grow their businesses
              and realise their marketing goals.
            </li>
            <li>
            <FaRegCheckCircle className="inline-block text-blue-600 mr-2"/><strong>Vision- </strong>
              At Hubnex our Vision is to Deliver result oriented brand marketing
              programs and public relations campaigns that enhance our clients
              awareness, improve their sales and foster their growth.
            </li>
          </ul>
          <a href="about.html" className="read-more-btn">
            Read More
          </a>
        </div>
        <div data-aos="zoom-in" className="order-1 lg:order-2">
          <img
            src="https://www.hubnex.in/assets/img/about.jpg"
            alt=""
            srcSet=""
          />
        </div>
      </section>
    </div>
  );
};

export default About;

import React from "react";

const Banner = () => {
  return (
    <div className="px-5 py-20 lg:w-[85%] mx-auto">
      <div className="flex flex-col lg:flex-row justify-content-center my-10 items-center gap-10">
        <div data-aos="zoom-in-up" className="order-2 lg:order-1">
          <h1 className="text-6xl font-bold">
            We have innovative team to take care of your preferences
          </h1>
          <h2 className="py-5">
            Hubnex is a Gurgaon headquartered global venture which specialises
            in scaling up established MSMEs and start up businesses across
            various industries such as hospitality, FMCG, technology, services
            and so on.{" "}
          </h2>
          <div className="mt-10">
            <a href="s" className="border-4 border-white p-3 rounded-lg tracking-widest">
              Get Started
            </a>
          </div>
        </div>
        <div data-aos="fade-up-left" className="order-1 lg:order-2">
          <img
            src="https://www.hubnex.in/assets/img/hero-img.png"
            className="img-fluid animated"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

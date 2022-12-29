import React, { useState } from "react";
import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaQuestionCircle,
} from "react-icons/fa";

const FAQ = () => {
  const [openFaq1, setOpenFaq1] = useState(true);
  const [openFaq2, setOpenFaq2] = useState(false);
  const [openFaq3, setOpenFaq3] = useState(false);
  const [openFaq4, setOpenFaq4] = useState(false);
  const [openFaq5, setOpenFaq5] = useState(false);
  const [openFaq6, setOpenFaq6] = useState(false);
  const [openFaq7, setOpenFaq7] = useState(false);
  return (
    <section className=" faq py-20">
      <div className="lg:w-[85%] mx-auto flex flex-col gap-5">
      <div className="section-title">
          <h2 className="text-center">Frequently Asked Questions</h2>
         
        </div>
      <div className="w-full rounded-lg bg-white text-black py-4">
        <div data-aos="fade-right"
          className="flex justify-around px-10 items-center w-full cursor-pointer py-4"
          onClick={() => setOpenFaq1(!openFaq1)}
        >
          <div className="w-full">
            <h4 className="text-lg font-semibold text-black flex items-center gap-4">
              <FaQuestionCircle /> <span>How do you increase sales?</span>
            </h4>
          </div>
          {openFaq1 ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
        </div>
        {openFaq1 && (
          <div className=" px-10">
            <hr />
            <p className="py-3 text-base leading-relaxed text-body-color">
              There are many ways to increase sales, even when working with a
              limited budget. The best way to increase sales is to grow the
              number of leads or customers in your sales funnel. By effectively
              marketing your business you can increase your number of qualified
              leads and potential sales.
            </p>
          </div>
        )}
      </div>
      <div className="w-full rounded-lg bg-white text-black py-4">
        <div data-aos="fade-right"
          className="flex justify-around px-10 items-center w-full cursor-pointer py-4"
          onClick={() => setOpenFaq2(!openFaq2)}
        >
          <div className="w-full">
            <h4 className="text-lg font-semibold text-black flex items-center gap-4">
              <FaQuestionCircle />{" "}
              <span>How do I get more customers for my Business?</span>
            </h4>
          </div>
          {openFaq2 ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
        </div>
        {openFaq2 && (
          <div className=" px-10">
            <hr />
            <p className="py-3 text-base leading-relaxed text-body-color">
              If you have your lead generation strategy and process in place,
              then it's time to ramp up your marketing efforts to grow the
              number of leads in your funnel. Identify your target audience and
              where you can reach them, plan an effective marketing strategy
              with clear steps and objectives, then implement your strategy and
              measure its results. At Hubnex we help you to get more customers
              for your Business.
            </p>
          </div>
        )}
      </div>
      <div className="w-full rounded-lg bg-white text-black py-4">
        <div data-aos="fade-right"
          className="flex justify-around px-10 items-center w-full cursor-pointer py-4"
          onClick={() => setOpenFaq3(!openFaq3)}
        >
          <div className="w-full">
            <h4 className="text-lg font-semibold text-black flex items-center gap-4">
              <FaQuestionCircle />{" "}
              <span>
                What strategies would you use to generate quality leads?
              </span>
            </h4>
          </div>
          {openFaq3 ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
        </div>
        {openFaq3 && (
          <div className=" px-10">
            <hr />
            <p className="py-3 text-base leading-relaxed text-body-color">
              We are specialized in using digital marketing techniques to
              generate leads, both for ourselves and our clients. Using a range
              of methods, from driving organic traffic from Google to creating
              engaging content on social media, we are able to consistently
              drive targeted traffic that results in high-quality leads.
            </p>
          </div>
        )}
      </div>
      <div className="w-full rounded-lg bg-white text-black py-4">
        <div data-aos="fade-right"
          className="flex justify-around px-10 items-center w-full cursor-pointer py-4"
          onClick={() => setOpenFaq4(!openFaq4)}
        >
          <div className="w-full">
            <h4 className="text-lg font-semibold text-black flex items-center gap-4">
              <FaQuestionCircle />{" "}
              <span>What is Social Media Marketing (SMM)?</span>
            </h4>
          </div>
          {openFaq4 ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
        </div>
        {openFaq4 && (
          <div className=" px-10">
            <hr />
            <p className="py-3 text-base leading-relaxed text-body-color">
              Social Media Marketing (SMM) is a general term used to describe
              promoting your business on any of the variety of online channels
              that enable users to create and share content and participate in
              conversations in public and private communities. There are
              literally hundreds of social media channels to choose from such as
              Facebook, Twitter, LinkedIn, Instagram & YouTube.
            </p>
          </div>
        )}
      </div>
      <div className="w-full rounded-lg bg-white text-black py-4">
        <div data-aos="fade-right"
          className="flex justify-around px-10 items-center w-full cursor-pointer py-4"
          onClick={() => setOpenFaq5(!openFaq5)}
        >
          <div className="w-full">
            <h4 className="text-lg font-semibold text-black flex items-center gap-4">
              <FaQuestionCircle />{" "}
              <span>Is it worth it to advertise on Facebook?</span>
            </h4>
          </div>
          {openFaq5 ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
        </div>
        {openFaq5 && (
          <div className=" px-10">
            <hr />
            <p className="py-3 text-base leading-relaxed text-body-color">
              Allocating a budget to Facebook Advertising can be very worthwhile
              with an effective strategy set up. With ads you can reach your
              target audience through selecting an area, an age range and even a
              number of different spoken languages. You can control who sees
              your product, which will ultimately boost your website traffic and
              your conversions.
            </p>
          </div>
        )}
      </div>
      <div className="w-full rounded-lg bg-white text-black py-4">
        <div data-aos="fade-right"
          className="flex justify-around px-10 items-center w-full cursor-pointer py-4"
          onClick={() => setOpenFaq6(!openFaq6)}
        >
          <div className="w-full">
            <h4 className="text-lg font-semibold text-black flex items-center gap-4">
              <FaQuestionCircle />{" "}
              <span>Is Digital Marketing cost effective?</span>
            </h4>
          </div>
          {openFaq6 ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
        </div>
        {openFaq6 && (
          <div className=" px-10">
            <hr />
            <p className="py-3 text-base leading-relaxed text-body-color">
              Yes, digital marketing is one of the most cost-effective forms of
              marketing available to businesses. It's easier to accurately
              measure the results of your marketing campaigns than other
              traditional forms of marketing, which allows you to make informed
              decisions about the value it provides. A well-planned digital
              marketing campaign can result in significant returns when
              implemented effectively for a relatively modest investment.
            </p>
          </div>
        )}
      </div>
      <div className="w-full rounded-lg bg-white text-black py-4">
        <div data-aos="fade-right"
          className="flex justify-around px-10 items-center w-full cursor-pointer py-4"
          onClick={() => setOpenFaq7(!openFaq7)}
        >
          <div className="w-full">
            <h4 className="text-lg font-semibold text-black flex items-center gap-4">
              <FaQuestionCircle />{" "}
              <span>How long does a new website take to design & develop?</span>
            </h4>
          </div>
          {openFaq7 ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
        </div>
        {openFaq7 && (
          <div className=" px-10">
            <hr />
            <p className="py-3 text-base leading-relaxed text-body-color">
              There are many ways to increase sales, even when working with a
              limited budget. The best way to increase sales is to grow the
              number of leads or customers in your sales funnel. By effectively
              marketing your business you can increase your number of qualified
              leads and potential sales.
            </p>
          </div>
        )}
      </div>
      </div>
    </section>
  );
};

export default FAQ;

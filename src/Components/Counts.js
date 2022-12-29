import React from "react";
import "./Styles.css";
import CountUp from "react-countup";

const Counts = () => {
  return (
    <div>
      <section className="counts-section">
        <div className="p-3 lg:w-[85%] mx-auto">
          <div className="lg:flex justify-between text-center">
            <div className="py-3">
              <span className="text-6xl font-bold text-center">
                <CountUp start={0} end={200} duration={2}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </span>

              <p>Businesses Digitized</p>
            </div>

            <div className="py-3">
              <span className="text-6xl font-bold text-center">
                <CountUp start={0} end={50} duration={2}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </span>
              <p>Selling Products</p>
            </div>

            <div className="py-3">
              <span className="text-6xl font-bold text-center">
                <CountUp start={0} end={130} duration={2}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </span>
              <p>Businesses Making Profits</p>
            </div>

            <div className="py-3">
              <span className="text-6xl font-bold text-center">
                <CountUp start={0} end={1000} duration={2}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </span>
              <p>Business Conversion </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counts;

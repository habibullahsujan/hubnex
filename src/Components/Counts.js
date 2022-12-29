import React from "react";
import { CountUp } from "use-count-up";
import "./Styles.css";

const Counts = () => {
  return (
    <div>
      <section className="counts-section">
        <div className="p-3 lg:w-[85%] mx-auto">
          <div className="lg:flex justify-between text-center">
            <div className="py-3">
              <span className="text-6xl font-bold text-center">
                <CountUp isCounting start={0} end={200} />
              </span>

              <p>Businesses Digitized</p>
            </div>

            <div className="py-3">
              <span className="text-6xl font-bold text-center">
                <CountUp isCounting start={0} end={50} />
              </span>
              <p>Selling Products</p>
            </div>

            <div className="py-3">
              <span className="text-6xl font-bold text-center">
                {" "}
                <CountUp isCounting start={0} end={130} />
              </span>
              <p>Businesses Making Profits</p>
            </div>

            <div className="py-3">
              <span className="text-6xl font-bold text-center">
                {" "}
                <CountUp isCounting start={0} end={1000} />
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

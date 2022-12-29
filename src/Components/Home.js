import React, { useEffect, useState } from "react";
import About from "./About";
import Banner from "./Banner";
import Counts from "./Counts";
import FAQ from "./FAQ";
import Feature from "./Feature";
import Footer from "./Footer";
import Header from "./Header";
import Services from "./Services";
import Testimonials from "./Testimonials";
import "./Styles.css";
import { RingLoader } from "react-spinners";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
      <div className="h-[100vh] flex items-center justify-center w-full">  <RingLoader color="#36d7b7" /></div>
      ) : (
        <div>
          <Header />
          <Banner />
          <About />
          <Counts />
          <Services />
          <Feature />
          <section className="testimonial-section text-black text-center">
            <div className="lg:w-[80%] mx-auto py-10">
              <div className="section-title">
                <h2>Testimonials</h2>
                <p>What's Our Clients Says About Us</p>
              </div>
              <Testimonials />
            </div>
          </section>
          <FAQ />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;

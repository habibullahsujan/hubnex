import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonial-item text-gray-400  relative bg-white py-10 rounded-xl px-5">
            <h4>
              <span>
                {" "}
                <FaQuoteLeft className="inline-block h-8 w-8 mr-3" />
                Hubnex is a team of marketing enthusiasts who were always have
                new and creative ways to promote your brand. Best wishes for the
                future. Really Recomended.
                <FaQuoteRight className="inline-block h-8 w-8 mr-3" />
              </span>
            </h4>
            <div  className="absolute ">
              <img
               
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <h3 className="text-lg font-bold">Jamie Langman</h3>
              <h4 className="text-sm">Entrepreneur, Netherlands</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide> <div className="testimonial-item text-gray-400  relative bg-white py-10 rounded-xl px-5">
            <h4>
              <span>
                {" "}
                <FaQuoteLeft className="inline-block h-8 w-8 mr-3" />
                Hubnex is a team of marketing enthusiasts who were always have
                new and creative ways to promote your brand. Best wishes for the
                future. Really Recomended.
                <FaQuoteRight className="inline-block h-8 w-8 mr-3" />
              </span>
            </h4>
            <div  className="absolute ">
              <img
               
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <h3 className="text-lg font-bold">Jamie Langman</h3>
              <h4 className="text-sm">Entrepreneur, Netherlands</h4>
            </div>
          </div></SwiperSlide>
        <SwiperSlide> <div className="testimonial-item text-gray-400  relative bg-white py-10 rounded-xl px-5">
            <h4>
              <span>
                {" "}
                <FaQuoteLeft className="inline-block h-8 w-8 mr-3" />
                Hubnex is a team of marketing enthusiasts who were always have
                new and creative ways to promote your brand. Best wishes for the
                future. Really Recomended.
                <FaQuoteRight className="inline-block h-8 w-8 mr-3" />
              </span>
            </h4>
            <div  className="absolute ">
              <img
               
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <h3 className="text-lg font-bold">Jamie Langman</h3>
              <h4 className="text-sm">Entrepreneur, Netherlands</h4>
            </div>
          </div></SwiperSlide>
        <SwiperSlide> <div className="testimonial-item text-gray-400  relative bg-white py-10 rounded-xl px-5">
            <h4>
              <span>
                {" "}
                <FaQuoteLeft className="inline-block h-8 w-8 mr-3" />
                Hubnex is a team of marketing enthusiasts who were always have
                new and creative ways to promote your brand. Best wishes for the
                future. Really Recomended.
                <FaQuoteRight className="inline-block h-8 w-8 mr-3" />
              </span>
            </h4>
            <div  className="absolute ">
              <img
               
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <h3 className="text-lg font-bold">Jamie Langman</h3>
              <h4 className="text-sm">Entrepreneur, Netherlands</h4>
            </div>
          </div></SwiperSlide>
        <SwiperSlide> <div className="testimonial-item text-gray-400  relative bg-white py-10 rounded-xl px-5">
            <h4>
              <span>
                {" "}
                <FaQuoteLeft className="inline-block h-8 w-8 mr-3" />
                Hubnex is a team of marketing enthusiasts who were always have
                new and creative ways to promote your brand. Best wishes for the
                future. Really Recomended.
                <FaQuoteRight className="inline-block h-8 w-8 mr-3" />
              </span>
            </h4>
            <div  className="absolute ">
              <img
               
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <h3 className="text-lg font-bold">Jamie Langman</h3>
              <h4 className="text-sm">Entrepreneur, Netherlands</h4>
            </div>
          </div></SwiperSlide>
        <SwiperSlide> <div className="testimonial-item text-gray-400  relative bg-white py-10 rounded-xl px-5">
            <h4>
              <span>
                {" "}
                <FaQuoteLeft className="inline-block h-8 w-8 mr-3" />
                Hubnex is a team of marketing enthusiasts who were always have
                new and creative ways to promote your brand. Best wishes for the
                future. Really Recomended.
                <FaQuoteRight className="inline-block h-8 w-8 mr-3" />
              </span>
            </h4>
            <div  className="absolute ">
              <img
               
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <h3 className="text-lg font-bold">Jamie Langman</h3>
              <h4 className="text-sm">Entrepreneur, Netherlands</h4>
            </div>
          </div></SwiperSlide>
      </Swiper>
    </>
  );
}

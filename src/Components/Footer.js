import React from "react";
import { FaAngleRight, FaDiscord, FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Styles.css";

const Footer = () => {
  return (
    <footer className="p-6 pt-20">
      <div className="container grid grid-cols-2 mx-auto gap-y-8 sm:grid-cols-3 md:grid-cols-4 pb-6">
        <div className="flex flex-col ">
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <span>Hubnex Media INC.</span> #05, Huddle, Ground Floor, Tower-B,
            DLF Cyber City, Gurugram, Haryana-122002 Phone: +91 6392-750561
            Email: hello@hubnex.in
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-medium">Useful Links</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <a className="flex items-center gap-2" href="#h">
              <FaAngleRight />
              <span>Home</span>
            </a>
            <a className="flex items-center gap-2" href="#h">
              <FaAngleRight />
              <span>About Us</span>
            </a>
            <a className="flex items-center gap-2" href="#h">
              <FaAngleRight />
              <span>Refund Policy</span>
            </a>
            <a className="flex items-center gap-2" href="#h">
              <FaAngleRight />
              <span>Terms of Service</span>
            </a>
            <a className="flex items-center gap-2" href="#h">
              <FaAngleRight />
              <span>Privacy Policy</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-medium">Our Services</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <a className="flex items-center gap-2" href="#h">
              <FaAngleRight />
              <span>Website and App Development</span>
            </a>
            <a className="flex items-center gap-2" href="#h">
              <FaAngleRight />
              <span>Search Engine Optimization</span>
            </a>
            <a className="flex items-center gap-2" href="#h">
              <FaAngleRight />
              <span>Social Media Optimization</span>
            </a>
            <a className="flex items-center gap-2" href="#h">
              <FaAngleRight />
              <span>PR and Brand Management</span>
            </a>
            <a className="flex items-center gap-2" href="#h">
              <FaAngleRight />
              <span>Content Management</span>
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <h3>Join Our Newsletter</h3>
          <span>Subscribe For More</span>
          <form className="lg:flex">
            <input type="email" name="email" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
      <hr />
      <div className="lg:flex items-center justify-between gap-48 px-6 pt-12 text-sm none">
        <span>
          Hubnex is a leading Digital Marketing Agency with expertise in Lead
          Generation, Digital Marketing, Website & Mobile Application Designing
          & Development.& Election Management Campaigns Hubnex - is rated 4.5
          stars by https://www.facebook.com/hubnex/ Copyright © 2021 Hubnex. All
          Rights Reserved
        </span>
        <div className="flex gap-2 justify-center my-5">
            <FaFacebook className="h-8 w-8"/>
            <FaTwitter className="h-8 w-8"/>
            <FaLinkedin className="h-8 w-8"/>
            <FaInstagramSquare className="h-8 w-8"/>
            <FaDiscord className="h-8 w-8"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

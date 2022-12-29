import React, { useState } from "react";
import { FaStream } from "react-icons/fa";
import "./Styles.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:w-[85%] mx-auto py-3 ">
      <nav className="flex justify-between py-6 lg:mx-28 px-6" id="header">
        <div className="flex items-center lg:pl-0 pl-5">
          <span className="uppercase text-2xl font-bold">Hubnex.</span>
        </div>
        <div className="hidden gap-5 lg:flex">
          <ul className="flex gap-4 font-bold py-3">
            <li>
              {" "}
              <a href="#h">Home</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#h">About</a>{" "}
            </li>
            <li>
              {" "}
              <div>
                <div className="dropdown inline-block relative">
                  <button className=" font-semibold rounded inline-flex items-center">
                    <span className="mr-1">Services</span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden w-60 bg-white text-blue-900 p-2 cursor-pointer">
                    <li className="py-1">Website & App Development</li>
                    <li className="py-1">Search Engine Optimization</li>
                    <li className="py-1">Social Media Optimization</li>
                    <li className="py-1">PR & Brand Management</li>
                    <li className="py-1">Content Management</li>
                    <li className="py-1">Business Consulting</li>
                    <li className="py-1">Political Campaign Management</li>
                    <li className="py-1">Emerging Technology Services</li>
                    <li className="py-1">Outdoor Media Marketing</li>
                    <li className="py-1">Print Media</li>
                    <li className="py-1">Video Production</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              {" "}
              <a href="#h">Plans</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#h">Our Value</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#h">Contact</a>{" "}
            </li>
          </ul>
          <button>
            <a
              href="s"
              className="border-2 border-gray-400 p-3 rounded-lg tracking-widest"
            >
              Get Started
            </a>
          </button>
        </div>
        <div className="block lg:hidden relative pr-5">
          <button onClick={() => setOpen(!open)}>
            <FaStream />
          </button>
        </div>
        {open && (
          <div className="absolute top-16 left-5">
            {" "}
            <ul className="flex flex-col gap-4 font-bold py-3">
              <li>
                {" "}
                <a href="#h">Home</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#h">About</a>{" "}
              </li>
              <li>
                {" "}
                <div>
                  <div className="dropdown inline-block relative">
                    <button className=" font-semibold rounded inline-flex items-center">
                      <span className="mr-1">Services</span>
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                      </svg>
                    </button>
                    <ul className="dropdown-menu absolute hidden w-60 bg-white text-blue-900 p-2 cursor-pointer">
                      <li className="py-1">Website & App Development</li>
                      <li className="py-1">Search Engine Optimization</li>
                      <li className="py-1">Social Media Optimization</li>
                      <li className="py-1">PR & Brand Management</li>
                      <li className="py-1">Content Management</li>
                      <li className="py-1">Business Consulting</li>
                      <li className="py-1">Political Campaign Management</li>
                      <li className="py-1">Emerging Technology Services</li>
                      <li className="py-1">Outdoor Media Marketing</li>
                      <li className="py-1">Print Media</li>
                      <li className="py-1">Video Production</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                {" "}
                <a href="#h">Plans</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#h">Our Value</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#h">Contact</a>{" "}
              </li>
            </ul>
            <button>
              <a
                href="s"
                className="border-2 border-gray-400 p-3 rounded-lg tracking-widest"
              >
                Get Started
              </a>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;

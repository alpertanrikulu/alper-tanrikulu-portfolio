import React, { useEffect, useState } from "react";
import Logo from "../assets/svg/logo.svg";
import { HashLink } from "react-router-hash-link";
import "./styles/header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((state) => !state);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full mx-auto px-10 lg:px-24 py-2 z-[1100] ${
          scrolled && "navscrolled"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="">
            <a href="/">
              <img src={Logo} alt="Alper Tanrıkulu Logo" />
            </a>
          </div>
          <ul className="hidden md:flex text-white font-medium space-x-11 font-playfair">
            <li
              className={`navlinkli opacity-50 ${
                scrolled && "hover:text-sunny"
              }`}
            >
              <HashLink
                className="scrollMargin"
                aria-current="page"
                smooth
                to="/#summary"
              >
                Summary
              </HashLink>
            </li>
            <li
              className={`navlinkli opacity-50 ${
                scrolled && "hover:text-sunny"
              }`}
            >
              <HashLink aria-current="page" smooth to="/#skills">
                Skills
              </HashLink>
            </li>
            <li
              className={`navlinkli opacity-50 ${
                scrolled && "hover:text-sunny"
              }`}
            >
              <HashLink aria-current="page" smooth to="/#workexperiences">
                Work experiences
              </HashLink>
            </li>
            <li
              className={`navlinkli opacity-50 ${
                scrolled && "hover:text-sunny"
              }`}
            >
              <HashLink aria-current="page" smooth to="/#education">
                Education
              </HashLink>
            </li>
            <li className="navlinkli">
              <a
                className="!opacity-100 myButton1"
                aria-current="page"
                href="/contact"
              >
                Send me an email
              </a>
            </li>
          </ul>
          <button
            onClick={handleClick}
            id="menu-btn"
            className={`${
              isOpen && "open"
            } block hamburger md:hidden focus:outline-none`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <div
            id="menu"
            className={`absolute ${
              isOpen ? "flex" : "hidden"
            } flex-col items-center self-end py-5 mt-5 space-y-6 font-bold bg-midnight sm:w-auto sm:self-center left-6 right-6 rounded-lg border`}
          >
            <ul>
              <li className="text-sunny text-lg font-medium py-3">
                <HashLink
                  aria-current="page"
                  smooth
                  to="/#summary"
                  onClick={handleClick}
                >
                  Summary
                </HashLink>
                <hr className="text-white" />
              </li>
              <li className="text-sunny text-lg font-medium py-3">
                <HashLink
                  aria-current="page"
                  smooth
                  to="/#skills"
                  onClick={handleClick}
                >
                  Skills
                </HashLink>
                <hr className="text-white" />
              </li>
              <li className="text-sunny text-lg font-medium py-3">
                <HashLink
                  aria-current="page"
                  smooth
                  to="/#workexperiences"
                  onClick={handleClick}
                >
                  Work experiences
                </HashLink>
                <hr className="text-white" />
              </li>
              <li className="text-sunny text-lg font-medium py-3">
                <HashLink
                  aria-current="page"
                  smooth
                  to="/#education"
                  onClick={handleClick}
                >
                  Education
                </HashLink>
                <hr className="text-white" />
              </li>
              <li className="navlinkli mt-3">
                <a
                  className="!opacity-100 myButton1"
                  aria-current="page"
                  href="/contact"
                >
                  Send me an email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

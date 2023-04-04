import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMedia } from "react-use";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { PhoneSVG } from "images/index";
import NavLinks from "./NavLinks";
import NavLinksMobile from "./NavLinksMobile";
import "./Nav.scss";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isDesktop = useMedia("(min-width: 1024px)");

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function changeCurrentTheme() {
    if (document.getElementsByClassName("dark").length) {
      document.documentElement.classList.remove("dark");
      document.documentElement.dataset.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.dataset.theme = "dark";
    }
  }

  return (
    <nav
      className={`${isOpen ? "burger-menu-color" : ""} ${
        scrollPosition ? "Scrolled" : ""
      }
       fixed-nav border-b-2 border-gray-500 xl:container dark:border-gray-700`}
    >
      {isDesktop ? (
        <span className="nav-bg-dark dark:nav-bg-dark align-center flex h-16 items-start justify-between px-2 pt-6 xl:px-5">
          <div className="flex h-full">
            <Link to="/" className="logo-text">
              “АДИ-ВЕД”
            </Link>
            <NavLinks />
          </div>
          <div className="flex h-full items-start">
            <p className="mr-2 flex h-full cursor-pointer items-start md:mr-3 md:text-base xl:mr-8 xl:text-lg">
              <span className="mr-2 h-full ">
                <PhoneSVG />
              </span>
              <span className="number-text h-full">+7 (925) 802-95-54</span>
            </p>

            <label className="swap-rotate swap mr-5">
              <input type="checkbox" onClick={() => changeCurrentTheme()} />

              <svg
                className="swap-on h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-off h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            <label
              htmlFor="signup"
              className="nav-btn h-8 cursor-pointer text-white"
            >
              Записаться
            </label>
          </div>
        </span>
      ) : (
        <span className="align-center mx-2 flex items-center justify-between px-5 pb-3 pt-5">
          <Link to="/" className="logo-text">
            “АДИ-ВЕД”
          </Link>
          <button className="nav-btn hidden sm:block">Записаться</button>
          <div className="-mr-2 flex lg:hidden">
            <label className="swap-rotate swap mr-5">
              <input type="checkbox" onClick={() => changeCurrentTheme()} />

              <svg
                className="swap-on h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-off h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </span>
      )}
      {isOpen ? <NavLinksMobile /> : null}
    </nav>
  );
}

export default Nav;

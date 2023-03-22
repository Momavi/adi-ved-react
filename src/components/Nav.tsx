import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMedia } from "react-use";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { PhoneSVG, SunSVG } from "images/index";
import NavLinks from "./NavLinks";
import NavLinksMobile from "./NavLinksMobile";
import "./Nav.scss";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isDesktop = useMedia("(min-width: 1024px)");
  // const nav = useSelector((state: { nav: any }) => state.nav);

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

  // function changeCurrentTheme() {
  //   if (
  //   ) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }

  return (
    <nav
      className={`
       ${isOpen ? "burger-menu-color" : ""}
       ${scrollPosition ? "Scrolled" : ""}
       fixed-nav border-b-2 border-gray-700 md:container`}
    >
      {isDesktop ? (
        <span className="align-center flex h-16 items-start justify-between px-5 pt-6">
          <div className="flex h-full">
            <Link to="/" className="logo-text">
              “АДИ-ВЕД”
            </Link>
            <NavLinks />
          </div>
          <div className="flex">
            <p className="flex w-44 cursor-pointer md:mr-4 md:text-base xl:mr-8 xl:text-lg">
              <span className="mr-2 h-6">
                <PhoneSVG />
              </span>
              <span className="number-text">+7 (925) 802-95-54</span>
            </p>

            {/* <span
              className="mr-4 cursor-pointer"
              onClick={() => changeCurrentTheme()}
            >
              <SunSVG />
            </span> */}

            <button className="nav-btn">Записаться</button>
          </div>
        </span>
      ) : (
        <span className="align-center mx-2 flex items-center justify-between px-5 pb-3 pt-5">
          <Link to="/" className="logo-text">
            “АДИ-ВЕД”
          </Link>
          <button className="nav-btn hidden sm:block">Записаться</button>
          <div className="-mr-2 flex lg:hidden">
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

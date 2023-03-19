import { Link } from "react-router-dom";
import { useState } from "react";
import { useMedia } from "react-use";
import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import Place from "../images/place.svg";
import Phone from "../images/phone.svg";
import NavLinks from "./NavLinks";
import "./Nav.scss";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMedia("(min-width: 1024px)");

  const styles = {
    isOpen: "",
  };

  if (isOpen) {
    styles.isOpen = "burger-menu-color";
  }

  return (
    <nav
      className={`${styles.isOpen} fixed-nav border-b-2 border-gray-700 md:container`}
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
            <p className="flex w-44 md:mr-4 md:text-base xl:mr-8 xl:text-lg">
              <img src={Phone} alt="Phone" className="mr-1 h-6" />
              <span className="number-text">+7 (925) 802-95-54</span>
            </p>

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
      {isOpen && (
        <Transition
          show={isOpen}
          enter="transition duration-150 ease-out transform"
          enterFrom="opacity-0 scale-95 translate-y-1"
          enterTo="opacity-100 scale-100 translate-y-0"
          leave="transition duration-150 ease-out transform"
          leaveFrom="opacity-100 scale-100 translate-y-0"
          leaveTo="opacity-0 scale-95 translate-y-1"
        >
          {() => (
            <div
              className="burger-menu-color fixed w-full lg:hidden"
              id="mobile-menu"
            >
              <div className="flex flex-col items-center space-y-1 pt-4 pb-4 sm:px-1">
                <NavLink
                  to="/"
                  className="block rounded-md px-3 py-2 text-lg font-medium text-gray-300"
                >
                  О нас
                </NavLink>
                <NavLink
                  to="/price"
                  className="block rounded-md px-3 py-2 text-lg text-lg font-medium text-gray-300"
                >
                  Услуги
                </NavLink>
                <NavLink
                  to="/employees"
                  className="block rounded-md px-3 py-2 text-lg font-medium text-gray-300"
                >
                  Сотрудники
                </NavLink>
                <NavLink
                  to="/contact"
                  className="block rounded-md px-3 py-2 text-lg font-medium text-gray-300"
                >
                  Контакты
                </NavLink>
                <NavLink
                  to="/medcard"
                  className="block rounded-md px-3 py-2 text-lg font-medium text-gray-300"
                >
                  МедКарта
                </NavLink>
                <span className="flex flex-col items-center pt-24">
                  <button className="nav-btn visible mb-12 sm:invisible">
                    Записаться
                  </button>
                  <NavLink
                    to="/medcard"
                    className="block flex rounded-md px-3 py-2 text-base font-medium text-gray-300"
                  >
                    <img src={Phone} alt="Phone" className="mr-1 h-6" />
                    +7 (925) 802-95-54
                  </NavLink>
                  <NavLink
                    to="/medcard"
                    className="block flex rounded-md px-3 py-2 text-base font-medium text-gray-300"
                  >
                    <img src={Place} alt="Place" className="mr-1" />
                    улица Дмитриевского, дом 1, этаж 1
                  </NavLink>
                </span>
              </div>
            </div>
          )}
        </Transition>
      )}
    </nav>
  );
}

export default Nav;

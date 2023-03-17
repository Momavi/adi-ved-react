import { Link } from "react-router-dom";
import { useState } from "react";
import { useMedia } from "react-use";
import { Transition } from "@headlessui/react";
import NavLinks from "./NavLinks";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMedia("(min-width: 1024px)");

  function showBurgerMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="border-b-2 border-gray-700 pt-7 pb-3">
      {isDesktop ? (
        <span className="align-center flex items-center justify-between">
          <div className="flex">
            <Link to="/" className="logo-text">
              “АДИ-ВЕД”
            </Link>
            <NavLinks />
          </div>

          <div className="flex">
            <p className="number-text md:mr-4 md:text-base xl:mr-8 xl:text-lg">
              +7 (925) 802-95-54
            </p>

            <button className="nav-btn">Записаться</button>
          </div>
        </span>
      ) : (
        <span className="align-center mx-2 flex justify-between">
          <Link to="/" className="logo-text">
            “АДИ-ВЕД”
          </Link>
          <button className="nav-btn invisible sm:visible">Записаться</button>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
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
            <div className="md:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                <NavLink
                  to="/"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  О нас
                </NavLink>
                <NavLink
                  to="/price"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Услуги
                </NavLink>
                <NavLink
                  to="/employees"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Сотрудники
                </NavLink>
                <NavLink
                  to="/contact"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Контакты
                </NavLink>
                <NavLink
                  to="/medcard"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  МедКарта
                </NavLink>
              </div>
            </div>
          )}
        </Transition>
      )}
    </nav>
  );
}

export default Nav;

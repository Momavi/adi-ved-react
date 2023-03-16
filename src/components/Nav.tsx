import { Link } from "react-router-dom";
import { useState } from "react";
import { useMedia } from "react-use";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";
import "./Nav.scss";

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
          <FaBars className="burger-icon" onClick={showBurgerMenu} />
        </span>
      )}
    </nav>
  );
}

export default Nav;

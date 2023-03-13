import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

function Nav() {
  return (
    <nav className="navigation flex items-center justify-between border-b-2 border-gray-700 pt-7 pb-3">
      <div className="flex pl-4">
        <Link to="/" className="logo-text">
          “АДИ-ВЕД”
        </Link>
        <NavLinks />
      </div>

      <div className="flex pr-4">
        <p className="number-text mr-8">+7 (925) 802-95-54</p>
        <button className="nav-btn">Записаться</button>
      </div>
    </nav>
  );
}

export default Nav;

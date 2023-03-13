import {  Link } from "react-router-dom";

function NavLinks() {
  return (
    <ul className="nav-text ml-14 flex ">
      <li className="ml-4">
        <Link to="/">О нас</Link>
      </li>
      <li className="ml-4">
        <Link to="/price">Услуги</Link>
      </li>
      <li className="ml-4">
        <Link to="/employees">Сотрудники</Link>
      </li>
      <li className="ml-4">
        <Link to="/contact">Контакты</Link>
      </li>
      <li className="ml-4">
        <Link to="/medcard">МедКарта</Link>
      </li>
    </ul>
  );
}

export default NavLinks;

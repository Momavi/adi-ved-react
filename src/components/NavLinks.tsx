import { NavLink } from "react-router-dom";

interface NavLinkProps {
  to: string;
  text: string;
}

function NavLinks(): JSX.Element {
  const links: NavLinkProps[] = [
    { to: "/", text: "О нас" },
    { to: "/price", text: "Услуги" },
    { to: "/employees", text: "Сотрудники" },
    { to: "/contact", text: "Контакты" },
    { to: "/medcard", text: "МедКарта" },
  ];

  return (
    <ul className="nav-text ml-14 flex">
      {links.map(({ to, text }) => (
        <li key={to} className="ml-4">
          <NavLink to={to} className='nav-link'>
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;

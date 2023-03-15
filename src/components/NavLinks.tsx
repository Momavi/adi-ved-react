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
    <ul className="nav-text md:ml-2 xl:ml-14 flex">
      {links.map(({ to, text }) => (
        <li key={to} className="md:ml-3 xl:ml-4">
          <NavLink to={to} className="md:text-base xl:text-lg">
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;

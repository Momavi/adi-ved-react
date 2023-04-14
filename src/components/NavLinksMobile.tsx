import { NavLink } from "react-router-dom";
import { PlaceSVG, PhoneSVG } from "images/index";
import { Transition } from "@headlessui/react";

interface LinksTypes {
  to: string;
  text: string;
}

const Links: LinksTypes[] = [
  { to: "/", text: "О нас" },
  { to: "/price", text: "Услуги" },
  { to: "/employees", text: "Сотрудники" },
  { to: "/contact", text: "Контакты" },
  { to: "/medcard", text: "МедКарта" },
];

function NavLinksMobile() {
  return (
    <Transition
      show={true}
      enter="transition duration-150 ease-out transform"
      enterFrom="opacity-0 scale-95 translate-y-1"
      enterTo="opacity-100 scale-100 translate-y-0"
      leave="transition duration-150 ease-out transform"
      leaveFrom="opacity-100 scale-100 translate-y-0"
      leaveTo="opacity-0 scale-95 translate-y-1"
    >
      <div
        className="burger-menu-color fixed w-full lg:hidden"
        id="mobile-menu"
      >
        <div className="flex flex-col items-center space-y-1 pt-4 pb-4 sm:px-1">
          {Links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="block rounded-sm px-3 pt-4 pb-0 text-lg font-medium"
            >
              {link.text}
            </NavLink>
          ))}
          <span className="flex flex-col items-center pt-12">
            <button className="nav-btn visible sm:invisible">Записаться</button>
            <span className="nav-link flex rounded-md px-3 py-2 text-base font-medium">
              <span className="mr-1 h-6">
                <PhoneSVG />
              </span>
              +7 (925) 802-95-54
            </span>
            <span className="nav-link flex rounded-md px-3 py-2 text-base font-medium">
              <span className="mr-1">
                <PlaceSVG />
              </span>
              улица Дмитриевского, дом 1, этаж 1
            </span>
          </span>
        </div>
      </div>
    </Transition>
  );
}

export default NavLinksMobile;

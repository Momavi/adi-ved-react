import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PathsRouter } from "./PathsRouter";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";

import "./App.scss";

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  // Пользователь использует темную тему
  document.documentElement.classList.add("dark");
  document.documentElement.dataset.theme = "dark";
} else {
  // Пользователь использует светлую тему
  document.documentElement.classList.remove("dark");
  document.documentElement.dataset.theme = "light";
}

function App() {
  const location = useLocation();
  const [className, setClassName] = useState("");

  useEffect(() => {
    setClassName(
      `mx-0 px-0 ${
        location.pathname === "/employees"
          ? ""
          : "sm:container oldmb:px-1 sm:mx-auto sm:px-2"
      }`
    );
  }, [location.pathname]);

  return (
        <div className="App">
          <div className="text-black transition-colors duration-1000 dark:text-white">
            <div className={className}>
              <header className="md:mx-3 xl:mx-6">
                <Nav />
              </header>
              <div className="mb-5">
                <PathsRouter />
              </div>
              <SignUp />
            </div>
          </div>
        </div>
  );
}

export default App;

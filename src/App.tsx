import { BrowserRouter as Router } from "react-router-dom";
import { PathsRouter } from "./PathsRouter";
import { YMaps } from "@pbe/react-yandex-maps";
import Nav from "./components/Nav";
import "./App.scss";
import SignUp from "./components/SignUp";

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
  return (
    <Router>
      <YMaps>
        <div className="App">
          {/* <div className="bg-image"></div> */}
          <div className="text-black transition-colors duration-1000 dark:text-white">
            <div className="mx-0 px-0 sm:container oldmb:px-1 sm:mx-auto sm:px-2">
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
      </YMaps>
    </Router>
  );
}

export default App;

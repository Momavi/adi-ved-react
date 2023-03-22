import { BrowserRouter as Router } from "react-router-dom";
import { PathsRouter } from "./PathsRouter";
import { YMaps } from "@pbe/react-yandex-maps";
import Nav from "./components/Nav";
import "./App.scss";

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function App() {
  return (
    <Router>
      <YMaps>
        <div className="App">
          {/* <div className="bg-image"></div> */}
          <div className="text-black dark:text-white">
            <div className="mx-0 px-0 sm:container oldmb:px-1 sm:mx-auto sm:px-2">
              <header className="md:mx-3 xl:mx-6">
                <Nav />
              </header>
              <div className="mb-16">
                <PathsRouter />
              </div>
            </div>
          </div>
        </div>
      </YMaps>
    </Router>
  );
}

export default App;

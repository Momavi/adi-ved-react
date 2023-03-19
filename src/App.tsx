import { BrowserRouter as Router } from "react-router-dom";
import { PathsRouter } from "./PathsRouter";
import { YMaps } from "@pbe/react-yandex-maps";
import Nav from "./components/Nav";
import "./App.scss";

function App() {
  return (
    <Router>
      <YMaps>
        <div className="App">
          <div className="bg-image"></div>
          <div className="dark:bg-dark dark:text-white">
            <div className="mx-0 px-0 sm:container sm:mx-auto sm:px-6 sm:px-2">
              <header className="md:mx-3 xl:mx-6">
                <Nav />
              </header>
              <div className="mt-36 mb-16 md:mt-48 xl:mt-48">
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

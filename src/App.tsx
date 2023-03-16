import { BrowserRouter as Router } from "react-router-dom";
import { PathsRouter } from "./PathsRouter";
import Nav from "./components/Nav";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="bg-image"></div>
        <div className="navigation dark:bg-dark dark:text-white">
          <div className="navigation mx-0 px-0 sm:container sm:mx-auto sm:px-6 sm:px-2">
            <header className="App-header  md:mx-3 xl:mx-6">
              <Nav />
            </header>
            <PathsRouter />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

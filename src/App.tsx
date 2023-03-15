import Nav from "./components/Nav";
import PathsRouter from "./PathsRouter";
import "./styles/main.scss";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-image"></div>
      <div className="App dark:bg-dark dark:text-white">
        <div className="container mx-0 sm:mx-auto">
          <header className="App-header md:mx-3 xl:mx-6">
            <Nav />
          </header>
          <PathsRouter />
        </div>
      </div>
    </Router>
  );
}

export default App;

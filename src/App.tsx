import Nav from "./components/Nav";
import PathsRouter from "./PathsRouter";
import "./styles/main.scss";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App dark:bg-dark dark:text-white">
      <div className="container">
        <header className="App-header">
          <Nav />
        </header>
        <PathsRouter />
      </div>
    </div>
    </Router>
  );
}

export default App;

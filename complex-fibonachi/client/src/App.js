import logo from "./logo.svg";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import OtherPage from "../otherPage";
import Fib from "../Fib";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">Home</Link>
        <Link to="/otherpage">otherpage</Link>
      </header>
      <Router>
        <Route path="/" component={Fib} />
        <Route path="/otherpage" component={OtherPage} />
      </Router>
    </div>
  );
}

export default App;

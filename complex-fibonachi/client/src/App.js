import logo from "./logo.svg";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import OtherPage from "./otherPage";
import Fib from "./Fib";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/otherpage">otherpage</Link>
        </header>
        <Route path="/" component={Fib} />
        <Route path="/otherpage" component={OtherPage} />
      </div>
    </Router>
  );
}

export default App;

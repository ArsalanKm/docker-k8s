import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import OtherPage from "./otherPage";
import Fib from "./Fib";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/otherpage">otherpage</Link>
        <Route path="/" component={Fib} />
        <Route path="/otherpage" component={OtherPage} />
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";
// Swithc Route
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route component={Routes}></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

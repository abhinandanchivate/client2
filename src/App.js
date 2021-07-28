import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { setAuthToken } from "./utils/setAuthToken";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/authAction";
// Swithc Route
// if we have the token then can we call setAuthToken()

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;

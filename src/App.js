import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Contacts from "./Contacts";
import Signup from "./Signup";
import Login from "./Login";
import Nav from "./components/Nav";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles.css";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Contacts />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

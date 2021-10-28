import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Contacts from "./Contacts";
import Signup from "./Signup";
import Login from "./Login";
import Nav from "./components/Nav";
import { useAuth } from "./lib/AuthContext";
import { BounceLoader } from "react-spinners";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles.css";
import { Toaster } from "react-hot-toast";

function App() {
  const { authLoading } = useAuth();

  if (authLoading) {
    return (
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BounceLoader color="#00D1B2" size="64" />
      </div>
    );
  }
  return (
    <Router>
      <Toaster/>
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

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import RSVP from "./pages/RSVP";
import AdminLogin from "./pages/AdminLogin";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/rsvp" component={RSVP} />
          <Route exact path="/admin" component={AdminLogin} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

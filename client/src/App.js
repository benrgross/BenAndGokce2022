import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

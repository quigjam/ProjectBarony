import React from "react";
import logo from "./logo.svg";
import "./styles/css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Error404 from "./pages/Error404.jsx";
import Nav from "./components/Nav";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

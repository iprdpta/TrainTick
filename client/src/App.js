import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyTickets from "./pages/MyTickets";
import Invoice from "./pages/Invoice";
import Admin from "./pages/Admin";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Barlow|Heebo|Josefin+Sans|Karla|Nunito|PT+Sans+Narrow|Spartan&display=swap"
        rel="stylesheet"
      ></link>
      <Router>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/invoice/:id">
            <Invoice />
          </Route>
          <Route path="/mytickets">
            <MyTickets />
          </Route>
          <Route path="/:username">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

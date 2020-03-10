import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import MyTickets from "./pages/MyTickets";
import Invoice from "./pages/Invoice";
import Admin from "./pages/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { getUser } from "./_actions/user";
import NavBar from "./component/NavBar";

function App(props) {
  useEffect(() => {
    props.getUser();
  }, []);
  const { loading, error, logedIn, user } = props.user;
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Barlow|Heebo|Josefin+Sans|Karla|Nunito|PT+Sans+Narrow|Spartan&display=swap"
        rel="stylesheet"
      ></link>
      <Router>
        <Switch>
          <Route path="/admin">
            {user.level === "Admin" ? <Admin /> : null}
          </Route>
          <Route path="/invoice/:id">
            <Invoice />
          </Route>
          <Route path="/mytickets">
            <MyTickets />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

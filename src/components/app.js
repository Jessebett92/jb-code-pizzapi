import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./auth/login";
import Home from "./pages/home";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: "NOT_LOGGED_IN"
    };
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnSuccesfulLogin = this.handleUnSuccesfulLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedIn: "LOGGED_IN"
    });
  }

  handleUnSuccesfulLogin() {
    this.setState({
      loggedIn: "NOT_LOGGED_IN"
    });
  }

  handleLogout() {
    this.setState({
      loggedIn: "NOT_LOGGED_IN"
    });
  }

  render() {
    return (
      <div className="app">
        <Router>
          <div className="components-to-render">
            <Switch>
              <Route
                exact
                path="/"
                component={Login}
                handleSuccessfulLogin={this.handleSuccessfulLogin}
                handleUnSuccesfulLogin={this.handleUnSuccesfulLogin}
              />
              <Route path="/home" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

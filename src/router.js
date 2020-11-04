import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Home } from "./Home";
import { Tab2 } from "../components/tab/tab2";
import { Tab3 } from "../components/tab/tab3";

export class Routers extends React.Component {
  render() {
    return (
      <Router>
        <div className="router">
          <Route exact path="/" component={Home}></Route>
          <Route path="/tab1" component={Tab1}></Route>
          <Route path="/tab2" component={Tab2}></Route>
          <Route path="/tab3" component={Tab3}></Route>
        </div>
      </Router>
    );
  }
}

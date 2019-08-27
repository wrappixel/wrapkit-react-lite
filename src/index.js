import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import './assets/scss/style.scss';

// pages for this product
import Components from "./views/components/components.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

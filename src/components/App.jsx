import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import RedirectRoute from "./RedirectRoute";
import Home from "./Home";


import "../styles/base.scss";

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <RedirectRoute path={"/ref/*"} />
        <Route
          render={({ location }) => (
            <h3 className="error">
              Error! Wrong url <code>{location.pathname}</code>
            </h3>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;

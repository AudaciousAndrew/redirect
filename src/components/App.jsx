import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import RedirectRoute from "./RedirectRoute";
import Home from "./Home";

const App = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <RedirectRoute path={"/ref/*"} />
        <Route
          render={({ location }) => (
            <h3>
              Error! Wrong url <code>{location.pathname}</code>
            </h3>
          )}
        />
      </Switch>
    </HashRouter>
  );
};

export default App;

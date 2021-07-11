import React from "react";
import { Route } from "react-router";

const RedirectRoute = (props) => {
  console.log(props);

  return (
    <Route
      {...props}
      render={() => {
        window.location.replace(`https://${props.computedMatch.params[0]}`);
        return null;
      }}
    />
  );
};

export default RedirectRoute;

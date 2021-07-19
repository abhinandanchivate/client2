import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../auth/Login";
//import Register2 from "../auth/Register2";
import Register3 from "../auth/Register3";
//import Register from "../auth/Register";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register3}></Route>
      </Switch>
    </div>
  );
};

export default Routes;

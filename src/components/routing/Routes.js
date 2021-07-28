import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../auth/Login";
//import Register2 from "../auth/Register2";
import Register3 from "../auth/Register3";
import Dashboard from "../dashboard/Dashboard";
import Alert from "../layout/Alert";
import AddExperience from "../profile/AddExperience";
import CreateProfile from "../profile/CreateProfile";
import PrivateRouting from "./PrivateRouting";
//import Register from "../auth/Register";

export const Routes = () => {
  return (
    <div>
      <Alert />
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register3}></Route>
        <PrivateRouting
          exact
          path="/dashboard"
          component={Dashboard}
        ></PrivateRouting>
        <PrivateRouting
          exact
          path="/create-profile"
          component={CreateProfile}
        ></PrivateRouting>
        <PrivateRouting
          exact
          path="/add-experience"
          component={AddExperience}
        ></PrivateRouting>
      </Switch>
    </div>
  );
};

export default Routes;

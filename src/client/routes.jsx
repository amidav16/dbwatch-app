import React from 'react';
import { Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./components/dashboard";
import NotFound from "./components/common/notfound";
import TaskLog from "./components/tasklog";

export default function Routes() {
  return (

      <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/logs" component={TaskLog} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
      </Switch>

  );
}
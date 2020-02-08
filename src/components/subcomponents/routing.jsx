import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "../home";
import WrongUrl from "./wrongUrl";
import Services from "../services";
import About from "../about";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={About} />
        <Route component={WrongUrl} />
      </Switch>
    </BrowserRouter>
  );
};

export default MyRoutes;

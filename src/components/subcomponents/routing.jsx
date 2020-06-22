import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "../home";
import WrongUrl from "./wrongUrl";
import Services from "../services";
import About from "../about";
import { PrivateRoute } from "../../firebase authentication/privateRoute";
import Navigation from "./NavigationBar";
import MyFooter from "./footer";
import Administration from "../administration";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Navigation style={{ position: "fixed" }} />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* protected route // to access /services user must be logged in */}
        <PrivateRoute exact path="/services" component={Services} />
        <Route exact path="/administration" component={Administration} />
        <Route exact path="/about" component={About} />
        <Route component={WrongUrl} />
      </Switch>
      <MyFooter />
    </BrowserRouter>
  );
};

export default MyRoutes;

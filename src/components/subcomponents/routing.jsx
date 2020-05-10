import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "../home";
import WrongUrl from "./wrongUrl";
import Services from "../services";
import About from "../about";
import { AuthProvider } from "../../firebase authentication/Auth";
import { PrivateRoute } from "../../firebase authentication/privateRoute";

const MyRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* protected route // to access /services user must be logged in */}
          <PrivateRoute exact path="/services" component={Services} />
          <Route exact path="/about" component={About} />
          {/* remove /login  because we shall use popup for login and register // it will not be a route */}
          <Route exact path="/login" component={Home} />
          <Route component={WrongUrl} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default MyRoutes;

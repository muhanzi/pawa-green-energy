import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import { useSelector } from "react-redux";

// get all props of <PrivateRoute/>
export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  const user_details = useSelector((state) => state.userSigning);
  const user_role = user_details.role ? user_details.role : "";

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (currentUser) {
          if (user_role === "customer") {
            return <RouteComponent {...routeProps} />;
          } else {
            return <Redirect to={"/"} />; // only customers can access this component
          }
        } else {
          return <Redirect to={"/"} />;
        }
      }}
    />
  );
};

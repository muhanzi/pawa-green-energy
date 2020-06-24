import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import { useSelector } from "react-redux";

// get all props of <AdminRoute/>
export const AdminRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  const user_details = useSelector((state) => state.userSigning);
  const user_role = user_details.role ? user_details.role : "";

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (currentUser) {
          if (user_role === "admin") {
            return <RouteComponent {...routeProps} />;
          } else {
            return <Redirect to={"/"} />; // other users don't have access to this component // only admins
          }
        } else {
          return <Redirect to={"/"} />;
        }
      }}
    />
  );
};

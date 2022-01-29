import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginSelectors } from "../store/login";
import Login from "../containers/Login";

interface AuthRouteProps {
  children: React.ReactChild;
  path: string;
  exact?: boolean;
}

const AuthRoute: React.FC<AuthRouteProps> = ({
  children,
  path,
  exact = false,
}) => {
  const isAuthorized = useSelector(LoginSelectors.isAuthorized);
  console.log("isAuthorized:", isAuthorized);
  return (
    <Route path={path} exact={exact}>
      {isAuthorized ? children : <Login />}
    </Route>
  );
};

export default AuthRoute;

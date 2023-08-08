import React, { useEffect,useState } from "react";
import { Navigate, Route } from "react-router-dom";
import { getLoggedinUser, setAuthorization } from "../helpers/api_helper";
import { useDispatch } from "react-redux";

import { useProfile, checkAuthen } from "../Components/Hooks/UserHooks";

import { logoutUser, getUser } from "../slices/thunks";

const AuthProtected = (props) => {
  const dispatch = useDispatch();
  const userProfileSession = getLoggedinUser();
  var token = userProfileSession && userProfileSession["access_token"];
  dispatch(getUser(userProfileSession));
  
  if (token) {
    setAuthorization(token);
    const check = checkAuthen();
    check.then((result) => {
      if (result.isCheck) {
        setAuthorization(token);
      } else {
        dispatch(logoutUser());
      }
    });
  } else if (!token) {
    dispatch(logoutUser());
  }
  
  /*
    Navigate is un-auth access protected routes via url
    */
  if (!token) {
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }

  return <>{props.children}</>;
};

const AccessRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            {" "}
            <Component {...props} />{" "}
          </>
        );
      }}
    />
  );
};

export { AuthProtected, AccessRoute };

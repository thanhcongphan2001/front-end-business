import React, { useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
// import { setAuthorization } from "../helpers/api_helper";
// import { useDispatch } from "react-redux";

import { useProfile, checkAuthen } from "../Components/Hooks/UserHooks";

// import { logoutUser, getUser } from "../slices/auth/login/thunk";

const AuthNoneProtected = (props) => {
  //   const dispatch = useDispatch();
  const { userProfile, loading, token } = useProfile();

  /*
    Navigate is un-auth access protected routes via url
    */
  if (token) {
    return (
      <Navigate
        to={{ pathname: "/dashboard", state: { from: props.location } }}
      />
    );
  }

  return <>{props.children}</>;
};

export { AuthNoneProtected };

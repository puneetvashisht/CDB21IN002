import { useAuth } from "./context/auth";

import {
    Route, Redirect
  
  } from "react-router-dom";

function PrivateRoute({ component:Component, ...rest }) {
    let {isLoggedIn} = useAuth();
    return (
      <Route
        {...rest}
        render={props =>
          isLoggedIn ? (
            <Component {...props}/>
          ) : (
            <Redirect
              to="/login"/>
          )
        }
      />
    );
  }


  export default PrivateRoute;
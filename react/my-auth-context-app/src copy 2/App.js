import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import {
  BrowserRouter as Router,
  Route

} from "react-router-dom";
import { AuthContext } from './context/auth';
import Admin from './components/Admin/Admin';
import PrivateRoute from './PrivateRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  // };

  const loginHandler = (login) =>{

    // logic to read token from storate, validate it...
    setIsLoggedIn(login)
  }

  return (
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn, setIsLoggedIn: loginHandler}}>
      <Router>
        <MainHeader></MainHeader>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/admin" component={Admin}/>

      </Router>

      {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main> */}
    </AuthContext.Provider>
  );
}

export default App;

import React, { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import MainHeader from './components/MainHeader/MainHeader';
import { AuthContext } from './context/auth';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (login) => {
    setIsLoggedIn(login);
  }

  return (
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn, setIsLoggedIn: loginHandler}}>
      {/* <MainHeader isAuthenticated ={isLoggedIn}  onLogin={loginHandler}></MainHeader> */}
      <MainHeader></MainHeader>
      <h2>Login Example</h2>
    
      {isLoggedIn && (<Home></Home>)}
      {!isLoggedIn && (<Login></Login>)}
    </AuthContext.Provider>
  );
}

export default App;

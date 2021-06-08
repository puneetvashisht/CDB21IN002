import React from 'react';
import {useAuth} from '../context/auth'


const Login = (props) => {

    const {isLoggedIn, setIsLoggedIn} = useAuth();
    console.log('In navigation comp: ', isLoggedIn)
  return (
    <>
      <h1>Login Component!</h1>
      <button onClick={()=>setIsLoggedIn(true)}>Toggle Login</button>
      </>
  );
};

export default Login;

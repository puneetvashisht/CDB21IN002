import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';

import classes from './Navigation.module.css';


const Navigation = (props) => {

  const {isLoggedIn, setIsLoggedIn} = useAuth();
  console.log('In navigation comp: ', isLoggedIn)
  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

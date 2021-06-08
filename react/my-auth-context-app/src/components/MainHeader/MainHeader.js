import React from 'react';
import classes from './MainHeader.module.css';
import Navigation from './Navigation'


const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>My App</h1>
      {/* <Navigation isAuthenticated={props.isAuthenticated} onLogin={props.onLogin}></Navigation> */}
      <Navigation></Navigation>
    </header>
  );
};

export default MainHeader;

import React from 'react';
import classes from './MainNavbar.module.css';

const MainNavbar = () => {
    return ( 
    <nav className={classes.nav}>
        <div className={classes.item}>
        <a href="/profile">Profile</a>
        </div>
        <div className={classes.item}>
        <a href="/dialogs">Messages</a>
        </div>
        <div className={classes.item}>
        <a href="#top">News</a>
        </div>
    </nav>
    );
}

export default MainNavbar;
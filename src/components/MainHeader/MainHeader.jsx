import React from 'react';
import classes from './MainHeader.module.css';
import logo from './logo.png'

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <img src={logo} alt='logo' />
        </header>
    );
}

export default MainHeader;
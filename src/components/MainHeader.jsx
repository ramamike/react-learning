import React from 'react';
import classes from './MainHeader.module.css';

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN3HMy9shgGFM8-lycYiMIWeQNitH94QsDuA&usqp=CAU' alt="description"/>
        </header>
    );
}

export default MainHeader;
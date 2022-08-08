import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './MainNavbar.module.css';

const MainNavbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile"
                    className={({ isActive }) => (isActive ? s.linkActive : s.linkNotActive)} >
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs"
                    className={({ isActive }) => (isActive ? s.linkActive : s.linkNotActive)}>
                    Messages
                </NavLink>
            </div>
        </nav>
    );
}

export default MainNavbar;
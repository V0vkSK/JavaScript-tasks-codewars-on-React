import { NavLink } from 'react-router-dom';
// import { useState } from 'react';
import styles from './DropMenu.module.scss';
// import isShow from '../Header/Header';

const DropMenu = props => {
    const trigger = props.isShow;
    return (
        <div className={trigger ? styles.container.activen : styles.container}>
            <NavLink
                exact
                className={({ isActive }) =>
                    isActive ? styles.active : styles.nav
                }
                to="/books-page"
                onClick={props.onClick}
            >
                Books
            </NavLink>
            <NavLink
                exact
                className={({ isActive }) =>
                    isActive ? styles.active : styles.nav
                }
                to="/authors-page"
                onClick={props.onClick}
            >
                Authors of books
            </NavLink>
        </div>
    );
};

export default DropMenu;

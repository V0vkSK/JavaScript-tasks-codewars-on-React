import styles from './Header.module.scss';
import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import DropMenu from '../DropMenu/DropMenu';

const Header = () => {
    const [isShow, setIsShow] = useState(false);
    const onClick = () => setIsShow(!isShow);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <NavLink className={styles.title} to="/">
                    Web <span>VSK</span> Studio
                </NavLink>

                <nav className={styles.list__nav}>
                    <NavLink
                        exact
                        className={({ isActive }) =>
                            isActive ? styles.active : styles.nav
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        exact
                        className={({ isActive }) =>
                            isActive ? styles.active : styles.nav
                        }
                        to="/feedback-page"
                    >
                        Feedback
                    </NavLink>
                    <NavLink
                        exact
                        className={({ isActive }) =>
                            isActive ? styles.active : styles.nav
                        }
                        to="/todo-page"
                    >
                        ToDo
                    </NavLink>
                    <NavLink
                        className={styles.nav}
                        onClick={onClick}
                        to="/books-page"
                    >
                        Books
                    </NavLink>

                    <NavLink
                        exact
                        className={({ isActive }) =>
                            isActive ? styles.active : styles.nav
                        }
                        to="/tests"
                    >
                        Tests
                    </NavLink>
                    <div className={styles.drop}>
                        <DropMenu isShow={isShow} onClick={onClick} />
                    </div>
                </nav>
            </div>
        </header>
    );
};
export default Header;

import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <NavLink className={styles.title} to="/">
                    Web <span>VSK</span> Studio
                </NavLink>
                <NavLink className={styles.nav} to="/feedback-page">
                    Feedback
                </NavLink>
            </div>
        </header>
    );
};
export default Header;

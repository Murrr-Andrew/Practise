import { Outlet } from "react-router-dom";

import AppNav from "./AppNav";
import Logo from "./Logo";

import styles from "./Sidebar.module.css";

function Sidebar() {
    return <div className={styles.sidebar}>
        <Logo />
        <AppNav />

        <Outlet />

        <p>List of cities</p>
        <footer className={styles.footer}>
            <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()}</p> by WorldWise Inc.
        </footer>
    </div>;
}

export default Sidebar;

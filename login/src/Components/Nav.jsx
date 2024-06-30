import styles from '../MainPage/MainPage.module.css'

function Nav() {
    return(
        <div className={styles.nav}>
            <div className={styles.navContent}>Profile</div>
            <div className={styles.navContent}>Apply for leave</div>
            <div className={styles.navContent}>Leave Status</div>
            <div className={styles.navContent}>Leave History</div>
            <div className={styles.navContent2}>Logout</div>
        </div>
    );

}

export default Nav
import styles from './MainPage.module.css'
import ProfilePic from 'C:/Users/Adnan Sawalha/Desktop/hr self service project/login/src/assets/profile_picture.jpg'

function MainPage() {

    return(
        <div className = {styles.bodyWrapper}>
            <div className={styles.nav}>
                <div className={styles.navContent}>Profile</div>
                <div className={styles.navContent}>Apply for leave</div>
                <div className={styles.navContent}>Leave Status</div>
                <div className={styles.navContent}>Leave History</div>
                <div className={styles.navContent2}>Logout</div>
            </div>

            <div className={styles.left}>
                <div className={styles.welcome}>Welcome, Admin</div>

                <div className={styles.info}>Adnan</div>

            </div>

            <div className={styles.containers}>
                <div className={styles.container}></div>
                <div className={styles.container}></div>
                <div className={styles.container}></div>
                <div className={styles.container}></div>
                <div className={styles.container}></div>
                <div className={styles.container}></div>
            </div>

            
        </div>
    );
}

export default MainPage
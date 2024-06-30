import Nav from '../Components/Nav';
import styles from './MainPage.module.css'


function MainPage() {

    return(
        <div className = {styles.bodyWrapper}>
            
            <Nav/> 
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
import styles from "../MainPage/MainPage.module.css";
import LogoutIcon from "../assets/Logout.webp";
function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.navContent}>Profile</div>
      <div className={styles.navContent}>Apply for leave</div>
      <div className={styles.navContent}>Leave Status</div>
      <div className={styles.navContent}>Leave History</div>
      <img src={LogoutIcon} className={styles.logout}></img>
    </div>
  );
}

export default Nav;

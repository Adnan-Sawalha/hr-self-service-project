import styles from "../MainPage/MainPage.module.css";

function Container() {
  return (
    <div className={styles.container}>
      <div className={styles.container_text_top}>Casual Leave</div>
      {/* <div className={styles.circleInner}>    
                <svg height="100%" width="100%" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" className={styles.circle} />
                </svg>
                <div className ={styles.circleText}>05/07</div>
            </div> */}

      <div className={`${styles.progress} ${styles.blue}`}>
        <span className={styles.progress_left}>
          <span className={styles.progress_bar}></span>
        </span>
        <span className={styles.progress_right}>
          <span className={styles.progress_bar}></span>
        </span>
        <div className={styles.progress_value}>
          <span>90%</span>
        </div>
      </div>

      <div className={styles.container_text_bottom}>
        Avaliable - 07 <br /> Used - 05
      </div>
    </div>
  );
}

export default Container;

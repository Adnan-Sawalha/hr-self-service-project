import styles from '../MainPage/MainPage.module.css'
import withdrawlButton from '../assets/tableQuit.png'


function tr() {
    return(
        <tr>
            <td className={styles.tableCont2}>Lorem, ipsum.</td>
            <td className={styles.tableCont2}>Lorem, ipsum.</td>
            <td className={styles.tableCont2}>Lorem, ipsum.</td>
            <td className={styles.tableCont2}>Lorem, ipsum.</td>
            <td className={styles.tableCont2}>Lorem, ipsum.</td>
            <td className={styles.tableCont2}><button><img src={withdrawlButton} alt="withdraw" /></button></td>
        </tr>
    );
}

export default tr
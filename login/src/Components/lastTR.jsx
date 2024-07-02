import styles from '../MainPage/MainPage.module.css'

function lastTR() {
    return(
        <tr>
            <td className={styles.tableCont} colSpan={5}> </td>
            <td className={styles.tableCont} ><button type='button'>+</button></td>
        </tr>
    );
}

export default lastTR
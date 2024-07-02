import styles from '../MainPage/MainPage.module.css'

function lastTR() {
    return(
        <tr>
            <td className={styles.tableCont} colSpan={5}> </td>
            <td className={styles.tableCont} ><div><button type='button'>+</button></div></td>
        </tr>
    );
}

export default lastTR
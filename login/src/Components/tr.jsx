import styles from "../MainPage/MainPage.module.css";
import withdrawlButton from "../assets/tableQuit.png";
function tr() {
  return (
    <tr>
      <td className={styles.tableCont1}>Lorem, ipsum.</td>
      <td className={styles.tableCont1}>Lorem, ipsum.</td>
      <td className={styles.tableCont1}>Lorem, ipsum.</td>
      <td className={styles.tableCont1}>Lorem, ipsum.</td>
      <td className={styles.tableCont1}>Lorem, ipsum.</td>
      <td className={styles.tableCont1}>
        {" "}
        <button>-</button>
      </td>
    </tr>
  );
}

export default tr;

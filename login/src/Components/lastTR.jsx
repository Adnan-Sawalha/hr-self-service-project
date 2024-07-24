import styles from "../MainPage/MainPage.module.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function lastTR() {
  return (
    <tr>
      <td className={styles.tableCont} colSpan={5}>
        {" "}
      </td>
      <td className={styles.tableCont}>
        <div>
          <Popup trigger={<button>+</button>} modal nested>
            {(close) => (
              <div className="modal">
                <div className="content">Welcome to GFG!!!</div>
                <div>
                  <button onClick={() => close()}>Close modal</button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </td>
    </tr>
  );
}

export default lastTR;

import React from "react";
import styles from "../MainPage/MainPage.module.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Form from "../Components/Form";

function lastTR() {
  return (
    <tr>
      <td className={styles.tableCont} colSpan={5}>
        {" "}
      </td>
      <td className={styles.tableCont}>
        <div>
          <Popup
            trigger={<button>+</button>}
            modal
            nested
            closeOnDocumentClick={false}
          >
            {(close) => <Form close={close} />}
          </Popup>
        </div>
      </td>
    </tr>
  );
}

export default lastTR;

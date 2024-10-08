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
            trigger={
              <button className={styles["add-btn"]}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                    ></path>
                  </svg>{" "}
                  Add
                </span>
              </button>
            }
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
